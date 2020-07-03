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

goog.provide('Blockly.Constants.X-NUCLEO-IKS01A3');

goog.require('Blockly.Blocks');
goog.require('Blockly');

var X_NUCLEO_IKS01A3_MediaFolder = "./S4E/blocks/X-NUCLEO-IKS01A3/X-NUCLEO-IKS01A3.jpg";

Blockly.Blocks['X_NUCLEO_IKS01A3_Temp_Read'] = {
    init: function () {
        this.appendDummyInput()
                .appendField(Blockly.Msg.X_NUCLEO_IKS01A3_Temp_Read_INPUT)
                .appendField(new Blockly.FieldImage(X_NUCLEO_IKS01A3_MediaFolder, 64, 64));
        this.setOutput(true, "float");
        this.setTooltip(Blockly.Msg.X_NUCLEO_IKS01A3_Temp_Read_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.X_NUCLEO_IKS01A3_Temp_Read_HELPURL);
        this.setStyle('X-NUCLEO-IKS01A3_blocks');
    }
};

Blockly.Blocks['X_NUCLEO_IKS01A3_Humidity_Read'] = {
    init: function () {
        this.appendDummyInput()
                .appendField(Blockly.Msg.X_NUCLEO_IKS01A3_Humidity_Read_INPUT)
                .appendField(new Blockly.FieldImage(X_NUCLEO_IKS01A3_MediaFolder, 64, 64));
        this.setOutput(true, "float");
        this.setTooltip(Blockly.Msg.X_NUCLEO_IKS01A3_Humidity_Read_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.X_NUCLEO_IKS01A3_Humidity_Read_HELPURL);
        this.setStyle('X-NUCLEO-IKS01A3_blocks');
    }
};