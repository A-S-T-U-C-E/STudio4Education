/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 */

/**
 * @fileoverview Instances input field.
 */
'use strict';

goog.provide('Blockly.FieldInstance');

goog.require('Blockly.FieldDropdown');
goog.require('Blockly.Instances');
goog.require('Blockly.Msg');
goog.require('Blockly.utils');


/**
 * Class for a specific type of instances' dropdown field.
 * @param {?string} instanceName The default name for the instance. If null,
 *     a unique instance name will be generated.
 * @param {!string} instanceType The type of instances for the dropdown.
 * @param {boolean} uniqueName
 * @param {boolean=} opt_lockNew Indicates a special case in which this
 *     dropdown can only rename the current name and each new block will always
 *     have a unique name.
 * @param {boolean=} opt_lockRename
 * @param {Function=} opt_validator A function that is executed when a new
 *     option is selected.  Its sole argument is the new option value.
 * @extends {Blockly.FieldDropdown}
 * @constructor
 */
Blockly.FieldInstance = function(
    instanceType, instanceName, uniqueName, opt_lockNew, opt_lockRename,
    opt_editDropdownData, opt_validator) {

    Blockly.FieldInstance.superClass_.constructor.call(this, this.dropdownCreate(instanceName), opt_validator);

    this.instanceType_ = instanceType;
    this.setValue(instanceName);
    this.uniqueName_ = (uniqueName === true);
    this.lockNew_ = (opt_lockNew === true);
    this.lockRename_ = (opt_lockRename === true);
    this.editDropdownData = (opt_editDropdownData instanceof Function) ? opt_editDropdownData : null;
};
Blockly.utils.object.inherits(Blockly.FieldInstance, Blockly.FieldDropdown);

/**
 * Sets a new change handler for instance field.
 * @param {Function} handler New change handler, or null.
 */
Blockly.FieldInstance.prototype.setValidator = function(handler) {
    var wrappedHandler;
    if (handler) {
        // Wrap the user's change handler together with the instance rename handler.
        wrappedHandler = function(value) {
            var v1 = handler.call(this, value);
            if (v1 === null) {
                var v2 = v1;
            } else {
                if (v1 === undefined) {
                    v1 = value;
                }
                var v2 = Blockly.FieldInstance.dropdownChange.call(this, v1);
                if (v2 === undefined) {
                    v2 = v1;
                }
            }
            return v2 === value ? undefined : v2;
        };
    } else {
        wrappedHandler = Blockly.FieldInstance.dropdownChange;
    }
    Blockly.FieldInstance.superClass_.setValidator.call(this, wrappedHandler);
};

/**
 * Install this dropdown on a block.
 */
Blockly.FieldInstance.prototype.init = function() {
    // Nothing to do if the dropdown has already been initialised once.
    if (this.fieldGroup_) return;

    Blockly.FieldInstance.superClass_.init.call(this);

    var workspace = this.sourceBlock_.isInFlyout ?
        this.sourceBlock_.workspace.targetWorkspace : this.sourceBlock_.workspace;

    if (!this.getText()) {
        // Instances without names get uniquely named for this workspace.
        this.setValue(Blockly.Instances.generateUniqueName(workspace));
    } else {
        if (this.uniqueName_) {
            // Ensure the given name is unique in the workspace, but not in flyout
            if (!this.sourceBlock_.isInFlyout) {
                this.setValue(
                    Blockly.Instances.convertToUniqueNameBlock(
                        this.getText(), this.sourceBlock_));
            }
        } else {
            // Pick an existing name from the workspace if any exists
            var instanceList =
                Blockly.Instances.allInstancesOf(this.instanceType_,
                    this.sourceBlock_.workspace);
            if (instanceList.indexOf(this.getText()) == -1) {
                var existingName =
                    Blockly.Instances.getAnyInstanceOf(this.instanceType_, workspace);
                if (existingName) this.setValue(existingName);
            }
        }
    }
};

Blockly.FieldInstance.prototype.getInstanceTypeValue = function(instanceType) {
    return (instanceType === this.instanceType_) ? this.getText() : undefined;
};

/**
 * Set the instance name.
 * @param {string} newValue New text.
 */
Blockly.FieldInstance.prototype.setValue = function(newValue) {
    if (this.sourceBlock_ && Blockly.Events.isEnabled()) {
        Blockly.Events.fire(new(Blockly.Events.get(Blockly.Events.BLOCK_CHANGE))(
            this.sourceBlock_, 'field', this.name, this.value_, newValue));
    }
    this.value_ = newValue;
    this.forceRerender();
};

/**
 * Return a sorted list of instance names for instance dropdown menus.
 * If editDropdownData has been defined it passes this list to the 
 * @return {!Array.<string>} Array of instance names.
 */
Blockly.FieldInstance.prototype.dropdownCreate = function(name) {
    if (this.sourceBlock_ && this.sourceBlock_.workspace) {
        var instanceList =
            Blockly.Instances.allInstancesOf(this.instanceType_,
                this.sourceBlock_.workspace);
    } else {
        var instanceList = [];
    }
    // Ensure that the currently selected instance is an option.
    // var name = this.getText();
    if (!name) name = this.getText();
    if (name && instanceList.indexOf(name) == -1) {
        instanceList.push(name);
    }
    instanceList.sort(Blockly.VariableModel.compareByName);
    if (!this.lockRename_) {
        instanceList.push(Blockly.Msg.ARD_RENAME_INSTANCE);
    }
    if (!this.lockNew_) {
        instanceList.push(Blockly.Msg.ARD_NEW_INSTANCE);
    }
    var options = [];
    // Instances are not language specific, so use for display and internal name
    for (var i = 0; i < instanceList.length; i++) {
        options[i] = [instanceList[i], instanceList[i]];
    }

    return options;
};

// Blockly.FieldInstance.prototype.onItemSelected_ = function(menu, menuItem) {
//     var text = menuItem.getValue();

//     function promptName(promptText, defaultText, callback) {
//         Blockly.hideChaff();
//         var newVar = Blockly.prompt(promptText, defaultText, function(newVar) {
//             // Merge runs of whitespace.  Strip leading and trailing whitespace.
//             // Beyond this, all names are legal.
//             if (newVar) {
//                 newVar = newVar.replace(/[\s\xa0]+/g, ' ').trim();
//                 // newVar = newVar.replace(/[\s\xa0]+/g, ' ').replace(/^ | $/g, '');
//                 if (newVar == Blockly.Msg.ARD_RENAME_INSTANCE ||
//                     newVar == Blockly.Msg.ARD_NEW_INSTANCE) {
//                     newVar = null; // Ok, not ALL names are legal...
//                 }
//             }
//             callback(newVar);
//         });
//     }
//     var workspace = this.sourceBlock_.workspace;
//     if (text == Blockly.Msg.ARD_RENAME_INSTANCE) {
//         var oldInstance = this.getText();
//         var thisFieldInstance = this;
//         var callbackRename = function(text) {
//             if (text) {
//                 Blockly.Instances.renameInstance(
//                     oldInstance, text, thisFieldInstance.instanceType_, workspace);
//             }
//         };
//         promptName(Blockly.Msg.ARD_RENAME_INSTANCE_TITLE.replace('%1', oldInstance),
//             oldInstance, callbackRename);
//         return null;
//     } else if (text == Blockly.Msg.ARD_NEW_INSTANCE) {
//         return Blockly.Instances.generateUniqueName(workspace);
//     }
//     return undefined;
// };

Blockly.FieldInstance.prototype.onItemSelected_ = function(menu, menuItem) {
    var id = menuItem.getValue();
    var workspace = this.sourceBlock_.workspace;
    // Handle special cases.
    if (this.sourceBlock_ && workspace) {
        if (id == Blockly.Msg.ARD_RENAME_INSTANCE) {
            var oldInstance = this.getText();
            var thisFieldInstance = this;
            var callbackRename = function(text) {
                if (text) {
                    Blockly.Instances.renameInstance(
                        oldInstance, text, thisFieldInstance.instanceType_, workspace);
                }
            };
            Blockly.prompt(Blockly.Msg.ARD_RENAME_INSTANCE_TITLE.replace('%1', oldInstance),
                oldInstance, callbackRename);
            return;
        } else if (id == Blockly.Msg.ARD_NEW_INSTANCE) {
            Blockly.Instances.generateUniqueName(workspace);
            return;
        }
    }
    // Handle unspecial case.
    this.setValue(id);
};