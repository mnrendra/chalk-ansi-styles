import type { StyleNumbers } from '@/types'

import mapCodes from './mapCodes'

describe('Test `mapCodes` util:', () => {
  it('Should return mapped codes!', () => {
    const codes = new Map()
    const received = mapCodes({ black: [30, 39] } as unknown as StyleNumbers)
    const expected = codes.set(30, 39)
    expect(received).toEqual(expected)
  })
})
