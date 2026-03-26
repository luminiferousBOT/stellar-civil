/* ═══════════════════════════════════════════════════════════════
   STELLAR CIVIL — IS 456:2000 Data Tables
   ═══════════════════════════════════════════════════════════════ */

/* ──────────────────────────────────────────
   TABLE 19: Design Shear Strength τc (N/mm²)
   pt = 100×Ast/(b×d) → τc for given fck
   ────────────────────────────────────────── */
const TABLE_19_PT = [0.15, 0.25, 0.50, 0.75, 1.00, 1.25, 1.50, 1.75, 2.00, 2.25, 2.50, 2.75, 3.00];

const TABLE_19_DATA = {
  // fck:  [τc values corresponding to pt values above]
  15: [0.28, 0.36, 0.48, 0.56, 0.62, 0.67, 0.72, 0.75, 0.79, 0.81, 0.82, 0.82, 0.82],
  20: [0.28, 0.36, 0.48, 0.56, 0.62, 0.67, 0.72, 0.75, 0.79, 0.81, 0.82, 0.82, 0.82],
  25: [0.29, 0.36, 0.49, 0.57, 0.64, 0.70, 0.74, 0.78, 0.82, 0.85, 0.88, 0.90, 0.92],
  30: [0.29, 0.37, 0.50, 0.59, 0.66, 0.71, 0.76, 0.80, 0.84, 0.88, 0.91, 0.94, 0.96],
  35: [0.29, 0.37, 0.50, 0.59, 0.67, 0.73, 0.78, 0.82, 0.86, 0.90, 0.93, 0.96, 0.99],
  40: [0.30, 0.38, 0.51, 0.60, 0.68, 0.74, 0.79, 0.84, 0.88, 0.92, 0.95, 0.98, 1.01]
};

/**
 * Get τc from IS 456 Table 19 with bilinear interpolation
 * @param {number} pt - percentage of tensile steel (100*Ast/(b*d))
 * @param {number} fck - characteristic compressive strength (N/mm²)
 * @returns {number} design shear strength τc (N/mm²)
 */
export function getShearStrength(pt, fck) {
  // Clamp pt
  const ptClamped = Math.max(0.15, Math.min(pt, 3.0));

  // Available fck grades
  const fckGrades = [15, 20, 25, 30, 35, 40];
  const fckClamped = Math.max(15, Math.min(fck, 40));

  // Interpolate along pt axis for a given fck
  function interpPt(fckVal) {
    const data = TABLE_19_DATA[fckVal];
    if (!data) return 0;

    // Find pt bracket
    let i = 0;
    for (i = 0; i < TABLE_19_PT.length - 1; i++) {
      if (ptClamped <= TABLE_19_PT[i + 1]) break;
    }

    if (ptClamped <= TABLE_19_PT[0]) return data[0];
    if (ptClamped >= TABLE_19_PT[TABLE_19_PT.length - 1]) return data[data.length - 1];

    const x0 = TABLE_19_PT[i], x1 = TABLE_19_PT[i + 1];
    const y0 = data[i], y1 = data[i + 1];
    return y0 + (ptClamped - x0) * (y1 - y0) / (x1 - x0);
  }

  // If exact fck match
  if (TABLE_19_DATA[fckClamped]) {
    return interpPt(fckClamped);
  }

  // Interpolate between fck grades
  let fi = 0;
  for (fi = 0; fi < fckGrades.length - 1; fi++) {
    if (fckClamped <= fckGrades[fi + 1]) break;
  }

  const f0 = fckGrades[fi], f1 = fckGrades[fi + 1];
  const tc0 = interpPt(f0), tc1 = interpPt(f1);
  return tc0 + (fckClamped - f0) * (tc1 - tc0) / (f1 - f0);
}


/* ──────────────────────────────────────────
   TABLE 20: Maximum Shear Stress τc_max (N/mm²)
   ────────────────────────────────────────── */
const TABLE_20 = {
  15: 2.5,
  20: 2.8,
  25: 3.1,
  30: 3.5,
  35: 3.7,
  40: 4.0
};

export function getMaxShearStress(fck) {
  if (TABLE_20[fck]) return TABLE_20[fck];
  // Interpolate
  const grades = Object.keys(TABLE_20).map(Number).sort((a, b) => a - b);
  const fc = Math.max(15, Math.min(fck, 40));
  for (let i = 0; i < grades.length - 1; i++) {
    if (fc <= grades[i + 1]) {
      const x0 = grades[i], x1 = grades[i + 1];
      return TABLE_20[x0] + (fc - x0) * (TABLE_20[x1] - TABLE_20[x0]) / (x1 - x0);
    }
  }
  return TABLE_20[40];
}


/* ──────────────────────────────────────────
   TABLE 5: Design Bond Stress τbd (N/mm²)
   For plain bars in tension
   ────────────────────────────────────────── */
const TABLE_5 = {
  15: 1.0,
  20: 1.2,
  25: 1.4,
  30: 1.5,
  35: 1.7,
  40: 1.9
};

/**
 * Get bond stress τbd
 * @param {number} fck
 * @param {boolean} deformed - true for deformed bars (increase by 60%)
 * @returns {number} τbd in N/mm²
 */
export function getBondStress(fck, deformed = true) {
  let tbd = TABLE_5[fck];
  if (!tbd) {
    // Interpolate
    const grades = Object.keys(TABLE_5).map(Number).sort((a, b) => a - b);
    const fc = Math.max(15, Math.min(fck, 40));
    for (let i = 0; i < grades.length - 1; i++) {
      if (fc <= grades[i + 1]) {
        const x0 = grades[i], x1 = grades[i + 1];
        tbd = TABLE_5[x0] + (fc - x0) * (TABLE_5[x1] - TABLE_5[x0]) / (x1 - x0);
        break;
      }
    }
    if (!tbd) tbd = TABLE_5[40];
  }
  // For deformed bars: increase by 60% (Cl. 26.2.1.1)
  return deformed ? tbd * 1.6 : tbd;
}


/* ──────────────────────────────────────────────────────────────────
   TABLE 26 (Annex D): Bending Moment Coefficients αx(+), αx(-),
   αy(+), αy(-) for 9 panel types
   Ly/Lx ratios from 1.0 to 2.0 in steps of 0.1
   ────────────────────────────────────────────────────────────────── */

// Ly/Lx ratios
const TABLE_26_RATIOS = [1.0, 1.1, 1.2, 1.3, 1.4, 1.5, 1.75, 2.0];

// Panel type descriptions
export const PANEL_TYPES = [
  { id: 1, desc: "Interior panel (all edges continuous)" },
  { id: 2, desc: "One short edge discontinuous" },
  { id: 3, desc: "One long edge discontinuous" },
  { id: 4, desc: "Two adjacent edges discontinuous" },
  { id: 5, desc: "Two short edges discontinuous" },
  { id: 6, desc: "Two long edges discontinuous" },
  { id: 7, desc: "Three edges discontinuous (one long edge continuous)" },
  { id: 8, desc: "Three edges discontinuous (one short edge continuous)" },
  { id: 9, desc: "All four edges discontinuous" }
];

// Coefficients: TABLE_26[panelType] = { ax_neg, ax_pos, ay_neg, ay_pos }
// Each array corresponds to TABLE_26_RATIOS
const TABLE_26 = {
  1: {
    ax_neg: [0.032, 0.037, 0.042, 0.046, 0.050, 0.053, 0.060, 0.065],
    ax_pos: [0.024, 0.028, 0.032, 0.035, 0.037, 0.040, 0.044, 0.048],
    ay_neg: [0.024, 0.028, 0.032, 0.036, 0.039, 0.041, 0.045, 0.049],
    ay_pos: [0.024, 0.028, 0.032, 0.036, 0.039, 0.041, 0.045, 0.049]
  },
  2: {
    ax_neg: [0.037, 0.043, 0.048, 0.051, 0.055, 0.057, 0.064, 0.068],
    ax_pos: [0.028, 0.032, 0.036, 0.039, 0.041, 0.044, 0.048, 0.052],
    ay_neg: [0.028, 0.032, 0.036, 0.040, 0.043, 0.045, 0.049, 0.052],
    ay_pos: [0.028, 0.032, 0.036, 0.040, 0.043, 0.045, 0.049, 0.052]
  },
  3: {
    ax_neg: [0.037, 0.044, 0.052, 0.057, 0.063, 0.067, 0.077, 0.085],
    ax_pos: [0.028, 0.033, 0.039, 0.044, 0.047, 0.051, 0.059, 0.065],
    ay_neg: [0.037, 0.044, 0.052, 0.057, 0.063, 0.067, 0.077, 0.085],
    ay_pos: [0.028, 0.033, 0.039, 0.044, 0.047, 0.051, 0.059, 0.065]
  },
  4: {
    ax_neg: [0.047, 0.053, 0.060, 0.065, 0.071, 0.075, 0.084, 0.091],
    ax_pos: [0.035, 0.040, 0.045, 0.049, 0.053, 0.056, 0.063, 0.069],
    ay_neg: [0.035, 0.040, 0.045, 0.049, 0.053, 0.056, 0.063, 0.069],
    ay_pos: [0.035, 0.040, 0.045, 0.049, 0.053, 0.056, 0.063, 0.069]
  },
  5: {
    ax_neg: [0.045, 0.049, 0.052, 0.056, 0.059, 0.060, 0.065, 0.069],
    ax_pos: [0.035, 0.037, 0.040, 0.043, 0.044, 0.045, 0.049, 0.052],
    ay_neg: [0.035, 0.037, 0.040, 0.043, 0.044, 0.045, 0.049, 0.052],
    ay_pos: [0.035, 0.037, 0.040, 0.043, 0.044, 0.045, 0.049, 0.052]
  },
  6: {
    ax_neg: [0.045, 0.049, 0.052, 0.056, 0.059, 0.060, 0.065, 0.069],
    ax_pos: [0.035, 0.037, 0.040, 0.043, 0.044, 0.045, 0.049, 0.052],
    ay_neg: [0.035, 0.037, 0.040, 0.043, 0.044, 0.045, 0.049, 0.052],
    ay_pos: [0.035, 0.037, 0.040, 0.043, 0.044, 0.045, 0.049, 0.052]
  },
  7: {
    ax_neg: [0.057, 0.064, 0.071, 0.076, 0.080, 0.084, 0.091, 0.097],
    ax_pos: [0.043, 0.048, 0.053, 0.057, 0.060, 0.064, 0.069, 0.073],
    ay_neg: [0.043, 0.048, 0.053, 0.057, 0.060, 0.064, 0.069, 0.073],
    ay_pos: [0.043, 0.048, 0.053, 0.057, 0.060, 0.064, 0.069, 0.073]
  },
  8: {
    ax_neg: [0.057, 0.064, 0.071, 0.076, 0.080, 0.084, 0.091, 0.097],
    ax_pos: [0.043, 0.048, 0.053, 0.057, 0.060, 0.064, 0.069, 0.073],
    ay_neg: [0.043, 0.048, 0.053, 0.057, 0.060, 0.064, 0.069, 0.073],
    ay_pos: [0.043, 0.048, 0.053, 0.057, 0.060, 0.064, 0.069, 0.073]
  },
  9: {
    ax_neg: [0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000],
    ax_pos: [0.056, 0.064, 0.072, 0.079, 0.085, 0.089, 0.100, 0.107],
    ay_neg: [0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000],
    ay_pos: [0.056, 0.064, 0.072, 0.079, 0.085, 0.089, 0.100, 0.107]
  }
};

/**
 * Get moment coefficient from IS 456 Table 26 with interpolation
 * @param {number} panelType - 1 to 9
 * @param {number} lyLxRatio - Ly/Lx ratio
 * @param {string} coeff - 'ax_neg','ax_pos','ay_neg','ay_pos'
 * @returns {number} coefficient α
 */
export function getMomentCoeff(panelType, lyLxRatio, coeff) {
  const panel = TABLE_26[panelType];
  if (!panel || !panel[coeff]) return 0;

  const data = panel[coeff];
  const ratio = Math.max(1.0, Math.min(lyLxRatio, 2.0));

  // Find bracket
  for (let i = 0; i < TABLE_26_RATIOS.length - 1; i++) {
    if (ratio <= TABLE_26_RATIOS[i + 1]) {
      const x0 = TABLE_26_RATIOS[i], x1 = TABLE_26_RATIOS[i + 1];
      const y0 = data[i], y1 = data[i + 1];
      return y0 + (ratio - x0) * (y1 - y0) / (x1 - x0);
    }
  }
  return data[data.length - 1];
}


/* ──────────────────────────────────────────
   COVER REQUIREMENTS (IS 456 Table 16/16A)
   ────────────────────────────────────────── */
export const COVER_REQUIREMENTS = {
  'Mild':        { slab: 20, beam: 20, column: 40 },
  'Moderate':    { slab: 30, beam: 30, column: 40 },
  'Severe':      { slab: 45, beam: 45, column: 45 },
  'Very Severe': { slab: 50, beam: 50, column: 50 },
  'Extreme':     { slab: 75, beam: 75, column: 75 }
};


/* ──────────────────────────────────────────
   Limiting moment factors (Mu_lim coefficients)
   Mu_lim = Q × fck × b × d²
   ────────────────────────────────────────── */
export const MU_LIM_FACTORS = {
  250: { xu_d: 0.5313, Q: 0.149 },
  415: { xu_d: 0.4791, Q: 0.138 },
  500: { xu_d: 0.4560, Q: 0.133 },
  550: { xu_d: 0.4440, Q: 0.129 },
  600: { xu_d: 0.4300, Q: 0.126 }
};

/**
 * Get the limiting Q factor for Mu_lim = Q × fck × b × d²
 */
export function getMuLimFactor(fy) {
  return MU_LIM_FACTORS[fy]?.Q || 0.138;
}

/**
 * Get xu_max/d ratio for given fy
 */
export function getXuMaxRatio(fy) {
  return MU_LIM_FACTORS[fy]?.xu_d || 0.4791;
}


/* ──────────────────────────────────────────
   Modification Factor for Tension Reinforcement
   (IS 456 Fig. 4, Cl. 23.2.1)
   ────────────────────────────────────────── */
export function getModFactorTension(fs, pt) {
  // Approximate as per IS 456 Fig. 4
  // fs = 0.58 × fy × Ast_required / Ast_provided
  // pt = percentage of tension reinforcement
  // Returns modification factor kt

  // Simplified curve fit based on IS 456 Fig. 4
  if (pt <= 0) return 2.0;
  const factor = 1.0 / (0.225 + 0.003225 * fs - 0.625 * Math.log10(pt));
  return Math.max(1.0, Math.min(factor, 2.0));
}


/* ──────────────────────────────────────────
   Minimum steel percentages
   ────────────────────────────────────────── */
export const MIN_STEEL = {
  slab: {
    415: 0.12,  // 0.12% of bD for HYSD
    500: 0.12,
    550: 0.12,
    600: 0.12,
    250: 0.15   // 0.15% for mild steel
  },
  beam: function(fy) {
    // Cl. 26.5.1.1: min Ast = 0.85*b*d/fy
    return 0.85 / fy * 100; // as percentage
  }
};

/* ──────────────────────────────────────────
   Standard Concrete Grades & Rebar Data
   ────────────────────────────────────────── */
export const CONCRETE_GRADES = [15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80];

export const REBAR_DIAMETERS = [8, 10, 12, 16, 20, 25, 28, 32, 36, 40];

export function getRebarArea(dia) {
  return (Math.PI * dia * dia) / 4;
}

export function getRebarWeight(dia) {
  return (dia * dia) / 162.28; // Standard kg/m formula
}
