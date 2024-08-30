import { ESCAPE } from '../consts'

export type ANSI<Param extends string = string> = `${typeof ESCAPE}${Param}m`

const toAnsi = <Param extends string = string>(
  param: Param
): ANSI<Param> => {
  return `${ESCAPE}${param}m`
}

export default toAnsi
