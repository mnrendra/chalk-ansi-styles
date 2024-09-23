import '@/utils/index.test'

import backgroundColor from './backgroundColor'

describe('Test `backgroundColor` styles:', () => {
  describe('Test `bgBlack` property:', () => {
    it('Should have a `bgBlack` property!', () => {
      expect(backgroundColor).toHaveProperty('bgBlack')
    })

    const { bgBlack } = backgroundColor

    it('Should have an `open` key, and the value should be `"\\u001B[40m"!`', () => {
      expect(bgBlack.open).toBe('\u001B[40m')
    })

    it('Should have a `close` key, and the value should be `"\\u001B[49m"!`', () => {
      expect(bgBlack.close).toBe('\u001B[49m')
    })
  })

  describe('Test `bgRed` property:', () => {
    it('Should have a `bgRed` property!', () => {
      expect(backgroundColor).toHaveProperty('bgRed')
    })

    const { bgRed } = backgroundColor

    it('Should have an `open` key, and the value should be `"\\u001B[41m"!`', () => {
      expect(bgRed.open).toBe('\u001B[41m')
    })

    it('Should have a `close` key, and the value should be `"\\u001B[49m"!`', () => {
      expect(bgRed.close).toBe('\u001B[49m')
    })
  })

  describe('Test `bgGreen` property:', () => {
    it('Should have a `bgGreen` property!', () => {
      expect(backgroundColor).toHaveProperty('bgGreen')
    })

    const { bgGreen } = backgroundColor

    it('Should have an `open` key, and the value should be `"\\u001B[42m"!`', () => {
      expect(bgGreen.open).toBe('\u001B[42m')
    })

    it('Should have a `close` key, and the value should be `"\\u001B[49m"!`', () => {
      expect(bgGreen.close).toBe('\u001B[49m')
    })
  })

  describe('Test `bgYellow` property:', () => {
    it('Should have a `bgYellow` property!', () => {
      expect(backgroundColor).toHaveProperty('bgYellow')
    })

    const { bgYellow } = backgroundColor

    it('Should have an `open` key, and the value should be `"\\u001B[43m"!`', () => {
      expect(bgYellow.open).toBe('\u001B[43m')
    })

    it('Should have a `close` key, and the value should be `"\\u001B[49m"!`', () => {
      expect(bgYellow.close).toBe('\u001B[49m')
    })
  })

  describe('Test `bgBlue` property:', () => {
    it('Should have a `bgBlue` property!', () => {
      expect(backgroundColor).toHaveProperty('bgBlue')
    })

    const { bgBlue } = backgroundColor

    it('Should have an `open` key, and the value should be `"\\u001B[44m"!`', () => {
      expect(bgBlue.open).toBe('\u001B[44m')
    })

    it('Should have a `close` key, and the value should be `"\\u001B[49m"!`', () => {
      expect(bgBlue.close).toBe('\u001B[49m')
    })
  })

  describe('Test `bgMagenta` property:', () => {
    it('Should have a `bgMagenta` property!', () => {
      expect(backgroundColor).toHaveProperty('bgMagenta')
    })

    const { bgMagenta } = backgroundColor

    it('Should have an `open` key, and the value should be `"\\u001B[45m"!`', () => {
      expect(bgMagenta.open).toBe('\u001B[45m')
    })

    it('Should have a `close` key, and the value should be `"\\u001B[49m"!`', () => {
      expect(bgMagenta.close).toBe('\u001B[49m')
    })
  })

  describe('Test `bgCyan` property:', () => {
    it('Should have a `bgCyan` property!', () => {
      expect(backgroundColor).toHaveProperty('bgCyan')
    })

    const { bgCyan } = backgroundColor

    it('Should have an `open` key, and the value should be `"\\u001B[46m"!`', () => {
      expect(bgCyan.open).toBe('\u001B[46m')
    })

    it('Should have a `close` key, and the value should be `"\\u001B[49m"!`', () => {
      expect(bgCyan.close).toBe('\u001B[49m')
    })
  })

  describe('Test `bgWhite` property:', () => {
    it('Should have a `bgWhite` property!', () => {
      expect(backgroundColor).toHaveProperty('bgWhite')
    })

    const { bgWhite } = backgroundColor

    it('Should have an `open` key, and the value should be `"\\u001B[47m"!`', () => {
      expect(bgWhite.open).toBe('\u001B[47m')
    })

    it('Should have a `close` key, and the value should be `"\\u001B[49m"!`', () => {
      expect(bgWhite.close).toBe('\u001B[49m')
    })
  })

  // bright color

  describe('Test `bgGray` property:', () => {
    it('Should have a `bgGray` property!', () => {
      expect(backgroundColor).toHaveProperty('bgGray')
    })

    const { bgGray } = backgroundColor

    it('Should have an `open` key, and the value should be `"\\u001B[100m"!`', () => {
      expect(bgGray.open).toBe('\u001B[100m')
    })

    it('Should have a `close` key, and the value should be `"\\u001B[49m"!`', () => {
      expect(bgGray.close).toBe('\u001B[49m')
    })
  })

  describe('Test `bgGrey` property:', () => {
    it('Should have a `bgGrey` property!', () => {
      expect(backgroundColor).toHaveProperty('bgGrey')
    })

    const { bgGrey } = backgroundColor

    it('Should have an `open` key, and the value should be `"\\u001B[100m"!`', () => {
      expect(bgGrey.open).toBe('\u001B[100m')
    })

    it('Should have a `close` key, and the value should be `"\\u001B[49m"!`', () => {
      expect(bgGrey.close).toBe('\u001B[49m')
    })
  })

  describe('Test `bgBlackBright` property:', () => {
    it('Should have a `bgBlackBright` property!', () => {
      expect(backgroundColor).toHaveProperty('bgBlackBright')
    })

    const { bgBlackBright } = backgroundColor

    it('Should have an `open` key, and the value should be `"\\u001B[100m"!`', () => {
      expect(bgBlackBright.open).toBe('\u001B[100m')
    })

    it('Should have a `close` key, and the value should be `"\\u001B[49m"!`', () => {
      expect(bgBlackBright.close).toBe('\u001B[49m')
    })
  })

  describe('Test `bgRedBright` property:', () => {
    it('Should have a `bgRedBright` property!', () => {
      expect(backgroundColor).toHaveProperty('bgRedBright')
    })

    const { bgRedBright } = backgroundColor

    it('Should have an `open` key, and the value should be `"\\u001B[101m"!`', () => {
      expect(bgRedBright.open).toBe('\u001B[101m')
    })

    it('Should have a `close` key, and the value should be `"\\u001B[49m"!`', () => {
      expect(bgRedBright.close).toBe('\u001B[49m')
    })
  })

  describe('Test `bgGreenBright` property:', () => {
    it('Should have a `bgGreenBright` property!', () => {
      expect(backgroundColor).toHaveProperty('bgGreenBright')
    })

    const { bgGreenBright } = backgroundColor

    it('Should have an `open` key, and the value should be `"\\u001B[102m"!`', () => {
      expect(bgGreenBright.open).toBe('\u001B[102m')
    })

    it('Should have a `close` key, and the value should be `"\\u001B[49m"!`', () => {
      expect(bgGreenBright.close).toBe('\u001B[49m')
    })
  })

  describe('Test `bgYellowBright` property:', () => {
    it('Should have a `bgYellowBright` property!', () => {
      expect(backgroundColor).toHaveProperty('bgYellowBright')
    })

    const { bgYellowBright } = backgroundColor

    it('Should have an `open` key, and the value should be `"\\u001B[103m"!`', () => {
      expect(bgYellowBright.open).toBe('\u001B[103m')
    })

    it('Should have a `close` key, and the value should be `"\\u001B[49m"!`', () => {
      expect(bgYellowBright.close).toBe('\u001B[49m')
    })
  })

  describe('Test `bgBlueBright` property:', () => {
    it('Should have a `bgBlueBright` property!', () => {
      expect(backgroundColor).toHaveProperty('bgBlueBright')
    })

    const { bgBlueBright } = backgroundColor

    it('Should have an `open` key, and the value should be `"\\u001B[104m"!`', () => {
      expect(bgBlueBright.open).toBe('\u001B[104m')
    })

    it('Should have a `close` key, and the value should be `"\\u001B[49m"!`', () => {
      expect(bgBlueBright.close).toBe('\u001B[49m')
    })
  })

  describe('Test `bgMagentaBright` property:', () => {
    it('Should have a `bgMagentaBright` property!', () => {
      expect(backgroundColor).toHaveProperty('bgMagentaBright')
    })

    const { bgMagentaBright } = backgroundColor

    it('Should have an `open` key, and the value should be `"\\u001B[105m"!`', () => {
      expect(bgMagentaBright.open).toBe('\u001B[105m')
    })

    it('Should have a `close` key, and the value should be `"\\u001B[49m"!`', () => {
      expect(bgMagentaBright.close).toBe('\u001B[49m')
    })
  })

  describe('Test `bgCyanBright` property:', () => {
    it('Should have a `bgCyanBright` property!', () => {
      expect(backgroundColor).toHaveProperty('bgCyanBright')
    })

    const { bgCyanBright } = backgroundColor

    it('Should have an `open` key, and the value should be `"\\u001B[106m"!`', () => {
      expect(bgCyanBright.open).toBe('\u001B[106m')
    })

    it('Should have a `close` key, and the value should be `"\\u001B[49m"!`', () => {
      expect(bgCyanBright.close).toBe('\u001B[49m')
    })
  })

  describe('Test `bgWhiteBright` property:', () => {
    it('Should have a `bgWhiteBright` property!', () => {
      expect(backgroundColor).toHaveProperty('bgWhiteBright')
    })

    const { bgWhiteBright } = backgroundColor

    it('Should have an `open` key, and the value should be `"\\u001B[107m"!`', () => {
      expect(bgWhiteBright.open).toBe('\u001B[107m')
    })

    it('Should have a `close` key, and the value should be `"\\u001B[49m"!`', () => {
      expect(bgWhiteBright.close).toBe('\u001B[49m')
    })
  })
})
