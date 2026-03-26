/* ═══════════════════════════════════════════════════════════════
   STELLAR CIVIL — Main Application Entry
   ═══════════════════════════════════════════════════════════════ */

import { isDisclaimerAcknowledged, setDisclaimerAcknowledged, getThemePreference, setThemePreference } from './utils/storage.js';
import { ICONS } from './utils/ui.js';
import { initRectangularSlab } from './calculators/slab-design.js';
import { initSinglyBeam } from './calculators/singly-beam.js';
import { initDoublyBeam } from './calculators/doubly-beam.js';
import { initTBeam } from './calculators/t-beam.js';
import { initShortColumn } from './calculators/short-column.js';
import { initIsolatedFooting } from './calculators/footing.js';
import { initStaircase } from './calculators/staircase.js';
import { initRetainingWall } from './calculators/retaining-wall.js';
import { initShearDesign } from './calculators/shear-design.js';
import { initDevLength } from './calculators/dev-length.js';
import { initDeflection } from './calculators/deflection.js';
import { initCrackWidth } from './calculators/crack-width.js';
import { initTensionMember } from './calculators/tension-member.js';
import { initCompressionMember } from './calculators/compression-member.js';
import { initSteelBeam } from './calculators/steel-beam.js';
import { initFilletWeld } from './calculators/fillet-weld.js';
import { initBoltedConnection } from './calculators/bolt-design.js';
import { initDeadLoad } from './calculators/dead-load.js';
import { initLiveLoad } from './calculators/live-load.js';
import { initWindLoad } from './calculators/wind-load.js';
import { initSeismicLoad } from './calculators/seismic-load.js';
import { initUnitConverter } from './calculators/unit-converter.js';
import { initMaterialProperties } from './calculators/material-properties.js';
import { initRebarReference } from './calculators/rebar-reference.js';
import { initIsCodes } from './calculators/is-codes.js';
import { initBbsGenerator } from './calculators/bbs-generator.js';

/* ──────────────────────────────────────────
   Navigation Structure
   ────────────────────────────────────────── */
const NAV_GROUPS = [
  {
    id: 'rcc',
    label: 'RCC Design (IS 456)',
    items: [
      { id: 'slab-design', num: '1.1', title: 'Rectangular Slab Design' },
      { id: 'beam-singly', num: '1.2', title: 'Singly Reinforced Beam' },
      { id: 'beam-doubly', num: '1.3', title: 'Doubly Reinforced Beam' },
      { id: 'beam-t', num: '1.4', title: 'T-Beam / L-Beam Design' },
      { id: 'column-short', num: '1.5', title: 'Short Column Design' },
      { id: 'footing', num: '1.6', title: 'Isolated Footing Design' },
      { id: 'staircase', num: '1.7', title: 'Staircase Design' },
      { id: 'retaining-wall', num: '1.8', title: 'Cantilever Retaining Wall' }
    ]
  },
  {
    id: 'limit-state',
    label: 'Limit State Checks',
    items: [
      { id: 'shear-design', num: '2.1', title: 'Shear & Stirrup Design' },
      { id: 'dev-length', num: '2.2', title: 'Development Length' },
      { id: 'deflection', num: '2.3', title: 'Deflection Check' },
      { id: 'crack-width', num: '2.4', title: 'Crack Width Check' }
    ]
  },
  {
    id: 'steel',
    label: 'Steel Design (IS 800)',
    items: [
      { id: 'tension-member', num: '3.1', title: 'Tension Member' },
      { id: 'compression-member', num: '3.2', title: 'Compression Member' },
      { id: 'steel-beam', num: '3.3', title: 'Beam Design' },
      { id: 'fillet-weld', num: '3.4', title: 'Fillet Weld Design' },
      { id: 'bolt-design', num: '3.5', title: 'Bolted Connection' }
    ]
  },
  {
    id: 'loads',
    label: 'Load Calculations',
    items: [
      { id: 'dead-load', num: '4.1', title: 'Dead Load Calculator' },
      { id: 'live-load', num: '4.2', title: 'Live Load Reference' },
      { id: 'wind-load', num: '4.3', title: 'Wind Load Calculator' },
      { id: 'seismic-load', num: '4.4', title: 'Seismic Load Calculator' }
    ]
  },
  {
    id: 'utilities',
    label: 'Utilities & Reference',
    items: [
      { id: 'unit-converter', num: '6.1', title: 'Unit Converter' },
      { id: 'material-props', num: '6.2', title: 'Material Properties' },
      { id: 'rebar-reference', num: '6.3', title: 'Rebar Reference' },
      { id: 'is-cheatsheet', num: '6.4', title: 'IS Code Cheatsheet' },
      { id: 'bbs-generator', num: '6.5', title: 'Bar Bending Schedule' }
    ]
  }
];

// Calculator module registry
const MODULE_REGISTRY = {};

/**
 * Register a calculator module
 */
export function registerModule(id, module) {
  MODULE_REGISTRY[id] = module;
}

// Register implemented modules
registerModule('slab-design', { render: initRectangularSlab });
registerModule('beam-singly', { render: initSinglyBeam });
registerModule('beam-doubly', { render: initDoublyBeam });
registerModule('beam-t', { render: initTBeam });
registerModule('column-short', { render: initShortColumn });
registerModule('footing', { render: initIsolatedFooting });
registerModule('staircase', { render: initStaircase });
registerModule('retaining-wall', { render: initRetainingWall });
registerModule('shear-design', { render: initShearDesign });
registerModule('dev-length', { render: initDevLength });
registerModule('deflection', { render: initDeflection });
registerModule('crack-width', { render: initCrackWidth });
registerModule('tension-member', { render: initTensionMember });
registerModule('compression-member', { render: initCompressionMember });
registerModule('steel-beam', { render: initSteelBeam });
registerModule('fillet-weld', { render: initFilletWeld });
registerModule('bolt-design', { render: initBoltedConnection });
registerModule('dead-load', { render: initDeadLoad });
registerModule('live-load', { render: initLiveLoad });
registerModule('wind-load', { render: initWindLoad });
registerModule('seismic-load', { render: initSeismicLoad });
registerModule('unit-converter', { render: initUnitConverter });
registerModule('material-props', { render: initMaterialProperties });
registerModule('rebar-reference', { render: initRebarReference });
registerModule('is-cheatsheet', { render: initIsCodes });
registerModule('bbs-generator', { render: initBbsGenerator });

/* ──────────────────────────────────────────
   App Initialization
   ────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  renderSidebar();
  initDisclaimer();
  initRouter();
  initKeyboardShortcuts();

  // Handle sidebar on mobile
  initMobileSidebar();
});

/* ──────────────────────────────────────────
   Theme (Dark Mode)
   ────────────────────────────────────────── */
function initTheme() {
  const theme = getThemePreference();
  document.documentElement.setAttribute('data-theme', theme);

  const toggle = document.getElementById('theme-toggle');
  if (toggle) {
    toggle.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme');
      const next = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      setThemePreference(next);
    });
  }
}

/* ──────────────────────────────────────────
   Sidebar Navigation
   ────────────────────────────────────────── */
function renderSidebar() {
  const navEl = document.getElementById('sidebar-nav');
  if (!navEl) return;

  navEl.innerHTML = NAV_GROUPS.map(group => `
    <div class="nav-group" data-group="${group.id}">
      <div class="nav-group__header" data-group-toggle="${group.id}">
        <span class="nav-group__label">${group.label}</span>
        <svg class="nav-group__chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </div>
      <div class="nav-group__items">
        ${group.items.map(item => `
          <a class="nav-item" href="#/${item.id}" data-module="${item.id}">
            <span class="nav-item__number">${item.num}</span>
            ${item.title}
          </a>
        `).join('')}
      </div>
    </div>
  `).join('');

  // Group collapse toggle
  navEl.querySelectorAll('[data-group-toggle]').forEach(header => {
    header.addEventListener('click', () => {
      header.parentElement.classList.toggle('collapsed');
    });
  });
}

/* ──────────────────────────────────────────
   Mobile Sidebar
   ────────────────────────────────────────── */
function initMobileSidebar() {
  const hamburger = document.getElementById('hamburger-btn');
  const sidebar = document.querySelector('.sidebar');
  const overlay = document.querySelector('.sidebar-overlay');
  const closeBtn = document.querySelector('.sidebar__close');

  function openSidebar() {
    sidebar?.classList.add('open');
    overlay?.classList.add('visible');
  }

  function closeSidebar() {
    sidebar?.classList.remove('open');
    overlay?.classList.remove('visible');
  }

  hamburger?.addEventListener('click', openSidebar);
  overlay?.addEventListener('click', closeSidebar);
  closeBtn?.addEventListener('click', closeSidebar);

  // Close sidebar when nav item clicked on mobile
  document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', () => {
      if (window.innerWidth <= 1200) closeSidebar();
    });
  });
}

/* ──────────────────────────────────────────
   Hash Router
   ────────────────────────────────────────── */
function initRouter() {
  window.addEventListener('hashchange', handleRoute);
  handleRoute(); // Handle initial route
}

async function handleRoute() {
  const hash = window.location.hash.replace('#/', '').replace('#', '');
  const mainContent = document.getElementById('main-content');
  const breadcrumb = document.getElementById('breadcrumb');

  // Update active nav item
  document.querySelectorAll('.nav-item').forEach(item => {
    item.classList.toggle('active', item.dataset.module === hash);
  });

  if (!hash || hash === '') {
    // Show welcome page
    renderWelcomePage(mainContent);
    if (breadcrumb) breadcrumb.innerHTML = '<strong>Workspace</strong>';
    return;
  }

  // Find module info
  let moduleInfo = null;
  let groupInfo = null;
  for (const group of NAV_GROUPS) {
    const item = group.items.find(i => i.id === hash);
    if (item) {
      moduleInfo = item;
      groupInfo = group;
      break;
    }
  }

  if (!moduleInfo) {
    mainContent.innerHTML = `
      <div class="main-content__inner">
        <div class="welcome-page">
          <h1>Module Not Found</h1>
          <p>The requested calculator module was not found.</p>
        </div>
      </div>`;
    return;
  }

  // Update breadcrumb
  if (breadcrumb) {
    breadcrumb.innerHTML = `${groupInfo.label} <span>›</span> <strong>${moduleInfo.title}</strong>`;
  }

  // Check if module is registered
  if (MODULE_REGISTRY[hash]) {
    mainContent.innerHTML = '<div class="main-content__inner" id="calculator-container"></div>';
    const container = document.getElementById('calculator-container');
    try {
      await MODULE_REGISTRY[hash].render(container);
    } catch (err) {
      console.error(`Error rendering module ${hash}:`, err);
      container.innerHTML = `
        <div class="calculator-page">
          <div class="summary-card summary-card--fail" style="max-width:500px;">
            <div class="summary-card__label">Error</div>
            <div class="summary-card__value" style="font-size:var(--text-md)">Failed to load module</div>
            <div class="summary-card__sub">${err.message}</div>
          </div>
        </div>`;
    }
  } else {
    // Module not yet implemented
    mainContent.innerHTML = `
      <div class="main-content__inner">
        <div class="calculator-page">
          <div class="calculator-page__header">
            <h2>${moduleInfo.num} — ${moduleInfo.title}</h2>
            <p>This calculator module will be available in an upcoming update.</p>
            <span class="calculator-page__code-ref">
              ${ICONS.info} Coming Soon
            </span>
          </div>
          <div class="welcome-page" style="min-height:40vh;">
            <div class="welcome-page__icon">${ICONS.calculator}</div>
            <h1>Under Development</h1>
            <p>This module is part of the Stellar Civil calculator suite and will be implemented in a future phase. Please check back soon.</p>
          </div>
        </div>
      </div>`;
  }

  // Scroll to top
  mainContent.scrollTop = 0;
}

function renderWelcomePage(container) {
  const totalModules = NAV_GROUPS.reduce((sum, g) => sum + g.items.length, 0);
  const implementedCount = Object.keys(MODULE_REGISTRY).length;

  container.innerHTML = `
    <div class="main-content__inner">
      <div class="welcome-page">
        <div class="welcome-page__icon">${ICONS.building}</div>
        <h1>Welcome to Stellar Civil</h1>
        <p>IS Code Design Calculators for Structural Engineers. Select a calculator from the sidebar to get started.</p>

        <div class="welcome-page__grid">
          ${NAV_GROUPS.map(group => `
            <div class="welcome-card" onclick="location.hash='#/${group.items[0].id}'">
              <div class="welcome-card__count">${group.items.length}</div>
              <h3>${group.label}</h3>
              <p>${group.items.map(i => i.title).slice(0, 3).join(', ')}${group.items.length > 3 ? '...' : ''}</p>
            </div>
          `).join('')}
        </div>
      </div>

      <footer class="app-footer">
        <p>Stellar Civil India | Based on IS 456:2000, IS 800:2007, IS 875:2015, IS 1893:2016 | For educational and reference use only</p>
      </footer>
    </div>`;
}

/* ──────────────────────────────────────────
   Disclaimer Modal
   ────────────────────────────────────────── */
function initDisclaimer() {
  if (isDisclaimerAcknowledged()) {
    const modal = document.getElementById('disclaimer-modal');
    if (modal) modal.remove();
    return;
  }

  const modal = document.getElementById('disclaimer-modal');
  if (modal) {
    modal.classList.add('visible');

    const btn = document.getElementById('disclaimer-accept');
    btn?.addEventListener('click', () => {
      setDisclaimerAcknowledged();
      modal.classList.remove('visible');
      setTimeout(() => modal.remove(), 300);
    });
  }
}

/* ──────────────────────────────────────────
   Keyboard Shortcuts
   ────────────────────────────────────────── */
function initKeyboardShortcuts() {
  document.addEventListener('keydown', (e) => {
    // Enter → Calculate
    if (e.key === 'Enter' && !e.ctrlKey && !e.metaKey) {
      const calcBtn = document.getElementById('btn-calculate');
      if (calcBtn && !calcBtn.disabled && document.activeElement?.classList.contains('form-input')) {
        e.preventDefault();
        calcBtn.click();
      }
    }

    // Ctrl+P → Export PDF
    if ((e.ctrlKey || e.metaKey) && e.key === 'p') {
      const pdfBtn = document.getElementById('btn-export-pdf');
      if (pdfBtn && !pdfBtn.disabled) {
        e.preventDefault();
        pdfBtn.click();
      }
    }

    // Escape → collapse results
    if (e.key === 'Escape') {
      const results = document.querySelector('.results-panel');
      if (results) results.style.display = results.style.display === 'none' ? '' : 'none';
    }

    // Ctrl+R → Reset (prevent browser reload)
    if ((e.ctrlKey || e.metaKey) && e.key === 'r') {
      const clearBtn = document.getElementById('btn-clear');
      if (clearBtn) {
        e.preventDefault();
        clearBtn.click();
      }
    }
  });
}
