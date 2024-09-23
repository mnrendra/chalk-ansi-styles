import type { ANSI16 } from '../utils'

import toAnsi16 from './toAnsi16'

export interface CSPair<Open extends number = number, Close extends number = number> {
  /**
   * The ANSI terminal control sequence for starting this style.
   */
  readonly open: ANSI16<Open>

  /**
   * The ANSI terminal control sequence for ending this style.
   */
  readonly close: ANSI16<Close>
}

const pairCS = <Open extends number = number, Close extends number = number>(
  open: Open,
  close: Close
): CSPair<Open, Close> => {
  return {
    open: toAnsi16(open),
    close: toAnsi16(close)
  } as const
}

export default pairCS
