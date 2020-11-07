/**
 * @license
 * Copyright 2020 Sébastien CANET
 * SPDX-License-Identifier: BSD-3-Clause
 */

/**
 * @fileoverview Function to save important parameters in UI
 * @author scanet@libreduc.cc (Sébastien CANET)
 */

/**
 * Create select listing for various dropdown menus
 */
Code.renderingConstantsInit = function() {
	/* add boards from list in boards.json
	 * in both boardMenu, hidden, but used for compilation,
	 * and boardDescriptionSelector in boards modal */
    // for (var k in profile) {
        // if (profile[k][0] instanceof Object) {
            // var option = document.createElement('option');
            // option.value = profile[k][0]._id;
            // option.text = profile[k][0].description;
            // document.getElementById('boardMenu').appendChild(option);
        // }
        // ;
    // }
    // for (var k in profile) {
        // if (profile[k][0] instanceof Object) {
            // var option = document.createElement('option');
            // option.value = profile[k][0]._id;
            // option.text = profile[k][0].description;
            // document.getElementById('boardDescriptionSelector').appendChild(option);
        // }
        // ;
    // }
	/* add categories from list in toolbox_S4E.js
	 * in both boardMenu, hidden, but used for compilation,
	 * and boardDescriptionSelector in boards modal */
	var toolboxXml = BLOCKLY_TOOLBOX_XML['toolboxS4E'];
	// clear modal
    $('#categories_content')[0].innerHTML = "<br>";
	var ligne = "", id_liste = "";
	var i = 0;
	//parser on xml
	parser = new DOMParser();
	var xmlDoc = parser.parseFromString(toolboxXml,"text/xml");
	var arrayToolbox = Blockly.getMainWorkspace().getToolbox().getToolboxItems();
	// pour le JSON à venir
	// console.log(Blockly.getMainWorkspace().getToolbox().toolboxDef_);
	while(xmlDoc.getElementsByTagName("category")[i].getAttribute('toolboxitemid') != "END") {
		if (xmlDoc.getElementsByTagName("category")[i].getAttribute('level') == "1") {
			var itemFromJsFile = xmlDoc.getElementsByTagName("category")[i].getAttribute('toolboxitemid');
			var rankInDisplayedToolbox = arrayToolbox.findIndex(x => x['id_'] == itemFromJsFile);
			if (rankInDisplayedToolbox >= 0) {
				ligne = '<input type="checkbox" checked="checked" onchange="toggleCategory(' + rankInDisplayedToolbox + ')" name="checkbox_' + rankInDisplayedToolbox + '" id="checkbox_' + rankInDisplayedToolbox + '"/> '
						+ '<span id="checkboxSpan_' + rankInDisplayedToolbox + '">' + Blockly.getMainWorkspace().getToolbox().getToolboxItems()[rankInDisplayedToolbox]['name_'] + '</span><br/>';
				id_liste += itemFromJsFile + ',';
				$('#categories_content')[0].innerHTML += ligne;
			}
			else if (window.localStorage.defaultToolbox == 0) {
				ligne = '<input type="checkbox" onchange="toggleCategory(' + rankInDisplayedToolbox + ')" name="checkbox_' + rankInDisplayedToolbox + '" id="checkbox_' + rankInDisplayedToolbox + '"/> '
						+ '<span id="checkboxSpan_' + rankInDisplayedToolbox + '">' + Blockly.getMainWorkspace().getToolbox().getToolboxItems()[rankInDisplayedToolbox]['name_'] + '<br/>';
				$('#categories_content')[0].innerHTML += ligne;
			}
		}
		i++;
	}
	// default is hiding everything else than basis categories
	if (window.localStorage.defaultToolbox == 0)
		for (var j = 11; j < i; j++) 
			if (document.getElementById('checkbox_' + j) != null) document.getElementById('checkbox_' + j).click();
	window.localStorage.toolboxids = id_liste.slice(0, -1);
}

/**
 * Change categories visibility in toolbox
 */
function toggleCategory(categoryChecked) {
    var toolbox = Blockly.getMainWorkspace().getToolbox();
    var category = toolbox.getToolboxItems()[categoryChecked];
    if (document.getElementById('checkbox_' + categoryChecked).checked == false) {
        category.hide();
		window.localStorage.toolboxids -= category;
	} else {
		category.show();
		window.localStorage.toolboxids += category;
	}
}