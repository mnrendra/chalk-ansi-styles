import '@/utils/index.test'

import modifier from './modifier'

describe('Test `modifier` styles:', () => {
  describe('Test `reset` property:', () => {
    it('Should have a `reset` property!', () => {
      expect(modifier).toHaveProperty('reset')
    })

    const { reset } = modifier

    it('Should have an `open` key, and the value should be `"\\u001B[0m"!`', () => {
      expect(reset.open).toBe('\u001B[0m')
    })

    it('Should have a `close` key, and the value should be `"\\u001B[0m"!`', () => {
      expect(reset.close).toBe('\u001B[0m')
    })
  })

  describe('Test `bold` property:', () => {
    it('Should have a `bold` property!', () => {
      expect(modifier).toHaveProperty('bold')
    })

    const { bold } = modifier

    it('Should have an `open` key, and the value should be `"\\u001B[1m"!`', () => {
      expect(bold.open).toBe('\u001B[1m')
    })

    it('Should have a `close` key, and the value should be `"\\u001B[22m"!`', () => {
      expect(bold.close).toBe('\u001B[22m')
    })
  })

  describe('Test `dim` property:', () => {
    it('Should have a `dim` property!', () => {
      expect(modifier).toHaveProperty('dim')
    })

    const { dim } = modifier

    it('Should have an `open` key, and the value should be `"\\u001B[2m"!`', () => {
      expect(dim.open).toBe('\u001B[2m')
    })

    it('Should have a `close` key, and the value should be `"\\u001B[22m"!`', () => {
      expect(dim.close).toBe('\u001B[22m')
    })
  })

  describe('Test `italic` property:', () => {
    it('Should have an `italic` property!', () => {
      expect(modifier).toHaveProperty('italic')
    })

    const { italic } = modifier

    it('Should have an `open` key, and the value should be `"\\u001B[3m"!`', () => {
      expect(italic.open).toBe('\u001B[3m')
    })

    it('Should have a `close` key, and the value should be `"\\u001B[23m"!`', () => {
      expect(italic.close).toBe('\u001B[23m')
    })
  })

  describe('Test `underline` property:', () => {
    it('Should have an `underline` property!', () => {
      expect(modifier).toHaveProperty('underline')
    })

    const { underline } = modifier

    it('Should have an `open` key, and the value should be `"\\u001B[4m"!`', () => {
      expect(underline.open).toBe('\u001B[4m')
    })

    it('Should have a `close` key, and the value should be `"\\u001B[24m"!`', () => {
      expect(underline.close).toBe('\u001B[24m')
    })
  })

  describe('Test `inverse` property:', () => {
    it('Should have an `inverse` property!', () => {
      expect(modifier).toHaveProperty('inverse')
    })

    const { inverse } = modifier

    it('Should have an `open` key, and the value should be `"\\u001B[7m"!`', () => {
      expect(inverse.open).toBe('\u001B[7m')
    })

    it('Should have a `close` key, and the value should be `"\\u001B[27m"!`', () => {
      expect(inverse.close).toBe('\u001B[27m')
    })
  })

  describe('Test `hidden` property:', () => {
    it('Should have a `hidden` property!', () => {
      expect(modifier).toHaveProperty('hidden')
    })

    const { hidden } = modifier

    it('Should have an `open` key, and the value should be `"\\u001B[8m"!`', () => {
      expect(hidden.open).toBe('\u001B[8m')
    })

    it('Should have a `close` key, and the value should be `"\\u001B[28m"!`', () => {
      expect(hidden.close).toBe('\u001B[28m')
    })
  })

  describe('Test `strikethrough` property:', () => {
    it('Should have a `strikethrough` property!', () => {
      expect(modifier).toHaveProperty('strikethrough')
    })

    const { strikethrough } = modifier

    it('Should have an `open` key, and the value should be `"\\u001B[9m"!`', () => {
      expect(strikethrough.open).toBe('\u001B[9m')
    })

    it('Should have a `close` key, and the value should be `"\\u001B[29m"!`', () => {
      expect(strikethrough.close).toBe('\u001B[29m')
    })
  })

  describe('Test `overline` property:', () => {
    it('Should have an `overline` property!', () => {
      expect(modifier).toHaveProperty('overline')
    })

    const { overline } = modifier

    it('Should have an `open` key, and the value should be `"\\u001B[53m"!`', () => {
      expect(overline.open).toBe('\u001B[53m')
    })

    it('Should have a `close` key, and the value should be `"\\u001B[55m"!`', () => {
      expect(overline.close).toBe('\u001B[55m')
    })
  })
})
