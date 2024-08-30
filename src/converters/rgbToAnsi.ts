import ansi256ToAnsi from './ansi256ToAnsi'
import rgbToAnsi256 from './rgbToAnsi256'

const rgbToAnsi = (
  red: number,
  green: number,
  blue: number
): number => {
  const ansi256 = rgbToAnsi256(red, green, blue)
  return ansi256ToAnsi(ansi256)
}

export default rgbToAnsi
