import '@/utils/index.test'

import foregroundColor from './foregroundColor'

describe('Test `foregroundColor` styles:', () => {
  describe('Test `black` property:', () => {
    it('Should have a `black` property!', () => {
      expect(foregroundColor).toHaveProperty('black')
    })

    const { black } = foregroundColor

    it('Should have an `open` key, and the value should be `"\\u001B[30m"!`', () => {
      expect(black.open).toBe('\u001B[30m')
    })

    it('Should have a `close` key, and the value should be `"\\u001B[39m"!`', () => {
      expect(black.close).toBe('\u001B[39m')
    })
  })

  describe('Test `red` property:', () => {
    it('Should have a `red` property!', () => {
      expect(foregroundColor).toHaveProperty('red')
    })

    const { red } = foregroundColor

    it('Should have an `open` key, and the value should be `"\\u001B[31m"!`', () => {
      expect(red.open).toBe('\u001B[31m')
    })

    it('Should have a `close` key, and the value should be `"\\u001B[39m"!`', () => {
      expect(red.close).toBe('\u001B[39m')
    })
  })

  describe('Test `green` property:', () => {
    it('Should have a `green` property!', () => {
      expect(foregroundColor).toHaveProperty('green')
    })

    const { green } = foregroundColor

    it('Should have an `open` key, and the value should be `"\\u001B[32m"!`', () => {
      expect(green.open).toBe('\u001B[32m')
    })

    it('Should have a `close` key, and the value should be `"\\u001B[39m"!`', () => {
      expect(green.close).toBe('\u001B[39m')
    })
  })

  describe('Test `yellow` property:', () => {
    it('Should have a `yellow` property!', () => {
      expect(foregroundColor).toHaveProperty('yellow')
    })

    const { yellow } = foregroundColor

    it('Should have an `open` key, and the value should be `"\\u001B[33m"!`', () => {
      expect(yellow.open).toBe('\u001B[33m')
    })

    it('Should have a `close` key, and the value should be `"\\u001B[39m"!`', () => {
      expect(yellow.close).toBe('\u001B[39m')
    })
  })

  describe('Test `blue` property:', () => {
    it('Should have a `blue` property!', () => {
      expect(foregroundColor).toHaveProperty('blue')
    })

    const { blue } = foregroundColor

    it('Should have an `open` key, and the value should be `"\\u001B[34m"!`', () => {
      expect(blue.open).toBe('\u001B[34m')
    })

    it('Should have a `close` key, and the value should be `"\\u001B[39m"!`', () => {
      expect(blue.close).toBe('\u001B[39m')
    })
  })

  describe('Test `magenta` property:', () => {
    it('Should have a `magenta` property!', () => {
      expect(foregroundColor).toHaveProperty('magenta')
    })

    const { magenta } = foregroundColor

    it('Should have an `open` key, and the value should be `"\\u001B[35m"!`', () => {
      expect(magenta.open).toBe('\u001B[35m')
    })

    it('Should have a `close` key, and the value should be `"\\u001B[39m"!`', () => {
      expect(magenta.close).toBe('\u001B[39m')
    })
  })

  describe('Test `cyan` property:', () => {
    it('Should have a `cyan` property!', () => {
      expect(foregroundColor).toHaveProperty('cyan')
    })

    const { cyan } = foregroundColor

    it('Should have an `open` key, and the value should be `"\\u001B[36m"!`', () => {
      expect(cyan.open).toBe('\u001B[36m')
    })

    it('Should have a `close` key, and the value should be `"\\u001B[39m"!`', () => {
      expect(cyan.close).toBe('\u001B[39m')
    })
  })

  describe('Test `white` property:', () => {
    it('Should have a `white` property!', () => {
      expect(foregroundColor).toHaveProperty('white')
    })

    const { white } = foregroundColor

    it('Should have an `open` key, and the value should be `"\\u001B[37m"!`', () => {
      expect(white.open).toBe('\u001B[37m')
    })

    it('Should have a `close` key, and the value should be `"\\u001B[39m"!`', () => {
      expect(white.close).toBe('\u001B[39m')
    })
  })

  // bright color

  describe('Test `gray` property:', () => {
    it('Should have a `gray` property!', () => {
      expect(foregroundColor).toHaveProperty('gray')
    })

    const { gray } = foregroundColor

    it('Should have an `open` key, and the value should be `"\\u001B[90m"!`', () => {
      expect(gray.open).toBe('\u001B[90m')
    })

    it('Should have a `close` key, and the value should be `"\\u001B[39m"!`', () => {
      expect(gray.close).toBe('\u001B[39m')
    })
  })

  describe('Test `grey` property:', () => {
    it('Should have a `grey` property!', () => {
      expect(foregroundColor).toHaveProperty('grey')
    })

    const { grey } = foregroundColor

    it('Should have an `open` key, and the value should be `"\\u001B[90m"!`', () => {
      expect(grey.open).toBe('\u001B[90m')
    })

    it('Should have a `close` key, and the value should be `"\\u001B[39m"!`', () => {
      expect(grey.close).toBe('\u001B[39m')
    })
  })

  describe('Test `blackBright` property:', () => {
    it('Should have a `blackBright` property!', () => {
      expect(foregroundColor).toHaveProperty('blackBright')
    })

    const { blackBright } = foregroundColor

    it('Should have an `open` key, and the value should be `"\\u001B[90m"!`', () => {
      expect(blackBright.open).toBe('\u001B[90m')
    })

    it('Should have a `close` key, and the value should be `"\\u001B[39m"!`', () => {
      expect(blackBright.close).toBe('\u001B[39m')
    })
  })

  describe('Test `redBright` property:', () => {
    it('Should have a `redBright` property!', () => {
      expect(foregroundColor).toHaveProperty('redBright')
    })

    const { redBright } = foregroundColor

    it('Should have an `open` key, and the value should be `"\\u001B[91m"!`', () => {
      expect(redBright.open).toBe('\u001B[91m')
    })

    it('Should have a `close` key, and the value should be `"\\u001B[39m"!`', () => {
      expect(redBright.close).toBe('\u001B[39m')
    })
  })

  describe('Test `greenBright` property:', () => {
    it('Should have a `greenBright` property!', () => {
      expect(foregroundColor).toHaveProperty('greenBright')
    })

    const { greenBright } = foregroundColor

    it('Should have an `open` key, and the value should be `"\\u001B[92m"!`', () => {
      expect(greenBright.open).toBe('\u001B[92m')
    })

    it('Should have a `close` key, and the value should be `"\\u001B[39m"!`', () => {
      expect(greenBright.close).toBe('\u001B[39m')
    })
  })

  describe('Test `yellowBright` property:', () => {
    it('Should have a `yellowBright` property!', () => {
      expect(foregroundColor).toHaveProperty('yellowBright')
    })

    const { yellowBright } = foregroundColor

    it('Should have an `open` key, and the value should be `"\\u001B[93m"!`', () => {
      expect(yellowBright.open).toBe('\u001B[93m')
    })

    it('Should have a `close` key, and the value should be `"\\u001B[39m"!`', () => {
      expect(yellowBright.close).toBe('\u001B[39m')
    })
  })

  describe('Test `blueBright` property:', () => {
    it('Should have a `blueBright` property!', () => {
      expect(foregroundColor).toHaveProperty('blueBright')
    })

    const { blueBright } = foregroundColor

    it('Should have an `open` key, and the value should be `"\\u001B[94m"!`', () => {
      expect(blueBright.open).toBe('\u001B[94m')
    })

    it('Should have a `close` key, and the value should be `"\\u001B[39m"!`', () => {
      expect(blueBright.close).toBe('\u001B[39m')
    })
  })

  describe('Test `magentaBright` property:', () => {
    it('Should have a `magentaBright` property!', () => {
      expect(foregroundColor).toHaveProperty('magentaBright')
    })

    const { magentaBright } = foregroundColor

    it('Should have an `open` key, and the value should be `"\\u001B[95m"!`', () => {
      expect(magentaBright.open).toBe('\u001B[95m')
    })

    it('Should have a `close` key, and the value should be `"\\u001B[39m"!`', () => {
      expect(magentaBright.close).toBe('\u001B[39m')
    })
  })

  describe('Test `cyanBright` property:', () => {
    it('Should have a `cyanBright` property!', () => {
      expect(foregroundColor).toHaveProperty('cyanBright')
    })

    const { cyanBright } = foregroundColor

    it('Should have an `open` key, and the value should be `"\\u001B[96m"!`', () => {
      expect(cyanBright.open).toBe('\u001B[96m')
    })

    it('Should have a `close` key, and the value should be `"\\u001B[39m"!`', () => {
      expect(cyanBright.close).toBe('\u001B[39m')
    })
  })

  describe('Test `whiteBright` property:', () => {
    it('Should have a `whiteBright` property!', () => {
      expect(foregroundColor).toHaveProperty('whiteBright')
    })

    const { whiteBright } = foregroundColor

    it('Should have an `open` key, and the value should be `"\\u001B[97m"!`', () => {
      expect(whiteBright.open).toBe('\u001B[97m')
    })

    it('Should have a `close` key, and the value should be `"\\u001B[39m"!`', () => {
      expect(whiteBright.close).toBe('\u001B[39m')
    })
  })
})
