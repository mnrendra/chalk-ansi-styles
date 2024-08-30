import BACKGROUND_COLOR, { BACKGROUND_COLOR_CLOSE } from './BACKGROUND_COLOR'

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
