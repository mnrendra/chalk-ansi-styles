import ESCAPE from './ESCAPE'

describe('Test `ESCAPE` constant:', () => {
  it('Should be a string!', () => {
    expect(typeof ESCAPE).toBe('string')
  })

  it('Value should be `"\\u001B["`!', () => {
    expect(ESCAPE).toBe('\u001B[')
  })
})
