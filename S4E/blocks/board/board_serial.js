/**
 * @license
 * Copyright 2012 Fred Lin
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @fileoverview Basics board command blocks for Blockly.
 * @author gasolin@gmail.com (Fred Lin)
 * @author scanet@libreduc.cc (Sébastien Canet)
 */

'use strict';

//To support syntax defined in http://arduino.cc/en/Reference/HomePage

goog.provide('Blockly.Constants.board_serial');

goog.require('Blockly.Blocks');
goog.require('Blockly');

var mediaFolder = "./S4E/media/";

Blockly.Blocks['board_serial_init'] = {
    init: function () {
        this.setInputsInline(true);
        this.appendDummyInput("")
                .appendField(Blockly.Msg.SERIAL_INIT)
                .appendField(new Blockly.FieldDropdown(profile.default.serial), "SPEED");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip(Blockly.Msg.SERIAL_PRINT_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.SERIAL_PRINT_HELPURL);
        this.setStyle('board_blocks');
    }
};

Blockly.Blocks['board_serial_printfor'] = {
    init: function () {
        this.setInputsInline(true);
        this.appendValueInput("CONTENT")
                .setCheck('Number')
                .appendField(Blockly.Msg.SERIAL_PRINT_FORMAT)
                .appendField(new Blockly.FieldDropdown([[Blockly.Msg.SERIAL_PRINT_FORDECIMAL, "DEC"], [Blockly.Msg.SERIAL_PRINT_FORHEXA, "HEX"], [Blockly.Msg.SERIAL_PRINT_FORBIN, "BIN"], [Blockly.Msg.SERIAL_PRINT_FOROCT, "OCT"]]), "TYPE");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip(Blockly.Msg.SERIAL_PRINT_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.SERIAL_PRINT_HELPURL);
        this.setStyle('board_blocks');
    }
};

Blockly.Blocks['board_serial_print'] = {
    init: function () {
        this.appendValueInput("CONTENT")
                .appendField(Blockly.Msg.SERIAL_PRINT_CONTENT);
                // .setCheck(stringCompatibility);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip(Blockly.Msg.SERIAL_PRINT_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.SERIAL_PRINT_HELPURL);
        this.setStyle('board_blocks');
    }
};

Blockly.Blocks['board_serial_available'] = {
    init: function () {
        this.appendDummyInput("")
                .appendField(Blockly.Msg.SERIAL_AVAILABLE);
        this.setInputsInline(true);
        this.setOutput(true, "Boolean");
        this.setTooltip(Blockly.Msg.SERIAL_PRINT_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.SERIAL_PRINT_HELPURL);
        this.setStyle('board_blocks');
    }
};

Blockly.Blocks['board_serial_read'] = {
    init: function () {
        this.appendDummyInput("")
                .appendField(Blockly.Msg.SERIAL_READ);
        this.setInputsInline(true);
        this.setOutput(true, "Number");
        this.setTooltip(Blockly.Msg.SERIAL_PRINT_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.SERIAL_PRINT_HELPURL);
        this.setStyle('board_blocks');
    }
};

Blockly.Blocks['board_serial_readStringUntil'] = {
    init: function () {
        this.appendValueInput("CONTENT")
                .setCheck('String')
                .appendField(Blockly.Msg.SERIAL_READSTRINGUNTIL_CONTENT);
        this.setInputsInline(true);
        this.setOutput(true, "String");
        this.setTooltip(Blockly.Msg.SERIAL_READSTRINGUNTIL_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.SERIAL_READSTRINGUNTIL_HELPURL);
        this.setStyle('board_blocks');
    }
};

Blockly.Blocks['board_serial_flush'] = {
    init: function () {
        this.appendDummyInput("")
                .appendField(Blockly.Msg.SERIAL_FLUSH);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip(Blockly.Msg.SERIAL_PRINT_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.SERIAL_PRINT_HELPURL);
        this.setStyle('board_blocks');
    }
};
