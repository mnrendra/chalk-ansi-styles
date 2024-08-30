import hexToAnsi from './hexToAnsi'

describe('Test `hexToAnsi` converter:', () => {
  it('Should return `97` when given `"#FFFFFF"`!', () => {
    const received = hexToAnsi('#FFFFFF')
    const expected = 97
    expect(received).toEqual(expected)
  })

  it('Should return `30` when given `"#000"`!', () => {
    const received = hexToAnsi('#000')
    const expected = 30
    expect(received).toEqual(expected)
  })

  it('Should return `30` when given `255`!', () => {
    const received = hexToAnsi(255)
    const expected = 30
    expect(received).toEqual(expected)
  })
})
