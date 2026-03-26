/* ═══════════════════════════════════════════════════════════════
   STELLAR CIVIL — localStorage Utilities
   ═══════════════════════════════════════════════════════════════ */

const STORAGE_PREFIX = 'stellar_civil_';

/**
 * Save calculator inputs to localStorage
 */
export function saveInputs(moduleId, inputs) {
  try {
    const key = `${STORAGE_PREFIX}inputs_${moduleId}`;
    localStorage.setItem(key, JSON.stringify(inputs));
  } catch (e) {
    console.warn('Failed to save inputs:', e);
  }
}

/**
 * Load calculator inputs from localStorage
 * @returns {object|null}
 */
export function loadInputs(moduleId) {
  try {
    const key = `${STORAGE_PREFIX}inputs_${moduleId}`;
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  } catch (e) {
    console.warn('Failed to load inputs:', e);
    return null;
  }
}

/**
 * Clear saved inputs for a module
 */
export function clearInputs(moduleId) {
  try {
    const key = `${STORAGE_PREFIX}inputs_${moduleId}`;
    localStorage.removeItem(key);
  } catch (e) {
    console.warn('Failed to clear inputs:', e);
  }
}

/**
 * Get/set disclaimer acknowledged state
 */
export function isDisclaimerAcknowledged() {
  return localStorage.getItem(`${STORAGE_PREFIX}disclaimer_ack`) === 'true';
}

export function setDisclaimerAcknowledged() {
  localStorage.setItem(`${STORAGE_PREFIX}disclaimer_ack`, 'true');
}

/**
 * Get/set theme preference
 */
export function getThemePreference() {
  return localStorage.getItem(`${STORAGE_PREFIX}theme`) || 'light';
}

export function setThemePreference(theme) {
  localStorage.setItem(`${STORAGE_PREFIX}theme`, theme);
}
