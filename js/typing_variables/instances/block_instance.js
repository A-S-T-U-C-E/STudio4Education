/**
 * @license
 * Copyright 2012 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @fileoverview The class representing one block.
 * @author Carlosperate (ardublockly)
 * @author scanet@libreduc.cc (Sébastien Canet)
 */
'use strict';

goog.require('Blockly.Block');
goog.require('Blockly.Blocks');
goog.require('Blockly.Comment');
goog.require('Blockly.Connection');
goog.require('Blockly.Input');
goog.require('Blockly.Mutator');
goog.require('Blockly.Warning');
goog.require('Blockly.Workspace');
goog.require('Blockly.Xml');

/**
 * Return all instances referenced by this block.
 * @param {string=} opt_instanceType Optional type of the instances to collect,
 *     if not defined it collects all instances.
 * @return {!Array.<string>} List of instance names.
 */
Blockly.Block.prototype.getInstances = function(opt_instanceType) {
    var vars = [];
    for (var i = 0, input; input = this.inputList[i]; i++) {
        for (var j = 0, field; field = input.fieldRow[j]; j++) {
            if (field instanceof Blockly.FieldInstance) {
                var validInstance = opt_instanceType ?
                    field.getInstanceTypeValue(opt_instanceType) :
                    field.getValue();
                if (validInstance) {
                    vars.push(validInstance);
                }
            }
        }
    }
    return vars;
};

/**
 * Notification that a instance is renaming.
 * If the name and type matches one of this block's instances, rename it.
 * @param {string} oldName Previous name of the instance.
 * @param {string} newName Renamed instance.
 * @param {string} instanceType Type of the instances to rename.
 */
Blockly.Block.prototype.renameInstance = function(oldName, newName, instanceType) {
    for (var i = 0, input; input = this.inputList[i]; i++) {
        for (var j = 0, field; field = input.fieldRow[j]; j++) {
            if (field instanceof Blockly.FieldInstance) {
                var validInstance = field.getInstanceTypeValue(instanceType);
                if (validInstance && Blockly.Names.equals(oldName, validInstance)) {
                    field.setValue(newName);
                }
            }
        }
    }
};