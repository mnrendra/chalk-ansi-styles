import toAnsi16m from './toAnsi16m'

describe('Test `toAnsi16m` util:', () => {
  it('Should return ANSI-16m color code with layer!', () => {
    const received = toAnsi16m(38, 255, 0, 0)
    const expected = '\u001B[38;2;255;0;0m'
    expect(received).toBe(expected)
  })
})
