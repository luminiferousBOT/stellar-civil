/* ═══════════════════════════════════════════════════════════════
   STELLAR CIVIL — IS Code Data: Reinforcement Bar Data (IS 1786)
   ═══════════════════════════════════════════════════════════════ */

export const REBAR_DATA = [
  { dia: 6,  area: 28.27,   weight: 0.222, perimeter: 18.85 },
  { dia: 8,  area: 50.27,   weight: 0.395, perimeter: 25.13 },
  { dia: 10, area: 78.54,   weight: 0.617, perimeter: 31.42 },
  { dia: 12, area: 113.10,  weight: 0.888, perimeter: 37.70 },
  { dia: 16, area: 201.06,  weight: 1.578, perimeter: 50.27 },
  { dia: 20, area: 314.16,  weight: 2.466, perimeter: 62.83 },
  { dia: 25, area: 490.87,  weight: 3.854, perimeter: 78.54 },
  { dia: 32, area: 804.25,  weight: 6.313, perimeter: 100.53 },
  { dia: 40, area: 1256.64, weight: 9.865, perimeter: 125.66 }
];

/** Get rebar data by diameter */
export function getRebarByDia(dia) {
  return REBAR_DATA.find(r => r.dia === dia);
}

/** Get area of n bars of given diameter */
export function getBarArea(dia, n = 1) {
  const bar = getRebarByDia(dia);
  return bar ? bar.area * n : 0;
}

/** Alias for getBarArea */
export const getRebarArea = getBarArea;

/** Area per meter width for given dia and spacing (mm) */
export function areaPerMeter(dia, spacing) {
  const bar = getRebarByDia(dia);
  if (!bar || spacing <= 0) return 0;
  return (bar.area * 1000) / spacing;
}

/** Find suitable bar dia and spacing for required Ast per meter */
export function findBarSpacing(astRequired, preferredDias = [8, 10, 12, 16, 20]) {
  const results = [];
  for (const dia of preferredDias) {
    const bar = getRebarByDia(dia);
    if (!bar) continue;
    // Spacing = (area of 1 bar × 1000) / Ast
    const spacing = (bar.area * 1000) / astRequired;
    // Round down to nearest 25mm
    const spacingRounded = Math.floor(spacing / 25) * 25;
    if (spacingRounded >= 75 && spacingRounded <= 300) {
      const astProvided = (bar.area * 1000) / spacingRounded;
      results.push({
        dia,
        spacing: spacingRounded,
        astProvided: Math.round(astProvided * 100) / 100,
        astRequired
      });
    }
  }
  return results;
}

/** Standard bar diameters */
export const BAR_DIAMETERS = [6, 8, 10, 12, 16, 20, 25, 32, 40];
