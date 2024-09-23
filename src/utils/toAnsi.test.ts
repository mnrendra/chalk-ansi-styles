import '@/consts/index.test'

import toAnsi from './toAnsi'

describe('Test `toAnsi` util:', () => {
  it('Should return `"\\u001B[m"` when given `""`!', () => {
    const received = toAnsi('')
    const expected = '\u001B[m'
    expect(received).toBe(expected)
  })

  it('Should return `"\\u001B[30m"` when given `"30"`!', () => {
    const received = toAnsi('30')
    const expected = '\u001B[30m'
    expect(received).toBe(expected)
  })

  it('Should return `"\\u001B[38;5;255m"` when given `"38;5;255"`!', () => {
    const received = toAnsi('38;5;255')
    const expected = '\u001B[38;5;255m'
    expect(received).toBe(expected)
  })

  it('Should return `"\\u001B[48;2;0;100;200m"` when given `"48;2;0;100;200"`!', () => {
    const received = toAnsi('48;2;0;100;200')
    const expected = '\u001B[48;2;0;100;200m'
    expect(received).toBe(expected)
  })
})
