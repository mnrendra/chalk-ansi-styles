const rgbToAnsi256 = (
  red: number,
  green: number,
  blue: number
): number => {
  // We use the extended greyscale palette here, with the exception of
  // black and white. normal palette only has 4 greyscale shades.
  if (red === green && green === blue) {
    if (red < 8) return 16
    if (red > 248) return 231
    return Math.round(((red - 8) / 247) * 24) + 232
  }

  return 16 +
    (36 * Math.round(red / 255 * 5)) +
    (6 * Math.round(green / 255 * 5)) +
    Math.round(blue / 255 * 5)
}

export default rgbToAnsi256
