import FOREGROUND_COLOR, { FOREGROUND_COLOR_CLOSE } from './FOREGROUND_COLOR'

describe('Test `FOREGROUND_COLOR` constant:', () => {
  describe('Test `black` property:', () => {
    it('Should have a `black` property!', () => {
      expect(FOREGROUND_COLOR).toHaveProperty('black')
    })

    const { black } = FOREGROUND_COLOR

    it('Should be an array!', () => {
      expect(Array.isArray(black)).toBe(true)
    })

    it('Should be `30` for the first index!', () => {
      expect(black[0]).toBe(30)
    })

    it('Should be `39` for the second index!', () => {
      expect(black[1]).toBe(39)
    })
  })

  describe('Test `red` property:', () => {
    it('Should have a `red` property!', () => {
      expect(FOREGROUND_COLOR).toHaveProperty('red')
    })

    const { red } = FOREGROUND_COLOR

    it('Should be an array!', () => {
      expect(Array.isArray(red)).toBe(true)
    })

    it('Should be `31` for the first index!', () => {
      expect(red[0]).toBe(31)
    })

    it('Should be `39` for the second index!', () => {
      expect(red[1]).toBe(39)
    })
  })

  describe('Test `green` property:', () => {
    it('Should have a `green` property!', () => {
      expect(FOREGROUND_COLOR).toHaveProperty('green')
    })

    const { green } = FOREGROUND_COLOR

    it('Should be an array!', () => {
      expect(Array.isArray(green)).toBe(true)
    })

    it('Should be `32` for the first index!', () => {
      expect(green[0]).toBe(32)
    })

    it('Should be `39` for the second index!', () => {
      expect(green[1]).toBe(39)
    })
  })

  describe('Test `yellow` property:', () => {
    it('Should have a `yellow` property!', () => {
      expect(FOREGROUND_COLOR).toHaveProperty('yellow')
    })

    const { yellow } = FOREGROUND_COLOR

    it('Should be an array!', () => {
      expect(Array.isArray(yellow)).toBe(true)
    })

    it('Should be `33` for the first index!', () => {
      expect(yellow[0]).toBe(33)
    })

    it('Should be `39` for the second index!', () => {
      expect(yellow[1]).toBe(39)
    })
  })

  describe('Test `blue` property:', () => {
    it('Should have a `blue` property!', () => {
      expect(FOREGROUND_COLOR).toHaveProperty('blue')
    })

    const { blue } = FOREGROUND_COLOR

    it('Should be an array!', () => {
      expect(Array.isArray(blue)).toBe(true)
    })

    it('Should be `34` for the first index!', () => {
      expect(blue[0]).toBe(34)
    })

    it('Should be `39` for the second index!', () => {
      expect(blue[1]).toBe(39)
    })
  })

  describe('Test `magenta` property:', () => {
    it('Should have a `magenta` property!', () => {
      expect(FOREGROUND_COLOR).toHaveProperty('magenta')
    })

    const { magenta } = FOREGROUND_COLOR

    it('Should be an array!', () => {
      expect(Array.isArray(magenta)).toBe(true)
    })

    it('Should be `35` for the first index!', () => {
      expect(magenta[0]).toBe(35)
    })

    it('Should be `39` for the second index!', () => {
      expect(magenta[1]).toBe(39)
    })
  })

  describe('Test `cyan` property:', () => {
    it('Should have a `cyan` property!', () => {
      expect(FOREGROUND_COLOR).toHaveProperty('cyan')
    })

    const { cyan } = FOREGROUND_COLOR

    it('Should be an array!', () => {
      expect(Array.isArray(cyan)).toBe(true)
    })

    it('Should be `36` for the first index!', () => {
      expect(cyan[0]).toBe(36)
    })

    it('Should be `39` for the second index!', () => {
      expect(cyan[1]).toBe(39)
    })
  })

  describe('Test `white` property:', () => {
    it('Should have a `white` property!', () => {
      expect(FOREGROUND_COLOR).toHaveProperty('white')
    })

    const { white } = FOREGROUND_COLOR

    it('Should be an array!', () => {
      expect(Array.isArray(white)).toBe(true)
    })

    it('Should be `37` for the first index!', () => {
      expect(white[0]).toBe(37)
    })

    it('Should be `39` for the second index!', () => {
      expect(white[1]).toBe(39)
    })
  })

  // bright color

  describe('Test `gray` property:', () => {
    it('Should have a `gray` property!', () => {
      expect(FOREGROUND_COLOR).toHaveProperty('gray')
    })

    const { gray } = FOREGROUND_COLOR

    it('Should be an array!', () => {
      expect(Array.isArray(gray)).toBe(true)
    })

    it('Should be `90` for the first index!', () => {
      expect(gray[0]).toBe(90)
    })

    it('Should be `39` for the second index!', () => {
      expect(gray[1]).toBe(39)
    })
  })

  describe('Test `grey` property:', () => {
    it('Should have a `grey` property!', () => {
      expect(FOREGROUND_COLOR).toHaveProperty('grey')
    })

    const { grey } = FOREGROUND_COLOR

    it('Should be an array!', () => {
      expect(Array.isArray(grey)).toBe(true)
    })

    it('Should be `90` for the first index!', () => {
      expect(grey[0]).toBe(90)
    })

    it('Should be `39` for the second index!', () => {
      expect(grey[1]).toBe(39)
    })
  })

  describe('Test `blackBright` property:', () => {
    it('Should have a `blackBright` property!', () => {
      expect(FOREGROUND_COLOR).toHaveProperty('blackBright')
    })

    const { blackBright } = FOREGROUND_COLOR

    it('Should be an array!', () => {
      expect(Array.isArray(blackBright)).toBe(true)
    })

    it('Should be `90` for the first index!', () => {
      expect(blackBright[0]).toBe(90)
    })

    it('Should be `39` for the second index!', () => {
      expect(blackBright[1]).toBe(39)
    })
  })

  describe('Test `redBright` property:', () => {
    it('Should have a `redBright` property!', () => {
      expect(FOREGROUND_COLOR).toHaveProperty('redBright')
    })

    const { redBright } = FOREGROUND_COLOR

    it('Should be an array!', () => {
      expect(Array.isArray(redBright)).toBe(true)
    })

    it('Should be `91` for the first index!', () => {
      expect(redBright[0]).toBe(91)
    })

    it('Should be `39` for the second index!', () => {
      expect(redBright[1]).toBe(39)
    })
  })

  describe('Test `greenBright` property:', () => {
    it('Should have a `greenBright` property!', () => {
      expect(FOREGROUND_COLOR).toHaveProperty('greenBright')
    })

    const { greenBright } = FOREGROUND_COLOR

    it('Should be an array!', () => {
      expect(Array.isArray(greenBright)).toBe(true)
    })

    it('Should be `92` for the first index!', () => {
      expect(greenBright[0]).toBe(92)
    })

    it('Should be `39` for the second index!', () => {
      expect(greenBright[1]).toBe(39)
    })
  })

  describe('Test `yellowBright` property:', () => {
    it('Should have a `yellowBright` property!', () => {
      expect(FOREGROUND_COLOR).toHaveProperty('yellowBright')
    })

    const { yellowBright } = FOREGROUND_COLOR

    it('Should be an array!', () => {
      expect(Array.isArray(yellowBright)).toBe(true)
    })

    it('Should be `93` for the first index!', () => {
      expect(yellowBright[0]).toBe(93)
    })

    it('Should be `39` for the second index!', () => {
      expect(yellowBright[1]).toBe(39)
    })
  })

  describe('Test `blueBright` property:', () => {
    it('Should have a `blueBright` property!', () => {
      expect(FOREGROUND_COLOR).toHaveProperty('blueBright')
    })

    const { blueBright } = FOREGROUND_COLOR

    it('Should be an array!', () => {
      expect(Array.isArray(blueBright)).toBe(true)
    })

    it('Should be `94` for the first index!', () => {
      expect(blueBright[0]).toBe(94)
    })

    it('Should be `39` for the second index!', () => {
      expect(blueBright[1]).toBe(39)
    })
  })

  describe('Test `magentaBright` property:', () => {
    it('Should have a `magentaBright` property!', () => {
      expect(FOREGROUND_COLOR).toHaveProperty('magentaBright')
    })

    const { magentaBright } = FOREGROUND_COLOR

    it('Should be an array!', () => {
      expect(Array.isArray(magentaBright)).toBe(true)
    })

    it('Should be `95` for the first index!', () => {
      expect(magentaBright[0]).toBe(95)
    })

    it('Should be `39` for the second index!', () => {
      expect(magentaBright[1]).toBe(39)
    })
  })

  describe('Test `cyanBright` property:', () => {
    it('Should have a `cyanBright` property!', () => {
      expect(FOREGROUND_COLOR).toHaveProperty('cyanBright')
    })

    const { cyanBright } = FOREGROUND_COLOR

    it('Should be an array!', () => {
      expect(Array.isArray(cyanBright)).toBe(true)
    })

    it('Should be `96` for the first index!', () => {
      expect(cyanBright[0]).toBe(96)
    })

    it('Should be `39` for the second index!', () => {
      expect(cyanBright[1]).toBe(39)
    })
  })

  describe('Test `whiteBright` property:', () => {
    it('Should have a `whiteBright` property!', () => {
      expect(FOREGROUND_COLOR).toHaveProperty('whiteBright')
    })

    const { whiteBright } = FOREGROUND_COLOR

    it('Should be an array!', () => {
      expect(Array.isArray(whiteBright)).toBe(true)
    })

    it('Should be `97` for the first index!', () => {
      expect(whiteBright[0]).toBe(97)
    })

    it('Should be `39` for the second index!', () => {
      expect(whiteBright[1]).toBe(39)
    })
  })

  // close value

  describe('Test `FOREGROUND_COLOR_CLOSE` constant:', () => {
    it('Should be an integer!', () => {
      expect(Number.isInteger(FOREGROUND_COLOR_CLOSE)).toBe(true)
    })

    it('Value should be `39`!', () => {
      expect(FOREGROUND_COLOR_CLOSE).toBe(39)
    })
  })
})
