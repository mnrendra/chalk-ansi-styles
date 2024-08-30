import type { StyleNumbers } from '../types'

const mapCodes = <StyleNums extends StyleNumbers = StyleNumbers>(
  styleNumbers: StyleNums
): Map<number, number> => {
  const codes = new Map<number, number>()

  Object.values(styleNumbers).forEach(([open, close]) => {
    codes.set(open, close)
  })

  return codes
}

export default mapCodes
