/**
 * @license
 * Copyright 2020 Sébastien CANET
 * SPDX-License-Identifier: BSD-3-Clause
 */

/**
 * @fileoverview Accessibility functions, forked from https://github.com/google/blockly/commit/21763b7e00fbfe8010595382bf196410cd30844e
 * @author scanet@libreduc.cc (Sébastien CANET)
 */

// Custom requires for the playground.
goog.require('Blockly.WorkspaceCommentSvg');
goog.require('Blockly.WorkspaceCommentSvg.render');

'use strict';
var Code;

Code.genWorkspace = function(rtlArg, toolboxArg, rendererArg) {
    let pluginToAdd = {};
    // if (sessionStorage.getItem('continuousToolbox'))
    //     pluginToAdd = {
    //         'toolbox': ContinuousToolbox,
    //         'flyoutsVerticalToolbox': ContinuousFlyout,
    //         'metricsManager': ContinuousMetrics,
    //     }
    Code.mainWorkspace = Blockly.inject('content_blocks', {
        comments: true,
        grid: {
            spacing: 25,
            length: 0,
            colour: '#ccc',
            snap: true
        },
        maxTrashcanContents: 256,
        media: './@blockly/media/',
        move: {
            scrollbars: true,
            drag: true,
            wheel: false
        },
        oneBasedIndex: true,
        plugin: pluginToAdd,
        renderer: rendererArg,
        rtl: rtlArg,
        sounds: true,
        toolbox: toolboxArg,
        toolboxPosition: 'start',
        zoom: {
            controls: true,
            wheel: true,
            startScale: 1.0,
            maxScale: 5,
            minScale: 0.1,
            scaleSpeed: 1.1
        }
    });
    Blockly.Variables.createFlyoutCategory(Code.mainWorkspace);

    Code.mainWorkspace.registerToolboxCategoryCallback('BLOCKFACTORY_CAT', Code.blockFactoryFlyoutCallback);
}

/* Creating a mini workspace that is a zoomed out version of the main workspace. */
Code.genMiniWorkspace = function(zoomFactor) {
    document.getElementById('minimapDiv').style.display = 'inline';
    let workspaceMetrics = Code.mainWorkspace.getMetrics();
    document.getElementById('minimapDiv').style.width = workspaceMetrics.scrollWidth / 10 + 'px';
    document.getElementById('minimapDiv').style.height = workspaceMetrics.scrollHeight / 10 + 'px';
    Code.minimapWorkspace = Blockly.inject('minimapDiv', {
        readOnly: true,
        zoom: {
            controls: false,
            startScale: Code.mainWorkspace.getScale() / zoomFactor,
            wheel: false
        }
    });
    Minimap.init(Code.mainWorkspace, Code.minimapWorkspace, zoomFactor);
}

/**
 * It changes the theme of the Blockly workspace
 * @param themeChoice - The name of the theme you want to use.
 */
function changeThemeBlockly(themeChoice) {
    Code.mainWorkspace.setTheme(Blockly.Themes[themeChoice]);
    window.localStorage.setItem('choosedTheme', themeChoice);
}

/**
 * It takes a renderer choice, serializes the current workspace state, disposes of the current
 * workspace, creates a new workspace with options, deserializes state into workspace, resizes the gui,
 * changes the font family, and changes the theme.
 * @param rendererChoice - The renderer to use.
 */
function changeRendererBlockly(rendererChoice) {
    // Serialize current workspace state.
    const state = Blockly.Xml.workspaceToDom(Code.mainWorkspace);
    // Dispose of the current workspace
    Code.mainWorkspace.dispose();
    // Create a new workspace with options.
    Code.genWorkspace(Code.isRtl(), Code.buildToolbox(), rendererChoice);
    Code.buildControlPanelForToolbox();
    // Deserialize state into workspace.
    Blockly.Xml.domToWorkspace(state, Code.mainWorkspace);
    // Resize the gui.
    Code.BlocklyWorkspaceOnresize();
    Code.changeFontFamily(window.localStorage.getItem('choosedFont'));
    changeThemeBlockly(localStorage.getItem('choosedTheme'));
}

/**
 * It takes a string as an argument, and sets the value of the 'themeUI' key in localStorage to that
 * string. It then sets the class of the documentElement to that string
 * @param themeChoice - The name of the theme you want to switch to.
 */
function changeThemeUI(themeChoice) {
    localStorage.setItem('themeUI', themeChoice);
    document.documentElement.className = themeChoice;
}

/**
 * It fetches the theme list from the monaco-editor package, parses it as JSON, and then adds each
 * theme to the dropdown menu
 * @returns A promise.
 */
async function editorLoadThemeList() {
    var themes = Object.keys(monacoThemesList);
    themes.forEach(theme => {
        var opt = document.createElement('option');
        opt.value = theme;
        opt.text = monacoThemesList[theme]
        document.getElementById('codeEditorColorMenu').add(opt);
    });
}

/**
 * It fetches the theme file from the monaco-editor/themes folder, then defines the theme and sets it
 * @param themeChoice - The name of the theme you want to use.
 */
async function changeThemeMonacoEditor(themeChoice) {
    if (Code.editor) {
        if (!('fetch' in window)) {
            var loc = window.location.pathname;
            var dir = loc.substring(0, loc.lastIndexOf('/'));
            let httpRequest = new XMLHttpRequest(); // asynchronous request
            httpRequest.open("GET", 'file://' + dir + '/tools/vs/themes/' + themeChoice + '.json', true);
            httpRequest.send();
            httpRequest.addEventListener("readystatechange", function() {
                if (this.readyState === this.DONE) {
                    let data = JSON.parse(this.response);
                    monaco.editor.defineTheme(themeChoice, data);
                    monaco.editor.setTheme(themeChoice);
                }
            });
        } else {
            localStorage.setItem('themeMonaco', themeChoice);
            await fetch('./tools/vs/themes/' + themeChoice + '.json', {
                    mode: 'no-cors'
                })
                .then(data => data.json())
                .then(data => {
                    monaco.editor.defineTheme(themeChoice, data);
                    monaco.editor.setTheme(themeChoice);
                })
        }
    } else {
        document.getElementById('codeEditorColorMenu').value = "S4E";
    }
}


/**
 * It returns an array of all elements in the document with the given class name
 * @param searchClass - The class name you're looking for
 * @param node - The node to start searching from. If you don't specify this, it will start from the
 * document.
 * @param tag - The tag name of the elements you want to get.
 * @returns An array of elements that have the class name specified in the first parameter.
 */
function getElementsByClass(searchClass, node, tag) {
    var classElements = new Array();
    if (node === null)
        node = document;
    if (tag === null)
        tag = '*';
    var els = node.getElementsByTagName(tag);
    var elsLen = els.length;
    var pattern = new RegExp("(^|\\s)" + searchClass + "(\\s|$)");
    for (var i = 0, j = 0; i < elsLen; i++) {
        if (pattern.test(els[i].className)) {
            classElements[j] = els[i];
            j++;
        }
    }
    return classElements;
}

/**
 * This function takes two arguments, a class name and a font size, and then changes the font size of
 * all elements with that class name to the specified font size.
 * @param classToModify - The class of the elements you want to modify.
 * @param sizeToModify - The size you want to change the font to.
 */
function fontSizePageModify(classToModify, sizeToModify) {
    var target = getElementsByClass(classToModify);
    for (i = 0; i < target.length; i++) {
        target[i].style.fontSize = sizeToModify;
    }
}

/**
 * "This function takes two arguments, a class name and a letter spacing value, and applies the letter
 * spacing value to all elements with the class name."
 * 
 * @param classToModify - The class of the elements you want to modify.
 * @param spacingToModify - This is the amount of spacing you want to add to the text.
 */
function fontSpacingPageModify(classToModify, spacingToModify) {
    var target = getElementsByClass(classToModify);
    for (i = 0; i < target.length; i++) {
        target[i].style.letterSpacing = spacingToModify;
    }
}

/**
 * If the window object exists, and the process object exists, and the process type is renderer, then
 * we're in an Electron renderer process. If the process object exists, and the versions object exists,
 * and the electron property exists, then we're in an Electron main process. If the navigator object
 * exists, and the userAgent string exists, and the userAgent string contains the word Electron, then
 * we're in an Electron renderer process
 * From is-electron "library" https://github.com/cheton/is-electron
 * @returns A boolean value.
 */
function isElectron() {
    // Renderer process
    if (typeof window !== 'undefined' && typeof window.process === 'object' && window.process.type === 'renderer') {
        return true;
    }

    // Main process
    if (typeof process !== 'undefined' && typeof process.versions === 'object' && !!process.versions.electron) {
        return true;
    }

    // Detect the user agent when the `nodeIntegration` option is set to false
    if (typeof navigator === 'object' && typeof navigator.userAgent === 'string' && navigator.userAgent.indexOf('Electron') >= 0) {
        return true;
    }

    return false;
}

function setOnOffLine() {
    // Set different config online vs local copy.
    document.getElementById('btn_fake_min').style.display = 'none';
    document.getElementById('btn_fake_max').style.display = 'none';
    document.getElementById('btn_fake_close').style.display = 'none';
    if (window.location.protocol === 'file:') {
        if (isElectron()) {
            document.getElementById('btn_fake_min').style.display = 'inline';
            document.getElementById('btn_fake_max').style.display = 'inline';
            document.getElementById('btn_fake_close').style.display = 'inline';
            document.getElementById('fullScreenButton').style.display = 'none';
            document.getElementById('verifyButton').disabled = false;
            document.getElementById('uploadButton').disabled = false;
            // show everything relative to arduino-cli or nodejs if online
            let elmts = getElementsByClass("CLI", null, null);
            for (let i = 0; i < elmts.length; i++)
                elmts[i].disabled = false;
        } else {
            document.getElementById('fullScreenButton').style.display = 'inline';
            document.getElementById('verifyButton').disabled = true;
            document.getElementById('uploadButton').disabled = true;
            document.getElementById('wiringButton').setAttribute('onclick', "Code.HackCable()");
            document.getElementById('htmlButton').setAttribute('onclick', "Code.HTMLFactory()");
            document.getElementById('installSTBoards').setAttribute('onclick', 'Code.installBoards("ST");');
            document.getElementById('installArduinoBoards').setAttribute('onclick', 'Code.installBoards("arduino");');
            document.getElementById('installEspBoards').setAttribute('onclick', 'Code.installBoards("esp");');
            document.getElementById('installMicrobitBoards').setAttribute('onclick', 'Code.installBoards("microbit");');
            // hide everything relative to arduino-cli or nodejs if not in Electron
            let elmts = getElementsByClass("CLI", null, null);
            for (let i = 0; i < elmts.length; i++)
                elmts[i].disabled = true;
            document.getElementById('arrowheadConfig').style.display = 'none';
        }
        document.getElementById('serialMenu').disabled = false;
    } else {
        document.getElementById('fullScreenButton').style.display = 'inline';
        document.getElementById('verifyButton').disabled = true;
        document.getElementById('uploadButton').disabled = true;
        document.getElementById('serialMenu').disabled = true;
        // not same button if in Electron or browser, if web just webpages launched in browser
        document.getElementById('wiringButton').setAttribute('onclick', "Code.HackCable()");
        document.getElementById('htmlButton').setAttribute('onclick', "Code.HTMLFactory()");
        document.getElementById('installSTBoards').setAttribute('onclick', 'Code.installBoards("ST");');
        document.getElementById('installArduinoBoards').setAttribute('onclick', 'Code.installBoards("arduino");');
        document.getElementById('installEspBoards').setAttribute('onclick', 'Code.installBoards("esp");');
        document.getElementById('installMicrobitBoards').setAttribute('onclick', 'Code.installBoards("microbit");');
        // hide everything relative to arduino-cli or nodejs if online
        let elmts = getElementsByClass("CLI", null, null);
        for (let i = 0; i < elmts.length; i++)
            elmts[i].disabled = true;
        document.getElementById('arrowheadConfig').style.display = 'none';
    }
    if (!navigator.serial) {
        document.getElementById('serialButton').disabled = true;
        document.getElementById('serialMonitorButton').disabled = true;
    } else {
        document.getElementById('serialButton').disabled = false;
        document.getElementById('serialMonitorButton').disabled = false;
    }
}

/**
 * If the URL contains a
 * `toolbox` parameter, use that as the suffix for the ID of the toolbox element.
 * Otherwise, use `categories` as the suffix
 * @returns The toolbox element.
 */
function getToolboxElement() {
    var match = location.search.match(/toolbox=([^&]+)/);
    // Default to the basic toolbox with categories,
    // but override that if the toolbox type is set in the URL.
    var toolboxSuffix = (match ? match[1] : 'categories');
    // The three possible values are: "simple", "categories",
    // "categories-typed-variables".
    return document.getElementById('toolbox-' + toolboxSuffix);
}

/**
 * It creates a new NavigationController object, initializes it, adds the main workspace to it, and
 * then either enables or disables it depending on the state parameter
 * @param state - true or false, depending on whether you want to enable or disable accessibility mode.
 */
function toggleAccessibilityMode(state) {
    if (state && !Code.navigationController) {
        document.getElementById('displayKeyMappings').disabled = false;
        Code.navigationController = new NavigationController();
        Code.navigationController.init();
        Code.navigationController.addWorkspace(Code.mainWorkspace);
        Code.navigationController.enable(Code.mainWorkspace);
        Code.shortcutRegistry = new Blockly.ShortcutRegistry();

        //keyboard nav attribution
        var actions = [
            Constants.SHORTCUT_NAMES.PREVIOUS,
            Constants.SHORTCUT_NAMES.OUT,
            Constants.SHORTCUT_NAMES.NEXT,
            Constants.SHORTCUT_NAMES.IN,
            Constants.SHORTCUT_NAMES.INSERT,
            Constants.SHORTCUT_NAMES.MARK,
            Constants.SHORTCUT_NAMES.DISCONNECT,
            Constants.SHORTCUT_NAMES.TOOLBOX,
            Constants.SHORTCUT_NAMES.EXIT,
            Constants.SHORTCUT_NAMES.MOVE_WS_CURSOR_UP,
            Constants.SHORTCUT_NAMES.MOVE_WS_CURSOR_LEFT,
            Constants.SHORTCUT_NAMES.MOVE_WS_CURSOR_DOWN,
            Constants.SHORTCUT_NAMES.MOVE_WS_CURSOR_RIGHT
        ];
        console.log(actions);
        Constants.SHORTCUT_NAMES.PREVIOUS.name = MSG['actionName0'];
        Constants.SHORTCUT_NAMES.OUT.name = MSG['actionName1'];
        Constants.SHORTCUT_NAMES.NEXT.name = MSG['actionName2'];
        Constants.SHORTCUT_NAMES.IN.name = MSG['actionName3'];
        Constants.SHORTCUT_NAMES.INSERT.name = MSG['actionName4'];
        Constants.SHORTCUT_NAMES.MARK.name = MSG['actionName5'];
        Constants.SHORTCUT_NAMES.DISCONNECT.name = MSG['actionName6'];
        Constants.SHORTCUT_NAMES.TOOLBOX.name = MSG['actionName7'];
        Constants.SHORTCUT_NAMES.EXIT.name = MSG['actionName8'];
        Constants.SHORTCUT_NAMES.MOVE_WS_CURSOR_UP.name = MSG['actionName9'];
        Constants.SHORTCUT_NAMES.MOVE_WS_CURSOR_LEFT.name = MSG['actionName10'];
        Constants.SHORTCUT_NAMES.MOVE_WS_CURSOR_DOWN.name = MSG['actionName11'];
        Constants.SHORTCUT_NAMES.MOVE_WS_CURSOR_RIGHT.name = MSG['actionName12'];
        console.log(actions);
        createKeyMappingList(actions);
    } else {
        document.getElementById('displayKeyMappings').disabled = true;
        Code.navigationController.removeWorkspace(Code.mainWorkspace);
        Code.navigationController.disable(Code.mainWorkspace);
    }
}

/**
 * It creates a new instance of the ContentHighlight class, and calls its init() method
 * @param state - true or false, depending on whether the user has checked the box or not.
 */
function toggleHighlightMode(state) {
    if (state) {
        Code.contentHighlight = new ContentHighlight(Code.mainWorkspace);
        Code.contentHighlight.init();
    } else {
        Code.contentHighlight.dispose();
    }
}

/**
 * It disposes of the current workspace, saves the state of the toggle, and then generates a new
 * workspace with the new state
 * @param state - true or false
 */
function toggleContinuousToolbox(state) {
    Code.mainWorkspace.dispose();
    sessionStorage.setItem('toggleContinuousToolbox', state);
    Code.genWorkspace(Code.isRtl(), Code.buildToolbox(), document.getElementById('rendererMenu').value);
}

/**
 * It either creates a minimap or deletes it
 * @param state - true or false, whether to show or hide the minimap
 */
function toggleMinimap(state) {
    if (state === true) {
        Code.genMiniWorkspace(10);
    } else if (Code.minimapWorkspace) {
        Code.mainWorkspace.removeChangeListener(Minimap.mirrorEvent);
        Blockly.browserEvents.unbind(Minimap.mapDragger, "mousedown", null, Minimap.mousedown);
        window.removeEventListener('resize', Minimap.repositionMinimap);
        Minimap.svg.addEventListener('mouseup', Minimap.updateMapDragger);
        Code.mainWorkspace.removeChangeListener(Minimap.mirrorEvent);
        Code.minimapWorkspace.dispose();
        const elementToDelete = document.querySelectorAll('.minimap');
        for (const el of elementToDelete) {
            el.parentNode.removeChild(el);
        }
        delete Minimap;
        document.getElementById('minimapDiv').style.display = 'none';
    }
}

/**
 * It adds a new option to the contextual menu that allows the user to download a screenshot of the
 * workspace
 * @param menuOptions - An array of menu options.
 * @param e - The event that triggered the context menu.
 */
function configureContextualMenu(menuOptions, e) {
    let screenshotOption = {
        text: MSG['screenshot'],
        enabled: Code.mainWorkspace.getTopBlocks().length,
        callback: function() {
            Blockly.downloadScreenshot(Code.mainWorkspace);
        }
    };
    menuOptions.push(screenshotOption);
    // Adds a default-sized workspace comment to the workspace.
    menuOptions.push(Blockly.ContextMenu.workspaceCommentOption(Code.mainWorkspace, e));
}