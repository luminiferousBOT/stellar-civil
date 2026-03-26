/* ═══════════════════════════════════════════════════════════════
   STELLAR CIVIL — UI Rendering Helpers
   ═══════════════════════════════════════════════════════════════ */

/**
 * Create SVG icons used throughout the app
 */
export const ICONS = {
  chevron: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>`,
  moon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`,
  sun: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`,
  menu: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>`,
  close: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`,
  calculator: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="2" width="16" height="20" rx="2"></rect><line x1="8" y1="6" x2="16" y2="6"></line><line x1="16" y1="14" x2="16" y2="18"></line><line x1="8" y1="10" x2="8" y2="10.01"></line><line x1="12" y1="10" x2="12" y2="10.01"></line><line x1="16" y1="10" x2="16" y2="10.01"></line><line x1="8" y1="14" x2="8" y2="14.01"></line><line x1="12" y1="14" x2="12" y2="14.01"></line><line x1="8" y1="18" x2="8" y2="18.01"></line><line x1="12" y1="18" x2="12" y2="18.01"></line></svg>`,
  download: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>`,
  info: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>`,
  shield: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>`,
  play: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>`,
  refresh: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 4 23 10 17 10"></polyline><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path></svg>`,
  check: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>`,
  warning: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>`,
  x: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>`,
  building: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect><path d="M9 22v-4h6v4"></path><path d="M8 6h.01"></path><path d="M16 6h.01"></path><path d="M12 6h.01"></path><path d="M12 10h.01"></path><path d="M12 14h.01"></path><path d="M16 10h.01"></path><path d="M16 14h.01"></path><path d="M8 10h.01"></path><path d="M8 14h.01"></path></svg>`
};

/**
 * Render an input field with label, unit, tooltip, and validation
 */
export function renderInputField(field) {
  const hasUnit = !!field.unit;
  const tooltip = field.tooltip ? `
    <span class="tooltip-trigger">
      <span class="tooltip-icon">?</span>
      <span class="tooltip-content">${field.tooltip}</span>
    </span>` : '';

  if (field.type === 'select') {
    const options = field.options.map(opt => {
      const val = typeof opt === 'object' ? opt.value : opt;
      const label = typeof opt === 'object' ? opt.label : opt;
      const selected = val == field.default ? 'selected' : '';
      return `<option value="${val}" ${selected}>${label}</option>`;
    }).join('');

    return `
      <div class="form-group">
        <label class="form-group__label" for="${field.id}">
          ${field.label} ${tooltip}
        </label>
        <select class="form-select" id="${field.id}" name="${field.id}"
          ${field.validate ? `data-validate data-name="${field.label}"` : ''}>
          ${options}
        </select>
        <span class="form-group__error"></span>
      </div>`;
  }

  return `
    <div class="form-group">
      <label class="form-group__label" for="${field.id}">
        ${field.label}
        ${hasUnit ? `<span class="unit">(${field.unit})</span>` : ''}
        ${tooltip}
      </label>
      <div class="form-input-wrapper ${hasUnit ? 'has-unit' : ''}">
        <input type="number" class="form-input ${hasUnit ? 'form-input--with-unit' : ''}"
          id="${field.id}" name="${field.id}"
          value="${field.default ?? ''}"
          step="${field.step || 'any'}"
          ${field.min !== undefined ? `min="${field.min}"` : ''}
          ${field.max !== undefined ? `max="${field.max}"` : ''}
          ${field.validate !== false ? `data-validate data-min="${field.min}" data-max="${field.max}" data-name="${field.label}"` : ''}
          placeholder="${field.placeholder || ''}"
        />
        ${hasUnit ? `<span class="form-input__unit">${field.unit}</span>` : ''}
        <svg class="validation-icon icon-valid" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
        <svg class="validation-icon icon-invalid" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>
      </div>
      <span class="form-group__error"></span>
    </div>`;
}

/** Alias for renderSummaryCards used in newer modules */
export const renderResultSummary = renderSummaryCards;

/**
 * Render an input panel (group of inputs)
 */
export function renderInputPanel(title, fields, iconHtml = '') {
  const fieldsHtml = fields.map(f => renderInputField(f)).join('');
  return `
    <div class="input-panel">
      <h3 class="input-panel__title">${iconHtml} ${title}</h3>
      <div class="input-grid">
        ${fieldsHtml}
      </div>
    </div>`;
}

/**
 * Render summary cards (Layer 1)
 */
export function renderSummaryCards(cards) {
  const html = cards.map(card => `
    <div class="summary-card summary-card--${card.status || 'info'}">
      <div class="summary-card__label">${card.label}</div>
      <div class="summary-card__value">${card.value}</div>
      ${card.sub ? `<div class="summary-card__sub">${card.sub}</div>` : ''}
    </div>
  `).join('');

  return `<div class="summary-cards">${html}</div>`;
}

/**
 * Render step-by-step calculation table (Layer 2)
 * @param {Array} steps - [{step, description, formula, value, unit}]
 */
export function renderStepTable(title, steps) {
  const rows = steps.map(s => `
    <tr>
      <td class="step-num">${s.step}</td>
      <td>${s.description || s.title || ''}</td>
      <td>${s.formula ? `<span class="formula">${s.formula}</span>` : '—'}</td>
      <td class="value">${s.value || s.result || ''}</td>
      <td class="unit">${s.unit || ''}</td>
    </tr>
  `).join('');

  return `
    <div class="step-table-container">
      <div class="step-table-container__header">
        <h4>${title}</h4>
      </div>
      <div class="step-table-wrapper">
        <table class="step-table">
          <thead>
            <tr>
              <th>Step</th>
              <th>Description</th>
              <th>Formula / IS Clause</th>
              <th>Calculated Value</th>
              <th>Unit</th>
            </tr>
          </thead>
          <tbody>${rows}</tbody>
        </table>
      </div>
    </div>`;
}

/**
 * Render design summary table (Layer 3)
 * @param {Array<string>} headers
 * @param {Array<Array>} rows
 */
export function renderDesignTable(title, headers, rows) {
  const headerHtml = headers.map(h => `<th>${h}</th>`).join('');
  const rowsHtml = rows.map(row => {
    const cells = row.map(cell => {
      if (typeof cell === 'object' && cell.status) {
        return `<td class="status-${cell.status}">${cell.text}</td>`;
      }
      return `<td>${cell}</td>`;
    }).join('');
    return `<tr>${cells}</tr>`;
  }).join('');

  return `
    <div class="design-table-container">
      <div class="design-table-container__header">
        <h4>${title}</h4>
      </div>
      <table class="design-table">
        <thead><tr>${headerHtml}</tr></thead>
        <tbody>${rowsHtml}</tbody>
      </table>
    </div>`;
}

/**
 * Render compliance checklist
 * @param {Array} items - [{status: 'pass'|'fail'|'warn', text, clause}]
 */
export function renderComplianceChecks(items) {
  const icons = { pass: '✅', fail: '❌', warn: '⚠️' };
  
  const html = items.map(item => {
    // Universal mapper for the wildly varied compliance object structures
    let mainText = '';
    
    if (item.text && !item.label) {
      mainText = item.text;
    } else if (item.label && item.text) {
      mainText = `<strong>${item.label}:</strong> ${item.text}`;
    } else if (item.label && item.value !== undefined && item.limit !== undefined) {
      const unit = item.unit ? ` ${item.unit}` : '';
      mainText = `<strong>${item.label}:</strong> ${item.value}${unit} (Limit: ${item.limit}${unit})`;
    } else if (item.label) {
      mainText = `<strong>${item.label}</strong>`;
    } else {
      mainText = item.text || 'Check Item';
    }

    const reference = item.clause || item.ref || '';
    
    return `
    <div class="compliance-item compliance-item--${item.status}">
      <span class="compliance-item__icon">${icons[item.status]}</span>
      <div>
        <span class="compliance-item__text">${mainText}</span>
        ${reference ? `<br><span class="compliance-item__clause">${reference}</span>` : ''}
      </div>
    </div>
    `;
  }).join('');

  return `
    <div class="compliance-section">
      <h4>IS Code Compliance Checks</h4>
      ${html}
    </div>`;
}

/**
 * Render assumptions box (collapsible)
 */
export function renderAssumptions(items) {
  const listHtml = items.map(i => `<li>${i}</li>`).join('');
  return `
    <div class="assumptions-box">
      <div class="assumptions-box__header" onclick="this.parentElement.classList.toggle('collapsed')">
        <span class="assumptions-box__title">⚠ Assumptions & Limitations</span>
        <svg class="assumptions-box__chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"></polyline></svg>
      </div>
      <div class="assumptions-box__content">
        <ul>${listHtml}</ul>
      </div>
    </div>`;
}

/**
 * Render action bar with Calculate and Clear buttons
 */
export function renderActionBar(calcId = 'btn-calculate', clearId = 'btn-clear') {
  return `
    <div class="action-bar">
      <div class="btn-group">
        <button class="btn btn-primary btn-lg" id="${calcId}">
          ${ICONS.play} Calculate
        </button>
        <button class="btn btn-secondary" id="${clearId}">
          ${ICONS.refresh} Clear All
        </button>
      </div>
      <div class="btn-group">
        <button class="btn btn-secondary btn-sm" id="btn-export-pdf" disabled>
          ${ICONS.download} Export PDF
        </button>
        <button class="btn btn-secondary btn-sm" id="btn-export-csv" disabled>
          ${ICONS.download} Export CSV
        </button>
      </div>
    </div>`;
}

/**
 * Show a toast notification
 */
export function showToast(message, duration = 3000) {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `${ICONS.info} <span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.classList.add('leaving');
    setTimeout(() => toast.remove(), 300);
  }, duration);
}

/**
 * Show/hide/update the sticky summary bar
 */
export function updateStickyBar(items) {
  let bar = document.querySelector('.sticky-bar');
  if (!bar) {
    bar = document.createElement('div');
    bar.className = 'sticky-bar';
    document.body.appendChild(bar);
  }

  if (!items || items.length === 0) {
    bar.classList.remove('visible');
    return;
  }

  bar.innerHTML = items.map(item => `
    <div class="sticky-bar__item">
      <span class="sticky-bar__label">${item.label}:</span>
      <span class="sticky-bar__value">${item.value}</span>
    </div>
  `).join('');

  bar.classList.add('visible');
}

/**
 * Get all input values from a container
 */
export function getInputValues(container) {
  const values = {};
  container.querySelectorAll('.form-input, .form-select, .calc-input').forEach(el => {
    const raw = el.value;
    if (el.type === 'number') {
      values[el.id] = parseFloat(raw);
    } else if (!isNaN(raw) && raw !== '') {
      // Select fields with numeric values (fck, fy, bar dia, panel type)
      values[el.id] = parseFloat(raw);
    } else {
      values[el.id] = raw;
    }
  });
  return values;
}

/**
 * Set input values in a container
 */
export function setInputValues(container, values) {
  if (!values) return;
  Object.entries(values).forEach(([id, value]) => {
    const el = container.querySelector(`#${id}`);
    if (el) el.value = value;
  });
}
