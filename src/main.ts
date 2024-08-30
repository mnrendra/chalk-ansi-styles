import type {
  ModifierName,
  ForegroundColorName,
  BackgroundColorName,
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
  modifier,
  foregroundColor,
  backgroundColor
} from './styles'

import {
  rgbToAnsi256,
  hexToRgb,
  hexToAnsi256,
  ansi256ToAnsi,
  rgbToAnsi,
  hexToAnsi
} from './converters'

/**
 * ANSI color styles.
 */
const styles = {
  ...modifier,
  ...foregroundColor,
  ...backgroundColor
} as const

export type Styles = typeof styles

// Define private style-groups properties.

export type Modifier = typeof modifier

Object.defineProperty(styles, 'modifier', {
  value: modifier,
  writable: false,
  enumerable: false,
  configurable: false
})

export const color = {
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

export const bgColor = {
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

// Define private code property.

export const codes = mapCodes({
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

// Define private methods properties.

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

// Names
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

// Export `styles` as a default value.
export default styles
