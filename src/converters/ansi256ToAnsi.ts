const ansi256ToAnsi = (
  code: number
): number => {
  if (code < 8) return 30 + code
  if (code < 16) return 90 + (code - 8)

  let red
  let green
  let blue

  if (code >= 232) {
    red = (((code - 232) * 10) + 8) / 255
    green = red
    blue = red
  } else {
    code -= 16

    const remainder = code % 36

    red = Math.floor(code / 36) / 5
    green = Math.floor(remainder / 6) / 5
    blue = (remainder % 6) / 5
  }

  const value = Math.max(red, green, blue) * 2

  if (value === 0) return 30

  let result = 30 + (
    (Math.round(blue) << 2) |
    (Math.round(green) << 1) |
    Math.round(red)
  )

  if (value === 2) result += 60

  return result
}

export default ansi256ToAnsi
