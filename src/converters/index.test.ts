import './ansi256ToAnsi.test'
import './hexToAnsi.test'
import './hexToAnsi256.test'
import './hexToRgb.test'
import './rgbToAnsi.test'
import './rgbToAnsi256.test'

import * as index from '.'

describe('Test utils:', () => {
  const received = index

  it('Should have a `ansi256ToAnsi` property!', () => {
    expect(received).toHaveProperty('ansi256ToAnsi')
  })

  it('Should have a `hexToAnsi` property!', () => {
    expect(received).toHaveProperty('hexToAnsi')
  })

  it('Should have a `hexToAnsi256` property!', () => {
    expect(received).toHaveProperty('hexToAnsi256')
  })

  it('Should have a `hexToRgb` property!', () => {
    expect(received).toHaveProperty('hexToRgb')
  })

  it('Should have a `rgbToAnsi` property!', () => {
    expect(received).toHaveProperty('rgbToAnsi')
  })

  it('Should have a `rgbToAnsi256` property!', () => {
    expect(received).toHaveProperty('rgbToAnsi256')
  })
})
