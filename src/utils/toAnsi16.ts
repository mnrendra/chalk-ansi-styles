import type { ANSI } from './toAnsi'

import toAnsi from './toAnsi'

export type ANSI16<Num extends number = number> = ANSI<`${Num}`>

const toAnsi16 = <Num extends number = number>(
  num: Num
): ANSI16<Num> => {
  return toAnsi(`${num}`)
}

export default toAnsi16
