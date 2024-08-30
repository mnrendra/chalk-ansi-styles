import type { ANSI16 } from '../utils'

interface CSPair<Open extends number = number, Close extends number = number> {
  /**
   * The ANSI terminal control sequence for starting this style.
   */
  readonly open: ANSI16<Open>

  /**
   * The ANSI terminal control sequence for ending this style.
   */
  readonly close: ANSI16<Close>
}

export default CSPair
