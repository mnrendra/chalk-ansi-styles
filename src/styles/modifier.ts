import { MODIFIER } from '../consts'
import { pairCS } from '../utils'

const modifier = {
  /**
   * Resets the current color chain.
   */
  reset: pairCS(...MODIFIER.reset),

  /**
   * Make text bold.
   */
  bold: pairCS(...MODIFIER.bold),

  /**
   * Emitting only a small amount of light.
   */
  dim: pairCS(...MODIFIER.dim),

  /**
   * Make text italic. (Not widely supported).
   */
  italic: pairCS(...MODIFIER.italic),

  /**
   * Make text underline. (Not widely supported).
   */
  underline: pairCS(...MODIFIER.underline),

  /**
   * Inverse background and foreground colors.
   */
  inverse: pairCS(...MODIFIER.inverse),

  /**
   * Prints the text, but makes it invisible.
   */
  hidden: pairCS(...MODIFIER.hidden),

  /**
   * Puts a horizontal line through the center of the text. (Not widely
   * supported).
   */
  strikethrough: pairCS(...MODIFIER.strikethrough),

  /**
   * Make text overline.
   *
   * Supported on VTE-based terminals, the GNOME terminal, mintty, and Git Bash.
   */
  overline: pairCS(...MODIFIER.overline)
} as const

export type Modifier = typeof modifier

/**
 * Basic modifier names.
 */
export type ModifierName = keyof Modifier

export default modifier
