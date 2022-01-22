/**
 * @license
 * Copyright 2020 Sébastien CANET
 * SPDX-License-Identifier: BSD-3-Clause
 */

/**
 * @fileoverview JS function for intialisation, forked from https://github.com/google/blockly/commit/4e2f8e6e02b0473a86330eb7414794e6bfea430e.
 * @author scanet@libreduc.cc (Sébastien CANET)
 */

Code.imageSize = 32;

/**
 * Load blocks saved in session/local storage.
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
    if (loadOnce) {
        // Language switching stores the blocks during the reload.
        delete window.sessionStorage.loadOnceBlocks;
        var xml = Blockly.Xml.textToDom(loadOnce);
        Blockly.Xml.domToWorkspace(xml, Code.mainWorkspace);
    } else if (defaultXml) {
        // Load the editor with default starting blocks.
        var xml = Blockly.Xml.textToDom(defaultXml);
        Blockly.Xml.domToWorkspace(xml, Code.mainWorkspace);
    }
};

/**
 * Populate the currently selected pane with content generated from the blocks.
 * freely inspired from Carlosperate's Ardublockly work
 */
var PREVIOUS_CODE_ = '';
Code.renderContent = function() {
    var generatedCode = Blockly.Arduino.workspaceToCode(Blockly.getMainWorkspace());
    var previousCode = document.getElementById('content_pre_code').innerHTML;
    if (generatedCode != PREVIOUS_CODE_) {
        if (Code.editor) {
            if (document.getElementById('content_diffCode_Monaco').style.display == 'block')
                Code.diffEditor.getOriginalEditor().setValue(generatedCode);
            else
                Code.editor.setValue(generatedCode);
        }
        var diff = Diff.diffWords(PREVIOUS_CODE_, generatedCode);
        var resultStringArray = [];
        for (var i = 0; i < diff.length; i++) {
            if (!diff[i].removed) {
                var escapedCode = diff[i].value.replace(/</g, '&lt;')
                    .replace(/>/g, '&gt;');
                if (diff[i].added) {
                    resultStringArray.push(
                        '<span class="code_highlight_new">' + escapedCode + '</span>');
                } else {
                    resultStringArray.push(escapedCode);
                }
            }
        }
        document.getElementById('content_pre_code').innerHTML = prettyPrintOne(resultStringArray.join(''), 'cpp', false);
        PREVIOUS_CODE_ = generatedCode;
    } else document.getElementById('content_pre_code').innerHTML = previousCode;
}



//define resizable workspace
Code.BlocklyWorkspaceOnresize = function(e) {
    var blocklyArea = document.getElementById('content_area');
    var blocklyDiv = document.getElementById('content_blocks');
    var element = blocklyArea;
    var x = 0;
    var y = 0;
    do {
        x += element.offsetLeft;
        y += element.offsetTop;
        element = element.offsetParent;
    } while (element);
    blocklyDiv.style.left = x + 'px';
    blocklyDiv.style.top = y + 'px';
    blocklyDiv.style.width = blocklyArea.offsetWidth + 'px';
    blocklyDiv.style.height = blocklyArea.offsetHeight + 'px';
    Blockly.svgResize(Code.mainWorkspace);
    // TODO yet to finish...
    // const metrics = Code.mainWorkspace.getMetrics();
    // if (Code.mainWorkspace.RTL) {
    //     blocklyDiv.style.left = metrics.absoluteLeft + 'px';
    //     blocklyDiv.style.right = 'auto';
    // } else {
    //     blocklyDiv.style.left = 'auto';
    //     if (metrics.toolboxPosition === Blockly.TOOLBOX_AT_RIGHT) {
    //         blocklyDiv.style.right = metrics.toolboxWidth + 'px';
    //     } else {
    //         blocklyDiv.style.right = '0';
    //     }
    // }
    // blocklyDiv.style.top = metrics.absoluteTop + 'px';
};

/**
 * Javascript equivalent o $.get() from jQuery
 */
Code.urlGet = async function(url, fecthMethod, callback, params = null) {
    var obj;
    if (window.fetch) {
        await fetch(url, {
                method: fecthMethod,
                params
            })
            .then(response => {
                obj = response.text();
            })
            .catch(error => Blockly.alert("Erreur : " + error));
    } else {
        try {
            obj = new XMLHttpRequest();
        } catch (e) {
            try {
                obj = new ActiveXObject("Msxml2.XMLHTTP");
            } catch (e) {
                try {
                    obj = new ActiveXObject("Microsoft.XMLHTTP");
                } catch (e) {
                    alert("Your browser does not support Ajax.");
                    return false;
                }
            }
        }
        obj.onreadystatechange = function() {
            if (obj.readyState == 4) {
                callback(obj);
            }
        }
        obj.open(fecthMethod, url, true);
        obj.send(params);
    }
    return obj;
}

/**
 * Initialize Blockly.  Called on page load.
 */
Code.init = async function() {
    // board menu as  URL choice
    Code.setBoard();
    Code.initLanguage();
    setOnOffLine();
    collapsibleContentInit();
    var rtl = Code.isRtl();

    for (var messageKey in MSG) {
        if (messageKey.indexOf('cat') === 0) {
            Blockly.Msg[messageKey.toUpperCase()] = MSG[messageKey];
        }
    }
    var match = location.search.match(/renderer=([^&]+)/);
    var renderer = match ? match[1] : 'thrasos';
    document.forms.options.elements.rendererMenu.value = renderer;
    Code.genWorkspace(rtl, Code.buildToolbox(), renderer);
    Code.buildControlPanelForToolbox();
    // Skill level menu
    match = location.search.match(/level=([^&]+)/);
    var level = match ? match[1] : 'skill1';
    document.forms.options.elements.levelMenu.value = level;
    Code.changeLevel(level);
    levelMenu.addEventListener('change', Code.changeLevel, true);
    Code.addPluginToWorkspace();
    // add plugin disable-top-blocks
    // Code.mainWorkspace.addChangeListener(Blockly.Events.disableOrphans);
    // const disableTopBlocksPlugin = new DisableTopBlocks();
    // disableTopBlocksPlugin.init();
    Code.BlocklyWorkspaceOnresize();
    window.addEventListener('resize', Code.BlocklyWorkspaceOnresize, false);
    //define resizable workspace
    var blocklyArea = document.getElementById('content_area');
    var blocklyDiv = document.getElementById('content_blocks');
    // const metrics = Code.mainWorkspace.getMetrics();
    var BlocklyWorkspaceOnresize = function(e) {
        var element = blocklyArea;
        var x = 0;
        var y = 0;
        do {
            x += element.offsetLeft;
            y += element.offsetTop;
            element = element.offsetParent;
        } while (element);
        blocklyDiv.style.left = x + 'px';
        blocklyDiv.style.top = y + 'px';
        blocklyDiv.style.width = blocklyArea.offsetWidth + 'px';
        blocklyDiv.style.height = blocklyArea.offsetHeight + 'px';
        Blockly.svgResize(Code.mainWorkspace);
        // TODO yet to finish...
        // if (Code.mainWorkspace.RTL) {
        //     blocklyDiv.style.left = metrics.absoluteLeft + 'px';
        //     blocklyDiv.style.right = 'auto';
        // } else {
        //     blocklyDiv.style.left = 'auto';
        //     if (metrics.toolboxPosition === Blockly.TOOLBOX_AT_RIGHT) {
        //         blocklyDiv.style.right = metrics.toolboxWidth + 'px';
        //     } else {
        //         blocklyDiv.style.right = '0';
        //     }
        // }
        // blocklyDiv.style.top = metrics.absoluteTop + 'px';
    };
    BlocklyWorkspaceOnresize();
    Blockly.svgResize(Code.mainWorkspace);
    window.addEventListener('resize', BlocklyWorkspaceOnresize, false);
    // Hook a save function onto unload.
    window.addEventListener('unload', auto_save_and_restore_blocks, false);
    if ('BlocklyStorage' in window) {
        BlocklyStorage.backupOnUnload(Code.mainWorkspace);
    }

    //change theme color
    match = location.search.match(/theme=([^&]+)/);
    var theme = match ? match[1] : 'Zelos';
    document.forms.options.elements.themeMenu.value = theme;
    changeTheme(theme);

    //keyboard nav attribution
    var actions = [
        Code.navigationController.ACTION_PREVIOUS,
        Code.navigationController.ACTION_OUT,
        Code.navigationController.ACTION_NEXT,
        Code.navigationController.ACTION_IN,
        Code.navigationController.ACTION_INSERT,
        Code.navigationController.ACTION_MARK,
        Code.navigationController.ACTION_DISCONNECT,
        Code.navigationController.ACTION_TOOLBOX,
        Code.navigationController.ACTION_EXIT,
        Code.navigationController.ACTION_MOVE_WS_CURSOR_UP,
        Code.navigationController.ACTION_MOVE_WS_CURSOR_LEFT,
        Code.navigationController.ACTION_MOVE_WS_CURSOR_DOWN,
        Code.navigationController.ACTION_MOVE_WS_CURSOR_RIGHT
    ];
    // createKeyMappingList(actions);

    // function used for dragging and moving splitted windows
    // needs BlocklyWorkspaceOnresize function defined ahead
    function manageResize(md, sizeProp, posProp) {
        var prev = md.target.previousElementSibling;
        var next = md.target.nextElementSibling;
        if (!prev || !next) {
            return;
        }
        md.preventDefault();
        var prevSize = prev[sizeProp];
        var nextSize = next[sizeProp];
        var sumSize = prevSize + nextSize;
        var prevGrow = Number(prev.style.flexGrow);
        var nextGrow = Number(next.style.flexGrow);
        var sumGrow = prevGrow + nextGrow;
        var lastPos = md[posProp];

        function onMouseMove(mm) {
            var pos = mm[posProp];
            var d = pos - lastPos;
            prevSize += d;
            nextSize -= d;
            if (prevSize < 0) {
                nextSize += prevSize;
                pos -= prevSize;
                prevSize = 0;
            }
            if (nextSize < 0) {
                prevSize += nextSize;
                pos += nextSize;
                nextSize = 0;
            }
            var prevGrowNew = sumGrow * (prevSize / sumSize);
            var nextGrowNew = sumGrow * (nextSize / sumSize);
            prev.style.flexGrow = prevGrowNew;
            next.style.flexGrow = nextGrowNew;
            lastPos = pos;
            Code.BlocklyWorkspaceOnresize();
            if (Code.editor)
                Code.editor.layout();
            //hide button if div si too thin
            if (document.getElementById("content_code").offsetWidth < 50) {
                document.getElementById("content_code_buttons").style.visibility = 'hidden';
            } else {
                document.getElementById("content_code_buttons").style.visibility = 'visible';
            }
        }

        function onMouseUp(mu) {
            const html = document.querySelector('html');
            html.style.cursor = 'default';
            if (posProp === 'pageX') {
                md.target.style.cursor = 'ew-resize';
            } else {
                md.target.style.cursor = 'ns-resize';
            }
            window.removeEventListener("mousemove", onMouseMove);
            window.removeEventListener("mouseup", onMouseUp);
        }
        window.addEventListener("mousemove", onMouseMove);
        window.addEventListener("mouseup", onMouseUp);
    }

    function setupResizerEvents() {
        document.body.addEventListener("mousedown", function(md) {
            const html = document.querySelector('html');
            var target = md.target;
            if (target.nodeType !== 1 || target.tagName !== "FLEX-RESIZER") {
                return;
            }
            var parent = target.parentNode;
            var h = parent.classList.contains("wrapper_cell");
            var v = parent.classList.contains("content_wrapper");
            if (h && v) {
                return;
            } else if (h) {
                target.style.cursor = 'col-resize';
                html.style.cursor = 'col-resize'; // avoid cursor's flickering
                manageResize(md, "offsetWidth", "pageX");
            } else if (v) {
                target.style.cursor = 'row-resize';
                html.style.cursor = 'row-resize'; // avoid cursor's flickering
                manageResize(md, "offsetHeight", "pageY");
            }
        });
    }
    setupResizerEvents();

    Code.renderContent();
    Code.sketchNameSizeEffect();
    Code.sketchNameSet();
    Code.mainWorkspace.addChangeListener(Code.renderContent);
    sessionStorage.setItem('toolboxSize', Code.mainWorkspace.getToolbox().getWidth());
    // Code.filterToolbox();
    // load blocks stored in session or passed by url
    var urlFile = Code.getStringParamFromUrl('url', '');
    var loadOnce = null;
    try {
        loadOnce = sessionStorage.getItem('loadOnceBlocks');
    } catch (e) {
        // Firefox sometimes throws a SecurityError when accessing localStorage.
        // Restarting Firefox fixes this, so it looks like a bug.
    }
    if (urlFile) {
        var distantData = await Code.urlGet(urlFile, 'get', function(obj) {});
        distantData = Blockly.Xml.textToDom(distantData);
        if (loadOnce != null) {
            Blockly.confirm(MSG['xmlLoad'], function(response) {
                if (response) {
                    //once loaded blocks but replace
                    Blockly.Xml.clearWorkspaceAndLoadFromXml(distantData, Code.mainWorkspace);
                } else {
                    //once loaded and merge
                    Blockly.Xml.domToWorkspace(Blockly.Xml.textToDom(loadOnce), Code.mainWorkspace);
                    Blockly.Xml.appendDomToWorkspace(distantData, Code.mainWorkspace);
                }
            })
        } else {
            // no blocks, load url
            Blockly.Xml.domToWorkspace(distantData, Code.mainWorkspace);
        }
    } else {
        //no URL, load blocks (or not, depends if load once/already blocks)
        Code.loadBlocks();
        // sessionStorage.removeItem('loadOnceBlocks');
    }
};

Code.addPluginToWorkspace = function() {
    Code.mainWorkspace.configureContextMenu = configureContextualMenu.bind(Code.mainWorkspace);
    //add plugin keyboard navigation
    Code.navigationController = new NavigationController();
    Code.navigationController.init();
    Code.navigationController.addWorkspace(Code.mainWorkspace);
    //add plugin workspace search
    const workspaceSearch = new WorkspaceSearch(Code.mainWorkspace);
    workspaceSearch.init();
    //add plugin zoom-to-fit
    const zoomToFit = new ZoomToFitControl(Code.mainWorkspace);
    zoomToFit.init();
    //add workspace backpack plugin
    const backpackOptions = {
        contextMenu: {
            emptyBackpack: true,
            removeFromBackpack: true,
            copyToBackpack: true,
            copyAllToBackpack: true,
            pasteAllToBackpack: true,
            disablePreconditionChecks: true,
        },
    };
    const backpack = new Backpack(Code.mainWorkspace, backpackOptions);
    backpack.init();
}

/**
 * Initialize the page language.
 */
Code.initLanguage = function() {
    // Set the HTML's language and direction.
    var rtl = Code.isRtl();
    document.dir = rtl ? 'rtl' : 'ltr';
    document.head.parentElement.setAttribute('lang', Code.LANG);

    // Sort languages alphabetically.
    var languages = [];
    for (var lang in Code.LANGUAGE_NAME) {
        languages.push([Code.LANGUAGE_NAME[lang], lang]);
    }
    var comp = function(a, b) {
        // Sort based on first argument ('English', 'Русский', '简体字', etc).
        if (a[0] > b[0])
            return 1;
        if (a[0] < b[0])
            return -1;
        return 0;
    };
    languages.sort(comp);
    // Populate the language selection menu.
    var languageMenu = document.getElementById('languageMenu');
    languageMenu.options.length = 0;
    for (var i = 0; i < languages.length; i++) {
        var tuple = languages[i];
        var lang = tuple[tuple.length - 1];
        var option = new Option(tuple[0], lang);
        if (lang === Code.LANG) {
            option.selected = true;
        }
        languageMenu.options.add(option);
    }
    Code.injectLanguageStrings();
    languageMenu.addEventListener('change', Code.changeLanguage, true);
}

Code.injectLanguageStrings = function() {
    iconsButtonMouserOver();
    document.title = MSG['title'];
    document.getElementById('btn_fake_min').title = MSG['btnMinimize'];
    document.getElementById('btn_fake_max').title = MSG['btnMaximize'];
    document.getElementById('btn_fake_close').title = MSG['btnClose'];
    //change Blockly title buttons by this one
    document.getElementById('languageSpan').textContent = MSG['languageSpan'];
    document.getElementById('levelSpan').textContent = MSG['levelSpan'];
    document.getElementById('skill1_menu').textContent = MSG['skill1_menu_span'];
    document.getElementById('skill2_menu').textContent = MSG['skill2_menu_span'];
    document.getElementById('skill3_menu').textContent = MSG['skill3_menu_span'];
    document.getElementById('interfaceColorSpan').textContent = MSG['interfaceColorSpan'];
    document.getElementById('codeEditorColorSpan').textContent = MSG['codeEditorColorSpan'];
    document.getElementById('themeSpan').textContent = MSG['themeSpan'];
    document.getElementById('renderSpan').textContent = MSG['renderSpan'];
    document.getElementById('serialButton').title = MSG['serialButtonSpan'];
    document.getElementById('fullScreenButton').title = MSG['fullScreenButton_span'];
    document.getElementById('undoButton').title = MSG['undoButton_span'];
    document.getElementById('redoButton').title = MSG['redoButton_span'];
    document.getElementById('verifyButton').title = MSG['verifyButton_span'];
    document.getElementById('uploadButton').title = MSG['uploadButton_span'];
    document.getElementById('saveCodeButton').title = MSG['saveCodeButton_span'];
    document.getElementById('newButton').title = MSG['newButton_span'];
    document.getElementById('saveXMLButton').title = MSG['saveXMLButton_span'];
    document.getElementById('loadXMLfakeButton').title = MSG['loadXMLfakeButton_span'];
    document.getElementById('resetButton').title = MSG['resetButton_span'];
    document.getElementById('newButton_span_menu').textContent = MSG['newButton_span'];
    document.getElementById('loadXMLfakeButton_span_menu').textContent = MSG['loadXMLfakeButton_span'];
    document.getElementById('saveXMLButton_span_menu').textContent = MSG['saveXMLButton_span'];
    document.getElementById('saveCodeButton_span_menu').textContent = MSG['saveCodeButton_span'];
    document.getElementById('resetButton_span_menu').textContent = MSG['resetButton_span'];
    document.getElementById('helpButton_span_menu').textContent = MSG['helpButton_span'];
    // document.getElementById('parametersButton_span_menu').textContent = MSG['setup_sideButton_span'];
    document.getElementById('lateral-panel-setup-label').title = MSG['setup_sideButton_span'];
    document.getElementById('sketch_name_wrapper').title = MSG['sketch_name_wrapper'];
    document.getElementById('sketch_name').title = MSG['sketch_name_wrapper'];
    document.getElementsByName('sketch_name')[0].placeholder = MSG['sketch_name_default'];
    document.getElementById('helpButton').title = MSG['helpButton_span'];
    document.getElementById('helpModalSpan_title').innerHTML = MSG['helpModalSpan_title'];
    document.getElementById('helpModalSpan_text').innerHTML = MSG['helpModalSpan_text'];
    document.getElementById('copyCodeButton').title = MSG['copyCodeButton_span'];
    document.getElementById('keyMappingModalSpan').textContent = MSG['keyMappingModalSpan'];
    document.getElementById('detailedCompilation_span').textContent = MSG['detailedCompilation_span'];
    // menu serial
    document.getElementById('serialMonitorButton_span_menu').textContent = MSG['serialMonitorButton_span'];
    document.getElementById('nodeRedFlowButton_span_menu').textContent = MSG['nodeRedFlowButton_span'];
    document.getElementById('supervisionButton_span_menu').textContent = MSG['supervisionButton_span'];
    // menu tools
    document.getElementById('toolsButton').title = MSG['toolsButton_span'];
    document.getElementById('wiringButton').title = MSG['wiringButton_span'];
    document.getElementById('factoryButton').title = MSG['factoryButton_span'];
    document.getElementById('factoryButton').title = MSG['factoryButton_span'];
    document.getElementById('htmlButton').title = MSG['htmlButton_span'];
    document.getElementById('colorConversionButton').title = MSG['colorConversionButton_span'];
    document.getElementById('dataConversionButton').title = MSG['dataConversionButton_span'];
    document.getElementById('wiringButton_span_menu').textContent = MSG['wiringButton_span'];
    document.getElementById('factoryButton_span_menu').textContent = MSG['factoryButton_span'];
    document.getElementById('htmlButton_span_menu').textContent = MSG['htmlButton_span'];
    document.getElementById('colorConversionButton_span_menu').textContent = MSG['colorConversionButton_span'];
    document.getElementById('dataConversionButton_span_menu').textContent = MSG['dataConversionButton_span'];
    // menu IoT
    document.getElementById('iotConnectButton').title = MSG['iotConnectButton_span'];
    document.getElementById('launchWebServer').title = MSG['launchWebServer_span'];
    document.getElementById('papyrusConnect').title = MSG['papyrusConnect_span'];
    // document.getElementById('blynkConnect').title = MSG['blynkConnect_span'];
    document.getElementById('serialConnectIOT').title = MSG['serialConnectIOT_span'];
    document.getElementById('launchRedServer_span_menu').textContent = MSG['launchRedServer_span'];
    document.getElementById('launchWebServer_span_menu').textContent = MSG['launchWebServer_span'];
    document.getElementById('papyrusConnect_span_menu').textContent = MSG['papyrusConnect_span'];
    document.getElementById('ArrowheadConfiguration_span_menu').textContent = MSG['ArrowheadConfiguration_span_menu'];
    // document.getElementById('blynkConnect_span_menu').textContent = MSG['blynkConnect_span'];
    document.getElementById('serialConnectIOT_span_menu').textContent = MSG['serialConnectIOT_span'];
    // CLI panel
    document.getElementById('CLI_title_span').textContent = MSG['CLI_title_span'];
    document.getElementById('CLI_githubLinkButton').title = MSG['CLI_githubLinkButton_span'];
    document.getElementById('coreUpdateButton').title = MSG['coreUpdateButton_span'];
    document.getElementById('cleanCLIcacheButton').title = MSG['cleanCLIcacheButton_span'];
    document.getElementById('listBoardsButton').title = MSG['listBoardsButton_span'];
    document.getElementById('installBoardsButton').title = MSG['installBoardsButton_span'];
    document.getElementById('searchlLibButton').title = MSG['searchlLibButton_span'];
    document.getElementById('installLibButton').title = MSG['installLibButton_span'];
    document.getElementById('installBoard_title_span').textContent = MSG['installBoard_title_span'];
    document.getElementById('searchlLib_title_span').textContent = MSG['searchlLib_title_span'];
    document.getElementById('installLib_title_span').textContent = MSG['installLib_title_span'];
    //setup panel
    document.getElementById('config_UI_title_span').textContent = MSG['config_UI_title_span'];
    document.getElementById('highlightSpan').textContent = MSG['highlightSpan'];
    document.getElementById('minimapSpan').textContent = MSG['minimapSpan'];
    document.getElementById('accessibilitySpan').textContent = MSG['accessibilitySpan'];
    document.getElementById('defaultCursorSpan').textContent = MSG['defaultCursorSpan'];
    document.getElementById('basicCursorSpan').textContent = MSG['basicCursorSpan'];
    document.getElementById('lineCursorSpan').textContent = MSG['lineCursorSpan'];
    document.getElementById('keyMappingSpan').textContent = MSG['keyMappingSpan'];
    document.getElementById('themeClassicSpan').textContent = MSG['themeClassicSpan'];
    document.getElementById('themeModernSpan').textContent = MSG['themeModernSpan'];
    document.getElementById('themeDeuteranopiaSpan').textContent = MSG['themeDeuteranopiaSpan'];
    document.getElementById('themeTritanopiaSpan').textContent = MSG['themeTritanopiaSpan'];
    document.getElementById('themeZelosSpan').textContent = MSG['themeZelosSpan'];
    document.getElementById('themeHighContrastSpan').textContent = MSG['themeHighContrastSpan'];
    document.getElementById('themeDarkSpan').textContent = MSG['themeDarkSpan'];
    document.getElementById('themeBwSpan').textContent = MSG['themeBwSpan'];
    document.getElementById('displaySpan').textContent = MSG['displaySpan'];
    document.getElementById('displayChoiceButtons').textContent = MSG['displayChoiceButtons'];
    document.getElementById('displayChoiceBandT').textContent = MSG['displayChoiceBandT'];
    document.getElementById('displayChoiceText').textContent = MSG['displayChoiceText'];
    document.getElementById('fontSpan').textContent = MSG['fontSpan'];
    document.getElementById('fontSizeSpan').textContent = MSG['fontSizeSpan'];
    document.getElementById('optionFontSizeBlocks').textContent = MSG['optionFontSizeBlocks'];
    document.getElementById('optionFontSizeEditor').textContent = MSG['optionFontSizeEditor'];
    document.getElementById('optionFontSizePage').textContent = MSG['optionFontSizePage'];
    document.getElementById('optionFontSpacingPage').textContent = MSG['optionFontSpacingPage'];
    //categories panel
    document.getElementById('categories_title_span').textContent = MSG['categories_title_span'];
    document.getElementById('categories_content_selectAll_span').textContent = MSG['categories_content_selectAll_span'];
    document.getElementsByName('categories_search')[0].placeholder = MSG['categories_search_placeholder'];
    //IoT panel
    document.getElementById('iot_title_span').textContent = MSG['iot_title_span'];
    document.getElementById('papyrusConnect_helper_span').textContent = MSG['papyrusConnect_helper_span'];
    document.getElementById('papyrusConfiguration_id_span').textContent = MSG['papyrusConfiguration_id_span'];
    document.getElementById('papyrusConfiguration_name_span').textContent = MSG['papyrusConfiguration_name_span'];
    document.getElementById('papyrusConfiguration_save_span').textContent = MSG['papyrusConfiguration_save_span'];
    document.getElementById('ArrowheadConfiguration_helper_span').textContent = MSG['ArrowheadConfiguration_helper_span'];
    document.getElementById('ArrowheadConfiguration_ServReg_span').textContent = MSG['ArrowheadConfiguration_ServReg_span'];
    document.getElementById('ArrowheadConfiguration_provider_span').textContent = MSG['ArrowheadConfiguration_provider_span'];
    document.getElementById('ArrowheadConfiguration_consumer_span').textContent = MSG['ArrowheadConfiguration_consumer_span'];
    document.getElementById('ArrowheadConfiguration_auth_span').textContent = MSG['ArrowheadConfiguration_auth_span'];
    document.getElementById('ArrowheadConfiguration_orch_span').textContent = MSG['ArrowheadConfiguration_orch_span'];
    //board list modal
    document.getElementById('boardListModalHeader_span').textContent = MSG['boardListModalHeader_span'];
    document.getElementById('boardListModalButton_span').textContent = MSG['boardListModalButton_span'];
    document.getElementById('boardModal_connect').textContent = MSG['boardModal_connect'];
    document.getElementById('boardModal_voltage').textContent = MSG['boardModal_voltage'];
    document.getElementById('boardModal_voltage_normal').textContent = MSG['boardModal_voltage_normal'];
    document.getElementById('boardModal_voltage_maxi').textContent = MSG['boardModal_voltage_maxi'];
    document.getElementById('boardModal_cpu').textContent = MSG['boardModal_cpu'];
    document.getElementById('boardModal_speed').textContent = MSG['boardModal_speed'];
    document.getElementById('boardModal_inout').textContent = MSG['boardModal_inout'];
    document.getElementById('boardModal_in_analog').textContent = MSG['boardModal_in_analog'];
    document.getElementById('boardModal_out_analog').textContent = MSG['boardModal_out_analog'];
    document.getElementById('boardModal_i_max_out').textContent = MSG['boardModal_i_max_out'];
    document.getElementById('boardModal_i_max3').textContent = MSG['boardModal_i_max3'];
    document.getElementById('boardModal_i_max_5').textContent = MSG['boardModal_i_max_5'];
    document.getElementById('boardModal_flash').textContent = MSG['boardModal_flash'];
    document.getElementById('boardModal_sram').textContent = MSG['boardModal_sram'];
    document.getElementById('boardModal_eeprom').textContent = MSG['boardModal_eeprom'];
    // serial modal
    document.getElementById('portListModalHeader_span').textContent = MSG['portListModalHeader_span'];
    document.getElementsByName('inputTextSerial')[0].placeholder = MSG['inputTextSerial'];
    document.getElementById('btn_serialSend').title = MSG['btn_serialSend_span'];
    document.getElementById('btn_serialSend').value = MSG['btn_serialSend_span'];
    document.getElementById('btn_serialConnect').title = MSG['btn_serialConnect_span'];
    document.getElementById('btn_serialConnect').value = MSG['btn_serialConnect_span'];
    document.getElementById('btn_serialPeekClear').title = MSG['btn_serialPeekClear_span'];
    document.getElementById('btn_serialPeekClear').value = MSG['btn_serialPeekClear_span'];
    document.getElementById('btn_serialAddTimeStamp_span').textContent = MSG['btn_serialAddTimeStamp_span'];
    document.getElementById('btn_serialPeekCSV').title = MSG['btn_serialPeekCSV_span'];
    document.getElementById('btn_serialPeekCSV').value = MSG['btn_serialPeekCSV_span'];
    document.getElementById('btn_serialPeekJSON').title = MSG['btn_serialPeekJSON_span'];
    document.getElementById('btn_serialPeekJSON').value = MSG['btn_serialPeekJSON_span'];
    document.getElementById('btn_serialChart').title = MSG['btn_serialChart_span'];
    document.getElementById('btn_serialChart').value = MSG['btn_serialChart_span'];
    document.getElementById('btn_serialChartPause').title = MSG['btn_serialChartPause_span'];
    document.getElementById('btn_serialChartPause').value = MSG['btn_serialChartPause_span'];
    document.getElementById('btn_serialChartMin_span').textContent = MSG['btn_serialChartMin_span'];
    document.getElementById('btn_serialChartMax_span').textContent = MSG['btn_serialChartMax_span'];
    document.getElementById('btn_serialChartNb_span').textContent = MSG['btn_serialChartNb_span'];
    document.getElementById('input_serialChartJSONheaders_span').textContent = MSG['input_serialChartJSONheaders_span'];
    // code editor modal
    document.getElementById('editorMonacoModal_titlebar').textContent = MSG['editorMonacoModal_titlebar'];
    // circuitJS modal
    document.getElementById('circuitJSmodalTitle').textContent = MSG['circuitJSmodalTitle_titlebar'];
    // serial modal
    document.getElementById('serialModalTitle_titlebar_span').textContent = MSG['serialModalTitle_titlebar_span'];
    //keyboard nav
    // Blockly.navigation.ACTION_PREVIOUS.name = MSG['actionName0'];
    // Blockly.navigation.ACTION_OUT.name = MSG['actionName1'];
    // Blockly.navigation.ACTION_NEXT.name = MSG['actionName2'];
    // Blockly.navigation.ACTION_IN.name = MSG['actionName3'];
    // Blockly.navigation.ACTION_INSERT.name = MSG['actionName4'];
    // Blockly.navigation.ACTION_MARK.name = MSG['actionName5'];
    // Blockly.navigation.ACTION_DISCONNECT.name = MSG['actionName6'];
    // Blockly.navigation.ACTION_TOOLBOX.name = MSG['actionName7'];
    // Blockly.navigation.ACTION_EXIT.name = MSG['actionName8'];
    // Blockly.navigation.ACTION_MOVE_WS_CURSOR_UP.name = MSG['actionName9'];
    // Blockly.navigation.ACTION_MOVE_WS_CURSOR_LEFT.name = MSG['actionName10'];
    // Blockly.navigation.ACTION_MOVE_WS_CURSOR_DOWN.name = MSG['actionName11'];
    // Blockly.navigation.ACTION_MOVE_WS_CURSOR_RIGHT.name = MSG['actionName12'];

};

/**
 * Discard all blocks from the workspace.
 */
Code.discard = function() {
    var count = Code.mainWorkspace.getAllBlocks(false).length;
    if (count < 2) {
        Code.mainWorkspace.clear();
        if (window.location.hash) {
            window.location.hash = '';
        }
        return true;
    } else if (count > 0) {
        Blockly.confirm(Blockly.Msg['DELETE_ALL_BLOCKS'].replace('%1', count), function(confirm) {
            if (confirm || count < 2)
                Code.mainWorkspace.clear();
            if (window.location.hash) {
                window.location.hash = '';
            }
            return true;
        });
    }
};

// Load Blockly's language strings.
document.write('<script async src="./@blockly/msg/js/' + Code.LANG + '.js"></script>\n');

// Load language strings.
document.write('<script async src="./msg/UI_' + Code.LANG + '.js"></script>\n');
document.write('<script async src="./S4E/msg/blocks_' + Code.LANG + '.js"></script>\n');
document.write('<script async src="./S4E/msg/categories_' + Code.LANG + '.js"></script>\n');

window.addEventListener('load', Code.init);