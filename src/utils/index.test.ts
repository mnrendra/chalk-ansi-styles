import type { StyleNumbers } from '@/types'

import {
  toAnsi,
  toAnsi16,
  toAnsi256,
  toAnsi16m,
  pairCS,
  mapCodes
} from '.'

describe('Test utils:', () => {
  describe('Test `toAnsi` util:', () => {
    it('Should return ANSI code with param!', () => {
      const received = toAnsi('')
      const expected = '\u001B[m'
      expect(received).toBe(expected)
    })
  })

  describe('Test `toAnsi16` util:', () => {
    it('Should return ANSI-16 color code!', () => {
      const received = toAnsi16(30)
      const expected = '\u001B[30m'
      expect(received).toBe(expected)
    })
  })

  describe('Test `toAnsi256` util:', () => {
    it('Should return ANSI-256 color code with layer!', () => {
      const received = toAnsi256(38, 30)
      const expected = '\u001B[38;5;30m'
      expect(received).toBe(expected)
    })
  })

  describe('Test `toAnsi16m` util:', () => {
    it('Should return ANSI-16m color code with layer!', () => {
      const received = toAnsi16m(38, 255, 0, 0)
      const expected = '\u001B[38;2;255;0;0m'
      expect(received).toBe(expected)
    })
  })

  describe('Test `pairCS` util:', () => {
    it('Should return CS pair!', () => {
      const received = pairCS(30, 39)
      const expected = { open: '\u001B[30m', close: '\u001B[39m' }
      expect(received).toEqual(expected)
    })
  })

  describe('Test `mapCodes` util:', () => {
    it('Should return mapped codes!', () => {
      const codes = new Map()
      const received = mapCodes({ black: [30, 39] } as unknown as StyleNumbers)
      const expected = codes.set(30, 39)
      expect(received).toEqual(expected)
    })
  })
})
