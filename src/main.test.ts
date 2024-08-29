import main from './main'

import { main as mainDummy } from '@tests/dummies'

describe('Test `main` feature:', () => {
  it('Should return "Hello, World!"!', () => {
    const received = main()
    const expected = mainDummy
    expect(received).toBe(expected)
  })
})
