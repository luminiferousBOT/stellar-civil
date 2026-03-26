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
import { FY_GRADES } from '../data/materials.js';
import { getModFactorTension } from '../data/concrete.js';

const MODULE_ID = 'deflection';

const INPUT_FIELDS_GEOMETRY = [
  { id: 'span_type', label: 'Support Condition', type: 'select', default: 20,
    options: [
      { value: 7, label: 'Cantilever (L/d = 7)' },
      { value: 20, label: 'Simply Supported (L/d = 20)' },
      { value: 26, label: 'Continuous (L/d = 26)' }
    ], tooltip: 'Basic span to effective depth ratio per IS 456 Cl. 23.2.1' },
  { id: 'span', label: 'Effective Span (L)', unit: 'm', default: 6.0, min: 0.5, max: 30, step: 0.1, tooltip: 'Effective span of the member' },
  { id: 'd', label: 'Effective Depth (d)', unit: 'mm', default: 450, min: 50, max: 2000, step: 10, tooltip: 'Effective depth to tension steel centroid' },
  { id: 'bw', label: 'Web Width (bw)', unit: 'mm', default: 230, min: 50, max: 2000, step: 10, tooltip: 'Use b for rectangular beams' },
  { id: 'bf', label: 'Flange Width (bf)', unit: 'mm', default: 230, min: 50, max: 5000, step: 10, tooltip: 'Same as bw if rectangular section' }
];

const INPUT_FIELDS_REINFORCEMENT = [
  { id: 'fy', label: 'Steel Grade (fy)', type: 'select', default: 415,
    options: FY_GRADES.map(fy => ({ value: fy, label: `Fe${fy}` })), tooltip: 'Yield strength of main tension steel' },
  { id: 'ast_req', label: 'Ast Required', unit: 'mm²', default: 600, min: 10, max: 10000, step: 1, tooltip: 'Area of tension reinforcement required by calculation' },
  { id: 'ast_prov', label: 'Ast Provided', unit: 'mm²', default: 628, min: 10, max: 10000, step: 1, tooltip: 'Area of tension reinforcement actually provided' },
  { id: 'asc_prov', label: 'Asc Provided (Compression)', unit: 'mm²', default: 0, min: 0, max: 10000, step: 1, tooltip: 'Area of compression reinforcement (Leave 0 if singly reinforced)' }
];

function calculateDeflection() {
  const container = document.querySelector('.calculator-page');
  let resultsDiv = container.querySelector('#deflection-results');
  if (!resultsDiv) {
    resultsDiv = document.createElement('div');
    resultsDiv.id = 'deflection-results';
    container.appendChild(resultsDiv);
  }
  
  const rawInputs = getInputValues(container);
  
  const span_val = validate(rawInputs.span, 0.5, 30, 'Effective Span');
  const d_val = validate(rawInputs.d, 50, 2000, 'Effective Depth');
  const bw_val = validate(rawInputs.bw, 50, 2000, 'Web Width');
  const bf_val = validate(rawInputs.bf, 50, 5000, 'Flange Width');
  const ar_val = validate(rawInputs.ast_req, 10, 10000, 'Ast Required');
  const ap_val = validate(rawInputs.ast_prov, 10, 10000, 'Ast Provided');
  
  if (!span_val.valid || !d_val.valid || !bw_val.valid || !bf_val.valid || !ar_val.valid || !ap_val.valid) {
    showToast('Please correct invalid fields before calculating.', 'error');
    return;
  }
  
  saveInputs(MODULE_ID, rawInputs);
  
  const span = parseFloat(rawInputs.span);
  const d = parseFloat(rawInputs.d);
  const bw = parseFloat(rawInputs.bw);
  const bf = parseFloat(rawInputs.bf);
  const ast_req = parseFloat(rawInputs.ast_req);
  const ast_prov = parseFloat(rawInputs.ast_prov);
  const asc_prov = parseFloat(rawInputs.asc_prov) || 0;
  const fy = parseFloat(rawInputs.fy);
  const basic_ld = parseFloat(rawInputs.span_type);
  
  let steps = [];
  
  // 1. Basic L/d
  let effective_basic_ld = basic_ld;
  let modifier_explanation = 'IS 456 Cl. 23.2.1(a)';
  if (span > 10 && basic_ld !== 7) {
    effective_basic_ld = basic_ld * (10 / span);
    modifier_explanation = `Base ${basic_ld} × (10 / ${span.toFixed(1)}m)`;
  }
  
  steps.push({
    step: 1,
    title: 'Basic Span to Depth Ratio',
    formula: modifier_explanation,
    result: "(L/d)basic = " + effective_basic_ld.toFixed(2)
  });
  
  // 2. Tension Modifier (kt)
  const fs = 0.58 * fy * (ast_req / ast_prov);
  const pt = (100 * ast_prov) / (bw * d);
  const kt = getModFactorTension(fs, pt);
  
  steps.push({
    step: 2,
    title: 'Tension Modifier (kt)',
    formula: `pt = ${pt.toFixed(2)}%, fs = ${fs.toFixed(1)} MPa (IS 456 Fig. 4)`,
    result: "kt = " + kt.toFixed(2)
  });
  
  // 3. Compression Modifier (kc)
  let kc = 1.0;
  const pc = (100 * asc_prov) / (bw * d);
  if (asc_prov > 0) {
    // Approx formula based on Fig 5
    kc = 1.15 * (1 + 0.1 * pc);
    if (kc > 1.5) kc = 1.5;
  }
  
  steps.push({
    step: 3,
    title: 'Compression Modifier (kc)',
    formula: `pc = ${pc.toFixed(2)}% (IS 456 Fig. 5)`,
    result: "kc = " + kc.toFixed(2)
  });
  
  // 4. Flange Modifier (kf)
  let kf = 1.0;
  if (bf > bw) {
    const ratio = bw / bf;
    // Approx formula based on Fig 6
    kf = 0.8 + 0.2 * Math.min(1.0, Math.max(0.3, ratio));
  }
  
  steps.push({
    step: 4,
    title: 'Flanged Section Modifier (kf)',
    formula: `bw/bf = ${(bw/bf).toFixed(2)} (IS 456 Fig. 6)`,
    result: "kf = " + kf.toFixed(2)
  });
  
  // 5. Allowable L/d
  const allowable_ld = effective_basic_ld * kt * kc * kf;
  
  steps.push({
    step: 5,
    title: 'Allowable L/d Ratio',
    formula: `${effective_basic_ld.toFixed(2)} × ${kt.toFixed(2)} × ${kc.toFixed(2)} × ${kf.toFixed(2)}`,
    result: "(L/d)allowable = " + allowable_ld.toFixed(2)
  });
  
  // 6. Actual L/d
  const actual_ld = (span * 1000) / d;
  
  steps.push({
    step: 6,
    title: 'Actual L/d Ratio',
    formula: `Actual span / d = ${(span * 1000).toFixed(0)} / ${d.toFixed(0)}`,
    result: "(L/d)actual = " + actual_ld.toFixed(2)
  });
  
  const isSafe = actual_ld <= allowable_ld;
  const overallStatus = isSafe ? 'pass' : 'fail';
  
  const complianceChecks = [
    {
      label: 'Deflection Limit',
      status: isSafe ? 'pass' : 'fail',
      text: `L/d = ${actual_ld.toFixed(2)} (≤ ${allowable_ld.toFixed(2)})`,
      ref: 'Cl. 23.2.1'
    }
  ];
  
  const summaryCards = [
    { label: 'Basic L/d', value: effective_basic_ld.toFixed(1) },
    { label: 'Tension Mod (kt)', value: kt.toFixed(2) },
    { label: 'Compression Mod (kc)', value: kc.toFixed(2) },
    { label: 'Flange Mod (kf)', value: kf.toFixed(2) }
  ];
  
  const content = `
    <div class="calculator-layout">
      <div class="results-main">
        ${renderResultSummary(summaryCards)}
        
        <div style="margin: 1.5rem 0; padding: 1.25rem; background: var(--bg-surface); border: 1px solid var(--border); border-left: 4px solid var(--color-primary); border-radius: var(--radius-md);">
          <strong style="display:block; margin-bottom: 0.5rem; color: var(--text-primary);">Deflection Verdict:</strong>
          <span style="color: var(--text-secondary);">
            ${isSafe 
              ? `The section is <strong style="color: var(--color-accent);">SAFE</strong> against excessive deflection.` 
              : `<span style="color: var(--color-error);"><strong>UNSAFE!</strong> The section is likely to suffer excessive deflection. Increase section depth or provide more compression steel.</span>`}
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
    { label: 'Actual L/d', value: actual_ld.toFixed(2) },
    { label: 'Allowable L/d', value: allowable_ld.toFixed(2) },
    { label: 'Status', value: isSafe ? '✅ SAFE' : '❌ UNSAFE' }
  ]);
}

export function initDeflection(container) {
  container.innerHTML = `
    <div class="calculator-page" id="deflection-calc">
      <div class="print-header">
        <div class="print-header__brand">Stellar Civil — Deflection Check</div>
        <div class="print-header__info"></div>
      </div>

      <div class="calculator-page__header">
        <h2>Deflection Limit Check</h2>
        <p>Empirical method for controlling deflection in beams and slabs based on span-to-depth ratios.</p>
        <span class="calculator-page__code-ref">
          ${ICONS.info} IS 456:2000 — Cl. 23.2.1
        </span>
      </div>

      ${renderAssumptions([
        'Span to effective depth approach verifies deflection indirectly',
        'Basic L/d limit is modified based on tension steel area and stress (kt)',
        'Compression steel increases allowable L/d through modifier kc',
        'Flanged sections reduce allowable L/d through modifier kf',
        'Spans greater than 10m are penalized proportionally (except cantilevers)'
      ])}

      ${renderInputPanel('Member Geometry', INPUT_FIELDS_GEOMETRY, ICONS.building)}
      ${renderInputPanel('Reinforcement Status', INPUT_FIELDS_REINFORCEMENT, ICONS.calculator)}

      ${renderActionBar()}

      <div id="deflection-results"></div>

      <div class="print-footer">
        Generated by Stellar Civil | For reference only. Verify with qualified engineer.
      </div>
    </div>
  `;

  container.querySelector('#btn-calculate').addEventListener('click', calculateDeflection);
  
  container.querySelector('#btn-clear').addEventListener('click', () => {
    localStorage.removeItem('stellar_civil_inputs_' + MODULE_ID);
    initDeflection(container);
    updateStickyBar([]);
  });

  const saved = loadInputs(MODULE_ID);
  if (saved) {
    setInputValues(container, saved);
  }
}
