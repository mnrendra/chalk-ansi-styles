const LAYER = {
  foreground: 38, // Foreground
  background: 48 // Background
} as const

export type Layer =
| typeof LAYER['foreground']
| typeof LAYER['background']

export default LAYER
