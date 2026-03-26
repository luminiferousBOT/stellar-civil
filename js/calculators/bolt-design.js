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

const MODULE_ID = 'bolted-connection';

const INPUT_FIELDS_MATERIAL = [
  { id: 'grade', label: 'Plate Steel Grade', type: 'select', default: 'E250',
    options: STEEL_GRADES.map(g => ({ value: g.grade, label: g.grade })) }
];

const INPUT_FIELDS_BOLT = [
  { id: 'bolt_grade', label: 'Bolt Grade (Property Class)', type: 'select', default: '4.6',
    options: [
      { value: '4.6', label: 'Grade 4.6 (fub = 400 MPa)' },
      { value: '8.8', label: 'Grade 8.8 (fub = 800 MPa)' }
    ] },
  { id: 'bolt_dia', label: 'Bolt Diameter (d)', type: 'select', default: '20',
    options: [12, 16, 20, 24, 30].map(dia => ({ value: dia.toString(), label: `M${dia}` })) }
];

const INPUT_FIELDS_JOINT = [
  { id: 'joint_type', label: 'Joint Type', type: 'select', default: 'lap',
    options: [
      { value: 'lap', label: 'Lap Joint (Single Shear)' },
      { value: 'single_butt', label: 'Single Cover Butt (Single Shear)' },
      { value: 'double_butt', label: 'Double Cover Butt (Double Shear)' }
    ] },
  { id: 't_main', label: 'Main Plate Thickness', unit: 'mm', default: 12, min: 1, max: 100, step: 1 },
  { id: 't_cover', label: 'Cover Plates Thickness', unit: 'mm', default: 16, min: 1, max: 100, step: 1, tooltip: 'Required for Butt Joints' },
  { id: 'pitch', label: 'Pitch/Gauge (p)', unit: 'mm', default: 50, min: 20, max: 200, step: 5 },
  { id: 'end_dist', label: 'End/Edge (e)', unit: 'mm', default: 40, min: 20, max: 100, step: 5 }
];

const INPUT_FIELDS_LOADING = [
  { id: 'pu', label: 'Applied Load (Pu)', unit: 'kN', default: 300, min: 1, max: 5000, step: 1 }
];

function calculateBoltedConnection() {
  const container = document.querySelector('.calculator-page');
  let resultsDiv = container.querySelector('#bolt-results');
  if (!resultsDiv) {
    resultsDiv = document.createElement('div');
    resultsDiv.id = 'bolt-results';
    container.appendChild(resultsDiv);
  }
  
  const rawInputs = getInputValues(container);
  
  const pu_val = validate(rawInputs.pu, 1, 5000, 'Applied Load');
  const tm_val = validate(rawInputs.t_main, 1, 100, 'Main Plate');
  const p_val = validate(rawInputs.pitch, 20, 200, 'Pitch');
  const e_val = validate(rawInputs.end_dist, 20, 100, 'End Distance');
  
  if (!pu_val.valid || !tm_val.valid || !p_val.valid || !e_val.valid) {
    showToast('Please correct invalid fields before calculating.', 'error');
    return;
  }
  
  saveInputs(MODULE_ID, rawInputs);
  
  const gradeName = rawInputs.grade;
  const jointType = rawInputs.joint_type;
  const Pu = parseFloat(rawInputs.pu); // kN
  const d = parseInt(rawInputs.bolt_dia);
  const boltGrade = parseFloat(rawInputs.bolt_grade);
  const t_main = parseFloat(rawInputs.t_main);
  const t_cover = parseFloat(rawInputs.t_cover) || 0;
  const p = parseFloat(rawInputs.pitch);
  const e = parseFloat(rawInputs.end_dist);
  
  const grade = STEEL_GRADES.find(g => g.grade === gradeName);
  const fu = grade.fu;
  const fub = boltGrade === 4.6 ? 400 : 800; // Simplified lookup
  const gamma_mb = STEEL_PROPS.gamma_mb;
  
  let steps = [];
  
  // 1. Hole Diameter (IS 800 Table 19)
  let d0 = d + 2;
  if (d <= 14) d0 = d + 1;
  else if (d >= 24) d0 = d + 3;
  
  steps.push({
    step: 1,
    title: 'Hole Clearance',
    formula: `d0 = d + clearance`,
    result: `d0 = ${d0} mm`
  });
  
  // 2. Minimum Pitch and End Distance Checks (Cl 10.2.2 & 10.2.4)
  const p_min = 2.5 * d;
  const e_min = 1.5 * d0; // Assuming machine flame cut
  
  steps.push({
    step: 2,
    title: 'Pitch & End Distance Check',
    formula: `p_min = ${p_min} mm, e_min = ${e_min} mm`,
    result: (p >= p_min && e >= e_min) ? 'OK' : 'FAIL (Spacing too small)'
  });
  
  // 3. Shear Capacity
  let nn = 1; // Number of shear planes with threads intercepting the shear plane
  let ns = 0; // Number of shear planes without threads
  
  if (jointType === 'double_butt') {
    nn = 1;
    ns = 1; // Assuming threads in one plane and shank in the other
  }
  
  const Asb = Math.PI * d * d / 4;
  const Anb = 0.78 * Asb; // Net tensile area
  
  const Vnsb = (fub / Math.sqrt(3)) * (nn * Anb + ns * Asb);
  const Vdsb = Vnsb / (gamma_mb * 1000); // kN
  
  steps.push({
    step: 3,
    title: 'Shear Capacity (Vdsb)',
    formula: `Vdsb = (fub/√3)(nn×Anb + ns×Asb)/γmb`,
    result: `Vdsb = ${Vdsb.toFixed(2)} kN`
  });
  
  // 4. Bearing Capacity
  const kb1 = e / (3 * d0);
  const kb2 = (p / (3 * d0)) - 0.25;
  const kb3 = fub / fu;
  const kb4 = 1.0;
  const kb = Math.min(kb1, kb2, kb3, kb4);
  
  steps.push({
    step: 4,
    title: 'Bearing Coefficient (kb)',
    formula: `kb = min(e/3d0, p/3d0 - 0.25, fub/fu, 1.0)`,
    result: `kb = ${kb.toFixed(3)}`
  });
  
  let t_effective = t_main;
  if (jointType === 'lap') {
    // In a lap joint, both plates share bearing. Use min thickness if different, here we just assume t_main for both.
    t_effective = t_main;
  } else if (jointType === 'double_butt') {
    // Min of main plate and sum of cover plates
    t_effective = Math.min(t_main, t_cover);
  } else if (jointType === 'single_butt') {
    // Min of main plate and cover plate
    t_effective = Math.min(t_main, t_cover);
  }
  
  const Vnpb = 2.5 * kb * d * t_effective * fu;
  const Vdpb = Vnpb / (gamma_mb * 1000); // kN
  
  steps.push({
    step: 5,
    title: 'Bearing Capacity (Vdpb)',
    formula: `Vdpb = (2.5×kb×d×t×fu) / γmb`,
    result: `Vdpb = ${Vdpb.toFixed(2)} kN`
  });
  
  // 5. Bolt Value
  const BoltValue = Math.min(Vdsb, Vdpb);
  
  steps.push({
    step: 6,
    title: 'Bolt Value (Vd)',
    formula: `Vd = min(Vdsb, Vdpb)`,
    result: `Vd = ${BoltValue.toFixed(2)} kN`
  });
  
  // 6. Number of Bolts Required
  const n_req = Math.ceil(Pu / BoltValue);
  
  const isSafeSpacing = p >= p_min && e >= e_min;
  
  const complianceChecks = [
    {
      id: 'min_pitch',
      label: 'Minimum Pitch Check (p ≥ 2.5d)',
      status: p >= p_min ? 'pass' : 'fail',
      value: p.toFixed(0),
      limit: p_min.toFixed(0),
      unit: 'mm'
    },
    {
      id: 'min_edge',
      label: 'Minimum End Distance Check (e ≥ 1.5d0)',
      status: e >= e_min ? 'pass' : 'fail',
      value: e.toFixed(0),
      limit: e_min.toFixed(0),
      unit: 'mm'
    }
  ];
  
  const summaryCards = [
    {
      label: 'Bolt Value',
      value: BoltValue.toFixed(2) + ' kN',
      sub: Vdsb < Vdpb ? 'Governed by Shear' : 'Governed by Bearing',
      status: 'pass'
    },
    {
      label: 'Bolts Required',
      value: n_req.toString(),
      sub: `For load of ${Pu} kN`,
      status: 'pass'
    },
    {
      label: 'Joint Shear Planes',
      value: (ns+nn).toString(),
      status: 'info'
    }
  ];
  
  const content = `
    <div class="calculator-layout">
      <div class="results-main">
        ${renderResultSummary(summaryCards)}
        <div style="margin: 1.5rem 0; padding: 1rem; background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: var(--radius-md);">
          <strong>Action:</strong> Provide <strong>${n_req}</strong> numbers of M${d} Grade ${boltGrade} bolts.
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
    { label: 'Bolt Value', value: BoltValue.toFixed(2) + ' kN' },
    { label: 'Bolts Req', value: n_req.toString() },
    { label: 'Governing', value: Vdsb < Vdpb ? 'Shear' : 'Bearing' }
  ]);
}

export function initBoltedConnection(container) {
  container.innerHTML = `
    <div class="calculator-page" id="bolt-calc">
      <div class="print-header">
        <div class="print-header__brand">Stellar Civil — Bolted Connection Design</div>
        <div class="print-header__info"></div>
      </div>

      <div class="calculator-page__header">
        <h2>Bolted Connection Design</h2>
        <p>Calculate capacity of bearing-type bolts in shear and bearing.</p>
        <span class="calculator-page__code-ref">
          ${ICONS.info} IS 800:2007 — Section 10.3
        </span>
      </div>

      ${renderAssumptions([
        'Calculated for ordinary bearing-type bolts (not HSFG)',
        'Net tensile area of bolt is taken as 0.78 × Gross area',
        'Threads are conservatively assumed to intercept the shear plane in lap and single butt joints',
        'Failure by tearing of plates (block shear) is not checked automatically'
      ])}

      ${renderInputPanel('Material Details', INPUT_FIELDS_MATERIAL, ICONS.info)}
      ${renderInputPanel('Bolt Specifications', INPUT_FIELDS_BOLT, ICONS.shield)}
      ${renderInputPanel('Joint Configuration', INPUT_FIELDS_JOINT, ICONS.building)}
      ${renderInputPanel('Design Load', INPUT_FIELDS_LOADING, ICONS.calculator)}

      ${renderActionBar()}

      <div id="bolt-results"></div>

      <div class="print-footer">
        Generated by Stellar Civil | For reference only. Verify with qualified engineer.
      </div>
    </div>
  `;
  
  const saved = loadInputs(MODULE_ID);
  if (saved) {
    setInputValues(container, saved);
  }
  
  const jointTypeEl = container.querySelector('#joint_type');
  const coverInput = container.querySelector('#t_cover');
  const coverGroup = coverInput ? coverInput.closest('.input-group') : null;
  
  if (jointTypeEl && coverGroup) {
    // Hide cover plate thickness input if lap joint
    jointTypeEl.addEventListener('change', (e) => {
      if (e.target.value === 'lap') {
        coverGroup.style.display = 'none';
      } else {
        coverGroup.style.display = 'block';
      }
    });

    if ((saved && saved.joint_type === 'lap') || jointTypeEl.value === 'lap') {
      coverGroup.style.display = 'none';
    } else {
      coverGroup.style.display = 'block';
    }
  }
  
  container.querySelector('#btn-calculate').addEventListener('click', calculateBoltedConnection);
  
  container.querySelector('#btn-clear').addEventListener('click', () => {
    localStorage.removeItem("stellar_civil_inputs_" + MODULE_ID);
    initBoltedConnection(container);
    updateStickyBar([]);
  });
}
