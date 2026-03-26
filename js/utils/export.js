/* ═══════════════════════════════════════════════════════════════
   STELLAR CIVIL — Export Utilities
   ═══════════════════════════════════════════════════════════════ */

/**
 * Export current results to PDF via window.print()
 */
export function exportPDF() {
  // Add print header with date/time
  const header = document.querySelector('.print-header');
  const footer = document.querySelector('.print-footer');

  if (header) {
    const now = new Date();
    const dateStr = now.toLocaleDateString('en-IN', {
      day: '2-digit', month: 'short', year: 'numeric'
    });
    const timeStr = now.toLocaleTimeString('en-IN', {
      hour: '2-digit', minute: '2-digit'
    });

    const infoEl = header.querySelector('.print-header__info');
    if (infoEl) {
      infoEl.innerHTML = `Date: ${dateStr}<br>Time: ${timeStr}`;
    }
  }

  window.print();
}

/**
 * Export data to CSV and trigger download
 * @param {Array<Array>} data - 2D array of rows/columns
 * @param {string} moduleName - Name of the calculator module
 */
export function exportCSV(data, moduleName) {
  if (!data || data.length === 0) return;

  const csvContent = data.map(row =>
    row.map(cell => {
      let str = String(cell ?? '');
      // Escape quotes and wrap in quotes if contains comma or newline
      if (str.includes(',') || str.includes('"') || str.includes('\n')) {
        str = '"' + str.replace(/"/g, '""') + '"';
      }
      return str;
    }).join(',')
  ).join('\n');

  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');

  const now = new Date();
  const dateStr = now.toISOString().slice(0, 10);
  link.href = url;
  link.download = `StellarCivil_${moduleName}_${dateStr}.csv`;
  link.style.display = 'none';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
