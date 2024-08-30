import ansi256ToAnsi from './ansi256ToAnsi'
import hexToAnsi256 from './hexToAnsi256'

const hexToAnsi = (
  hex: number | string
): number => {
  const ansi256 = hexToAnsi256(hex)
  return ansi256ToAnsi(ansi256)
}

export default hexToAnsi
