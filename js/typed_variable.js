/**
 * @license
 * Copyright 2020 Sébastien CANET
 * SPDX-License-Identifier: BSD-3-Clause
 */

/**
 * @fileoverview Utility functions for handling typed variables.
 * Freely adapted from https://github.com/google/blockly/commit/4e2f8e6e02b0473a86330eb7414794e6bfea430e
 * @author scanet@libreduc.cc (Sébastien CANET)
 */

/**
 * Construct the elements (blocks and button) required by the flyout for the
 * variable category.
 * @param {!Blockly.Workspace} workspace The workspace containing variables.
 * @return {!Array.<!Element>} Array of XML elements.
 */
Blockly.Variables.flyoutCategory = function(workspace) {
    var xmlList = [];
    var button = document.createElement('button');
    button.setAttribute('text', '%{BKY_NEW_VARIABLE}');
    button.setAttribute('callbackKey', 'CREATE_VARIABLE');
    workspace.registerButtonCallback('CREATE_VARIABLE', function(button) {
        Blockly.Variables.createVariableButtonHandler(button.getTargetWorkspace());
    });
    xmlList.push(button);
    var blockList = Blockly.Variables.flyoutCategoryBlocks(workspace);
    xmlList = xmlList.concat(blockList);
    return xmlList;
};

/**
 * Construct the blocks required by the flyout for the variable category.
 * @param {!Blockly.Workspace} workspace The workspace containing variables.
 * @return {!Array.<!Element>} Array of XML block elements.
 */
Blockly.Variables.flyoutCategoryBlocks = function(workspace) {
    var variableModelList = workspace.getVariablesOfType('');
    var xmlList = [];
    if (variableModelList.length > 0) {
        // New variables are added to the end of the variableModelList.
        var mostRecentVariable = variableModelList[variableModelList.length - 1];
        if (Blockly.Blocks['variables_set']) {
            var block = Blockly.utils.xml.createElement('block');
            block.setAttribute('type', 'variables_set');
            block.setAttribute('gap', Blockly.Blocks['variables_set_type'] ? 8 : 24);
            block.appendChild(
                Blockly.Variables.generateVariableFieldDom(mostRecentVariable));
            var field = Blockly.utils.xml.createElement('field', variableModelList[0]);
            field.setAttribute('name', 'VAR');
            block.appendChild(field);
            xmlList.push(block);
        }
        if (Blockly.Blocks['variables_const']) {
            var block = Blockly.utils.xml.createElement('block');
            block.setAttribute('type', 'variables_const');
            block.setAttribute('gap', Blockly.Blocks['variables_set_type'] ? 8 : 24);
            var field = Blockly.utils.xml.createElement('field', variableModelList[0]);
            field.setAttribute('name', 'VAR');
            block.appendChild(field);
            xmlList.push(block);
        }
        if (Blockly.Blocks['variables_set_type']) {
            var block = Blockly.utils.xml.createElement('block');
            block.setAttribute('type', 'variables_set_type');
            block.setAttribute('gap', Blockly.Blocks['math_change'] ? 8 : 24);
            xmlList.push(block);
        }
        if (Blockly.Blocks['variables_set_init']) {
            var block = Blockly.utils.xml.createElement('block');
            block.setAttribute('type', 'variables_set_init');
            block.setAttribute('gap', Blockly.Blocks['variables_set_init'] ? 8 : 24);
            xmlList.push(block);
        }
        if (Blockly.Blocks['math_change']) {
            var block = Blockly.utils.xml.createElement('block');
            block.setAttribute('type', 'math_change');
            block.setAttribute('gap', Blockly.Blocks['variables_get'] ? 20 : 8);
            block.appendChild(
                Blockly.Variables.generateVariableFieldDom(mostRecentVariable));
            var value = Blockly.Xml.textToDom(
                '<value name="DELTA">' +
                '<shadow type="math_number">' +
                '<field name="NUM">1</field>' +
                '</shadow>' +
                '</value>');
            block.appendChild(value);

            var field = Blockly.utils.xml.createElement('field', variableModelList[0]);
            field.setAttribute('name', 'VAR');
            block.appendChild(field);

            var shadowBlock = Blockly.utils.xml.createElement('shadow');
            shadowBlock.setAttribute('type', 'math_number');
            value.appendChild(shadowBlock);

            var numberField = Blockly.utils.xml.createElement('field', null, '1');
            numberField.setAttribute('name', 'NUM');
            shadowBlock.appendChild(numberField);
            xmlList.push(block);
        }
        if (Blockly.Blocks['variables_get']) {
            variableModelList.sort(Blockly.VariableModel.compareByName);
            for (var i = 0, variable;
                (variable = variableModelList[i]); i++) {
                var block = Blockly.utils.xml.createElement('block');
                block.setAttribute('type', 'variables_get');
                block.setAttribute('gap', 8);
                block.appendChild(Blockly.Variables.generateVariableFieldDom(variable));
                xmlList.push(block);
            }
        }
    }
    return xmlList;
};