import hexToAnsi256 from './hexToAnsi256'

describe('Test `hexToAnsi256` converter:', () => {
  it('Should return `231` when given `"#FFFFFF"`!', () => {
    const received = hexToAnsi256('#FFFFFF')
    const expected = 231
    expect(received).toEqual(expected)
  })

  it('Should return `16` when given `"#000"`!', () => {
    const received = hexToAnsi256('#000')
    const expected = 16
    expect(received).toEqual(expected)
  })

  it('Should return `16` when given `255`!', () => {
    const received = hexToAnsi256(255)
    const expected = 16
    expect(received).toEqual(expected)
  })
})
