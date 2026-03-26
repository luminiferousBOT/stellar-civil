/* ═══════════════════════════════════════════════════════════════
   STELLAR CIVIL — Load Constants & Data (IS 875 / IS 1893)
   ═══════════════════════════════════════════════════════════════ */

/* ──────────────────────────────────────────
   UNIT WEIGHTS (IS 875 Part 1) in kN/m³
   ────────────────────────────────────────── */
export const UNIT_WEIGHTS = [
  { id: 'rcc', name: 'Reinforced Cement Concrete (RCC)', weight: 25.0, type: 'Concrete' },
  { id: 'pcc', name: 'Plain Cement Concrete (PCC)', weight: 24.0, type: 'Concrete' },
  { id: 'brick_solid', name: 'Common Burnt Clay Bricks', weight: 19.2, type: 'Masonry' },
  { id: 'brick_flyash', name: 'Fly Ash Bricks', weight: 16.0, type: 'Masonry' },
  { id: 'block_aac', name: 'AAC Blocks', weight: 6.5, type: 'Masonry' },
  { id: 'block_solid', name: 'Solid Concrete Blocks', weight: 21.0, type: 'Masonry' },
  { id: 'steel', name: 'Structural Steel', weight: 78.5, type: 'Metals' },
  { id: 'plaster_cm', name: 'Cement Mortar Plaster', weight: 20.4, type: 'Finishes' },
  { id: 'screed', name: 'Cement Concrete Screed', weight: 24.0, type: 'Finishes' },
  { id: 'marble', name: 'Marble Stone', weight: 26.5, type: 'Finishes' },
  { id: 'granite', name: 'Granite Stone', weight: 26.5, type: 'Finishes' },
  { id: 'tiles_ceramic', name: 'Ceramic Tiles', weight: 20.0, type: 'Finishes' },
  { id: 'timber', name: 'Timber (Hardwood)', weight: 8.5, type: 'Wood' },
  { id: 'soil_dry', name: 'Dry Soil', weight: 16.0, type: 'Earth & Water' },
  { id: 'soil_sat', name: 'Saturated Soil', weight: 20.0, type: 'Earth & Water' },
  { id: 'water', name: 'Water', weight: 9.81, type: 'Earth & Water' },
  { id: 'glass', name: 'Glass', weight: 25.0, type: 'Miscellaneous' },
  { id: 'gypsum', name: 'Gypsum Board / False Ceiling', weight: 8.0, type: 'Miscellaneous' }
];

/* ──────────────────────────────────────────
   LIVE LOADS (IS 875 Part 2)
   UDL in kN/m² | Point Load in kN
   ────────────────────────────────────────── */
export const LIVE_LOADS = [
  { group: 'Residential Buildings', usage: 'Living rooms, Bed rooms', udl: 2.0, point: 1.8 },
  { group: 'Residential Buildings', usage: 'Kitchens', udl: 2.0, point: 1.8 },
  { group: 'Residential Buildings', usage: 'Corridors, Passages, Staircases', udl: 3.0, point: 4.5 },
  { group: 'Residential Buildings', usage: 'Balconies', udl: 3.0, point: 1.5 },
  
  { group: 'Educational Buildings', usage: 'Classrooms, Lecture rooms', udl: 3.0, point: 2.7 },
  { group: 'Educational Buildings', usage: 'Corridors, Passages, Stairs', udl: 4.0, point: 4.5 },
  { group: 'Educational Buildings', usage: 'Reading rooms (Libraries)', udl: 3.0, point: 4.5 },
  { group: 'Educational Buildings', usage: 'Stack rooms (Libraries)', udl: 6.0, point: 4.5 },
  
  { group: 'Office Buildings', usage: 'Rooms for general use', udl: 2.5, point: 2.7 },
  { group: 'Office Buildings', usage: 'Rooms with computing/filing', udl: 3.0, point: 2.7 },
  { group: 'Office Buildings', usage: 'Corridors, Stairs, Balconies', udl: 4.0, point: 4.5 },
  
  { group: 'Commercial / Retail', usage: 'Shop floors', udl: 4.0, point: 3.6 },
  { group: 'Commercial / Retail', usage: 'Corridors and Stairs', udl: 4.0, point: 4.5 },
  
  { group: 'Assembly Buildings', usage: 'Fixed seating (Theatres)', udl: 4.0, point: 0 },
  { group: 'Assembly Buildings', usage: 'No seating (Dance halls, Gyms)', udl: 5.0, point: 3.6 },
  
  { group: 'Roofs', usage: 'Flat/Pitched covered (Access provided)', udl: 1.5, point: 1.8 },
  { group: 'Roofs', usage: 'Flat/Pitched covered (No access)', udl: 0.75, point: 0.9 }
];

/* ──────────────────────────────────────────
   WIND LOAD DATA (IS 875 Part 3: 2015)
   ────────────────────────────────────────── */

// Basic Wind Speeds for major cities (Appendix A)
export const CITY_WIND_SPEEDS = [
  { city: 'Agra', vb: 47 },
  { city: 'Ahmedabad', vb: 39 },
  { city: 'Bengaluru', vb: 33 },
  { city: 'Bhopal', vb: 39 },
  { city: 'Bhubaneswar', vb: 50 },
  { city: 'Chandigarh', vb: 47 },
  { city: 'Chennai', vb: 50 },
  { city: 'Delhi', vb: 47 },
  { city: 'Guwahati', vb: 50 },
  { city: 'Hyderabad', vb: 44 },
  { city: 'Jaipur', vb: 47 },
  { city: 'Kochi', vb: 39 },
  { city: 'Kolkata', vb: 50 },
  { city: 'Lucknow', vb: 47 },
  { city: 'Mumbai', vb: 44 },
  { city: 'Patna', vb: 47 },
  { city: 'Pune', vb: 39 },
  { city: 'Srinagar', vb: 39 },
  { city: 'Trivandrum', vb: 39 },
  { city: 'Visakhapatnam', vb: 50 }
];

// k1 Risk Coefficient (Table 1) - using standard default 50 year design life
// For 50 years, k1 = 1.0 for all basic wind speeds.

// k2 Terrain and Height Factor (Table 2)
// Array mapping structure: [height, Cat1, Cat2, Cat3, Cat4]
const K2_TABLE = [
  [10, 1.05, 1.00, 0.91, 0.80],
  [15, 1.09, 1.05, 0.97, 0.80],
  [20, 1.12, 1.07, 1.01, 0.80],
  [30, 1.15, 1.12, 1.06, 0.97],
  [50, 1.20, 1.17, 1.12, 1.10],
  [100, 1.26, 1.24, 1.20, 1.20],
  [150, 1.30, 1.28, 1.24, 1.24],
  [200, 1.32, 1.30, 1.27, 1.27],
  [250, 1.34, 1.32, 1.29, 1.28],
  [300, 1.35, 1.34, 1.31, 1.30],
  [400, 1.37, 1.36, 1.34, 1.32],
  [500, 1.39, 1.38, 1.36, 1.34]
];

export function getWindK2(height, category) {
  // category is 1, 2, 3, or 4
  const catIndex = category; // 1 to 4 maps to index 1 to 4 in K2_TABLE row
  
  if (height <= K2_TABLE[0][0]) return K2_TABLE[0][catIndex];
  if (height >= K2_TABLE[K2_TABLE.length - 1][0]) return K2_TABLE[K2_TABLE.length - 1][catIndex];
  
  for (let i = 0; i < K2_TABLE.length - 1; i++) {
    if (height === K2_TABLE[i][0]) return K2_TABLE[i][catIndex];
    
    if (height > K2_TABLE[i][0] && height < K2_TABLE[i+1][0]) {
      // Linear interpolation
      const h1 = K2_TABLE[i][0], h2 = K2_TABLE[i+1][0];
      const k1 = K2_TABLE[i][catIndex], k2 = K2_TABLE[i+1][catIndex];
      return k1 + (height - h1) * (k2 - k1) / (h2 - h1);
    }
  }
  return 1.0;
}


/* ──────────────────────────────────────────
   SEISMIC LOAD DATA (IS 1893 Part 1: 2016)
   ────────────────────────────────────────── */

// Zone Factors (Table 3)
export const SEISMIC_ZONES = [
  { zone: 'II', Z: 0.10, factor: 0.10 },
  { zone: 'III', Z: 0.16, factor: 0.16 },
  { zone: 'IV', Z: 0.24, factor: 0.24 },
  { zone: 'V', Z: 0.36, factor: 0.36 }
];

// Importance Factors (Table 8)
export const IMPORTANCE_FACTORS = [
  { id: 'I_1.5', name: 'Important Service/Community Buildings (Hospitals, Schools)', I: 1.5 },
  { id: 'I_1.2', name: 'Residential/Commercial with >200 occupancy', I: 1.2 },
  { id: 'I_1.0', name: 'All other buildings', I: 1.0 }
];

// Response Reduction Factors (Table 9)
export const RESPONSE_REDUCTION = [
  { id: 'OMRF', name: 'Ordinary RC Moment-Resisting Frame (OMRF)', R: 3.0 },
  { id: 'SMRF', name: 'Special RC Moment-Resisting Frame (SMRF)', R: 5.0 },
  { id: 'STEEL_OMRF', name: 'Steel OMRF', R: 4.0 },
  { id: 'STEEL_SMRF', name: 'Steel SMRF', R: 5.0 },
  { id: 'STEEL_EBF', name: 'Steel Eccentrically Braced Frame', R: 5.0 },
  { id: 'MASONRY_URM', name: 'Unreinforced Masonry', R: 1.5 },
  { id: 'MASONRY_RM', name: 'Reinforced Masonry', R: 3.0 }
];

// Soil Type Spectra Sa/g (Fig 2)
export function getSaG(Ta, soilType) {
  // soilType: 1 (Hard/Rocky), 2 (Medium), 3 (Soft)
  if (Ta === 0) return 1.0; // Peak Ground Acceleration
  
  if (soilType === 1) { // Rock or Hard Soil
    if (Ta < 0.10) return 1.0 + 15 * Ta;
    if (Ta >= 0.10 && Ta <= 0.40) return 2.5;
    if (Ta > 0.40 && Ta <= 4.00) return 1.0 / Ta;
  } 
  else if (soilType === 2) { // Medium Soil
    if (Ta < 0.10) return 1.0 + 15 * Ta;
    if (Ta >= 0.10 && Ta <= 0.55) return 2.5;
    if (Ta > 0.55 && Ta <= 4.00) return 1.36 / Ta;
  }
  else if (soilType === 3) { // Soft Soil
    if (Ta < 0.10) return 1.0 + 15 * Ta;
    if (Ta >= 0.10 && Ta <= 0.67) return 2.5;
    if (Ta > 0.67 && Ta <= 4.00) return 1.67 / Ta;
  }
  
  // Ta > 4.00 (fallback conservatively to end of curve value)
  if (soilType === 1) return 1.0 / 4.0;
  if (soilType === 2) return 1.36 / 4.0;
  if (soilType === 3) return 1.67 / 4.0;
  
  return 1.0;
}
