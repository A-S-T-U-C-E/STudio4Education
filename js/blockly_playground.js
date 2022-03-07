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

}

Code.genMiniWorkspace = function(zoomFactor) {
    document.getElementById('minimapDiv').style.display = 'inline';
    var workspaceMetrics = Code.mainWorkspace.getMetrics();
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

// function setRenderDebugOptionCheckboxState(overrideOptions) {
//     Code.blockRendering.Debug.config = overrideOptions || {};
//     if (!overrideOptions) {
//         return;
//     }
//     var renderDebugOptionsListEl = document.getElementById('renderDebugOptions');
//     var renderDebugOptionInputs =
//         renderDebugOptionsListEl.getElementsByTagName('input');
//     for (var i = 0, optionInput;
//         (optionInput = renderDebugOptionInputs[i]); i++) {
//         var optionName = optionInput.getAttribute('data-optionName');
//         optionInput.checked = !!overrideOptions[optionName];
//     }
// }

// function updateRenderDebugOptions(e) {
//     var target = e.target;
//     var optionName = target.getAttribute('data-optionName');
//     var config = Code.blockRendering.Debug.config;
//     config[optionName] = !!target.checked;
//     sessionStorage.setItem('blockRenderDebugOptions', JSON.stringify(config));
//     Code.mainWorkspace.render();
// }

// function addRenderDebugOptionsCheckboxes() {
//     var renderDebugConfig = Code.blockRendering.Debug.config;
//     var renderDebugOptionsListEl = document.getElementById('renderDebugOptions');
//     var optionNames = Object.keys(renderDebugConfig);
//     for (var i = 0, optionName;
//         (optionName = optionNames[i]); i++) {
//         var optionCheckId = 'RenderDebug' + optionName + 'Check';
//         var optionLabel = document.createElement('label');
//         optionLabel.setAttribute('for', optionCheckId);
//         optionLabel.textContent = optionName;
//         var optionCheck = document.createElement('input');
//         optionCheck.setAttribute('type', 'checkbox');
//         optionCheck.setAttribute('id', optionCheckId);
//         optionCheck.setAttribute('data-optionName', optionName);
//         optionCheck.onclick = updateRenderDebugOptions;
//         var optionLi = document.createElement('li');
//         optionLi.appendChild(optionLabel);
//         optionLi.appendChild(optionCheck);
//         renderDebugOptionsListEl.appendChild(optionLi);
//     }
// }

function changeThemeBlockly(themeChoice) {
    Code.mainWorkspace.setTheme(Blockly.Themes[themeChoice]);
    window.localStorage.setItem('choosedTheme', themeChoice);
}

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

function changeThemeUI(themeChoice) {
    localStorage.setItem('themeUI', themeChoice);
    document.documentElement.className = themeChoice;
}

function editorLoadThemeList() {
    return fetch('./tools/vs/themes/themelist.json')
        .then(r => r.json())
        .then(data => {
            var themes = Object.keys(data);
            themes.forEach(theme => {
                var opt = document.createElement('option');
                opt.value = theme;
                opt.text = data[theme]
                document.getElementById('codeEditorColorMenu').add(opt);
            });
        });
}

function changeThemeMonacoEditor(themeChoice) {
    if (!('fetch' in window)) {
        console.log('Fetch API not found, please upgrade your browser.');
    } else
    if (Code.editor) {
        localStorage.setItem('themeMonaco', themeChoice);
        fetch('./tools/vs/themes/' + themeChoice + '.json')
            .then(data => data.json())
            .then(data => {
                monaco.editor.defineTheme(themeChoice, data);
                monaco.editor.setTheme(themeChoice);
            })
    }
}

/**
 * Sort and list elements with class 'access' for size change
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
 * Modify all element with 'class' at the 'size'
 */

function fontSizePageModify(classToModify, sizeToModify) {
    var target = getElementsByClass(classToModify);
    for (i = 0; i < target.length; i++) {
        target[i].style.fontSize = sizeToModify;
    }
}

/**
 * Modify all element with 'class' at the 'spacing'
 */
function fontSpacingPageModify(classToModify, spacingToModify) {
    var target = getElementsByClass(classToModify);
    for (i = 0; i < target.length; i++) {
        target[i].style.letterSpacing = spacingToModify;
    }
}

//from is-electron "library" https://github.com/cheton/is-electron
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
        } else {
            document.getElementById('fullScreenButton').style.display = 'inline';
            document.getElementById('verifyButton').disabled = true;
            document.getElementById('uploadButton').disabled = true;
            document.getElementById('installSTBoards').setAttribute('onclick', 'Code.installBoards("ST");');
            document.getElementById('installArduinoBoards').setAttribute('onclick', 'Code.installBoards("arduino");');
            document.getElementById('installEspBoards').setAttribute('onclick', 'Code.installBoards("esp");');
            document.getElementById('installMicrobitBoards').setAttribute('onclick', 'Code.installBoards("microbit");');
        }
        if (!navigator.serial)
            document.getElementById('serialButton').disabled = true;
        document.getElementById('serialMenu').disabled = false;
        // not same button if in Electron or browser, if local nodejs watches events
        document.getElementById('wiringButton').setAttribute('onclick', '');
        // document.getElementById('circuitjsButton').setAttribute('onclick', 'Code.CircuitJS()');
        document.getElementById('factoryButton').setAttribute('onclick', '');
        document.getElementById('htmlButton').setAttribute('onclick', '');
        // document.getElementById('ArrowheadServRegConfigurationModal_okay').style.display = "none";
        // document.getElementById('ArrowheadServRegConfigurationModal_okay_nodejs').style.display = "inline";
        // document.getElementById('ArrowheadProviderConfigurationModal_okay').style.display = "none";
        // document.getElementById('ArrowheadProviderConfigurationModal_okay_nodejs').style.display = "inline";
        // document.getElementById('ArrowheadConsumerConfigurationModal_okay').style.display = "none";
        // document.getElementById('ArrowheadConsumerConfigurationModal_okay_nodejs').style.display = "inline";
        // document.getElementById('ArrowheadAuthConfigurationModal_okay').style.display = "none";
        // document.getElementById('ArrowheadAuthConfigurationModal_okay_nodejs').style.display = "inline";
        // document.getElementById('ArrowheadOrchConfigurationModal_okay').style.display = "none";
        // document.getElementById('ArrowheadOrchConfigurationModal_okay_nodejs').style.display = "inline";
    } else {
        document.getElementById('fullScreenButton').style.display = 'inline';
        document.getElementById('verifyButton').disabled = true;
        if (!navigator.serial)
            document.getElementById('serialButton').disabled = true;
        document.getElementById('uploadButton').disabled = true;
        document.getElementById('serialMenu').disabled = true;
        // not same button if in Electron or browser, if web just webpages launched in browser
        document.getElementById('wiringButton').setAttribute('onclick', './tools/hackcable/index.html');
        // document.getElementById('circuitjsButton').setAttribute('onclick', './tools/circuitjs/circuitjs.html');
        document.getElementById('factoryButton').setAttribute('onclick', "Code.BlockFactory()");
        document.getElementById('htmlButton').setAttribute('onclick', './tools/html/html_factory.html');
        // document.getElementById('ArrowheadServRegConfigurationModal_okay').style.display = "inline";
        // document.getElementById('ArrowheadServRegConfigurationModal_okay_nodejs').style.display = "none";
        // document.getElementById('ArrowheadProviderConfigurationModal_okay').style.display = "inline";
        // document.getElementById('ArrowheadProviderConfigurationModal_okay_nodejs').style.display = "none";
        // document.getElementById('ArrowheadConsumerConfigurationModal_okay').style.display = "inline";
        // document.getElementById('ArrowheadConsumerConfigurationModal_okay_nodejs').style.display = "none";
        // document.getElementById('ArrowheadAuthConfigurationModal_okay').style.display = "inline";
        // document.getElementById('ArrowheadAuthConfigurationModal_okay_nodejs').style.display = "none";
        // document.getElementById('ArrowheadOrchConfigurationModal_okay').style.display = "inline";
        // document.getElementById('ArrowheadOrchConfigurationModal_okay_nodejs').style.display = "none";
        document.getElementById('installSTBoards').setAttribute('onclick', 'Code.installBoards("ST");');
        document.getElementById('installArduinoBoards').setAttribute('onclick', 'Code.installBoards("arduino");');
        document.getElementById('installEspBoards').setAttribute('onclick', 'Code.installBoards("esp");');
        document.getElementById('installMicrobitBoards').setAttribute('onclick', 'Code.installBoards("microbit");');
        // hide everything relative to arduino-cli or nodejs if online
        var elmts = getElementsByClass("CLI", null, null);
        for (var i = 0; i < elmts.length; i++)
            elmts[i].disabled = true;
    }
    if (!navigator.serial)
        document.getElementById('serialMonitorButton').disabled = true;
    else document.getElementById('serialMonitorButton').disabled = false;
    // disable elements not yet finished - server menu
    // document.getElementById('papyrusConnect').disabled = true;
    // document.getElementById('ArrowheadConfiguration_auto').disabled = true;
    document.getElementById('serialConnectIOT').disabled = true;
    // disable elements not yet finished - lateral panel menu
    document.getElementById('launchWebServerTo').disabled = true;
    // document.getElementById('papyrusConnectTo').disabled = true;
    // document.getElementById('ArrowheadConfiguration').disabled = true;
    document.getElementById('serialConnectIOT_save').disabled = true;
}

function getToolboxElement() {
    var match = location.search.match(/toolbox=([^&]+)/);
    // Default to the basic toolbox with categories,
    // but override that if the toolbox type is set in the URL.
    var toolboxSuffix = (match ? match[1] : 'categories');
    // The three possible values are: "simple", "categories",
    // "categories-typed-variables".
    return document.getElementById('toolbox-' + toolboxSuffix);
}

function toggleAccessibilityMode(state) {
    if (state) {
        Code.navigationController.enable(Code.mainWorkspace);
    } else {
        Code.navigationController.disable(Code.mainWorkspace);
    }
}

function toggleHighlightMode(state) {
    let contentHighlight = new ContentHighlight(Code.mainWorkspace);
    contentHighlight.init();
    contentHighlight.dispose();
    // if (state) {
    //     contentHighlight.init();
    //     sessionStorage.setItem('contentHighlightObject', contentHighlight);
    // } else {
    //     contentHighlight = sessionStorage.getItem('contentHighlightObject');
    //     contentHighlight.dispose();
    // }
}

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

function configureContextualMenu(menuOptions, e) {
    var screenshotOption = {
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