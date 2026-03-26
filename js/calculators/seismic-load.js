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
import { SEISMIC_ZONES, IMPORTANCE_FACTORS, RESPONSE_REDUCTION, getSaG } from '../data/loads.js';

const MODULE_ID = 'seismic-load';

const INPUT_FIELDS_SITE = [
  { id: 'zone', label: 'Seismic Zone (Z)', type: 'select', default: '0.24',
    options: SEISMIC_ZONES.map(z => ({ value: z.Z.toString(), label: `Zone ${z.zone} (Z = ${z.Z.toFixed(2)})` })) },
  { id: 'soil', label: 'Soil Type', type: 'select', default: '2',
    options: [
      { value: '1', label: 'Type I (Rock / Hard Soil)' },
      { value: '2', label: 'Type II (Medium Soil)' },
      { value: '3', label: 'Type III (Soft Soil)' }
    ] }
];

const INPUT_FIELDS_STRUCTURE = [
  { id: 'importance', label: 'Importance Factor (I)', type: 'select', default: '1',
    options: IMPORTANCE_FACTORS.map(i => ({ value: i.I.toString(), label: `${i.name} (I = ${i.I})` })) },
  { id: 'response', label: 'Response Reduction (R)', type: 'select', default: '5',
    options: RESPONSE_REDUCTION.map(r => ({ value: r.R.toString(), label: `${r.name} (R = ${r.R})` })) },
  { id: 'frame_type', label: 'Structural System', type: 'select', default: 'rc_bare',
    options: [
      { value: 'rc_bare', label: 'RC Bare Moment Resisting Frame' },
      { value: 'steel_bare', label: 'Steel Bare Moment Resisting Frame' },
      { value: 'infilled', label: 'All buildings with masonry infills' }
    ] },
  { id: 'h', label: 'Building Height (h)', unit: 'm', default: 15, min: 3, max: 250, step: 1 },
  { id: 'd', label: 'Base Dimension (d)', unit: 'm', default: 20, min: 5, max: 250, step: 1, tooltip: 'Dimension in Earthquake direction' },
  { id: 'w', label: 'Total Seismic Weight (W)', unit: 'kN', default: 10000, min: 100, max: 100000, step: 100 }
];

function calculateSeismicLoad() {
  const container = document.querySelector('.calculator-page');
  let resultsDiv = container.querySelector('#seismic-load-results');
  if (!resultsDiv) {
    resultsDiv = document.createElement('div');
    resultsDiv.id = 'seismic-load-results';
    container.appendChild(resultsDiv);
  }
  
  const rawInputs = getInputValues(container);
  
  const h_val = validate(rawInputs.h, 3, 250, 'Building Height');
  const w_val = validate(rawInputs.w, 100, 100000, 'Seismic Weight');
  
  let valid = h_val.valid && w_val.valid;
  if (rawInputs.frame_type === 'infilled') {
    const d_val = validate(rawInputs.d, 5, 250, 'Base Dimension');
    if (!d_val.valid) valid = false;
  }
  
  if (!valid) {
    showToast('Please correct invalid fields before calculating.', 'error');
    return;
  }
  
  saveInputs(MODULE_ID, rawInputs);
  
  const Z = parseFloat(rawInputs.zone);
  const I = parseFloat(rawInputs.importance);
  const R = parseFloat(rawInputs.response);
  const soil = parseInt(rawInputs.soil);
  const frameType = rawInputs.frame_type;
  const h = parseFloat(rawInputs.h);
  const d = parseFloat(rawInputs.d);
  const W = parseFloat(rawInputs.w);
  
  let steps = [];
  
  // 1. Fundamental Time Period (Ta)
  let Ta = 0;
  let ta_formula = '';
  
  if (frameType === 'rc_bare') {
    Ta = 0.075 * Math.pow(h, 0.75);
    ta_formula = 'Ta = 0.075 × h^0.75 (RC Moment Resisting Frame)';
  } else if (frameType === 'steel_bare') {
    Ta = 0.085 * Math.pow(h, 0.75);
    ta_formula = 'Ta = 0.085 × h^0.75 (Steel MRF)';
  } else {
    Ta = 0.09 * h / Math.sqrt(d);
    ta_formula = 'Ta = 0.09h / √d (All buildings with masonry infill panels)';
  }
  
  steps.push({
    step: 1,
    title: 'Approximate Natural Period (Ta)',
    formula: ta_formula,
    result: `Ta = ${Ta.toFixed(3)} sec`
  });
  
  // 2. Average Response Acceleration Coefficient (Sa/g)
  const sag = getSaG(Ta, soil);
  
  steps.push({
    step: 2,
    title: 'Design Acceleration Spectrum (Sa/g)',
    formula: `IS 1893 Fig 2 for Soil Type ${soil} at Ta=${Ta.toFixed(3)}s`,
    result: `Sa/g = ${sag.toFixed(3)}`
  });
  
  // 3. Design Horizontal Seismic Coefficient (Ah)
  let Ah = (Z / 2) * (I / R) * sag;
  const Ah_min = Z / 2; // Approximate minimum check or fallback
  
  let ah_note = '';
  if (Ah < Ah_min) {
    Ah = Ah_min;
    ah_note = ` (Governed by Min Ah = Z/2 = ${Ah_min.toFixed(3)})`;
  }
  
  steps.push({
    step: 3,
    title: 'Horizontal Seismic Coefficient (Ah)',
    formula: 'Ah = (Z/2) × (I/R) × (Sa/g)',
    result: `Ah = ${Ah.toFixed(4)}${ah_note}`
  });
  
  // 4. Design Base Shear (VB)
  const VB = Ah * W;
  
  steps.push({
    step: 4,
    title: 'Design Seismic Base Shear (VB)',
    formula: `VB = Ah × W = ${Ah.toFixed(4)} × ${W}`,
    result: `VB = ${VB.toFixed(2)} kN`
  });
  
  const summaryCards = [
    {
      label: 'Base Shear (VB)',
      value: VB.toFixed(2) + ' kN',
      sub: `Ah = ${Ah.toFixed(4)}`,
      status: 'pass'
    },
    {
      label: 'Natural Period (Ta)',
      value: Ta.toFixed(3) + ' s',
      status: 'info'
    },
    {
      label: 'Spectrum (Sa/g)',
      value: sag.toFixed(3),
      sub: `Soil Type ${soil}`,
      status: 'info'
    }
  ];
  
  const content = `
    <div class="calculator-layout">
      <div class="results-main">
        ${renderResultSummary(summaryCards)}
        <div style="margin: 1.5rem 0; padding: 1rem; background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: var(--radius-md);">
          <strong>Note:</strong> Ah = ${Ah.toFixed(4)}. Base shear VB acts at the base of the building and must be distributed along the height of the building per Clause 7.6.3.
        </div>
        ${renderStepTable('Calculation Steps', steps)}
      </div>
      <div class="results-sidebar">
        <div style="padding: 1.5rem; background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: var(--radius-md);">
          <h4 style="margin-top: 0; color: var(--text-color); font-size: 0.95rem; display: flex; align-items: center; gap: 0.5rem;">
            ${ICONS.info} Equivalent Static Method
          </h4>
          <p style="margin: 0; font-size: 0.85rem; color: var(--text-muted); line-height: 1.5;">
            The static method is restricted to regular buildings of limited height (≤ 15m in seismic zones IV & V). For taller or irregular buildings, dynamic analysis is mandatory.
          </p>
        </div>
      </div>
    </div>
  `;
  
  resultsDiv.innerHTML = content;
  
  updateStickyBar([
    { label: 'Time Period', value: Ta.toFixed(2) + ' s' },
    { label: 'VB', value: VB.toFixed(1) + ' kN' },
    { label: 'Ah', value: Ah.toFixed(4) }
  ]);
}

export function initSeismicLoad(container) {
  container.innerHTML = `
    <div class="calculator-page" id="seismic-load-calc">
      <div class="print-header">
        <div class="print-header__brand">Stellar Civil — Seismic Base Shear</div>
        <div class="print-header__info"></div>
      </div>

      <div class="calculator-page__header">
        <h2>Seismic Base Shear</h2>
        <p>Determine the total design lateral force (base shear) along the principal direction of the building.</p>
        <span class="calculator-page__code-ref">
          ${ICONS.info} IS 1893 (Part 1): 2016
        </span>
      </div>

      ${renderAssumptions([
        'Applies the Equivalent Static Method for computing Design Horizontal Seismic Coefficient (Ah)',
        'Approximates natural period (Ta) based on assumed fundamental modes for various structure types',
        'Extracts precise Sa/g boundaries directly from the IS 1893 Fig 2 response spectrum'
      ])}

      ${renderInputPanel('Site Conditions', INPUT_FIELDS_SITE, ICONS.info)}
      ${renderInputPanel('Structural Parameters', INPUT_FIELDS_STRUCTURE, ICONS.building)}

      ${renderActionBar()}

      <div id="seismic-load-results"></div>

      <div class="print-footer">
        Generated by Stellar Civil | For reference only. Verify with qualified engineer.
      </div>
    </div>
  `;
  
  const saved = loadInputs(MODULE_ID);
  if (saved) {
    setInputValues(container, saved);
  }
  
  const frameTypeEl = container.querySelector('#frame_type');
  const dInput = container.querySelector('#d');
  const groupD = dInput ? dInput.closest('.input-group') : null;
  
  if (frameTypeEl && groupD) {
    // Only show generic dimension "d" if infilled
    frameTypeEl.addEventListener('change', (e) => {
      if (e.target.value === 'infilled') {
        groupD.style.display = 'block';
      } else {
        groupD.style.display = 'none';
      }
    });

    if ((saved && saved.frame_type !== 'infilled') || frameTypeEl.value !== 'infilled') {
      groupD.style.display = 'none';
    } else {
      groupD.style.display = 'block';
    }
  }
  
  container.querySelector('#btn-calculate').addEventListener('click', calculateSeismicLoad);
  
  container.querySelector('#btn-clear').addEventListener('click', () => {
    localStorage.removeItem("stellar_civil_inputs_" + MODULE_ID);
    initSeismicLoad(container);
    updateStickyBar([]);
  });
}
