import FOREGROUND_COLOR, { FOREGROUND_COLOR_CLOSE } from './FOREGROUND_COLOR'

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
