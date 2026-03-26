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
import { getRebarByDia } from '../data/rebar.js';
import { FCK_GRADES, FY_GRADES } from '../data/materials.js';

const MODULE_ID = 'short-column';

const INPUT_FIELDS_MATERIAL = [
  { id: 'fck', label: 'Concrete Grade (fck)', type: 'select', default: 25,
    options: FCK_GRADES.map(fck => ({ value: fck, label: `M${fck}` })),
    tooltip: 'Characteristic compressive strength' },
  { id: 'fy', label: 'Steel Grade (fy)', type: 'select', default: 500,
    options: FY_GRADES.map(fy => ({ value: fy, label: `Fe${fy}` })),
    tooltip: 'Yield strength of reinforcement' }
];

const INPUT_FIELDS_GEOMETRY = [
  { id: 'b', label: 'Width (b)', unit: 'mm', default: 300, min: 200, max: 2000, step: 10, tooltip: 'Width of the column cross-section' },
  { id: 'd', label: 'Depth (D)', unit: 'mm', default: 450, min: 200, max: 2000, step: 10, tooltip: 'Depth of the column cross-section' },
  { id: 'lx', label: 'Unsupported Length (x)', unit: 'm', default: 3.0, min: 0.5, max: 10, step: 0.1, tooltip: 'Unbraced length about major axis' },
  { id: 'ly', label: 'Unsupported Length (y)', unit: 'm', default: 3.0, min: 0.5, max: 10, step: 0.1, tooltip: 'Unbraced length about minor axis' },
  { id: 'cover', label: 'Clear Cover', unit: 'mm', default: 40, min: 20, max: 100, step: 5, tooltip: 'Clear cover to reinforcement ties' }
];

const INPUT_FIELDS_DESIGN = [
  { id: 'pu', label: 'Factored Axial Load (Pu)', unit: 'kN', default: 1500, min: 10, max: 20000, step: 10, tooltip: 'Factored compressive design load' },
  { id: 'bar_dia', label: 'Longitudinal Bar Dia', unit: 'mm', type: 'select', default: 16,
    options: [12, 16, 20, 25, 32].map(d => ({ value: d, label: `${d} mm` })), tooltip: 'Preferred diameter for main bars' },
  { id: 'tie_dia', label: 'Lateral Tie Dia', unit: 'mm', type: 'select', default: 8,
    options: [8, 10, 12].map(d => ({ value: d, label: `${d} mm` })), tooltip: 'Transverse reinforcement diameter' }
];

function calculateShortColumn() {
  const container = document.querySelector('.calculator-page');
  let resultsDiv = container.querySelector('#short-column-results');
  if (!resultsDiv) {
    resultsDiv = document.createElement('div');
    resultsDiv.id = 'short-column-results';
    container.appendChild(resultsDiv);
  }
  
  // 1. Validate inputs
  const rawInputs = getInputValues(container);
  
  const b_val = validate(rawInputs.b, 200, 2000, 'Width');
  const d_val = validate(rawInputs.d, 200, 2000, 'Depth');
  const lx_val = validate(rawInputs.lx, 0.5, 10, 'Length X');
  const ly_val = validate(rawInputs.ly, 0.5, 10, 'Length Y');
  const pu_val = validate(rawInputs.pu, 10, 20000, 'Axial Load');
  
  if (!b_val.valid || !d_val.valid || !lx_val.valid || !ly_val.valid || !pu_val.valid) {
    showToast('Please correct invalid fields before calculating.', 'error');
    return;
  }
  
  saveInputs(MODULE_ID, rawInputs);
  
  // 2. Extract Values
  const b = parseFloat(rawInputs.b);
  const D = parseFloat(rawInputs.d);
  const lx = parseFloat(rawInputs.lx) * 1000; // mm
  const ly = parseFloat(rawInputs.ly) * 1000; // mm
  const Pu = parseFloat(rawInputs.pu) * 1000; // N
  const cover = parseFloat(rawInputs.cover);
  const fck = parseFloat(rawInputs.fck);
  const fy = parseFloat(rawInputs.fy);
  const barDia = parseFloat(rawInputs.bar_dia);
  const tieDia = parseFloat(rawInputs.tie_dia);
  
  const Ag = b * D; // Gross Area
  
  // 3. Calculation Engine
  let steps = [];
  
  // Slenderness Check (Cl 25.1.2)
  const slenderness_x = lx / D;
  const slenderness_y = ly / b;
  
  steps.push({
    step: 1,
    title: 'Slenderness Check',
    formula: 'Ratio = L / b or D',
    result: "λx = " + lx + " / " + D + " = " + slenderness_x.toFixed(2) + "<br>λy = " + ly + " / " + b + " = " + slenderness_y.toFixed(2)
  });
  
  let is_short = true;
  if (slenderness_x > 12 || slenderness_y > 12) {
    is_short = false;
  }
  
  steps.push({
    step: 2,
    title: 'Column Type',
    formula: 'λ ≤ 12 for Short Column',
    result: is_short ? "Both λx, λy ≤ 12 → <b>Short Column</b>" : "Slenderness > 12 → <b>Long Column</b> (Design logic proceeds as Short for approximation, but moments should be amplified)"
  });
  
  // Minimum Eccentricity (Cl 25.4)
  const emin_x = Math.max(lx / 500 + D / 30, 20);
  const emin_y = Math.max(ly / 500 + b / 30, 20);
  
  steps.push({
    step: 3,
    title: 'Minimum Eccentricity',
    formula: 'emin = max(L/500 + D/30, 20)',
    result: "ex,min = " + emin_x.toFixed(1) + " mm (Allowed: " + (0.05 * D).toFixed(1) + " mm)<br>ey,min = " + emin_y.toFixed(1) + " mm (Allowed: " + (0.05 * b).toFixed(1) + " mm)"
  });
  
  // Check if minimum eccentricity condition is met for formula (Cl 39.3)
  const can_use_simple_formula = (emin_x <= 0.05 * D) && (emin_y <= 0.05 * b);
  
  steps.push({
    step: 4,
    title: 'Eccentricity Condition Check',
    formula: 'emin ≤ 0.05 D',
    result: can_use_simple_formula ? "Condition met. We can use simplified axial load formula." : "Condition NOT met. Requires rigorous analysis with bending moments. Using basic formula as approximation."
  });
  
  // Calculation of Asc (Cl 39.3)
  // Pu = 0.4*fck*Ac + 0.67*fy*Asc
  // Pu = 0.4*fck*(Ag - Asc) + 0.67*fy*Asc
  // Pu = 0.4*fck*Ag + Asc*(0.67*fy - 0.4*fck)
  // Asc = (Pu - 0.4*fck*Ag) / (0.67*fy - 0.4*fck)
  
  let Asc_req = (Pu - 0.4 * fck * Ag) / (0.67 * fy - 0.4 * fck);
  
  // If Asc is negative, it means concrete alone can carry the load, provide minimum steel
  const min_Asc = 0.008 * Ag;
  
  if (Asc_req < min_Asc) {
    steps.push({
      step: 5,
      title: 'Required Steel Area',
      formula: 'Pu = 0.4 fck Ac + 0.67 fy Asc',
      result: "Calculated Asc < 0.8% limiting value. Provide min steel."
    });
    Asc_req = min_Asc;
  } else {
    steps.push({
      step: 5,
      title: 'Required Steel Area',
      formula: 'Asc = (Pu - 0.4 fck Ag) / (0.67 fy - 0.4 fck)',
      result: "Asc,req = " + Asc_req.toFixed(1) + " <span class=\"unit\">mm²</span>"
    });
  }
  
  // Ensure we provide min steel anyway
  Asc_req = Math.max(Asc_req, min_Asc);
  
  steps.push({
    step: 6,
    title: 'Minimum Steel (0.8%)',
    formula: 'Asc,min = 0.008 × Ag',
    result: "Asc,min = " + min_Asc.toFixed(1) + " <span class=\"unit\">mm²</span>"
  });
  
  // Bar Provision
  const bar = getRebarByDia(barDia);
  // Minimum bars for rectangular is 4
  let min_n = 4;
  let num_bars = Math.ceil(Asc_req / bar.area);
  // Ensure even number generally for symmetry in rectangular
  if (num_bars % 2 !== 0) num_bars += 1;
  num_bars = Math.max(num_bars, min_n);
  
  const Asc_prov = num_bars * bar.area;
  const p_prov = (Asc_prov / Ag) * 100;
  
  steps.push({
    step: 7,
    title: 'Provide Longitudinal Reinforcement',
    formula: 'N = ceil(Asc / Area_bar)',
    result: "Provide " + num_bars + " - " + barDia + "φ (" + Asc_prov.toFixed(1) + " mm² = " + p_prov.toFixed(2) + "%)"
  });
  
  // Maximum Steel Check (6% or 4% practically)
  const max_Asc = 0.06 * Ag;
  const max_practical = 0.04 * Ag;
  let status = 'pass';
  let statusMessage = 'Design OK';
  
  if (Asc_prov > max_Asc) {
    status = 'fail';
    statusMessage = 'Max Steel > 6%';
  } else if (Asc_prov > max_practical) {
    status = 'warning';
    statusMessage = 'Steel > 4% (Congestion)';
  }
  
  // Lateral Ties (Cl 26.5.3.2)
  const required_tie_dia = Math.max(barDia / 4, 6); // mm
  const actual_tie_dia = tieDia >= required_tie_dia ? tieDia : Math.ceil(required_tie_dia);
  
  const pitch1 = b; // least lateral dimension
  const pitch2 = 16 * barDia;
  const pitch3 = 300;
  
  const pitch = Math.floor(Math.min(pitch1, pitch2, pitch3) / 10) * 10; // Round down to nearest 10mm
  
  steps.push({
    step: 8,
    title: 'Lateral Ties Diameter',
    formula: 'dia ≥ max(φ_main / 4, 6mm)',
    result: "Required ≥ " + required_tie_dia.toFixed(1) + " mm. Adopt " + actual_tie_dia + "φ"
  });
  
  steps.push({
    step: 9,
    title: 'Tie Spacing (Pitch)',
    formula: 'min(b, 16×φ_main, 300)',
    result: "s = min(" + b + ", " + (16 * barDia) + ", 300) = " + pitch + " mm"
  });
  
  // Load Capacity Verification
  const Pu_cap = (0.4 * fck * (Ag - Asc_prov) + 0.67 * fy * Asc_prov) / 1000; // kN
  
  steps.push({
    step: 10,
    title: 'Actual Load Capacity',
    formula: 'Pu,cap = 0.4 fck (Ag - Asc,prov) + 0.67 fy Asc,prov',
    result: "Pu,cap = " + Pu_cap.toFixed(1) + " kN (" + (Pu_cap >= rawInputs.pu ? 'Safe' : 'Unsafe') + ")"
  });
  
  // 4. Render
  const complianceChecks = [
    {
      label: 'Slenderness X',
      status: slenderness_x <= 12 ? 'pass' : 'warn',
      text: "λx = " + slenderness_x.toFixed(1) + " (≤ 12 for short)",
      ref: 'Cl. 25.1.2'
    },
    {
      label: 'Slenderness Y',
      status: slenderness_y <= 12 ? 'pass' : 'warn',
      text: "λy = " + slenderness_y.toFixed(1) + " (≤ 12 for short)",
      ref: 'Cl. 25.1.2'
    },
    {
      label: 'Min Eccentricity X',
      status: emin_x <= 0.05 * D ? 'pass' : 'warn',
      text: "ex = " + emin_x.toFixed(1) + " (≤ " + (0.05*D).toFixed(1) + ")",
      ref: 'Cl. 39.3'
    },
    {
      label: 'Min Eccentricity Y',
      status: emin_y <= 0.05 * b ? 'pass' : 'warn',
      text: "ey = " + emin_y.toFixed(1) + " (≤ " + (0.05*b).toFixed(1) + ")",
      ref: 'Cl. 39.3'
    },
    {
      label: 'Longitudinal Steel limit',
      status: p_prov >= 0.8 && p_prov <= 6.0 ? 'pass' : 'fail',
      text: p_prov.toFixed(2) + "% (limit: 0.8% - 6.0%)",
      ref: 'Cl. 26.5.3.1'
    }
  ];
  
  const summaryCards = [
    { label: 'Calculated Capacity', value: Pu_cap.toFixed(1), unit: 'kN' },
    { label: 'Longitudinal Bars', value: num_bars + " - " + barDia + "φ", highlight: true, status: status },
    { label: 'Ast Percentage', value: p_prov.toFixed(2), unit: '%' },
    { label: 'Lateral Ties', value: actual_tie_dia + "φ @ " + pitch + "c/c", highlight: true, status: 'pass' }
  ];
  
  // Distribute bars roughly for visual
  // Just placing them around the perimeter for rectangular
  const visualBars = [];
  const start_x = 10 + (cover/b)*80;
  const end_x = 90 - (cover/b)*80;
  const start_y = 10 + (cover/D)*80;
  const end_y = 90 - (cover/D)*80;
  
  // Always 4 at corners
  visualBars.push({x: start_x, y: start_y}); // TL
  visualBars.push({x: end_x, y: start_y}); // TR
  visualBars.push({x: end_x, y: end_y}); // BR
  visualBars.push({x: start_x, y: end_y}); // BL
  
  // Extra bars symmetric placement
  const extra_bars = num_bars - 4;
  if (extra_bars > 0) {
    let extra = extra_bars;
    let bars_on_y = 0; // vertical edges (Left & Right) -> represents Depth (D)
    let bars_on_x = 0; // horizontal edges (Top & Bottom) -> represents Width (b)
    
    while (extra >= 4) {
      bars_on_y += 1;
      bars_on_x += 1;
      extra -= 4;
    }
    if (extra >= 2) {
      if (D > b) {
        bars_on_y += 1;
      } else {
        bars_on_x += 1;
      }
      extra -= 2;
    }
    if (extra === 1) bars_on_x += 1; // Fallback for odds
    
    // Place Top & Bottom (X-axis)
    for(let i=1; i<=bars_on_x; i++) {
       const frac = i / (bars_on_x + 1);
       const x_pos = start_x + frac * (end_x - start_x);
       visualBars.push({x: x_pos, y: start_y}); // Top
       visualBars.push({x: x_pos, y: end_y});   // Bottom
    }
    
    // Place Left & Right (Y-axis)
    for(let i=1; i<=bars_on_y; i++) {
       const frac = i / (bars_on_y + 1);
       const y_pos = start_y + frac * (end_y - start_y);
       visualBars.push({x: start_x, y: y_pos}); // Left
       visualBars.push({x: end_x, y: y_pos});   // Right
    }
  }

  const content = `
    <div class="calculator-layout">
      <div class="results-main">
        ${renderResultSummary(summaryCards)}
        
        <div class="graphics-box" style="margin-bottom: var(--spacing-lg); padding: var(--spacing-lg); background: var(--bg-card); border-radius: var(--radius-lg); border: 1px solid var(--border); text-align: center;">
          <h3 style="margin-bottom: var(--spacing-md); color: var(--text-muted); font-size: 0.875rem; text-transform: uppercase;">Column Cross-Section</h3>
          
          <svg width="200" height="200" viewBox="0 0 100 100" style="margin: 0 auto; display: block; overflow: visible;">
            <!-- Concrete Outline -->
            <rect x="10" y="10" width="80" height="80" fill="rgba(255,255,255,0.05)" stroke="var(--text-primary)" stroke-width="1.5" />
            
            <!-- Ties Outline -->
            <rect x="${start_x - 2}" y="${start_y - 2}" width="${end_x - start_x + 4}" height="${end_y - start_y + 4}" fill="none" stroke="var(--text-secondary)" stroke-width="1" rx="2" />
            
            <!-- Dimensions -->
            <text x="50" y="5" fill="var(--text-muted)" font-size="5" text-anchor="middle">${b} mm</text>
            <text x="95" y="50" fill="var(--text-muted)" font-size="5" text-anchor="start" transform="rotate(90 95,50)">${D} mm</text>
            
            <!-- Bars -->
            ${visualBars.slice(0, num_bars).map(bar => `<circle cx="${bar.x}" cy="${bar.y}" r="2" fill="var(--color-accent)"/>`).join('')}
          </svg>
          
          <div style="margin-top: var(--spacing-md); font-weight: 500;">
            <div style="color: var(--color-accent);">Main: ${num_bars} - ${barDia}φ</div>
            <div style="color: var(--text-secondary); margin-top: 4px;">Ties: ${actual_tie_dia}φ @ ${pitch} mm c/c</div>
          </div>
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
    { label: 'Section', value: `${b} × ${D} mm` },
    { label: 'Main', value: `${num_bars} - ${barDia}φ` },
    { label: 'Ties', value: `${actual_tie_dia}φ @ ${pitch}c/c` },
    { label: 'Status', value: status === 'pass' ? 'OK' : 'FAIL', status: status }
  ].filter(Boolean));
  
  resultsDiv.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export function initShortColumn(container) {
  container.innerHTML = `
    <div class="calculator-page" id="short-column-calc">
      <div class="print-header">
        <div class="print-header__brand">Stellar Civil — Short Column Design</div>
        <div class="print-header__info"></div>
      </div>

      <div class="calculator-page__header">
        <h2>Short Column Design</h2>
        <p>Design of axially loaded short rectangular columns calculating both longitudinal reinforcement and lateral ties.</p>
        <span class="calculator-page__code-ref">
          ${ICONS.info} IS 456:2000 — Cl. 39.3
        </span>
      </div>

      ${renderAssumptions([
        'Axially loaded rectangular column (Minimum eccentricity ex ≤ 0.05D, ey ≤ 0.05b)',
        'Short column assumption verified (λx ≤ 12, λy ≤ 12)',
        'Load capacity equation Pu = 0.4*fck*Ac + 0.67*fy*Asc used per Cl. 39.3',
        'Longitudinal steel area limited between 0.8% and limits (4% max practical)'
      ])}

      ${renderInputPanel('Material Properties', INPUT_FIELDS_MATERIAL, ICONS.info)}
      ${renderInputPanel('Column Geometry & Lengths', INPUT_FIELDS_GEOMETRY, ICONS.building)}
      ${renderInputPanel('Design Limit States', INPUT_FIELDS_DESIGN, ICONS.calculator)}

      ${renderActionBar()}

      <div id="short-column-results"></div>

      <div class="print-footer">
        Generated by Stellar Civil | For reference only. Verify with qualified engineer.
      </div>
    </div>
  `;

  container.querySelector('#btn-calculate').addEventListener('click', calculateShortColumn);
  
  container.querySelector('#btn-clear').addEventListener('click', () => {
    localStorage.removeItem('stellar_civil_inputs_' + MODULE_ID);
    initShortColumn(container);
    updateStickyBar([]);
  });

  const saved = loadInputs(MODULE_ID);
  if (saved) {
    setInputValues(container, saved);
  }
}
