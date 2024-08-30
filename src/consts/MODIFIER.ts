const MODIFIER = {
  reset: [0, 0],
  // 21 isn't widely supported and 22 does the same thing
  bold: [1, 22],
  dim: [2, 22],
  italic: [3, 23],
  underline: [4, 24],
  inverse: [7, 27],
  hidden: [8, 28],
  strikethrough: [9, 29],
  overline: [53, 55]
} as const

export default MODIFIER
