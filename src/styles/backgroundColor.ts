import { BACKGROUND_COLOR } from '../consts'
import { pairCS } from '../utils'

const backgroundColor = {
  bgBlack: pairCS(...BACKGROUND_COLOR.bgBlack),
  bgRed: pairCS(...BACKGROUND_COLOR.bgRed),
  bgGreen: pairCS(...BACKGROUND_COLOR.bgGreen),
  bgYellow: pairCS(...BACKGROUND_COLOR.bgYellow),
  bgBlue: pairCS(...BACKGROUND_COLOR.bgBlue),
  bgMagenta: pairCS(...BACKGROUND_COLOR.bgMagenta),
  bgCyan: pairCS(...BACKGROUND_COLOR.bgCyan),
  bgWhite: pairCS(...BACKGROUND_COLOR.bgWhite),
  // Bright color
  bgGray: pairCS(...BACKGROUND_COLOR.bgGray),
  bgGrey: pairCS(...BACKGROUND_COLOR.bgGrey),
  bgBlackBright: pairCS(...BACKGROUND_COLOR.bgBlackBright),
  bgRedBright: pairCS(...BACKGROUND_COLOR.bgRedBright),
  bgGreenBright: pairCS(...BACKGROUND_COLOR.bgGreenBright),
  bgYellowBright: pairCS(...BACKGROUND_COLOR.bgYellowBright),
  bgBlueBright: pairCS(...BACKGROUND_COLOR.bgBlueBright),
  bgMagentaBright: pairCS(...BACKGROUND_COLOR.bgMagentaBright),
  bgCyanBright: pairCS(...BACKGROUND_COLOR.bgCyanBright),
  bgWhiteBright: pairCS(...BACKGROUND_COLOR.bgWhiteBright)
} as const

export type BackgroundColor = typeof backgroundColor

export default backgroundColor
