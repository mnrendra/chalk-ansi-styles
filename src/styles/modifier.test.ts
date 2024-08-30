import modifier from './modifier'

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
