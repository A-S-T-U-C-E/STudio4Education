# @blockly/field-grid-dropdown [![Built on Blockly](https://tinyurl.com/built-on-blockly)](https://github.com/google/blockly)

A [Blockly](https://www.npmjs.com/package/blockly) dropdown field with grid layout.

![](https://github.com/google/blockly-samples/raw/master/plugins/field-grid-dropdown/readme-media/dropdown.png)

## Installation

### Yarn
```
yarn add @blockly/field-grid-dropdown
```

### npm
```
npm install @blockly/field-grid-dropdown --save
```

## Usage

### JavaScript
```js
import * as Blockly from 'blockly';
import {FieldGridDropdown} from '@blockly/field-grid-dropdown';
Blockly.Blocks["test_field_grid_dropdown"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("grid dropdown: ")
      .appendField(new FieldGridDropdown([
          ["A", "A"],["B", "B"], ["C", "C"],["D", "D"], ["E", "E"], ["F", "F"],
          ["G", "G"], ["H", "H"]]), "FIELDNAME");
  }
};
```
### JSON

```js
import * as Blockly from 'blockly';
import '@blockly/field-grid-dropdown';
Blockly.defineBlocksWithJsonArray([
    {
        "type": "test_field_grid_dropdown",
        "message0": "template: %1",
        "args0": [
            {
                "type": "field_grid_dropdown",
                "name": "FIELDNAME",
                "options": [
                        ["A", "A"],["B", "B"], ["C", "C"],["D", "D"],
                        ["E", "E"], ["F", "F"], ["G", "G"], ["H", "H"]
                ]
            }
        ]
    }]);
```

## License

Apache 2.0
