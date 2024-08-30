import MODIFIER from './MODIFIER'

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
