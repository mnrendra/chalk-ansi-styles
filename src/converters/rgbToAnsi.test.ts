import './ansi256ToAnsi.test'

import rgbToAnsi from './rgbToAnsi'

describe('Test `rgbToAnsi` converter:', () => {
  it('Should return `30` when given `...[7, 7, 7]`!', () => {
    const received = rgbToAnsi(7, 7, 7)
    const expected = 30
    expect(received).toEqual(expected)
  })

  it('Should return `30` when given `...[8, 8, 8]`!', () => {
    const received = rgbToAnsi(8, 8, 8)
    const expected = 30
    expect(received).toEqual(expected)
  })

  it('Should return `37` when given `...[248, 248, 248]`!', () => {
    const received = rgbToAnsi(248, 248, 248)
    const expected = 37
    expect(received).toEqual(expected)
  })

  it('Should return `97` when given `...[255, 255, 255]`!', () => {
    const received = rgbToAnsi(255, 255, 255)
    const expected = 97
    expect(received).toEqual(expected)
  })

  it('Should return `93` when given `...[255, 150, 0]`!', () => {
    const received = rgbToAnsi(255, 150, 0)
    const expected = 93
    expect(received).toEqual(expected)
  })
})
