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
import { getBondStress } from '../data/concrete.js';

const MODULE_ID = 'dev-length';

const INPUT_FIELDS_MATERIAL = [
  { id: 'fck', label: 'Concrete Grade (fck)', type: 'select', default: 25,
    options: FCK_GRADES.map(fck => ({ value: fck, label: `M${fck}` })),
    tooltip: 'Characteristic compressive strength' },
  { id: 'fy', label: 'Steel Grade (fy)', type: 'select', default: 415,
    options: FY_GRADES.map(fy => ({ value: fy, label: `Fe${fy}` })),
    tooltip: 'Yield strength of reinforcement' }
];

const INPUT_FIELDS_REBAR = [
  { id: 'bar_dia', label: 'Bar Diameter (φ)', unit: 'mm', type: 'select', default: 12,
    options: [8, 10, 12, 16, 20, 25, 32].map(d => ({ value: d, label: `${d} mm` })), tooltip: 'Nominal diameter of the bar to be anchored' },
  { id: 'profile', label: 'Bar Profile', type: 'select', default: 'deformed',
    options: [
      { value: 'deformed', label: 'Deformed / HYSD' },
      { value: 'plain', label: 'Plain / Mild Steel' }
    ], tooltip: 'Surface characteristics of the reinforcement' }
];

const INPUT_FIELDS_CONDITIONS = [
  { id: 'loading', label: 'Loading Condition', type: 'select', default: 'tension',
    options: [
      { value: 'tension', label: 'Tension' },
      { value: 'compression', label: 'Compression' }
    ], tooltip: 'Stress state in the bar at the start of anchorage' }
];

function calculateDevLength() {
  const container = document.querySelector('.calculator-page');
  let resultsDiv = container.querySelector('#dev-length-results');
  if (!resultsDiv) {
    resultsDiv = document.createElement('div');
    resultsDiv.id = 'dev-length-results';
    container.appendChild(resultsDiv);
  }
  
  const rawInputs = getInputValues(container);
  saveInputs(MODULE_ID, rawInputs);
  
  const fck = parseFloat(rawInputs.fck);
  const fy = parseFloat(rawInputs.fy);
  const dia = parseFloat(rawInputs.bar_dia);
  const profile = rawInputs.profile; // 'deformed' | 'plain'
  const loading = rawInputs.loading; // 'tension' | 'compression'
  
  let steps = [];
  
  // Design Bond Stress
  let tau_bd = getBondStress(fck, profile === 'deformed');
  
  steps.push({
    step: 1,
    title: 'Base Design Bond Stress (τbd)',
    formula: 'IS 456 Table 5' + (profile === 'deformed' ? ' × 1.6 (Deformed bar)' : ''),
    result: "τbd = " + tau_bd.toFixed(2) + " <span class=\"unit\">N/mm²</span>"
  });
  
  if (loading === 'compression') {
    tau_bd *= 1.25;
    steps.push({
      step: 2,
      title: 'Compression Modifier',
      formula: 'τbd × 1.25 (IS 456 Cl 26.2.1.1)',
      result: "τbd,mod = " + tau_bd.toFixed(2) + " <span class=\"unit\">N/mm²</span>"
    });
  }
  
  const sigma_s = 0.87 * fy;
  
  steps.push({
    step: loading === 'compression' ? 3 : 2,
    title: 'Design Stress in Steel (σs)',
    formula: 'σs = 0.87 × fy',
    result: "σs = " + sigma_s.toFixed(2) + " <span class=\"unit\">N/mm²</span>"
  });
  
  const Ld = (dia * sigma_s) / (4 * tau_bd);
  const multiplier = Math.ceil(Ld / dia);
  
  steps.push({
    step: loading === 'compression' ? 4 : 3,
    title: 'Development Length (Ld)',
    formula: 'Ld = (φ × σs) / (4 × τbd)',
    result: "Ld = " + Ld.toFixed(1) + " <span class=\"unit\">mm</span>"
  });
  
  const summaryCards = [
    { label: 'Development Length', value: Math.ceil(Ld), unit: 'mm', sub: `Approx ${multiplier}φ`, status: 'pass', highlight: true },
    { label: 'Design Stress (σs)', value: sigma_s.toFixed(2), unit: 'MPa', status: 'info' },
    { label: 'Design Bond (τbd)', value: tau_bd.toFixed(2), unit: 'MPa', status: 'info' }
  ];
  
  const complianceChecks = [{
    label: 'Calculated Anchorage (Ld)',
    status: 'pass',
    text: `${multiplier}φ`,
    ref: 'Cl. 26.2.1'
  }];
  
  const content = `
    <div class="calculator-layout">
      <div class="results-main">
        ${renderResultSummary(summaryCards)}
        
        <div style="margin: 1.5rem 0; padding: 1.25rem; background: var(--bg-surface); border: 1px solid var(--border); border-left: 4px solid var(--color-primary); border-radius: var(--radius-md);">
          <strong style="display:block; margin-bottom: 0.5rem; color: var(--text-primary);">Anchorage Requirement:</strong>
          <span style="color: var(--text-secondary);">
            Provide a minimum straight anchorage length of <strong>${Math.ceil(Ld)} mm</strong> (${multiplier}φ) past the section where full stress is developed.
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
    { label: 'Rebar', value: dia + 'φ ' + fy },
    { label: 'Loading', value: loading.charAt(0).toUpperCase() + loading.slice(1) },
    { label: 'Ld Required', value: Math.ceil(Ld) + ' mm (' + multiplier + 'φ)' }
  ]);
  resultsDiv.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export function initDevLength(container) {
  container.innerHTML = `
    <div class="calculator-page" id="dev-length-calc">
      <div class="print-header">
        <div class="print-header__brand">Stellar Civil — Development Length</div>
        <div class="print-header__info"></div>
      </div>

      <div class="calculator-page__header">
        <h2>Development Length Calculator</h2>
        <p>Calculate the anchorage length required to develop the full design strength of reinforcement bars.</p>
        <span class="calculator-page__code-ref">
          ${ICONS.info} IS 456:2000 — Cl. 26.2.1
        </span>
      </div>

      ${renderAssumptions([
        'Bond stress τbd is based on IS 456:2000 limit state design',
        'Bars in compression geometry receive 25% bond stress enhancement',
        'Deformed/HYSD bars receive 60% bond stress enhancement',
        'Development length Ld = (φ × σs)/(4 × τbd)'
      ])}

      ${renderInputPanel('Material Grades', INPUT_FIELDS_MATERIAL, ICONS.info)}
      ${renderInputPanel('Rebar Properties', INPUT_FIELDS_REBAR, ICONS.building)}
      ${renderInputPanel('Anchorage Conditions', INPUT_FIELDS_CONDITIONS, ICONS.calculator)}

      ${renderActionBar()}

      <div id="dev-length-results"></div>

      <div class="print-footer">
        Generated by Stellar Civil | For reference only. Verify with qualified engineer.
      </div>
    </div>
  `;

  container.querySelector('#btn-calculate').addEventListener('click', calculateDevLength);
  
  container.querySelector('#btn-clear').addEventListener('click', () => {
    localStorage.removeItem('stellar_civil_inputs_' + MODULE_ID);
    initDevLength(container);
    updateStickyBar([]);
  });

  const saved = loadInputs(MODULE_ID);
  if (saved) {
    setInputValues(container, saved);
  }
}
