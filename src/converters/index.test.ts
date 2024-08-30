import {
  ansi256ToAnsi,
  hexToAnsi,
  hexToAnsi256,
  hexToRgb,
  rgbToAnsi,
  rgbToAnsi256
} from '.'

describe('Test converters:', () => {
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

  describe('Test `hexToAnsi` converter:', () => {
    it('Should return `97` when given `"#FFFFFF"`!', () => {
      const received = hexToAnsi('#FFFFFF')
      const expected = 97
      expect(received).toEqual(expected)
    })

    it('Should return `30` when given `"#000"`!', () => {
      const received = hexToAnsi('#000')
      const expected = 30
      expect(received).toEqual(expected)
    })

    it('Should return `30` when given `255`!', () => {
      const received = hexToAnsi(255)
      const expected = 30
      expect(received).toEqual(expected)
    })
  })

  describe('Test `hexToAnsi256` converter:', () => {
    it('Should return `231` when given `"#FFFFFF"`!', () => {
      const received = hexToAnsi256('#FFFFFF')
      const expected = 231
      expect(received).toEqual(expected)
    })

    it('Should return `16` when given `"#000"`!', () => {
      const received = hexToAnsi256('#000')
      const expected = 16
      expect(received).toEqual(expected)
    })

    it('Should return `16` when given `255`!', () => {
      const received = hexToAnsi256(255)
      const expected = 16
      expect(received).toEqual(expected)
    })
  })

  describe('Test `hexToRgb` converter:', () => {
    it('Should return `[255, 255, 255]` when given `"#FFFFFF"`!', () => {
      const received = hexToRgb('#FFFFFF')
      const expected = [255, 255, 255]
      expect(received).toEqual(expected)
    })

    it('Should return `[0, 0, 0]` when given `"#000"`!', () => {
      const received = hexToRgb('#000')
      const expected = [0, 0, 0]
      expect(received).toEqual(expected)
    })

    it('Should return `[0, 0, 0]` when given `255`!', () => {
      const received = hexToRgb(255)
      const expected = [0, 0, 0]
      expect(received).toEqual(expected)
    })
  })

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

  describe('Test `rgbToAnsi256` converter:', () => {
    it('Should return `16` when given `...[7, 7, 7]`!', () => {
      const received = rgbToAnsi256(7, 7, 7)
      const expected = 16
      expect(received).toEqual(expected)
    })

    it('Should return `232` when given `...[8, 8, 8]`!', () => {
      const received = rgbToAnsi256(8, 8, 8)
      const expected = 232
      expect(received).toEqual(expected)
    })

    it('Should return `255` when given `...[248, 248, 248]`!', () => {
      const received = rgbToAnsi256(248, 248, 248)
      const expected = 255
      expect(received).toEqual(expected)
    })

    it('Should return `231` when given `...[255, 255, 255]`!', () => {
      const received = rgbToAnsi256(255, 255, 255)
      const expected = 231
      expect(received).toEqual(expected)
    })

    it('Should return `214` when given `...[255, 150, 0]`!', () => {
      const received = rgbToAnsi256(255, 150, 0)
      const expected = 214
      expect(received).toEqual(expected)
    })
  })
})
