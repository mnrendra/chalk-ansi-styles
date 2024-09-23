import '@/consts/index.test'

import toAnsi16 from './toAnsi16'

describe('Test `toAnsi16` util:', () => {
  it('Should return `"\\u001B[39m"` when given `39`!', () => {
    const received = toAnsi16(39)
    const expected = '\u001B[39m'
    expect(received).toBe(expected)
  })

  it('Should return `"\\u001B[49m"` when given `49`!', () => {
    const received = toAnsi16(49)
    const expected = '\u001B[49m'
    expect(received).toBe(expected)
  })
})
