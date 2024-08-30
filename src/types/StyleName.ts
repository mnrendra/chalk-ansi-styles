import type ModifierName from './ModifierName'
import type ColorName from './ColorName'

/**
 * Basic style names. The combination of modifier and color names.
 */
type StyleName =
| ModifierName
| ColorName

export default StyleName
