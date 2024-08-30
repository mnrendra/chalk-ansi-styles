import ESCAPE from './ESCAPE'

describe('Test `ESCAPE` constant:', () => {
  it('Should return `ESCAPE` constant!', () => {
    const received = ESCAPE
    const expected = '\u001B['
    expect(received).toEqual(expected)
  })
})
