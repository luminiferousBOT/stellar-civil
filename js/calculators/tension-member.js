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
import { STEEL_PROPS, STEEL_GRADES, ISA_DATA } from '../data/steel.js';

const MODULE_ID = 'tension-member';

const INPUT_FIELDS_MATERIAL = [
  { id: 'section', label: 'ISA Section', type: 'select', default: 'ISA 50x50x6',
    options: ISA_DATA.map(sec => ({ value: sec.designation, label: sec.designation })) },
  { id: 'grade', label: 'Steel Grade', type: 'select', default: 'E250',
    options: STEEL_GRADES.map(g => ({ value: g.grade, label: g.grade })) }
];

const INPUT_FIELDS_CONNECTION = [
  { id: 'conn_type', label: 'Connection Type', type: 'select', default: 'bolted',
    options: [
      { value: 'bolted', label: 'Bolted Connection' },
      { value: 'welded', label: 'Welded Connection' }
    ] },
  { id: 'bolt_dia', label: 'Bolt Hole Dia (do)', unit: 'mm', default: 18, min: 10, max: 40, step: 2 },
  { id: 'lc', label: 'Length of Connection (Lc)', unit: 'mm', default: 150, min: 20, max: 2000, step: 10, tooltip: 'Distance between outer bolts or length of weld' }
];

function calculateTensionMember() {
  const container = document.querySelector('.calculator-page');
  let resultsDiv = container.querySelector('#tension-member-results');
  if (!resultsDiv) {
    resultsDiv = document.createElement('div');
    resultsDiv.id = 'tension-member-results';
    container.appendChild(resultsDiv);
  }
  
  const rawInputs = getInputValues(container);
  
  const lc_val = validate(rawInputs.lc, 20, 2000, 'Length of Connection');
  let d0_val = { valid: true };
  if (rawInputs.conn_type === 'bolted') {
    d0_val = validate(rawInputs.bolt_dia, 10, 40, 'Bolt Hole Dia');
  }
  
  if (!lc_val.valid || !d0_val.valid) {
    showToast('Please correct invalid fields before calculating.', 'error');
    return;
  }
  
  saveInputs(MODULE_ID, rawInputs);
  
  const sectionName = rawInputs.section;
  const gradeName = rawInputs.grade;
  const isBolted = rawInputs.conn_type === 'bolted';
  const Lc = parseFloat(rawInputs.lc);
  const d0 = isBolted ? parseFloat(rawInputs.bolt_dia) : 0;
  
  const sec = ISA_DATA.find(s => s.designation === sectionName);
  const grade = STEEL_GRADES.find(g => g.grade === gradeName);
  const { fy, fu } = grade;
  const { gamma_m0, gamma_m1 } = STEEL_PROPS;
  
  let steps = [];
  
  // 1. Design Strength due to Yielding of Gross Section (Tdg)
  const Tdg = (sec.A * fy) / gamma_m0;
  
  steps.push({
    step: 1,
    title: 'Yielding of Gross Section (Tdg)',
    formula: 'Tdg = (Ag × fy) / γm0',
    result: "Tdg = " + (Tdg / 1000).toFixed(2) + " <span class=\"unit\">kN</span>"
  });
  
  // 2. Design Strength due to Rupture of Critical Section (Tdn)
  const w = sec.b;  // connected leg width
  const w_prime = sec.b; // outstanding leg width
  const t = sec.t;
  
  let Anc, bs;
  if (isBolted) {
    Anc = (w - d0 - t / 2) * t;
    // Assuming gauge distance g = 0.6 * w
    const g = 0.6 * w;
    bs = w + w_prime - t; // Very approx shear lag width for single angle connected by one leg
  } else {
    Anc = (w - t / 2) * t;
    bs = w; // for welded
  }
  
  const Ago = (w_prime - t / 2) * t;
  
  steps.push({
    step: 2,
    title: 'Net Areas (Anc, Ago)',
    formula: 'Anc (connected), Ago (outstanding)',
    result: `Anc=${Anc.toFixed(1)}, Ago=${Ago.toFixed(1)} <span class="unit">mm²</span>`
  });
  
  // Beta calculation
  let beta = 1.4 - 0.076 * (w_prime / t) * (fy / fu) * (bs / Lc);
  const beta_min = 0.7;
  const beta_max = (fu * gamma_m0) / (fy * gamma_m1);
  
  if (beta < beta_min) beta = beta_min;
  if (beta > beta_max) beta = beta_max;
  
  steps.push({
    step: 3,
    title: 'Shear Lag Factor (β)',
    formula: 'β = 1.4 - 0.076(w/t)(fy/fu)(bs/Lc)',
    result: "β = " + beta.toFixed(3)
  });
  
  const Tdn = (0.9 * Anc * fu) / gamma_m1 + (beta * Ago * fy) / gamma_m0;
  
  steps.push({
    step: 4,
    title: 'Rupture of Critical Section (Tdn)',
    formula: 'Tdn = (0.9×Anc×fu)/γm1 + (β×Ago×fy)/γm0',
    result: "Tdn = " + (Tdn / 1000).toFixed(2) + " <span class=\"unit\">kN</span>"
  });
  
  // Final Capacity
  const Td = Math.min(Tdg, Tdn) / 1000; // in kN
  
  const complianceChecks = [
    {
      id: 'beta_limit',
      label: 'Shear Lag Factor Limit (0.7 ≤ β ≤ βmax)',
      status: 'pass',
      value: beta.toFixed(3),
      limit: `[0.7, ${beta_max.toFixed(3)}]`,
      unit: ''
    }
  ];
  
  const summaryCards = [
    {
      label: 'Design Tension Capacity',
      value: Td.toFixed(2) + ' kN',
      sub: Tdg < Tdn ? 'Governed by Yielding' : 'Governed by Rupture',
      status: 'pass'
    },
    {
      label: 'Yielding Strength (Tdg)',
      value: (Tdg / 1000).toFixed(2) + ' kN',
      status: 'info'
    },
    {
      label: 'Rupture Strength (Tdn)',
      value: (Tdn / 1000).toFixed(2) + ' kN',
      status: 'info'
    }
  ];
  
  const content = `
    <div class="calculator-layout">
      <div class="results-main">
        ${renderResultSummary(summaryCards)}
        <div style="margin: 1.5rem 0; padding: 1rem; background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: var(--radius-md);">
          <strong>Note:</strong> Calculated for a single angle connected by one leg. Block shear failure (Tdb) should also be checked depending on connection end details.
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
    { label: 'Section', value: sectionName },
    { label: 'Grade', value: fy + ' MPa' },
    { label: 'Capacity (Td)', value: Td.toFixed(2) + ' kN' }
  ]);
}

export function initTensionMember(container) {
  container.innerHTML = `
    <div class="calculator-page" id="tension-member-calc">
      <div class="print-header">
        <div class="print-header__brand">Stellar Civil — Tension Member</div>
        <div class="print-header__info"></div>
      </div>

      <div class="calculator-page__header">
        <h2>Tension Member Capacity</h2>
        <p>Calculate the design tension capacity of single equal-angle members connected by one leg.</p>
        <span class="calculator-page__code-ref">
          ${ICONS.info} IS 800:2007 — Section 6
        </span>
      </div>

      ${renderAssumptions([
        'Calculated for a single angle connected by one leg',
        'Block shear failure (Tdb) is excluded in this module (depends on exact connection end details)',
        'Gauge distance is assumed approximately as 0.6 × width for rupture computations'
      ])}

      ${renderInputPanel('Material Grades', INPUT_FIELDS_MATERIAL, ICONS.info)}
      ${renderInputPanel('Connection Details', INPUT_FIELDS_CONNECTION, ICONS.shield)}

      ${renderActionBar()}

      <div id="tension-member-results"></div>

      <div class="print-footer">
        Generated by Stellar Civil | For reference only. Verify with qualified engineer.
      </div>
    </div>
  `;
  
  const saved = loadInputs(MODULE_ID);
  if (saved) {
    setInputValues(container, saved);
  }
  
  const connTypeEl = container.querySelector('#conn_type');
  const boltDiaInput = container.querySelector('#bolt_dia');
  const boltDiaGroup = boltDiaInput ? boltDiaInput.closest('.input-group') : null;
  
  if (connTypeEl && boltDiaGroup) {
    connTypeEl.addEventListener('change', (e) => {
      if (e.target.value === 'welded') {
        boltDiaGroup.style.display = 'none';
      } else {
        boltDiaGroup.style.display = 'block';
      }
    });
    
    // Initial setup
    if ((saved && saved.conn_type === 'welded') || connTypeEl.value === 'welded') {
      boltDiaGroup.style.display = 'none';
    }
  }
  
  container.querySelector('#btn-calculate').addEventListener('click', calculateTensionMember);
  
  container.querySelector('#btn-clear').addEventListener('click', () => {
    localStorage.removeItem("stellar_civil_inputs_" + MODULE_ID);
    initTensionMember(container);
    updateStickyBar([]);
  });
}

