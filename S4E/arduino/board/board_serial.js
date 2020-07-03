/**
 * @license
 * Copyright 2012 Fred Lin
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @fileoverview Generating Arduino code for basics board command blocks.
 * @author gasolin@gmail.com (Fred Lin)
 * @author scanet@libreduc.cc (Sébastien CANET)
 */

'use strict';

goog.provide('Blockly.Arduino.board_serial');

goog.require('Blockly.Arduino');

Blockly.Arduino['board_serial_init'] = function () {
    var dropdown_speed = this.getFieldValue('SPEED');
    Blockly.Arduino.setups_['serial_begin'] = 'Serial.begin(' + dropdown_speed + ');';
    return "";
};

Blockly.Arduino['board_serial_printfor'] = function () {
    var content = Blockly.Arduino.valueToCode(this, 'CONTENT', Blockly.Arduino.ORDER_NONE);
    var type = this.getTitleValue('TYPE');
    var code = 'Serial.println(' + content + ',' + type + ');\n';
    return code;
};

Blockly.Arduino['board_serial_print'] = function (block) {
    var content = Blockly.Arduino.valueToCode(this, 'CONTENT', Blockly.Arduino.ORDER_ATOMIC) || '0';
    var code = 'Serial.println(' + content + ');\n';
    return code;
};

Blockly.Arduino['board_serial_available'] = function () {
    var code = 'Serial.available()';
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['board_serial_read'] = function () {
    var code = 'Serial.read()';
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['board_serial_readStringUntil'] = function () {
    var content = Blockly.Arduino.valueToCode(this, 'CONTENT', Blockly.Arduino.ORDER_NONE);
    content = content.replace('"', '\'');
    content = content.replace('"', '\'');
    var code = 'Serial.readStringUntil(' + content + ')';
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['board_serial_flush'] = function () {
    var code = 'Serial.flush();\n';
    return code;
};
