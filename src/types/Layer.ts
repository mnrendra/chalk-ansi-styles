import type { LAYER } from '../consts'

type Layer =
| typeof LAYER['foreground']
| typeof LAYER['background']

export default Layer
