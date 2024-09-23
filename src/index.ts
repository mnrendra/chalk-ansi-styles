import main, {
  ansiStyles,
  modifierNames,
  foregroundColorNames,
  backgroundColorNames,
  colorNames
} from './main'

export type {
  Layer
} from './consts'

export type {
  CSPair
} from './utils'

export type {
  Modifier,
  ModifierName,
  ForegroundColor,
  ForegroundColorName,
  BackgroundColor,
  BackgroundColorName
} from './styles'

export type {
  StyleNumbers,
  ColorName,
  StyleName
} from './types'

export type {
  AnsiStyles,
  Styles
} from './main'

export {
  ansiStyles,
  modifierNames,
  foregroundColorNames,
  backgroundColorNames,
  colorNames
}

export default main
