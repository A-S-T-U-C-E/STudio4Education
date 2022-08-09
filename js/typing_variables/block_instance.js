/**
 * @license
 * Visual Blocks Editor
 *
 * Copyright 2011 Google Inc.
 * https://developers.google.com/blockly/
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview The class representing one block.
 * @author Carlosperate
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
		for (var k = 0; k < (field.menuGenerator_.length-2); k++){
			 vars.push(field.menuGenerator_[k][0]);
			
		}
                /*if (validInstance) {
                    vars.push(validInstance);
                }*/
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
Blockly.Block.prototype.renameInstance = function(
    oldName, newName, instanceType) {
	console.log(oldName+" "+ newName +" " +instanceType);
    for (var i = 0, input; input = this.inputList[i]; i++) {
        for (var j = 0, field; field = input.fieldRow[j]; j++) {
            if (field instanceof Blockly.FieldInstance) {
		console.log(field);
                var validInstance = field.getInstanceTypeValue(instanceType);
                if (validInstance && Blockly.Names.equals(oldName, validInstance)) {
					field.setValue(newName);
					field.selectedOption_ = [newName,newName];
					for (var k = 0; k < field.menuGenerator_.length; k++){
						if (field.menuGenerator_[k][0].indexOf(oldName) != -1){
							field.menuGenerator_[k] = [newName,newName];
							break;
						}
					}
					for (var k = 0; k < Blockly.Arduino.InstanceTypeWithNames['Servo'].length; k++){
						if (Blockly.Arduino.InstanceTypeWithNames['Servo'][k][0].indexOf(oldName) != -1){
							Blockly.Arduino.InstanceTypeWithNames['Servo'][k] = [newName,newName];
							break;
						}
					}
					field.textContent_.data = newName;
					field.textContent_.nodeValue = newName;
					field.textContent_.textContent = newName;
					field.size_.width = 0;
							field.getOptions(false);
							// work around for https://github.com/google/blockly/issues/3553
							field.doValueUpdate_(newName);
							if (field.isDirty_) {
					 field.forceRerender();
  		    }
                }
            }
        }
    }
	
	var blocks = this.workspace.getAllBlocks();
	for (var k = 0; k < blocks.length; k++){
		var block = blocks[k];
			for (var i = 0, input; input = block.inputList[i]; i++) {
				for (var j = 0, field; field = input.fieldRow[j]; j++) {
					if (field instanceof Blockly.FieldInstance) {
						for (var k = 0; k < field.menuGenerator_.length; k++){
							if (field.menuGenerator_[k][0].indexOf(oldName) != -1){
								field.menuGenerator_[k] = [newName,newName];
								break;
							}
						}
						if (field.getValue() === oldName){
							field.setValue(newName);
							field.selectedOption_ = [newName,newName];
							field.textContent_.data = newName;
							field.textContent_.nodeValue = newName;
							field.textContent_.textContent = newName;
							field.size_.width = 0;
									field.getOptions(false);
									// work around for https://github.com/google/blockly/issues/3553
									field.doValueUpdate_(newName);
									if (field.isDirty_) {
										field.forceRerender();		
									}
						}
									
					}
				}
			}
		
    }
};

/**
 * Notification that a new instance is creating.
 * @param {string} name The instance's name.
 */
Blockly.Block.prototype.addInstance = function(name) {
	console.log("crete instance");
    for (var i = 0, input; input = this.inputList[i]; i++) {
        for (var j = 0, field; field = input.fieldRow[j]; j++) {
            if (field instanceof Blockly.FieldInstance) {
		    console.log(field);
		    var oldMenu = field.menuGenerator_;
		    field.menuGenerator_ = [[name,name]].concat(oldMenu);
			Blockly.Arduino.InstanceTypeWithNames['Servo'] = [[name,name]].concat(Blockly.Arduino.InstanceTypeWithNames['Servo']);
                
            }
        }
    }
	var blocks = this.workspace.getAllBlocks();
	for (var k = 0; k < blocks.length; k++){
		var block = blocks[k];
		if (block !== this){
			for (var i = 0, input; input = block.inputList[i]; i++) {
				for (var j = 0, field; field = input.fieldRow[j]; j++) {
					if (field instanceof Blockly.FieldInstance) {
						console.log(field);
						var oldMenu = field.menuGenerator_;
						field.menuGenerator_ = [[name,name]].concat(oldMenu);							
					}
				}
			}
		}
    }
};