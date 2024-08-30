import type { ForegroundColor } from '../styles'

/**
 * Basic foreground color names.
 *
 * [More colors here.](https://github.com/chalk/chalk/blob/main/readme.md#256-and-truecolor-color-support)
 */
type ForegroundColorName = keyof ForegroundColor

export default ForegroundColorName
