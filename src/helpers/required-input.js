export function requiredInput(value) {
  if (!(value || typeof value === 'number') || !String(value).trim()) {
    return 'Campo obrigatório.'
  }
}
