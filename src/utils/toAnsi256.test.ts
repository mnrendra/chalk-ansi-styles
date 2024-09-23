import '@/consts/index.test'

import toAnsi256 from './toAnsi256'

describe('Test `toAnsi256` util:', () => {
  it('Should return `"\\u001B[38;5;255m"` when given `38, 255`!', () => {
    const received = toAnsi256(38, 255)
    const expected = '\u001B[38;5;255m'
    expect(received).toBe(expected)
  })

  it('Should return `"\\u001B[48;5;0m"` when given `48, 0`!', () => {
    const received = toAnsi256(48, 0)
    const expected = '\u001B[48;5;0m'
    expect(received).toBe(expected)
  })
})
