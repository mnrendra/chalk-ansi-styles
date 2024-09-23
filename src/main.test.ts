import type { AnsiStyles } from './main'

import main, {
  modifierNames,
  foregroundColorNames,
  backgroundColorNames,
  colorNames
} from './main'

describe('Test `main` feature:', () => {
  it('Should only enumirate `styles` keys!', () => {
    const received = Object.keys(main)

    const expected = [
      // modifier
      'reset',
      'bold',
      'dim',
      'italic',
      'underline',
      'inverse',
      'hidden',
      'strikethrough',
      'overline',
      // foreground
      'black',
      'red',
      'green',
      'yellow',
      'blue',
      'magenta',
      'cyan',
      'white',
      'gray',
      'grey',
      'blackBright',
      'redBright',
      'greenBright',
      'yellowBright',
      'blueBright',
      'magentaBright',
      'cyanBright',
      'whiteBright',
      // background
      'bgBlack',
      'bgRed',
      'bgGreen',
      'bgYellow',
      'bgBlue',
      'bgMagenta',
      'bgCyan',
      'bgWhite',
      'bgGray',
      'bgGrey',
      'bgBlackBright',
      'bgRedBright',
      'bgGreenBright',
      'bgYellowBright',
      'bgBlueBright',
      'bgMagentaBright',
      'bgCyanBright',
      'bgWhiteBright'
    ]

    expect(received).toEqual(expected)
  })

  it('Should only enumirate `styles` objects!', () => {
    const received = main

    const expected = {
      reset: { open: '\u001B[0m', close: '\u001B[0m' },
      bold: { open: '\u001B[1m', close: '\u001B[22m' },
      dim: { open: '\u001B[2m', close: '\u001B[22m' },
      italic: { open: '\u001B[3m', close: '\u001B[23m' },
      underline: { open: '\u001B[4m', close: '\u001B[24m' },
      inverse: { open: '\u001B[7m', close: '\u001B[27m' },
      hidden: { open: '\u001B[8m', close: '\u001B[28m' },
      strikethrough: { open: '\u001B[9m', close: '\u001B[29m' },
      overline: { open: '\u001B[53m', close: '\u001B[55m' },
      black: { open: '\u001B[30m', close: '\u001B[39m' },
      red: { open: '\u001B[31m', close: '\u001B[39m' },
      green: { open: '\u001B[32m', close: '\u001B[39m' },
      yellow: { open: '\u001B[33m', close: '\u001B[39m' },
      blue: { open: '\u001B[34m', close: '\u001B[39m' },
      magenta: { open: '\u001B[35m', close: '\u001B[39m' },
      cyan: { open: '\u001B[36m', close: '\u001B[39m' },
      white: { open: '\u001B[37m', close: '\u001B[39m' },
      gray: { open: '\u001B[90m', close: '\u001B[39m' },
      grey: { open: '\u001B[90m', close: '\u001B[39m' },
      blackBright: { open: '\u001B[90m', close: '\u001B[39m' },
      redBright: { open: '\u001B[91m', close: '\u001B[39m' },
      greenBright: { open: '\u001B[92m', close: '\u001B[39m' },
      yellowBright: { open: '\u001B[93m', close: '\u001B[39m' },
      blueBright: { open: '\u001B[94m', close: '\u001B[39m' },
      magentaBright: { open: '\u001B[95m', close: '\u001B[39m' },
      cyanBright: { open: '\u001B[96m', close: '\u001B[39m' },
      whiteBright: { open: '\u001B[97m', close: '\u001B[39m' },
      bgBlack: { open: '\u001B[40m', close: '\u001B[49m' },
      bgRed: { open: '\u001B[41m', close: '\u001B[49m' },
      bgGreen: { open: '\u001B[42m', close: '\u001B[49m' },
      bgYellow: { open: '\u001B[43m', close: '\u001B[49m' },
      bgBlue: { open: '\u001B[44m', close: '\u001B[49m' },
      bgMagenta: { open: '\u001B[45m', close: '\u001B[49m' },
      bgCyan: { open: '\u001B[46m', close: '\u001B[49m' },
      bgWhite: { open: '\u001B[47m', close: '\u001B[49m' },
      bgGray: { open: '\u001B[100m', close: '\u001B[49m' },
      bgGrey: { open: '\u001B[100m', close: '\u001B[49m' },
      bgBlackBright: { open: '\u001B[100m', close: '\u001B[49m' },
      bgRedBright: { open: '\u001B[101m', close: '\u001B[49m' },
      bgGreenBright: { open: '\u001B[102m', close: '\u001B[49m' },
      bgYellowBright: { open: '\u001B[103m', close: '\u001B[49m' },
      bgBlueBright: { open: '\u001B[104m', close: '\u001B[49m' },
      bgMagentaBright: { open: '\u001B[105m', close: '\u001B[49m' },
      bgCyanBright: { open: '\u001B[106m', close: '\u001B[49m' },
      bgWhiteBright: { open: '\u001B[107m', close: '\u001B[49m' }
    }

    expect(received).toEqual(expected)
  })

  // modifier styles

  describe('Test `modifier` styles:', () => {
    it('Should give { open: "\\u001B[0m", close: "\\u001B[0m" } when `main.reset` is selected!', () => {
      const received = main.reset
      const expected = { open: '\u001B[0m', close: '\u001B[0m' }
      expect(received).toEqual(expected)
    })

    it('Should give { open: "\\u001B[1m", close: "\\u001B[22m" } when `main.bold` is selected!', () => {
      const received = main.bold
      const expected = { open: '\u001B[1m', close: '\u001B[22m' }
      expect(received).toEqual(expected)
    })

    it('Should give { open: "\\u001B[2m", close: "\\u001B[22m" } when `main.dim` is selected!', () => {
      const received = main.dim
      const expected = { open: '\u001B[2m', close: '\u001B[22m' }
      expect(received).toEqual(expected)
    })

    it('Should give { open: "\\u001B[3m", close: "\\u001B[23m" } when `main.italic` is selected!', () => {
      const received = main.italic
      const expected = { open: '\u001B[3m', close: '\u001B[23m' }
      expect(received).toEqual(expected)
    })

    it('Should give { open: "\\u001B[4m", close: "\\u001B[24m" } when `main.underline` is selected!', () => {
      const received = main.underline
      const expected = { open: '\u001B[4m', close: '\u001B[24m' }
      expect(received).toEqual(expected)
    })

    it('Should give { open: "\\u001B[7m", close: "\\u001B[27m" } when `main.inverse` is selected!', () => {
      const received = main.inverse
      const expected = { open: '\u001B[7m', close: '\u001B[27m' }
      expect(received).toEqual(expected)
    })

    it('Should give { open: "\\u001B[8m", close: "\\u001B[28m" } when `main.hidden` is selected!', () => {
      const received = main.hidden
      const expected = { open: '\u001B[8m', close: '\u001B[28m' }
      expect(received).toEqual(expected)
    })

    it('Should give { open: "\\u001B[9m", close: "\\u001B[29m" } when `main.strikethrough` is selected!', () => {
      const received = main.strikethrough
      const expected = { open: '\u001B[9m', close: '\u001B[29m' }
      expect(received).toEqual(expected)
    })

    it('Should give { open: "\\u001B[53m", close: "\\u001B[55m" } when `main.overline` is selected!', () => {
      const received = main.overline
      const expected = { open: '\u001B[53m', close: '\u001B[55m' }
      expect(received).toEqual(expected)
    })
  })

  // foreground styles

  describe('Test `foreground` styles:', () => {
    it('Should give { open: "\\u001B[30m", close: "\\u001B[39m" } when `main.black` is selected!', () => {
      const received = main.black
      const expected = { open: '\u001B[30m', close: '\u001B[39m' }
      expect(received).toEqual(expected)
    })

    it('Should give { open: "\\u001B[31m", close: "\\u001B[39m" } when `main.red` is selected!', () => {
      const received = main.red
      const expected = { open: '\u001B[31m', close: '\u001B[39m' }
      expect(received).toEqual(expected)
    })

    it('Should give { open: "\\u001B[32m", close: "\\u001B[39m" } when `main.green` is selected!', () => {
      const received = main.green
      const expected = { open: '\u001B[32m', close: '\u001B[39m' }
      expect(received).toEqual(expected)
    })

    it('Should give { open: "\\u001B[33m", close: "\\u001B[39m" } when `main.yellow` is selected!', () => {
      const received = main.yellow
      const expected = { open: '\u001B[33m', close: '\u001B[39m' }
      expect(received).toEqual(expected)
    })

    it('Should give { open: "\\u001B[34m", close: "\\u001B[39m" } when `main.blue` is selected!', () => {
      const received = main.blue
      const expected = { open: '\u001B[34m', close: '\u001B[39m' }
      expect(received).toEqual(expected)
    })

    it('Should give { open: "\\u001B[35m", close: "\\u001B[39m" } when `main.magenta` is selected!', () => {
      const received = main.magenta
      const expected = { open: '\u001B[35m', close: '\u001B[39m' }
      expect(received).toEqual(expected)
    })

    it('Should give { open: "\\u001B[36m", close: "\\u001B[39m" } when `main.cyan` is selected!', () => {
      const received = main.cyan
      const expected = { open: '\u001B[36m', close: '\u001B[39m' }
      expect(received).toEqual(expected)
    })

    it('Should give { open: "\\u001B[37m", close: "\\u001B[39m" } when `main.white` is selected!', () => {
      const received = main.white
      const expected = { open: '\u001B[37m', close: '\u001B[39m' }
      expect(received).toEqual(expected)
    })

    it('Should give { open: "\\u001B[90m", close: "\\u001B[39m" } when `main.gray` is selected!', () => {
      const received = main.gray
      const expected = { open: '\u001B[90m', close: '\u001B[39m' }
      expect(received).toEqual(expected)
    })

    it('Should give { open: "\\u001B[90m", close: "\\u001B[39m" } when `main.grey` is selected!', () => {
      const received = main.grey
      const expected = { open: '\u001B[90m', close: '\u001B[39m' }
      expect(received).toEqual(expected)
    })

    it('Should give { open: "\\u001B[90m", close: "\\u001B[39m" } when `main.blackBright` is selected!', () => {
      const received = main.blackBright
      const expected = { open: '\u001B[90m', close: '\u001B[39m' }
      expect(received).toEqual(expected)
    })

    it('Should give { open: "\\u001B[91m", close: "\\u001B[39m" } when `main.redBright` is selected!', () => {
      const received = main.redBright
      const expected = { open: '\u001B[91m', close: '\u001B[39m' }
      expect(received).toEqual(expected)
    })

    it('Should give { open: "\\u001B[92m", close: "\\u001B[39m" } when `main.greenBright` is selected!', () => {
      const received = main.greenBright
      const expected = { open: '\u001B[92m', close: '\u001B[39m' }
      expect(received).toEqual(expected)
    })

    it('Should give { open: "\\u001B[93m", close: "\\u001B[39m" } when `main.yellowBright` is selected!', () => {
      const received = main.yellowBright
      const expected = { open: '\u001B[93m', close: '\u001B[39m' }
      expect(received).toEqual(expected)
    })

    it('Should give { open: "\\u001B[94m", close: "\\u001B[39m" } when `main.blueBright` is selected!', () => {
      const received = main.blueBright
      const expected = { open: '\u001B[94m', close: '\u001B[39m' }
      expect(received).toEqual(expected)
    })

    it('Should give { open: "\\u001B[95m", close: "\\u001B[39m" } when `main.magentaBright` is selected!', () => {
      const received = main.magentaBright
      const expected = { open: '\u001B[95m', close: '\u001B[39m' }
      expect(received).toEqual(expected)
    })

    it('Should give { open: "\\u001B[96m", close: "\\u001B[39m" } when `main.cyanBright` is selected!', () => {
      const received = main.cyanBright
      const expected = { open: '\u001B[96m', close: '\u001B[39m' }
      expect(received).toEqual(expected)
    })

    it('Should give { open: "\\u001B[97m", close: "\\u001B[39m" } when `main.whiteBright` is selected!', () => {
      const received = main.whiteBright
      const expected = { open: '\u001B[97m', close: '\u001B[39m' }
      expect(received).toEqual(expected)
    })
  })

  // background styles

  describe('Test `foreground` styles:', () => {
    it('Should give { open: "\\u001B[40m", close: "\\u001B[49m" } when `main.bgBlack` is selected!', () => {
      const received = main.bgBlack
      const expected = { open: '\u001B[40m', close: '\u001B[49m' }
      expect(received).toEqual(expected)
    })

    it('Should give { open: "\\u001B[41m", close: "\\u001B[49m" } when `main.bgRed` is selected!', () => {
      const received = main.bgRed
      const expected = { open: '\u001B[41m', close: '\u001B[49m' }
      expect(received).toEqual(expected)
    })

    it('Should give { open: "\\u001B[42m", close: "\\u001B[49m" } when `main.bgGreen` is selected!', () => {
      const received = main.bgGreen
      const expected = { open: '\u001B[42m', close: '\u001B[49m' }
      expect(received).toEqual(expected)
    })

    it('Should give { open: "\\u001B[43m", close: "\\u001B[49m" } when `main.bgYellow` is selected!', () => {
      const received = main.bgYellow
      const expected = { open: '\u001B[43m', close: '\u001B[49m' }
      expect(received).toEqual(expected)
    })

    it('Should give { open: "\\u001B[44m", close: "\\u001B[49m" } when `main.bgBlue` is selected!', () => {
      const received = main.bgBlue
      const expected = { open: '\u001B[44m', close: '\u001B[49m' }
      expect(received).toEqual(expected)
    })

    it('Should give { open: "\\u001B[45m", close: "\\u001B[49m" } when `main.bgMagenta` is selected!', () => {
      const received = main.bgMagenta
      const expected = { open: '\u001B[45m', close: '\u001B[49m' }
      expect(received).toEqual(expected)
    })

    it('Should give { open: "\\u001B[46m", close: "\\u001B[49m" } when `main.bgCyan` is selected!', () => {
      const received = main.bgCyan
      const expected = { open: '\u001B[46m', close: '\u001B[49m' }
      expect(received).toEqual(expected)
    })

    it('Should give { open: "\\u001B[47m", close: "\\u001B[49m" } when `main.bgWhite` is selected!', () => {
      const received = main.bgWhite
      const expected = { open: '\u001B[47m', close: '\u001B[49m' }
      expect(received).toEqual(expected)
    })

    it('Should give { open: "\\u001B[100m", close: "\\u001B[49m" } when `main.bgGray` is selected!', () => {
      const received = main.bgGray
      const expected = { open: '\u001B[100m', close: '\u001B[49m' }
      expect(received).toEqual(expected)
    })

    it('Should give { open: "\\u001B[100m", close: "\\u001B[49m" } when `main.bgGrey` is selected!', () => {
      const received = main.bgGrey
      const expected = { open: '\u001B[100m', close: '\u001B[49m' }
      expect(received).toEqual(expected)
    })

    it('Should give { open: "\\u001B[100m", close: "\\u001B[49m" } when `main.bgBlackBright` is selected!', () => {
      const received = main.bgBlackBright
      const expected = { open: '\u001B[100m', close: '\u001B[49m' }
      expect(received).toEqual(expected)
    })

    it('Should give { open: "\\u001B[101m", close: "\\u001B[49m" } when `main.bgRedBright` is selected!', () => {
      const received = main.bgRedBright
      const expected = { open: '\u001B[101m', close: '\u001B[49m' }
      expect(received).toEqual(expected)
    })

    it('Should give { open: "\\u001B[102m", close: "\\u001B[49m" } when `main.bgGreenBright` is selected!', () => {
      const received = main.bgGreenBright
      const expected = { open: '\u001B[102m', close: '\u001B[49m' }
      expect(received).toEqual(expected)
    })

    it('Should give { open: "\\u001B[103m", close: "\\u001B[49m" } when `main.bgYellowBright` is selected!', () => {
      const received = main.bgYellowBright
      const expected = { open: '\u001B[103m', close: '\u001B[49m' }
      expect(received).toEqual(expected)
    })

    it('Should give { open: "\\u001B[104m", close: "\\u001B[49m" } when `main.bgBlueBright` is selected!', () => {
      const received = main.bgBlueBright
      const expected = { open: '\u001B[104m', close: '\u001B[49m' }
      expect(received).toEqual(expected)
    })

    it('Should give { open: "\\u001B[105m", close: "\\u001B[49m" } when `main.bgMagentaBright` is selected!', () => {
      const received = main.bgMagentaBright
      const expected = { open: '\u001B[105m', close: '\u001B[49m' }
      expect(received).toEqual(expected)
    })

    it('Should give { open: "\\u001B[106m", close: "\\u001B[49m" } when `main.bgCyanBright` is selected!', () => {
      const received = main.bgCyanBright
      const expected = { open: '\u001B[106m', close: '\u001B[49m' }
      expect(received).toEqual(expected)
    })

    it('Should give { open: "\\u001B[107m", close: "\\u001B[49m" } when `main.bgWhiteBright` is selected!', () => {
      const received = main.bgWhiteBright
      const expected = { open: '\u001B[107m', close: '\u001B[49m' }
      expect(received).toEqual(expected)
    })
  })

  // modifier style group

  describe('Test `modifier` style group:', () => {
    const ansiStyles = main as AnsiStyles

    it('Should give { open: "\\u001B[0m", close: "\\u001B[0m" } when `main.modifier.reset` is selected!', () => {
      const received = ansiStyles.modifier.reset
      const expected = { open: '\u001B[0m', close: '\u001B[0m' }
      expect(received).toEqual(expected)
    })

    it('Should give { open: "\\u001B[1m", close: "\\u001B[22m" } when `main.modifier.bold` is selected!', () => {
      const received = ansiStyles.modifier.bold
      const expected = { open: '\u001B[1m', close: '\u001B[22m' }
      expect(received).toEqual(expected)
    })

    it('Should give { open: "\\u001B[2m", close: "\\u001B[22m" } when `main.modifier.dim` is selected!', () => {
      const received = ansiStyles.modifier.dim
      const expected = { open: '\u001B[2m', close: '\u001B[22m' }
      expect(received).toEqual(expected)
    })

    it('Should give { open: "\\u001B[3m", close: "\\u001B[23m" } when `main.modifier.italic` is selected!', () => {
      const received = ansiStyles.modifier.italic
      const expected = { open: '\u001B[3m', close: '\u001B[23m' }
      expect(received).toEqual(expected)
    })

    it('Should give { open: "\\u001B[4m", close: "\\u001B[24m" } when `main.modifier.underline` is selected!', () => {
      const received = ansiStyles.modifier.underline
      const expected = { open: '\u001B[4m', close: '\u001B[24m' }
      expect(received).toEqual(expected)
    })

    it('Should give { open: "\\u001B[7m", close: "\\u001B[27m" } when `main.modifier.inverse` is selected!', () => {
      const received = ansiStyles.modifier.inverse
      const expected = { open: '\u001B[7m', close: '\u001B[27m' }
      expect(received).toEqual(expected)
    })

    it('Should give { open: "\\u001B[8m", close: "\\u001B[28m" } when `main.modifier.hidden` is selected!', () => {
      const received = ansiStyles.modifier.hidden
      const expected = { open: '\u001B[8m', close: '\u001B[28m' }
      expect(received).toEqual(expected)
    })

    it('Should give { open: "\\u001B[9m", close: "\\u001B[29m" } when `main.modifier.strikethrough` is selected!', () => {
      const received = ansiStyles.modifier.strikethrough
      const expected = { open: '\u001B[9m', close: '\u001B[29m' }
      expect(received).toEqual(expected)
    })

    it('Should give { open: "\\u001B[53m", close: "\\u001B[55m" } when `main.modifier.overline` is selected!', () => {
      const received = ansiStyles.modifier.overline
      const expected = { open: '\u001B[53m', close: '\u001B[55m' }
      expect(received).toEqual(expected)
    })
  })

  // foreground style group

  describe('Test `foreground` style group:', () => {
    const ansiStyles = main as AnsiStyles

    it('Should give { open: "\\u001B[30m", close: "\\u001B[39m" } when `main.color.black` is selected!', () => {
      const received = ansiStyles.color.black
      const expected = { open: '\u001B[30m', close: '\u001B[39m' }
      expect(received).toEqual(expected)
    })

    it('Should give { open: "\\u001B[31m", close: "\\u001B[39m" } when `main.color.red` is selected!', () => {
      const received = ansiStyles.color.red
      const expected = { open: '\u001B[31m', close: '\u001B[39m' }
      expect(received).toEqual(expected)
    })

    it('Should give { open: "\\u001B[32m", close: "\\u001B[39m" } when `main.color.green` is selected!', () => {
      const received = ansiStyles.color.green
      const expected = { open: '\u001B[32m', close: '\u001B[39m' }
      expect(received).toEqual(expected)
    })

    it('Should give { open: "\\u001B[33m", close: "\\u001B[39m" } when `main.color.yellow` is selected!', () => {
      const received = ansiStyles.color.yellow
      const expected = { open: '\u001B[33m', close: '\u001B[39m' }
      expect(received).toEqual(expected)
    })

    it('Should give { open: "\\u001B[34m", close: "\\u001B[39m" } when `main.color.blue` is selected!', () => {
      const received = ansiStyles.color.blue
      const expected = { open: '\u001B[34m', close: '\u001B[39m' }
      expect(received).toEqual(expected)
    })

    it('Should give { open: "\\u001B[35m", close: "\\u001B[39m" } when `main.color.magenta` is selected!', () => {
      const received = ansiStyles.color.magenta
      const expected = { open: '\u001B[35m', close: '\u001B[39m' }
      expect(received).toEqual(expected)
    })

    it('Should give { open: "\\u001B[36m", close: "\\u001B[39m" } when `main.color.cyan` is selected!', () => {
      const received = ansiStyles.color.cyan
      const expected = { open: '\u001B[36m', close: '\u001B[39m' }
      expect(received).toEqual(expected)
    })

    it('Should give { open: "\\u001B[37m", close: "\\u001B[39m" } when `main.color.white` is selected!', () => {
      const received = ansiStyles.color.white
      const expected = { open: '\u001B[37m', close: '\u001B[39m' }
      expect(received).toEqual(expected)
    })

    it('Should give { open: "\\u001B[90m", close: "\\u001B[39m" } when `main.color.gray` is selected!', () => {
      const received = ansiStyles.color.gray
      const expected = { open: '\u001B[90m', close: '\u001B[39m' }
      expect(received).toEqual(expected)
    })

    it('Should give { open: "\\u001B[90m", close: "\\u001B[39m" } when `main.color.grey` is selected!', () => {
      const received = ansiStyles.color.grey
      const expected = { open: '\u001B[90m', close: '\u001B[39m' }
      expect(received).toEqual(expected)
    })

    it('Should give { open: "\\u001B[90m", close: "\\u001B[39m" } when `main.color.blackBright` is selected!', () => {
      const received = ansiStyles.color.blackBright
      const expected = { open: '\u001B[90m', close: '\u001B[39m' }
      expect(received).toEqual(expected)
    })

    it('Should give { open: "\\u001B[91m", close: "\\u001B[39m" } when `main.color.redBright` is selected!', () => {
      const received = ansiStyles.color.redBright
      const expected = { open: '\u001B[91m', close: '\u001B[39m' }
      expect(received).toEqual(expected)
    })

    it('Should give { open: "\\u001B[92m", close: "\\u001B[39m" } when `main.color.greenBright` is selected!', () => {
      const received = ansiStyles.color.greenBright
      const expected = { open: '\u001B[92m', close: '\u001B[39m' }
      expect(received).toEqual(expected)
    })

    it('Should give { open: "\\u001B[93m", close: "\\u001B[39m" } when `main.color.yellowBright` is selected!', () => {
      const received = ansiStyles.color.yellowBright
      const expected = { open: '\u001B[93m', close: '\u001B[39m' }
      expect(received).toEqual(expected)
    })

    it('Should give { open: "\\u001B[94m", close: "\\u001B[39m" } when `main.color.blueBright` is selected!', () => {
      const received = ansiStyles.color.blueBright
      const expected = { open: '\u001B[94m', close: '\u001B[39m' }
      expect(received).toEqual(expected)
    })

    it('Should give { open: "\\u001B[95m", close: "\\u001B[39m" } when `main.color.magentaBright` is selected!', () => {
      const received = ansiStyles.color.magentaBright
      const expected = { open: '\u001B[95m', close: '\u001B[39m' }
      expect(received).toEqual(expected)
    })

    it('Should give { open: "\\u001B[96m", close: "\\u001B[39m" } when `main.color.cyanBright` is selected!', () => {
      const received = ansiStyles.color.cyanBright
      const expected = { open: '\u001B[96m', close: '\u001B[39m' }
      expect(received).toEqual(expected)
    })

    it('Should give { open: "\\u001B[97m", close: "\\u001B[39m" } when `main.color.whiteBright` is selected!', () => {
      const received = ansiStyles.color.whiteBright
      const expected = { open: '\u001B[97m', close: '\u001B[39m' }
      expect(received).toEqual(expected)
    })

    it('Should give "\\u001B[39m" when `main.color.close` is selected!', () => {
      const received = ansiStyles.color.close
      const expected = '\u001B[39m'
      expect(received).toEqual(expected)
    })

    it('Should give "\\u001B[30m" when invoke `main.color.ansi(30)`!', () => {
      const received = ansiStyles.color.ansi(30)
      const expected = '\u001B[30m'
      expect(received).toEqual(expected)
    })

    it('Should give "\\u001B[38;5;255m" when invoke `main.color.ansi256(255)`!', () => {
      const received = ansiStyles.color.ansi256(255)
      const expected = '\u001B[38;5;255m'
      expect(received).toEqual(expected)
    })

    it('Should give "\\u001B[38;2;255;255;255m" when invoke `main.color.ansi16m(255, 255, 255)`!', () => {
      const received = ansiStyles.color.ansi16m(255, 255, 255)
      const expected = '\u001B[38;2;255;255;255m'
      expect(received).toEqual(expected)
    })
  })

  // background style group

  describe('Test `background` style group:', () => {
    const ansiStyles = main as AnsiStyles

    it('Should give { open: "\\u001B[40m", close: "\\u001B[49m" } when `main.bgColor.bgBlack` is selected!', () => {
      const received = ansiStyles.bgColor.bgBlack
      const expected = { open: '\u001B[40m', close: '\u001B[49m' }
      expect(received).toEqual(expected)
    })

    it('Should give { open: "\\u001B[41m", close: "\\u001B[49m" } when `main.bgColor.bgRed` is selected!', () => {
      const received = ansiStyles.bgColor.bgRed
      const expected = { open: '\u001B[41m', close: '\u001B[49m' }
      expect(received).toEqual(expected)
    })

    it('Should give { open: "\\u001B[42m", close: "\\u001B[49m" } when `main.bgColor.bgGreen` is selected!', () => {
      const received = ansiStyles.bgColor.bgGreen
      const expected = { open: '\u001B[42m', close: '\u001B[49m' }
      expect(received).toEqual(expected)
    })

    it('Should give { open: "\\u001B[43m", close: "\\u001B[49m" } when `main.bgColor.bgYellow` is selected!', () => {
      const received = ansiStyles.bgColor.bgYellow
      const expected = { open: '\u001B[43m', close: '\u001B[49m' }
      expect(received).toEqual(expected)
    })

    it('Should give { open: "\\u001B[44m", close: "\\u001B[49m" } when `main.bgColor.bgBlue` is selected!', () => {
      const received = ansiStyles.bgColor.bgBlue
      const expected = { open: '\u001B[44m', close: '\u001B[49m' }
      expect(received).toEqual(expected)
    })

    it('Should give { open: "\\u001B[45m", close: "\\u001B[49m" } when `main.bgColor.bgMagenta` is selected!', () => {
      const received = ansiStyles.bgColor.bgMagenta
      const expected = { open: '\u001B[45m', close: '\u001B[49m' }
      expect(received).toEqual(expected)
    })

    it('Should give { open: "\\u001B[46m", close: "\\u001B[49m" } when `main.bgColor.bgCyan` is selected!', () => {
      const received = ansiStyles.bgColor.bgCyan
      const expected = { open: '\u001B[46m', close: '\u001B[49m' }
      expect(received).toEqual(expected)
    })

    it('Should give { open: "\\u001B[47m", close: "\\u001B[49m" } when `main.bgColor.bgWhite` is selected!', () => {
      const received = ansiStyles.bgColor.bgWhite
      const expected = { open: '\u001B[47m', close: '\u001B[49m' }
      expect(received).toEqual(expected)
    })

    it('Should give { open: "\\u001B[100m", close: "\\u001B[49m" } when `main.bgColor.bgGray` is selected!', () => {
      const received = ansiStyles.bgColor.bgGray
      const expected = { open: '\u001B[100m', close: '\u001B[49m' }
      expect(received).toEqual(expected)
    })

    it('Should give { open: "\\u001B[100m", close: "\\u001B[49m" } when `main.bgColor.bgGrey` is selected!', () => {
      const received = ansiStyles.bgColor.bgGrey
      const expected = { open: '\u001B[100m', close: '\u001B[49m' }
      expect(received).toEqual(expected)
    })

    it('Should give { open: "\\u001B[100m", close: "\\u001B[49m" } when `main.bgColor.bgBlackBright` is selected!', () => {
      const received = ansiStyles.bgColor.bgBlackBright
      const expected = { open: '\u001B[100m', close: '\u001B[49m' }
      expect(received).toEqual(expected)
    })

    it('Should give { open: "\\u001B[101m", close: "\\u001B[49m" } when `main.bgColor.bgRedBright` is selected!', () => {
      const received = ansiStyles.bgColor.bgRedBright
      const expected = { open: '\u001B[101m', close: '\u001B[49m' }
      expect(received).toEqual(expected)
    })

    it('Should give { open: "\\u001B[102m", close: "\\u001B[49m" } when `main.bgColor.bgGreenBright` is selected!', () => {
      const received = ansiStyles.bgColor.bgGreenBright
      const expected = { open: '\u001B[102m', close: '\u001B[49m' }
      expect(received).toEqual(expected)
    })

    it('Should give { open: "\\u001B[103m", close: "\\u001B[49m" } when `main.bgColor.bgYellowBright` is selected!', () => {
      const received = ansiStyles.bgColor.bgYellowBright
      const expected = { open: '\u001B[103m', close: '\u001B[49m' }
      expect(received).toEqual(expected)
    })

    it('Should give { open: "\\u001B[104m", close: "\\u001B[49m" } when `main.bgColor.bgBlueBright` is selected!', () => {
      const received = ansiStyles.bgColor.bgBlueBright
      const expected = { open: '\u001B[104m', close: '\u001B[49m' }
      expect(received).toEqual(expected)
    })

    it('Should give { open: "\\u001B[105m", close: "\\u001B[49m" } when `main.bgColor.bgMagentaBright` is selected!', () => {
      const received = ansiStyles.bgColor.bgMagentaBright
      const expected = { open: '\u001B[105m', close: '\u001B[49m' }
      expect(received).toEqual(expected)
    })

    it('Should give { open: "\\u001B[106m", close: "\\u001B[49m" } when `main.bgColor.bgCyanBright` is selected!', () => {
      const received = ansiStyles.bgColor.bgCyanBright
      const expected = { open: '\u001B[106m', close: '\u001B[49m' }
      expect(received).toEqual(expected)
    })

    it('Should give { open: "\\u001B[107m", close: "\\u001B[49m" } when `main.bgColor.bgWhiteBright` is selected!', () => {
      const received = ansiStyles.bgColor.bgWhiteBright
      const expected = { open: '\u001B[107m', close: '\u001B[49m' }
      expect(received).toEqual(expected)
    })

    it('Should give "\\u001B[49m" when `main.bgColor.close` is selected!', () => {
      const received = ansiStyles.bgColor.close
      const expected = '\u001B[49m'
      expect(received).toEqual(expected)
    })

    it('Should give "\\u001B[40m" when invoke `main.bgColor.ansi(40)`!', () => {
      const received = ansiStyles.bgColor.ansi(40)
      const expected = '\u001B[40m'
      expect(received).toEqual(expected)
    })

    it('Should give "\\u001B[48;5;255m" when invoke `main.bgColor.ansi256(255)`!', () => {
      const received = ansiStyles.bgColor.ansi256(255)
      const expected = '\u001B[48;5;255m'
      expect(received).toEqual(expected)
    })

    it('Should give "\\u001B[48;2;255;255;255m" when invoke `main.bgColor.ansi16m(255, 255, 255)`!', () => {
      const received = ansiStyles.bgColor.ansi16m(255, 255, 255)
      const expected = '\u001B[48;2;255;255;255m'
      expect(received).toEqual(expected)
    })
  })

  // codes

  describe('Test `codes`:', () => {
    const ansiStyles = main as AnsiStyles

    it('Should give the mapped style codes!', () => {
      const received = ansiStyles.codes

      const expected = new Map()
        // modifier
        .set(0, 0)
        .set(1, 22)
        .set(2, 22)
        .set(3, 23)
        .set(4, 24)
        .set(7, 27)
        .set(8, 28)
        .set(9, 29)
        .set(53, 55)
        // foreground
        .set(30, 39)
        .set(31, 39)
        .set(32, 39)
        .set(33, 39)
        .set(34, 39)
        .set(35, 39)
        .set(36, 39)
        .set(37, 39)
        .set(90, 39)
        .set(90, 39)
        .set(90, 39)
        .set(91, 39)
        .set(92, 39)
        .set(93, 39)
        .set(94, 39)
        .set(95, 39)
        .set(96, 39)
        .set(97, 39)
        // background
        .set(40, 49)
        .set(41, 49)
        .set(42, 49)
        .set(43, 49)
        .set(44, 49)
        .set(45, 49)
        .set(46, 49)
        .set(47, 49)
        .set(100, 49)
        .set(100, 49)
        .set(100, 49)
        .set(101, 49)
        .set(102, 49)
        .set(103, 49)
        .set(104, 49)
        .set(105, 49)
        .set(106, 49)
        .set(107, 49)

      expect(received).toEqual(expected)
    })
  })

  // converters

  describe('Test `ansi256ToAnsi` converter:', () => {
    const ansiStyles = main as AnsiStyles

    it('Should return `37` when given `7`!', () => {
      const received = ansiStyles.ansi256ToAnsi(7)
      const expected = 37
      expect(received).toBe(expected)
    })

    it('Should return `97` when given `15`!', () => {
      const received = ansiStyles.ansi256ToAnsi(15)
      const expected = 97
      expect(received).toBe(expected)
    })

    it('Should return `30` when given `232`!', () => {
      const received = ansiStyles.ansi256ToAnsi(232)
      const expected = 30
      expect(received).toBe(expected)
    })

    it('Should return `97` when given `231`!', () => {
      const received = ansiStyles.ansi256ToAnsi(231)
      const expected = 97
      expect(received).toBe(expected)
    })

    it('Should return `30` when given `16`!', () => {
      const received = ansiStyles.ansi256ToAnsi(16)
      const expected = 30
      expect(received).toBe(expected)
    })
  })

  describe('Test `hexToAnsi` converter:', () => {
    const ansiStyles = main as AnsiStyles

    it('Should return `97` when given `"#FFFFFF"`!', () => {
      const received = ansiStyles.hexToAnsi('#FFFFFF')
      const expected = 97
      expect(received).toEqual(expected)
    })

    it('Should return `30` when given `"#000"`!', () => {
      const received = ansiStyles.hexToAnsi('#000')
      const expected = 30
      expect(received).toEqual(expected)
    })

    it('Should return `30` when given `255`!', () => {
      const received = ansiStyles.hexToAnsi(255)
      const expected = 30
      expect(received).toEqual(expected)
    })
  })

  describe('Test `hexToAnsi256` converter:', () => {
    const ansiStyles = main as AnsiStyles

    it('Should return `231` when given `"#FFFFFF"`!', () => {
      const received = ansiStyles.hexToAnsi256('#FFFFFF')
      const expected = 231
      expect(received).toEqual(expected)
    })

    it('Should return `16` when given `"#000"`!', () => {
      const received = ansiStyles.hexToAnsi256('#000')
      const expected = 16
      expect(received).toEqual(expected)
    })

    it('Should return `16` when given `255`!', () => {
      const received = ansiStyles.hexToAnsi256(255)
      const expected = 16
      expect(received).toEqual(expected)
    })
  })

  describe('Test `hexToRgb` converter:', () => {
    const ansiStyles = main as AnsiStyles

    it('Should return `[255, 255, 255]` when given `"#FFFFFF"`!', () => {
      const received = ansiStyles.hexToRgb('#FFFFFF')
      const expected = [255, 255, 255]
      expect(received).toEqual(expected)
    })

    it('Should return `[0, 0, 0]` when given `"#000"`!', () => {
      const received = ansiStyles.hexToRgb('#000')
      const expected = [0, 0, 0]
      expect(received).toEqual(expected)
    })

    it('Should return `[0, 0, 0]` when given `255`!', () => {
      const received = ansiStyles.hexToRgb(255)
      const expected = [0, 0, 0]
      expect(received).toEqual(expected)
    })
  })

  describe('Test `rgbToAnsi` converter:', () => {
    const ansiStyles = main as AnsiStyles

    it('Should return `30` when given `...[7, 7, 7]`!', () => {
      const received = ansiStyles.rgbToAnsi(7, 7, 7)
      const expected = 30
      expect(received).toEqual(expected)
    })

    it('Should return `30` when given `...[8, 8, 8]`!', () => {
      const received = ansiStyles.rgbToAnsi(8, 8, 8)
      const expected = 30
      expect(received).toEqual(expected)
    })

    it('Should return `37` when given `...[248, 248, 248]`!', () => {
      const received = ansiStyles.rgbToAnsi(248, 248, 248)
      const expected = 37
      expect(received).toEqual(expected)
    })

    it('Should return `97` when given `...[255, 255, 255]`!', () => {
      const received = ansiStyles.rgbToAnsi(255, 255, 255)
      const expected = 97
      expect(received).toEqual(expected)
    })

    it('Should return `93` when given `...[255, 150, 0]`!', () => {
      const received = ansiStyles.rgbToAnsi(255, 150, 0)
      const expected = 93
      expect(received).toEqual(expected)
    })
  })

  describe('Test `rgbToAnsi256` converter:', () => {
    const ansiStyles = main as AnsiStyles

    it('Should return `16` when given `...[7, 7, 7]`!', () => {
      const received = ansiStyles.rgbToAnsi256(7, 7, 7)
      const expected = 16
      expect(received).toEqual(expected)
    })

    it('Should return `232` when given `...[8, 8, 8]`!', () => {
      const received = ansiStyles.rgbToAnsi256(8, 8, 8)
      const expected = 232
      expect(received).toEqual(expected)
    })

    it('Should return `255` when given `...[248, 248, 248]`!', () => {
      const received = ansiStyles.rgbToAnsi256(248, 248, 248)
      const expected = 255
      expect(received).toEqual(expected)
    })

    it('Should return `231` when given `...[255, 255, 255]`!', () => {
      const received = ansiStyles.rgbToAnsi256(255, 255, 255)
      const expected = 231
      expect(received).toEqual(expected)
    })

    it('Should return `214` when given `...[255, 150, 0]`!', () => {
      const received = ansiStyles.rgbToAnsi256(255, 150, 0)
      const expected = 214
      expect(received).toEqual(expected)
    })
  })

  // style names

  describe('Test style names:', () => {
    it('Should return modifier names when `modifierNames` is selected!', () => {
      const received = modifierNames

      const expected = [
        'reset',
        'bold',
        'dim',
        'italic',
        'underline',
        'inverse',
        'hidden',
        'strikethrough',
        'overline'
      ]

      expect(received).toEqual(expected)
    })

    it('Should return foreground color names when `foregroundColorNames` is selected!', () => {
      const received = foregroundColorNames

      const expected = [
        'black',
        'red',
        'green',
        'yellow',
        'blue',
        'magenta',
        'cyan',
        'white',
        'gray',
        'grey',
        'blackBright',
        'redBright',
        'greenBright',
        'yellowBright',
        'blueBright',
        'magentaBright',
        'cyanBright',
        'whiteBright'
      ]

      expect(received).toEqual(expected)
    })

    it('Should return background color names when `backgroundColorNames` is selected!', () => {
      const received = backgroundColorNames

      const expected = [
        'bgBlack',
        'bgRed',
        'bgGreen',
        'bgYellow',
        'bgBlue',
        'bgMagenta',
        'bgCyan',
        'bgWhite',
        'bgGray',
        'bgGrey',
        'bgBlackBright',
        'bgRedBright',
        'bgGreenBright',
        'bgYellowBright',
        'bgBlueBright',
        'bgMagentaBright',
        'bgCyanBright',
        'bgWhiteBright'
      ]

      expect(received).toEqual(expected)
    })

    it('Should return color names when `colorNames` is selected!', () => {
      const received = colorNames

      const expected = [
        'black',
        'red',
        'green',
        'yellow',
        'blue',
        'magenta',
        'cyan',
        'white',
        'gray',
        'grey',
        'blackBright',
        'redBright',
        'greenBright',
        'yellowBright',
        'blueBright',
        'magentaBright',
        'cyanBright',
        'whiteBright',
        'bgBlack',
        'bgRed',
        'bgGreen',
        'bgYellow',
        'bgBlue',
        'bgMagenta',
        'bgCyan',
        'bgWhite',
        'bgGray',
        'bgGrey',
        'bgBlackBright',
        'bgRedBright',
        'bgGreenBright',
        'bgYellowBright',
        'bgBlueBright',
        'bgMagentaBright',
        'bgCyanBright',
        'bgWhiteBright'
      ]

      expect(received).toEqual(expected)
    })
  })
})
