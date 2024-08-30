import backgroundColor from './backgroundColor'

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
