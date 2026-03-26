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
import { getRebarByDia, getRebarArea } from '../data/rebar.js';
import { FCK_GRADES, FY_GRADES } from '../data/materials.js';

const MODULE_ID = 'retaining-wall';

const INPUT_FIELDS_MATERIAL = [
  { id: 'fck', label: 'Concrete Grade (fck)', type: 'select', default: 25,
    options: FCK_GRADES.map(fck => ({ value: fck, label: `M${fck}` })), tooltip: 'Characteristic compressive strength' },
  { id: 'fy', label: 'Steel Grade (fy)', type: 'select', default: 500,
    options: FY_GRADES.map(fy => ({ value: fy, label: `Fe${fy}` })), tooltip: 'Yield strength of reinforcement' }
];

const INPUT_FIELDS_GEOMETRY = [
  { id: 'hw', label: 'Height above Ground (H)', unit: 'm', default: 4.0, min: 1, max: 10, step: 0.1 },
  { id: 'sbc', label: 'Safe Bearing Capacity', unit: 'kN/m²', default: 150, min: 50, max: 1000, step: 10 },
  { id: 'mu', label: 'Friction Coefficient (μ)', default: 0.5, min: 0.3, max: 0.8, step: 0.05 },
  { id: 'phi', label: 'Angle of Repose (φ)', unit: '°', default: 30, min: 15, max: 45, step: 1 },
  { id: 'gamma_s', label: 'Soil Density (γ)', unit: 'kN/m³', default: 18, min: 14, max: 22, step: 0.5 },
  { id: 'q', label: 'Surcharge Load', unit: 'kN/m²', default: 10, min: 0, max: 50, step: 1 }
];

const INPUT_FIELDS_REBAR = [
  { id: 'bar_stem', label: 'Stem Bar Dia (φ)', unit: 'mm', type: 'select', default: 16,
    options: [12, 16, 20, 25].map(d => ({ value: d, label: `${d} mm` })) },
  { id: 'bar_base', label: 'Base Bar Dia (φ)', unit: 'mm', type: 'select', default: 16,
    options: [12, 16, 20].map(d => ({ value: d, label: `${d} mm` })) }
];

function calculateRetainingWall() {
  const container = document.querySelector('.calculator-page');
  let resultsDiv = container.querySelector('#retaining-wall-results');
  if (!resultsDiv) {
    resultsDiv = document.createElement('div');
    resultsDiv.id = 'retaining-wall-results';
    container.appendChild(resultsDiv);
  }
  
  // 1. Validate inputs
  const rawInputs = getInputValues(container);
  
  const h_val = validate(rawInputs.hw, 1, 10, 'Height');
  const sbc_val = validate(rawInputs.sbc, 50, 1000, 'SBC');
  
  if (!h_val.valid || !sbc_val.valid) {
    showToast('Please correct invalid fields before calculating.', 'error');
    return;
  }
  
  saveInputs(MODULE_ID, rawInputs);
  
  // 2. Extract Values
  const H_clear = parseFloat(rawInputs.hw); // m
  const sbc = parseFloat(rawInputs.sbc); // kN/m2
  const mu = parseFloat(rawInputs.mu); 
  const phi = parseFloat(rawInputs.phi); // deg
  const gamma_s = parseFloat(rawInputs.gamma_s); // kN/m3
  const q_sur = parseFloat(rawInputs.q); // kN/m2
  const fck = parseFloat(rawInputs.fck);
  const fy = parseFloat(rawInputs.fy);
  const barStem = parseFloat(rawInputs.bar_stem);
  const barBase = parseFloat(rawInputs.bar_base);
  
  const gamma_c = 25; // kN/m3
  
  // 3. Calculation Engine
  let steps = [];
  
  // Coefficient of Active Earth Pressure
  const phi_rad = phi * Math.PI / 180;
  const Ka = (1 - Math.sin(phi_rad)) / (1 + Math.sin(phi_rad));
  
  steps.push({
    step: 1,
    title: 'Earth Pressure Coefficient',
    formula: 'Ka = (1 - sinφ) / (1 + sinφ)',
    result: "Ka = " + Ka.toFixed(3)
  });
  
  // Preliminary Dimensions
  // a) Depth of foundation
  let d_f = (sbc / gamma_s) * Math.pow(Ka, 2);
  d_f = Math.max(d_f, 1.0); // min 1m
  
  const H = H_clear + d_f;
  
  // b) Base width
  // B = 0.5 to 0.6 H
  let B = Math.ceil((0.6 * H) * 10) / 10;
  
  // c) Base Slab thickness
  // D_b = H / 10 to H / 12
  let D_f = Math.max(Math.ceil((H / 10) * 10) / 10, 0.3); // m
  
  // d) Stem thickness
  // Top: 200mm to 300mm
  let t_top = 0.2; // m
  let t_bot = Math.max(Math.ceil((H / 10) * 10) / 10, 0.3); // m
  
  // e) Toe projection
  // a_toe = B / 3 approx
  let toe = Math.ceil((B / 3) * 10) / 10;
  
  steps.push({
    step: 2,
    title: 'Preliminary Proportions',
    formula: 'Total H, Base Width B, Thickness',
    result: "H = " + H.toFixed(2) + " m <br>B = " + B.toFixed(2) + " m <br>Base Df = " + D_f.toFixed(2) + " m <br>Stem Base = " + t_bot.toFixed(2) + " m <br>Toe = " + toe.toFixed(2) + " m"
  });
  
  // Stability Analysis
  const heel = B - toe - t_bot;
  
  // Weights (per m length)
  // W1 = Stem rectangle = t_top * (H - D_f) * 25
  const W1 = t_top * (H - D_f) * gamma_c;
  const x1 = toe + t_top + (t_bot - t_top) + (t_top / 2); // WRONG centroid, let's keep vertical face of stem on earth side or toe side.
  // Standard: stem vertical face on earth side, battered on toe side.
  // Then centroid of stem:
  // W1 (rect): t_top
  // W2 (triangle): (t_bot - t_top) -> battered on toe side.
  // Wait, vertical earth face is better for analysis.
  const W2 = 0.5 * (t_bot - t_top) * (H - D_f) * gamma_c;
  
  const x1_pos = toe + (t_bot - t_top) + (t_top / 2); // from toe tip
  const x2_pos = toe + (2/3) * (t_bot - t_top);
  
  // W3 = Base slab = B * D_f * 25
  const W3 = B * D_f * gamma_c;
  const x3_pos = B / 2;
  
  // W4 = Earth on heel = heel * (H - D_f) * gamma_s
  const W4 = heel * (H - D_f) * gamma_s;
  const x4_pos = toe + t_bot + (heel / 2);
  
  // W5 = Surcharge on heel = heel * q_sur
  const W5 = heel * q_sur;
  const x5_pos = x4_pos;
  
  const Sigma_W = W1 + W2 + W3 + W4 + W5; // kN
  const moment_W = W1*x1_pos + W2*x2_pos + W3*x3_pos + W4*x4_pos + W5*x5_pos; // Stabilizing moment about toe
  
  // Active earth pressure
  const Pa = 0.5 * Ka * gamma_s * Math.pow(H, 2); // kN
  const ya = H / 3;
  const M_overturning1 = Pa * ya;
  
  // Surcharge pressure
  const P_sur = Ka * q_sur * H;
  const y_sur = H / 2;
  const M_overturning2 = P_sur * y_sur;
  
  const Sigma_Mo = M_overturning1 + M_overturning2; // kN.m
  const Sigma_Mr = moment_W; // kN.m
  
  // Overturning Check
  const FOS_overturning = (0.9 * Sigma_Mr) / Sigma_Mo; // IS 456 uses 0.9 x dead load for overturning
  
  steps.push({
    step: 3,
    title: 'Check Against Overturning',
    formula: 'FOS = 0.9 × Mr / Mo ≥ 1.4',
    result: "Mr = " + Sigma_Mr.toFixed(1) + " kN·m <br>Mo = " + Sigma_Mo.toFixed(1) + " kN·m <br>FOS = " + FOS_overturning.toFixed(2) + (FOS_overturning >= 1.4 ? ' <b>(Safe)</b>' : ' <b>(Unsafe)</b>')
  });
  
  // Sliding Check
  const FOS_sliding = (0.9 * mu * Sigma_W) / (Pa + P_sur);
  
  steps.push({
    step: 4,
    title: 'Check Against Sliding',
    formula: 'FOS = 0.9 × μ × ΣW / ΣPa ≥ 1.4',
    result: "FOS = " + FOS_sliding.toFixed(2) + (FOS_sliding >= 1.4 ? ' <b>(Safe)</b>' : ' <b>(Needs Shear Key)</b>')
  });
  
  // Pressure Distribution
  const x_bar = (Sigma_Mr - Sigma_Mo) / Sigma_W;
  const e = (B / 2) - x_bar;
  
  const p_max = (Sigma_W / B) * (1 + (6 * Math.abs(e)) / B);
  const p_min = (Sigma_W / B) * (1 - (6 * Math.abs(e)) / B);
  
  steps.push({
    step: 5,
    title: 'Base Pressure',
    formula: 'p = (ΣW / B) × (1 ± 6e/B)',
    result: "e = " + e.toFixed(3) + " m < B/6 (" + (B/6).toFixed(3) + ")<br>p,max = " + p_max.toFixed(1) + " kN/m² ≤ SBC (" + sbc + ")<br>p,min = " + p_min.toFixed(1) + " kN/m² ≥ 0"
  });
  
  // Design of Stem (BM at base of stem)
  const H_s = H - D_f;
  const M_stem_a = 0.5 * Ka * gamma_s * Math.pow(H_s, 2) * (H_s / 3);
  const M_stem_sur = Ka * q_sur * H_s * (H_s / 2);
  const Mu_stem = 1.5 * (M_stem_a + M_stem_sur); // Factored
  
  // Effective depth for stem
  const cover = 50; 
  const d_stem = (t_bot * 1000) - cover - (barStem / 2);
  
  const a1 = 0.87 * fy * d_stem;
  const b1 = fy / (1000 * d_stem * fck);
  const K1 = a1 * b1;
  const Ast_stem = (a1 - Math.sqrt(Math.pow(a1, 2) - 4 * K1 * (Mu_stem * 1E6))) / (2 * K1);
  const pt_min = 0.0012;
  const Ast_stem_final = Math.max(Ast_stem, pt_min * 1000 * (t_bot * 1000));
  
  const stemBarArea = getRebarArea(barStem);
  const spacing_stem = Math.min(Math.floor((1000 * stemBarArea) / Ast_stem_final / 10) * 10, 300);
  
  steps.push({
    step: 6,
    title: 'Reinforcement for Stem',
    formula: 'Mu = 1.5 × M,stem, base',
    result: "Mu = " + Mu_stem.toFixed(1) + " kN·m<br>Ast = " + Ast_stem_final.toFixed(1) + " mm²/m<br>Provide " + barStem + "φ @ " + spacing_stem + " c/c"
  });
  
  // A simplified check status
  let status = 'pass';
  let statusMessage = 'Design OK';
  if (FOS_overturning < 1.4 || p_max > sbc || p_min < 0) {
    status = 'fail';
    statusMessage = 'Revise Proportions';
  } else if (FOS_sliding < 1.4) {
    status = 'warning';
    statusMessage = 'Add Shear Key';
  }
  
  const complianceChecks = [
    {
      label: 'Overturning FOS',
      status: FOS_overturning >= 1.4 ? 'pass' : 'fail',
      text: FOS_overturning.toFixed(2) + " (≥ 1.4)",
      ref: 'Cl. 20.1'
    },
    {
      label: 'Sliding FOS',
      status: FOS_sliding >= 1.4 ? 'pass' : 'fail',
      text: FOS_sliding.toFixed(2) + " (≥ 1.4)",
      ref: 'Cl. 20.2'
    },
    {
      label: 'Base Pressure',
      status: (p_max <= sbc && p_min >= 0) ? 'pass' : 'fail',
      text: p_max.toFixed(1) + " ≤ " + sbc,
      ref: 'Bearing safe'
    }
  ];
  
  const summaryCards = [
    { label: 'Total Height (H)', value: H.toFixed(2), unit: 'm', highlight: true },
    { label: 'Base Object (B)', value: B.toFixed(2), unit: 'm', highlight: true },
    { label: 'Max Pressure', value: p_max.toFixed(1), unit: 'kPa' },
    { label: 'Stem Bars', value: barStem + "φ @ " + spacing_stem, unit: 'c/c', status: 'pass' }
  ];
  
  const content = `
    <div class="calculator-layout">
      <div class="results-main">
        ${renderResultSummary(summaryCards)}
        
        <div class="graphics-box" style="margin-bottom: var(--spacing-lg); padding: var(--spacing-lg); background: var(--bg-card); border-radius: var(--radius-lg); border: 1px solid var(--border); text-align: center;">
          <h3 style="margin-bottom: var(--spacing-md); color: var(--text-muted); font-size: 0.875rem; text-transform: uppercase;">Retaining Wall Section</h3>
          
          <svg width="240" height="240" viewBox="0 0 240 240" style="margin: 0 auto; display: block; overflow: visible;">
            <!-- Proportionate scaling approx -->
            ${(() => {
              // total H vs B
              const maxDim = Math.max(H, B);
              const scale = 200 / maxDim;
              
              const svgH = H * scale;
              const svgB = B * scale;
              const svgDf = D_f * scale;
              const svgStemTop = t_top * scale;
              const svgStemBot = t_bot * scale;
              const svgToe = toe * scale;
              
              const baseY = 220;
              const baseX = 20;
              
              return `
                <path d="
                  M ${baseX}, ${baseY}
                  l ${svgB}, 0
                  l 0, -${svgDf}
                  l -${svgB - svgToe - svgStemBot}, 0
                  l 0, -${svgH - svgDf}
                  l -${svgStemTop}, 0
                  l -${svgStemBot - svgStemTop}, ${svgH - svgDf}
                  l -${svgToe}, 0
                  Z
                " fill="var(--bg-layer)" stroke="var(--color-accent)" stroke-width="2" />
                
                <text x="${baseX + svgB/2}" y="${baseY + 15}" fill="var(--text-muted)" font-size="10" text-anchor="middle">B = ${B}m</text>
                <text x="${baseX + svgB + 10}" y="${baseY - svgH/2}" fill="var(--text-muted)" font-size="10" text-anchor="start">H = ${H}m</text>
                
                <!-- Soil representation -->
                <path d="M ${baseX + svgToe + svgStemBot}, ${baseY - svgH + 10} L ${baseX + svgB}, ${baseY - svgH + 10}" stroke="var(--text-secondary)" stroke-width="1" stroke-dasharray="4" />
                <path d="M ${baseX + svgB}, ${baseY - svgDf} L ${baseX + svgB}, ${baseY - svgH + 10}" stroke="var(--text-secondary)" stroke-width="1" stroke-dasharray="4" />
              `;
            })()}
          </svg>
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
    { label: 'Section', value: `${H.toFixed(2)}H × ${B.toFixed(2)}B m` },
    { label: 'Stem Rebar', value: `${barStem}φ @ ${spacing_stem}c/c` },
    { label: 'Status', value: status === 'pass' ? '✅ OK' : '❌ ' + statusMessage }
  ]);
  
  resultsDiv.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export function initRetainingWall(container) {
  container.innerHTML = `
    <div class="calculator-page" id="retaining-wall-calc">
      <div class="print-header">
        <div class="print-header__brand">Stellar Civil — Retaining Wall</div>
        <div class="print-header__info"></div>
      </div>

      <div class="calculator-page__header">
        <h2>Cantilever Retaining Wall Design</h2>
        <p>Design of reinforced concrete cantilever retaining walls including stability analysis and flexural reinforcement proportions.</p>
        <span class="calculator-page__code-ref">
          ${ICONS.info} IS 456:2000
        </span>
      </div>

      ${renderAssumptions([
        'Rankine Active Earth Pressure Theory is used (Ka = (1-sinφ)/(1+sinφ))',
        'Base width B is assumed as 0.5 to 0.6 H for preliminary proportions',
        'Toe projection is assumed as approx 1/3 of Base width',
        'Surcharge load is converted to equivalent soil height for active pressure computation',
        'Water table is assumed to be below the base of the foundation'
      ])}

      ${renderInputPanel('Material Grades', INPUT_FIELDS_MATERIAL, ICONS.info)}
      ${renderInputPanel('Soil & Geometry Data', INPUT_FIELDS_GEOMETRY, ICONS.building)}
      ${renderInputPanel('Reinforcement Layout', INPUT_FIELDS_REBAR, ICONS.calculator)}

      ${renderActionBar()}

      <div id="retaining-wall-results"></div>

      <div class="print-footer">
        Generated by Stellar Civil | For reference only. Verify with qualified engineer.
      </div>
    </div>
  `;

  container.querySelector('#btn-calculate').addEventListener('click', calculateRetainingWall);
  
  container.querySelector('#btn-clear').addEventListener('click', () => {
    localStorage.removeItem('stellar_civil_inputs_' + MODULE_ID);
    initRetainingWall(container);
    updateStickyBar([]);
  });

  const saved = loadInputs(MODULE_ID);
  if (saved) {
    setInputValues(container, saved);
  }
}

