import foregroundColor from './foregroundColor'

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
