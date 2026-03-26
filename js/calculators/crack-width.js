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
import { FCK_GRADES } from '../data/materials.js';

const MODULE_ID = 'crack-width';

const INPUT_FIELDS_MATERIAL = [
  { id: 'fck', label: 'Concrete Grade (fck)', type: 'select', default: 25,
    options: FCK_GRADES.map(fck => ({ value: fck, label: `M${fck}` })),
    tooltip: 'Characteristic compressive strength' }
];

const INPUT_FIELDS_GEOMETRY = [
  { id: 'b', label: 'Beam Width (b)', unit: 'mm', default: 300, min: 150, max: 2000, step: 10, tooltip: 'Width of the beam section' },
  { id: 'd_overall', label: 'Overall Depth (D)', unit: 'mm', default: 600, min: 200, max: 3000, step: 10, tooltip: 'Total overall depth of the section' },
  { id: 'cover', label: 'Clear Cover', unit: 'mm', default: 40, min: 20, max: 100, step: 5, tooltip: 'Clear cover to main tension reinforcement' }
];

const INPUT_FIELDS_REINFORCEMENT = [
  { id: 'ast', label: 'Tension Steel (Ast)', unit: 'mm²', default: 1256, min: 50, max: 15000, step: 1, tooltip: 'Area of main tension reinforcement provided' },
  { id: 'bar_dia', label: 'Main Bar Dia (φ)', unit: 'mm', type: 'select', default: 20,
    options: [12, 16, 20, 25, 32].map(d => ({ value: d, label: `${d} mm` })), tooltip: 'Representative diameter of main bars at the tension face' },
  { id: 'spacing', label: 'Bar Spacing c/c', unit: 'mm', default: 150, min: 50, max: 300, step: 5, tooltip: 'Average center-to-center spacing of main tension bars' }
];

const INPUT_FIELDS_DESIGN = [
  { id: 'm_service', label: 'Service Bending Moment', unit: 'kN·m', default: 150, min: 1, max: 5000, step: 1, tooltip: 'Unfactored quasi-permanent service load moment' },
  { id: 'limit', label: 'Crack Width Limit', type: 'select', default: 0.3,
    options: [
      { value: 0.3, label: '0.3 mm (Normal)' },
      { value: 0.2, label: '0.2 mm (Severe Exposure)' },
      { value: 0.1, label: '0.1 mm (Extreme Exposure)' }
    ], tooltip: 'Maximum permissible crack width per IS 456 Cl. 35.3.2' }
];

function calculateCrackWidth() {
  const container = document.querySelector('.calculator-page');
  let resultsDiv = container.querySelector('#crack-width-results');
  if (!resultsDiv) {
    resultsDiv = document.createElement('div');
    resultsDiv.id = 'crack-width-results';
    container.appendChild(resultsDiv);
  }
  
  const rawInputs = getInputValues(container);
  
  const b_val = validate(rawInputs.b, 150, 2000, 'Beam Width');
  const d_val = validate(rawInputs.d_overall, 200, 3000, 'Overall Depth');
  const ast_val = validate(rawInputs.ast, 50, 15000, 'Tension Steel');
  const ms_val = validate(rawInputs.m_service, 1, 5000, 'Service Moment');
  
  if (!b_val.valid || !d_val.valid || !ast_val.valid || !ms_val.valid) {
    showToast('Please correct invalid fields before calculating.', 'error');
    return;
  }
  
  saveInputs(MODULE_ID, rawInputs);
  
  const b = parseFloat(rawInputs.b);
  const D = parseFloat(rawInputs.d_overall);
  const Cmin = parseFloat(rawInputs.cover);
  const Ast = parseFloat(rawInputs.ast);
  const bar_dia = parseFloat(rawInputs.bar_dia);
  const spacing = parseFloat(rawInputs.spacing);
  const M_service = parseFloat(rawInputs.m_service) * 1E6; // N.mm
  const limit = parseFloat(rawInputs.limit);
  const fck = parseFloat(rawInputs.fck);
  
  const d = D - Cmin - (bar_dia / 2); // effective depth
  
  let steps = [];
  
  // 1. Material properties
  const Es = 200000; // N/mm²
  const Ec = 5000 * Math.sqrt(fck); // N/mm²
  const m = Es / Ec;
  
  steps.push({
    step: 1,
    title: 'Elastic Moduli & Modular Ratio',
    formula: `Ec = 5000√fck = ${Ec.toFixed(0)}, m = Es/Ec`,
    result: "m = " + m.toFixed(2)
  });
  
  // 2. Neutral Axis Depth (x) of cracked section
  // b*x^2/2 = m*Ast*(d-x) => 0.5*b*x^2 + m*Ast*x - m*Ast*d = 0
  const A = 0.5 * b;
  const B_coeff = m * Ast;
  const C = -m * Ast * d;
  
  const x = (-B_coeff + Math.sqrt(B_coeff * B_coeff - 4 * A * C)) / (2 * A);
  
  steps.push({
    step: 2,
    title: 'Neutral Axis Depth (Cracked Elastic)',
    formula: 'bx²/2 = m×Ast(d - x)',
    result: "x = " + x.toFixed(1) + "  mm"
  });
  
  // 3. Cracked moment of inertia (Icr)
  const Icr = (b * Math.pow(x, 3) / 3) + m * Ast * Math.pow((d - x), 2);
  
  steps.push({
    step: 3,
    title: 'Moment of Inertia (Icr)',
    formula: 'Icr = bx³/3 + m×Ast(d - x)²',
    result: "Icr = " + (Icr / 1E6).toFixed(2) + " × 10⁶ mm⁴"
  });
  
  // 4. Stresses and Strains
  const fc = (M_service * x) / Icr; // concrete stress at extreme comp fiber
  const e1 = (M_service * (D - x)) / (Ec * Icr); // apparent strain at tension face
  
  steps.push({
    step: 4,
    title: 'Apparent Strain at Tension Face (ε1)',
    formula: 'ε1 = (M(D-x)) / (Ec×Icr)',
    result: "ε1 = " + (e1 * 1E6).toFixed(0) + " × 10⁻⁶"
  });
  
  // 5. Average Strain (εm)
  // εm = ε1 - (b*(D-x)*(a'-x)) / (3*Es*As*(d-x)) with a' = D for bottom face
  const stiffening_effect = (b * Math.pow(D - x, 2)) / (3 * Es * Ast * (d - x));
  let em = e1 - stiffening_effect;
  if (em < 0) em = 0; // Section is uncracked effectively under this service load
  
  steps.push({
    step: 5,
    title: 'Average Strain (εm)',
    formula: 'εm = ε1 - [b(D-x)²] / [3×Es×Ast(d-x)]',
    result: "εm = " + (em * 1E6).toFixed(0) + " × 10⁻⁶"
  });
  
  // 6. Distance 'am' (Crack width evaluated at soffit equidistant between bars)
  // Distance from center of bar spacing at tension face to surface of nearest longitudinal bar
  const dist_x = spacing / 2;
  const dist_y = Cmin + bar_dia / 2;
  const am = Math.sqrt(dist_x * dist_x + dist_y * dist_y) - (bar_dia / 2);
  
  steps.push({
    step: 6,
    title: 'Distance to Nearest Bar Surface (am)',
    formula: 'am = √((s/2)² + (c+φ/2)²) - φ/2',
    result: "am = " + am.toFixed(1) + " mm"
  });
  
  // 7. Design Surface Crack Width (Wcr)
  const Wcr = (3 * am * em) / (1 + 2 * (am - Cmin) / (D - x));
  
  steps.push({
    step: 7,
    title: 'Design Surface Crack Width (Wcr)',
    formula: 'Wcr = (3×am×εm) / (1 + 2(am-Cmin)/(D-x))',
    result: "Wcr = " + Wcr.toFixed(3) + " mm"
  });
  
  const isSafe = Wcr <= limit;
  const overallStatus = isSafe ? 'pass' : 'fail';
  
  const complianceChecks = [
    {
      id: 'crk_width',
      label: 'Crack Width Check (Wcr ≤ Limit)',
      status: overallStatus,
      value: Wcr.toFixed(3),
      limit: limit.toFixed(3),
      unit: 'mm'
    }
  ];
  
  const summaryCards = [
    { label: 'Design Crack Width', value: Wcr.toFixed(3), unit: 'mm', status: Wcr <= limit ? 'pass' : 'fail', highlight: true },
    { label: 'Strain (εm)', value: (em * 1E6).toFixed(0), unit: 'µε', sub: em === 0 ? 'Uncracked Section' : 'At tension soffit', status: 'info' },
    { label: 'Limit', value: limit.toFixed(2), unit: 'mm', sub: rawInputs.limit == '0.3' ? 'Normal Exposure' : 'Severe Exposure', status: 'info' }
  ];
  
  const content = `
    <div class="calculator-layout">
      <div class="results-main">
        ${renderResultSummary(summaryCards)}
        
        <div style="margin: 1.5rem 0; padding: 1.25rem; background: var(--bg-surface); border: 1px solid var(--border); border-left: 4px solid var(--color-primary); border-radius: var(--radius-md);">
          <strong style="display:block; margin-bottom: 0.5rem; color: var(--text-primary);">Crack Width Verdict:</strong>
          <span style="color: var(--text-secondary);">
            ${isSafe 
              ? `The calculated crack width of <strong>${Wcr.toFixed(3)} mm</strong> is <strong style="color: var(--color-accent);">SAFE</strong> against the allowable limit of ${limit.toFixed(2)} mm.` 
              : `<span style="color: var(--color-error);"><strong>UNSAFE!</strong> The calculated crack width of <strong>${Wcr.toFixed(3)} mm</strong> exceeds the allowable limit of ${limit.toFixed(2)} mm.</span>`}
          </span>
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
    { label: 'Wcr', value: Wcr.toFixed(3) + ' mm' },
    { label: 'Limit', value: limit.toFixed(2) + ' mm' },
    { label: 'Status', value: isSafe ? '✅ SAFE' : '❌ UNSAFE' }
  ]);
  resultsDiv.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export function initCrackWidth(container) {
  container.innerHTML = `
    <div class="calculator-page" id="crack-width-calc">
      <div class="print-header">
        <div class="print-header__brand">Stellar Civil — Crack Width Check</div>
        <div class="print-header__info"></div>
      </div>

      <div class="calculator-page__header">
        <h2>Crack Width Check</h2>
        <p>Estimate the design surface crack width of a reinforced concrete section under service loads.</p>
        <span class="calculator-page__code-ref">
          ${ICONS.info} IS 456:2000 — Annex F
        </span>
      </div>

      ${renderAssumptions([
        'Crack width is computed at the soffit of the beam directly below tension bars',
        'Section is assumed to be fully cracked for properties calculation (tension sustained by steel only)',
        'Creep effects are ignored or assumed implicitly factored in the quasi-permanent load',
        'Calculations use elastic cracked section analysis (Modular ratio m = Es/Ec)'
      ])}

      ${renderInputPanel('Material Properties', INPUT_FIELDS_MATERIAL, ICONS.info)}
      ${renderInputPanel('Beam Geometry', INPUT_FIELDS_GEOMETRY, ICONS.building)}
      ${renderInputPanel('Reinforcement Layout', INPUT_FIELDS_REINFORCEMENT, ICONS.calculator)}
      ${renderInputPanel('Design Limit States', INPUT_FIELDS_DESIGN, ICONS.calculator)}

      ${renderActionBar()}

      <div id="crack-width-results"></div>

      <div class="print-footer">
        Generated by Stellar Civil | For reference only. Verify with qualified engineer.
      </div>
    </div>
  `;

  container.querySelector('#btn-calculate').addEventListener('click', calculateCrackWidth);
  
  container.querySelector('#btn-clear').addEventListener('click', () => {
    localStorage.removeItem('stellar_civil_inputs_' + MODULE_ID);
    initCrackWidth(container);
    updateStickyBar([]);
  });

  const saved = loadInputs(MODULE_ID);
  if (saved) {
    setInputValues(container, saved);
  }
}
