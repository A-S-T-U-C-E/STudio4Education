/**
 * @license
 * Copyright 2020 Sébastien CANET
 * SPDX-License-Identifier: BSD-3-Clause
 */

/**
 * @fileoverview black & white UI theme.
 */
'use strict';

goog.provide('Blockly.Themes.blackWhite');

goog.require('Blockly.Theme');

// Temporary holding object.
Blockly.Themes.blackWhite = {};

Blockly.Themes.blackWhite.defaultBlockStyles = {
    "colour_blocks": {
        "colourPrimary": "#000000",
        "colourSecondary": "#000000",
        "colourTertiary": "#000000"
    },
    "list_blocks": {
        "colourPrimary": "#000000",
        "colourSecondary": "#000000",
        "colourTertiary": "#000000"
    },
    "logic_blocks": {
        "colourPrimary": "#000000",
        "colourSecondary": "#000000",
        "colourTertiary": "#000000"
    },
    "loop_blocks": {
        "colourPrimary": "#000000",
        "colourSecondary": "#000000",
        "colourTertiary": "#000000"
    },
    "math_blocks": {
        "colourPrimary": "#000000",
        "colourSecondary": "#000000",
        "colourTertiary": "#000000"
    },
    "procedure_blocks": {
        "colourPrimary": "#000000",
        "colourSecondary": "#000000",
        "colourTertiary": "#000000"
    },
    "text_blocks": {
        "colourPrimary": "#000000",
        "colourSecondary": "#000000",
        "colourTertiary": "#000000"
    },
    "variable_blocks": {
        "colourPrimary": "#000000",
        "colourSecondary": "#000000",
        "colourTertiary": "#000000"
    },
    "variable_dynamic_blocks": {
        "colourPrimary": "#000000",
        "colourSecondary": "#000000",
        "colourTertiary": "#000000"
    },
    "hat_blocks": {
        "colourPrimary": "#000000",
        "colourSecondary": "#000000",
        "colourTertiary": "#000000",
        "hat": "cap"
    },
    "board_blocks": {
        "colourPrimary": "#000000",
        "colourSecondary": "#000000",
        "colourTertiary": "#000000"
    },
    "servo_blocks": {
        "colourPrimary": "#000000",
        "colourSecondary": "#000000",
        "colourTertiary": "#000000"
    },
    "X-NUCLEO-IKS01A3_blocks": {
        "colourPrimary": "#000000",
        "colourSecondary": "#000000",
        "colourTertiary": "#000000"
    }
};

Blockly.Themes.blackWhite.categoryStyles = {
    "colour_category": {
        "colour": "#000000"
    },
    "list_category": {
        "colour": "#000000"
    },
    "logic_category": {
        "colour": "#000000"
    },
    "loop_category": {
        "colour": "#000000"
    },
    "math_category": {
        "colour": "#000000"
    },
    "procedure_category": {
        "colour": "#000000"
    },
    "text_category": {
        "colour": "#000000"
    },
    "variable_category": {
        "colour": "#000000"
    },
    "variable_dynamic_category": {
        "colour": "#000000"
    },
    "board_category": {
        "colour": "#000000"
    },
    "servo_category": {
        "colour": "#000000"
    },
    "X-NUCLEO-IKS01A3_category": {
        "colour": "#000000"
    }
};

Blockly.Themes.blackWhite =
        new Blockly.Theme('blackWhite', Blockly.Themes.blackWhite.defaultBlockStyles,
                Blockly.Themes.blackWhite.categoryStyles);

Blockly.Themes.blackWhite.setComponentStyle('toolboxBackgroundColour', '#f9f9f9');
Blockly.Themes.blackWhite.setComponentStyle('toolboxForegroundColour', '#000000');
Blockly.Themes.blackWhite.setComponentStyle('flyoutBackgroundColour', '#f9f9f9');
Blockly.Themes.blackWhite.setComponentStyle('flyoutForegroundColour', '#f9f9f9');
Blockly.Themes.blackWhite.setComponentStyle('flyoutOpacity', 0);
Blockly.Themes.blackWhite.setComponentStyle('scrollbarColour', '#000000');
Blockly.Themes.blackWhite.setComponentStyle('scrollbarOpacity', '1');

Blockly.Themes.blackWhite.setFontStyle({
    'family': 'Trebuchet MS', // Use default font-family
    'weight': null, // Use default font-weight
    'size': 12
});