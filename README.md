# @mnrendra/chalk-ansi-styles

Refactor the [ansi-styles](https://github.com/chalk/ansi-styles) code to **TypeScript** and ensure the output supports both **CommonJS (CJS)** and **ES Modules (ESM)** with mixed exports. This will allow users to `import` or `require` the module without needing to use `.default`.

## Install
```bash
npm i @mnrendra/chalk-ansi-styles
```

## Usage

Using `CommonJS`:
```javascript
const ansiStyles = require('@mnrendra/chalk-ansi-styles')

const {
  modifierNames,
  foregroundColorNames,
  backgroundColorNames,
  colorNames
} = require('@mnrendra/chalk-ansi-styles')

console.log(ansiStyles) // It will print:
// {
//   reset: { open: '\u001B[0m', close: '\u001B[0m' },
//   bold: { open: '\u001B[1m', close: '\u001B[22m' },
//   dim: { open: '\u001B[2m', close: '\u001B[22m' },
//   italic: { open: '\u001B[3m', close: '\u001B[23m' },
//   underline: { open: '\u001B[4m', close: '\u001B[24m' },
//   inverse: { open: '\u001B[7m', close: '\u001B[27m' },
//   hidden: { open: '\u001B[8m', close: '\u001B[28m' },
//   strikethrough: { open: '\u001B[9m', close: '\u001B[29m' },
//   overline: { open: '\u001B[53m', close: '\u001B[55m' },
//   black: { open: '\u001B[30m', close: '\u001B[39m' },
//   red: { open: '\u001B[31m', close: '\u001B[39m' },
//   green: { open: '\u001B[32m', close: '\u001B[39m' },
//   yellow: { open: '\u001B[33m', close: '\u001B[39m' },
//   blue: { open: '\u001B[34m', close: '\u001B[39m' },
//   magenta: { open: '\u001B[35m', close: '\u001B[39m' },
//   cyan: { open: '\u001B[36m', close: '\u001B[39m' },
//   white: { open: '\u001B[37m', close: '\u001B[39m' },
//   gray: { open: '\u001B[90m', close: '\u001B[39m' },
//   grey: { open: '\u001B[90m', close: '\u001B[39m' },
//   blackBright: { open: '\u001B[90m', close: '\u001B[39m' },
//   redBright: { open: '\u001B[91m', close: '\u001B[39m' },
//   greenBright: { open: '\u001B[92m', close: '\u001B[39m' },
//   yellowBright: { open: '\u001B[93m', close: '\u001B[39m' },
//   blueBright: { open: '\u001B[94m', close: '\u001B[39m' },
//   magentaBright: { open: '\u001B[95m', close: '\u001B[39m' },
//   cyanBright: { open: '\u001B[96m', close: '\u001B[39m' },
//   whiteBright: { open: '\u001B[97m', close: '\u001B[39m' },
//   bgBlack: { open: '\u001B[40m', close: '\u001B[49m' },
//   bgRed: { open: '\u001B[41m', close: '\u001B[49m' },
//   bgGreen: { open: '\u001B[42m', close: '\u001B[49m' },
//   bgYellow: { open: '\u001B[43m', close: '\u001B[49m' },
//   bgBlue: { open: '\u001B[44m', close: '\u001B[49m' },
//   bgMagenta: { open: '\u001B[45m', close: '\u001B[49m' },
//   bgCyan: { open: '\u001B[46m', close: '\u001B[49m' },
//   bgWhite: { open: '\u001B[47m', close: '\u001B[49m' },
//   bgGray: { open: '\u001B[100m', close: '\u001B[49m' },
//   bgGrey: { open: '\u001B[100m', close: '\u001B[49m' },
//   bgBlackBright: { open: '\u001B[100m', close: '\u001B[49m' },
//   bgRedBright: { open: '\u001B[101m', close: '\u001B[49m' },
//   bgGreenBright: { open: '\u001B[102m', close: '\u001B[49m' },
//   bgYellowBright: { open: '\u001B[103m', close: '\u001B[49m' },
//   bgBlueBright: { open: '\u001B[104m', close: '\u001B[49m' },
//   bgMagentaBright: { open: '\u001B[105m', close: '\u001B[49m' },
//   bgCyanBright: { open: '\u001B[106m', close: '\u001B[49m' },
//   bgWhiteBright: { open: '\u001B[107m', close: '\u001B[49m' }
// }

console.log(modifierNames) // It will print:
// [
//   'reset',
//   'bold',
//   'dim',
//   'italic',
//   'underline',
//   'inverse',
//   'hidden',
//   'strikethrough',
//   'overline',
// ]

console.log(foregroundColorNames) // It will print:
// [
//   'black',
//   'red',
//   'green',
//   'yellow',
//   'blue',
//   'magenta',
//   'cyan',
//   'white',
//   'gray',
//   'grey',
//   'blackBright',
//   'redBright',
//   'greenBright',
//   'yellowBright',
//   'blueBright',
//   'magentaBright',
//   'cyanBright',
//   'whiteBright',
// ]

console.log(backgroundColorNames) // It will print:
// [
//   'bgBlack',
//   'bgRed',
//   'bgGreen',
//   'bgYellow',
//   'bgBlue',
//   'bgMagenta',
//   'bgCyan',
//   'bgWhite',
//   'bgGray',
//   'bgGrey',
//   'bgBlackBright',
//   'bgRedBright',
//   'bgGreenBright',
//   'bgYellowBright',
//   'bgBlueBright',
//   'bgMagentaBright',
//   'bgCyanBright',
//   'bgWhiteBright'
// ]

console.log(colorNames) // It will print:
// [
//   'bgBlack',
//   'bgRed',
//   'bgGreen',
//   'bgYellow',
//   'bgBlue',
//   'bgMagenta',
//   'bgCyan',
//   'bgWhite',
//   'bgGray',
//   'bgGrey',
//   'bgBlackBright',
//   'bgRedBright',
//   'bgGreenBright',
//   'bgYellowBright',
//   'bgBlueBright',
//   'bgMagentaBright',
//   'bgCyanBright',
//   'bgWhiteBright'
//   'bgBlack',
//   'bgRed',
//   'bgGreen',
//   'bgYellow',
//   'bgBlue',
//   'bgMagenta',
//   'bgCyan',
//   'bgWhite',
//   'bgGray',
//   'bgGrey',
//   'bgBlackBright',
//   'bgRedBright',
//   'bgGreenBright',
//   'bgYellowBright',
//   'bgBlueBright',
//   'bgMagentaBright',
//   'bgCyanBright',
//   'bgWhiteBright'
// ]

console.log(ansiStyles.color.close.replace('\u001B', 'u001B')) // It will print:
// 'u001B[39m'

console.log(ansiStyles.color.ansi(30).replace('\u001B', 'u001B')) // It will print:
// 'u001B[30m'

console.log(ansiStyles.color.ansi256(255).replace('\u001B', 'u001B')) // It will print:
// 'u001B[38;5;255m'

console.log(ansiStyles.color.ansi16m(255, 255, 255).replace('\u001B', 'u001B')) // It will print:
// 'u001B[38;2;255;255;255m'

console.log(ansiStyles.bgColor.close.replace('\u001B', 'u001B')) // It will print:
// 'u001B[49m'

console.log(ansiStyles.bgColor.ansi(40).replace('\u001B', 'u001B')) // It will print:
// 'u001B[40m'

console.log(ansiStyles.bgColor.ansi256(255).replace('\u001B', 'u001B')) // It will print:
// 'u001B[48;5;255m'

console.log(ansiStyles.bgColor.ansi16m(255, 255, 255).replace('\u001B', 'u001B')) // It will print:
// 'u001B[48;2;255;255;255m'

console.log(ansiStyles.ansi256ToAnsi(256)) // It will print:
// 37

console.log(ansiStyles.hexToAnsi('#f00')) // It will print:
// 91

console.log(ansiStyles.hexToAnsi256('#0f0')) // It will print:
// 46

console.log(ansiStyles.hexToRgb('#00f')) // It will print:
// [ 0, 0, 255 ]

console.log(ansiStyles.rgbToAnsi(255, 0, 0)) // It will print:
// 91

console.log(ansiStyles.rgbToAnsi256(0, 255, 0)) // It will print:
// 46

console.log(ansiStyles.default) // It will print the same as `ansiStyles`.
```

Using `ES Modules`:
```javascript
import ansiStyles, {
  modifierNames,
  foregroundColorNames,
  backgroundColorNames,
  colorNames
} from '@mnrendra/chalk-ansi-styles'

console.log(ansiStyles) // It will print:
// {
//   reset: { open: '\u001B[0m', close: '\u001B[0m' },
//   bold: { open: '\u001B[1m', close: '\u001B[22m' },
//   dim: { open: '\u001B[2m', close: '\u001B[22m' },
//   italic: { open: '\u001B[3m', close: '\u001B[23m' },
//   underline: { open: '\u001B[4m', close: '\u001B[24m' },
//   inverse: { open: '\u001B[7m', close: '\u001B[27m' },
//   hidden: { open: '\u001B[8m', close: '\u001B[28m' },
//   strikethrough: { open: '\u001B[9m', close: '\u001B[29m' },
//   overline: { open: '\u001B[53m', close: '\u001B[55m' },
//   black: { open: '\u001B[30m', close: '\u001B[39m' },
//   red: { open: '\u001B[31m', close: '\u001B[39m' },
//   green: { open: '\u001B[32m', close: '\u001B[39m' },
//   yellow: { open: '\u001B[33m', close: '\u001B[39m' },
//   blue: { open: '\u001B[34m', close: '\u001B[39m' },
//   magenta: { open: '\u001B[35m', close: '\u001B[39m' },
//   cyan: { open: '\u001B[36m', close: '\u001B[39m' },
//   white: { open: '\u001B[37m', close: '\u001B[39m' },
//   gray: { open: '\u001B[90m', close: '\u001B[39m' },
//   grey: { open: '\u001B[90m', close: '\u001B[39m' },
//   blackBright: { open: '\u001B[90m', close: '\u001B[39m' },
//   redBright: { open: '\u001B[91m', close: '\u001B[39m' },
//   greenBright: { open: '\u001B[92m', close: '\u001B[39m' },
//   yellowBright: { open: '\u001B[93m', close: '\u001B[39m' },
//   blueBright: { open: '\u001B[94m', close: '\u001B[39m' },
//   magentaBright: { open: '\u001B[95m', close: '\u001B[39m' },
//   cyanBright: { open: '\u001B[96m', close: '\u001B[39m' },
//   whiteBright: { open: '\u001B[97m', close: '\u001B[39m' },
//   bgBlack: { open: '\u001B[40m', close: '\u001B[49m' },
//   bgRed: { open: '\u001B[41m', close: '\u001B[49m' },
//   bgGreen: { open: '\u001B[42m', close: '\u001B[49m' },
//   bgYellow: { open: '\u001B[43m', close: '\u001B[49m' },
//   bgBlue: { open: '\u001B[44m', close: '\u001B[49m' },
//   bgMagenta: { open: '\u001B[45m', close: '\u001B[49m' },
//   bgCyan: { open: '\u001B[46m', close: '\u001B[49m' },
//   bgWhite: { open: '\u001B[47m', close: '\u001B[49m' },
//   bgGray: { open: '\u001B[100m', close: '\u001B[49m' },
//   bgGrey: { open: '\u001B[100m', close: '\u001B[49m' },
//   bgBlackBright: { open: '\u001B[100m', close: '\u001B[49m' },
//   bgRedBright: { open: '\u001B[101m', close: '\u001B[49m' },
//   bgGreenBright: { open: '\u001B[102m', close: '\u001B[49m' },
//   bgYellowBright: { open: '\u001B[103m', close: '\u001B[49m' },
//   bgBlueBright: { open: '\u001B[104m', close: '\u001B[49m' },
//   bgMagentaBright: { open: '\u001B[105m', close: '\u001B[49m' },
//   bgCyanBright: { open: '\u001B[106m', close: '\u001B[49m' },
//   bgWhiteBright: { open: '\u001B[107m', close: '\u001B[49m' }
// }

console.log(modifierNames) // It will print:
// [
//   'reset',
//   'bold',
//   'dim',
//   'italic',
//   'underline',
//   'inverse',
//   'hidden',
//   'strikethrough',
//   'overline',
// ]

console.log(foregroundColorNames) // It will print:
// [
//   'black',
//   'red',
//   'green',
//   'yellow',
//   'blue',
//   'magenta',
//   'cyan',
//   'white',
//   'gray',
//   'grey',
//   'blackBright',
//   'redBright',
//   'greenBright',
//   'yellowBright',
//   'blueBright',
//   'magentaBright',
//   'cyanBright',
//   'whiteBright',
// ]

console.log(backgroundColorNames) // It will print:
// [
//   'bgBlack',
//   'bgRed',
//   'bgGreen',
//   'bgYellow',
//   'bgBlue',
//   'bgMagenta',
//   'bgCyan',
//   'bgWhite',
//   'bgGray',
//   'bgGrey',
//   'bgBlackBright',
//   'bgRedBright',
//   'bgGreenBright',
//   'bgYellowBright',
//   'bgBlueBright',
//   'bgMagentaBright',
//   'bgCyanBright',
//   'bgWhiteBright'
// ]

console.log(colorNames) // It will print:
// [
//   'bgBlack',
//   'bgRed',
//   'bgGreen',
//   'bgYellow',
//   'bgBlue',
//   'bgMagenta',
//   'bgCyan',
//   'bgWhite',
//   'bgGray',
//   'bgGrey',
//   'bgBlackBright',
//   'bgRedBright',
//   'bgGreenBright',
//   'bgYellowBright',
//   'bgBlueBright',
//   'bgMagentaBright',
//   'bgCyanBright',
//   'bgWhiteBright'
//   'bgBlack',
//   'bgRed',
//   'bgGreen',
//   'bgYellow',
//   'bgBlue',
//   'bgMagenta',
//   'bgCyan',
//   'bgWhite',
//   'bgGray',
//   'bgGrey',
//   'bgBlackBright',
//   'bgRedBright',
//   'bgGreenBright',
//   'bgYellowBright',
//   'bgBlueBright',
//   'bgMagentaBright',
//   'bgCyanBright',
//   'bgWhiteBright'
// ]

console.log(ansiStyles.color.close.replace('\u001B', 'u001B')) // It will print:
// 'u001B[39m'

console.log(ansiStyles.color.ansi(30).replace('\u001B', 'u001B')) // It will print:
// 'u001B[30m'

console.log(ansiStyles.color.ansi256(255).replace('\u001B', 'u001B')) // It will print:
// 'u001B[38;5;255m'

console.log(ansiStyles.color.ansi16m(255, 255, 255).replace('\u001B', 'u001B')) // It will print:
// 'u001B[38;2;255;255;255m'

console.log(ansiStyles.bgColor.close.replace('\u001B', 'u001B')) // It will print:
// 'u001B[49m'

console.log(ansiStyles.bgColor.ansi(40).replace('\u001B', 'u001B')) // It will print:
// 'u001B[40m'

console.log(ansiStyles.bgColor.ansi256(255).replace('\u001B', 'u001B')) // It will print:
// 'u001B[48;5;255m'

console.log(ansiStyles.bgColor.ansi16m(255, 255, 255).replace('\u001B', 'u001B')) // It will print:
// 'u001B[48;2;255;255;255m'

console.log(ansiStyles.ansi256ToAnsi(256)) // It will print:
// 37

console.log(ansiStyles.hexToAnsi('#f00')) // It will print:
// 91

console.log(ansiStyles.hexToAnsi256('#0f0')) // It will print:
// 46

console.log(ansiStyles.hexToRgb('#00f')) // It will print:
// [ 0, 0, 255 ]

console.log(ansiStyles.rgbToAnsi(255, 0, 0)) // It will print:
// 91

console.log(ansiStyles.rgbToAnsi256(0, 255, 0)) // It will print:
// 46

console.log(ansiStyles.default) // It will print the same as `ansiStyles`.
```

For more details, refer to the original source code: [https://github.com/chalk/ansi-styles](https://github.com/chalk/ansi-styles).

## Types
```typescript
import type {
  Layer,
  CSPair,
  Modifier,
  ForegroundColor,
  BackgroundColor,
  StyleNumbers,
  ModifierName,
  ForegroundColorName,
  BackgroundColorName,
  ColorName,
  StyleName,
  Styles,
  AnsiStyles
} from '@mnrendra/chalk-ansi-styles'
```

The default type is `Styles`, which only provides the public properties. If you want to expose all defined properties, use `AnsiStyles`. Examples:
```typescript
import type { AnsiStyles } from '@mnrendra/chalk-ansi-styles'

import styles, { ansiStyles } from '@mnrendra/chalk-ansi-styles'

console.log(styles.color) // Will show an error:
// Property 'color' does not exist on type 'Styles'.

// To solve the above error, use the `AnsiStyles` type as shown below:
console.log((styles as AnsiStyles).color)

// Or you can import `ansiStyles`, which has the same value as the default export (`styles`),
// but uses the `AnsiStyles` type:
console.log(ansiStyles.color)
```

## Contribute
Contributions are always welcome! Please open discussions [here](https://github.com/mnrendra/chalk-ansi-styles/discussions).

## Special Thanks 🙇
- [sindresorhus](https://github.com/sindresorhus) for creating the [original source code](https://github.com/chalk/ansi-styles).
- [Qix-](https://github.com/Qix-) for being the active maintainer of the [original source code](https://github.com/chalk/ansi-styles).

## License
[MIT](https://github.com/mnrendra/chalk-ansi-styles/blob/HEAD/LICENSE)

## Author
[@mnrendra](https://github.com/mnrendra)
