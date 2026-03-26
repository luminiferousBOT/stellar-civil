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
import { FCK_GRADES, FY_GRADES } from '../data/materials.js';
import { getShearStrength, getMaxShearStress } from '../data/concrete.js';
import { getRebarArea } from '../data/rebar.js';

const MODULE_ID = 'shear-design';

const INPUT_FIELDS_MATERIAL = [
  { id: 'fck', label: 'Concrete Grade (fck)', type: 'select', default: 25,
    options: FCK_GRADES.map(fck => ({ value: fck, label: `M${fck}` })),
    tooltip: 'Characteristic compressive strength' },
  { id: 'fy', label: 'Stirrup Grade (fy)', type: 'select', default: 415,
    options: FY_GRADES.map(fy => ({ value: fy, label: `Fe${fy}` })),
    tooltip: 'Yield strength of transverse shear reinforcement' }
];

const INPUT_FIELDS_GEOMETRY = [
  { id: 'b', label: 'Beam Width (b)', unit: 'mm', default: 230, min: 150, max: 1000, step: 10, tooltip: 'Width of the beam section' },
  { id: 'd', label: 'Effective Depth (d)', unit: 'mm', default: 410, min: 150, max: 2000, step: 10, tooltip: 'Effective depth to tension steel centroid' }
];

const INPUT_FIELDS_DESIGN = [
  { id: 'vu', label: 'Factored Shear Force (Vu)', unit: 'kN', default: 120, min: 1, max: 5000, step: 1, tooltip: 'Ultimate design shear force at the section' },
  { id: 'ast', label: 'Provided Tension Steel (Ast)', unit: 'mm²', default: 603, min: 50, max: 10000, step: 1, tooltip: 'Actual area of main tension reinforcement provided at the section' },
  { id: 'stirrup_dia', label: 'Stirrup Bar Dia', unit: 'mm', type: 'select', default: 8,
    options: [8, 10, 12, 16].map(d => ({ value: d, label: `${d} mm` })), tooltip: 'Preferred diameter for shear links' },
  { id: 'stirrup_legs', label: 'Stirrup Legs', type: 'select', default: 2,
    options: [2, 4, 6].map(l => ({ value: l, label: `${l} Legged` })), tooltip: 'Number of vertical legs in the stirrup configuration' }
];

function calculateShearDesign() {
  const container = document.querySelector('.calculator-page');
  let resultsDiv = container.querySelector('#shear-design-results');
  if (!resultsDiv) {
    resultsDiv = document.createElement('div');
    resultsDiv.id = 'shear-design-results';
    container.appendChild(resultsDiv);
  }
  
  // 1. Validate inputs
  const rawInputs = getInputValues(container);
  
  const b_val = validate(rawInputs.b, 150, 1000, 'Beam Width');
  const d_val = validate(rawInputs.d, 150, 2000, 'Effective Depth');
  const vu_val = validate(rawInputs.vu, 1, 5000, 'Factored Shear Force');
  const ast_val = validate(rawInputs.ast, 50, 10000, 'Provided Tension Steel');
  
  if (!b_val.valid || !d_val.valid || !vu_val.valid || !ast_val.valid) {
    showToast('Please correct invalid fields before calculating.', 'error');
    return;
  }
  
  saveInputs(MODULE_ID, rawInputs);
  
  // 2. Extract values
  const b = parseFloat(rawInputs.b);
  const d = parseFloat(rawInputs.d);
  const Vu = parseFloat(rawInputs.vu);
  const Ast = parseFloat(rawInputs.ast);
  const fck = parseFloat(rawInputs.fck);
  const fy = parseFloat(rawInputs.fy);
  const stirrupDia = parseInt(rawInputs.stirrup_dia);
  const stirrupLegs = parseInt(rawInputs.stirrup_legs);
  
  let steps = [];
  
  // 3. Calculation Engine
  const tau_v = (Vu * 1E3) / (b * d);
  
  steps.push({
    step: 1,
    title: 'Nominal Shear Stress (τv)',
    formula: 'τv = Vu / (b × d)',
    result: "τv = " + tau_v.toFixed(2) + " <span class=\"unit\">N/mm²</span>"
  });
  
  const tau_c_max = getMaxShearStress(fck);
  steps.push({
    step: 2,
    title: 'Maximum Shear Stress (τc,max)',
    formula: 'IS 456 Table 20 for M' + fck,
    result: "τc,max = " + tau_c_max.toFixed(2) + " <span class=\"unit\">N/mm²</span>"
  });
  
  if (tau_v > tau_c_max) {
    showToast('Section is unsafe in shear (τv > τc,max). Redesign section.', 'error');
    // We can still render what we have
  }
  
  const pt = (100 * Ast) / (b * d);
  const tau_c = getShearStrength(pt, fck);
  
  steps.push({
    step: 3,
    title: 'Design Shear Strength (τc)',
    formula: 'pt = ' + pt.toFixed(2) + '%, IS 456 Table 19',
    result: "τc = " + tau_c.toFixed(2) + " <span class=\"unit\">N/mm²</span>"
  });
  
  const Asv = stirrupLegs * getRebarArea(stirrupDia);
  
  steps.push({
    step: 4,
    title: 'Area of Stirrup Legs (Asv)',
    formula: stirrupLegs + ' × (π/4) × ' + stirrupDia + '²',
    result: "Asv = " + Asv.toFixed(1) + " <span class=\"unit\">mm²</span>"
  });
  
  let Sv_req = 0;
  let design_type = '';
  let Vus = 0;
  
  if (tau_v <= 0.5 * tau_c) {
    design_type = 'No Shear Reinforcement Required theoretically. Provide nominal.';
    Sv_req = (0.87 * fy * Asv) / (0.4 * b);
    steps.push({
      step: 5,
      title: 'Nominal Shear Reinforcement',
      formula: 'Sv = (0.87 × fy × Asv) / (0.4 × b)',
      result: "Sv,req = " + Sv_req.toFixed(1) + " <span class=\"unit\">mm</span>"
    });
  } else if (tau_v <= tau_c) {
    design_type = 'Nominal Shear Reinforcement Required.';
    Sv_req = (0.87 * fy * Asv) / (0.4 * b);
    steps.push({
      step: 5,
      title: 'Nominal Shear Reinforcement',
      formula: 'Sv = (0.87 × fy × Asv) / (0.4 × b)',
      result: "Sv,req = " + Sv_req.toFixed(1) + " <span class=\"unit\">mm</span>"
    });
  } else {
    design_type = 'Design Shear Reinforcement Required.';
    Vus = Vu - (tau_c * b * d / 1E3);
    Sv_req = (0.87 * fy * Asv * d) / (Vus * 1E3);
    
    steps.push({
      step: 5,
      title: 'Shear Resisted by Stirrups (Vus)',
      formula: 'Vus = Vu - (τc × b × d)',
      result: "Vus = " + Vus.toFixed(2) + " <span class=\"unit\">kN</span>"
    });
    
    steps.push({
      step: 6,
      title: 'Required Stirrup Spacing',
      formula: 'Sv = (0.87 × fy × Asv × d) / Vus',
      result: "Sv,req = " + Sv_req.toFixed(1) + " <span class=\"unit\">mm</span>"
    });
  }
  
  // Check maximum spacing
  const Sv_max1 = 0.75 * d;
  const Sv_max2 = 300;
  const Sv_max = Math.min(Sv_max1, Sv_max2);
  
  steps.push({
    step: 7,
    title: 'Maximum Spacing (IS 456 Cl. 26.5.1.5)',
    formula: 'min(0.75d, 300 mm)',
    result: "Sv,max = " + Sv_max.toFixed(1) + " <span class=\"unit\">mm</span>"
  });
  
  // Provided spacing
  let Sv_provided = Math.floor(Math.min(Sv_req, Sv_max) / 5) * 5; // Round down to nearest 5mm
  if (Sv_provided < 50) Sv_provided = 50; // Practical minimum
  
  // 4. Render Results
  const sectionSafe = tau_v <= tau_c_max;
  const overallStatus = sectionSafe ? 'pass' : 'fail';
  
  const complianceChecks = [
    {
      label: 'Maximum Shear Stress Check',
      status: sectionSafe ? 'pass' : 'fail',
      text: `τv (${tau_v.toFixed(2)}) ≤ τc,max (${tau_c_max.toFixed(2)})`,
      ref: 'Cl. 40.2.3'
    },
    {
      label: 'Maximum Spacing',
      status: Sv_provided <= Sv_max ? 'pass' : 'warning',
      text: `Sv (${Sv_provided}) ≤ Sv,max (${Sv_max.toFixed(0)})`,
      ref: 'Cl. 26.5.1.5'
    }
  ];
  
  const summaryCards = [
    { label: 'Nominal Stress (τv)', value: tau_v.toFixed(2), unit: 'N/mm²', status: tau_v <= tau_c_max ? 'pass' : 'fail' },
    { label: 'Concrete Capacity (τc)', value: tau_c.toFixed(2), unit: 'N/mm²', status: 'info' },
    { label: 'Required Spacing', value: Sv_req.toFixed(0), unit: 'mm' },
    { label: 'Provided Stirrups', value: `${stirrupLegs}L - ${stirrupDia}φ @ ${Sv_provided} c/c`, highlight: true, status: overallStatus }
  ];
  
  const content = `
    <div class="calculator-layout">
      <div class="results-main">
        ${renderResultSummary(summaryCards)}
        
        <div style="margin: 1.5rem 0; padding: 1.25rem; background: var(--bg-surface); border: 1px solid var(--border); border-left: 4px solid var(--color-primary); border-radius: var(--radius-md);">
          <strong style="display:block; margin-bottom: 0.5rem; color: var(--text-primary);">Design Verdict:</strong>
          <span style="color: var(--text-secondary);">
            ${sectionSafe 
              ? `Provide <strong>${stirrupLegs} Legged ${stirrupDia}φ</strong> stirrups @ <strong>${Sv_provided} mm c/c</strong>. (${design_type})` 
              : `<span style="color: var(--color-error);">Section Unsafe (τv > τc,max). Please increase the section dimensions.</span>`}
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
    { label: 'τv', value: `${tau_v.toFixed(2)} N/mm²` },
    { label: 'Stirrups', value: `${stirrupLegs}L-${stirrupDia}φ @ ${Sv_provided}c/c` },
    { label: 'Status', value: overallStatus === 'pass' ? 'OK' : 'FAIL', status: overallStatus }
  ].filter(Boolean));
  
  resultsDiv.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export function initShearDesign(container) {
  container.innerHTML = `
    <div class="calculator-page" id="shear-design-calc">
      <div class="print-header">
        <div class="print-header__brand">Stellar Civil — Shear Design</div>
        <div class="print-header__info"></div>
      </div>

      <div class="calculator-page__header">
        <h2>Shear & Stirrup Design</h2>
        <p>Design transverse reinforcement for beams subjected to high shear forces using the limit state method.</p>
        <span class="calculator-page__code-ref">
          ${ICONS.info} IS 456:2000 — Cl. 40
        </span>
      </div>

      ${renderAssumptions([
        'Concrete shear capacity (τc) is calculated using IS 456:2000 Table 19',
        'Maximum shear stress (τc,max) is checked against Table 20',
        'Stirrup contribution is based on vertical legs only (no bent-up bars assumed)',
        'Spacing is restricted to the minimum required by calculation and Cl 26.5.1.5'
      ])}

      ${renderInputPanel('Material Properties', INPUT_FIELDS_MATERIAL, ICONS.info)}
      ${renderInputPanel('Beam Geometry', INPUT_FIELDS_GEOMETRY, ICONS.building)}
      ${renderInputPanel('Design Limit States', INPUT_FIELDS_DESIGN, ICONS.calculator)}

      ${renderActionBar()}

      <div id="shear-design-results"></div>

      <div class="print-footer">
        Generated by Stellar Civil | For reference only. Verify with qualified engineer.
      </div>
    </div>
  `;

  container.querySelector('#btn-calculate').addEventListener('click', calculateShearDesign);
  
  container.querySelector('#btn-clear').addEventListener('click', () => {
    localStorage.removeItem('stellar_civil_inputs_' + MODULE_ID);
    initShearDesign(container);
    updateStickyBar([]);
  });

  const saved = loadInputs(MODULE_ID);
  if (saved) {
    setInputValues(container, saved);
  }
}
