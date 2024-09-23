import '@/consts/index.test'

import toAnsi16m from './toAnsi16m'

describe('Test `toAnsi16m` util:', () => {
  it('Should return `"\\u001B[38;2;0;100;200m"` when given `38, 0, 100, 200`!', () => {
    const received = toAnsi16m(38, 0, 100, 200)
    const expected = '\u001B[38;2;0;100;200m'
    expect(received).toBe(expected)
  })

  it('Should return `"\\u001B[48;2;255;100;0m"` when given `48, 255, 100, 0`!', () => {
    const received = toAnsi16m(48, 255, 100, 0)
    const expected = '\u001B[48;2;255;100;0m'
    expect(received).toBe(expected)
  })
})
