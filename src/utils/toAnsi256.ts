import type { Layer as Lyr } from '../consts'

import type { ANSI } from './toAnsi'

import toAnsi from './toAnsi'

export type ANSI256<Layer extends Lyr = Lyr, Num extends number = number> = ANSI<`${Layer};5;${Num}`>

const toAnsi256 = <Layer extends Lyr = Lyr, Num extends number = number>(
  layer: Layer,
  num: Num
): ANSI256<Layer, Num> => {
  return toAnsi(`${layer};5;${num}`)
}

export default toAnsi256
