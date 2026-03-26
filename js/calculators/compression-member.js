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
import { STEEL_PROPS, STEEL_GRADES, ISMB_DATA } from '../data/steel.js';

const MODULE_ID = 'compression-member';

const INPUT_FIELDS_MATERIAL = [
  { id: 'section', label: 'ISMB Section', type: 'select', default: 'ISMB 300',
    options: ISMB_DATA.map(sec => ({ value: sec.designation, label: sec.designation })) },
  { id: 'grade', label: 'Steel Grade', type: 'select', default: 'E250',
    options: STEEL_GRADES.map(g => ({ value: g.grade, label: g.grade })) }
];

const INPUT_FIELDS_GEOMETRY = [
  { id: 'klz', label: 'Effective Length (Z-Z)', unit: 'mm', default: 3000, min: 100, max: 20000, step: 100, tooltip: 'Effective length for buckling about major axis' },
  { id: 'kly', label: 'Effective Length (Y-Y)', unit: 'mm', default: 3000, min: 100, max: 20000, step: 100, tooltip: 'Effective length for buckling about minor axis' }
];

// Imperfection factors from Table 7
const IMPERFECTION_FACTORS = {
  a: 0.21,
  b: 0.34,
  c: 0.49,
  d: 0.76
};

function calculateCompressionMember() {
  const container = document.querySelector('.calculator-page');
  let resultsDiv = container.querySelector('#compression-member-results');
  if (!resultsDiv) {
    resultsDiv = document.createElement('div');
    resultsDiv.id = 'compression-member-results';
    container.appendChild(resultsDiv);
  }
  
  const rawInputs = getInputValues(container);
  
  const klz_val = validate(rawInputs.klz, 100, 20000, 'Effective Length Z-Z');
  const kly_val = validate(rawInputs.kly, 100, 20000, 'Effective Length Y-Y');
  
  if (!klz_val.valid || !kly_val.valid) {
    showToast('Please correct invalid fields before calculating.', 'error');
    return;
  }
  
  saveInputs(MODULE_ID, rawInputs);
  
  const sectionName = rawInputs.section;
  const gradeName = rawInputs.grade;
  const KLz = parseFloat(rawInputs.klz);
  const KLy = parseFloat(rawInputs.kly);
  
  const sec = ISMB_DATA.find(s => s.designation === sectionName);
  const grade = STEEL_GRADES.find(g => g.grade === gradeName);
  const fy = grade.fy;
  const { gamma_m0, E } = STEEL_PROPS;
  
  let steps = [];
  
  // 1. Determine buckling class (Table 10 for rolled I-sections)
  const ratio_hbf = sec.h / sec.bf;
  let class_z = 'b';
  let class_y = 'c';

  if (ratio_hbf > 1.2) {
    if (sec.tf <= 40) {
      class_z = 'a';
      class_y = 'b';
    } else {
      class_z = 'b';
      class_y = 'c';
    }
  } else {
    // ratio <= 1.2
    if (sec.tf <= 100) {
      class_z = 'b';
      class_y = 'c';
    } else {
      class_z = 'd';
      class_y = 'd';
    }
  }
  
  steps.push({
    step: 1,
    title: 'Buckling Class (Table 10)',
    formula: `h/bf = ${ratio_hbf.toFixed(2)}, tf = ${sec.tf} mm`,
    result: `Z-Z: Class ${class_z}, Y-Y: Class ${class_y}`
  });
  
  // Calculate compressive strength function
  function calcFcd(KL, r, buck_class, axis) {
    const lambda = KL / r;
    const fcc = (Math.PI * Math.PI * E) / (lambda * lambda);
    const lam_nd = Math.sqrt(fy / fcc);
    const alpha = IMPERFECTION_FACTORS[buck_class];
    const phi = 0.5 * (1 + alpha * (lam_nd - 0.2) + lam_nd * lam_nd);
    
    let fcd = fy / (gamma_m0 * (phi + Math.sqrt(phi * phi - lam_nd * lam_nd)));
    const fcd_max = fy / gamma_m0;
    if (fcd > fcd_max) fcd = fcd_max;
    
    return { lambda, fcc, lam_nd, alpha, phi, fcd };
  }
  
  const resZ = calcFcd(KLz, sec.rz, class_z, 'z');
  const resY = calcFcd(KLy, sec.ry, class_y, 'y');
  
  steps.push({
    step: 2,
    title: 'Slenderness Ratio (λ)',
    formula: 'λ = KL / r',
    result: `λz = ${resZ.lambda.toFixed(2)}, λy = ${resY.lambda.toFixed(2)}`
  });
  
  steps.push({
    step: 3,
    title: 'Euler Buckling Stress (fcc)',
    formula: 'fcc = π²E / λ²',
    result: `fcc,y = ${resY.fcc.toFixed(1)} N/mm²` // y-axis usually governs
  });
  
  steps.push({
    step: 4,
    title: 'Design Compressive Stress (fcd)',
    formula: 'IS 800 Cl 7.1.2.1 Perry-Robertson formula',
    result: `fcd,z = ${resZ.fcd.toFixed(2)}, fcd,y = ${resY.fcd.toFixed(2)} <span class="unit">MPa</span>`
  });
  
  const fcd_gov = Math.min(resZ.fcd, resY.fcd);
  const Pd = (sec.A * fcd_gov) / 1000; // kN
  
  steps.push({
    step: 5,
    title: 'Design Compressive Strength (Pd)',
    formula: 'Pd = Ae × fcd,min',
    result: "Pd = " + Pd.toFixed(2) + " <span class=\"unit\">kN</span>"
  });
  
  const lambda_max = Math.max(resZ.lambda, resY.lambda);
  const isSafe = lambda_max <= 180;
  const overallStatus = isSafe ? 'pass' : 'fail';
  
  const complianceChecks = [
    {
      id: 'slenderness',
      label: 'Maximum Slenderness Ratio (λ ≤ 180 for dead/live load)',
      status: overallStatus,
      value: lambda_max.toFixed(2),
      limit: '180.00',
      unit: ''
    }
  ];
  
  const summaryCards = [
    {
      label: 'Column Capacity (Pd)',
      value: Pd.toFixed(2) + ' kN',
      sub: 'Governing Axis: ' + (resZ.fcd < resY.fcd ? 'Z-Z' : 'Y-Y'),
      status: overallStatus
    },
    {
      label: 'Stress Factor (fcd)',
      value: fcd_gov.toFixed(2) + ' MPa',
      status: 'info'
    },
    {
      label: 'Max Slenderness',
      value: lambda_max.toFixed(2),
      status: overallStatus
    }
  ];
  
  const content = `
    <div class="calculator-layout">
      <div class="results-main">
        ${renderResultSummary(summaryCards)}
        <div style="margin: 1.5rem 0; padding: 1rem; background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: var(--radius-md);">
          <strong>Conclusion:</strong> Allowable compressive load is <strong>${Pd.toFixed(2)} kN</strong>.
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
    { label: 'Max λ', value: lambda_max.toFixed(2) },
    { label: 'Capacity (Pd)', value: Pd.toFixed(2) + ' kN' }
  ]);
}

export function initCompressionMember(container) {
  container.innerHTML = `
    <div class="calculator-page" id="compression-member-calc">
      <div class="print-header">
        <div class="print-header__brand">Stellar Civil — Compression Member</div>
        <div class="print-header__info"></div>
      </div>

      <div class="calculator-page__header">
        <h2>Compression Member Capacity</h2>
        <p>Calculate buckling resistance of ISMB sections subjected to axial compression.</p>
        <span class="calculator-page__code-ref">
          ${ICONS.info} IS 800:2007 — Section 7
        </span>
      </div>

      ${renderAssumptions([
        'Calculated for doubly symmetric rolled I-sections (ISMB)',
        'Buckling class is directly extracted from IS 800 Table 10 based on h/bf and tf thresholds',
        'Effective lengths for major and minor axes are explicitly supplied'
      ])}

      ${renderInputPanel('Section & Grade', INPUT_FIELDS_MATERIAL, ICONS.info)}
      ${renderInputPanel('Effective Lengths', INPUT_FIELDS_GEOMETRY, ICONS.building)}

      ${renderActionBar()}

      <div id="compression-member-results"></div>

      <div class="print-footer">
        Generated by Stellar Civil | For reference only. Verify with qualified engineer.
      </div>
    </div>
  `;
  
  const saved = loadInputs(MODULE_ID);
  if (saved) {
    setInputValues(container, saved);
  }
  
  container.querySelector('#btn-calculate').addEventListener('click', calculateCompressionMember);
  
  container.querySelector('#btn-clear').addEventListener('click', () => {
    localStorage.removeItem("stellar_civil_inputs_" + MODULE_ID);
    initCompressionMember(container);
    updateStickyBar([]);
  });
}
