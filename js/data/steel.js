/* ═══════════════════════════════════════════════════════════════
   STELLAR CIVIL — Structural Steel Section Data (IS 800 / IS 808)
   ═══════════════════════════════════════════════════════════════ */

/**
 * Partial Safety Factors for Materials (IS 800 Table 5)
 */
export const STEEL_PROPS = {
  gamma_m0: 1.10, // Yielding
  gamma_m1: 1.25, // Ultimate Stress / Rupture
  gamma_mb: 1.25, // Bearing type bolts
  gamma_mw: 1.25, // Welds (Shop)
  gamma_mw_field: 1.50, // Welds (Field)
  E: 200000,      // Modulus of Elasticity (N/mm²)
  v: 0.3          // Poisson's ratio
};

/**
 * Properties of standard structural steel grades (IS 2062)
 */
export const STEEL_GRADES = [
  { grade: "E250 (Fe410W)A", fy: 250, fu: 410 },
  { grade: "E275 (Fe430)A", fy: 275, fu: 430 },
  { grade: "E300 (Fe440)A", fy: 300, fu: 440 },
  { grade: "E350 (Fe490)A", fy: 350, fu: 490 },
  { grade: "E410 (Fe540)A", fy: 410, fu: 540 }
];

/**
 * Indian Standard Medium Weight Beams (ISMB)
 * A: mm², h: mm, bf: mm, tw: mm, tf: mm, R1: mm
 * Izz, Iyy: mm⁴ × 10⁴ (multiply by 10⁴ for mm⁴)
 * Zpz, Zez: mm³ × 10³ (multiply by 10³ for mm³)
 * rz, ry: mm
 */
export const ISMB_DATA = [
  { designation: 'ISMB 100', mass: 11.5, A: 1460, h: 100, bf: 75, tw: 4.0, tf: 7.2, R1: 9, Izz: 257.5, Iyy: 40.8, Zez: 51.5, Zpz: 59.4, rz: 42.0, ry: 16.7 },
  { designation: 'ISMB 150', mass: 14.9, A: 1900, h: 150, bf: 80, tw: 4.8, tf: 7.6, R1: 9, Izz: 726.4, Iyy: 52.6, Zez: 96.9, Zpz: 110.8, rz: 61.8, ry: 16.6 },
  { designation: 'ISMB 200', mass: 25.4, A: 3233, h: 200, bf: 100, tw: 5.7, tf: 10.8, R1: 11, Izz: 2235.4, Iyy: 150, Zez: 223.5, Zpz: 255.4, rz: 83.2, ry: 21.5 },
  { designation: 'ISMB 250', mass: 37.3, A: 4755, h: 250, bf: 125, tw: 6.9, tf: 12.5, R1: 13, Izz: 5131.6, Iyy: 334.5, Zez: 410.5, Zpz: 465.7, rz: 103.8, ry: 26.5 },
  { designation: 'ISMB 300', mass: 44.2, A: 5626, h: 300, bf: 140, tw: 7.5, tf: 12.4, R1: 14, Izz: 8603.6, Iyy: 453.9, Zez: 573.6, Zpz: 651.7, rz: 123.7, ry: 28.4 },
  { designation: 'ISMB 350', mass: 52.4, A: 6671, h: 350, bf: 140, tw: 8.1, tf: 14.2, R1: 14, Izz: 13630, Iyy: 537.7, Zez: 778.9, Zpz: 889.6, rz: 142.9, ry: 28.4 },
  { designation: 'ISMB 400', mass: 61.6, A: 7846, h: 400, bf: 140, tw: 8.9, tf: 16.0, R1: 14, Izz: 20458, Iyy: 622.1, Zez: 1022.9, Zpz: 1176.2, rz: 161.5, ry: 28.2 },
  { designation: 'ISMB 450', mass: 72.4, A: 9227, h: 450, bf: 150, tw: 9.4, tf: 17.4, R1: 15, Izz: 30390, Iyy: 834, Zez: 1350.7, Zpz: 1555.2, rz: 181.5, ry: 30.1 },
  { designation: 'ISMB 500', mass: 86.9, A: 11074, h: 500, bf: 160, tw: 10.2, tf: 17.2, R1: 16, Izz: 45218, Iyy: 1369.8, Zez: 1808.7, Zpz: 2085.1, rz: 202.1, ry: 35.2 },
  { designation: 'ISMB 600', mass: 122.6, A: 15621, h: 600, bf: 210, tw: 12.0, tf: 20.8, R1: 16, Izz: 91813, Iyy: 2651.0, Zez: 3060.4, Zpz: 3510.6, rz: 242.4, ry: 41.2 }
];

/**
 * Indian Standard Equal Angles (ISA)
 * A: mm², b (leg size): mm, t: mm, cx, cy: mm
 * Ixx, Iyy: mm⁴ × 10⁴, rxx, ryy: mm, ru: mm, rv: mm
 */
export const ISA_DATA = [
  { designation: 'ISA 50x50x6', mass: 4.5, A: 568, b: 50, t: 6, cx: 14.5, cy: 14.5, Ixx: 11.0, rxx: 15.2, ru: 19.3, rv: 9.6 },
  { designation: 'ISA 65x65x6', mass: 5.8, A: 744, b: 65, t: 6, cx: 18.1, cy: 18.1, Ixx: 28.3, rxx: 19.5, ru: 25.1, rv: 12.6 },
  { designation: 'ISA 75x75x8', mass: 8.9, A: 1138, b: 75, t: 8, cx: 21.4, cy: 21.4, Ixx: 59.0, rxx: 22.8, ru: 28.9, rv: 14.6 },
  { designation: 'ISA 90x90x8', mass: 10.8, A: 1379, b: 90, t: 8, cx: 25.1, cy: 25.1, Ixx: 104.2, rxx: 27.5, ru: 34.9, rv: 17.5 },
  { designation: 'ISA 100x100x10', mass: 14.9, A: 1903, b: 100, t: 10, cx: 28.4, cy: 28.4, Ixx: 177.0, rxx: 30.5, ru: 38.6, rv: 19.4 },
  { designation: 'ISA 110x110x10', mass: 16.5, A: 2106, b: 110, t: 10, cx: 30.8, cy: 30.8, Ixx: 238.4, rxx: 33.6, ru: 42.6, rv: 21.3 },
  { designation: 'ISA 130x130x12', mass: 23.4, A: 2982, b: 130, t: 12, cx: 36.3, cy: 36.3, Ixx: 472.6, rxx: 39.8, ru: 50.4, rv: 25.3 },
  { designation: 'ISA 150x150x15', mass: 33.8, A: 4300, b: 150, t: 15, cx: 42.4, cy: 42.4, Ixx: 896.7, rxx: 45.7, ru: 57.7, rv: 29.2 },
  { designation: 'ISA 200x200x25', mass: 73.9, A: 9410, b: 200, t: 25, cx: 58.7, cy: 58.7, Ixx: 3350, rxx: 59.7, ru: 75.3, rv: 38.7 }
];

export function getISMB(designation) {
  return ISMB_DATA.find(s => s.designation === designation);
}

export function getISA(designation) {
  return ISA_DATA.find(s => s.designation === designation);
}
