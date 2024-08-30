import rgbToAnsi256 from './rgbToAnsi256'
import hexToRgb from './hexToRgb'

const hexToAnsi256 = (
  hex: number | string
): number => {
  const [red, green, blue] = hexToRgb(hex)
  return rgbToAnsi256(red, green, blue)
}

export default hexToAnsi256
