import { 
  renderInputPanel,
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
import { REBAR_DIAMETERS, getRebarArea, getRebarWeight } from '../data/concrete.js';

const MODULE_ID = 'rebar-reference';

const INPUT_FIELDS_REBAR_SIZER = [
  { id: 'ast_req', label: 'Required Area (Ast,req)', unit: 'mm²', default: 1000, min: 10, max: 50000, step: 10 },
  { id: 'dia_try', label: 'Try Bar Diameter (Φ)', unit: 'mm', type: 'select', default: '16',
    options: REBAR_DIAMETERS.map(d => ({ value: d.toString(), label: `${d} mm` })) },
  { id: 'calc_type', label: 'Calculation Mode', type: 'select', default: 'spacing',
    options: [
      { value: 'spacing', label: 'Slabs / Walls (Find Spacing per meter width)' },
      { value: 'count', label: 'Beams / Columns (Find Number of Bars)' }
    ] },
  { id: 'width', label: 'Section Width (b)', unit: 'mm', default: 300, min: 50, max: 5000, step: 50, tooltip: 'Required to check fit for beams' }
];

const resultsTableHTML = `
  <div class="results-panel" style="margin-bottom: 2rem;">
    <div class="results-panel__header">
      <h3>Standard Rebar Properties (IS 1786)</h3>
    </div>
    <div style="overflow-x: auto;">
      <table style="width: 100%; border-collapse: collapse; margin-top: 1rem; text-align: left;">
        <thead>
          <tr style="background: var(--bg-hover); border-bottom: 2px solid var(--border-color);">
            <th style="padding: 0.75rem;">Diameter (Φ)</th>
            <th style="padding: 0.75rem;">Area (mm²)</th>
            <th style="padding: 0.75rem;">Weight (kg/m)</th>
            <th style="padding: 0.75rem;">Perimeter (mm)</th>
          </tr>
        </thead>
        <tbody id="rebar-table-body">
          <!-- Populated by JS -->
        </tbody>
      </table>
    </div>
  </div>
`;

function populateRebarTable(container) {
  const tbody = container.querySelector('#rebar-table-body');
  let html = '';
  
  REBAR_DIAMETERS.forEach(d => {
    const area = getRebarArea(d);
    const weight = getRebarWeight(d);
    const perim = Math.PI * d;
    
    html += `
      <tr style="border-bottom: 1px solid var(--border-color);">
        <td style="padding: 0.75rem; font-weight: bold;">${d} mm</td>
        <td style="padding: 0.75rem;">${area.toFixed(1)}</td>
        <td style="padding: 0.75rem;">${weight.toFixed(3)}</td>
        <td style="padding: 0.75rem;">${perim.toFixed(1)}</td>
      </tr>
    `;
  });
  
  tbody.innerHTML = html;
}

function calculateSizing() {
  const container = document.querySelector('.calculator-page');
  const resultsDiv = container.querySelector('#sizing-results-container');
  
  const rawInputs = getInputValues(container);
  const ast_val = validate(rawInputs.ast_req, 10, 50000, 'Required Area');
  
  if (!ast_val.valid) {
    showToast('Please correct invalid fields before calculating.', 'error');
    return;
  }
  
  const Ast_req = parseFloat(rawInputs.ast_req);
  const d = parseInt(rawInputs.dia_try);
  const mode = rawInputs.calc_type;
  
  const a_bar = getRebarArea(d);
  
  if (mode === 'spacing') {
    // Slabs and Walls: Spacing = 1000 * a_bar / Ast_req
    let spacing = (1000 * a_bar) / Ast_req;
    
    // Round down to nearest 10mm for practicality
    spacing = Math.floor(spacing / 10) * 10;
    
    // Max practical spacing is usually 300mm
    if (spacing > 300) spacing = 300;
    
    const Ast_prov = (1000 * a_bar) / spacing;
    
    resultsDiv.innerHTML = `
      <div style="padding: 1.5rem; background: var(--bg-hover); border: 2px solid var(--primary-color); border-radius: var(--radius-md); text-align: center;">
        <h4 style="margin-bottom: 0.5rem; color: var(--text-color);">Provide</h4>
        <div style="font-size: 2rem; font-weight: bold; color: var(--primary-color); margin-bottom: 0.5rem;">
          Φ${d} @ ${spacing} mm c/c
        </div>
        <p style="color: var(--text-muted); font-size: 0.9rem;">
          Ast provided = ${Ast_prov.toFixed(1)} mm² / m width<br>
          (Required = ${Ast_req} mm²)
        </p>
      </div>
    `;
    
    updateStickyBar([
      { label: 'Try Bar', value: `Φ${d}` },
      { label: 'Spacing', value: `${spacing} mm c/c` }
    ]);
    
  } else {
    // Beams and Columns: Number = ceil(Ast_req / a_bar)
    const n = Math.ceil(Ast_req / a_bar);
    const Ast_prov = n * a_bar;
    
    let fitWarning = '';
    if (rawInputs.width) {
      const b = parseFloat(rawInputs.width);
      // Rough fit check: cover 40, stirrup 8, gap = max(dia, 20)
      const gap = Math.max(d, 20);
      const reqWidth = 2 * (40 + 8) + n * d + (n - 1) * gap;
      if (reqWidth > b) {
        fitWarning = `<div class="badge badge--fail" style="margin-top: 1rem; display: inline-block;">Warning: Bars may not fit in single layer (Req Width ${reqWidth}mm > ${b}mm)</div>`;
      } else {
        fitWarning = `<div class="badge badge--pass" style="margin-top: 1rem; display: inline-block;">Fits in single layer (Width OK)</div>`;
      }
    }
    
    resultsDiv.innerHTML = `
      <div style="padding: 1.5rem; background: var(--bg-hover); border: 2px solid var(--primary-color); border-radius: var(--radius-md); text-align: center;">
        <h4 style="margin-bottom: 0.5rem; color: var(--text-color);">Provide</h4>
        <div style="font-size: 2rem; font-weight: bold; color: var(--primary-color); margin-bottom: 0.5rem;">
          ${n} - Φ${d}
        </div>
        <p style="color: var(--text-muted); font-size: 0.9rem;">
          Ast provided = ${Ast_prov.toFixed(1)} mm²<br>
          (Required = ${Ast_req} mm²)
        </p>
        ${fitWarning}
      </div>
    `;
    
    updateStickyBar([
      { label: 'Try Bar', value: `Φ${d}` },
      { label: 'Number', value: `${n} bars` }
    ]);
  }
}

export function initRebarReference(container) {
  container.innerHTML = `
    <div class="calculator-page" id="rebar-reference-calc">
      <div class="print-header">
        <div class="print-header__brand">Stellar Civil — Rebar Reference</div>
        <div class="print-header__info"></div>
      </div>

      <div class="calculator-page__header">
        <h2>Rebar Reference & Sizer</h2>
        <p>Standard reinforcement bar properties and an area-to-spacing calculator.</p>
        <span class="calculator-page__code-ref">
          ${ICONS.info} IS 1786
        </span>
      </div>

      ${renderAssumptions([
        'Rebar area based on nominal diameter (π × d²/4)',
        'Spacing is rounded down to the nearest 10mm for practicality, capped at 300mm max constraint'
      ])}

      ${resultsTableHTML}

      ${renderInputPanel('Bar Sizer / Spacing Calculator', INPUT_FIELDS_REBAR_SIZER, ICONS.calculator)}

      ${renderActionBar()}

      <div id="sizing-results-container" style="margin-top: 1.5rem;"></div>

      <div class="print-footer">
        Generated by Stellar Civil | For reference only. Verify with qualified engineer.
      </div>
    </div>
  `;
  
  populateRebarTable(container);
  
  const saved = loadInputs(MODULE_ID);
  if (saved) {
    setInputValues(container, saved);
  }

  const modeSelect = container.querySelector('#calc_type');
  const widthInput = container.querySelector('#width');
  const groupWidth = widthInput ? widthInput.closest('.input-group') : null;
  
  if (modeSelect && groupWidth) {
    modeSelect.addEventListener('change', (e) => {
      if (e.target.value === 'count') {
        groupWidth.style.display = 'block';
      } else {
        groupWidth.style.display = 'none';
        widthInput.value = '';
      }
    });

    if (modeSelect.value === 'count') {
      groupWidth.style.display = 'block';
    } else {
      groupWidth.style.display = 'none';
    }
  }
  
  const calcBtn = container.querySelector('#btn-calculate');
  if (calcBtn) {
    calcBtn.addEventListener('click', calculateSizing);
  }
  
  const clearBtn = container.querySelector('#btn-clear');
  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      localStorage.removeItem("stellar_civil_inputs_" + MODULE_ID);
      initRebarReference(container);
      updateStickyBar([]);
    });
  }
}
