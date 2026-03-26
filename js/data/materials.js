/* ═══════════════════════════════════════════════════════════════
   STELLAR CIVIL — Material Properties (IS 456 / IS 800)
   ═══════════════════════════════════════════════════════════════ */

/** Concrete Grades */
export const CONCRETE_GRADES = [
  { grade: 'M15', fck: 15 },
  { grade: 'M20', fck: 20 },
  { grade: 'M25', fck: 25 },
  { grade: 'M30', fck: 30 },
  { grade: 'M35', fck: 35 },
  { grade: 'M40', fck: 40 },
  { grade: 'M45', fck: 45 },
  { grade: 'M50', fck: 50 }
];

/** Steel Grades (Rebar) */
export const STEEL_GRADES = [
  { grade: 'Fe250', fy: 250 },
  { grade: 'Fe415', fy: 415 },
  { grade: 'Fe500', fy: 500 },
  { grade: 'Fe550', fy: 550 },
  { grade: 'Fe600', fy: 600 }
];

/** Exposure Conditions */
export const EXPOSURE_CONDITIONS = [
  'Mild', 'Moderate', 'Severe', 'Very Severe', 'Extreme'
];

/** Concrete Properties */
export const CONCRETE_PROPS = {
  unitWeight: 25,            // kN/m³
  poissonRatio: 0.2,
  /** Modulus of elasticity: Ec = 5000√fck N/mm² */
  getEc(fck) {
    return 5000 * Math.sqrt(fck);
  },
  /** Ultimate compressive strain */
  ecu: 0.0035
};

/** Reinforcing Steel Properties */
export const REBAR_STEEL_PROPS = {
  Es: 200000,               // N/mm² (2 × 10⁵)
  unitWeight: 78.5,          // kN/m³
};

/** Structural Steel Properties (IS 800) */
export const STRUCTURAL_STEEL_PROPS = {
  Es: 200000,               // N/mm²
  G: 76900,                  // N/mm² (0.769 × 10⁵)
  poisson: 0.3,
  unitWeight: 78.5,          // kN/m³
  /** fy and fu for common grades */
  grades: {
    'E250':  { fy: 250, fu: 410 },
    'E275':  { fy: 275, fu: 430 },
    'E300':  { fy: 300, fu: 440 },
    'E350':  { fy: 350, fu: 490 },
    'E410':  { fy: 410, fu: 540 },
    'E450':  { fy: 450, fu: 570 }
  },
  /** Partial safety factors */
  gamma_m0: 1.10,
  gamma_m1: 1.25,
  gamma_mw: 1.25, // for welds
  gamma_mb: 1.25  // for bolts
};

/** Partial Safety Factors for Loads (IS 456 Table 18) */
export const LOAD_FACTORS = {
  dead: 1.5,
  live: 1.5,
  combinations: [
    { id: 1, desc: '1.5(DL + LL)',            factors: { DL: 1.5, LL: 1.5, EQ: 0, WL: 0 } },
    { id: 2, desc: '1.2(DL + LL ± EQ)',       factors: { DL: 1.2, LL: 1.2, EQ: 1.2, WL: 0 } },
    { id: 3, desc: '1.5(DL ± EQ)',            factors: { DL: 1.5, LL: 0, EQ: 1.5, WL: 0 } },
    { id: 4, desc: '0.9DL ± 1.5EQ',           factors: { DL: 0.9, LL: 0, EQ: 1.5, WL: 0 } },
    { id: 5, desc: '1.2(DL + LL ± WL)',       factors: { DL: 1.2, LL: 1.2, EQ: 0, WL: 1.2 } },
    { id: 6, desc: '1.5(DL ± WL)',            factors: { DL: 1.5, LL: 0, EQ: 0, WL: 1.5 } },
    { id: 7, desc: '0.9DL ± 1.5WL',           factors: { DL: 0.9, LL: 0, EQ: 0, WL: 1.5 } }
  ]
};

/** Partial Safety Factors for Materials (IS 456 Cl. 36.4.2) */
export const MATERIAL_FACTORS = {
  concrete: 1.5,   // γc
  steel: 1.15      // γs
};

/** Simple Arrays for UI Selection */
export const FCK_GRADES = [15, 20, 25, 30, 35, 40, 45, 50];
export const FY_GRADES = [250, 415, 500, 550, 600];

/** Neutral axis depth limit (IS 456) */
export const XU_MAX_RATIO = {
  250: 0.531,
  415: 0.479,
  500: 0.456,
  550: 0.444,
  600: 0.430
};

/** Minimum tension steel percentage (IS 456) */
export const MIN_STEEL = {
  beam: function(fy) {
    return 0.85 / fy * 100; // as percentage
  }
};
