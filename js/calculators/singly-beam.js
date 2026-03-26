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
import { getRebarByDia } from '../data/rebar.js';
import { FCK_GRADES, FY_GRADES, MIN_STEEL, XU_MAX_RATIO } from '../data/materials.js';

const MODULE_ID = 'singly-beam';

/**
 * Solves for Ast using the quadratic equation:
 * Mu = 0.87 * fy * Ast * d * (1 - (Ast * fy) / (b * d * fck))
 */
function solveAst_Singly(Mu, b, d, fck, fy) {
  const K1 = 0.87 * fy * d;
  const K2 = fy / (b * d * fck);
  
  // Form: a*Ast^2 - b*Ast + c = 0
  const a = K1 * K2;
  const b_coeff = K1;
  const c = Mu * 1E6; // Convert kN.m to N.mm

  const discriminant = Math.pow(b_coeff, 2) - 4 * a * c;
  
  if (discriminant < 0) {
    return NaN; // Should not happen if Mu <= Mu_lim check is done first
  }
  
  // We want the smaller root for Ast
  return (b_coeff - Math.sqrt(discriminant)) / (2 * a);
}

const INPUT_FIELDS_MATERIAL = [
  { id: 'fck', label: 'Concrete Grade (fck)', type: 'select', default: 25,
    options: FCK_GRADES.map(fck => ({ value: fck, label: `M${fck}` })),
    tooltip: 'Characteristic compressive strength of concrete at 28 days (IS 456 Cl. 6.2)' },
  { id: 'fy', label: 'Steel Grade (fy)', type: 'select', default: 415,
    options: FY_GRADES.map(fy => ({ value: fy, label: `Fe${fy}` })),
    tooltip: 'Yield strength of main reinforcement steel (IS 1786)' }
];

const INPUT_FIELDS_GEOMETRY = [
  { id: 'b', label: 'Beam Width (b)', unit: 'mm', default: 230, min: 150, max: 1000, step: 10,
    tooltip: 'Width of the rectangular beam cross-section' },
  { id: 'overall_d', label: 'Overall Depth (D)', unit: 'mm', default: 450, min: 200, max: 2000, step: 10,
    tooltip: 'Total overall depth of the beam section' },
  { id: 'cover', label: "Effective Cover (d')", unit: 'mm', default: 40, min: 20, max: 100, step: 5,
    tooltip: 'Distance from extreme tension fiber to centroid of tension reinforcement' }
];

const INPUT_FIELDS_DESIGN = [
  { id: 'mu', label: 'Factored Moment (Mu)', unit: 'kN·m', default: 75, min: 1, max: 5000, step: 1,
    tooltip: 'Ultimate design bending moment acting on the section' },
  { id: 'vu', label: 'Factored Shear (Vu) (Optional)', unit: 'kN', default: '', min: 0, max: 2000, step: 1,
    tooltip: 'Leave blank if shear design is not required' },
  { id: 'bar_dia', label: 'Main Bar Diameter', unit: 'mm', type: 'select', default: 16,
    options: [12, 16, 20, 25, 32].map(d => ({ value: d, label: `${d} mm (Ast = ${getRebarByDia(d)?.area.toFixed(1)} mm²)` })),
    tooltip: 'Preferred diameter of main tension reinforcement bars' }
];

function calculateSinglyBeam() {
  const container = document.querySelector('.calculator-page');
  let resultsDiv = container.querySelector('#singly-beam-results');
  if (!resultsDiv) {
    resultsDiv = document.createElement('div');
    resultsDiv.id = 'singly-beam-results';
    container.appendChild(resultsDiv);
  }
  
  // 1. Validate inputs
  const rawInputs = getInputValues(container);
  
  // Required fields
  const b_val = validate(rawInputs.b, 150, 1000, 'Beam Width');
  const d_val = validate(rawInputs.overall_d, 200, 2000, 'Overall Depth');
  const cover_val = validate(rawInputs.cover, 20, 100, 'Effective Cover');
  const mu_val = validate(rawInputs.mu, 1, 5000, 'Factored Moment');
  
  if (!b_val.valid || !d_val.valid || !cover_val.valid || !mu_val.valid) {
    showToast('Please correct invalid fields before calculating.', 'error');
    return;
  }
  
  // Save inputs for future sessions
  saveInputs(MODULE_ID, rawInputs);
  
  // 2. Extract values for engine
  const b = parseFloat(rawInputs.b);
  const D = parseFloat(rawInputs.overall_d);
  const cover = parseFloat(rawInputs.cover);
  const Mu = parseFloat(rawInputs.mu);
  const fck = parseFloat(rawInputs.fck);
  const fy = parseFloat(rawInputs.fy);
  const barDia = parseFloat(rawInputs.bar_dia);
  
  const d = D - cover; // Effective depth
  
  // 3. Calculation Engine (IS 456 Logic)
  let steps = [];
  
  steps.push({
    step: 1,
    title: 'Effective Depth',
    formula: "d = D - d'",
    result: "d = " + D + " - " + cover + " = " + d.toFixed(1) + " <span class=\"unit\">mm</span>"
  });
  
  // Limiting Moment of Resistance (Mu_lim)
  const xu_max_ratio = XU_MAX_RATIO[fy] || 0.479; // Default to Fe415 if missing
  const xu_max = xu_max_ratio * d;
  
  steps.push({
    step: 2,
    title: 'Limiting Neutral Axis',
    formula: "xu,max = " + xu_max_ratio + " × d (for Fe" + fy + ")",
    result: "xu,max = " + xu_max.toFixed(1) + " <span class=\"unit\">mm</span>"
  });
  
  const Mu_lim = 0.36 * xu_max_ratio * (1 - 0.416 * xu_max_ratio) * fck * b * d * d / 1E6; // kN.m
  
  steps.push({
    step: 3,
    title: 'Limiting Moment Capacity',
    formula: 'Mu,lim = 0.36×(xu,max/d)×(1 - 0.416×(xu,max/d))×fck×b×d²',
    result: "Mu,lim = " + Mu_lim.toFixed(2) + " <span class=\"unit\">kN·m</span>"
  });
  
  let section_type_ok = true;
  let Ast = 0;
  
  steps.push({
    step: 4,
    title: 'Section Check',
    formula: 'Compare Mu with Mu,lim',
    result: "Mu (" + Mu + " kN·m) " + (Mu > Mu_lim ? '>' : '≤') + " Mu,lim (" + Mu_lim.toFixed(2) + " kN·m) " + (Mu > Mu_lim ? '→ <b>Requires Doubly Reinforced</b>' : '→ <b>Singly Reinforced OK</b>')
  });
  
  if (Mu > Mu_lim) {
    section_type_ok = false;
  } else {
    // Calculate Ast
    Ast = solveAst_Singly(Mu, b, d, fck, fy);
    
    steps.push({
      step: 5,
      title: 'Required Area of Tension Steel',
      formula: 'Quadratic: 0.87×fy×Ast×d×[1 - Ast×fy/(b×d×fck)] = Mu',
      result: "Ast,req = " + Ast.toFixed(1) + " <span class=\"unit\">mm²</span>"
    });
    
    // Minimum steel check
    const pt_min = 0.85 / fy * 100;
    const Ast_min = (0.85 * b * d) / fy;
    
    steps.push({
      step: 6,
      title: 'Minimum Tension Steel',
      formula: 'Ast,min = 0.85×b×d/fy',
      result: "Ast,min = " + Ast_min.toFixed(1) + " <span class=\"unit\">mm²</span> (" + pt_min.toFixed(2) + "%)"
    });
    
    if (Ast < Ast_min) {
      Ast = Ast_min;
      steps.push({
        step: 7,
        title: 'Governing Required Ast',
        formula: 'Ast = max(Ast, Ast_min)',
        result: "Ast = " + Ast.toFixed(1) + " <span class=\"unit\">mm²</span>"
      });
    }
  }
  
  // Bar Arrangement
  let num_bars = 0;
  let Ast_provided = 0;
  const bar = getRebarByDia(barDia);
  let status = 'pass';
  let statusMessage = 'Design OK';
  
  if (section_type_ok) {
    num_bars = Math.ceil(Ast / bar.area);
    Ast_provided = num_bars * bar.area;
    
    steps.push({
      step: 8,
      title: 'Provide Reinforcement',
      formula: 'N = ceil(Ast / Area_bar)',
      result: "Provide " + num_bars + " - " + barDia + "φ (" + Ast_provided.toFixed(1) + " mm² > " + Ast.toFixed(1) + " mm²)"
    });
    
    // Check maximum steel (Cl 26.5.1.1)
    const Ast_max = 0.04 * b * D;
    steps.push({
      step: 9,
      title: 'Maximum Steel Check',
      formula: 'Ast,max = 0.04×b×D',
      result: "Ast,prov (" + Ast_provided.toFixed(1) + ") " + (Ast_provided <= Ast_max ? '≤' : '>') + " Ast,max (" + Ast_max.toFixed(1) + ")"
    });
    
    if (Ast_provided > Ast_max) {
      status = 'fail';
      statusMessage = 'Max Steel Exceeded';
      section_type_ok = false;
    }
  } else {
    status = 'fail';
    statusMessage = 'Doubly Reinforced Required';
  }
  
  // 4. Render Results
  const complianceChecks = [
    {
      label: 'Singly Reinforced Capacity',
      status: Mu <= Mu_lim ? 'pass' : 'fail',
      text: "Mu (" + Mu.toFixed(1) + ") ≤ Mu,lim (" + Mu_lim.toFixed(1) + ")",
      ref: 'Annex G 1.1'
    }
  ];
  
  if (section_type_ok) {
    complianceChecks.push({
      label: 'Minimum Tension Steel',
      status: Ast_provided >= (0.85 * b * d / fy) ? 'pass' : 'fail',
      text: "Ast (" + Ast_provided.toFixed(1) + ") ≥ Ast,min (" + (0.85 * b * d / fy).toFixed(1) + ")",
      ref: 'Cl. 26.5.1.1(a)'
    }, {
      label: 'Maximum Tension Steel',
      status: Ast_provided <= (0.04 * b * D) ? 'pass' : 'fail',
      text: "Ast (" + Ast_provided.toFixed(1) + ") ≤ 0.04bD (" + (0.04 * b * D).toFixed(1) + ")",
      ref: 'Cl. 26.5.1.1(b)'
    });
  }
  
  // Summary array
  const summaryCards = [];
  
  if (section_type_ok) {
    summaryCards.push(
      { label: 'Effective Depth (d)', value: d.toFixed(1), unit: 'mm' },
      { label: 'Ast Required', value: Ast.toFixed(1), unit: 'mm²' },
      { label: 'Tension Bars', value: num_bars + " - " + barDia + "φ", highlight: true, status: 'pass' },
      { label: 'Ast Provided', value: Ast_provided.toFixed(1), unit: 'mm²' }
    );
  } else {
    summaryCards.push(
      { label: 'Section Capacity', value: 'Exceeded', status: 'fail', highlight: true },
      { label: 'Mu,lim', value: Mu_lim.toFixed(1), unit: 'kN·m' },
      { label: 'Resolution', value: 'Use Doubly Reinforced', highlight: true }
    );
  }
  
  const content = `
    <div class="calculator-layout">
      <div class="results-main">
        ${renderResultSummary(summaryCards)}
        
        ${section_type_ok ? `
        <div class="graphics-box" style="margin-bottom: var(--spacing-lg); padding: var(--spacing-lg); background: var(--bg-card); border-radius: var(--radius-lg); border: 1px solid var(--border); text-align: center;">
          <h3 style="margin-bottom: var(--spacing-md); color: var(--text-muted); font-size: 0.875rem; text-transform: uppercase;">Beam Cross-Section</h3>
          <div style="display: inline-block; position: relative; border: 3px solid var(--text-primary); width: 140px; height: ${Math.max(140, Math.min(250, (D/b)*140))}px; border-radius: 4px; background: rgba(255,255,255,0.05); margin-top: 1.5rem; margin-right: 2.5rem;">
            <!-- Dimensions -->
            <div style="position: absolute; top: -25px; left: 0; width: 100%; text-align: center; color: var(--text-muted); font-size: 0.875rem;">${b} mm</div>
            <div style="position: absolute; right: -50px; top: 0; height: 100%; display: flex; align-items: center; color: var(--text-muted); font-size: 0.875rem;">${D}<br>mm</div>
            
            <!-- Bars -->
            <div style="position: absolute; bottom: ${Math.max(10, (cover/D)*100)}%; left: 10%; width: 80%; display: flex; justify-content: space-around;">
              ${Array(num_bars).fill(0).map(() => `<div style="width: 14px; height: 14px; border-radius: 50%; background: var(--color-accent);"></div>`).join('')}
            </div>
          </div>
          <div style="margin-top: var(--spacing-md); color: var(--color-accent); font-weight: 500;">
            Provide ${num_bars} - ${barDia}φ at bottom
          </div>
        </div>
        ` : ''}
        
        ${renderStepTable('Calculation Steps', steps)}
      </div>
      <div class="results-sidebar">
        ${renderComplianceChecks(complianceChecks)}
      </div>
    </div>
  `;
  
  resultsDiv.innerHTML = content;
  
  // Show sticky bar with key results
  const stickyContent = `
    <div class="sticky-item"><span>Section:</span> <strong>${b} × ${D}</strong> mm</div>
    ${section_type_ok ? `
      <div class="sticky-item"><span>Bars:</span> <strong>${num_bars} - ${barDia}φ</strong></div>
      <div class="sticky-item"><span>Ast Provided:</span> <strong>${Ast_provided.toFixed(1)}</strong> mm²</div>
    ` : `<div class="sticky-item"><span>Status:</span> <strong style="color: var(--color-error)">Requires Doubly Reinforced</strong></div>`}
    <div class="sticky-status ${status}">
      <span>Status:</span>
      <strong>${status === 'pass' ? '✅ OK' : '❌ ' + statusMessage}</strong>
    </div>
  `;
  
  document.getElementById('sticky-results-content').innerHTML = stickyContent;
  document.getElementById('sticky-bar').classList.add('visible');
  
  resultsDiv.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export function initSinglyBeam(container) {
  container.innerHTML = `
    <div class="calculator-page" id="singly-beam-calc">
      <div class="print-header">
        <div class="print-header__brand">Stellar Civil — Singly Reinforced Beam</div>
        <div class="print-header__info"></div>
      </div>

      <div class="calculator-page__header">
        <h2>Singly Reinforced Beam Design</h2>
        <p>Design a rectangular beam cross-section with tension reinforcement only, following IS 456:2000 Annex G limitations.</p>
        <span class="calculator-page__code-ref">
          ${ICONS.info} IS 456:2000 — Annex G, Cl. 38.1
        </span>
      </div>

      ${renderAssumptions([
        'Section is subjected to uniaxial bending only',
        'Tension reinforcement only (No compression steel designed)',
        'Concrete stress block is parabolic-rectangular per IS 456 Cl. 38.1(c)',
        'Maximum strain in concrete at outermost compression fiber is 0.0035',
        'Tensile strength of concrete is entirely ignored'
      ])}

      ${renderInputPanel('Material Properties', INPUT_FIELDS_MATERIAL, ICONS.info)}
      ${renderInputPanel('Section Geometry', INPUT_FIELDS_GEOMETRY, ICONS.building)}
      ${renderInputPanel('Design Limit States', INPUT_FIELDS_DESIGN, ICONS.calculator)}

      ${renderActionBar()}

      <div id="singly-beam-results"></div>

      <div class="print-footer">
        Generated by Stellar Civil | For reference only. Verify with qualified engineer.
      </div>
    </div>
  `;

  // Attach event listeners
  container.querySelector('#btn-calculate').addEventListener('click', calculateSinglyBeam);
  
  container.querySelector('#btn-clear').addEventListener('click', () => {
    localStorage.removeItem('stellar_civil_inputs_' + MODULE_ID);
    initSinglyBeam(container);
    document.getElementById('sticky-bar').classList.remove('visible');
  });

  // Load saved inputs
  const saved = loadInputs(MODULE_ID);
  if (saved) {
    setInputValues(container, saved);
  }
}
