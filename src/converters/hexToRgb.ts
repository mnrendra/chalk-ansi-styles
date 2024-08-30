const hexToRgb = (
  hex: number | string
): [number, number, number] => {
  const matches = /[a-f\d]{6}|[a-f\d]{3}/i.exec(hex.toString(16))
  if (matches === null) return [0, 0, 0]

  let [colorString] = matches

  if (colorString.length === 3) {
    colorString = [...colorString].map(character => character + character).join('')
  }

  const integer = Number.parseInt(colorString, 16)

  return [
    (integer >> 16) & 0xFF,
    (integer >> 8) & 0xFF,
    integer & 0xFF
  ]
}

export default hexToRgb
