import { ICONS } from '../utils/ui.js';

const MODULE_ID = 'is-codes';

const IS_CODES = [
  {
    code: 'IS 456',
    year: '2000',
    title: 'Plain and Reinforced Concrete - Code of Practice',
    desc: 'The master code for all RCC design and construction in India. Covers limit state design for bending, shear, torsion, and serviceability.',
    tags: ['Concrete', 'Design', 'RCC'],
    file: '/Code Books/is.456.2000.pdf'
  },
  {
    code: 'IS 800',
    year: '2007',
    title: 'General Construction in Steel - Code of Practice',
    desc: 'The primary code for structural steel design using the Limit State Method. Covers tension, compression, bending, and connections.',
    tags: ['Steel', 'Design'],
    file: '/Code Books/is.800.2007.pdf'
  },
  {
    code: 'IS 875 (Part 1)',
    year: '1987',
    title: 'Design Loads (Other than Earthquake) - Dead Loads',
    desc: 'Provides unit weights of building materials and stored materials for calculating permanent dead loads.',
    tags: ['Loads', 'Dead Load'],
    file: '/Code Books/is.875.1.1987.pdf'
  },
  {
    code: 'IS 875 (Part 2)',
    year: '1987',
    title: 'Design Loads (Other than Earthquake) - Imposed Loads',
    desc: 'Stipulates minimum live loads (UDL and Point Loads) to be assumed for different building occupancies.',
    tags: ['Loads', 'Live Load'],
    file: '/Code Books/IS-875---2.pdf'
  },
  {
    code: 'IS 875 (Part 3)',
    year: '2015',
    title: 'Design Loads (Other than Earthquake) - Wind Loads',
    desc: 'Guidelines for determining wind speeds, pressures, and forces on buildings based on terrain, height, and topography.',
    tags: ['Loads', 'Wind'],
    file: '/Code Books/is.875.3.2015.pdf'
  },
  {
    code: 'IS 1893 (Part 1)',
    year: '2016',
    title: 'Criteria for Earthquake Resistant Design of Structures',
    desc: 'General provisions and buildings. Covers calculation of design seismic base shear, response spectra, and zone mapping.',
    tags: ['Seismic', 'Earthquake'],
    file: '/Code Books/IS-1893---part-1.pdf'
  },
  {
    code: 'IS 13920',
    year: '2016',
    title: 'Ductile Design and Detailing of RC Structures',
    desc: 'Specific provisions for detailing concrete structures subjected to seismic forces to ensure required ductility.',
    tags: ['Detailing', 'Seismic'],
    file: '/Code Books/IS-13920.pdf'
  },
  {
    code: 'IS 1786',
    year: '2008',
    title: 'High Strength Deformed Steel Bars and Wires',
    desc: 'Specifications for reinforcing bars (TMT bars) used in concrete, outlining mechanical and chemical properties.',
    tags: ['Material', 'Rebar'],
    file: '/Code Books/is.1786.2008.pdf'
  },
  {
    code: 'IS 2062',
    year: '2011',
    title: 'Hot Rolled Medium and High Tensile Structural Steel',
    desc: 'Specifications for structural steel grades (e.g., E250, E350) used in steel structures.',
    tags: ['Material', 'Steel'],
    file: '/Code Books/is.2062.2011.pdf'
  },
  {
    code: 'IS 2911 (Parts 1-4)',
    year: '2010',
    title: 'Design and Construction of Pile Foundations',
    desc: 'Comprehensive code for diverse pile foundations including driven cast in-situ, bored cast in-situ, and timber piles.',
    tags: ['Geotech', 'Piles'],
    file: '/Code Books/is.2911.1.4.2010.pdf'
  },
  {
    code: 'SP 16',
    year: '1980',
    title: 'Design Aids for Reinforced Concrete to IS 456',
    desc: 'The essential handbook providing charts and tables for rapid design of beams, slabs, columns, and footings.',
    tags: ['Handbook', 'RCC'],
    file: '/Code Books/is.sp.16.1980.pdf'
  },
  {
    code: 'SP 34',
    year: '1987',
    title: 'Handbook on Concrete Reinforcement and Detailing',
    desc: 'Provides standard practices for detailing reinforcement in various structural elements like beams, columns, and walls.',
    tags: ['Handbook', 'Detailing'],
    file: '/Code Books/is.sp.34.1987.pdf'
  }
];

export function initIsCodes(container) {
  let cardsHtml = '';
  
  IS_CODES.forEach(c => {
    const tagsHtml = c.tags.map(t => `<span class="badge" style="background: var(--bg-hover); color: var(--text-color); margin-right: 0.5rem;">${t}</span>`).join('');
    
    // SVG Download Icon
    const btnHtml = c.file ? `
      <a href="${c.file}" target="_blank" download title="Download PDF" style="display: flex; align-items: center; justify-content: center; padding: 0.6rem; background: rgba(59, 130, 246, 0.1); color: var(--primary-color); border-radius: 50%; text-decoration: none; border: 1px solid rgba(59, 130, 246, 0.2); transition: background 0.2s;">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
      </a>` : '';
    
    // Enhanced boundary card
    cardsHtml += `
      <div class="card" style="padding: 1.5rem; display: flex; flex-direction: column; height: 100%; border: 1px solid var(--border-color); border-top: 4px solid var(--color-accent);">
        <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 0.75rem;">
          <div>
            <h3 style="margin: 0; color: var(--text-color); font-size: 1.25rem;">${c.code}</h3>
            <span style="font-size: 0.85rem; color: var(--text-muted); font-weight: bold;">[ ${c.year} ]</span>
          </div>
          ${btnHtml}
        </div>
        <h4 style="margin: 0 0 1rem 0; font-size: 1.05rem; line-height: 1.3;">${c.title}</h4>
        <p style="color: var(--text-muted); font-size: 0.9rem; margin-bottom: 1.5rem; flex-grow: 1;">${c.desc}</p>
        <div>${tagsHtml}</div>
      </div>
    `;
  });
  
  container.innerHTML = `
    <div class="calculator-page" id="is-codes-reference">
      <div class="print-header">
        <div class="print-header__brand">Stellar Civil — IS Codes Reference</div>
        <div class="print-header__info"></div>
      </div>

      <div class="calculator-page__header">
        <h2>Indian Standards (IS) Cheatsheet</h2>
        <p>A quick reference directory for essential Indian civil and structural engineering codes.</p>
        <span class="calculator-page__code-ref">
          ${ICONS.info} BIS Registry
        </span>
      </div>
      
      <div class="input-panel" style="background: transparent; border: none; padding: 0;">
        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 1.5rem;">
          ${cardsHtml}
        </div>
      </div>
      
      <div class="print-footer">
        Generated by Stellar Civil | Internal Utility.
      </div>
    </div>
  `;
}
