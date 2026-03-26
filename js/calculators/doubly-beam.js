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
import { FCK_GRADES, FY_GRADES, XU_MAX_RATIO } from '../data/materials.js';

const MODULE_ID = 'doubly-beam';

// Helper to interpolate fsc (Stress in compression steel) from Table F of SP:16 or Cl 38.1
function get_fsc(fy, d_prime_by_d) {
  // Approximate values for fsc based on fy and d'/d (IS 456 Annex G)
  // For Fe415
  if (fy === 415) {
    if (d_prime_by_d <= 0.05) return 355;
    if (d_prime_by_d <= 0.10) return 353 * (1 - (d_prime_by_d - 0.05)/0.05) + 342 * ((d_prime_by_d - 0.05)/0.05);
    if (d_prime_by_d <= 0.15) return 342 * (1 - (d_prime_by_d - 0.10)/0.05) + 329 * ((d_prime_by_d - 0.10)/0.05);
    if (d_prime_by_d <= 0.20) return 329 * (1 - (d_prime_by_d - 0.15)/0.05) + 314 * ((d_prime_by_d - 0.15)/0.05);
    return 314;
  }
  // For Fe500
  if (fy === 500) {
    if (d_prime_by_d <= 0.05) return 424;
    if (d_prime_by_d <= 0.10) return 412 * (1 - (d_prime_by_d - 0.05)/0.05) + 395 * ((d_prime_by_d - 0.05)/0.05);
    if (d_prime_by_d <= 0.15) return 395 * (1 - (d_prime_by_d - 0.10)/0.05) + 370 * ((d_prime_by_d - 0.10)/0.05);
    if (d_prime_by_d <= 0.20) return 370 * (1 - (d_prime_by_d - 0.15)/0.05) + 342 * ((d_prime_by_d - 0.15)/0.05);
    return 342;
  }
  // For Fe250 or others
  return 0.87 * fy;
}

const INPUT_FIELDS_MATERIAL = [
  { id: 'fck', label: 'Concrete Grade (fck)', type: 'select', default: 25,
    options: FCK_GRADES.map(fck => ({ value: fck, label: `M${fck}` })),
    tooltip: 'Characteristic compressive strength of concrete at 28 days' },
  { id: 'fy', label: 'Steel Grade (fy)', type: 'select', default: 415,
    options: FY_GRADES.map(fy => ({ value: fy, label: `Fe${fy}` })),
    tooltip: 'Yield strength of reinforcement steel' }
];

const INPUT_FIELDS_GEOMETRY = [
  { id: 'b', label: 'Beam Width (b)', unit: 'mm', default: 230, min: 150, max: 1000, step: 10,
    tooltip: 'Width of the rectangular beam cross-section' },
  { id: 'overall_d', label: 'Overall Depth (D)', unit: 'mm', default: 450, min: 200, max: 2000, step: 10,
    tooltip: 'Total overall depth of the beam section' },
  { id: 'cover_t', label: "Tension Cover (d')", unit: 'mm', default: 50, min: 20, max: 100, step: 5,
    tooltip: 'Effective cover to center of tension reinforcement' },
  { id: 'cover_c', label: "Compression Cover (d')", unit: 'mm', default: 40, min: 20, max: 100, step: 5,
    tooltip: 'Effective cover to center of compression reinforcement' }
];

const INPUT_FIELDS_DESIGN = [
  { id: 'mu', label: 'Factored Moment (Mu)', unit: 'kN·m', default: 250, min: 1, max: 5000, step: 1,
    tooltip: 'Ultimate design bending moment acting on the section' },
  { id: 'bar_dia_t', label: 'Tension Bar Dia', unit: 'mm', type: 'select', default: 20,
    options: [16, 20, 25, 32].map(d => ({ value: d, label: `${d} mm` })),
    tooltip: 'Preferred diameter of tension reinforcement bars' },
  { id: 'bar_dia_c', label: 'Compression Bar Dia', unit: 'mm', type: 'select', default: 16,
    options: [12, 16, 20, 25].map(d => ({ value: d, label: `${d} mm` })),
    tooltip: 'Preferred diameter of compression reinforcement bars' }
];

function calculateDoublyBeam() {
  const container = document.querySelector('.calculator-page');
  let resultsDiv = container.querySelector('#doubly-beam-results');
  if (!resultsDiv) {
    resultsDiv = document.createElement('div');
    resultsDiv.id = 'doubly-beam-results';
    container.appendChild(resultsDiv);
  }
  
  // 1. Validate inputs
  const rawInputs = getInputValues(container);
  
  const b_val = validate(rawInputs.b, 150, 1000, 'Beam Width');
  const d_val = validate(rawInputs.overall_d, 200, 2000, 'Overall Depth');
  const covert_val = validate(rawInputs.cover_t, 20, 100, 'Tension Cover');
  const coverc_val = validate(rawInputs.cover_c, 20, 100, 'Compression Cover');
  const mu_val = validate(rawInputs.mu, 1, 5000, 'Factored Moment');
  
  if (!b_val.valid || !d_val.valid || !covert_val.valid || !coverc_val.valid || !mu_val.valid) {
    showToast('Please correct invalid fields before calculating.', 'error');
    return;
  }
  
  saveInputs(MODULE_ID, rawInputs);
  
  // 2. Extract Values
  const b = parseFloat(rawInputs.b);
  const D = parseFloat(rawInputs.overall_d);
  const cover_t = parseFloat(rawInputs.cover_t);
  const dc = parseFloat(rawInputs.cover_c); // d'
  const Mu = parseFloat(rawInputs.mu);
  const fck = parseFloat(rawInputs.fck);
  const fy = parseFloat(rawInputs.fy);
  const barDiaT = parseFloat(rawInputs.bar_dia_t);
  const barDiaC = parseFloat(rawInputs.bar_dia_c);
  
  const d = D - cover_t; 
  
  // 3. Calculation Engine
  let steps = [];
  
  steps.push({
    step: 1,
    title: 'Effective Depth',
    formula: "d = D - d_t",
    result: "d = " + D + " - " + cover_t + " = " + d.toFixed(1) + " <span class=\"unit\">mm</span>"
  });
  
  // Check Mu_lim
  const xu_max_ratio = XU_MAX_RATIO[fy] || 0.479;
  const xu_max = xu_max_ratio * d;
  const Mu_lim = 0.36 * xu_max_ratio * (1 - 0.416 * xu_max_ratio) * fck * b * d * d / 1E6; // kN.m
  
  steps.push({
    step: 2,
    title: 'Limiting Capacity (Singly)',
    formula: 'Mu,lim = 0.36×(xu,max/d)×(1 - 0.416×(xu,max/d))×fck×b×d²',
    result: "Mu,lim = " + Mu_lim.toFixed(2) + " <span class=\"unit\">kN·m</span>"
  });
  
  let Ast1 = 0, Ast2 = 0, Asc = 0;
  
  if (Mu <= Mu_lim) {
    steps.push({
      step: 3,
      title: 'Section Type Check',
      formula: 'Mu vs Mu,lim',
      result: "Mu (" + Mu + ") ≤ Mu,lim (" + Mu_lim.toFixed(2) + ") → <b>Design as Singly Reinforced</b>. Proceeding with Ast1."
    });
    
    // Calculate Ast1 only
    const K1 = 0.87 * fy * d;
    const K2 = fy / (b * d * fck);
    const a = K1 * K2;
    const b_coeff = K1;
    const c = Mu * 1E6;
    const discriminant = Math.pow(b_coeff, 2) - 4 * a * c;
    Ast1 = (b_coeff - Math.sqrt(discriminant)) / (2 * a);
    
    steps.push({
      step: 4,
      title: 'Required Tension Steel',
      formula: '0.87×fy×Ast×d×[1 - Ast×fy/(b×d×fck)] = Mu',
      result: "Ast = " + Ast1.toFixed(1) + " <span class=\"unit\">mm²</span>"
    });
  } else {
    steps.push({
      step: 3,
      title: 'Section Type Check',
      formula: 'Mu vs Mu,lim',
      result: "Mu (" + Mu + ") > Mu,lim (" + Mu_lim.toFixed(2) + ") → <b>Design as Doubly Reinforced</b>"
    });
    
    const Mu2 = Math.max(0, Mu - Mu_lim);
    
    steps.push({
      step: 4,
      title: 'Excess Moment (Mu2)',
      formula: 'Mu2 = Mu - Mu,lim',
      result: "Mu2 = " + Mu + " - " + Mu_lim.toFixed(2) + " = " + Mu2.toFixed(2) + " <span class=\"unit\">kN·m</span>"
    });
    
    // Ast1 (For Mu_lim)
    Ast1 = (Mu_lim * 1E6) / (0.87 * fy * (d - 0.416 * xu_max));
    
    steps.push({
      step: 5,
      title: 'Tension Steel for Mu,lim (Ast1)',
      formula: 'Ast1 = Mu,lim / [0.87×fy×(d - 0.416×xu,max)]',
      result: "Ast1 = " + Ast1.toFixed(1) + " <span class=\"unit\">mm²</span>"
    });
    
    // Stress in compression steel
    const d_prime_by_d = dc / d;
    const fsc = get_fsc(fy, d_prime_by_d);
    const fcc = 0.446 * fck; // Stress in concrete at level of compression steel
    
    steps.push({
      step: 6,
      title: 'Stress in Comp. Steel (fsc)',
      formula: "Interpolated from SP 16 Table F (using d'/d = " + d_prime_by_d.toFixed(3) + ")",
      result: "fsc = " + fsc.toFixed(1) + " <span class=\"unit\">N/mm²</span>"
    });
    
    // Asc
    Asc = (Mu2 * 1E6) / ((fsc - fcc) * (d - dc));
    
    steps.push({
      step: 7,
      title: 'Compression Steel Area (Asc)',
      formula: "Asc = Mu2 / [(fsc - fcc)×(d - d')]",
      result: "Asc = " + Asc.toFixed(1) + " <span class=\"unit\">mm²</span>"
    });
    
    // Ast2
    Ast2 = (Asc * (fsc - fcc)) / (0.87 * fy);
    
    steps.push({
      step: 8,
      title: 'Additional Tension Steel (Ast2)',
      formula: 'Ast2 = Asc×(fsc - fcc) / (0.87×fy)',
      result: "Ast2 = " + Ast2.toFixed(1) + " <span class=\"unit\">mm²</span>"
    });
  }
  
  const totalAst = Ast1 + Ast2;
  
  if (Mu > Mu_lim) {
    steps.push({
      step: 9,
      title: 'Total Tension Steel (Ast)',
      formula: 'Ast = Ast1 + Ast2',
      result: "Ast = " + Ast1.toFixed(1) + " + " + Ast2.toFixed(1) + " = " + totalAst.toFixed(1) + " <span class=\"unit\">mm²</span>"
    });
  }
  
  // Bar Provision
  const barT = getRebarByDia(barDiaT);
  const barC = getRebarByDia(barDiaC);
  
  const num_bars_t = Math.ceil(totalAst / barT.area);
  const Ast_prov = Math.max(0.85*b*d/fy, num_bars_t * barT.area);
  
  let num_bars_c = 0;
  let Asc_prov = 0;
  
  if (Asc > 0) {
    num_bars_c = Math.max(2, Math.ceil(Asc / barC.area)); // Minimum 2 bars at top
    Asc_prov = num_bars_c * barC.area;
  }
  
  steps.push({
    step: Mu > Mu_lim ? 10 : 5,
    title: 'Provide Reinforcement',
    formula: 'N = ceil(Area / Area_bar)',
    result: "Tension: Provide " + num_bars_t + " - " + barDiaT + "φ (" + Ast_prov.toFixed(1) + " mm²)<br>" + (Asc > 0 ? "Compression: Provide " + num_bars_c + " - " + barDiaC + "φ (" + Asc_prov.toFixed(1) + " mm²)" : "")
  });
  
  // Max Steel Checks
  const max_steel = 0.04 * b * D;
  let status = 'pass';
  let statusMessage = 'Design OK';
  
  if (Ast_prov > max_steel || Asc_prov > max_steel) {
    status = 'fail';
    statusMessage = 'Max Steel Exceeded';
  }
  
  // 4. Render
  const complianceChecks = [
    {
      label: 'Minimum Tension Steel',
      status: Ast_prov >= (0.85 * b * d / fy) ? 'pass' : 'fail',
      text: "Ast (" + Ast_prov.toFixed(1) + ") ≥ " + (0.85 * b * d / fy).toFixed(1),
      ref: 'Cl. 26.5.1.1(a)'
    },
    {
      label: 'Maximum Tension Steel',
      status: Ast_prov <= max_steel ? 'pass' : 'fail',
      text: "Ast (" + Ast_prov.toFixed(1) + ") ≤ " + max_steel.toFixed(1),
      ref: 'Cl. 26.5.1.1(b)'
    }
  ];
  
  if (Asc > 0) {
    complianceChecks.push({
      label: 'Maximum Compression Steel',
      status: Asc_prov <= max_steel ? 'pass' : 'fail',
      text: "Asc (" + Asc_prov.toFixed(1) + ") ≤ " + max_steel.toFixed(1),
      ref: 'Cl. 26.5.1.2'
    });
  }
  
  const summaryCards = [
    { label: 'Ast Required', value: totalAst.toFixed(1), unit: 'mm²' },
    { label: 'Tension Bars', value: num_bars_t + " - " + barDiaT + "φ", highlight: true, status: Ast_prov <= max_steel ? 'pass' : 'fail' },
  ];
  
  if (Asc > 0) {
    summaryCards.push(
      { label: 'Asc Required', value: Asc.toFixed(1), unit: 'mm²' },
      { label: 'Compression Bars', value: num_bars_c + " - " + barDiaC + "φ", highlight: true, status: Asc_prov <= max_steel ? 'pass' : 'fail' }
    );
  } else {
    summaryCards.push(
      { label: 'Asc Required', value: '0.0', unit: 'mm²' },
      { label: 'Compression Bars', value: 'Nominal' }
    );
  }
  
  const content = `
    <div class="calculator-layout">
      <div class="results-main">
        ${renderResultSummary(summaryCards)}
        
        <div class="graphics-box" style="margin-bottom: var(--spacing-lg); padding: var(--spacing-lg); background: var(--bg-card); border-radius: var(--radius-lg); border: 1px solid var(--border); text-align: center;">
          <h3 style="margin-bottom: var(--spacing-md); color: var(--text-muted); font-size: 0.875rem; text-transform: uppercase;">Beam Cross-Section</h3>
          <div style="display: inline-block; position: relative; border: 3px solid var(--text-primary); width: 140px; height: ${Math.max(140, Math.min(250, (D/b)*140))}px; border-radius: 4px; background: rgba(255,255,255,0.05); margin-top: 1.5rem; margin-right: 2.5rem;">
            <!-- Dimensions -->
            <div style="position: absolute; top: -25px; left: 0; width: 100%; text-align: center; color: var(--text-muted); font-size: 0.875rem;">${b} mm</div>
            <div style="position: absolute; right: -50px; top: 0; height: 100%; display: flex; align-items: center; color: var(--text-muted); font-size: 0.875rem;">${D}<br>mm</div>
            
            <!-- Comp Bars -->
            ${Asc > 0 ? `
            <div style="position: absolute; top: ${Math.max(10, (dc/D)*100)}%; left: 10%; width: 80%; display: flex; justify-content: space-around;">
              ${Array(num_bars_c).fill(0).map(() => `<div style="width: 12px; height: 12px; border-radius: 50%; background: var(--text-secondary);"></div>`).join('')}
            </div>` : ''}
            
            <!-- Tension Bars -->
            <div style="position: absolute; bottom: ${Math.max(10, (cover_t/D)*100)}%; left: 10%; width: 80%; display: flex; justify-content: space-around;">
              ${Array(num_bars_t).fill(0).map(() => `<div style="width: 14px; height: 14px; border-radius: 50%; background: var(--color-accent);"></div>`).join('')}
            </div>
          </div>
          
          <div style="margin-top: var(--spacing-md); display: flex; justify-content: space-around; font-weight: 500;">
            ${Asc > 0 ? `<div style="color: var(--text-secondary);">Top: ${num_bars_c} - ${barDiaC}φ</div>` : ''}
            <div style="color: var(--color-accent);">Bottom: ${num_bars_t} - ${barDiaT}φ</div>
          </div>
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
    { label: 'Section', value: `${b} × ${D}` },
    { label: 'Bottom', value: `${num_bars_t} - ${barDiaT}φ` },
    (Asc > 0 ? { label: 'Top', value: `${num_bars_c} - ${barDiaC}φ` } : null),
    { label: 'Status', value: status === 'pass' ? 'OK' : 'FAIL', status: status }
  ].filter(Boolean));
  
  resultsDiv.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export function initDoublyBeam(container) {
  container.innerHTML = `
    <div class="calculator-page" id="doubly-beam-calc">
      <div class="print-header">
        <div class="print-header__brand">Stellar Civil — Doubly Reinforced Beam</div>
        <div class="print-header__info"></div>
      </div>

      <div class="calculator-page__header">
        <h2>Doubly Reinforced Beam Design</h2>
        <p>Design a rectangular beam cross-section with both compression and tension reinforcement, required when the factored moment exceeds the limiting moment capacity of the section.</p>
        <span class="calculator-page__code-ref">
          ${ICONS.info} IS 456:2000 — Annex G, Cl. 1.2
        </span>
      </div>

      ${renderAssumptions([
        'Section is subjected to uniaxial bending only',
        'Used when section dimensions are restricted and Mu > Mu,lim',
        'Concrete stress block is parabolic-rectangular per IS 456 Cl. 38.1',
        'Stress in compression steel (fsc) is interpolated from SP-16 Table F',
        'Contribution of concrete displaced by compression steel is accounted for'
      ])}

      ${renderInputPanel('Material Properties', INPUT_FIELDS_MATERIAL, ICONS.info)}
      ${renderInputPanel('Section Geometry', INPUT_FIELDS_GEOMETRY, ICONS.building)}
      ${renderInputPanel('Design Limit States', INPUT_FIELDS_DESIGN, ICONS.calculator)}

      ${renderActionBar()}

      <div id="doubly-beam-results"></div>

      <div class="print-footer">
        Generated by Stellar Civil | For reference only. Verify with qualified engineer.
      </div>
    </div>
  `;

  container.querySelector('#btn-calculate').addEventListener('click', calculateDoublyBeam);
  
  container.querySelector('#btn-clear').addEventListener('click', () => {
    localStorage.removeItem('stellar_civil_inputs_' + MODULE_ID);
    initDoublyBeam(container);
    updateStickyBar([]);
  });

  const saved = loadInputs(MODULE_ID);
  if (saved) {
    setInputValues(container, saved);
  }
}
