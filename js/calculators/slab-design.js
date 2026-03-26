/* ═══════════════════════════════════════════════════════════════
   STELLAR CIVIL — Module 1.1: Rectangular Slab Design
   IS 456:2000, Annex D
   Two-way & One-way Slab Design Calculator
   ═══════════════════════════════════════════════════════════════ */

import { REBAR_DATA, findBarSpacing, getRebarByDia, areaPerMeter } from '../data/rebar.js';
import {
  getMomentCoeff, PANEL_TYPES, COVER_REQUIREMENTS,
  getMuLimFactor, getShearStrength, getBondStress,
  getModFactorTension, MIN_STEEL
} from '../data/concrete.js';
import { CONCRETE_GRADES, STEEL_GRADES, EXPOSURE_CONDITIONS, CONCRETE_PROPS } from '../data/materials.js';
import { validate, validateAll, setupRealtimeValidation, applyValidation } from '../utils/validation.js';
import { saveInputs, loadInputs } from '../utils/storage.js';
import { exportPDF, exportCSV } from '../utils/export.js';
import {
  renderInputPanel, renderSummaryCards, renderStepTable,
  renderDesignTable, renderComplianceChecks, renderAssumptions,
  renderActionBar, showToast, updateStickyBar, getInputValues, setInputValues,
  ICONS
} from '../utils/ui.js';

const MODULE_ID = 'slab-design';

/** Input field definitions */
const INPUT_FIELDS_GEOMETRY = [
  { id: 'slab-lx', label: 'Shorter Span (Lx)', unit: 'm', default: 4.0, min: 1, max: 15, step: 0.1,
    tooltip: 'Clear shorter span of the slab panel in meters. Must be ≥ 1m.' },
  { id: 'slab-ly', label: 'Longer Span (Ly)', unit: 'm', default: 5.0, min: 1, max: 20, step: 0.1,
    tooltip: 'Clear longer span of the slab panel in meters. Ly ≥ Lx always.' },
  { id: 'slab-fck', label: 'Concrete Grade (fck)', type: 'select', default: 25,
    options: CONCRETE_GRADES.map(g => ({ value: g.fck, label: g.grade })),
    tooltip: 'Characteristic compressive strength of concrete at 28 days (IS 456 Cl. 6.2)' },
  { id: 'slab-fy', label: 'Steel Grade (fy)', type: 'select', default: 415,
    options: STEEL_GRADES.filter(g => [415, 500, 550].includes(g.fy)).map(g => ({ value: g.fy, label: g.grade })),
    tooltip: 'Yield strength of reinforcement steel (IS 1786)' },
  { id: 'slab-exposure', label: 'Exposure Condition', type: 'select', default: 'Mild',
    options: EXPOSURE_CONDITIONS,
    tooltip: 'Exposure condition per IS 456 Table 3. Determines minimum cover.' },
  { id: 'slab-panel-type', label: 'Panel Type (IS 456 Table 26)', type: 'select', default: 1,
    options: PANEL_TYPES.map(p => ({ value: p.id, label: `Type ${p.id}: ${p.desc}` })),
    tooltip: '9 panel types based on edge support conditions per IS 456 Annex D, Table 26.' }
];

const INPUT_FIELDS_LOADS = [
  { id: 'slab-ll', label: 'Live Load', unit: 'kN/m²',default: 3.0, min: 0, max: 50, step: 0.5,
    tooltip: 'Imposed (live) load on the slab per IS 875 Part 2. Typical: 2.0 residential, 3.0 office, 5.0 store.' },
  { id: 'slab-ff', label: 'Floor Finish Load', unit: 'kN/m²', default: 1.0, min: 0, max: 5, step: 0.25,
    tooltip: 'Floor finish load (tiles, screed, etc.). Typically 1.0–1.5 kN/m².' },
  { id: 'slab-partition', label: 'Partition Load', unit: 'kN/m²', default: 1.0, min: 0, max: 5, step: 0.25,
    tooltip: 'Equivalent partition wall load. As per IS 875 Part 2, typically 1.0 kN/m² for movable partitions.' },
  { id: 'slab-bar-dia', label: 'Main Bar Diameter', unit: 'mm', type: 'select', default: 10,
    options: [8, 10, 12, 16].map(d => ({ value: d, label: `${d} mm (Ast = ${getRebarByDia(d)?.area.toFixed(1)} mm²)` })),
    tooltip: 'Preferred diameter of main reinforcement bars.' }
];

export function initRectangularSlab(container) {
  // Load saved inputs
  const saved = loadInputs(MODULE_ID);

  container.innerHTML = `
    <div class="calculator-page" id="slab-calc">
      <!-- Print header (hidden normally) -->
      <div class="print-header">
        <div class="print-header__brand">Stellar Civil — Rectangular Slab Design</div>
        <div class="print-header__info"></div>
      </div>

      <div class="calculator-page__header">
        <h2>1.1 — Rectangular Slab Design</h2>
        <p>Two-way and one-way slab design as per IS 456:2000, Annex D</p>
        <span class="calculator-page__code-ref">
          ${ICONS.info} IS 456:2000 — Cl. 24, Annex D, Table 26
        </span>
      </div>

      ${renderAssumptions([
        'Simply supported or continuous slab — as per selected panel type',
        'Rectangular slab with uniform loading',
        'Self-weight calculated automatically based on assumed overall depth D',
        'Clear cover determined from exposure condition per IS 456 Table 16',
        'Minimum reinforcement = 0.12% of bD for HYSD bars (Cl. 26.5.2.1)',
        'Maximum spacing ≤ 3d or 300mm (Cl. 26.3.3)',
        'Corner reinforcement not designed — to be provided at discontinuous edges per Cl. D-1.8',
        'Shear is typically not critical for slabs; simplified check included'
      ])}

      ${renderInputPanel('Geometry & Material', INPUT_FIELDS_GEOMETRY, ICONS.building)}
      ${renderInputPanel('Loads & Reinforcement', INPUT_FIELDS_LOADS, ICONS.calculator)}

      ${renderActionBar()}

      <div id="slab-results"></div>

      <!-- Print footer (hidden normally) -->
      <div class="print-footer">
        Generated by Stellar Civil | For reference only. Verify with qualified engineer.
      </div>
    </div>
  `;

  // Restore saved inputs
  if (saved) {
    setInputValues(container, saved);
  }

  // Real-time validation
  setupRealtimeValidation(container, (errorCount) => {
    const calcBtn = document.getElementById('btn-calculate');
    if (calcBtn) {
      if (errorCount > 0) {
        calcBtn.disabled = true;
        calcBtn.innerHTML = `Fix ${errorCount} error${errorCount > 1 ? 's' : ''}`;
      } else {
        calcBtn.disabled = false;
        calcBtn.innerHTML = `${ICONS.play} Calculate`;
      }
    }
  });

  // Calculate button
  document.getElementById('btn-calculate')?.addEventListener('click', () => {
    const errorCount = validateAll(container);
    if (errorCount > 0) {
      showToast(`Please fix ${errorCount} input error(s)`, 3000);
      return;
    }

    const btn = document.getElementById('btn-calculate');
    btn.innerHTML = '<span class="spinner"></span> Calculating...';
    btn.disabled = true;

    // Save inputs
    const inputs = getInputValues(container);
    saveInputs(MODULE_ID, inputs);

    // Simulate brief loading
    setTimeout(() => {
      try {
        const results = calculate(inputs);
        renderResults(results);
        btn.innerHTML = `${ICONS.refresh} Recalculate`;
        btn.disabled = false;

        // Enable export buttons
        document.getElementById('btn-export-pdf').disabled = false;
        document.getElementById('btn-export-csv').disabled = false;

        // Smooth scroll to results
        document.getElementById('slab-results')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } catch (err) {
        console.error('Calculation error:', err);
        document.getElementById('slab-results').innerHTML = `
          <div class="summary-cards">
            <div class="summary-card summary-card--fail">
              <div class="summary-card__label">Calculation Error</div>
              <div class="summary-card__value" style="font-size:var(--text-md)">Check inputs</div>
              <div class="summary-card__sub">${err.message}</div>
            </div>
          </div>`;
        btn.innerHTML = `${ICONS.play} Calculate`;
        btn.disabled = false;
      }
    }, 300);
  });

  // Clear button
  document.getElementById('btn-clear')?.addEventListener('click', () => {
    // Reset to defaults
    INPUT_FIELDS_GEOMETRY.concat(INPUT_FIELDS_LOADS).forEach(f => {
      const el = document.getElementById(f.id);
      if (el) el.value = f.default;
    });
    document.getElementById('slab-results').innerHTML = '';
    document.getElementById('btn-export-pdf').disabled = true;
    document.getElementById('btn-export-csv').disabled = true;
    updateStickyBar(null);

    const calcBtn = document.getElementById('btn-calculate');
    calcBtn.innerHTML = `${ICONS.play} Calculate`;
    calcBtn.disabled = false;

    // Remove validation states
    container.querySelectorAll('.form-input').forEach(el => {
      el.classList.remove('is-valid', 'is-invalid');
    });
    container.querySelectorAll('.form-group__error').forEach(el => {
      el.textContent = '';
    });
  });

  // Export buttons
  document.getElementById('btn-export-pdf')?.addEventListener('click', exportPDF);
  document.getElementById('btn-export-csv')?.addEventListener('click', () => {
    const resultsPanel = document.getElementById('slab-results');
    if (!resultsPanel) return;

    // Gather data from step table
    const rows = [['Step', 'Description', 'Formula / IS Clause', 'Calculated Value', 'Unit']];
    resultsPanel.querySelectorAll('.step-table tbody tr').forEach(tr => {
      const cells = Array.from(tr.cells).map(td => td.textContent.trim());
      rows.push(cells);
    });
    exportCSV(rows, 'SlabDesign');
  });
}


/* ──────────────────────────────────────────
   CALCULATION ENGINE
   ────────────────────────────────────────── */
function calculate(inputs) {
  const Lx = inputs['slab-lx'];      // shorter span (m)
  const Ly = inputs['slab-ly'];      // longer span (m)
  const fck = inputs['slab-fck'];
  const fy = inputs['slab-fy'];
  const exposure = inputs['slab-exposure'];
  const panelType = inputs['slab-panel-type'];
  const LL = inputs['slab-ll'];      // kN/m²
  const FF = inputs['slab-ff'];      // floor finish
  const PL = inputs['slab-partition']; // partition
  const barDia = inputs['slab-bar-dia'];

  const steps = [];
  const compliance = [];
  let stepNum = 1;

  // ── Step 1: Determine slab type ──
  const lyLxRatio = Ly / Lx;
  const isOneWay = lyLxRatio > 2.0;
  const slabType = isOneWay ? 'One-Way' : 'Two-Way';

  steps.push({
    step: stepNum++,
    description: `Determine slab type: Ly/Lx = ${Ly}/${Lx}`,
    formula: 'Ly/Lx > 2 → One-way',
    value: `${lyLxRatio.toFixed(2)} → ${slabType} Slab`,
    unit: ''
  });

  // ── Step 2: Assume overall depth D ──
  // Thumb rule: D = Lx/span ratio. For simply supported: Lx*1000/28, continuous: Lx*1000/32
  const spanFactor = (panelType == 9) ? 28 : 32; // Simply supported vs continuous
  let D_assumed = Math.ceil((Lx * 1000) / spanFactor / 5) * 5; // round to nearest 5mm
  D_assumed = Math.max(D_assumed, 100); // minimum 100mm

  // Cover from exposure condition
  const cover = COVER_REQUIREMENTS[exposure]?.slab || 20;

  // Effective depth: d = D - cover - φ/2
  const d = D_assumed - cover - barDia / 2;

  steps.push({
    step: stepNum++,
    description: `Assume overall depth D, compute effective depth d`,
    formula: `D ≈ Lx×1000/${spanFactor}, d = D − cover − φ/2`,
    value: `D = ${D_assumed} mm, cover = ${cover} mm, d = ${d.toFixed(1)} mm`,
    unit: 'mm'
  });

  // ── Step 3: Self-weight of slab ──
  const selfWeight = CONCRETE_PROPS.unitWeight * (D_assumed / 1000); // kN/m²

  steps.push({
    step: stepNum++,
    description: 'Self-weight of slab',
    formula: `w_sw = 25 × D/1000`,
    value: selfWeight.toFixed(2),
    unit: 'kN/m²'
  });

  // ── Step 4: Total factored load ──
  const DL = selfWeight + FF + PL;
  const totalServiceLoad = DL + LL;
  const wu = 1.5 * totalServiceLoad; // factored

  steps.push({
    step: stepNum++,
    description: 'Total factored load',
    formula: `wu = 1.5 × (DL + LL) = 1.5 × (${DL.toFixed(2)} + ${LL.toFixed(2)})`,
    value: wu.toFixed(2),
    unit: 'kN/m²'
  });

  // ── Step 5 & 6: Bending Moments ──
  let Mx_neg, Mx_pos, My_neg, My_pos;
  let Mx_design, My_design;

  if (isOneWay) {
    // One-way slab: M = wu × Lx² / 8 (simply supported) or wu × Lx² / 12 (fixed)
    const momentFactor = (panelType == 9) ? 8 : 10; // approximate
    Mx_design = (wu * Lx * Lx) / momentFactor;
    My_design = 0;

    steps.push({
      step: stepNum++,
      description: 'Bending moment (One-way slab)',
      formula: `Mx = wu × Lx² / ${momentFactor}`,
      value: Mx_design.toFixed(2),
      unit: 'kN·m/m'
    });
  } else {
    // Two-way slab from IS 456 Table 26
    const ax_neg = getMomentCoeff(panelType, lyLxRatio, 'ax_neg');
    const ax_pos = getMomentCoeff(panelType, lyLxRatio, 'ax_pos');
    const ay_neg = getMomentCoeff(panelType, lyLxRatio, 'ay_neg');
    const ay_pos = getMomentCoeff(panelType, lyLxRatio, 'ay_pos');

    Mx_neg = ax_neg * wu * Lx * Lx;
    Mx_pos = ax_pos * wu * Lx * Lx;
    My_neg = ay_neg * wu * Lx * Lx;
    My_pos = ay_pos * wu * Lx * Lx;

    Mx_design = Math.max(Mx_neg, Mx_pos);
    My_design = Math.max(My_neg, My_pos);

    steps.push({
      step: stepNum++,
      description: 'Moment coefficients from IS 456 Table 26',
      formula: `Panel Type ${panelType}, Ly/Lx = ${lyLxRatio.toFixed(2)}`,
      value: `αx⁻=${ax_neg.toFixed(4)}, αx⁺=${ax_pos.toFixed(4)}, αy⁻=${ay_neg.toFixed(4)}, αy⁺=${ay_pos.toFixed(4)}`,
      unit: ''
    });

    steps.push({
      step: stepNum++,
      description: 'Bending moments (Two-way slab)',
      formula: `M = α × wu × Lx²`,
      value: `Mx⁻=${Mx_neg.toFixed(2)}, Mx⁺=${Mx_pos.toFixed(2)}, My⁻=${My_neg.toFixed(2)}, My⁺=${My_pos.toFixed(2)}`,
      unit: 'kN·m/m'
    });
  }

  // ── Step 7: Check depth for bending ──
  const Q = getMuLimFactor(fy);
  // Mu_lim = Q × fck × b × d² (per meter width, b=1000mm)
  const Mu_lim = Q * fck * 1000 * d * d / 1e6; // kN·m/m
  const d_req = Math.sqrt((Mx_design * 1e6) / (Q * fck * 1000));

  steps.push({
    step: stepNum++,
    description: 'Check depth: required d for bending',
    formula: `d_req = √(Mu / (${Q} × fck × b))`,
    value: `d_req = ${d_req.toFixed(1)} mm ${d >= d_req ? '≤' : '>'} d_prov = ${d.toFixed(1)} mm → ${d >= d_req ? 'OK' : 'REVISE'}`,
    unit: 'mm'
  });

  const depthOk = d >= d_req;
  compliance.push({
    status: depthOk ? 'pass' : 'fail',
    text: `Depth check — d_provided (${d.toFixed(1)} mm) ${depthOk ? '≥' : '<'} d_required (${d_req.toFixed(1)} mm)`,
    clause: 'IS 456 Cl. 24.1'
  });

  // ── Step 8: Reinforcement in X-direction ──
  // Solve: Mu = 0.87 × fy × Ast × d × [1 − (Ast × fy) / (b × d × fck)]
  // Quadratic: Ast² × (fy/(b×d×fck)) − Ast + Mu/(0.87×fy×d) = 0
  function solveAst(Mu_kNm, b, d_mm, fck_val, fy_val) {
    const Mu = Mu_kNm * 1e6; // N·mm
    // 0.87×fy×Ast×d − 0.87×fy²×Ast²/(b×d×fck) = Mu
    // Let a = 0.87×fy²/(b×d×fck), b_coeff = 0.87×fy×d, c = -Mu
    // a×Ast² − b_coeff×Ast + Mu = 0
    const a = (0.87 * fy_val * fy_val) / (b * d_mm * fck_val);
    const b_coeff = 0.87 * fy_val * d_mm;
    // aAst² − bAst + Mu = 0
    const disc = b_coeff * b_coeff - 4 * a * Mu;
    if (disc < 0) return NaN;
    return (b_coeff - Math.sqrt(disc)) / (2 * a);
  }

  const Ast_x = solveAst(Mx_design, 1000, d, fck, fy);

  steps.push({
    step: stepNum++,
    description: 'Required Ast in X-direction (shorter span)',
    formula: `Quadratic: 0.87×fy×Ast×d×[1 − Ast×fy/(b×d×fck)] = Mu`,
    value: Ast_x.toFixed(1),
    unit: 'mm²/m'
  });

  // ── Step 9: Bar spacing for X ──
  const bar = getRebarByDia(barDia);
  let spacing_x = Math.floor((bar.area * 1000) / Ast_x / 25) * 25;
  // Enforce IS 456 max spacing: min(3d, 300mm)
  const maxSpacing = Math.min(Math.floor(3 * d), 300);
  spacing_x = Math.min(spacing_x, maxSpacing);
  const Ast_x_provided = (bar.area * 1000) / spacing_x;

  steps.push({
    step: stepNum++,
    description: `Provide ${barDia}φ bars at spacing`,
    formula: `s = (Abar × 1000) / Ast = (${bar.area.toFixed(1)} × 1000) / ${Ast_x.toFixed(1)}`,
    value: `${barDia}φ @ ${spacing_x} mm c/c (Ast_prov = ${Ast_x_provided.toFixed(1)} mm²/m)`,
    unit: ''
  });

  // ── Step 9b: Reinforcement in Y-direction ──
  let Ast_y, spacing_y, Ast_y_provided;
  const d_y = d - barDia; // reduced effective depth for Y bars

  if (isOneWay || My_design <= 0) {
    // Distribution steel for one-way slab
    const minSteelPct = MIN_STEEL.slab[fy] || 0.12;
    Ast_y = (minSteelPct / 100) * 1000 * D_assumed;
    spacing_y = Math.floor((bar.area * 1000) / Ast_y / 25) * 25;
    spacing_y = Math.min(spacing_y, 5 * d, 450, maxSpacing); // IS 456 for dist steel
    Ast_y_provided = (bar.area * 1000) / spacing_y;

    steps.push({
      step: stepNum++,
      description: 'Distribution steel (Y-direction)',
      formula: `Ast_dist = ${minSteelPct}% × b × D`,
      value: `${barDia}φ @ ${spacing_y} mm c/c (Ast = ${Ast_y_provided.toFixed(1)} mm²/m)`,
      unit: ''
    });
  } else {
    Ast_y = solveAst(My_design, 1000, d_y, fck, fy);
    spacing_y = Math.floor((bar.area * 1000) / Ast_y / 25) * 25;
    spacing_y = Math.min(spacing_y, maxSpacing);
    Ast_y_provided = (bar.area * 1000) / spacing_y;

    steps.push({
      step: stepNum++,
      description: 'Required Ast in Y-direction (longer span)',
      formula: `Quadratic for My = ${My_design.toFixed(2)} kN·m/m, d' = ${d_y.toFixed(1)} mm`,
      value: `${barDia}φ @ ${spacing_y} mm c/c (Ast = ${Ast_y_provided.toFixed(1)} mm²/m)`,
      unit: ''
    });
  }

  // ── Step 10: Minimum steel check ──
  const minSteelPct = MIN_STEEL.slab[fy] || 0.12;
  const Ast_min = (minSteelPct / 100) * 1000 * D_assumed;

  const minSteelOk_x = Ast_x_provided >= Ast_min;
  const minSteelOk_y = Ast_y_provided >= Ast_min;

  steps.push({
    step: stepNum++,
    description: 'Minimum steel check',
    formula: `Ast_min = ${minSteelPct}% × b × D = ${minSteelPct}% × 1000 × ${D_assumed}`,
    value: `${Ast_min.toFixed(1)} mm²/m — X: ${minSteelOk_x ? 'OK' : 'FAIL'}, Y: ${minSteelOk_y ? 'OK' : 'FAIL'}`,
    unit: ''
  });

  compliance.push({
    status: (minSteelOk_x && minSteelOk_y) ? 'pass' : 'fail',
    text: `Minimum steel check — Ast_min = ${Ast_min.toFixed(0)} mm²/m`,
    clause: 'IS 456 Cl. 26.5.2.1'
  });

  // ── Step 11: Maximum spacing check ──
  // maxSpacing already computed above
  const spacingOk_x = spacing_x <= maxSpacing;
  const spacingOk_y = spacing_y <= maxSpacing;

  steps.push({
    step: stepNum++,
    description: 'Maximum spacing check',
    formula: `s_max ≤ min(3d, 300) = min(${(3 * d).toFixed(0)}, 300)`,
    value: `${maxSpacing} mm — X: ${spacing_x} mm ${spacingOk_x ? '✓' : '✗'}, Y: ${spacing_y} mm ${spacingOk_y ? '✓' : '✗'}`,
    unit: ''
  });

  compliance.push({
    status: (spacingOk_x && spacingOk_y) ? 'pass' : 'fail',
    text: `Maximum spacing — s_max = ${maxSpacing} mm`,
    clause: 'IS 456 Cl. 26.3.3'
  });

  // ── Step 12: Deflection check (L/d ratio) ──
  const basicLdRatio = isOneWay ?
    (panelType == 9 ? 20 : 26) :
    (panelType == 9 ? 20 : 26);

  // Service stress in steel
  const fs = 0.58 * fy * (Ast_x / Ast_x_provided);
  const pt_prov = (Ast_x_provided * 100) / (1000 * d);
  const kt = getModFactorTension(fs, pt_prov);

  const allowableLd = basicLdRatio * kt;
  const actualLd = (Lx * 1000) / d;
  const deflectionOk = actualLd <= allowableLd;

  steps.push({
    step: stepNum++,
    description: 'Deflection check (L/d ratio)',
    formula: `Allowable L/d = ${basicLdRatio} × kt = ${basicLdRatio} × ${kt.toFixed(2)}`,
    value: `Actual L/d = ${actualLd.toFixed(1)}, Allowable = ${allowableLd.toFixed(1)} → ${deflectionOk ? 'OK' : 'FAIL'}`,
    unit: ''
  });

  compliance.push({
    status: deflectionOk ? 'pass' : (actualLd <= allowableLd * 1.05 ? 'warn' : 'fail'),
    text: `Deflection check — L/d = ${actualLd.toFixed(1)}, limit = ${allowableLd.toFixed(1)}`,
    clause: 'IS 456 Cl. 23.2.1'
  });

  // ── Step 13: Shear check ──
  // Shear at d from support face
  const Vu = (wu * Lx / 2) - (wu * d / 1000); // kN/m
  const tau_v = (Vu * 1000) / (1000 * d); // N/mm²
  const pt_x = (Ast_x_provided * 100) / (1000 * d);
  const tau_c = getShearStrength(pt_x, fck);
  const shearOk = tau_v <= tau_c;

  steps.push({
    step: stepNum++,
    description: 'Shear check at d from support',
    formula: `τv = Vu/(b×d), τc from IS 456 Table 19`,
    value: `τv = ${tau_v.toFixed(3)} N/mm², τc = ${tau_c.toFixed(3)} N/mm² → ${shearOk ? 'OK' : 'FAIL'}`,
    unit: ''
  });

  compliance.push({
    status: shearOk ? 'pass' : 'fail',
    text: `Shear check — τv (${tau_v.toFixed(3)}) ${shearOk ? '≤' : '>'} τc (${tau_c.toFixed(3)}) N/mm²`,
    clause: 'IS 456 Cl. 40.1, Table 19'
  });

  // ── Step 14: Development length ──
  const tau_bd = getBondStress(fck, true);
  const sigma_s = 0.87 * fy;
  const Ld = (barDia * sigma_s) / (4 * tau_bd);
  const availableAnchorage = (Lx * 1000 / 2); // half-span roughly
  const devLengthOk = Ld <= availableAnchorage;

  steps.push({
    step: stepNum++,
    description: 'Development length check',
    formula: `Ld = φ × σs / (4 × τbd) = ${barDia} × ${sigma_s.toFixed(0)} / (4 × ${tau_bd.toFixed(2)})`,
    value: `Ld = ${Ld.toFixed(0)} mm → ${devLengthOk ? 'OK' : 'Increase anchorage'}`,
    unit: 'mm'
  });

  compliance.push({
    status: devLengthOk ? 'pass' : 'warn',
    text: `Development length — Ld = ${Ld.toFixed(0)} mm`,
    clause: 'IS 456 Cl. 26.2.1'
  });

  // Overall status
  const allPass = compliance.every(c => c.status === 'pass');
  const hasFailure = compliance.some(c => c.status === 'fail');

  return {
    slabType, D_assumed, d, cover, wu, Mx_design, My_design,
    Ast_x, Ast_x_provided, spacing_x,
    Ast_y: Ast_y || Ast_min, Ast_y_provided, spacing_y,
    barDia, Ast_min, Ld,
    steps, compliance,
    overallStatus: hasFailure ? 'fail' : (allPass ? 'pass' : 'warn'),
    lyLxRatio, fck, fy
  };
}


/* ──────────────────────────────────────────
   Render Results
   ────────────────────────────────────────── */
function renderResults(r) {
  const resultsDiv = document.getElementById('slab-results');

  const summaryCards = renderSummaryCards([
    {
      label: 'Slab Type',
      value: r.slabType,
      sub: `Ly/Lx = ${r.lyLxRatio.toFixed(2)}`,
      status: 'info'
    },
    {
      label: 'Overall Depth',
      value: `${r.D_assumed} mm`,
      sub: `d_eff = ${r.d.toFixed(1)} mm`,
      status: r.overallStatus === 'fail' ? 'fail' : 'pass'
    },
    {
      label: 'Ast (X-dir)',
      value: `${r.Ast_x_provided.toFixed(0)} mm²/m`,
      sub: `${r.barDia}φ @ ${r.spacing_x} mm c/c`,
      status: r.Ast_x_provided >= r.Ast_min ? 'pass' : 'fail'
    },
    {
      label: 'Ast (Y-dir)',
      value: `${r.Ast_y_provided.toFixed(0)} mm²/m`,
      sub: `${r.barDia}φ @ ${r.spacing_y} mm c/c`,
      status: r.Ast_y_provided >= r.Ast_min ? 'pass' : 'fail'
    },
    {
      label: 'Status',
      value: r.overallStatus === 'pass' ? '✅ All OK' :
             r.overallStatus === 'warn' ? '⚠️ Review' : '❌ Revise',
      sub: `fck=${r.fck} N/mm², fy=${r.fy} N/mm²`,
      status: r.overallStatus
    }
  ]);

  const stepTable = renderStepTable('Step-by-Step Calculation', r.steps);

  const designTable = renderDesignTable(
    'Design Summary — Reinforcement Details',
    ['Direction', 'Ast Required (mm²/m)', 'Ast Provided (mm²/m)', 'Bar Dia', 'Spacing (mm)', 'Check'],
    [
      [
        'X (shorter span)',
        r.Ast_x.toFixed(1),
        r.Ast_x_provided.toFixed(1),
        `${r.barDia} mm`,
        `${r.spacing_x} mm c/c`,
        r.Ast_x_provided >= r.Ast_x ?
          { text: '✅ OK', status: 'pass' } :
          { text: '❌ FAIL', status: 'fail' }
      ],
      [
        'Y (longer span / dist.)',
        r.Ast_y.toFixed(1),
        r.Ast_y_provided.toFixed(1),
        `${r.barDia} mm`,
        `${r.spacing_y} mm c/c`,
        r.Ast_y_provided >= r.Ast_y ?
          { text: '✅ OK', status: 'pass' } :
          { text: '❌ FAIL', status: 'fail' }
      ]
    ]
  );

  const complianceHtml = renderComplianceChecks(r.compliance);

  resultsDiv.innerHTML = `
    <div class="results-panel">
      <div class="results-panel__header">
        <h3>Design Results</h3>
      </div>
      ${summaryCards}
      ${stepTable}
      ${designTable}
      ${complianceHtml}
    </div>
  `;

  // Update sticky bar
  // Update sticky bar
  updateStickyBar([
    { label: 'D', value: `${r.D_assumed} mm` },
    { label: 'Ast_x', value: `${r.Ast_x_provided.toFixed(0)} mm²/m` },
    { label: 'Spacing', value: `${r.barDia}φ@${r.spacing_x}` },
    { label: 'Status', value: r.overallStatus === 'pass' ? '✅ OK' : r.overallStatus === 'warn' ? '⚠️ Review' : '❌ Revise' }
  ]);
}
