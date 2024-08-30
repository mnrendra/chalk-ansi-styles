import type { Layer as Lyr } from '../types'
import type { ANSI } from './toAnsi'

import toAnsi from './toAnsi'

export type ANSI16m<Layer extends Lyr = Lyr, Red extends number = number, Green extends number = number, Blue extends number = number> = ANSI<`${Layer};2;${Red};${Green};${Blue}`>

const toAnsi16m = <Layer extends Lyr = Lyr, Red extends number = number, Green extends number = number, Blue extends number = number>(
  layer: Layer,
  red: Red,
  green: Green,
  blue: Blue
): ANSI16m<Layer, Red, Green, Blue> => {
  return toAnsi(`${layer};2;${red};${green};${blue}`)
}

export default toAnsi16m
