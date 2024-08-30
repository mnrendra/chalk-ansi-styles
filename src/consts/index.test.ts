import {
  MODIFIER,
  FOREGROUND_COLOR,
  FOREGROUND_COLOR_CLOSE,
  BACKGROUND_COLOR,
  BACKGROUND_COLOR_CLOSE,
  LAYER,
  ESCAPE
} from '.'

describe('Test `consts`:', () => {
  describe('Test `MODIFIER` constant:', () => {
    it('Should return `MODIFIER` constant!', () => {
      const received = MODIFIER

      const expected = {
        reset: [0, 0],
        bold: [1, 22],
        dim: [2, 22],
        italic: [3, 23],
        underline: [4, 24],
        inverse: [7, 27],
        hidden: [8, 28],
        strikethrough: [9, 29],
        overline: [53, 55]
      }

      expect(received).toEqual(expected)
    })
  })

  describe('Test `FOREGROUND_COLOR` constant:', () => {
    it('Should return `FOREGROUND_COLOR` constant!', () => {
      const received = FOREGROUND_COLOR

      const expected = {
        black: [30, 39],
        red: [31, 39],
        green: [32, 39],
        yellow: [33, 39],
        blue: [34, 39],
        magenta: [35, 39],
        cyan: [36, 39],
        white: [37, 39],
        gray: [90, 39],
        grey: [90, 39],
        blackBright: [90, 39],
        redBright: [91, 39],
        greenBright: [92, 39],
        yellowBright: [93, 39],
        blueBright: [94, 39],
        magentaBright: [95, 39],
        cyanBright: [96, 39],
        whiteBright: [97, 39]
      }

      expect(received).toEqual(expected)
    })

    it('Should return `FOREGROUND_COLOR_CLOSE` constant!', () => {
      const received = FOREGROUND_COLOR_CLOSE
      const expected = 39
      expect(received).toEqual(expected)
    })
  })

  describe('Test `BACKGROUND_COLOR` constant:', () => {
    it('Should return `BACKGROUND_COLOR` constant!', () => {
      const received = BACKGROUND_COLOR

      const expected = {
        bgBlack: [40, 49],
        bgRed: [41, 49],
        bgGreen: [42, 49],
        bgYellow: [43, 49],
        bgBlue: [44, 49],
        bgMagenta: [45, 49],
        bgCyan: [46, 49],
        bgWhite: [47, 49],
        bgGray: [100, 49],
        bgGrey: [100, 49],
        bgBlackBright: [100, 49],
        bgRedBright: [101, 49],
        bgGreenBright: [102, 49],
        bgYellowBright: [103, 49],
        bgBlueBright: [104, 49],
        bgMagentaBright: [105, 49],
        bgCyanBright: [106, 49],
        bgWhiteBright: [107, 49]
      }

      expect(received).toEqual(expected)
    })

    it('Should return `BACKGROUND_COLOR_CLOSE` constant!', () => {
      const received = BACKGROUND_COLOR_CLOSE
      const expected = 49
      expect(received).toEqual(expected)
    })
  })

  describe('Test `LAYER` constant:', () => {
    it('Should return `LAYER` constant!', () => {
      const received = LAYER

      const expected = {
        foreground: 38,
        background: 48
      }

      expect(received).toEqual(expected)
    })
  })

  describe('Test `ESCAPE` constant:', () => {
    it('Should return `ESCAPE` constant!', () => {
      const received = ESCAPE
      const expected = '\u001B['
      expect(received).toEqual(expected)
    })
  })
})
