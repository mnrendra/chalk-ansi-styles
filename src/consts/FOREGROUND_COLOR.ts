export const FOREGROUND_COLOR_CLOSE = 39

const FOREGROUND_COLOR = {
  black: [30, FOREGROUND_COLOR_CLOSE],
  red: [31, FOREGROUND_COLOR_CLOSE],
  green: [32, FOREGROUND_COLOR_CLOSE],
  yellow: [33, FOREGROUND_COLOR_CLOSE],
  blue: [34, FOREGROUND_COLOR_CLOSE],
  magenta: [35, FOREGROUND_COLOR_CLOSE],
  cyan: [36, FOREGROUND_COLOR_CLOSE],
  white: [37, FOREGROUND_COLOR_CLOSE],
  // Bright color
  gray: [90, FOREGROUND_COLOR_CLOSE], // Alias of `blackBright`
  grey: [90, FOREGROUND_COLOR_CLOSE], // Alias of `blackBright`
  blackBright: [90, FOREGROUND_COLOR_CLOSE],
  redBright: [91, FOREGROUND_COLOR_CLOSE],
  greenBright: [92, FOREGROUND_COLOR_CLOSE],
  yellowBright: [93, FOREGROUND_COLOR_CLOSE],
  blueBright: [94, FOREGROUND_COLOR_CLOSE],
  magentaBright: [95, FOREGROUND_COLOR_CLOSE],
  cyanBright: [96, FOREGROUND_COLOR_CLOSE],
  whiteBright: [97, FOREGROUND_COLOR_CLOSE]
} as const

export default FOREGROUND_COLOR
