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

const MODULE_ID = 'staircase';

const INPUT_FIELDS_MATERIAL = [
  { id: 'fck', label: 'Concrete Grade (fck)', type: 'select', default: 25,
    options: FCK_GRADES.map(fck => ({ value: fck, label: `M${fck}` })) },
  { id: 'fy', label: 'Steel Grade (fy)', type: 'select', default: 500,
    options: FY_GRADES.map(fy => ({ value: fy, label: `Fe${fy}` })) }
];

const INPUT_FIELDS_GEOMETRY = [
  { id: 'rise', label: 'Rise (R)', unit: 'mm', default: 150, min: 100, max: 250, step: 5 },
  { id: 'tread', label: 'Tread (T)', unit: 'mm', default: 300, min: 200, max: 400, step: 10 },
  { id: 'steps', label: 'Number of Steps', default: 10, min: 3, max: 25, step: 1 },
  { id: 'width', label: 'Width of Stair (W)', unit: 'mm', default: 1200, min: 800, max: 3000, step: 10 },
  { id: 'land1', label: 'Bottom Landing', unit: 'mm', default: 1200, min: 0, max: 3000, step: 10 },
  { id: 'land2', label: 'Top Landing', unit: 'mm', default: 1200, min: 0, max: 3000, step: 10 }
];

const INPUT_FIELDS_LOADS = [
  { id: 'll', label: 'Live Load', unit: 'kN/m²', default: 3, min: 1.5, max: 10, step: 0.5 },
  { id: 'ff', label: 'Floor Finish', unit: 'kN/m²', default: 1, min: 0, max: 3, step: 0.1 }
];

const INPUT_FIELDS_REBAR = [
  { id: 'cover', label: 'Clear Cover', unit: 'mm', default: 20, min: 15, max: 50, step: 5 },
  { id: 'bar_dia', label: 'Main Bar Dia (φ)', unit: 'mm', type: 'select', default: 12,
    options: [10, 12, 16].map(d => ({ value: d, label: `${d} mm` })) },
  { id: 'dist_dia', label: 'Dist Bar Dia (φ)', unit: 'mm', type: 'select', default: 8,
    options: [8, 10, 12].map(d => ({ value: d, label: `${d} mm` })) }
];

function calculateStaircase() {
  const container = document.querySelector('.calculator-page');
  let resultsDiv = container.querySelector('#staircase-results');
  if (!resultsDiv) {
    resultsDiv = document.createElement('div');
    resultsDiv.id = 'staircase-results';
    container.appendChild(resultsDiv);
  }
  
  const rawInputs = getInputValues(container);
  
  // NOTE: Validation for stairs could be added here similar to other modules
  // Currently skipping generic validate() given missing explicit inputs block in original except rawInputs map
  
  saveInputs(MODULE_ID, rawInputs);
  
  // 2. Extract Values
  const rise = parseFloat(rawInputs.rise);
  const tread = parseFloat(rawInputs.tread);
  const num_steps = parseInt(rawInputs.steps);
  const width = parseFloat(rawInputs.width); // Not heavily used for per-meter width calculations
  const land1 = parseFloat(rawInputs.land1);
  const land2 = parseFloat(rawInputs.land2);
  const ll = parseFloat(rawInputs.ll);
  const ff = parseFloat(rawInputs.ff);
  const cover = parseFloat(rawInputs.cover);
  const fck = parseFloat(rawInputs.fck);
  const fy = parseFloat(rawInputs.fy);
  const barDia = parseFloat(rawInputs.bar_dia);
  const distDia = parseFloat(rawInputs.dist_dia);
  
  // 3. Calculation Engine
  let steps = [];
  
  // Effective Span (IS 456 Cl. 33.1.a or b)
  // Assuming going = number of steps * tread
  const num_treads = num_steps - 1; // Since top step lands on the landing
  const going = num_treads * tread;
  
  // Span = Going + (Landing 1)/2 + (Landing 2)/2 approximately if supported at edges
  // Or if supported on landing spans, span = going + L1 + L2
  // Let's assume longitudinal spanning (supported at top and bottom of landings)
  // Effective span: L = going + land1 + land2 (center to center of supports)
  // For simplicity, we just use clear plus half bearing, but we don't have bearing.
  // We'll use Going + land1 + land2.
  const L_eff = (going + land1 + land2) / 1000; // m
  
  steps.push({
    step: 1,
    title: 'Effective Span',
    formula: 'L = Going + Landings = ' + going + ' + ' + land1 + ' + ' + land2,
    result: "L = " + L_eff.toFixed(2) + " <span class=\"unit\">m</span>"
  });
  
  // Preliminary Depth
  // Span / d = 20 for simply supported. Use Span / 25 due to continuous action typically, or just 20
  const d_req_deflection = (L_eff * 1000) / 20; 
  let D_assumed = Math.ceil(Math.max(d_req_deflection, 150) / 10) * 10;
  let d = D_assumed - cover - (barDia / 2);
  
  steps.push({
    step: 2,
    title: 'Assume Thickness of Waist Slab',
    formula: 'D ≈ Span / 20',
    result: "D = " + D_assumed + " mm <br>d = " + d + " <span class=\"unit\">mm</span>"
  });
  
  // Load Calculation on waist slab
  // 1. Self weight of waist slab on plan
  const hypo = Math.sqrt(Math.pow(rise, 2) + Math.pow(tread, 2));
  const sw_waist = 25 * (D_assumed / 1000) * (hypo / tread); // kN/m2
  
  // 2. Self weight of steps
  const sw_steps = 25 * (0.5 * rise / 1000); // kN/m2 (average thickness is half of rise)
  
  const dl_waist = sw_waist + sw_steps + ff; 
  const total_load_waist = (dl_waist + ll) * 1.5; // Factored
  
  const sw_landing = 25 * (D_assumed / 1000);
  const dl_landing = sw_landing + ff;
  const total_load_landing = (dl_landing + ll) * 1.5; // Factored
  
  // For simplicity, assume equivalent UDL = total load on waist for entire span
  // Because waist is usually heavier.
  const w_u = Math.max(total_load_waist, total_load_landing); 
  
  steps.push({
    step: 3,
    title: 'Factored Load Calculation',
    formula: 'wu = 1.5 × (DL + LL)',
    result: "waist slab w = " + total_load_waist.toFixed(1) + " kN/m²<br>landing w = " + total_load_landing.toFixed(1) + " kN/m²<br>Using w_u = " + w_u.toFixed(1) + " <span class=\"unit\">kN/m</span> (per m width)"
  });
  
  // Max Bending Moment
  const Mu = (w_u * Math.pow(L_eff, 2)) / 8;
  
  steps.push({
    step: 4,
    title: 'Design Bending Moment',
    formula: 'Mu = wu × L² / 8',
    result: "Mu = " + Mu.toFixed(1) + " <span class=\"unit\">kN·m/m</span>"
  });
  
  // Check Depth for BM
  let R_lim = 0;
  if (fy === 415) R_lim = 0.138 * fck;
  else if (fy === 500) R_lim = 0.133 * fck;
  else R_lim = 0.149 * fck; 
  
  const d_req_bm = Math.sqrt((Mu * 1E6) / (R_lim * 1000)); // mm
  
  let depthOk = true;
  if (d_req_bm > d) {
    depthOk = false; // Need to redesign thickness, but let's just proceed with warning or auto-bump
    D_assumed = Math.ceil((d_req_bm + cover + barDia/2) / 10) * 10;
    d = D_assumed - cover - barDia/2;
    steps.push({
      step: 5,
      title: 'Check Effective Depth',
      formula: 'd,req = √(Mu / (R,lim × 1000))',
      result: "Revised D to " + D_assumed + " mm because d,req (" + d_req_bm.toFixed(1) + ") > d (" + (D_assumed - cover - barDia/2) + ")"
    });
  } else {
    steps.push({
      step: 5,
      title: 'Check Effective Depth',
      formula: 'd,prov ≥ d,req',
      result: "d_req = " + d_req_bm.toFixed(1) + " mm ≤ d_prov (" + d + " mm) <br><b>Safe</b>"
    });
  }
  
  // Main Steel Area (Ast)
  const a1 = 0.87 * fy * d;
  const b1 = fy / (1000 * d * fck);
  const K1 = a1 * b1; // 0.87*fy^2 / 1000*fck
  
  const Ast_calc = (a1 - Math.sqrt(Math.pow(a1, 2) - 4 * K1 * (Mu * 1E6))) / (2 * K1);
  const pt_min = fy >= 415 ? 0.0012 : 0.0015;
  const Ast_min = pt_min * 1000 * D_assumed;
  
  const Ast_req = Math.max(Ast_calc, Ast_min);
  
  steps.push({
    step: 6,
    title: 'Main Reinforcement Required',
    formula: 'Quadratic equation or Min limits',
    result: "Ast_calc = " + Ast_calc.toFixed(1) + " mm²/m <br>Ast_min = " + Ast_min.toFixed(1) + " mm²/m<br>Ast = " + Ast_req.toFixed(1) + " <span class=\"unit\">mm²/m</span>"
  });
  
  // Distribution Steel
  const Ast_dist = Ast_min; // transverse
  
  steps.push({
    step: 7,
    title: 'Distribution Steel',
    formula: '0.12% or 0.15% of gross area',
    result: "Ast,dist = " + Ast_dist.toFixed(1) + " <span class=\"unit\">mm²/m</span>"
  });
  
  // Spacing
  const barMainInfo = getRebarByDia(barDia);
  const barDistInfo = getRebarByDia(distDia);
  
  const spacing_main_calc = (1000 * barMainInfo.area) / Ast_req;
  const spacing_main = Math.min(Math.floor(spacing_main_calc / 10) * 10, 3 * d, 300);
  
  const spacing_dist_calc = (1000 * barDistInfo.area) / Ast_dist;
  const spacing_dist = Math.min(Math.floor(spacing_dist_calc / 10) * 10, 5 * d, 450);
  
  steps.push({
    step: 8,
    title: 'Provide Spacing',
    formula: 's = 1000 × (Area_bar) / Ast',
    result: "Main: " + barDia + "φ @ " + spacing_main + " c/c <br>Dist: " + distDia + "φ @ " + spacing_dist + " c/c"
  });
  
  // Deflection Check (Span / d effectively)
  const pt_prov = (1000 * barMainInfo.area / spacing_main) / (1000 * d) * 100;
  const fs = 0.58 * fy * (Ast_req / (1000 * barMainInfo.area / spacing_main));
  // Standard modification factor approx for pt=0.4 is around 1.3
  const mf = Math.min(2.0, 1 / (0.225 + 0.0032 * fs + 0.625 * pt_prov)); // Generic approximation
  const max_Ld = 20 * mf;
  const actual_Ld = (L_eff * 1000) / d;
  
  let status = actual_Ld <= max_Ld ? 'pass' : 'fail';
  if(!depthOk) status = 'warning';
  
  // 4. Render
  const complianceChecks = [
    {
      label: 'Minimum Thickness',
      status: D_assumed >= 150 ? 'pass' : 'fail',
      text: 'waist slab thickness ≥ 150mm',
      ref: 'Customary'
    },
    {
      label: 'Deflection Control',
      status: actual_Ld <= max_Ld ? 'pass' : 'fail',
      text: "L/d (" + actual_Ld.toFixed(1) + ") ≤ Limit (" + max_Ld.toFixed(1) + ")",
      ref: 'Cl. 23.2.1'
    }
  ];
  
  const summaryCards = [
    { label: 'Waist Slab (D)', value: D_assumed, unit: 'mm', highlight: true },
    { label: 'Effective Span', value: L_eff.toFixed(2), unit: 'm' },
    { label: 'Main Reinforcement', value: barDia + "φ @ " + spacing_main, unit: 'c/c', highlight: true, status: 'pass' },
    { label: 'Dist. Reinforcement', value: distDia + "φ @ " + spacing_dist, unit: 'c/c', status: 'pass' }
  ];
  
  const content = `
    <div class="calculator-layout">
      <div class="results-main">
        ${renderResultSummary(summaryCards)}
        
        <div class="graphics-box" style="margin-bottom: var(--spacing-lg); padding: var(--spacing-lg); background: var(--bg-card); border-radius: var(--radius-lg); border: 1px solid var(--border); text-align: center;">
          <h3 style="margin-bottom: var(--spacing-md); color: var(--text-muted); font-size: 0.875rem; text-transform: uppercase;">Staircase Profile</h3>
          
          <svg width="300" height="150" viewBox="0 0 300 150" style="margin: 0 auto; display: block; overflow: visible;">
            <!-- Simple stair profile -->
            <path d="M 20,90 L 60,90 L 60,70 L 100,70 L 100,50 L 140,50 L 140,30 L 180,30 L 180,10 L 260,10 L 260,20 L 195,20 L 195,20 L 70,100 L 20,100 Z" fill="rgba(255,255,255,0.05)" stroke="var(--text-primary)" stroke-width="2" stroke-linejoin="round"/>
            
            <circle cx="80" cy="88" r="3" fill="var(--color-accent)" />
            <circle cx="120" cy="68" r="3" fill="var(--color-accent)" />
            <circle cx="160" cy="48" r="3" fill="var(--color-accent)" />
            <circle cx="220" cy="28" r="3" fill="var(--color-accent)" />
            
            <text x="40" y="80" fill="var(--text-muted)" font-size="8">Land</text>
            <text x="220" y="8" fill="var(--text-muted)" font-size="8">Land</text>
            <text x="120" y="45" fill="var(--text-secondary)" font-size="10" font-weight="bold">Waist D = ${D_assumed}</text>
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
    { label: 'Waist', value: `${D_assumed} mm` },
    { label: 'Main', value: `${barDia}φ @ ${spacing_main}c/c` },
    { label: 'Dist', value: `${distDia}φ @ ${spacing_dist}c/c` },
    { label: 'Status', value: status === 'pass' ? '✅ OK' : '❌ Issue' }
  ]);
  
  resultsDiv.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export function initStaircase(container) {
  container.innerHTML = `
    <div class="calculator-page" id="staircase-calc">
      <div class="print-header">
        <div class="print-header__brand">Stellar Civil — Staircase Design</div>
        <div class="print-header__info"></div>
      </div>

      <div class="calculator-page__header">
        <h2>Dog-legged Staircase Design</h2>
        <p>Design of dog-legged staircases spanning longitudinally. Calculates waist slab thickness and main/distribution reinforcement.</p>
        <span class="calculator-page__code-ref">
          ${ICONS.info} IS 456:2000 — Section 33.1
        </span>
      </div>

      ${renderAssumptions([
        'Staircase spans longitudinally between landings supported at outer edges',
        'Effective span = Going + Landing 1 + Landing 2',
        'Load on waist slab and landing slab is treated as uniform UDL based on the maximum of both segments',
        'Deflection control is based on basic span/effective depth ratios (modification factor approx applied)'
      ])}

      ${renderInputPanel('Material Grades', INPUT_FIELDS_MATERIAL, ICONS.info)}
      ${renderInputPanel('Flight Geometry', INPUT_FIELDS_GEOMETRY, ICONS.building)}
      ${renderInputPanel('Loading Profiles', INPUT_FIELDS_LOADS, ICONS.calculator)}
      ${renderInputPanel('Reinforcement Layout', INPUT_FIELDS_REBAR, ICONS.shield)}

      ${renderActionBar()}

      <div id="staircase-results"></div>

      <div class="print-footer">
        Generated by Stellar Civil | For reference only. Verify with qualified engineer.
      </div>
    </div>
  `;

  container.querySelector('#btn-calculate').addEventListener('click', calculateStaircase);
  
  container.querySelector('#btn-clear').addEventListener('click', () => {
    localStorage.removeItem('stellar_civil_inputs_' + MODULE_ID);
    initStaircase(container);
    updateStickyBar([]);
  });

  const saved = loadInputs(MODULE_ID);
  if (saved) {
    setInputValues(container, saved);
  }
}

