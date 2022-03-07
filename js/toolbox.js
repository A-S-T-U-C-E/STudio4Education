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
jsonToolbox["contents"][14] = toolbox_arrowhead["contents"][0];
jsonToolbox["contents"][15] = toolbox_GROVE["contents"][0];
jsonToolbox["contents"][16] = toolbox_communication["contents"][0];
/**
 * Build the toolbox using toolbox definition in json files
 */
Code.filterCategoriesKeywords = function() {
    if (window.sessionStorage.getItem('filtersAlreadyOpened') == "false") {
        let skillLevel = document.getElementById('levelMenu').value.slice(-1);
        var ids = [];
        jsonToolbox["contents"].forEach(category => {
            if (category.hasOwnProperty("contents"))
                category["contents"].forEach(subcategory => {
                    if (subcategory.kind == "block") {
                        if (subcategory.id.indexOf("blockly") == -1) {
                            if (subcategory.id.indexOf(",") !== -1) {
                                let tempArray = subcategory.id.split(', ');
                                tempArray.forEach(elemt => {
                                    if (subcategory.levels.indexOf(skillLevel) > -1) ids.push(elemt)
                                })
                            } else
                            if (subcategory.levels.indexOf(skillLevel) > -1) ids.push(subcategory.id);
                        }
                    } else
                        subcategory["contents"].forEach(block => {
                            if (block.id.indexOf("blockly") == -1) {
                                if (block.id.indexOf(",") !== -1) {
                                    let tempArray = block.id.split(', ');
                                    tempArray.forEach(elemt => {
                                        if (block.levels.indexOf(skillLevel) > -1) ids.push(elemt)
                                    })
                                } else
                                if (block.levels.indexOf(skillLevel) > -1) ids.push(block.id);
                            }
                        })
                })
        });
        // clean all duplicate entries
        var uniqueIds = [...new Set(ids)];
        ids = [];
        // split to get all parts of id
        uniqueIds.forEach(element => {
            if (element.indexOf(".") !== -1) {
                let tempArray = element.split('.');
                tempArray.forEach(elemt => ids.push(elemt));
            } else
                ids.push(element);
        });
        uniqueIds = [...new Set(ids)];
        uniqueIds.sort();
        for (var elemntId in uniqueIds) {
            if (uniqueIds.hasOwnProperty(elemntId)) {
                var pair = uniqueIds[elemntId];
                var checkbox = document.createElement("input");
                checkbox.type = "checkbox";
                checkbox.name = "filterCategory";
                checkbox.value = pair;
                document.getElementById('filterModalDialogContentGrid').appendChild(checkbox);
                var label = document.createElement('label')
                label.htmlFor = pair;
                label.appendChild(document.createTextNode(pair));
                document.getElementById('filterModalDialogContentGrid').appendChild(label);
            }
        }
        window.sessionStorage.setItem('filtersAlreadyOpened', "true");
    }
    var id = 'filterModalDialog';
    var dialog = new DialogBox(id, callbackDialog);
    dialog.showDialog();
    var toolboxConcatFiltered = {
        "kind": "categoryToolbox",
        "contents": []
    };

    function callbackDialog(btnName) {
        if (btnName == "filterModalDialog_close") {
            document.getElementById(id).style.display = 'none';
        }
        if (btnName == "filterModalDialog_ok") {
            var toolboxIds = '';
            if (toolboxConcatFiltered)
                toolboxConcatFiltered["contents"].forEach(category => {
                    toolboxIds += category.toolboxitemid + ',';
                })
            toolboxIds = toolboxIds.slice(0, -1);
            window.localStorage.toolboxids = toolboxIds;
            toolboxIds = toolboxIds.split(",");
            var search = window.location.search;
            if (search.length <= 1) {
                search = '?cat=' + toolboxIds;
            } else if (search.match(/[?&]cat=[^&]*/)) {
                search = search.replace(/([?&]cat=)[^&]*/, '$1' + toolboxIds);
            } else {
                search = search.replace(/\?/, '?cat=' + toolboxIds + '&');
            }
            history.replaceState({}, 'search', search);
            document.getElementById(id).style.display = 'none';
        }
        if (btnName == "filterModalDialog_filter") {
            let result = createFilterCategoriesList(toolboxConcatFiltered, '');
            if (result != 'noCheckedCategory') {
                Code.mainWorkspace.updateToolbox(result);
                Code.buildControlPanelForToolbox();
            }
        }
        if (btnName == "filterModalDialog_cancel") {
            let checks = document.querySelectorAll('#filterModalDialogContentGrid input[type="checkbox"]');
            for (let i = 0; i < checks.length; i++) {
                let check = checks[i];
                if (!check.disabled) {
                    check.checked = false;
                }
            }
            $('#categories_content')[0].innerHTML = '';
            let toolboxReload = Code.buildToolbox();
            Code.buildControlPanelForToolbox(toolboxReload);
        }
    }
}

function createFilterCategoriesList(toolboxConcatFiltered, markedCheckboxValues) {
    let skillLevel = document.getElementById('levelMenu').value.slice(-1);
    if (!markedCheckboxValues) {
        var markedCheckbox = document.getElementsByName('filterCategory');
        for (let checkboxToTest of markedCheckbox) {
            if (checkboxToTest.checked)
                markedCheckboxValues += checkboxToTest.value + ',';
        }
    }
    if (typeof markedCheckboxValues !== 'undefined' && markedCheckboxValues.length > 0) {
        markedCheckboxValues = markedCheckboxValues.slice(0, -1).split(",");
        toolboxConcatFiltered["contents"] = [];
        // copy first algorithmic elements: logic, loops, etc
        // ONLY WAY TO DEEP COPY AN ARRAY!
        for (let i = 0; i < 8; i++)
            toolboxConcatFiltered["contents"][i] = JSON.parse(JSON.stringify(jsonToolbox["contents"][i]));
        //needed for recursive search in array
        function checkVal(array, value) {
            // `Array#some` loops through the array until the iterator
            // function returns true; it returns true if the iterator
            // does at some point, false otherwise
            return array.some(function(entry) {
                // If this entry in the array is an array, recurse
                if (Array.isArray(entry)) {
                    return checkVal(entry, value);
                }
                // It isn't, do an equality check
                return entry === value;
            });
        }
        for (let value of markedCheckboxValues) {
            let jsonToolboxFiltered = {};
            // ONLY WAY TO DEEP COPY AN ARRAY!
            jsonToolboxFiltered = JSON.parse(JSON.stringify(jsonToolbox["contents"]));
            // "filter": empty key with wrong value
            jsonToolboxFiltered.forEach(category => {
                // jsonToolbox["contents"][category]
                if (category.hasOwnProperty("contents")) {
                    category["contents"].forEach(subcategory => {
                        // jsonToolbox["contents"][category]["contents"][subcategory]["contents"][block] blocks in subcategory
                        if (subcategory.kind != "block") {
                            subcategory["contents"] = subcategory["contents"].filter(block => {
                                return ((block.id.indexOf(value) > -1) && (block.levels.indexOf(skillLevel) > -1) && (!checkVal(toolboxConcatFiltered["contents"], block)));
                            });
                        }
                    });
                    // jsonToolbox["contents"][category]["contents"] blocks in category
                    category["contents"] = category["contents"].filter(block => {
                        return ((block.kind == "category" && Array.isArray(block.contents) && block.contents.length > 0) ||
                            (block.kind == "block" && block.id.indexOf(value) > -1) && (block.levels.indexOf(skillLevel) > -1) && (!checkVal(toolboxConcatFiltered["contents"], block)));
                    });
                }
            });
            // "filter": delete empty keys and categories
            let jsonToolboxFilteredTemp = jsonToolboxFiltered.filter(block =>
                (block.kind == "category" && Array.isArray(block.contents) && block.contents.length > 0) ||
                (block.kind == "block" && (block.levels.indexOf(skillLevel) > -1) && (block.id.indexOf(value) > -1))
            );
            //concat new elements with older ones
            toolboxConcatFiltered["contents"] = [...new Set([...toolboxConcatFiltered["contents"], ...jsonToolboxFilteredTemp])];
        }
        toolboxConcatFiltered["contents"].sort();
        return toolboxConcatFiltered;
    } else return 'noCheckedCategory';
}

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
    var level = Code.getStringParamFromUrl('level', '').slice(-1);
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
Code.buildControlPanelForToolbox = function(newToolbox) {
    if (newToolbox)
        Code.mainWorkspace.updateToolbox(newToolbox);
    var level = Code.getStringParamFromUrl('level', '').slice(-1);
    $('#categories_content')[0].innerHTML = '<ul id="categoriesSelectList"><br></ul>';
    let toolboxIds = window.localStorage.toolboxids.split(",");
    let jsonToolboxToKeep = Code.mainWorkspace.getToolbox();
    let ligne = '';
    for (let i = 0; i < jsonToolboxToKeep.contents_.length; i++) {
        if ((!jsonToolboxToKeep.contents_[i].parent_) && (jsonToolboxToKeep.contents_[i].toolboxItemDef_.levels.indexOf(level) > -1)) {
            ligne = '<li><input type="checkbox" ';
            if (toolboxIds.indexOf(jsonToolboxToKeep.contents_[i].id_) > -1)
                ligne += 'checked="checked" ';
            else Code.mainWorkspace.getToolbox().getToolboxItems()[i].hide();
            ligne += 'onchange="toggleCategory(' + i + ')" name="checkbox_' + i + '" id="checkbox_' + i + '"/> ' +
                '<span id="checkboxSpan_' + i + '">' + Code.mainWorkspace.getToolbox().getToolboxItems()[i]['name_'] + '</span></li>';
            $('#categoriesSelectList')[0].innerHTML += ligne;
        }
    }
}
Code.buildControlPanelForToolbox3 = function() {
    var ligne = '';
    var rankInDisplayedToolbox = {};
    var level = Code.getStringParamFromUrl('level', '').slice(-1);
    for (let i = 0; i < jsonToolbox.contents.length; i++) {
        if (jsonToolbox.contents[i].level == level) {
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
        for (let i = 0; i < Code.mainWorkspace.getToolbox().getToolboxItems().length; i++) {
            if (document.getElementById('checkbox_' + i))
                if (document.getElementById('checkbox_' + i).checked)
                    document.getElementById('checkbox_' + i).click();
        }
        this.checked = false;
    } else {
        for (let i = 0; i < Code.mainWorkspace.getToolbox().getToolboxItems().length; i++) {
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
Code.filterCategoriesSearch = function() {
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

/** change toolbox size
 *  show or hide text on labels
 */
Code.fullToolbox = function() {
    var blocklyTreeLabels = document.getElementsByClassName('blocklyTreeLabel');
    if (blocklyTreeLabels[0].style.display === "none") {
        for (let blocklyTreeLabel of blocklyTreeLabels) {
            blocklyTreeLabel.style.display = 'inline';
        }
    } else {
        for (let blocklyTreeLabel of blocklyTreeLabels) {
            blocklyTreeLabel.style.display = 'none';
        }
    }
    document.getElementById("fullToolboxButton").classList.toggle("active");
    Blockly.getMainWorkspace().resize();
};