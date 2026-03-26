/* ═══════════════════════════════════════════════════════════════
   STELLAR CIVIL — Centralized Validation Library
   ═══════════════════════════════════════════════════════════════ */

/**
 * Validate a numeric input value
 * @param {*} value - The input value
 * @param {number} min - Minimum allowed value
 * @param {number} max - Maximum allowed value
 * @param {string} name - Display name of the parameter
 * @returns {{valid: boolean, message: string}}
 */
export function validate(value, min, max, name) {
  if (value === '' || value === null || value === undefined) {
    return { valid: false, message: `${name} is required` };
  }

  const num = parseFloat(value);

  if (isNaN(num)) {
    return { valid: false, message: `${name} must be a valid number` };
  }

  if (num < min) {
    return { valid: false, message: `${name} must be ≥ ${min}` };
  }

  if (num > max) {
    return { valid: false, message: `${name} must be ≤ ${max}` };
  }

  return { valid: true, message: '' };
}

/**
 * Validate an integer value
 */
export function validateInt(value, min, max, name) {
  const result = validate(value, min, max, name);
  if (!result.valid) return result;

  const num = parseFloat(value);
  if (!Number.isInteger(num)) {
    return { valid: false, message: `${name} must be a whole number` };
  }

  return { valid: true, message: '' };
}

/**
 * Validate a select/dropdown has a value
 */
export function validateSelect(value, name) {
  if (!value || value === '') {
    return { valid: false, message: `Please select ${name}` };
  }
  return { valid: true, message: '' };
}

/**
 * Apply validation to an input element and show feedback
 * @param {HTMLInputElement} inputEl - The input element
 * @param {object} result - {valid, message} from validate()
 */
export function applyValidation(inputEl, result) {
  const formGroup = inputEl.closest('.form-group');
  const errorEl = formGroup?.querySelector('.form-group__error');

  inputEl.classList.remove('is-valid', 'is-invalid');

  if (inputEl.value === '') {
    // Don't show validation state for empty untouched fields
    if (errorEl) errorEl.textContent = '';
    return;
  }

  if (result.valid) {
    inputEl.classList.add('is-valid');
    if (errorEl) errorEl.textContent = '';
  } else {
    inputEl.classList.add('is-invalid');
    if (errorEl) errorEl.textContent = result.message;
  }
}

/**
 * Validate all fields in a container and return count of errors
 * @param {HTMLElement} container
 * @returns {number} count of invalid fields
 */
export function validateAll(container) {
  const inputs = container.querySelectorAll('.form-input[data-validate]');
  let errorCount = 0;

  inputs.forEach(input => {
    const min = parseFloat(input.dataset.min);
    const max = parseFloat(input.dataset.max);
    const name = input.dataset.name || input.name;
    const result = validate(input.value, min, max, name);
    applyValidation(input, result);
    if (!result.valid) errorCount++;
  });

  const selects = container.querySelectorAll('.form-select[data-validate]');
  selects.forEach(select => {
    const name = select.dataset.name || select.name;
    const result = validateSelect(select.value, name);
    if (!result.valid) errorCount++;
  });

  return errorCount;
}

/**
 * Setup real-time validation on inputs within a container
 */
export function setupRealtimeValidation(container, onValidationChange) {
  const inputs = container.querySelectorAll('.form-input[data-validate]');

  inputs.forEach(input => {
    const handler = () => {
      const min = parseFloat(input.dataset.min);
      const max = parseFloat(input.dataset.max);
      const name = input.dataset.name || input.name;
      const result = validate(input.value, min, max, name);
      applyValidation(input, result);

      if (onValidationChange) {
        const errors = validateAll(container);
        onValidationChange(errors);
      }
    };

    input.addEventListener('input', handler);
    input.addEventListener('blur', handler);
  });
}
