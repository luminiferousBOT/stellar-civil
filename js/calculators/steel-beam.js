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

const MODULE_ID = 'steel-beam';

const INPUT_FIELDS_MATERIAL = [
  { id: 'section', label: 'ISMB Section', type: 'select', default: 'ISMB 300',
    options: ISMB_DATA.map(sec => ({ value: sec.designation, label: sec.designation })) },
  { id: 'grade', label: 'Steel Grade', type: 'select', default: 'E250',
    options: STEEL_GRADES.map(g => ({ value: g.grade, label: g.grade })) }
];

const INPUT_FIELDS_GEOMETRY = [
  { id: 'span', label: 'Unbraced Length (L)', unit: 'm', default: 4.0, min: 0.5, max: 30, step: 0.5 },
  { id: 'support', label: 'Lateral Support', type: 'select', default: 'supported',
    options: [
      { value: 'supported', label: 'Laterally Supported' },
      { value: 'unsupported', label: 'Laterally Unsupported' }
    ] }
];

const INPUT_FIELDS_LOADING = [
  { id: 'mz', label: 'Applied Moment (Mz)', unit: 'kN·m', default: 100, min: 0, max: 5000, step: 1, tooltip: 'Factored Design Bending Moment' },
  { id: 'vz', label: 'Applied Shear (Vz)', unit: 'kN', default: 50, min: 0, max: 2000, step: 1, tooltip: 'Factored Design Shear Force' }
];

function calculateSteelBeam() {
  const container = document.querySelector('.calculator-page');
  let resultsDiv = container.querySelector('#steel-beam-results');
  if (!resultsDiv) {
    resultsDiv = document.createElement('div');
    resultsDiv.id = 'steel-beam-results';
    container.appendChild(resultsDiv);
  }
  
  const rawInputs = getInputValues(container);
  
  const span_val = validate(rawInputs.span, 0.5, 30, 'Unbraced Length');
  const mz_val = validate(rawInputs.mz, 0, 5000, 'Applied Moment');
  const vz_val = validate(rawInputs.vz, 0, 2000, 'Applied Shear');
  
  if (!span_val.valid || !mz_val.valid || !vz_val.valid) {
    showToast('Please correct invalid fields before calculating.', 'error');
    return;
  }
  
  saveInputs(MODULE_ID, rawInputs);
  
  const sectionName = rawInputs.section;
  const gradeName = rawInputs.grade;
  const L = parseFloat(rawInputs.span) * 1000; // mm
  const isSupported = rawInputs.support === 'supported';
  const Mz_app = parseFloat(rawInputs.mz); // kN.m
  const Vz_app = parseFloat(rawInputs.vz); // kN
  
  const sec = ISMB_DATA.find(s => s.designation === sectionName);
  const grade = STEEL_GRADES.find(g => g.grade === gradeName);
  const fy = grade.fy;
  const { gamma_m0, E, v } = STEEL_PROPS;
  const G = E / (2 * (1 + v)); // Shear modulus ~ 76923 N/mm²
  
  let steps = [];
  
  // 1. Section Classification (Table 2)
  const epsilon = Math.sqrt(250 / fy);
  const b_half = sec.bf / 2;
  const flange_ratio = b_half / sec.tf;
  
  const d_clear = sec.h - 2 * (sec.tf + sec.R1);
  const web_ratio = d_clear / sec.tw;
  
  let class_f = 3, class_w = 3;
  if (flange_ratio <= 9.4 * epsilon) class_f = 1;
  else if (flange_ratio <= 10.5 * epsilon) class_f = 2;
  
  if (web_ratio <= 84 * epsilon) class_w = 1;
  else if (web_ratio <= 105 * epsilon) class_w = 2;
  
  const sec_class_num = Math.max(class_f, class_w);
  const classNames = { 1: 'Plastic (Class 1)', 2: 'Compact (Class 2)', 3: 'Semi-Compact (Class 3)' };
  const sec_class = classNames[sec_class_num];
  
  steps.push({
    step: 1,
    title: 'Section Classification (IS 800 Table 2)',
    formula: `ε = ${epsilon.toFixed(2)}, b/tf = ${flange_ratio.toFixed(1)}, d/tw = ${web_ratio.toFixed(1)}`,
    result: `Overall Class: ${sec_class}`
  });
  
  if (sec_class_num > 3) {
    showToast('Slender sections not supported currently.', 'error');
    return;
  }
  
  const beta_b = sec_class_num <= 2 ? 1.0 : (sec.Zez / sec.Zpz);
  
  // 2. Shear Capacity (Vd)
  const Vd = (sec.h * sec.tw * fy) / (Math.sqrt(3) * gamma_m0 * 1000); // kN
  
  steps.push({
    step: 2,
    title: 'Design Shear Strength (Vd)',
    formula: 'Vd = (h × tw × fyw) / (√3 × γm0)',
    result: `Vd = ${Vd.toFixed(2)} kN`
  });
  
  const isHighShear = Vz_app > 0.6 * Vd;
  steps.push({
    step: 3,
    title: 'Shear Check',
    formula: `Vz = ${Vz_app} kN, 0.6Vd = ${(0.6*Vd).toFixed(2)} kN`,
    result: isHighShear ? 'High Shear Case' : 'Low Shear Case'
  });
  
  // 3. Design Bending Strength (Md)
  let Md = 0;
  let calculation_note = '';
  
  if (isSupported) {
    // Laterally Supported Beam (Cl 8.2.1)
    const Z_used = sec_class_num <= 2 ? sec.Zpz : sec.Zez;
    Md = (beta_b * (Z_used * 1000) * fy) / (gamma_m0 * 1E6); // kN.m
    
    // Check maximum limit 1.2 * Ze * fy / gamma_m0
    const Md_max = (1.2 * (sec.Zez * 1000) * fy) / (gamma_m0 * 1E6);
    if (Md > Md_max && sec_class_num <= 2) {
      Md = Md_max;
      calculation_note = ' (Governed by 1.2Ze limit)';
    }
    
    if (isHighShear && sec_class_num <= 2) {
      // Cl 8.2.1.3: High shear plastic moment reduction (simplified)
      const beta = Math.pow((2 * Vz_app / Vd) - 1, 2);
      const Mfd = ((sec.Zpz * 1000) - (sec.tw * sec.h * sec.h / 4)) * fy / (gamma_m0 * 1E6); // approx flange plastic moment
      Md = Md - beta * (Md - Mfd);
      calculation_note = ' (Reduced for High Shear)';
    }
    
    steps.push({
      step: 4,
      title: 'Design Bending Strength (Md)',
      formula: `Laterally Supported, βb = ${beta_b.toFixed(2)}`,
      result: `Md = ${Md.toFixed(2)} kN·m` + calculation_note
    });
    
  } else {
    // Laterally Unsupported Beam (Cl 8.2.2)
    // Need Mcr. Calculate It and Iw.
    const It = (2 * sec.bf * Math.pow(sec.tf, 3) + (sec.h - 2 * sec.tf) * Math.pow(sec.tw, 3)) / 3;
    const hf = sec.h - sec.tf;
    const Iyy_mm4 = sec.Iyy * 10000;
    const Iw = 0.25 * Iyy_mm4 * hf * hf; // Iyy * hf^2 / 4
    
    steps.push({
      step: 4,
      title: 'Torsional Constants (It, Iw)',
      formula: `Calculation of St. Venant & Warping constants`,
      result: `It = ${(It / 1E4).toFixed(2)} cm⁴, Iw = ${(Iw / 1E10).toFixed(2)} cm⁶`
    });
    
    const term1 = (Math.PI * Math.PI * E * Iyy_mm4) / (L * L);
    const term2 = G * It + (Math.PI * Math.PI * E * Iw) / (L * L);
    const Mcr = Math.sqrt(term1 * term2) / 1E6; // kN.m
    
    steps.push({
      step: 5,
      title: 'Elastic Lateral Buckling Moment (Mcr)',
      formula: `Mcr = √( (π²EIy/L²) × (GIt + π²EIw/L²) )`,
      result: `Mcr = ${Mcr.toFixed(2)} kN·m`
    });
    
    const lam_LT = Math.sqrt( (beta_b * (sec.Zpz * 1000) * fy / 1E6) / Mcr );
    const alpha_LT = 0.21; // Rolled steel sections
    const phi_LT = 0.5 * (1 + alpha_LT * (lam_LT - 0.2) + lam_LT * lam_LT);
    const X_LT = 1 / (phi_LT + Math.sqrt(phi_LT * phi_LT - lam_LT * lam_LT));
    let fbd = X_LT * fy / gamma_m0;
    if (fbd > fy / gamma_m0) fbd = fy / gamma_m0;
    
    steps.push({
      step: 6,
      title: 'Design Bending Stress (fbd)',
      formula: `λLT = ${lam_LT.toFixed(3)}, ΦLT = ${phi_LT.toFixed(3)}`,
      result: `fbd = ${fbd.toFixed(2)} MPa`
    });
    
    Md = beta_b * (sec.Zpz * 1000) * fbd / 1E6; // kN.m
    
    steps.push({
      step: 7,
      title: 'Design Bending Strength (Md)',
      formula: `Md = βb × Zp × fbd`,
      result: `Md = ${Md.toFixed(2)} kN·m`
    });
  }
  
  const isMomSafe = Mz_app <= Md;
  const isShearSafe = Vz_app <= Vd;
  const overallStatus = isMomSafe && isShearSafe ? 'pass' : 'fail';
  
  const complianceChecks = [
    {
      id: 'moment',
      label: 'Bending Capacity (Mz ≤ Md)',
      status: isMomSafe ? 'pass' : 'fail',
      value: Mz_app.toFixed(1),
      limit: Md.toFixed(1),
      unit: 'kN·m'
    },
    {
      id: 'shear',
      label: 'Shear Capacity (Vz ≤ Vd)',
      status: isShearSafe ? 'pass' : 'fail',
      value: Vz_app.toFixed(1),
      limit: Vd.toFixed(1),
      unit: 'kN'
    }
  ];
  
  const summaryCards = [
    {
      label: 'Moment Capacity (Md)',
      value: Md.toFixed(2) + ' kN·m',
      sub: isSupported ? 'Laterally Supported' : 'Buckling Controls',
      status: isMomSafe ? 'pass' : 'fail'
    },
    {
      label: 'Shear Capacity (Vd)',
      value: Vd.toFixed(2) + ' kN',
      sub: isHighShear ? 'High Shear Condition' : 'Low Shear Check',
      status: isShearSafe ? 'pass' : 'fail'
    },
    {
      label: 'Section Class',
      value: `Class ${sec_class_num}`,
      status: 'info'
    }
  ];
  
  const content = `
    <div class="calculator-layout">
      <div class="results-main">
        ${renderResultSummary(summaryCards)}
        <div style="margin: 1.5rem 0; padding: 1rem; background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: var(--radius-md);">
          <strong>Conclusion:</strong> Section <strong>${sectionName}</strong> is <strong>${overallStatus === 'pass' ? 'SAFE' : 'UNSAFE'}</strong> for the applied forces.
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
    { label: 'Md', value: Md.toFixed(2) + ' kN·m' },
    { label: 'Vd', value: Vd.toFixed(2) + ' kN' },
    { label: 'Status', value: overallStatus === 'pass' ? '✅ SAFE' : '❌ UNSAFE' }
  ]);
}

export function initSteelBeam(container) {
  container.innerHTML = `
    <div class="calculator-page" id="steel-beam-calc">
      <div class="print-header">
        <div class="print-header__brand">Stellar Civil — Steel Beam Design</div>
        <div class="print-header__info"></div>
      </div>

      <div class="calculator-page__header">
        <h2>Steel Beam Design</h2>
        <p>Calculate bending and shear capacity of ISMB sections including lateral torsional buckling.</p>
        <span class="calculator-page__code-ref">
          ${ICONS.info} IS 800:2007 — Section 8
        </span>
      </div>

      ${renderAssumptions([
        'Section classification determines plastic vs elastic section modulus usage',
        'Laterally unsupported case considers Elastic Lateral Buckling Moment (Mcr)',
        'Check for high shear condition incorporates moment capacity reduction if Vz > 0.6*Vd'
      ])}

      ${renderInputPanel('Section & Grade', INPUT_FIELDS_MATERIAL, ICONS.info)}
      ${renderInputPanel('Span & Support Conditions', INPUT_FIELDS_GEOMETRY, ICONS.building)}
      ${renderInputPanel('Design Loads', INPUT_FIELDS_LOADING, ICONS.calculator)}

      ${renderActionBar()}

      <div id="steel-beam-results"></div>

      <div class="print-footer">
        Generated by Stellar Civil | For reference only. Verify with qualified engineer.
      </div>
    </div>
  `;
  
  const saved = loadInputs(MODULE_ID);
  if (saved) {
    setInputValues(container, saved);
  }
  
  container.querySelector('#btn-calculate').addEventListener('click', calculateSteelBeam);
  
  container.querySelector('#btn-clear').addEventListener('click', () => {
    localStorage.removeItem("stellar_civil_inputs_" + MODULE_ID);
    initSteelBeam(container);
    updateStickyBar([]);
  });
}
