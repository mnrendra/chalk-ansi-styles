import './modifier.test'
import './foregroundColor.test'
import './backgroundColor.test'

import * as index from '.'

describe('Test consts:', () => {
  const received = index

  it('Should have `modifier` property!', () => {
    expect(received).toHaveProperty('modifier')
  })

  it('Should have `foregroundColor` property!', () => {
    expect(received).toHaveProperty('foregroundColor')
  })

  it('Should have `backgroundColor` property!', () => {
    expect(received).toHaveProperty('backgroundColor')
  })
})
