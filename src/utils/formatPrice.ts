export function formatPrice(valor: number) {
  return `R$ ${valor.toFixed(2).replace('.', ',')}`
}
