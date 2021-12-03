/**
 * @license
 * Copyright 2020 Sébastien CANET
 * SPDX-License-Identifier: BSD-3-Clause
 */

/**
 * @fileoverview Intercept data to modify toolbox for user
 * @author scanet@libreduc.cc (Sébastien CANET)
 */

var jsonToolbox = {
    "kind": "categoryToolbox",
    "contents": []
};
jsonToolbox["contents"][0] = toolbox_standard["contents"][0];
jsonToolbox["contents"][1] = toolbox_standard["contents"][1];
jsonToolbox["contents"][2] = toolbox_standard["contents"][2];
jsonToolbox["contents"][3] = toolbox_standard["contents"][3];
jsonToolbox["contents"][4] = toolbox_standard["contents"][4];
jsonToolbox["contents"][5] = toolbox_standard["contents"][5];
jsonToolbox["contents"][6] = toolbox_standard["contents"][6];
jsonToolbox["contents"][7] = toolbox_standard["contents"][7];
jsonToolbox["contents"][8] = toolbox_ST["contents"][0];
jsonToolbox["contents"][9] = toolbox_servo["contents"][0];
jsonToolbox["contents"][10] = toolbox_ds18b20["contents"][0];
jsonToolbox["contents"][11] = toolbox_relay["contents"][0];
jsonToolbox["contents"][12] = toolbox_DHT["contents"][0];
jsonToolbox["contents"][13] = toolbox_X_NUCLEO_IKS01A3["contents"][0];
jsonToolbox["contents"][14] = toolbox_arrowheadframework["contents"][0];

/**
 * Build the toolbox using toolbox definition in json files
 */
Code.buildToolbox = function() {
    // set the toolbox from url 
    var toolboxIds = Code.getStringParamFromUrl('toolboxids', '');
    var boardSelected = Code.getStringParamFromUrl('board', '');
    // set the default toolbox if none
    if (toolboxIds === undefined || toolboxIds === "") {
        if (boardSelected) {
            toolboxIds = 'LOGIC,LOOPS,MATH,TEXT,LIST,COLOUR,VARIABLES,FUNCTIONS,BOARD';
            window.localStorage.defaultToolbox = 1;
        } else {
            toolboxIds = 'LOGIC,LOOPS,MATH,TEXT,LIST,COLOUR,VARIABLES,FUNCTIONS';
            window.localStorage.defaultToolbox = 0;
        }
    } else {
        toolboxIds += ',LOGIC,LOOPS,MATH,TEXT,LIST,COLOUR,VARIABLES,FUNCTIONS,BOARD';
        window.localStorage.defaultToolbox = 2;
    }
    //save config in local browser storage for rendering in menu categories list
    window.localStorage.toolboxids = toolboxIds;
    // needed to declare an empty var first, instead it keeps contents
    var jsonToolboxToKeep = {};
    jsonToolboxToKeep = {
        "kind": "categoryToolbox",
        "contents": []
    };
    var k = 0;
    toolboxIds = toolboxIds.split(",");
    var level = Code.getStringParamFromUrl('level', '').substr(Code.getStringParamFromUrl('level', '').length - 1);
    for (let i = 0; i < jsonToolbox.contents.length; i++) {
        if (window.localStorage.defaultToolbox == 2) {
            for (var j = 0; j < toolboxIds.length; j++) {
                if (jsonToolbox.contents[i].toolboxitemid == toolboxIds[j]) {
                    jsonToolboxToKeep.contents[k] = jsonToolbox.contents[i];
                    k++;
                }
            }
        }
        // if launched by default, with no argument in URL, add all entries from XML in categories list
        else if (jsonToolbox.contents[i].level == 1) {
            jsonToolboxToKeep.contents[k] = jsonToolbox.contents[i];
            k++;
        }
    }
    return jsonToolboxToKeep;
}

/** add categories from list in jsonToolbox
 * in both boardMenu, hidden, but used for compilation,
 * and boardDescriptionSelector in boards modal
 */
Code.buildControlPanelForToolbox = function() {
    // clear modal
    $('#categories_content')[0].innerHTML = "<br>";
    var ligne = "",
        id_liste = "";
    var rankInDisplayedToolbox = {};
    var level = Code.getStringParamFromUrl('level', '').substr(Code.getStringParamFromUrl('level', '').length - 1);
    for (let i = 0; i < jsonToolbox.contents.length; i++) {
        if (jsonToolbox.contents[i].level == 1) {
            rankInDisplayedToolbox = Code.mainWorkspace.getToolbox().getToolboxItems().findIndex(x => x['id_'] == jsonToolbox.contents[i].toolboxitemid);
            if (rankInDisplayedToolbox >= 0) {
                ligne = '<input type="checkbox" checked="checked" onchange="toggleCategory(' + rankInDisplayedToolbox + ')" name="checkbox_' + rankInDisplayedToolbox + '" id="checkbox_' + rankInDisplayedToolbox + '"/> ' +
                    '<span id="checkboxSpan_' + rankInDisplayedToolbox + '">' + Code.mainWorkspace.getToolbox().getToolboxItems()[rankInDisplayedToolbox]['name_'] + '</span><br/>';
                id_liste += jsonToolbox.contents[i].toolboxitemid + ',';
                $('#categories_content')[0].innerHTML += ligne;
            } else if (window.localStorage.defaultToolbox != 2) {
                ligne = '<input type="checkbox" onchange="toggleCategory(' + rankInDisplayedToolbox + ')" name="checkbox_' + rankInDisplayedToolbox + '" id="checkbox_' + rankInDisplayedToolbox + '"/> ' +
                    '<span id="checkboxSpan_' + rankInDisplayedToolbox + '">' + Code.mainWorkspace.getToolbox().getToolboxItems()[rankInDisplayedToolbox]['name_'] + '</span><br/>';
                $('#categories_content')[0].innerHTML += ligne;
            }
        }
    }
    // default is hiding everything else than basis categories
    if (window.localStorage.defaultToolbox != 2) {
        for (var j = (8 + parseInt(window.localStorage.defaultToolbox)); j <= rankInDisplayedToolbox; j++)
            if (document.getElementById('checkbox_' + j) != null)
                document.getElementById('checkbox_' + j).click();
    }
    window.localStorage.toolboxids = id_liste.slice(0, -1);
}

/** change toolbox size
 *  init.js store it in 'toolboxSize' session storage
 */
let firstShrink_ = false;
Code.fullToolbox = function() {
    document.getElementsByClassName("blocklyToolboxContents")[0].removeEventListener('overflow', OnOverflowChanged, true);
    document.getElementsByClassName("blocklyToolboxContents")[0].removeEventListener('underflow', OnUnderflowChanged, true);
    document.getElementsByClassName("blocklyToolboxContents")[0].removeEventListener('overflowchanged', OnOverUnderFlowChanged, true);
    let initialToolboxSize = sessionStorage.getItem('toolboxSize');
    if (document.getElementById("fullToolboxButton").classList.contains("iconButtonsClicked")) {
        document.getElementById("fullToolboxButton").classList.remove("iconButtonsClicked");
        document.getElementById("fullToolboxButton").classList.add("iconButtons");
        document.getElementsByClassName("blocklyToolboxDiv")[0].style.width = initialToolboxSize + 'px';
        Code.mainWorkspace.getToolbox().width_ = initialToolboxSize;
        Blockly.getMainWorkspace().resize();
    } else {
        document.getElementById("fullToolboxButton").classList.add("iconButtonsClicked");
        document.getElementById("fullToolboxButton").classList.remove("iconButtons");
        document.getElementsByClassName("blocklyToolboxDiv")[0].style.width = '37px';
        toolboxSize = Code.mainWorkspace.getToolbox().getWidth();
        Code.mainWorkspace.getToolbox().width_ = 37;
        Blockly.getMainWorkspace().resize();
        firstShrink_ = true;
    }
    document.getElementsByClassName("blocklyToolboxDiv")[0].addEventListener('overflow', OnOverflowChanged, true);
    document.getElementsByClassName("blocklyToolboxDiv")[0].addEventListener('underflow', OnUnderflowChanged, true);
    document.getElementsByClassName("blocklyToolboxDiv")[0].addEventListener('overflowchanged', OnOverUnderFlowChanged, true);
};

function OnOverUnderFlowChanged(event) {
    if (document.getElementsByClassName("blocklyToolboxDiv")[0].style.width == '37px') {
        document.getElementsByClassName("blocklyToolboxDiv")[0].style.width = '54px';
        Code.mainWorkspace.getToolbox().width_ = 54;
    } else
    if (document.getElementsByClassName("blocklyToolboxDiv")[0].style.width == '54px') {
        document.getElementsByClassName("blocklyToolboxDiv")[0].style.width = '37px';
        Code.mainWorkspace.getToolbox().width_ = 37;
    }
    toolboxSize = Code.mainWorkspace.getToolbox().getWidth();
    Blockly.getMainWorkspace().resize();
}

function OnOverflowChanged(event) {
    if (!firstShrink_)
        if (document.getElementsByClassName("blocklyToolboxDiv")[0].style.width == '37px') {
            document.getElementsByClassName("blocklyToolboxDiv")[0].style.width = '54px';
            toolboxSize = Code.mainWorkspace.getToolbox().getWidth();
            Code.mainWorkspace.getToolbox().width_ = 54;
            Blockly.getMainWorkspace().resize();
        }
    firstShrink_ = false;
}

function OnUnderflowChanged(event) {
    if (document.getElementsByClassName("blocklyToolboxDiv")[0].style.width == '54px') {
        document.getElementsByClassName("blocklyToolboxDiv")[0].style.width = '37px';
        toolboxSize = Code.mainWorkspace.getToolbox().getWidth();
        Code.mainWorkspace.getToolbox().width_ = 37;
        Blockly.getMainWorkspace().resize();
    }
}