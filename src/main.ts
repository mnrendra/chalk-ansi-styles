import type {
  Modifier,
  ModifierName,
  ForegroundColorName,
  BackgroundColorName
} from './styles'

import type {
  ColorName
} from './types'

import {
  MODIFIER,
  FOREGROUND_COLOR,
  FOREGROUND_COLOR_CLOSE,
  BACKGROUND_COLOR,
  BACKGROUND_COLOR_CLOSE,
  LAYER
} from './consts'

import {
  toAnsi16,
  toAnsi256,
  toAnsi16m,
  mapCodes
} from './utils'

import {
  ansi256ToAnsi,
  hexToAnsi,
  hexToAnsi256,
  hexToRgb,
  rgbToAnsi,
  rgbToAnsi256
} from './converters'

import {
  modifier,
  foregroundColor,
  backgroundColor
} from './styles'

/**
 * ANSI color styles.
 */
const styles = {
  ...modifier,
  ...foregroundColor,
  ...backgroundColor
} as const

export type Styles = typeof styles

// Define private `modifier` group.

Object.defineProperty(styles, 'modifier', {
  value: modifier,
  writable: false,
  enumerable: false,
  configurable: false
})

// Define private `color` group.

const color = {
  ...foregroundColor,
  close: toAnsi16(FOREGROUND_COLOR_CLOSE),
  ansi: toAnsi16,
  ansi256: <Num extends number = number>(num: Num) => toAnsi256(LAYER.foreground, num),
  ansi16m: <Red extends number = number, Green extends number = number, Blue extends number = number>(red: Red, green: Green, blue: Blue) => toAnsi16m(LAYER.foreground, red, green, blue)
}

export type Color = typeof color

Object.defineProperty(styles, 'color', {
  value: color,
  writable: false,
  enumerable: false,
  configurable: false
})

// Define private `bgColor` group.

const bgColor = {
  ...backgroundColor,
  close: toAnsi16(BACKGROUND_COLOR_CLOSE),
  ansi: toAnsi16,
  ansi256: <Num extends number = number>(num: Num) => toAnsi256(LAYER.background, num),
  ansi16m: <Red extends number = number, Green extends number = number, Blue extends number = number>(red: Red, green: Green, blue: Blue) => toAnsi16m(LAYER.background, red, green, blue)
}

export type BgColor = typeof bgColor

Object.defineProperty(styles, 'bgColor', {
  value: bgColor,
  writable: false,
  enumerable: false,
  configurable: false
})

// Define private `codes` property.

const codes = mapCodes({
  ...MODIFIER,
  ...FOREGROUND_COLOR,
  ...BACKGROUND_COLOR
})

export type Codes = typeof codes

Object.defineProperty(styles, 'codes', {
  value: codes,
  writable: false,
  enumerable: false,
  configurable: false
})

// Define private methods.

Object.defineProperty(styles, 'rgbToAnsi256', {
  value: rgbToAnsi256,
  writable: false,
  enumerable: false,
  configurable: false
})

Object.defineProperty(styles, 'hexToRgb', {
  value: hexToRgb,
  writable: false,
  enumerable: false,
  configurable: false
})

Object.defineProperty(styles, 'hexToAnsi256', {
  value: hexToAnsi256,
  writable: false,
  enumerable: false,
  configurable: false
})

Object.defineProperty(styles, 'ansi256ToAnsi', {
  value: ansi256ToAnsi,
  writable: false,
  enumerable: false,
  configurable: false
})

Object.defineProperty(styles, 'rgbToAnsi', {
  value: rgbToAnsi,
  writable: false,
  enumerable: false,
  configurable: false
})

Object.defineProperty(styles, 'hexToAnsi', {
  value: hexToAnsi,
  writable: false,
  enumerable: false,
  configurable: false
})

// Export style names.

export const modifierNames = Object.keys(
  modifier
) as readonly ModifierName[]

export const foregroundColorNames = Object.keys(
  foregroundColor
) as readonly ForegroundColorName[]

export const backgroundColorNames = Object.keys(
  backgroundColor
) as readonly BackgroundColorName[]

export const colorNames = [
  ...foregroundColorNames,
  ...backgroundColorNames
] as readonly ColorName[]

// Export `AnsiStyles` type.

export type AnsiStyles = Styles & {
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

// Export `ansiStyles`.

export const ansiStyles = styles as AnsiStyles

// Export `styles` as a default value.
export default styles
