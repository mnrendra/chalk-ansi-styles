import LAYER from './LAYER'

describe('Test `LAYER` constant:', () => {
  describe('Test `foreground` property:', () => {
    it('Should have a `foreground` property!', () => {
      expect(LAYER).toHaveProperty('foreground')
    })

    const { foreground } = LAYER

    it('Should be an integer!', () => {
      expect(Number.isInteger(foreground)).toBe(true)
    })

    it('Value should be `38`!', () => {
      expect(foreground).toBe(38)
    })
  })

  describe('Test `background` property:', () => {
    it('Should have a `background` property!', () => {
      expect(LAYER).toHaveProperty('background')
    })

    const { background } = LAYER

    it('Should be an integer!', () => {
      expect(Number.isInteger(background)).toBe(true)
    })

    it('Value should be `48`!', () => {
      expect(background).toBe(48)
    })
  })
})
