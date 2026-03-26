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

const MODULE_ID = 't-beam';

/**
 * Solves Quadratic Equation
 */
function solveQuadratic(a, b, c) {
  const discriminant = Math.pow(b, 2) - 4 * a * c;
  if (discriminant < 0) return NaN;
  return (b - Math.sqrt(discriminant)) / (2 * a);
}

const INPUT_FIELDS_MATERIAL = [
  { id: 'fck', label: 'Concrete Grade (fck)', type: 'select', default: 25,
    options: FCK_GRADES.map(fck => ({ value: fck, label: `M${fck}` })),
    tooltip: 'Characteristic compressive strength' },
  { id: 'fy', label: 'Steel Grade (fy)', type: 'select', default: 415,
    options: FY_GRADES.map(fy => ({ value: fy, label: `Fe${fy}` })),
    tooltip: 'Yield strength of reinforcement' }
];

const INPUT_FIELDS_GEOMETRY = [
  { id: 'bf', label: 'Effective Flange (bf)', unit: 'mm', default: 1200, min: 200, max: 5000, step: 10, tooltip: 'Calculated effective width of the flange' },
  { id: 'df', label: 'Flange Thickness (Df)', unit: 'mm', default: 120, min: 50, max: 500, step: 5, tooltip: 'Thickness of the slab/flange portion' },
  { id: 'bw', label: 'Web Width (bw)', unit: 'mm', default: 230, min: 150, max: 1000, step: 10, tooltip: 'Width of the beam rib/web' },
  { id: 'overall_d', label: 'Overall Depth (D)', unit: 'mm', default: 450, min: 200, max: 2000, step: 10, tooltip: 'Total overall depth of the beam section' },
  { id: 'cover', label: "Effective Cover (d')", unit: 'mm', default: 50, min: 20, max: 100, step: 5, tooltip: 'Effective cover to center of reinforcement' }
];

const INPUT_FIELDS_DESIGN = [
  { id: 'mu', label: 'Factored Moment (Mu)', unit: 'kN·m', default: 300, min: 1, max: 10000, step: 1, tooltip: 'Ultimate design bending moment acting on the section' },
  { id: 'bar_dia', label: 'Tension Bar Dia', unit: 'mm', type: 'select', default: 20,
    options: [16, 20, 25, 32].map(d => ({ value: d, label: `${d} mm` })), tooltip: 'Preferred diameter of tension bars' }
];

function calculateTBeam() {
  const container = document.querySelector('.calculator-page');
  let resultsDiv = container.querySelector('#t-beam-results');
  if (!resultsDiv) {
    resultsDiv = document.createElement('div');
    resultsDiv.id = 't-beam-results';
    container.appendChild(resultsDiv);
  }
  
  // 1. Validate inputs
  const rawInputs = getInputValues(container);
  
  const bf_val = validate(rawInputs.bf, 200, 5000, 'Flange Width');
  const df_val = validate(rawInputs.df, 50, 500, 'Flange Thickness');
  const bw_val = validate(rawInputs.bw, 150, 2000, 'Web Width');
  const d_val = validate(rawInputs.overall_d, 200, 2000, 'Overall Depth');
  const cover_val = validate(rawInputs.cover, 20, 100, 'Effective Cover');
  const mu_val = validate(rawInputs.mu, 1, 10000, 'Factored Moment');
  
  if (!bf_val.valid || !df_val.valid || !bw_val.valid || !d_val.valid || !cover_val.valid || !mu_val.valid) {
    showToast('Please correct invalid fields before calculating.', 'error');
    return;
  }
  
  saveInputs(MODULE_ID, rawInputs);
  
  // 2. Extract Values
  const bf = parseFloat(rawInputs.bf);
  const Df = parseFloat(rawInputs.df);
  const bw = parseFloat(rawInputs.bw);
  const D = parseFloat(rawInputs.overall_d);
  const cover = parseFloat(rawInputs.cover);
  const Mu = parseFloat(rawInputs.mu);
  const fck = parseFloat(rawInputs.fck);
  const fy = parseFloat(rawInputs.fy);
  const barDia = parseFloat(rawInputs.bar_dia);
  
  const d = D - cover; 
  
  if (bf <= bw) {
    showToast('Flange width (bf) must be greater than web width (bw).', 'error');
    return;
  }
  
  if (Df >= d) {
    showToast('Flange thickness (Df) must be less than effective depth (d).', 'error');
    return;
  }
  
  // 3. Calculation Engine
  let steps = [];
  
  steps.push({
    step: 1,
    title: 'Effective Depth',
    formula: "d = D - d'",
    result: "d = " + D + " - " + cover + " = " + d.toFixed(1) + " <span class=\"unit\">mm</span>"
  });
  
  // Neutral axis ratios (IS 456 Annex G.2)
  const xu_max_ratio = XU_MAX_RATIO[fy] || 0.479;
  const xu_max = xu_max_ratio * d;
  
  steps.push({
    step: 2,
    title: 'Limiting Neutral Axis',
    formula: "xu,max = " + xu_max_ratio + " × d",
    result: "xu,max = " + xu_max.toFixed(1) + " <span class=\"unit\">mm</span>"
  });
  
  // Case 1: Assume N.A. falls in flange (xu <= Df)
  // If xu <= Df, T-beam acts as a rectangular beam of width bf
  const Mu_flange_limit = 0.36 * fck * bf * Df * (d - 0.42 * Df) / 1E6; // kN.m
  
  steps.push({
    step: 3,
    title: 'Moment Capacity if NA is at Flange Bottom',
    formula: 'Mu,f = 0.36×fck×bf×Df×(d - 0.42×Df)',
    result: "Mu,Df = " + Mu_flange_limit.toFixed(2) + " <span class=\"unit\">kN·m</span>"
  });
  
  let Ast = 0;
  let case_type = "";
  let section_type_ok = true;
  let xu = 0;
  let status = 'pass';
  let statusMessage = 'Design OK';
  
  if (Mu <= Mu_flange_limit) {
    case_type = "Case 1: NA in Flange";
    steps.push({
      step: 4,
      title: 'Determine Section Behavior',
      formula: 'Mu vs Mu,Df',
      result: "Mu (" + Mu + ") ≤ Mu,Df (" + Mu_flange_limit.toFixed(2) + ") → Neutral Axis in Flange. Design as rectangular beam of width bf."
    });
    
    // Solved as singly reinforced rectangular beam with b = bf
    const K1 = 0.87 * fy * d;
    const K2 = fy / (bf * d * fck);
    const a = K1 * K2;
    const b_coeff = K1;
    const c = Mu * 1E6;
    Ast = solveQuadratic(a, b_coeff, c);
    
    // Calculate actual xu
    xu = (0.87 * fy * Ast) / (0.36 * fck * bf);
    
    steps.push({
      step: 5,
      title: 'Required Area of Tension Steel',
      formula: 'Quadratic: 0.87×fy×Ast×d×[1 - Ast×fy/(bf×d×fck)] = Mu',
      result: "Ast = " + Ast.toFixed(1) + " <span class=\"unit\">mm²</span> (xu = " + xu.toFixed(1) + " mm)"
    });
    
  } else {
    // Case 2: N.A. falls in web (xu > Df)
    case_type = "Case 2: NA in Web";
    steps.push({
      step: 4,
      title: 'Determine Section Behavior',
      formula: 'Mu vs Mu,Df',
      result: "Mu (" + Mu + ") > Mu,Df (" + Mu_flange_limit.toFixed(2) + ") → Neutral Axis in Web. Flanged beam analysis required."
    });
    
    // 1st sub-case: Df/d <= 0.2 (Df/xu <= 0.43 approx) (Annex G 2.2)
    // 2nd sub-case: Df/d > 0.2
    
    const Df_by_d = Df / d;
    let yf = Df;
    let subcase = "";
    
    if (Df_by_d <= 0.2) {
      subcase = "Df/d ≤ 0.2";
      yf = Df;
      steps.push({
        step: 5,
        title: 'Check Flange Thickness Ratio',
        formula: 'Df / d',
        result: "Df/d = " + Df_by_d.toFixed(3) + " ≤ 0.2 → Uniform compressive stress in flange (yf = Df = " + Df + " mm)"
      });
    } else {
      subcase = "Df/d > 0.2";
      yf = 0.15 * xu_max + 0.65 * Df; // Assuming xu = xu_max for yf calculation initially
      yf = Math.min(yf, Df);
      steps.push({
        step: 5,
        title: 'Check Flange Thickness Ratio',
        formula: 'Df / d',
        result: "Df/d = " + Df_by_d.toFixed(3) + " > 0.2 → Non-uniform stress. Using equivalent flange thickness yf."
      });
      // We will refine yf inside an iteration or just conservatively assume limiting NA
    }
    
    // Let's calculate Mu,lim for the T-Beam
    // Mu,lim = Mu,lim,web + Mu,flange
    const Mu_lim_web = 0.36 * xu_max_ratio * (1 - 0.416 * xu_max_ratio) * fck * bw * d * d;
    const yf_lim = (Df_by_d <= 0.2) ? Df : (0.15 * xu_max + 0.65 * Df);
    const Mu_flange = 0.446 * fck * (bf - bw) * yf_lim * (d - yf_lim / 2);
    
    const Mu_lim_total = (Mu_lim_web + Mu_flange) / 1E6; // kN.m
    
    steps.push({
      step: 6,
      title: 'Limiting Moment Capacity',
      formula: 'Mu,lim = Mu,lim,web + 0.45×fck×(bf-bw)×yf×(d - yf/2)',
      result: "Mu,lim = " + Mu_lim_total.toFixed(2) + " <span class=\"unit\">kN·m</span>"
    });
    
    if (Mu > Mu_lim_total) {
      section_type_ok = false;
      status = 'fail';
      statusMessage = 'Requires Doubly Reinforced T-Beam (Not Supported)';
      steps.push({
        step: 7,
        title: 'Section Check',
        formula: 'Mu vs Mu,lim',
        result: "Mu (" + Mu + ") > Mu,lim (" + Mu_lim_total.toFixed(2) + ") → <b>Doubly Reinforced T-Beam Required</b> (Beyond scope of simple calculator)."
      });
    } else {
      // Find exact Ast
      // We need to iterate or solve quadratic
      // Mu = 0.36*fck*bw*xu*(d - 0.42*xu) + 0.446*fck*(bf-bw)*yf*(d - yf/2)
      // If Df_by_d > 0.2, yf depends on xu.
      // Iterative approach to find xu
      let xu_calc = Df; // start guess
      for (let i = 0; i < 20; i++) {
        let yf_iter = Df;
        if (Df_by_d > 0.2 && Df / xu_calc > 0.43) {
           yf_iter = 0.15 * xu_calc + 0.65 * Df;
        }
        yf_iter = Math.min(yf_iter, Df);
        
        // Solve for xu_web that satisfies the moment equation
        // Mu_web = Mu - Mu_flange(yf)
        const Mu_flange_iter = 0.446 * fck * (bf - bw) * yf_iter * (d - yf_iter / 2);
        const Mu_web_iter = Mu * 1E6 - Mu_flange_iter;
        
        // 0.36*fck*bw*xu*(d - 0.42*xu) - Mu_web_iter = 0
        // -0.1512*fck*bw * xu^2 + 0.36*fck*bw*d * xu - Mu_web = 0
        const a_w = 0.36 * fck * bw * 0.42; // Actually 0.1512*fck*bw
        const b_w = 0.36 * fck * bw * d;
        const c_w = Mu_web_iter;
        
        let new_xu = solveQuadratic(a_w, b_w, c_w);
        
        if (Math.abs(new_xu - xu_calc) < 0.1) {
          xu_calc = new_xu;
          break;
        }
        xu_calc = new_xu;
      }
      xu = xu_calc;
      
      const yf_final = (Df_by_d <= 0.2 || Df / xu <= 0.43) ? Df : (0.15 * xu + 0.65 * Df);
      const C_web = 0.36 * fck * bw * xu;
      const C_flange = 0.446 * fck * (bf - bw) * yf_final;
      
      Ast = (C_web + C_flange) / (0.87 * fy);
      
      steps.push({
        step: 7,
        title: 'Calculate Neutral Axis & Ast',
        formula: 'C = T → C_web + C_flange = 0.87×fy×Ast',
        result: "xu = " + xu.toFixed(1) + " mm <br>Ast = " + Ast.toFixed(1) + " <span class=\"unit\">mm²</span>"
      });
    }
  }
  
  // Bar Provision
  let num_bars = 0;
  let Ast_prov = 0;
  const bar = getRebarByDia(barDia);
  
  if (section_type_ok) {
    // Min steel based on web width
    const Ast_min = (0.85 * bw * d) / fy;
    Ast = Math.max(Ast, Ast_min);
    
    num_bars = Math.ceil(Ast / bar.area);
    Ast_prov = num_bars * bar.area;
    
    steps.push({
      step: 8,
      title: 'Provide Reinforcement',
      formula: 'N = ceil(Ast / Area_bar)',
      result: "Provide " + num_bars + " - " + barDia + "φ (" + Ast_prov.toFixed(1) + " mm²)"
    });
    
    // Max steel
    const max_steel = 0.04 * bw * D; // Sometimes based on bw, but conservative
    if (Ast_prov > max_steel) {
      status = 'fail';
      statusMessage = 'Max Steel Exceeded';
    }
  }
  
  // 4. Render
  const complianceChecks = [];
  
  if (section_type_ok) {
    complianceChecks.push({
      label: 'Minimum Tension Steel (Web)',
      status: Ast_prov >= (0.85 * bw * d / fy) ? 'pass' : 'fail',
      text: "Ast (" + Ast_prov.toFixed(1) + ") ≥ " + (0.85 * bw * d / fy).toFixed(1),
      ref: 'Cl. 26.5.1.1(a)'
    }, {
      label: 'Neutral Axis Limit',
      status: xu <= xu_max ? 'pass' : 'fail',
      text: "xu (" + xu.toFixed(1) + ") ≤ xu,max (" + xu_max.toFixed(1) + ")",
      ref: 'Annex G 1.1'
    });
  }
  
  const summaryCards = [];
  
  if (section_type_ok) {
    summaryCards.push(
      { label: 'Analysis Case', value: case_type, highlight: true },
      { label: 'Neutral Axis (xu)', value: xu.toFixed(1), unit: 'mm' },
      { label: 'Ast Required', value: Ast.toFixed(1), unit: 'mm²' },
      { label: 'Tension Bars', value: num_bars + " - " + barDia + "φ", highlight: true, status: 'pass' }
    );
  } else {
    summaryCards.push(
      { label: 'Section Capacity', value: 'Exceeded', status: 'fail', highlight: true },
      { label: 'Resolution', value: 'Increase D or b, or redesign', highlight: true }
    );
  }
  
  const content = `
    <div class="calculator-layout">
      <div class="results-main">
        ${renderResultSummary(summaryCards)}
        
        ${section_type_ok ? `
        <div class="graphics-box" style="margin-bottom: var(--spacing-lg); padding: var(--spacing-lg); background: var(--bg-card); border-radius: var(--radius-lg); border: 1px solid var(--border); text-align: center;">
          <h3 style="margin-bottom: var(--spacing-md); color: var(--text-muted); font-size: 0.875rem; text-transform: uppercase;">T-Beam Cross-Section</h3>
          <!-- T-Beam SVG -->
          <svg width="200" height="200" viewBox="0 0 200 200" style="margin: 0 auto; display: block;">
            <!-- Define Flange relative width: let's cap it visually -->
            <!-- We will use a fixed visual scale for aesthetics -->
            <path d="M 10,20 L 190,20 L 190,60 L 130,60 L 130,180 L 70,180 L 70,60 L 10,60 Z" fill="rgba(255,255,255,0.05)" stroke="var(--text-primary)" stroke-width="3"/>
            
            <!-- Dimensions -->
            <text x="100" y="12" fill="var(--text-muted)" font-size="10" text-anchor="middle">${bf} mm</text>
            <text x="195" y="45" fill="var(--text-muted)" font-size="10" text-anchor="start">Df = ${Df}</text>
            <text x="100" y="195" fill="var(--text-muted)" font-size="10" text-anchor="middle">bw = ${bw}</text>
            <text x="25" y="120" fill="var(--text-muted)" font-size="10" text-anchor="middle">D = ${D}</text>
            
            <!-- Bars -->
            ${Array(num_bars).fill(0).map((_, i) => `<circle cx="${80 + (i * 40 / Math.max(1, num_bars - 1))}" cy="165" r="4" fill="var(--color-accent)"/>`).join('')}
          </svg>
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
  
  updateStickyBar([
    { label: 'Flange', value: `${bf} × ${Df} mm` },
    { label: 'Web', value: `${bw} × ${D} mm` },
    (section_type_ok ? { label: 'Bars', value: `${num_bars} - ${barDia}φ` } : null),
    { label: 'Status', value: status === 'pass' ? 'OK' : 'FAIL', status: status }
  ].filter(Boolean));
  
  resultsDiv.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export function initTBeam(container) {
  container.innerHTML = `
    <div class="calculator-page" id="t-beam-calc">
      <div class="print-header">
        <div class="print-header__brand">Stellar Civil — T-Beam Design</div>
        <div class="print-header__info"></div>
      </div>

      <div class="calculator-page__header">
        <h2>T-Beam / L-Beam Design</h2>
        <p>Design a flanged beam comparing the position of the neutral axis with the flange thickness.</p>
        <span class="calculator-page__code-ref">
          ${ICONS.info} IS 456:2000 — Annex G 2.2
        </span>
      </div>

      ${renderAssumptions([
        'T-Beam section with uniform flange thickness Df',
        'Effective flange width (bf) calculated externally per Cl 23.1.2',
        'Section designed as singly reinforced (Doubly reinforced flanged beams require manual derivation)',
        'Concrete stress block properties identical to rectangular section analysis',
        'Equivalent flange thickness (yf) used when NA falls in web and Df/d > 0.2'
      ])}

      ${renderInputPanel('Material Properties', INPUT_FIELDS_MATERIAL, ICONS.info)}
      ${renderInputPanel('Geometry & Flange', INPUT_FIELDS_GEOMETRY, ICONS.building)}
      ${renderInputPanel('Design Limit States', INPUT_FIELDS_DESIGN, ICONS.calculator)}

      ${renderActionBar()}

      <div id="t-beam-results"></div>

      <div class="print-footer">
        Generated by Stellar Civil | For reference only. Verify with qualified engineer.
      </div>
    </div>
  `;

  container.querySelector('#btn-calculate').addEventListener('click', calculateTBeam);
  
  container.querySelector('#btn-clear').addEventListener('click', () => {
    localStorage.removeItem('stellar_civil_inputs_' + MODULE_ID);
    initTBeam(container);
    updateStickyBar([]);
  });

  const saved = loadInputs(MODULE_ID);
  if (saved) {
    setInputValues(container, saved);
  }
}
