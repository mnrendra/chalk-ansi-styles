import './toAnsi.test'
import './toAnsi16.test'
import './toAnsi256.test'
import './toAnsi16m.test'
import './pairCS.test'
import './mapCodes.test'

import * as index from '.'

describe('Test utils:', () => {
  const received = index

  it('Should have a `toAnsi` property!', () => {
    expect(received).toHaveProperty('toAnsi')
  })

  it('Should have a `toAnsi16` property!', () => {
    expect(received).toHaveProperty('toAnsi16')
  })

  it('Should have a `toAnsi256` property!', () => {
    expect(received).toHaveProperty('toAnsi256')
  })

  it('Should have a `toAnsi16m` property!', () => {
    expect(received).toHaveProperty('toAnsi16m')
  })

  it('Should have a `pairCS` property!', () => {
    expect(received).toHaveProperty('pairCS')
  })

  it('Should have a `mapCodes` property!', () => {
    expect(received).toHaveProperty('mapCodes')
  })
})
