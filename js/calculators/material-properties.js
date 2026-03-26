import { 
  renderInputPanel,
  renderResultSummary, 
  renderAssumptions,
  updateStickyBar,
  ICONS
} from '../utils/ui.js';
import { CONCRETE_GRADES } from '../data/concrete.js';
import { STEEL_GRADES, STEEL_PROPS } from '../data/steel.js';

const MODULE_ID = 'material-properties';

const INPUT_FIELDS_MATERIAL = [
  { id: 'mat_type', label: 'Material Type', type: 'select', default: 'concrete',
    options: [
      { value: 'concrete', label: 'Concrete (IS 456)' },
      { value: 'steel', label: 'Structural Steel (IS 2062)' }
    ] }
];

function renderConcreteTable(container) {
  let html = `
    <div class="results-panel">
      <div class="results-panel__header">
        <h3>Standard Concrete Grades (IS 456 Table 2)</h3>
      </div>
      <div style="overflow-x: auto;">
        <table style="width: 100%; border-collapse: collapse; margin-top: 1rem; text-align: left;">
          <thead>
            <tr style="background: var(--bg-hover); border-bottom: 2px solid var(--border-color);">
              <th style="padding: 0.75rem;">Group</th>
              <th style="padding: 0.75rem;">Grade Designation</th>
              <th style="padding: 0.75rem;">fck (N/mm²)</th>
              <th style="padding: 0.75rem;">Elastic Modulus, Ec (MPa)</th>
              <th style="padding: 0.75rem;">Tensile Strength, fcr (MPa)</th>
            </tr>
          </thead>
          <tbody>
  `;
  
  CONCRETE_GRADES.forEach(fck => {
    let group = 'Ordinary';
    if (fck >= 25 && fck <= 60) group = 'Standard';
    else if (fck > 60) group = 'High Strength';
    
    const Ec = 5000 * Math.sqrt(fck);
    const fcr = 0.7 * Math.sqrt(fck);
    
    html += `
      <tr style="border-bottom: 1px solid var(--border-color);">
        <td style="padding: 0.75rem;">${group}</td>
        <td style="padding: 0.75rem; font-weight: bold;">M${fck}</td>
        <td style="padding: 0.75rem;">${fck}</td>
        <td style="padding: 0.75rem;">${Ec.toFixed(0)}</td>
        <td style="padding: 0.75rem;">${fcr.toFixed(2)}</td>
      </tr>
    `;
  });
  
  html += `
          </tbody>
        </table>
      </div>
    </div>
  `;
  container.innerHTML = `<div class="calculator-layout" style="margin-top: 2rem;"><div class="results-main">${html}</div></div>`;
  updateStickyBar([{ label: 'Viewing', value: 'Concrete Properties (IS 456)' }]);
}

function renderSteelTable(container) {
  let html = `
    <div class="results-panel">
      <div class="results-panel__header">
        <h3>Structural Steel Grades (IS 2062)</h3>
      </div>
      <div style="margin: 1rem 0; padding: 1rem; background: var(--bg-card); border-radius: var(--radius-sm);">
        <p><strong>Universal Properties (IS 800 Cl 2.2.4):</strong></p>
        <ul style="margin-top: 0.5rem; padding-left: 1.5rem; color: var(--text-muted);">
          <li>Modulus of Elasticity, E = ${STEEL_PROPS.E} N/mm²</li>
          <li>Poisson's Ratio, v = ${STEEL_PROPS.v}</li>
          <li>Unit Mass, ρ = 7850 kg/m³</li>
        </ul>
      </div>
      <div style="overflow-x: auto;">
        <table style="width: 100%; border-collapse: collapse; margin-top: 1rem; text-align: left;">
          <thead>
            <tr style="background: var(--bg-hover); border-bottom: 2px solid var(--border-color);">
              <th style="padding: 0.75rem;">Grade Designation</th>
              <th style="padding: 0.75rem;">Yield Stress, fy (MPa)<br><small>for t ≤ 20mm</small></th>
              <th style="padding: 0.75rem;">Ultimate Tensile, fu (MPa)</th>
            </tr>
          </thead>
          <tbody>
  `;
  
  STEEL_GRADES.forEach(g => {
    html += `
      <tr style="border-bottom: 1px solid var(--border-color);">
        <td style="padding: 0.75rem; font-weight: bold;">${g.grade}</td>
        <td style="padding: 0.75rem;">${g.fy}</td>
        <td style="padding: 0.75rem;">${g.fu}</td>
      </tr>
    `;
  });
  
  html += `
          </tbody>
        </table>
      </div>
    </div>
  `;
  container.innerHTML = `<div class="calculator-layout" style="margin-top: 2rem;"><div class="results-main">${html}</div></div>`;
  updateStickyBar([{ label: 'Viewing', value: 'Structural Steel (IS 2062)' }]);
}

export function initMaterialProperties(container) {
  container.innerHTML = `
    <div class="calculator-page" id="material-properties-calc">
      <div class="print-header">
        <div class="print-header__brand">Stellar Civil — Material Guide</div>
        <div class="print-header__info"></div>
      </div>

      <div class="calculator-page__header">
        <h2>Material Properties Guide</h2>
        <p>Quick reference for standard IS 456 Concrete and IS 2062 Steel grades.</p>
        <span class="calculator-page__code-ref">
          ${ICONS.info} Reference Tables
        </span>
      </div>

      ${renderAssumptions([
        'Concrete Elastic Modulus (Ec) approximated as 5000√fck (IS 456:2000)',
        'Steel values extracted from IS 2062 specifications for thickness ≤ 20mm'
      ])}

      ${renderInputPanel('Material Database', INPUT_FIELDS_MATERIAL, ICONS.info)}

      <div id="results-container"></div>

      <div class="print-footer">
        Generated by Stellar Civil | For reference only. Verify with qualified engineer.
      </div>
    </div>
  `;
  
  const typeSelect = container.querySelector('#mat_type');
  const resultsDiv = container.querySelector('#results-container');
  
  function updateView() {
    if (typeSelect.value === 'concrete') {
      renderConcreteTable(resultsDiv);
    } else {
      renderSteelTable(resultsDiv);
    }
  }
  
  typeSelect.addEventListener('change', updateView);
  
  // Initial render
  updateView();
}
