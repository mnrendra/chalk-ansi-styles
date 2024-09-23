import type { Escape } from '../consts'

import { ESCAPE } from '../consts'

export type ANSI<Param extends string = string> = `${Escape}${Param}m`

const toAnsi = <Param extends string = string>(
  param: Param
): ANSI<Param> => {
  return `${ESCAPE}${param}m`
}

export default toAnsi
