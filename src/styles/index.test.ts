import {
  modifier,
  foregroundColor,
  backgroundColor
} from '.'

describe('Test styles:', () => {
  describe('Test `modifier` style:', () => {
    it('Should return `modifier` style', () => {
      const received = modifier

      const expected = {
        reset: { open: '\u001B[0m', close: '\u001B[0m' },
        bold: { open: '\u001B[1m', close: '\u001B[22m' },
        dim: { open: '\u001B[2m', close: '\u001B[22m' },
        italic: { open: '\u001B[3m', close: '\u001B[23m' },
        underline: { open: '\u001B[4m', close: '\u001B[24m' },
        inverse: { open: '\u001B[7m', close: '\u001B[27m' },
        hidden: { open: '\u001B[8m', close: '\u001B[28m' },
        strikethrough: { open: '\u001B[9m', close: '\u001B[29m' },
        overline: { open: '\u001B[53m', close: '\u001B[55m' }
      }

      expect(received).toEqual(expected)
    })
  })

  describe('Test `foregroundColor` style:', () => {
    it('Should return `foregroundColor` style', () => {
      const received = foregroundColor

      const expected = {
        black: { open: '\u001B[30m', close: '\u001B[39m' },
        red: { open: '\u001B[31m', close: '\u001B[39m' },
        green: { open: '\u001B[32m', close: '\u001B[39m' },
        yellow: { open: '\u001B[33m', close: '\u001B[39m' },
        blue: { open: '\u001B[34m', close: '\u001B[39m' },
        magenta: { open: '\u001B[35m', close: '\u001B[39m' },
        cyan: { open: '\u001B[36m', close: '\u001B[39m' },
        white: { open: '\u001B[37m', close: '\u001B[39m' },
        gray: { open: '\u001B[90m', close: '\u001B[39m' },
        grey: { open: '\u001B[90m', close: '\u001B[39m' },
        blackBright: { open: '\u001B[90m', close: '\u001B[39m' },
        redBright: { open: '\u001B[91m', close: '\u001B[39m' },
        greenBright: { open: '\u001B[92m', close: '\u001B[39m' },
        yellowBright: { open: '\u001B[93m', close: '\u001B[39m' },
        blueBright: { open: '\u001B[94m', close: '\u001B[39m' },
        magentaBright: { open: '\u001B[95m', close: '\u001B[39m' },
        cyanBright: { open: '\u001B[96m', close: '\u001B[39m' },
        whiteBright: { open: '\u001B[97m', close: '\u001B[39m' }
      }

      expect(received).toEqual(expected)
    })
  })

  describe('Test `backgroundColor` style:', () => {
    it('Should return `backgroundColor` style', () => {
      const received = backgroundColor

      const expected = {
        bgBlack: { open: '\u001B[40m', close: '\u001B[49m' },
        bgRed: { open: '\u001B[41m', close: '\u001B[49m' },
        bgGreen: { open: '\u001B[42m', close: '\u001B[49m' },
        bgYellow: { open: '\u001B[43m', close: '\u001B[49m' },
        bgBlue: { open: '\u001B[44m', close: '\u001B[49m' },
        bgMagenta: { open: '\u001B[45m', close: '\u001B[49m' },
        bgCyan: { open: '\u001B[46m', close: '\u001B[49m' },
        bgWhite: { open: '\u001B[47m', close: '\u001B[49m' },
        bgGray: { open: '\u001B[100m', close: '\u001B[49m' },
        bgGrey: { open: '\u001B[100m', close: '\u001B[49m' },
        bgBlackBright: { open: '\u001B[100m', close: '\u001B[49m' },
        bgRedBright: { open: '\u001B[101m', close: '\u001B[49m' },
        bgGreenBright: { open: '\u001B[102m', close: '\u001B[49m' },
        bgYellowBright: { open: '\u001B[103m', close: '\u001B[49m' },
        bgBlueBright: { open: '\u001B[104m', close: '\u001B[49m' },
        bgMagentaBright: { open: '\u001B[105m', close: '\u001B[49m' },
        bgCyanBright: { open: '\u001B[106m', close: '\u001B[49m' },
        bgWhiteBright: { open: '\u001B[107m', close: '\u001B[49m' }
      }

      expect(received).toEqual(expected)
    })
  })
})
