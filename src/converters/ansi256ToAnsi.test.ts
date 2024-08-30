import ansi256ToAnsi from './ansi256ToAnsi'

describe('Test `ansi256ToAnsi` converter:', () => {
  it('Should return `37` when given `7`!', () => {
    const received = ansi256ToAnsi(7)
    const expected = 37
    expect(received).toBe(expected)
  })

  it('Should return `97` when given `15`!', () => {
    const received = ansi256ToAnsi(15)
    const expected = 97
    expect(received).toBe(expected)
  })

  it('Should return `30` when given `232`!', () => {
    const received = ansi256ToAnsi(232)
    const expected = 30
    expect(received).toBe(expected)
  })

  it('Should return `97` when given `231`!', () => {
    const received = ansi256ToAnsi(231)
    const expected = 97
    expect(received).toBe(expected)
  })

  it('Should return `30` when given `16`!', () => {
    const received = ansi256ToAnsi(16)
    const expected = 30
    expect(received).toBe(expected)
  })
})
