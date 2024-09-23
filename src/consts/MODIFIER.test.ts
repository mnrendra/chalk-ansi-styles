import MODIFIER from './MODIFIER'

describe('Test `MODIFIER` constant:', () => {
  describe('Test `reset` property:', () => {
    it('Should have a `reset` property!', () => {
      expect(MODIFIER).toHaveProperty('reset')
    })

    const { reset } = MODIFIER

    it('Should be an array!', () => {
      expect(Array.isArray(reset)).toBe(true)
    })

    it('Should be `0` for the first index!', () => {
      expect(reset[0]).toBe(0)
    })

    it('Should be `0` for the second index!', () => {
      expect(reset[1]).toBe(0)
    })
  })

  describe('Test `bold` property:', () => {
    it('Should have a `bold` property!', () => {
      expect(MODIFIER).toHaveProperty('bold')
    })

    const { bold } = MODIFIER

    it('Should be an array!', () => {
      expect(Array.isArray(bold)).toBe(true)
    })

    it('Should be `1` for the first index!', () => {
      expect(bold[0]).toBe(1)
    })

    it('Should be `22` for the second index!', () => {
      expect(bold[1]).toBe(22)
    })
  })

  describe('Test `dim` property:', () => {
    it('Should have a `dim` property!', () => {
      expect(MODIFIER).toHaveProperty('dim')
    })

    const { dim } = MODIFIER

    it('Should be an array!', () => {
      expect(Array.isArray(dim)).toBe(true)
    })

    it('Should be `2` for the first index!', () => {
      expect(dim[0]).toBe(2)
    })

    it('Should be `22` for the second index!', () => {
      expect(dim[1]).toBe(22)
    })
  })

  describe('Test `italic` property:', () => {
    it('Should have an `italic` property!', () => {
      expect(MODIFIER).toHaveProperty('italic')
    })

    const { italic } = MODIFIER

    it('Should be an array!', () => {
      expect(Array.isArray(italic)).toBe(true)
    })

    it('Should be `3` for the first index!', () => {
      expect(italic[0]).toBe(3)
    })

    it('Should be `23` for the second index!', () => {
      expect(italic[1]).toBe(23)
    })
  })

  describe('Test `underline` property:', () => {
    it('Should have an `underline` property!', () => {
      expect(MODIFIER).toHaveProperty('underline')
    })

    const { underline } = MODIFIER

    it('Should be an array!', () => {
      expect(Array.isArray(underline)).toBe(true)
    })

    it('Should be `4` for the first index!', () => {
      expect(underline[0]).toBe(4)
    })

    it('Should be `24` for the second index!', () => {
      expect(underline[1]).toBe(24)
    })
  })

  describe('Test `inverse` property:', () => {
    it('Should have an `inverse` property!', () => {
      expect(MODIFIER).toHaveProperty('inverse')
    })

    const { inverse } = MODIFIER

    it('Should be an array!', () => {
      expect(Array.isArray(inverse)).toBe(true)
    })

    it('Should be `7` for the first index!', () => {
      expect(inverse[0]).toBe(7)
    })

    it('Should be `27` for the second index!', () => {
      expect(inverse[1]).toBe(27)
    })
  })

  describe('Test `hidden` property:', () => {
    it('Should have a `hidden` property!', () => {
      expect(MODIFIER).toHaveProperty('hidden')
    })

    const { hidden } = MODIFIER

    it('Should be an array!', () => {
      expect(Array.isArray(hidden)).toBe(true)
    })

    it('Should be `8` for the first index!', () => {
      expect(hidden[0]).toBe(8)
    })

    it('Should be `28` for the second index!', () => {
      expect(hidden[1]).toBe(28)
    })
  })

  describe('Test `strikethrough` property:', () => {
    it('Should have a `strikethrough` property!', () => {
      expect(MODIFIER).toHaveProperty('strikethrough')
    })

    const { strikethrough } = MODIFIER

    it('Should be an array!', () => {
      expect(Array.isArray(strikethrough)).toBe(true)
    })

    it('Should be `9` for the first index!', () => {
      expect(strikethrough[0]).toBe(9)
    })

    it('Should be `29` for the second index!', () => {
      expect(strikethrough[1]).toBe(29)
    })
  })

  describe('Test `overline` property:', () => {
    it('Should have an `overline` property!', () => {
      expect(MODIFIER).toHaveProperty('overline')
    })

    const { overline } = MODIFIER

    it('Should be an array!', () => {
      expect(Array.isArray(overline)).toBe(true)
    })

    it('Should be `53` for the first index!', () => {
      expect(overline[0]).toBe(53)
    })

    it('Should be `55` for the second index!', () => {
      expect(overline[1]).toBe(55)
    })
  })
})
