import toAnsi256 from './toAnsi256'

describe('Test `toAnsi256` util:', () => {
  it('Should return ANSI-256 color code with layer!', () => {
    const received = toAnsi256(38, 30)
    const expected = '\u001B[38;5;30m'
    expect(received).toBe(expected)
  })
})
