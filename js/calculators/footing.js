import { 
  renderInputPanel, 
  renderResultSummary, 
  renderStepTable,
  renderComplianceChecks,
  renderAssumptions,
  renderActionBar,
  getInputValues,
  setInputValues,
  showToast,
  updateStickyBar,
  ICONS
} from '../utils/ui.js';
import { validate } from '../utils/validation.js';
import { saveInputs, loadInputs } from '../utils/storage.js';
import { getRebarByDia, getRebarArea } from '../data/rebar.js';
import { FCK_GRADES, FY_GRADES } from '../data/materials.js';
import { getShearStrength } from '../data/concrete.js';

const MODULE_ID = 'footing';

const INPUT_FIELDS_MATERIAL = [
  { id: 'fck', label: 'Concrete Grade (fck)', type: 'select', default: 25,
    options: FCK_GRADES.map(fck => ({ value: fck, label: `M${fck}` })),
    tooltip: 'Characteristic compressive strength' },
  { id: 'fy', label: 'Steel Grade (fy)', type: 'select', default: 500,
    options: FY_GRADES.map(fy => ({ value: fy, label: `Fe${fy}` })),
    tooltip: 'Yield strength of reinforcement' }
];

const INPUT_FIELDS_COLUMN = [
  { id: 'cx', label: 'Column Size X (cx)', unit: 'mm', default: 300, min: 200, max: 2000, step: 10, tooltip: 'Column dimension parallel to X-axis' },
  { id: 'cy', label: 'Column Size Y (cy)', unit: 'mm', default: 450, min: 200, max: 2000, step: 10, tooltip: 'Column dimension parallel to Y-axis' }
];

const INPUT_FIELDS_LOADS = [
  { id: 'p', label: 'Working Axial Load (P)', unit: 'kN', default: 1000, min: 10, max: 20000, step: 10, tooltip: 'Unfactored service load from column' },
  { id: 'sbc', label: 'Safe Bearing Capacity', unit: 'kN/m²', default: 200, min: 50, max: 1000, step: 10, tooltip: 'Allowable soil bearing capacity' }
];

const INPUT_FIELDS_DESIGN = [
  { id: 'cover', label: 'Clear Cover', unit: 'mm', default: 50, min: 40, max: 100, step: 5, tooltip: 'Minimum 50mm recommended for footing' },
  { id: 'bar_dia', label: 'Main Bar Dia (φ)', unit: 'mm', type: 'select', default: 12,
    options: [10, 12, 16, 20].map(d => ({ value: d, label: `${d} mm` })), tooltip: 'Preferred diameter for bottom reinforcement' }
];

function calculateIsolatedFooting() {
  const container = document.querySelector('.calculator-page');
  let resultsDiv = container.querySelector('#footing-results');
  if (!resultsDiv) {
    resultsDiv = document.createElement('div');
    resultsDiv.id = 'footing-results';
    container.appendChild(resultsDiv);
  }
  
  // 1. Validate inputs
  const rawInputs = getInputValues(container);
  
  const cx_val = validate(rawInputs.cx, 200, 2000, 'Column X');
  const cy_val = validate(rawInputs.cy, 200, 2000, 'Column Y');
  const p_val = validate(rawInputs.p, 10, 20000, 'Working Load');
  const sbc_val = validate(rawInputs.sbc, 50, 1000, 'SBC');
  
  if (!cx_val.valid || !cy_val.valid || !p_val.valid || !sbc_val.valid) {
    showToast('Please correct invalid fields before calculating.', 'error');
    return;
  }
  
  saveInputs(MODULE_ID, rawInputs);
  
  // 2. Extract Values
  const cx = parseFloat(rawInputs.cx); // mm
  const cy = parseFloat(rawInputs.cy); // mm
  const P = parseFloat(rawInputs.p); // kN
  const SBC = parseFloat(rawInputs.sbc); // kN/m2
  const cover = parseFloat(rawInputs.cover); // mm
  const fck = parseFloat(rawInputs.fck);
  const fy = parseFloat(rawInputs.fy);
  const barDia = parseFloat(rawInputs.bar_dia);
  
  // 3. Calculation Engine
  let steps = [];
  
  // Area of Footing
  const P_total = P * 1.1; // 10% extra for self weight of footing
  const Area_req = P_total / SBC; // m2
  
  steps.push({
    step: 1,
    title: 'Required Footing Area',
    formula: 'A = (P + 10% P) / SBC',
    result: "A,req = " + P_total.toFixed(0) + " / " + SBC + " = " + Area_req.toFixed(2) + " <span class=\"unit\">m²</span>"
  });
  
  // Proportions: Try to maintain same overhang
  const a = Math.sqrt(Area_req) - (cx - cy) / 2000;
  // Let's compute exact L and B for equal overhang
  // L * B = A
  // L - cy = B - cx => L = B + cy - cx
  // (B + cy - cx) * B = A => B^2 + (cy - cx) * B - A = 0
  const c_diff = (cy - cx) / 1000; // m
  const B_calc = (-c_diff + Math.sqrt(Math.pow(c_diff, 2) + 4 * Area_req)) / 2;
  const L_calc = B_calc + c_diff;
  
  // Round up to nearest 100mm (0.1m)
  let B = Math.ceil(B_calc * 10) / 10 * 1000; // mm
  let L = Math.ceil(L_calc * 10) / 10 * 1000; // mm
  const Area_prov = (L / 1000) * (B / 1000); // m2
  
  steps.push({
    step: 2,
    title: 'Footing Dimensions',
    formula: 'L × B = A (Equal Overhang)',
    result: "Provide L = " + L + " mm, B = " + B + " mm.<br>A,prov = " + Area_prov.toFixed(2) + " <span class=\"unit\">m²</span>"
  });
  
  // Net Upward Pressure (pu)
  const Pu_factored = P * 1.5; // kN (Load factor 1.5)
  const pu = Pu_factored / Area_prov; // kN/m2 or kPa
  
  steps.push({
    step: 3,
    title: 'Net Upward Factored Pressure',
    formula: 'pu = 1.5 P / A,prov',
    result: "pu = " + pu.toFixed(1) + " <span class=\"unit\">kN/m²</span>"
  });
  
  // Depth based on BM
  // Bending moment at face of column
  // M_x = pu * B * ((L - cy)/2)^2 / 2
  const cantilever_L = (L - cy) / 2 / 1000; // m
  const cantilever_B = (B - cx) / 2 / 1000; // m
  
  const M_ux = pu * (B/1000) * Math.pow(cantilever_L, 2) / 2; // kN.m
  const M_uy = pu * (L/1000) * Math.pow(cantilever_B, 2) / 2; // kN.m
  
  const Mu = Math.max(M_ux, M_uy);
  
  steps.push({
    step: 4,
    title: 'Maximum Bending Moment',
    formula: 'Mu = pu × Width × (overhang)² / 2',
    result: "Mux = " + M_ux.toFixed(1) + " kN·m (Along L)<br>Muy = " + M_uy.toFixed(1) + " kN·m (Along B)<br>Max Mu = " + Mu.toFixed(1) + " <span class=\"unit\">kN·m</span>"
  });
  
  // Depth Required for BM
  let R_lim = 0;
  if (fy === 415) R_lim = 0.138 * fck;
  else if (fy === 500) R_lim = 0.133 * fck;
  else R_lim = 0.149 * fck; // 250
  
  const b_crit = M_ux > M_uy ? B : L;
  const d_req_bm = Math.sqrt((Mu * 1E6) / (R_lim * b_crit)); // mm
  
  steps.push({
    step: 5,
    title: 'Depth Required from BM',
    formula: 'd = √(Mu / (R,lim × b))',
    result: "d,req = " + d_req_bm.toFixed(1) + " <span class=\"unit\">mm</span>"
  });
  
  // We usually start with a larger depth since shear governs
  // A heuristic: d = 2 * d_req_bm approx, or based on one-way shear
  let d = Math.ceil(Math.max(d_req_bm * 1.8, 150) / 10) * 10;
  
  // Depth Optimization Loop for Shear
  let d_final = d;
  let status = 'pass';
  let one_way_shear = 0;
  let two_way_shear = 0;
  let D = 0;
  let tau_c = 0;
  let tau_v = 0;
  let tau_v2 = 0;
  let tau_c2 = 0;
  let Ast_L = 0;
  let Ast_B = 0;
  
  const solveDepth = () => {
    // We will iterate d until it passes both shears
    for (let i = 0; i < 20; i++) {
       // BM Steel
       // Ast_L for Moment M_ux
       const aL = 0.87 * fy * d;
       const bL = fy / (B * d * fck);
       const K1 = aL * bL;
       const Ast_calcL = (aL - Math.sqrt(Math.pow(aL, 2) - 4 * K1 * (M_ux * 1E6))) / (2 * K1);
       const Ast_min = 0.0012 * B * (d + cover + barDia); // approx D
       Ast_L = Math.max(Ast_calcL, Ast_min);
       
       const pt = (Ast_L / (B * d)) * 100;
       
       // One Way Shear (at distance d from face)
       // Section at d from face of column along L
       const dist_L = cantilever_L - (d/1000); // m
       if (dist_L > 0) {
         const V_u1 = pu * (B/1000) * dist_L; // kN
         tau_v = (V_u1 * 1000) / (B * d); // MPa
         tau_c = getShearStrength(pt, fck);
         
         if (tau_v > tau_c) {
           d += 10;
           continue; // fail, increase d
         }
       } else {
         tau_v = 0;
         tau_c = 1; // dummy safe
       }
       
       // Two Way Shear (at d/2 from face around column)
       const perim_x = cx + d;
       const perim_y = cy + d;
       const perim = 2 * (perim_x + perim_y); // mm
       const area_punching = (perim_x/1000) * (perim_y/1000); // m2
       
       const V_u2 = pu * (Area_prov - area_punching); // kN
       tau_v2 = (V_u2 * 1000) / (perim * d); // MPa
       
       // Allowable two way shear
       const beta_c = Math.min(cx/cy, cy/cx);
       const ks = Math.min(0.5 + beta_c, 1);
       tau_c2 = ks * 0.25 * Math.sqrt(fck);
       
       if (tau_v2 > tau_c2) {
         d += 10;
         continue; // fail
       }
       
       // Passed
       d_final = d;
       D = d_final + cover + barDia; // approximate D
       return true;
    }
    return false; // Failed to converge (too deep)
  };
  
  const converged = solveDepth();
  
  if (!converged) {
    status = 'fail';
  }
  
  steps.push({
    step: 6,
    title: 'One-Way Shear Check',
    formula: 'τv = Vu / (B×d) ≤ τc',
    result: "τv = " + tau_v.toFixed(3) + " MPa <br>τc = " + tau_c.toFixed(3) + " MPa<br><b>" + (tau_v <= tau_c ? 'Safe' : 'Unsafe') + "</b>"
  });
  
  steps.push({
    step: 7,
    title: 'Two-Way (Punching) Shear Check',
    formula: 'τv2 = Vu2 / (Perimeter×d) ≤ ks×0.25√fck',
    result: "τv2 = " + tau_v2.toFixed(3) + " MPa <br>τc2 = " + tau_c2.toFixed(3) + " MPa<br><b>" + (tau_v2 <= tau_c2 ? 'Safe' : 'Unsafe') + "</b>"
  });
  
  steps.push({
    step: 8,
    title: 'Effective Depth & Overall Depth',
    formula: 'D = d + cover + d_bar',
    result: "d = " + d_final + " mm<br>D = " + D + " <span class=\"unit\">mm</span>"
  });
  
  // Re-calculate steel perfectly now with final d
  const aL = 0.87 * fy * d_final;
  const bL = fy / (B * d_final * fck);
  const K1 = aL * bL;
  let Ast_L_calc = (aL - Math.sqrt(Math.pow(aL, 2) - 4 * K1 * (M_ux * 1E6))) / (2 * K1);
  if (isNaN(Ast_L_calc)) Ast_L_calc = 0;
  
  const aB = 0.87 * fy * d_final;
  const bB = fy / (L * d_final * fck);
  const K1_B = aB * bB;
  let Ast_B_calc = (aB - Math.sqrt(Math.pow(aB, 2) - 4 * K1_B * (M_uy * 1E6))) / (2 * K1_B);
  if (isNaN(Ast_B_calc)) Ast_B_calc = 0;
  
  // Min Steel is 0.12% for HYSD, 0.15% for Mild
  const pt_min = fy >= 415 ? 0.0012 : 0.0015;
  const Ast_min_L = pt_min * B * D;
  const Ast_min_B = pt_min * L * D;
  
  Ast_L = Math.max(Ast_L_calc, Ast_min_L);
  Ast_B = Math.max(Ast_B_calc, Ast_min_B);
  
  steps.push({
    step: 9,
    title: 'Reinforcement Area',
    formula: 'Ast = max(Ast,req, 0.12% b D)',
    result: "Along L: Ast = " + Ast_L.toFixed(1) + " mm²<br>Along B: Ast = " + Ast_B.toFixed(1) + " mm²"
  });
  
  // Bar Provision
  const barArea = getRebarArea(barDia);
  let num_bars_L = Math.ceil(Ast_L / barArea);
  let num_bars_B = Math.ceil(Ast_B / barArea);
  
  const spacing_L = Math.floor((B - 2*cover - barDia) / (num_bars_L - 1));
  const spacing_B = Math.floor((L - 2*cover - barDia) / (num_bars_B - 1));
  
  steps.push({
    step: 10,
    title: 'Provide Reinforcement',
    formula: 'N = ceil(Ast / Area_bar)',
    result: "Along L (parallel to Length): " + num_bars_L + " - " + barDia + "φ @ " + spacing_L + " c/c<br>" +
            "Along B (parallel to Width): " + num_bars_B + " - " + barDia + "φ @ " + spacing_B + " c/c"
  });
  
  // Central Band distribution for rectangular footing
  // Amount in central band B = 2 / (L/B + 1) * Ast_B
  const ratio = L/B;
  const band_fraction = 2 / (ratio + 1);
  let band_txt = "";
  if (ratio > 1) {
     const Ast_band = Ast_B * band_fraction;
     const bars_band = Math.ceil(Ast_band / barArea);
     band_txt = `<div class="info-alert" style="margin-top: 8px; font-size: 0.85em; padding: 6px; background: rgba(var(--primary-rgb), 0.1); border-left: 2px solid var(--color-accent);">
        <b>Note:</b> For rectangular footing, distribute ${bars_band} bars (${(band_fraction*100).toFixed(0)}%) uniformly in the central band of width B = ${B}mm.
     </div>`;
  }
  
  // 4. Render
  const complianceChecks = [
    {
      label: 'Minimum Depth at edge',
      status: D >= 150 ? 'pass' : 'fail',
      text: "D = " + D + " mm (≥ 150)",
      ref: 'Cl. 34.1.2'
    },
    {
      label: 'One Way Shear',
      status: tau_v <= tau_c ? 'pass' : 'fail',
      text: "τv ≤ τc",
      ref: 'Cl. 34.2.4.1'
    },
    {
      label: 'Two Way Shear',
      status: tau_v2 <= tau_c2 ? 'pass' : 'fail',
      text: "τv2 ≤ τc2",
      ref: 'Cl. 34.2.4.1'
    }
  ];
  
  const summaryCards = [
    { label: 'Footing Size', value: (L/1000).toFixed(1) + " × " + (B/1000).toFixed(1), unit: 'm', highlight: true },
    { label: 'Thickness (D)', value: D, unit: 'mm', highlight: true },
    { label: 'Bottom Bars (Length Dir)', value: barDia + "φ @ " + spacing_L, unit: 'c/c', status: 'pass' },
    { label: 'Bottom Bars (Width Dir)', value: barDia + "φ @ " + spacing_B, unit: 'c/c', status: 'pass' }
  ];
  
  const content = `
    <div class="calculator-layout">
      <div class="results-main">
        ${renderResultSummary(summaryCards)}
        ${band_txt}
        
        <div class="graphics-box" style="margin-top: var(--spacing-lg); margin-bottom: var(--spacing-lg); padding: var(--spacing-lg); background: var(--bg-card); border-radius: var(--radius-lg); border: 1px solid var(--border); text-align: center;">
          <h3 style="margin-bottom: var(--spacing-md); color: var(--text-muted); font-size: 0.875rem; text-transform: uppercase;">Footing Plan</h3>
          
          <svg width="240" height="240" viewBox="0 0 240 240" style="margin: 0 auto; display: block; overflow: visible;">
            <!-- Render footprint proportionate to L/B -->
            <!-- Assume longest side is 150px -->
            <!-- L >= B -->
            ${(() => {
              const maxDim = Math.max(L, B);
              const svgL = (L / maxDim) * 150;
              const svgB = (B / maxDim) * 150;
              const cx_svg = (cx / maxDim) * 150;
              const cy_svg = (cy / maxDim) * 150;
              const x_start = (240 - svgL) / 2;
              const y_start = (240 - svgB) / 2;
              
              return `
                <rect x="${x_start}" y="${y_start}" width="${svgL}" height="${svgB}" fill="rgba(255,255,255,0.02)" stroke="var(--text-primary)" stroke-width="2" />
                <rect x="${120 - cx_svg/2}" y="${120 - cy_svg/2}" width="${cx_svg}" height="${cy_svg}" fill="var(--bg-layer)" stroke="var(--color-accent)" stroke-width="2" />
                
                <!-- Dimensions -->
                <text x="120" y="${y_start - 8}" fill="var(--text-muted)" font-size="10" text-anchor="middle">L = ${L} mm</text>
                <text x="${x_start + svgL + 8}" y="125" fill="var(--text-muted)" font-size="10" text-anchor="start" transform="rotate(90 ${x_start + svgL + 8},125)">B = ${B} mm</text>
              `;
            })()}
          </svg>
        </div>
        
        ${renderStepTable('Calculation Steps', steps)}
      </div>
      <div class="results-sidebar">
        ${renderComplianceChecks(complianceChecks)}
      </div>
    </div>
  `;
  
  resultsDiv.innerHTML = content;
  
  updateStickyBar([
    { label: 'Size', value: `${L/1000}×${B/1000}×${D/1000} m` },
    { label: 'Rebar', value: `${barDia}φ @ ${Math.min(spacing_L, spacing_B)}c/c` },
    { label: 'Status', value: status === 'pass' ? '✅ OK' : '❌ Failed' }
  ]);
  
  resultsDiv.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export function initIsolatedFooting(container) {
  container.innerHTML = `
    <div class="calculator-page" id="footing-calc">
      <div class="print-header">
        <div class="print-header__brand">Stellar Civil — Isolated Footing</div>
        <div class="print-header__info"></div>
      </div>

      <div class="calculator-page__header">
        <h2>Isolated Footing Design</h2>
        <p>Design of reinforced concrete pad footings for single columns subjected to axial load.</p>
        <span class="calculator-page__code-ref">
          ${ICONS.info} IS 456:2000 — Section 5
        </span>
      </div>

      ${renderAssumptions([
        'Axial load only (bending moments from column ignored in this version)',
        'Equal overhang footing proportions used by default',
        'Area of footing includes 10% assumption for self-weight',
        'Depth optimized to safely resist both one-way and two-way (punching) shear'
      ])}

      ${renderInputPanel('Material Grades', INPUT_FIELDS_MATERIAL, ICONS.info)}
      ${renderInputPanel('Column Geometry', INPUT_FIELDS_COLUMN, ICONS.building)}
      ${renderInputPanel('Loads & Soil Data', INPUT_FIELDS_LOADS, ICONS.calculator)}
      ${renderInputPanel('Design Constraints', INPUT_FIELDS_DESIGN, ICONS.shield)}

      ${renderActionBar()}

      <div id="footing-results"></div>

      <div class="print-footer">
        Generated by Stellar Civil | For reference only. Verify with qualified engineer.
      </div>
    </div>
  `;

  container.querySelector('#btn-calculate').addEventListener('click', calculateIsolatedFooting);
  
  container.querySelector('#btn-clear').addEventListener('click', () => {
    localStorage.removeItem('stellar_civil_inputs_' + MODULE_ID);
    initIsolatedFooting(container);
    updateStickyBar([]);
  });

  const saved = loadInputs(MODULE_ID);
  if (saved) {
    setInputValues(container, saved);
  }
}

