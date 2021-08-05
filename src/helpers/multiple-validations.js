export function multipleValidations(...validations) {
  return (value) => {
    for (const fn of validations) {
      const message = fn(value)
      if (message) return message
    }
  }
}
