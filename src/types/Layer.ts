import type { LAYER } from '../consts'

export type Layer =
| typeof LAYER['foreground']
| typeof LAYER['background']

export default Layer
