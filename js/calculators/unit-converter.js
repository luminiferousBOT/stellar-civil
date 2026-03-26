import { 
  renderInputPanel,
  renderAssumptions,
  getInputValues,
  updateStickyBar,
  ICONS
} from '../utils/ui.js';
import { saveInputs, loadInputs } from '../utils/storage.js';

const MODULE_ID = 'unit-converter';

const CONVERSIONS = {
  length: {
    baseUnit: 'm',
    units: {
      'm': 1,
      'cm': 0.01,
      'mm': 0.001,
      'km': 1000,
      'in': 0.0254,
      'ft': 0.3048,
      'yd': 0.9144,
      'mile': 1609.34
    }
  },
  force: {
    baseUnit: 'kN',
    units: {
      'kN': 1,
      'N': 0.001,
      'kgf': 0.00980665,
      'tf': 9.80665,
      'lbf': 0.00444822,
      'kips': 4.44822
    }
  },
  pressure: {
    baseUnit: 'MPa',
    units: {
      'MPa': 1,
      'N/mm2': 1,
      'N/m2': 0.000001,
      'kPa': 0.001,
      'kgf/cm2': 0.0980665,
      'psi': 0.00689476,
      'ksi': 6.89476
    }
  },
  moment: {
    baseUnit: 'kNm',
    units: {
      'kNm': 1,
      'Nmm': 0.000001,
      'Nm': 0.001,
      'kgfm': 0.00980665,
      'lbf-ft': 0.001355818,
      'kip-in': 0.1129848
    }
  }
};

const INPUT_FIELDS_CATEGORY = [
  { id: 'category', label: 'Conversion Category', type: 'select', default: 'length',
    options: [
      { value: 'length', label: 'Length / Distance' },
      { value: 'force', label: 'Force / Loads' },
      { value: 'pressure', label: 'Stress / Pressure' },
      { value: 'moment', label: 'Bending Moment' }
    ] }
];

const customPanelContent = `
  <div class="input-panel">
    <div class="panel-header" style="margin-bottom: 1.5rem;">
      <h3><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="panel-icon"><path d="m9 18 6-6-6-6"/></svg> Value Converter</h3>
    </div>
    
    <div style="display: flex; gap: 1rem; align-items: center; justify-content: space-between; flex-wrap: wrap;">
      <!-- From -->
      <div style="flex: 1; min-width: 200px;">
        <div class="input-group">
          <label for="val_from">From Value</label>
          <input type="number" id="val_from" class="calc-input" value="1" step="any">
        </div>
        <div class="input-group">
          <label for="unit_from">From Unit</label>
          <select id="unit_from" class="calc-input"></select>
        </div>
      </div>

      <!-- Arrow -->
      <div style="display: flex; align-items: center; justify-content: center; padding: 1rem;">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--primary-color)" stroke-width="2"><path d="m9 18 6-6-6-6"/></svg>
      </div>

      <!-- To -->
      <div style="flex: 1; min-width: 200px;">
        <div class="input-group">
          <label for="val_to">To Value</label>
          <input type="number" id="val_to" class="calc-input" value="" readonly style="background: var(--bg-hover); font-weight: 600;">
        </div>
        <div class="input-group">
          <label for="unit_to">To Unit</label>
          <select id="unit_to" class="calc-input"></select>
        </div>
      </div>
    </div>
  </div>
`;

function populateUnits(categoryStr, fromSelect, toSelect) {
  const cat = CONVERSIONS[categoryStr];
  if (!cat) return;
  const unitKeys = Object.keys(cat.units);
  
  const options = unitKeys.map(k => {
    let displayFormat = k;
    if (k === 'N/mm2') displayFormat = 'N/mm²';
    if (k === 'N/m2') displayFormat = 'N/m²';
    if (k === 'kgf/cm2') displayFormat = 'kgf/cm²';
    if (k === 'kNm') displayFormat = 'kN·m';
    if (k === 'Nmm') displayFormat = 'N·mm';
    if (k === 'Nm') displayFormat = 'N·m';
    return '<option value="' + k + '">' + displayFormat + '</option>';
  }).join('');
  
  fromSelect.innerHTML = options;
  toSelect.innerHTML = options;
  
  // Set sensible defaults
  if (categoryStr === 'length') {
    fromSelect.value = 'm';
    toSelect.value = 'ft';
  } else if (categoryStr === 'force') {
    fromSelect.value = 'kN';
    toSelect.value = 'kgf';
  } else if (categoryStr === 'pressure') {
    fromSelect.value = 'MPa';
    toSelect.value = 'N/mm2';
  } else if (categoryStr === 'moment') {
    fromSelect.value = 'kNm';
    toSelect.value = 'kip-in';
  }
}

export function initUnitConverter(container) {
  container.innerHTML = `
    <div class="calculator-page" id="unit-converter-calc">
      <div class="print-header">
        <div class="print-header__brand">Stellar Civil — Unit Converter</div>
        <div class="print-header__info"></div>
      </div>

      <div class="calculator-page__header">
        <h2>Engineering Unit Converter</h2>
        <p>Instantly convert between common SI, Metric, and Imperial units used in structural engineering.</p>
        <span class="calculator-page__code-ref">
          ${ICONS.info} Universal Utility
        </span>
      </div>

      ${renderAssumptions([
        'Transforms structural scalars seamlessly with IEEE-754 precision floating point calculations',
        'Avoids trailing decimal expansions automatically out to maximum six relevant decimal precision figures'
      ])}

      ${renderInputPanel('Domain Selection', INPUT_FIELDS_CATEGORY, ICONS.info)}

      ${customPanelContent}

      <div class="print-footer">
        Generated by Stellar Civil | Internal Utility.
      </div>
    </div>
  `;
  
  const catSelect = container.querySelector('#category');
  const fromSelect = container.querySelector('#unit_from');
  const toSelect = container.querySelector('#unit_to');
  const valFrom = container.querySelector('#val_from');
  const valTo = container.querySelector('#val_to');
  
  function doConvert() {
    const category = catSelect.value;
    if (!category) return;
    
    const catData = CONVERSIONS[category];
    const fromFactor = catData.units[fromSelect.value];
    const toFactor = catData.units[toSelect.value];
    
    const inputVal = parseFloat(valFrom.value);
    
    if (isNaN(inputVal) || !fromFactor || !toFactor) {
      valTo.value = '';
      updateStickyBar([]);
      return;
    }
    
    // Convert to base unit, then to target unit
    const inBase = inputVal * fromFactor;
    const finalVal = inBase / toFactor;
    
    // Format output dynamically
    let formattedVal;
    if (finalVal === 0) {
      formattedVal = '0';
    } else if (finalVal < 0.0001 || finalVal > 1000000) {
      formattedVal = finalVal.toExponential(4);
    } else {
      // Avoid trailing zeros but allow up to 6 decimals
      formattedVal = parseFloat(finalVal.toFixed(6)).toString();
    }
    
    valTo.value = formattedVal;
    
    updateStickyBar([
      { label: 'From', value: valFrom.value + ' ' + fromSelect.options[fromSelect.selectedIndex].text },
      { label: 'Converted', value: formattedVal + ' ' + toSelect.options[toSelect.selectedIndex].text }
    ]);
    
    saveInputs(MODULE_ID, { 
      category: category, 
      unit_from: fromSelect.value, 
      unit_to: toSelect.value, 
      val_from: valFrom.value 
    });
  }
  
  const saved = loadInputs(MODULE_ID);
  
  if (saved && saved.category) {
    catSelect.value = saved.category;
    populateUnits(saved.category, fromSelect, toSelect);
    if (saved.unit_from) fromSelect.value = saved.unit_from;
    if (saved.unit_to) toSelect.value = saved.unit_to;
    if (saved.val_from !== undefined) valFrom.value = saved.val_from;
  } else {
    populateUnits(catSelect.value, fromSelect, toSelect);
  }
  
  catSelect.addEventListener('change', () => {
    populateUnits(catSelect.value, fromSelect, toSelect);
    doConvert();
  });
  
  fromSelect.addEventListener('change', doConvert);
  toSelect.addEventListener('change', doConvert);
  valFrom.addEventListener('input', doConvert);
  
  // Initial calculation on load
  doConvert();
}
