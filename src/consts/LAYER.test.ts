import LAYER from './LAYER'

describe('Test `LAYER` constant:', () => {
  it('Should return `LAYER` constant!', () => {
    const received = LAYER

    const expected = {
      foreground: 38,
      background: 48
    }

    expect(received).toEqual(expected)
  })
})
