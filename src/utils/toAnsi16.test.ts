import toAnsi16 from './toAnsi16'

describe('Test `toAnsi16` util:', () => {
  it('Should return ANSI-16 color code!', () => {
    const received = toAnsi16(30)
    const expected = '\u001B[30m'
    expect(received).toBe(expected)
  })
})
