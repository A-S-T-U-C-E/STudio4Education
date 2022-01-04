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

function genWorkspace(rtlArg, toolboxArg, rendererArg) {
    Code.mainWorkspace = Blockly.inject('content_blocks', {
        comments: true,
        collapse: true,
        disable: true,
        grid: {
            spacing: 25,
            length: 0,
            colour: '#ccc',
            snap: true
        },
        horizontalLayout: false,
        maxBlocks: Infinity,
        maxInstances: {
            'test_basic_limit_instances': 3
        },
        maxTrashcanContents: 256,
        media: './@blockly/media/',
        sounds: true,
        oneBasedIndex: true,
        readOnly: false,
        rtl: rtlArg,
        move: {
            scrollbars: true,
            drag: true,
            wheel: false
        },
        toolbox: toolboxArg,
        toolboxPosition: 'start',
        renderer: rendererArg,
        zoom: {
            controls: true,
            wheel: true,
            startScale: 1.0,
            maxScale: 4,
            minScale: 0.25,
            scaleSpeed: 1.1
        }
    });
    Blockly.Variables.createFlyoutCategory(Code.mainWorkspace);
    Code.minimapWorkspace = Blockly.inject('minimapDiv', {
        media: './@blockly/media/',
        readOnly: true,
        zoom: {
            controls: false,
            wheel: true,
            startScale: 0.1, //you can change this accorting to your needs.
            maxScale: 0.1,
            minScale: 0.01
        }
    });
    // Minimap.init(Code.mainWorkspace, Code.minimapWorkspace);
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

function changeTheme(themeChoice) {
    Code.mainWorkspace.setTheme(Blockly.Themes[themeChoice]);
    window.localStorage.setItem('choosedTheme', themeChoice);
};

function changeRenderer(rendererChoice) {
    // Serialize current workspace state.
    const state = Blockly.Xml.workspaceToDom(Code.mainWorkspace);
    // Dispose of the current workspace
    Code.mainWorkspace.dispose();
    // Create a new workspace with options.
    genWorkspace(Code.isRtl(), Code.buildToolbox(), rendererChoice);
    Code.buildControlPanelForToolbox();
    // Deserialize state into workspace.
    Blockly.Xml.domToWorkspace(state, Code.mainWorkspace);
    // Resize the gui.
    Code.BlocklyWorkspaceOnresize();
    Code.changeFontFamily(window.localStorage.getItem('choosedFont'));
    changeTheme(localStorage.getItem('choosedTheme'));
};

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
        } else document.getElementById('fullScreenButton').style.display = 'inline';
        document.getElementById('verifyButton').disabled = false;
        document.getElementById('serialButton').disabled = false;
        document.getElementById('uploadButton').disabled = false;
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
        // hide everything relative to arduino-cli or nodejs if online
        var elmts = getElementsByClass("CLI", null, null);
        for (var i = 0; i < elmts.length; i++)
            elmts[i].disabled = true;
    }
    if (!navigator.serial)
        document.getElementById('serialMonitorButton').disabled = true;
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
};

function toggleAccessibilityMode(state) {
    if (state) {
        Code.navigationController.enable(Code.mainWorkspace);
    } else {
        Code.navigationController.disable(Code.mainWorkspace);
    }
};

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
};

function toggleMinimap(state) {
    if (state === true) {
        document.getElementById("minimapDiv").style.display = "block";
    } else {
        document.getElementById("minimapDiv").style.display = "none";
    }
};

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
};