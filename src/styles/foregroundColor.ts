import { FOREGROUND_COLOR } from '../consts'
import { pairCS } from '../utils'

const foregroundColor = {
  black: pairCS(...FOREGROUND_COLOR.black),
  red: pairCS(...FOREGROUND_COLOR.red),
  green: pairCS(...FOREGROUND_COLOR.green),
  yellow: pairCS(...FOREGROUND_COLOR.yellow),
  blue: pairCS(...FOREGROUND_COLOR.blue),
  magenta: pairCS(...FOREGROUND_COLOR.magenta),
  cyan: pairCS(...FOREGROUND_COLOR.cyan),
  white: pairCS(...FOREGROUND_COLOR.white),
  // Bright color
  gray: pairCS(...FOREGROUND_COLOR.gray),
  grey: pairCS(...FOREGROUND_COLOR.grey),
  blackBright: pairCS(...FOREGROUND_COLOR.blackBright),
  redBright: pairCS(...FOREGROUND_COLOR.redBright),
  greenBright: pairCS(...FOREGROUND_COLOR.greenBright),
  yellowBright: pairCS(...FOREGROUND_COLOR.yellowBright),
  blueBright: pairCS(...FOREGROUND_COLOR.blueBright),
  magentaBright: pairCS(...FOREGROUND_COLOR.magentaBright),
  cyanBright: pairCS(...FOREGROUND_COLOR.cyanBright),
  whiteBright: pairCS(...FOREGROUND_COLOR.whiteBright)
} as const

export type ForegroundColor = typeof foregroundColor

/**
 * Basic foreground color names.
 *
 * [More colors here.](https://github.com/chalk/chalk/blob/main/readme.md#256-and-truecolor-color-support)
 */
export type ForegroundColorName = keyof ForegroundColor

export default foregroundColor
