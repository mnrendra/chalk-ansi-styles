import '@/consts/index.test'

import pairCS from './pairCS'

describe('Test `pairCS` util:', () => {
  it('Should return a CS pair object!', () => {
    const received = pairCS(30, 39)
    const expected = { open: '\u001B[30m', close: '\u001B[39m' }
    expect(received).toEqual(expected)
  })
})
