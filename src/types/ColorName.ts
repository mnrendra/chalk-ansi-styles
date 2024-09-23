import type { ForegroundColorName, BackgroundColorName } from '../styles'

/**
 * Basic color names. The combination of foreground and background color names.
 *
 * [More colors here.](https://github.com/chalk/chalk/blob/main/readme.md#256-and-truecolor-color-support)
 */
type ColorName =
| ForegroundColorName
| BackgroundColorName

export default ColorName
