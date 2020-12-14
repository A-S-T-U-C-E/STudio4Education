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
 * Initialises the sketch name input text JavaScript to dynamically adjust its
 * width to the width of its contents.
 */
Code.sketchNameSizeEffect = function () {
    var resizeInput = function () {
        document.getElementById('sketch_name').setAttribute("size", document.getElementById('sketch_name').value.length);
    };

    var correctInput = function () {
        // If nothing in the input, add default name
        if (document.getElementById('sketch_name').value == '') {
            document.getElementById('sketch_name').value = MSG['sketch_name_default'];
            document.getElementById('sketch_name').setAttribute("size", 10);
        }
        // Replace all spaces with underscores
        document.getElementById('sketch_name').value = document.getElementById('sketch_name').value.replace(/ /g, '_');
    };

    var sketchNameInput = document.getElementById('sketch_name');
    document.getElementById('sketch_name').addEventListener("keydown", event => {
        if (event.isComposing || event.keyCode === 229) {
            return;
        }
        resizeInput();
        correctInput();
    });
	//detect click inside input
    document.getElementById('sketch_name').addEventListener("click", event => {
		correctInput();
        resizeInput();
    });
	//detect click outside input
	document.getElementById('sketch_name').addEventListener("blur", function() {
		if (document.getElementById("sketch_name").value == '')
			document.getElementById("sketch_name").value = MSG['sketch_name_default'];
        resizeInput();
	});
    sketchNameInput.focus(correctInput());
};

/**
 * Sets a string to the SketchName input field and triggers the events set from
 * Code.sketchNameSizeEffect().
 * @param {string?} newName Optional string to place in the sketch_name input.
 */
Code.sketchNameSet = function (newName) {
    var sketchNewName = newName || '';
    var sketchNameInput = document.getElementById('sketch_name');
    sketchNameInput.value = sketchNewName;
    sketchNameInput.setAttribute("size", sketchNewName.length);
    // sketchNameInput.dispatchEvent(new KeyboardEvent('keypress',{'key':'a'}));
    sketchNameInput.blur(Code.sketchNameSizeEffect());
};

/**
 * Create select listing for various dropdown menus
 */
Code.renderingConstantsInit = function () {
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
