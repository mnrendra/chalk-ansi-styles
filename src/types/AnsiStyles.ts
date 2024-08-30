import type {
  Styles,
  Modifier,
  Color,
  BgColor,
  Codes
} from '../main'

import type {
  rgbToAnsi256,
  hexToRgb,
  hexToAnsi256,
  ansi256ToAnsi,
  rgbToAnsi,
  hexToAnsi
} from '../converters'

type AnsiStyles = Styles & {
  readonly modifier: Modifier
  readonly color: Color
  readonly bgColor: BgColor
  readonly codes: Codes
  readonly rgbToAnsi256: typeof rgbToAnsi256
  readonly hexToRgb: typeof hexToRgb
  readonly hexToAnsi256: typeof hexToAnsi256
  readonly ansi256ToAnsi: typeof ansi256ToAnsi
  readonly rgbToAnsi: typeof rgbToAnsi
  readonly hexToAnsi: typeof hexToAnsi
}

export default AnsiStyles
