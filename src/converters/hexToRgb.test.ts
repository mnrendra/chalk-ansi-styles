import hexToRgb from './hexToRgb'

describe('Test `hexToRgb` converter:', () => {
  it('Should return `[255, 255, 255]` when given `"#FFFFFF"`!', () => {
    const received = hexToRgb('#FFFFFF')
    const expected = [255, 255, 255]
    expect(received).toEqual(expected)
  })

  it('Should return `[0, 0, 0]` when given `"#000"`!', () => {
    const received = hexToRgb('#000')
    const expected = [0, 0, 0]
    expect(received).toEqual(expected)
  })

  it('Should return `[0, 0, 0]` when given `255`!', () => {
    const received = hexToRgb(255)
    const expected = [0, 0, 0]
    expect(received).toEqual(expected)
  })
})
