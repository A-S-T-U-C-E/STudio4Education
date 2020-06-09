/**
 * @license
 * Copyright 2012 Fred Lin
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @fileoverview Servomotor blocks for Blockly.
 * @author gasolin@gmail.com (Fred Lin)
 * @author scanet@libreduc.cc (Sébastien Canet)
 */
'use strict';

goog.provide('Blockly.Constants.servo');

goog.require('Blockly.Blocks');
goog.require('Blockly');

var servoMediaFolder = "./S4E/blocks/servo/";

Blockly.Blocks['servo_move'] = {
    init: function () {
        this.appendDummyInput()
                .appendField("Servo")
                .appendField(new Blockly.FieldImage(servoMediaFolder + "servo.jpg", 64, 64))
                .appendField("PIN#")
                .appendField(new Blockly.FieldDropdown(profile.default.dropdownDigital), "PIN");
        this.appendValueInput("DEGREE")
                .setCheck(intCompatibility)
                .setAlign(Blockly.ALIGN_RIGHT)
                .appendField("Degree (0~180)");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('move between 0~180 degree');
        this.setHelpUrl('http://playground.arduino.cc/ComponentLib/servo');
        this.setStyle('servo_blocks');
    }
};

Blockly.Blocks['servo_read_degrees'] = {
    init: function () {
        this.appendDummyInput()
                .appendField("Servo")
                .appendField(new Blockly.FieldImage(servoMediaFolder + "servo.jpg", 64, 64))
                .appendField("PIN#")
                .appendField(new Blockly.FieldDropdown(profile.default.dropdownDigital), "PIN");
        this.appendDummyInput()
                .setAlign(Blockly.ALIGN_RIGHT)
                .appendField("Read Degrees")
        this.setOutput(true, "int");
        this.setTooltip('return that degree with the last servo move.');
        this.setHelpUrl('http://playground.arduino.cc/ComponentLib/servo');
        this.setStyle('servo_blocks');
    }
};