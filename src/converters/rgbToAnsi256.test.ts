import rgbToAnsi256 from './rgbToAnsi256'

describe('Test `rgbToAnsi256` converter:', () => {
  it('Should return `16` when given `...[7, 7, 7]`!', () => {
    const received = rgbToAnsi256(7, 7, 7)
    const expected = 16
    expect(received).toEqual(expected)
  })

  it('Should return `232` when given `...[8, 8, 8]`!', () => {
    const received = rgbToAnsi256(8, 8, 8)
    const expected = 232
    expect(received).toEqual(expected)
  })

  it('Should return `255` when given `...[248, 248, 248]`!', () => {
    const received = rgbToAnsi256(248, 248, 248)
    const expected = 255
    expect(received).toEqual(expected)
  })

  it('Should return `231` when given `...[255, 255, 255]`!', () => {
    const received = rgbToAnsi256(255, 255, 255)
    const expected = 231
    expect(received).toEqual(expected)
  })

  it('Should return `214` when given `...[255, 150, 0]`!', () => {
    const received = rgbToAnsi256(255, 150, 0)
    const expected = 214
    expect(received).toEqual(expected)
  })
})
