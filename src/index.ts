import type { AnsiStyles } from './types'

import main, {
  modifierNames,
  foregroundColorNames,
  backgroundColorNames,
  colorNames
} from './main'

export type {
  Layer,
  CSPair,
  Modifier,
  ForegroundColor,
  BackgroundColor,
  StyleNumbers,
  ModifierName,
  ForegroundColorName,
  BackgroundColorName,
  ColorName,
  StyleName,
  AnsiStyles
} from './types'

export type {
  Styles
} from './main'

export {
  modifierNames,
  foregroundColorNames,
  backgroundColorNames,
  colorNames
}

export const ansiStyles = main as AnsiStyles

Object.defineProperties(main, {
  ansiStyles: {
    value: ansiStyles,
    writable: true,
    configurable: true,
    enumerable: false
  },
  modifierNames: {
    value: modifierNames,
    writable: true,
    configurable: true,
    enumerable: false
  },
  foregroundColorNames: {
    value: foregroundColorNames,
    writable: true,
    configurable: true,
    enumerable: false
  },
  backgroundColorNames: {
    value: backgroundColorNames,
    writable: true,
    configurable: true,
    enumerable: false
  },
  colorNames: {
    value: colorNames,
    writable: true,
    configurable: true,
    enumerable: false
  },
  default: {
    value: main,
    writable: true,
    configurable: true,
    enumerable: false
  }
})

export default main
