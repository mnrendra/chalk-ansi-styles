import toAnsi from './toAnsi'

describe('Test `toAnsi` util:', () => {
  it('Should return ANSI code with param!', () => {
    const received = toAnsi('')
    const expected = '\u001B[m'
    expect(received).toBe(expected)
  })
})
