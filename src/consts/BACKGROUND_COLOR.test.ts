import BACKGROUND_COLOR, { BACKGROUND_COLOR_CLOSE } from './BACKGROUND_COLOR'

describe('Test `BACKGROUND_COLOR` constant:', () => {
  describe('Test `bgBlack` property:', () => {
    it('Should have a `bgBlack` property!', () => {
      expect(BACKGROUND_COLOR).toHaveProperty('bgBlack')
    })

    const { bgBlack } = BACKGROUND_COLOR

    it('Should be an array!', () => {
      expect(Array.isArray(bgBlack)).toBe(true)
    })

    it('Should be `40` for the first index!', () => {
      expect(bgBlack[0]).toBe(40)
    })

    it('Should be `49` for the second index!', () => {
      expect(bgBlack[1]).toBe(49)
    })
  })

  describe('Test `bgRed` property:', () => {
    it('Should have a `bgRed` property!', () => {
      expect(BACKGROUND_COLOR).toHaveProperty('bgRed')
    })

    const { bgRed } = BACKGROUND_COLOR

    it('Should be an array!', () => {
      expect(Array.isArray(bgRed)).toBe(true)
    })

    it('Should be `41` for the first index!', () => {
      expect(bgRed[0]).toBe(41)
    })

    it('Should be `49` for the second index!', () => {
      expect(bgRed[1]).toBe(49)
    })
  })

  describe('Test `bgGreen` property:', () => {
    it('Should have a `bgGreen` property!', () => {
      expect(BACKGROUND_COLOR).toHaveProperty('bgGreen')
    })

    const { bgGreen } = BACKGROUND_COLOR

    it('Should be an array!', () => {
      expect(Array.isArray(bgGreen)).toBe(true)
    })

    it('Should be `42` for the first index!', () => {
      expect(bgGreen[0]).toBe(42)
    })

    it('Should be `49` for the second index!', () => {
      expect(bgGreen[1]).toBe(49)
    })
  })

  describe('Test `bgYellow` property:', () => {
    it('Should have a `bgYellow` property!', () => {
      expect(BACKGROUND_COLOR).toHaveProperty('bgYellow')
    })

    const { bgYellow } = BACKGROUND_COLOR

    it('Should be an array!', () => {
      expect(Array.isArray(bgYellow)).toBe(true)
    })

    it('Should be `43` for the first index!', () => {
      expect(bgYellow[0]).toBe(43)
    })

    it('Should be `49` for the second index!', () => {
      expect(bgYellow[1]).toBe(49)
    })
  })

  describe('Test `bgBlue` property:', () => {
    it('Should have a `bgBlue` property!', () => {
      expect(BACKGROUND_COLOR).toHaveProperty('bgBlue')
    })

    const { bgBlue } = BACKGROUND_COLOR

    it('Should be an array!', () => {
      expect(Array.isArray(bgBlue)).toBe(true)
    })

    it('Should be `44` for the first index!', () => {
      expect(bgBlue[0]).toBe(44)
    })

    it('Should be `49` for the second index!', () => {
      expect(bgBlue[1]).toBe(49)
    })
  })

  describe('Test `bgMagenta` property:', () => {
    it('Should have a `bgMagenta` property!', () => {
      expect(BACKGROUND_COLOR).toHaveProperty('bgMagenta')
    })

    const { bgMagenta } = BACKGROUND_COLOR

    it('Should be an array!', () => {
      expect(Array.isArray(bgMagenta)).toBe(true)
    })

    it('Should be `45` for the first index!', () => {
      expect(bgMagenta[0]).toBe(45)
    })

    it('Should be `49` for the second index!', () => {
      expect(bgMagenta[1]).toBe(49)
    })
  })

  describe('Test `bgCyan` property:', () => {
    it('Should have a `bgCyan` property!', () => {
      expect(BACKGROUND_COLOR).toHaveProperty('bgCyan')
    })

    const { bgCyan } = BACKGROUND_COLOR

    it('Should be an array!', () => {
      expect(Array.isArray(bgCyan)).toBe(true)
    })

    it('Should be `46` for the first index!', () => {
      expect(bgCyan[0]).toBe(46)
    })

    it('Should be `49` for the second index!', () => {
      expect(bgCyan[1]).toBe(49)
    })
  })

  describe('Test `bgWhite` property:', () => {
    it('Should have a `bgWhite` property!', () => {
      expect(BACKGROUND_COLOR).toHaveProperty('bgWhite')
    })

    const { bgWhite } = BACKGROUND_COLOR

    it('Should be an array!', () => {
      expect(Array.isArray(bgWhite)).toBe(true)
    })

    it('Should be `47` for the first index!', () => {
      expect(bgWhite[0]).toBe(47)
    })

    it('Should be `49` for the second index!', () => {
      expect(bgWhite[1]).toBe(49)
    })
  })

  // bright color

  describe('Test `bgGray` property:', () => {
    it('Should have a `bgGray` property!', () => {
      expect(BACKGROUND_COLOR).toHaveProperty('bgGray')
    })

    const { bgGray } = BACKGROUND_COLOR

    it('Should be an array!', () => {
      expect(Array.isArray(bgGray)).toBe(true)
    })

    it('Should be `100` for the first index!', () => {
      expect(bgGray[0]).toBe(100)
    })

    it('Should be `49` for the second index!', () => {
      expect(bgGray[1]).toBe(49)
    })
  })

  describe('Test `bgGrey` property:', () => {
    it('Should have a `bgGrey` property!', () => {
      expect(BACKGROUND_COLOR).toHaveProperty('bgGrey')
    })

    const { bgGrey } = BACKGROUND_COLOR

    it('Should be an array!', () => {
      expect(Array.isArray(bgGrey)).toBe(true)
    })

    it('Should be `100` for the first index!', () => {
      expect(bgGrey[0]).toBe(100)
    })

    it('Should be `49` for the second index!', () => {
      expect(bgGrey[1]).toBe(49)
    })
  })

  describe('Test `bgBlackBright` property:', () => {
    it('Should have a `bgBlackBright` property!', () => {
      expect(BACKGROUND_COLOR).toHaveProperty('bgBlackBright')
    })

    const { bgBlackBright } = BACKGROUND_COLOR

    it('Should be an array!', () => {
      expect(Array.isArray(bgBlackBright)).toBe(true)
    })

    it('Should be `100` for the first index!', () => {
      expect(bgBlackBright[0]).toBe(100)
    })

    it('Should be `49` for the second index!', () => {
      expect(bgBlackBright[1]).toBe(49)
    })
  })

  describe('Test `bgRedBright` property:', () => {
    it('Should have a `bgRedBright` property!', () => {
      expect(BACKGROUND_COLOR).toHaveProperty('bgRedBright')
    })

    const { bgRedBright } = BACKGROUND_COLOR

    it('Should be an array!', () => {
      expect(Array.isArray(bgRedBright)).toBe(true)
    })

    it('Should be `101` for the first index!', () => {
      expect(bgRedBright[0]).toBe(101)
    })

    it('Should be `49` for the second index!', () => {
      expect(bgRedBright[1]).toBe(49)
    })
  })

  describe('Test `bgGreenBright` property:', () => {
    it('Should have a `bgGreenBright` property!', () => {
      expect(BACKGROUND_COLOR).toHaveProperty('bgGreenBright')
    })

    const { bgGreenBright } = BACKGROUND_COLOR

    it('Should be an array!', () => {
      expect(Array.isArray(bgGreenBright)).toBe(true)
    })

    it('Should be `102` for the first index!', () => {
      expect(bgGreenBright[0]).toBe(102)
    })

    it('Should be `49` for the second index!', () => {
      expect(bgGreenBright[1]).toBe(49)
    })
  })

  describe('Test `bgYellowBright` property:', () => {
    it('Should have a `bgYellowBright` property!', () => {
      expect(BACKGROUND_COLOR).toHaveProperty('bgYellowBright')
    })

    const { bgYellowBright } = BACKGROUND_COLOR

    it('Should be an array!', () => {
      expect(Array.isArray(bgYellowBright)).toBe(true)
    })

    it('Should be `103` for the first index!', () => {
      expect(bgYellowBright[0]).toBe(103)
    })

    it('Should be `49` for the second index!', () => {
      expect(bgYellowBright[1]).toBe(49)
    })
  })

  describe('Test `bgBlueBright` property:', () => {
    it('Should have a `bgBlueBright` property!', () => {
      expect(BACKGROUND_COLOR).toHaveProperty('bgBlueBright')
    })

    const { bgBlueBright } = BACKGROUND_COLOR

    it('Should be an array!', () => {
      expect(Array.isArray(bgBlueBright)).toBe(true)
    })

    it('Should be `104` for the first index!', () => {
      expect(bgBlueBright[0]).toBe(104)
    })

    it('Should be `49` for the second index!', () => {
      expect(bgBlueBright[1]).toBe(49)
    })
  })

  describe('Test `bgMagentaBright` property:', () => {
    it('Should have a `bgMagentaBright` property!', () => {
      expect(BACKGROUND_COLOR).toHaveProperty('bgMagentaBright')
    })

    const { bgMagentaBright } = BACKGROUND_COLOR

    it('Should be an array!', () => {
      expect(Array.isArray(bgMagentaBright)).toBe(true)
    })

    it('Should be `105` for the first index!', () => {
      expect(bgMagentaBright[0]).toBe(105)
    })

    it('Should be `49` for the second index!', () => {
      expect(bgMagentaBright[1]).toBe(49)
    })
  })

  describe('Test `bgCyanBright` property:', () => {
    it('Should have a `bgCyanBright` property!', () => {
      expect(BACKGROUND_COLOR).toHaveProperty('bgCyanBright')
    })

    const { bgCyanBright } = BACKGROUND_COLOR

    it('Should be an array!', () => {
      expect(Array.isArray(bgCyanBright)).toBe(true)
    })

    it('Should be `106` for the first index!', () => {
      expect(bgCyanBright[0]).toBe(106)
    })

    it('Should be `49` for the second index!', () => {
      expect(bgCyanBright[1]).toBe(49)
    })
  })

  describe('Test `bgWhiteBright` property:', () => {
    it('Should have a `bgWhiteBright` property!', () => {
      expect(BACKGROUND_COLOR).toHaveProperty('bgWhiteBright')
    })

    const { bgWhiteBright } = BACKGROUND_COLOR

    it('Should be an array!', () => {
      expect(Array.isArray(bgWhiteBright)).toBe(true)
    })

    it('Should be `107` for the first index!', () => {
      expect(bgWhiteBright[0]).toBe(107)
    })

    it('Should be `49` for the second index!', () => {
      expect(bgWhiteBright[1]).toBe(49)
    })
  })

  // close value

  describe('Test `BACKGROUND_COLOR_CLOSE` constant:', () => {
    it('Should be an integer!', () => {
      expect(Number.isInteger(BACKGROUND_COLOR_CLOSE)).toBe(true)
    })

    it('Value should be `49`!', () => {
      expect(BACKGROUND_COLOR_CLOSE).toBe(49)
    })
  })
})
