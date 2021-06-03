# @blockly/theme-modern [![Built on Blockly](https://tinyurl.com/built-on-blockly)](https://github.com/google/blockly)

A [Blockly](https://www.npmjs.com/package/blockly) modern theme that uses the
same block colours as the [Classic theme](https://github.com/google/blockly/blob/master/core/theme/classic.js)
but with darker borders. This theme is mainly meant for use with the Thrasos or
Zelos renderer.

## Installation

### Yarn
```
yarn add @blockly/theme-modern
```

### npm
```
npm install @blockly/theme-modern --save
```

## Usage

```js
import * as Blockly from 'blockly';
import Theme from '@blockly/theme-modern';

Blockly.inject('blocklyDiv', {
  theme: Theme,
});

```

## License
Apache 2.0
