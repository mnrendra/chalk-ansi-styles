import type { CSPair } from '../types'

import toAnsi16 from './toAnsi16'

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
