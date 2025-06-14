// Função de formatação de moeda universal (backend e frontend)
function formatCurrency(value) {
  if (isNaN(value)) return 'R$ 0,00';
  return Number(value).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { formatCurrency };
} else {
  window.formatCurrency = formatCurrency;
} 