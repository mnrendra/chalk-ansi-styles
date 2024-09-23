import './ESCAPE.test'
import './LAYER.test'
import './MODIFIER.test'
import './FOREGROUND_COLOR.test'
import './BACKGROUND_COLOR.test'

import * as index from '.'

describe('Test consts:', () => {
  const received = index

  it('Should have an `ESCAPE` property!', () => {
    expect(received).toHaveProperty('ESCAPE')
  })

  it('Should have a `LAYER` property!', () => {
    expect(received).toHaveProperty('LAYER')
  })

  it('Should have a `MODIFIER` property!', () => {
    expect(received).toHaveProperty('MODIFIER')
  })

  it('Should have a `FOREGROUND_COLOR` property!', () => {
    expect(received).toHaveProperty('FOREGROUND_COLOR')
  })

  it('Should have a `FOREGROUND_COLOR_CLOSE` property!', () => {
    expect(received).toHaveProperty('FOREGROUND_COLOR_CLOSE')
  })

  it('Should have a `BACKGROUND_COLOR` property!', () => {
    expect(received).toHaveProperty('BACKGROUND_COLOR')
  })

  it('Should have a `BACKGROUND_COLOR_CLOSE` property!', () => {
    expect(received).toHaveProperty('BACKGROUND_COLOR_CLOSE')
  })
})
