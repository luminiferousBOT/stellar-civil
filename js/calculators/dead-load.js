import { 
  renderInputPanel,
  renderResultSummary, 
  renderStepTable,
  renderAssumptions,
  renderActionBar,
  setInputValues,
  getInputValues,
  showToast,
  updateStickyBar,
  ICONS
} from '../utils/ui.js';
import { saveInputs, loadInputs } from '../utils/storage.js';
import { UNIT_WEIGHTS } from '../data/loads.js';

const MODULE_ID = 'dead-load';

const INPUT_FIELDS_LAYERS = [];

const matOptions = [
  { value: '', label: '-- Select Material --' },
  ...UNIT_WEIGHTS.map(m => ({ value: m.id, label: `${m.name} (${m.weight} kN/m³)` }))
];

for (let i = 1; i <= 5; i++) {
  INPUT_FIELDS_LAYERS.push(
    { id: `mat_${i}`, label: `Layer ${i} Material`, type: 'select', options: matOptions },
    { id: `thk_${i}`, label: `Layer ${i} Thickness`, unit: 'mm', type: 'number', min: 0, max: 2000, step: 5, placeholder: 'e.g. 150' }
  );
}

function calculateDeadLoad() {
  const container = document.querySelector('.calculator-page');
  let resultsDiv = container.querySelector('#dead-load-results');
  if (!resultsDiv) {
    resultsDiv = document.createElement('div');
    resultsDiv.id = 'dead-load-results';
    container.appendChild(resultsDiv);
  }
  
  const rawInputs = getInputValues(container);
  saveInputs(MODULE_ID, rawInputs);
  
  let totalLoad = 0;
  let steps = [];
  let validLayers = 0;
  
  for (let i = 1; i <= 5; i++) {
    const matId = rawInputs[`mat_${i}`];
    const thkStr = rawInputs[`thk_${i}`];
    
    if (matId && thkStr) {
      const thk = parseFloat(thkStr);
      if (thk > 0) {
        const material = UNIT_WEIGHTS.find(m => m.id === matId);
        if (material) {
          const load = material.weight * (thk / 1000);
          totalLoad += load;
          validLayers++;
          
          steps.push({
            step: validLayers,
            title: `Layer ${i}: ${material.name}`,
            formula: `γ × t = ${material.weight.toFixed(1)} kN/m³ × ${(thk/1000).toFixed(3)} m`,
            result: `q = ${load.toFixed(2)} kN/m²`
          });
        }
      }
    }
  }
  
  if (validLayers === 0) {
    showToast('Please select at least one material and provide its thickness.', 'error');
    return;
  }
  
  // Total step
  steps.push({
    step: 'Σ',
    title: 'Total Surface Dead Load',
    formula: 'Sum of all layer loads',
    result: `w,DL = ${totalLoad.toFixed(2)} kN/m²`
  });
  
  const factoredLoad = totalLoad * 1.5;
  
  const summaryCards = [
    {
      label: 'Total Dead Load (Unfactored)',
      value: totalLoad.toFixed(2) + ' kN/m²',
      sub: `From ${validLayers} layers`,
      status: 'pass'
    },
    {
      label: 'Factored Dead Load (1.5)',
      value: factoredLoad.toFixed(2) + ' kN/m²',
      status: 'info'
    }
  ];
  
  const content = `
    <div class="calculator-layout">
      <div class="results-main">
        ${renderResultSummary(summaryCards)}
        ${renderStepTable('Calculation Steps', steps)}
      </div>
      <div class="results-sidebar">
        <!-- Optional extra info/checks area -->
        <div style="padding: 1.5rem; background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: var(--radius-md);">
          <h4 style="margin-top: 0; color: var(--text-color); font-size: 0.95rem; display: flex; align-items: center; gap: 0.5rem;">
            ${ICONS.info} Note
          </h4>
          <p style="margin: 0; font-size: 0.85rem; color: var(--text-muted); line-height: 1.5;">
            Dead load factors depend on load combinations. Typically, γf = 1.5 under DL+LL combinations per IS 456 Table 18. Adjust as required for seismic/wind combinations.
          </p>
        </div>
      </div>
    </div>
  `;
  
  resultsDiv.innerHTML = content;
  
  updateStickyBar([
    { label: 'Unfactored DL', value: totalLoad.toFixed(2) + ' kN/m²' },
    { label: 'Factored DL', value: factoredLoad.toFixed(2) + ' kN/m²' }
  ]);
}

export function initDeadLoad(container) {
  container.innerHTML = `
    <div class="calculator-page" id="dead-load-calc">
      <div class="print-header">
        <div class="print-header__brand">Stellar Civil — Dead Load Estimator</div>
        <div class="print-header__info"></div>
      </div>

      <div class="calculator-page__header">
        <h2>Surface Dead Load</h2>
        <p>Calculate the self-weight of composite floor/roof assemblies.</p>
        <span class="calculator-page__code-ref">
          ${ICONS.info} IS 875 (Part 1): 1987
        </span>
      </div>

      ${renderAssumptions([
        'Calculates total surface load by multiplying material unit weights with specified layer thickness',
        'Factored load assumes a generic load factor of 1.5. Consult IS 456 Table 18 for specific combinations'
      ])}

      <div style="margin-bottom: 2rem;">
        <p style="margin-bottom: 1rem; color: var(--text-muted); font-size: 0.9rem;">
          Select materials and input their thicknesses to calculate the total surface dead load (kN/m²). Leave unused layers blank.
        </p>
        ${renderInputPanel('Assembly Layers', INPUT_FIELDS_LAYERS, ICONS.building)}
      </div>

      ${renderActionBar()}

      <div id="dead-load-results"></div>

      <div class="print-footer">
        Generated by Stellar Civil | For reference only. Verify with qualified engineer.
      </div>
    </div>
  `;
  
  const saved = loadInputs(MODULE_ID);
  if (saved) {
    setInputValues(container, saved);
  }
  
  container.querySelector('#btn-calculate').addEventListener('click', calculateDeadLoad);
  
  container.querySelector('#btn-clear').addEventListener('click', () => {
    localStorage.removeItem("stellar_civil_inputs_" + MODULE_ID);
    initDeadLoad(container);
    updateStickyBar([]);
  });
}
