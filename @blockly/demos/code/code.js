/**
 * @license
 * Copyright 2012 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @fileoverview JavaScript for Blockly's Code demo, truncated.
 * @author fraser@google.com (Neil Fraser)
 * @author scanet@libreduc.cc (Sébastien CANET)
 */

'use strict';

/**
 * Create a namespace for the application.
 */
var Code = {};

/**
 * Lookup for names of supported languages.  Keys should be in ISO 639 format.
 */
Code.LANGUAGE_NAME = {
    'ar': 'العربية',
    'ca': 'Català - Valencià',
    'de': 'Deutsch',
    'en': 'English',
    'es': 'Español',
    'fr': 'Français',
    'ja': '日本語'
};

/**
 * List of RTL languages.
 */
Code.LANGUAGE_RTL = ['ar', 'fa', 'he', 'lki'];

/**
 * Blockly's main workspace.
 * @type {Blockly.WorkspaceSvg}
 */
Code.mainWorkspace = null;

/**
 * Extracts a parameter from the URL.
 * If the parameter is absent default_value is returned.
 * @param {string} name The name of the parameter.
 * @param {string} defaultValue Value to return if parameter not found.
 * @return {string} The parameter value or the default value if not found.
 */
Code.getStringParamFromUrl = function(name, defaultValue) {
    var val = location.search.match(new RegExp('[?&]' + name + '=([^&]+)'));
    return val ? decodeURIComponent(val[1].replace(/\+/g, '%20')) : defaultValue;
};

/**
 * Get the language of this user from the URL.
 * @return {string} User's language.
 */
Code.getLang = function() {
    var lang = Code.getStringParamFromUrl('lang', '');
    if (Code.LANGUAGE_NAME[lang] === undefined) {
        // Default to English.
        lang = 'en';
    }
    return lang;
};

/**
 * Is the current language (Code.LANG) an RTL language?
 * @return {boolean} True if RTL, false if LTR.
 */
Code.isRtl = function() {
    return Code.LANGUAGE_RTL.indexOf(Code.LANG) != -1;
};

/**
 * Load blocks saved on App Engine Storage or in session/local storage.
 * @param {string} defaultXml Text representation of default blocks.
 */
Code.loadBlocks = function(defaultXml) {
    try {
        var loadOnce = window.sessionStorage.loadOnceBlocks;
    } catch (e) {
        // Firefox sometimes throws a SecurityError when accessing sessionStorage.
        // Restarting Firefox fixes this, so it looks like a bug.
        var loadOnce = null;
    }
    if ('BlocklyStorage' in window && window.location.hash.length > 1) {
        // An href with #key trigers an AJAX call to retrieve saved blocks.
        BlocklyStorage.retrieveXml(window.location.hash.substring(1));
    } else if (loadOnce) {
        // Language switching stores the blocks during the reload.
        delete window.sessionStorage.loadOnceBlocks;
        var xml = Blockly.Xml.textToDom(loadOnce);
        Blockly.Xml.domToWorkspace(xml, Code.mainWorkspace);
    } else if (defaultXml) {
        // Load the editor with default starting blocks.
        var xml = Blockly.Xml.textToDom(defaultXml);
        Blockly.Xml.domToWorkspace(xml, Code.mainWorkspace);
    } else if ('BlocklyStorage' in window) {
        // Restore saved blocks in a separate thread so that subsequent
        // initialization is not affected from a failed load.
        window.setTimeout(BlocklyStorage.restoreBlocks, 0);
    }
};

/**
 * Save the blocks and reload with a different language.
 */
Code.changeLanguage = function() {
    // Store the blocks for the duration of the reload.
    // MSIE 11 does not support sessionStorage on file:// URLs.
    if (window.sessionStorage) {
        var xml = Blockly.Xml.workspaceToDom(Code.mainWorkspace);
        var text = Blockly.Xml.domToText(xml);
        window.sessionStorage.loadOnceBlocks = text;
    }

    var languageMenu = document.getElementById('languageMenu');
    var newLang = encodeURIComponent(
        languageMenu.options[languageMenu.selectedIndex].value);
    var search = window.location.search;
    if (search.length <= 1) {
        search = '?lang=' + newLang;
    } else if (search.match(/[?&]lang=[^&]*/)) {
        search = search.replace(/([?&]lang=)[^&]*/, '$1' + newLang);
    } else {
        search = search.replace(/\?/, '?lang=' + newLang + '&');
    }

    window.location = window.location.protocol + '//' +
        window.location.host + window.location.pathname + search;
};

/**
 * Modify interface for different skill levels
 */
Code.changeLevel = function() {
    var levelMenuSelection = document.getElementById('levelMenu').options[levelMenu.selectedIndex].value;
    switch (levelMenuSelection) {
        case 'skill1':
            document.getElementById("menuButton").style.display = 'none';
            document.getElementById("functionsIcons").prepend(document.getElementById("redoButton"));
            document.getElementById("functionsIcons").prepend(document.getElementById("undoButton"));
            document.getElementById("undoButton").classList.remove("iconWorkspaceButtons");
            document.getElementById("undoButton").classList.add("iconButtons");
            document.getElementById("redoButton").classList.remove("iconWorkspaceButtons");
            document.getElementById("redoButton").classList.add("iconButtons");
            document.getElementById("functionsIcons").prepend(document.getElementById("fullToolboxButton"));
            document.getElementById("functionsIcons").prepend(document.getElementById("fullScreenButton"));
            document.getElementById("functionsIcons").prepend(document.getElementById("saveXMLButton"));
            document.getElementById("functionsIcons").prepend(document.getElementById("loadXMLfakeButton"));
            document.getElementById("functionsIcons").prepend(document.getElementById("newButton"));
            document.getElementById("functionsIcons").prepend(document.getElementById("resetButton"));
            document.getElementById("toolsButton").style.display = 'none';
            document.getElementById("iotConnectButton").style.display = 'none';
            document.getElementById("serialConnectButton").style.display = 'none';
            // document.getElementById("horizontal_IoT_buttons").style.display = 'none';
            document.getElementById("IoT_controls_accordion").style.visibility = 'hidden';
            document.getElementById("IoT_controls").style.visibility = 'hidden';
            document.getElementById("editorDiffToggle").style.visibility = 'hidden';
            document.getElementById('content_pre_code').style.display = 'inline';
            document.getElementById('content_code_Monaco').style.display = 'none';
            document.getElementById('content_diffCode_Monaco').style.display = 'none';
            document.getElementById('saveCodeButtonMenu').style.display = 'none';
            document.getElementById("content_code_buttons").appendChild(document.getElementById("copyCodeButton"));
            document.getElementById("content_code_buttons").appendChild(document.getElementById("saveCodeButton"));
            document.getElementById("openCodeButton").style.display = 'none';
            document.getElementById("content_code").style.minWidth = '0.5px';
            document.getElementById("resizer_h").style.width = '15px';
            if (Code.editor) Code.editor.dispose();
            if (Code.diffEditor) Code.diffEditor.dispose();
            if (document.getElementById("content_code_buttons_skill3_undo"))
                document.getElementById("content_code_buttons_skill3").removeChild(document.getElementById("content_code_buttons_skill3_undo"));
            if (document.getElementById("content_code_buttons_skill3_redo"))
                document.getElementById("content_code_buttons_skill3").removeChild(document.getElementById("content_code_buttons_skill3_redo"));
            if (document.getElementById("content_code_buttons_skill3_reset"))
                document.getElementById("content_code_buttons_skill3").removeChild(document.getElementById("content_code_buttons_skill3_reset"));
            Code.BlocklyWorkspaceOnresize();
            Blockly.svgResize(Code.mainWorkspace);
            break;
        case 'skill2':
            document.getElementById("menuButton").style.display = 'inline';
            document.getElementById("functionsIcons").prepend(document.getElementById("menuButton"));
            document.getElementById("content_blocks").appendChild(document.getElementById("redoButton"));
            document.getElementById("content_blocks").appendChild(document.getElementById("undoButton"));
            document.getElementById("undoButton").classList.add("iconWorkspaceButtons");
            document.getElementById("undoButton").classList.remove("iconButtons");
            document.getElementById("redoButton").classList.add("iconWorkspaceButtons");
            document.getElementById("redoButton").classList.remove("iconButtons");
            document.getElementById("functionsIcons").prepend(document.getElementById("saveXMLButton"));
            document.getElementById("functionsIcons").prepend(document.getElementById("saveXMLButton_span_menu"));
            document.getElementById("functionsIcons").prepend(document.getElementById("loadXMLfakeButton"));
            document.getElementById("functionsIcons").prepend(document.getElementById("loadXMLfakeButton_span_menu"));
            document.getElementById("functionsIcons").prepend(document.getElementById("newButton"));
            document.getElementById("functionsIcons").prepend(document.getElementById("newButton_span_menu"));
            document.getElementById("functionsIcons").prepend(document.getElementById("resetButton"));
            document.getElementById("functionsIcons").prepend(document.getElementById("resetButton_span_menu"));
            document.getElementById("functionsIcons").prepend(document.getElementById("saveCodeButtonMenu"));
            document.getElementById("functionsIcons").prepend(document.getElementById("saveCodeButton_span_menu"));
            document.getElementById("functionsIcons").prepend(document.getElementById("helpButton"));
            document.getElementById("functionsIcons").prepend(document.getElementById("helpButton_span_menu"));
            document.getElementById("buttonsMenuPopupInside").innerHTML = '';
            document.getElementById("buttonsMenuPopupInside").appendChild(document.getElementById("newButton"));
            document.getElementById("buttonsMenuPopupInside").appendChild(document.getElementById("newButton_span_menu"));
            document.getElementById("buttonsMenuPopupInside").innerHTML += '<br>';
            document.getElementById("buttonsMenuPopupInside").appendChild(document.getElementById("loadXMLfakeButton"));
            document.getElementById("buttonsMenuPopupInside").appendChild(document.getElementById("loadXMLfakeButton_span_menu"));
            document.getElementById("buttonsMenuPopupInside").innerHTML += '<br>';
            document.getElementById("buttonsMenuPopupInside").appendChild(document.getElementById("saveXMLButton"));
            document.getElementById("buttonsMenuPopupInside").appendChild(document.getElementById("saveXMLButton_span_menu"));
            document.getElementById("buttonsMenuPopupInside").innerHTML += '<br>';
            document.getElementById("buttonsMenuPopupInside").appendChild(document.getElementById("saveCodeButtonMenu"));
            document.getElementById("buttonsMenuPopupInside").appendChild(document.getElementById("saveCodeButton_span_menu"));
            document.getElementById("buttonsMenuPopupInside").innerHTML += '<br>';
            document.getElementById("buttonsMenuPopupInside").innerHTML += '<hr>';
            document.getElementById("buttonsMenuPopupInside").appendChild(document.getElementById("resetButton"));
            document.getElementById("buttonsMenuPopupInside").appendChild(document.getElementById("resetButton_span_menu"));
            document.getElementById("buttonsMenuPopupInside").innerHTML += '<br>';
            document.getElementById("buttonsMenuPopupInside").innerHTML += '<hr>';
            document.getElementById("buttonsMenuPopupInside").appendChild(document.getElementById("helpButton"));
            document.getElementById("buttonsMenuPopupInside").appendChild(document.getElementById("helpButton_span_menu"));
            document.getElementById("toolsButton").style.display = 'inline';
            document.getElementById("iotConnectButton").style.display = 'none';
            document.getElementById("serialConnectButton").style.display = 'inline';
            // document.getElementById("horizontal_IoT_buttons").style.display = 'inline';
            document.getElementById("IoT_controls_accordion").style.visibility = 'hidden';
            document.getElementById("IoT_controls").style.visibility = 'hidden';
            document.getElementById("editorDiffToggle").style.visibility = 'hidden';
            document.getElementById('content_pre_code').style.display = 'inline';
            document.getElementById('content_code_Monaco').style.display = 'none';
            document.getElementById('content_diffCode_Monaco').style.display = 'none';
            document.getElementById('saveCodeButtonMenu').style.display = 'inline';
            document.getElementById("content_code_buttons").appendChild(document.getElementById("copyCodeButton"));
            document.getElementById("content_code_buttons").appendChild(document.getElementById("saveCodeButton"));
            document.getElementById("openCodeButton").style.display = 'inline';
            document.getElementById("content_code").style.minWidth = '0.5px';
            document.getElementById("resizer_h").style.width = '15px';
            if (document.getElementById("content_code_buttons_skill3_undo"))
                document.getElementById("content_code_buttons_skill3").removeChild(document.getElementById("content_code_buttons_skill3_undo"));
            if (document.getElementById("content_code_buttons_skill3_redo"))
                document.getElementById("content_code_buttons_skill3").removeChild(document.getElementById("content_code_buttons_skill3_redo"));
            if (document.getElementById("content_code_buttons_skill3_reset"))
                document.getElementById("content_code_buttons_skill3").removeChild(document.getElementById("content_code_buttons_skill3_reset"));
            Code.BlocklyWorkspaceOnresize();
            Blockly.svgResize(Code.mainWorkspace);
            break;
        case 'skill3':
            document.getElementById("menuButton").style.display = 'inline';
            document.getElementById("functionsIcons").prepend(document.getElementById("menuButton"));
            document.getElementById("content_blocks").appendChild(document.getElementById("redoButton"));
            document.getElementById("content_blocks").appendChild(document.getElementById("undoButton"));
            document.getElementById("undoButton").classList.add("iconWorkspaceButtons");
            document.getElementById("undoButton").classList.remove("iconButtons");
            document.getElementById("redoButton").classList.add("iconWorkspaceButtons");
            document.getElementById("redoButton").classList.remove("iconButtons");
            document.getElementById("functionsIcons").prepend(document.getElementById("saveXMLButton"));
            document.getElementById("functionsIcons").prepend(document.getElementById("saveXMLButton_span_menu"));
            document.getElementById("functionsIcons").prepend(document.getElementById("loadXMLfakeButton"));
            document.getElementById("functionsIcons").prepend(document.getElementById("loadXMLfakeButton_span_menu"));
            document.getElementById("functionsIcons").prepend(document.getElementById("newButton"));
            document.getElementById("functionsIcons").prepend(document.getElementById("newButton_span_menu"));
            document.getElementById("functionsIcons").prepend(document.getElementById("resetButton"));
            document.getElementById("functionsIcons").prepend(document.getElementById("resetButton_span_menu"));
            document.getElementById("functionsIcons").prepend(document.getElementById("saveCodeButtonMenu"));
            document.getElementById("functionsIcons").prepend(document.getElementById("saveCodeButton_span_menu"));
            document.getElementById("functionsIcons").prepend(document.getElementById("helpButton"));
            document.getElementById("functionsIcons").prepend(document.getElementById("helpButton_span_menu"));
            document.getElementById("buttonsMenuPopupInside").innerHTML = '';
            document.getElementById("buttonsMenuPopupInside").appendChild(document.getElementById("newButton"));
            document.getElementById("buttonsMenuPopupInside").appendChild(document.getElementById("newButton_span_menu"));
            document.getElementById("buttonsMenuPopupInside").innerHTML += '<br>';
            document.getElementById("buttonsMenuPopupInside").appendChild(document.getElementById("loadXMLfakeButton"));
            document.getElementById("buttonsMenuPopupInside").appendChild(document.getElementById("loadXMLfakeButton_span_menu"));
            document.getElementById("buttonsMenuPopupInside").innerHTML += '<br>';
            document.getElementById("buttonsMenuPopupInside").appendChild(document.getElementById("saveXMLButton"));
            document.getElementById("buttonsMenuPopupInside").appendChild(document.getElementById("saveXMLButton_span_menu"));
            document.getElementById("buttonsMenuPopupInside").innerHTML += '<br>';
            document.getElementById("buttonsMenuPopupInside").appendChild(document.getElementById("saveCodeButtonMenu"));
            document.getElementById("buttonsMenuPopupInside").appendChild(document.getElementById("saveCodeButton_span_menu"));
            document.getElementById("buttonsMenuPopupInside").innerHTML += '<br>';
            document.getElementById("buttonsMenuPopupInside").innerHTML += '<hr>';
            document.getElementById("buttonsMenuPopupInside").appendChild(document.getElementById("resetButton"));
            document.getElementById("buttonsMenuPopupInside").appendChild(document.getElementById("resetButton_span_menu"));
            document.getElementById("buttonsMenuPopupInside").innerHTML += '<br>';
            document.getElementById("buttonsMenuPopupInside").innerHTML += '<hr>';
            document.getElementById("buttonsMenuPopupInside").appendChild(document.getElementById("helpButton"));
            document.getElementById("buttonsMenuPopupInside").appendChild(document.getElementById("helpButton_span_menu"));
            document.getElementById("iotConnectButton").style.display = 'inline';
            // document.getElementById("horizontal_IoT_buttons").style.display = 'none';
            document.getElementById("IoT_controls_accordion").style.visibility = 'inherit';
            document.getElementById("IoT_controls").style.visibility = 'inherit';
            document.getElementById("editorDiffToggle").style.visibility = 'visible';
            document.getElementById('content_pre_code').style.display = 'none';
            document.getElementById('content_code_Monaco').style.display = 'inline';
            document.getElementById('content_diffCode_Monaco').style.display = 'inline';
            document.getElementById('saveCodeButtonMenu').style.display = 'inline';
            document.getElementById("content_code_buttons_skill3").appendChild(document.getElementById("copyCodeButton"));
            document.getElementById("content_code_buttons_skill3").appendChild(document.getElementById("saveCodeButton"));
            document.getElementById("openCodeButton").style.display = 'none';
            document.getElementById("content_code").style.minWidth = '200px';
            document.getElementById("resizer_h").style.width = '45px';
            if (!Code.editor)
                Code.editor = monaco.editor.create(document.getElementById('content_code_Monaco'), {
                    scrollBeyondLastLine: false,
                    language: 'cpp',
                    automaticLayout: true
                });
            if (!Code.diffEditor) {
                Code.diffEditor = monaco.editor.createDiffEditor(document.getElementById('content_diffCode_Monaco'), {
                    followsCaret: true,
                    ignoreCharChanges: true,
                    automaticLayout: true
                });
                Code.diffEditor.setModel({
                    original: monaco.editor.createModel(Blockly.Arduino.workspaceToCode(Code.mainWorkspace), 'cpp'),
                    modified: monaco.editor.createModel(Blockly.Arduino.workspaceToCode(Code.mainWorkspace), 'cpp'),
                });
            }
            document.getElementById("content_code").appendChild(document.getElementById("content_code_Monaco"));
            document.getElementById("content_code").appendChild(document.getElementById("content_diffCode_Monaco"));
            document.getElementById("content_code_Monaco").style.display = 'block';
            document.getElementById("content_diffCode_Monaco").style.display = 'none';
            document.getElementById("content_code_Monaco").style.width = '100%';
            document.getElementById("content_code_Monaco").style.height = '100%';
            Code.editor.setValue(Blockly.Arduino.workspaceToCode(Code.mainWorkspace));
            let btnUndo = document.createElement("button");
            btnUndo.innerHTML = '<i class="fas fa-level-up-alt"></i>';
            btnUndo.name = "btnUndo";
            btnUndo.id = "content_code_buttons_skill3_undo";
            btnUndo.className = "iconButtons";
            btnUndo.onclick = function() {
                Code.editor.trigger('aaaa', 'undo', 'aaaa');
                Code.editor.focus();
                Code.diffEditor.getModifiedEditor().trigger('aaaa', 'undo', 'aaaa');
                Code.diffEditor.getModifiedEditor().focus();
            };
            document.getElementById("content_code_buttons_skill3").appendChild(btnUndo);
            let btnRedo = document.createElement("button");
            btnRedo.innerHTML = '<i class="fas fa-level-down-alt"></i>';
            btnRedo.name = "btnRedo";
            btnRedo.id = "content_code_buttons_skill3_redo";
            btnRedo.className = "iconButtons";
            btnRedo.onclick = function() {
                Code.editor.trigger('aaaa', 'redo', 'aaaa');
                Code.editor.focus();
                Code.diffEditor.getModifiedEditor().trigger('aaaa', 'redo', 'aaaa');
                Code.diffEditor.getModifiedEditor().focus();
            };
            document.getElementById("content_code_buttons_skill3").appendChild(btnRedo);
            let btnReset = document.createElement("button");
            btnReset.innerHTML = '<i class="fas fa-angle-double-right"></i>';
            btnReset.name = "btnReset";
            btnReset.id = "content_code_buttons_skill3_reset";
            btnReset.className = "iconButtons";
            btnReset.onclick = function() {
                Code.diffEditor.getOriginalEditor().setValue(Blockly.Arduino.workspaceToCode(Code.mainWorkspace));
                Code.diffEditor.getModifiedEditor().setValue(Blockly.Arduino.workspaceToCode(Code.mainWorkspace));
                Code.editor.setValue(Blockly.Arduino.workspaceToCode(Code.mainWorkspace));
                document.getElementById('content_pre_code').innerHTML = Blockly.Arduino.workspaceToCode(Code.mainWorkspace);
            };
            document.getElementById("content_code_buttons_skill3").appendChild(btnReset);
            Code.BlocklyWorkspaceOnresize();
            Blockly.svgResize(Code.mainWorkspace);
    }
};

/**
 * Changes the output language by clicking the tab matching
 * the selected language in the codeMenu.
 */
Code.changeCodingLanguage = function() {
    var codeMenu = document.getElementById('code_menu');
    Code.tabClick(codeMenu.options[codeMenu.selectedIndex].value);
}

/**
 * Bind a function to a button's click event.
 * On touch enabled browsers, ontouchend is treated as equivalent to onclick.
 * @param {!Element|string} el Button element or ID thereof.
 * @param {!Function} func Event handler to bind.
 */
Code.bindClick = function(el, func) {
    if (typeof el == 'string') {
        el = document.getElementById(el);
    }
    el.addEventListener('click', func, true);
    el.addEventListener('touchend', func, true);
};

/**
 * Load the Prettify CSS and JavaScript.
 */
Code.importPrettify = function() {
    var script = document.createElement('script');
    script.setAttribute('src', 'https://cdn.rawgit.com/google/code-prettify/master/loader/run_prettify.js');
    document.head.appendChild(script);
};

/**
 * Compute the absolute coordinates and dimensions of an HTML element.
 * @param {!Element} element Element to match.
 * @return {!Object} Contains height, width, x, and y properties.
 * @private
 */
Code.getBBox_ = function(element) {
    var height = element.offsetHeight;
    var width = element.offsetWidth;
    var x = 0;
    var y = 0;
    do {
        x += element.offsetLeft;
        y += element.offsetTop;
        element = element.offsetParent;
    } while (element);
    return {
        height: height,
        width: width,
        x: x,
        y: y
    };
};

/**
 * User's language (e.g. "en").
 * @type {string}
 */
Code.LANG = Code.getLang();