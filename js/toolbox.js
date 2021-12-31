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
jsonToolbox["contents"][8] = toolbox_board["contents"][0];
jsonToolbox["contents"][9] = toolbox_servo["contents"][0];
jsonToolbox["contents"][10] = toolbox_ds18b20["contents"][0];
jsonToolbox["contents"][11] = toolbox_relay["contents"][0];
jsonToolbox["contents"][12] = toolbox_DHT["contents"][0];
jsonToolbox["contents"][13] = toolbox_X_NUCLEO_IKS01A3["contents"][0];
jsonToolbox["contents"][14] = toolbox_arrowheadframework["contents"][0];
jsonToolbox["contents"][15] = toolbox_GROVE["contents"][0];

/**
 * Build the toolbox using toolbox definition in json files
 */
Code.buildToolbox = function() {
    // set the toolbox from url 
    var toolboxIds = Code.getStringParamFromUrl('cat', '');
    var boardSelected = Code.getStringParamFromUrl('board', '');
    // set the default toolbox if none
    if (toolboxIds === undefined || toolboxIds === "") {
        if (boardSelected) {
            toolboxIds = 'LOGIC,LOOPS,MATH,TEXT,LIST,COLOUR,VARIABLES_TYPED,FUNCTIONS,ONBOARD';
            window.localStorage.defaultToolbox = 1;
        } else {
            toolboxIds = 'LOGIC,LOOPS,MATH,TEXT,LIST,COLOUR,VARIABLES_TYPED,FUNCTIONS';
            window.localStorage.defaultToolbox = 0;
        }
    } else {
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
    if (!level) level = 1;
    for (let i = 0; i < jsonToolbox.contents.length; i++) {
        if (jsonToolbox.contents[i].levels.indexOf(parseInt(level)) > -1) {
            jsonToolboxToKeep.contents[k] = jsonToolbox.contents[i];
            // console.log(jsonToolboxToKeep)
            // console.log(jsonToolboxToKeep.contents[k])
            // console.log(jsonToolboxToKeep.contents[k].name)
            // console.log(jsonToolboxToKeep.contents[k].contents.length)
            // for (let j = 0; j < jsonToolboxToKeep.contents[k].contents.length; j++) {
            //     console.log(jsonToolboxToKeep.contents[k].contents[j])
            //     if(jsonToolboxToKeep.contents[k].contents[j].levels.indexOf(parseInt(level)) == -1) {
            //         jsonToolboxToKeep.contents[k].contents[j].hide();
            //     }
            // }
            k++;
        }
    }
    var search = window.location.search;
    if (search.length <= 1) {
        search = '?cat=' + toolboxIds;
    } else if (search.match(/[?&]cat=[^&]*/)) {
        search = search.replace(/([?&]cat=)[^&]*/, '$1' + toolboxIds);
    } else {
        search = search.replace(/\?/, '?cat=' + toolboxIds + '&');
    }
    history.replaceState({}, 'search', search);
    return jsonToolboxToKeep;
}

/** add categories from list in jsonToolbox
 * and create toolbox control panel checklist
 */
Code.buildControlPanelForToolbox = function() {
    var ligne = '';
    $('#categories_content')[0].innerHTML = '<ul id="categoriesSelectList"><br></ul>';
    var toolboxIds = window.localStorage.toolboxids.split(",");
    var jsonToolboxToKeep = Code.mainWorkspace.getToolbox();
    for (let i = 0; i < jsonToolboxToKeep.contents_.length; i++) {
        if (!jsonToolboxToKeep.contents_[i].parent_) {
            ligne = '<li><input type="checkbox" ';
            if (toolboxIds.indexOf(jsonToolboxToKeep.contents_[i].id_) > -1)
                ligne += 'checked="checked" ';
            else Code.mainWorkspace.getToolbox().getToolboxItems()[i].hide();
            ligne += 'onchange="toggleCategory(' + i + ')" name="checkbox_' + i + '" id="checkbox_' + i + '"/> ' +
                '<span id="checkboxSpan_' + i + '">' + Code.mainWorkspace.getToolbox().getToolboxItems()[i]['name_'] + '</span></li>';
            $('#categoriesSelectList')[0].innerHTML += ligne;
        }
    }
    // $('#categories_content')[0].innerHTML += '</ul>';
}
Code.buildControlPanelForToolbox2 = function() {
    var ligne = '',
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
        // if (Code.mainWorkspace.getToolbox().getToolboxItems()[i]['parent_'] == null) {
        //     ligne = '<input type="checkbox" onchange="toggleCategory(' + jsonToolbox.contents[i].toolboxitemid + ')" name="checkbox_' + jsonToolbox.contents[i].toolboxitemid + '" id="checkbox_' + jsonToolbox.contents[i].toolboxitemid + '"/> ' +
        //         '<span id="checkboxSpan_' + jsonToolbox.contents[i].toolboxitemid + '">' + Code.mainWorkspace.getToolbox().getToolboxItems()[i]['name_'] + '</span><br/>';
        //     $('#categories_content')[0].innerHTML += ligne;
        // }
    }
    // default is hiding everything else than basis categories
    for (var j = (8 + parseInt(window.localStorage.defaultToolbox)); j <= rankInDisplayedToolbox; j++)
        if (document.getElementById('checkbox_' + j) != null)
            document.getElementById('checkbox_' + j).click();
}

/**
 * checks all checkboxes in catgories list
 **/
Code.checkAll = function(event) {
    if (this.checked) {
        for (var i = 0; i < Code.mainWorkspace.getToolbox().getToolboxItems().length; i++) {
            if (document.getElementById('checkbox_' + i))
                if (document.getElementById('checkbox_' + i).checked)
                    document.getElementById('checkbox_' + i).click();
        }
        this.checked = false;
    } else {
        for (var i = 0; i < Code.mainWorkspace.getToolbox().getToolboxItems().length; i++) {
            if (document.getElementById('checkbox_' + i))
                if (!document.getElementById('checkbox_' + i).checked)
                    document.getElementById('checkbox_' + i).click();
        }
        this.checked = true;
    }
};

/**
 * filter categories in setup panel
 * inspired by https://www.w3schools.com/howto/howto_js_filter_lists.asp
 **/
Code.filterCategories = function() {
    var input, filter, ul, li, span, i, txtValue;
    input = document.getElementById('categories_search');
    filter = input.value.toUpperCase();
    ul = document.getElementById("categoriesSelectList");
    li = ul.getElementsByTagName('li');
    for (i = 0; i < li.length; i++) {
        span = li[i].getElementsByTagName("span")[0];
        txtValue = span.textContent || span.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}


/**
 * filter categories in toolbox
 * inspired by https://www.w3schools.com/howto/howto_js_filter_lists.asp
 **/
Code.filterToolbox = function() {
    var search = 'temperature';
    console.log(jsonToolbox)

    let dataStr = JSON.parse(jsonToolbox["contents"], search, 2);
    let cleanJsonRegex = new RegExp(`,.*${search}.*[, ]`, "g");

    let nameJsonStr = dataStr.replace(cleanJsonRegex, "");

    console.log(nameJsonStr); // "{\"name\":\"ABC\"}"
    // let jsonObj = JSON.parse(jsonToolbox["contents"]);

    // let cleanJsonRegex = new RegExp(`,.*${search}.*[, ]`, "g");
    // let nameJsonStr = jsonObj.replace(cleanJsonRegex, "");
    // console.log(nameJsonStr); // "{\"name\":\"ABC\"}"


    // var jsonData = JSON.parse(jsonToolbox);
    // console.log(jsonData)
    // for (var i = 0; i < jsonToolbox.objects.length; i++) {
    //     var object = jsonData.objects[i];
    //     if (object.id != search) {
    //         delete jsonData.objects[i];
    //     }
    // }
    // console.log(jsonData)
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
    } else {
        document.getElementById("fullToolboxButton").classList.add("iconButtonsClicked");
        document.getElementById("fullToolboxButton").classList.remove("iconButtons");
        initialToolboxSize = Code.mainWorkspace.getToolbox().getWidth();
        document.getElementsByClassName("blocklyToolboxDiv")[0].style.width = '37px';
        Code.mainWorkspace.getToolbox().width_ = 37;
        firstShrink_ = true;
    }
    Blockly.getMainWorkspace().resize();
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