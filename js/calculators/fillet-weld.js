import { 
  renderInputPanel,
  renderResultSummary, 
  renderStepTable,
  renderComplianceChecks,
  renderAssumptions,
  renderActionBar,
  setInputValues,
  getInputValues,
  showToast,
  updateStickyBar,
  ICONS
} from '../utils/ui.js';
import { validate } from '../utils/validation.js';
import { saveInputs, loadInputs } from '../utils/storage.js';
import { STEEL_PROPS, STEEL_GRADES } from '../data/steel.js';

const MODULE_ID = 'fillet-weld';

const INPUT_FIELDS_MATERIAL = [
  { id: 'grade', label: 'Steel Grade', type: 'select', default: 'E250',
    options: STEEL_GRADES.map(g => ({ value: g.grade, label: g.grade })) }
];

const INPUT_FIELDS_WELD = [
  { id: 'site', label: 'Welding Location', type: 'select', default: 'shop',
    options: [
      { value: 'shop', label: 'Shop Welding (γmw = 1.25)' },
      { value: 'field', label: 'Field Welding (γmw = 1.50)' }
    ] },
  { id: 'weld_size', label: 'Weld Size (s)', type: 'select', default: '6',
    options: [3, 4, 5, 6, 8, 10, 12].map(size => ({ value: size.toString(), label: `${size} mm` })) },
  { id: 't_max', label: 'Thickness of Thicker Part', unit: 'mm', default: 12, min: 1, max: 100, step: 1, tooltip: 'To check minimum weld size' }
];

const INPUT_FIELDS_LOADING = [
  { id: 'pu', label: 'Applied Load (Pu)', unit: 'kN', default: 150, min: 1, max: 5000, step: 1 }
];

function calculateFilletWeld() {
  const container = document.querySelector('.calculator-page');
  let resultsDiv = container.querySelector('#fillet-weld-results');
  if (!resultsDiv) {
    resultsDiv = document.createElement('div');
    resultsDiv.id = 'fillet-weld-results';
    container.appendChild(resultsDiv);
  }
  
  const rawInputs = getInputValues(container);
  
  const pu_val = validate(rawInputs.pu, 1, 5000, 'Applied Load');
  const tmax_val = validate(rawInputs.t_max, 1, 100, 'Thickness of Thicker Part');
  
  if (!pu_val.valid || !tmax_val.valid) {
    showToast('Please correct invalid fields before calculating.', 'error');
    return;
  }
  
  saveInputs(MODULE_ID, rawInputs);
  
  const gradeName = rawInputs.grade;
  const isShop = rawInputs.site === 'shop';
  const Pu = parseFloat(rawInputs.pu); // kN
  const s = parseFloat(rawInputs.weld_size); // mm
  const t_max = parseFloat(rawInputs.t_max); // mm
  
  const grade = STEEL_GRADES.find(g => g.grade === gradeName);
  const fu = grade.fu;
  const gamma_mw = isShop ? STEEL_PROPS.gamma_mw : STEEL_PROPS.gamma_mw_field;
  
  let steps = [];
  
  // 1. Minimum Weld Size Check (Table 21)
  let s_min = 3;
  if (t_max <= 10) s_min = 3;
  else if (t_max <= 20) s_min = 5;
  else if (t_max <= 32) s_min = 6;
  else if (t_max <= 50) s_min = 8;
  else s_min = 10;
  
  steps.push({
    step: 1,
    title: 'Minimum Weld Size (IS 800 Table 21)',
    formula: `For thicker part = ${t_max} mm`,
    result: `s,min = ${s_min} mm`
  });
  
  if (s < s_min) {
    showToast(`Weld size (${s} mm) is less than minimum required (${s_min} mm).`, 'error');
  }
  
  // 2. Throat Thickness
  const t = 0.7 * s;
  
  steps.push({
    step: 2,
    title: 'Effective Throat Thickness (t)',
    formula: `t = 0.7 × s (assumed 90° fusion faces)`,
    result: `t = ${t.toFixed(1)} mm`
  });
  
  // 3. Design Shear Stress of Weld
  const fwd = fu / (Math.sqrt(3) * gamma_mw);
  
  steps.push({
    step: 3,
    title: 'Design Stress of Weld (fwd)',
    formula: `fwd = fu / (√3 × γmw) = ${fu} / (√3 × ${gamma_mw})`,
    result: `fwd = ${fwd.toFixed(2)} MPa`
  });
  
  // 4. Capacity per mm length
  const Pdw_per_mm = (t * fwd) / 1000; // kN / mm
  
  steps.push({
    step: 4,
    title: 'Weld Capacity per mm',
    formula: `pdw = t × fwd`,
    result: `pdw = ${Pdw_per_mm.toFixed(3)} kN/mm`
  });
  
  // 5. Required Effective Length
  const Lw_req = Pu / Pdw_per_mm;
  const Lw_actual = Lw_req + 2 * s; // adding 2s for end returns (Cl 10.5.4)
  
  steps.push({
    step: 5,
    title: 'Required Effective Length (Lw)',
    formula: `Lw = Pu / pdw`,
    result: `Lw = ${Lw_req.toFixed(1)} mm`
  });
  
  steps.push({
    step: 6,
    title: 'Actual Length to Provide (Lw,actual)',
    formula: `Lw,act = Lw + 2s (End Returns)`,
    result: `Lw,act = ${Lw_actual.toFixed(1)} mm`
  });
  
  const isSafeSize = s >= s_min;
  
  const complianceChecks = [
    {
      id: 'weld_size_min',
      label: 'Minimum Weld Size (s ≥ s,min)',
      status: isSafeSize ? 'pass' : 'fail',
      value: s.toString(),
      limit: s_min.toString(),
      unit: 'mm'
    }
  ];
  
  const summaryCards = [
    {
      label: 'Total Length to Provide',
      value: Math.ceil(Lw_actual) + ' mm',
      sub: `For ${s}mm Fillet Weld`,
      status: 'pass'
    },
    {
      label: 'Capacity per mm',
      value: Pdw_per_mm.toFixed(2) + ' kN',
      status: 'info'
    },
    {
      label: 'Throat Thickness',
      value: t.toFixed(1) + ' mm',
      status: 'info'
    }
  ];
  
  const content = `
    <div class="calculator-layout">
      <div class="results-main">
        ${renderResultSummary(summaryCards)}
        <div style="margin: 1.5rem 0; padding: 1rem; background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: var(--radius-md);">
          <strong>Action:</strong> Provide a <strong>${s} mm</strong> fillet weld for a total continuous length of <strong>${Math.ceil(Lw_actual)} mm</strong>.
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
    { label: 'Weld Size', value: s + ' mm' },
    { label: 'Capacity/mm', value: Pdw_per_mm.toFixed(2) + ' kN/mm' },
    { label: 'Length to Provide', value: Math.ceil(Lw_actual) + ' mm' }
  ]);
}

export function initFilletWeld(container) {
  container.innerHTML = `
    <div class="calculator-page" id="fillet-weld-calc">
      <div class="print-header">
        <div class="print-header__brand">Stellar Civil — Fillet Weld Design</div>
        <div class="print-header__info"></div>
      </div>

      <div class="calculator-page__header">
        <h2>Fillet Weld Design</h2>
        <p>Calculate required fillet weld length for a given design load.</p>
        <span class="calculator-page__code-ref">
          ${ICONS.info} IS 800:2007 — Section 10.5
        </span>
      </div>

      ${renderAssumptions([
        'Calculated assuming a fusion face angle of 90° (effective throat t = 0.7 × s)',
        'Automatically adds 2s to the effective length to account for weld end returns',
        'Load is assumed uniformly distributed along the entire length'
      ])}

      ${renderInputPanel('Material Grades', INPUT_FIELDS_MATERIAL, ICONS.info)}
      ${renderInputPanel('Weld Details', INPUT_FIELDS_WELD, ICONS.building)}
      ${renderInputPanel('Design Loads', INPUT_FIELDS_LOADING, ICONS.calculator)}

      ${renderActionBar()}

      <div id="fillet-weld-results"></div>

      <div class="print-footer">
        Generated by Stellar Civil | For reference only. Verify with qualified engineer.
      </div>
    </div>
  `;
  
  const saved = loadInputs(MODULE_ID);
  if (saved) {
    setInputValues(container, saved);
  }
  
  container.querySelector('#btn-calculate').addEventListener('click', calculateFilletWeld);
  
  container.querySelector('#btn-clear').addEventListener('click', () => {
    localStorage.removeItem("stellar_civil_inputs_" + MODULE_ID);
    initFilletWeld(container);
    updateStickyBar([]);
  });
}
