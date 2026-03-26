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
import { validate } from '../utils/validation.js';
import { saveInputs, loadInputs } from '../utils/storage.js';
import { CITY_WIND_SPEEDS, getWindK2 } from '../data/loads.js';

const MODULE_ID = 'wind-load';

const INPUT_FIELDS_ENVIRONMENT = [
  { id: 'city', label: 'Reference City', type: 'select', default: '47',
    options: CITY_WIND_SPEEDS.map(c => ({ value: c.vb.toString(), label: `${c.city} (${c.vb} m/s)` })) },
  { id: 'category', label: 'Terrain Category', type: 'select', default: '3',
    options: [
      { value: '1', label: 'Category 1 (Exposed sea coasts, flat plains)' },
      { value: '2', label: 'Category 2 (Open terrain, few obstacles)' },
      { value: '3', label: 'Category 3 (Suburbs, small towns)' },
      { value: '4', label: 'Category 4 (Large city centers)' }
    ] }
];

const INPUT_FIELDS_PARAMETERS = [
  { id: 'height', label: 'Height above ground (z)', unit: 'm', default: 15, min: 5, max: 500, step: 1 },
  { id: 'k1', label: 'Risk Coefficient (k1)', default: 1.0, min: 0.5, max: 1.5, step: 0.01, tooltip: 'Typically 1.0 for 50-year design life' },
  { id: 'k3', label: 'Topography Factor (k3)', default: 1.0, min: 1.0, max: 1.36, step: 0.01, tooltip: '1.0 if upwind slope < 3°' },
  { id: 'k4', label: 'Importance Factor (k4)', default: 1.0, min: 1.0, max: 1.3, step: 0.15, tooltip: '1.3 for post-cyclone structures, 1.0 otherwise' }
];

function calculateWindLoad() {
  const container = document.querySelector('.calculator-page');
  let resultsDiv = container.querySelector('#wind-load-results');
  if (!resultsDiv) {
    resultsDiv = document.createElement('div');
    resultsDiv.id = 'wind-load-results';
    container.appendChild(resultsDiv);
  }
  
  const rawInputs = getInputValues(container);
  
  const z_val = validate(rawInputs.height, 5, 500, 'Height (z)');
  const k1_val = validate(rawInputs.k1, 0.5, 1.5, 'Risk Coefficient (k1)');
  const k3_val = validate(rawInputs.k3, 1.0, 1.36, 'Topography Factor (k3)');
  const k4_val = validate(rawInputs.k4, 1.0, 1.3, 'Importance Factor (k4)');
  
  if (!z_val.valid || !k1_val.valid || !k3_val.valid || !k4_val.valid) {
    showToast('Please correct invalid fields before calculating.', 'error');
    return;
  }
  
  saveInputs(MODULE_ID, rawInputs);
  
  const Vb = parseFloat(rawInputs.city);
  const category = parseInt(rawInputs.category);
  const z = parseFloat(rawInputs.height);
  const k1 = parseFloat(rawInputs.k1);
  const k3 = parseFloat(rawInputs.k3);
  const k4 = parseFloat(rawInputs.k4);
  
  let steps = [];
  
  // 1. Basic Wind Speed
  steps.push({
    step: 1,
    title: 'Basic Wind Speed (Vb)',
    formula: 'IS 875 Part 3 Appendix A',
    result: `Vb = ${Vb.toFixed(1)} m/s`
  });
  
  // 2. Terrain & Height Factor (k2)
  const k2 = getWindK2(z, category); // returns value based on category index (1-4)
  
  steps.push({
    step: 2,
    title: 'Terrain & Height Factor (k2)',
    formula: `Category ${category}, z = ${z}m (Table 2)`,
    result: `k2 = ${k2.toFixed(3)}`
  });
  
  // 3. Design Wind Speed (Vz)
  const Vz = Vb * k1 * k2 * k3 * k4;
  
  steps.push({
    step: 3,
    title: 'Design Wind Speed (Vz)',
    formula: 'Vz = Vb × k1 × k2 × k3 × k4',
    result: `Vz = ${Vz.toFixed(2)} m/s`
  });
  
  // 4. Design Wind Pressure (pz)
  const pz_N_m2 = 0.6 * Vz * Vz; // in N/m²
  const pz = pz_N_m2 / 1000; // in kN/m²
  
  steps.push({
    step: 4,
    title: 'Design Wind Pressure (pz)',
    formula: 'pz = 0.6 × Vz² (in N/m²)',
    result: `pz = ${pz.toFixed(3)} kN/m²`
  });
  
  const summaryCards = [
    {
      label: 'Design Wind Pressure (pz)',
      value: pz.toFixed(3) + ' kN/m²',
      sub: `At height ${z}m`,
      status: 'pass'
    },
    {
      label: 'Design Wind Speed (Vz)',
      value: Vz.toFixed(1) + ' m/s',
      status: 'info'
    },
    {
      label: 'Factors',
      value: `k1=${k1}, k2=${k2.toFixed(2)}`,
      status: 'info'
    }
  ];
  
  const content = `
    <div class="calculator-layout">
      <div class="results-main">
        ${renderResultSummary(summaryCards)}
        <div style="margin: 1.5rem 0; padding: 1rem; background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: var(--radius-md);">
          <strong>Note:</strong> Total design wind load on the building = <strong>pz × Ae × Cf</strong> (where Ae is effective frontal area, and Cf is the force coefficient).
        </div>
        ${renderStepTable('Calculation Steps', steps)}
      </div>
      <div class="results-sidebar">
        <div style="padding: 1.5rem; background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: var(--radius-md);">
          <h4 style="margin-top: 0; color: var(--text-color); font-size: 0.95rem; display: flex; align-items: center; gap: 0.5rem;">
            ${ICONS.info} Factors Applied
          </h4>
          <ul class="clean-list" style="margin-top: 0.75rem;">
            <li><strong style="color: var(--text-color)">k1:</strong> ${k1.toFixed(2)}</li>
            <li><strong style="color: var(--text-color)">k2:</strong> ${k2.toFixed(3)}</li>
            <li><strong style="color: var(--text-color)">k3:</strong> ${k3.toFixed(2)}</li>
            <li><strong style="color: var(--text-color)">k4:</strong> ${k4.toFixed(2)}</li>
          </ul>
        </div>
      </div>
    </div>
  `;
  
  resultsDiv.innerHTML = content;
  
  updateStickyBar([
    { label: 'Height (z)', value: z + ' m' },
    { label: 'Vz', value: Vz.toFixed(1) + ' m/s' },
    { label: 'pz', value: pz.toFixed(3) + ' kN/m²' }
  ]);
}

export function initWindLoad(container) {
  container.innerHTML = `
    <div class="calculator-page" id="wind-load-calc">
      <div class="print-header">
        <div class="print-header__brand">Stellar Civil — Wind Load Calculator</div>
        <div class="print-header__info"></div>
      </div>

      <div class="calculator-page__header">
        <h2>Wind Load Calculator</h2>
        <p>Calculate the design wind speed and wind pressure at a specified height based on terrain category.</p>
        <span class="calculator-page__code-ref">
          ${ICONS.info} IS 875 (Part 3): 2015
        </span>
      </div>

      ${renderAssumptions([
        'Calculates the absolute design wind pressure pz factoring terrain/topography',
        'Topography Factor (k3) assumes a default value of 1.0 (gradient < 3°)',
        'Uses empirical equations to continuously compute k2 factor for absolute height z'
      ])}

      ${renderInputPanel('Geography & Terrain', INPUT_FIELDS_ENVIRONMENT, ICONS.building)}
      ${renderInputPanel('Modifiers & Height', INPUT_FIELDS_PARAMETERS, ICONS.calculator)}

      ${renderActionBar()}

      <div id="wind-load-results"></div>

      <div class="print-footer">
        Generated by Stellar Civil | For reference only. Verify with qualified engineer.
      </div>
    </div>
  `;
  
  const saved = loadInputs(MODULE_ID);
  if (saved) {
    setInputValues(container, saved);
  }
  
  container.querySelector('#btn-calculate').addEventListener('click', calculateWindLoad);
  
  container.querySelector('#btn-clear').addEventListener('click', () => {
    localStorage.removeItem("stellar_civil_inputs_" + MODULE_ID);
    initWindLoad(container);
    updateStickyBar([]);
  });
}
