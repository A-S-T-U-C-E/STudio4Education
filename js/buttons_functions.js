/**
 * @license
 * Copyright 2020 Sébastien CANET
 * SPDX-License-Identifier: BSD-3-Clause
 */

/**
 * @fileoverview Helper functions for buttons visible in UI.
 * @author scanet@libreduc.cc (SebCanet)
 */

/*
 * auto save and restore blocks
 */
function auto_save_and_restore_blocks() {
    // Store the blocks for the duration of the reload.
    var xml = Blockly.Xml.workspaceToDom(Code.mainWorkspace);
    var text = Blockly.Xml.domToText(xml);
    window.sessionStorage.loadOnceBlocks = text;
};

var fullScreen_ = false;

/**
 * Full screen, thanks to HTML5 API
 * @argument {type} _element 
 */
function fullScreen(_element) {
    var elementClicked = _element || document.documentElement;
    // HTML5
    if (document.fullscreenEnabled) {
        if (!document.fullscreenElement) {
            elementClicked.requestFullscreen();
            document.addEventListener('fullscreenchange', exitFullScreen, false);
        } else {
            exitFullScreen();
            document.exitFullscreen();
            document.removeEventListener('fullscreenchange', exitFullScreen, false);
        }
    } else
    // Chrome, Safari and Opera
    if (document.webkitFullscreenEnabled) {
        if (!document.webkitFullscreenElement) {
            elementClicked.webkitRequestFullscreen();
            document.addEventListener('webkitfullscreenchange', exitFullScreen, false);
        } else {
            exitFullScreen();
            document.webkitExitFullscreen();
            document.removeEventListener('webkitfullscreenchange', exitFullScreen, false);
        }
    } else
    // IE/Edge
    if (document.msFullscreenEnabled) {
        if (!document.msFullscreenElement) {
            elementClicked.msRequestFullscreen();
            document.addEventListener('MSFullscreenChange', exitFullScreen, false);
        } else {
            exitFullScreen();
            document.msExitFullscreen();
            document.removeEventListener('MSFullscreenChange', exitFullScreen, false);
        }
    }
};

function exitFullScreen() {
    if (fullScreen_ === false) {
        fullScreenButton.className = 'iconButtonsClicked';
        fullScreen_ = true;
    } else {
        fullScreenButton.className = 'iconButtonsTop';
        fullScreen_ = false;
    }
};

/**
 * Show or hide all block picture
 */
Code.imageBlocksBool = false;
Code.imageSize = 48;
Code.imageSizeOld = 48;

Code.blockPicture = function() {
    var xmlBlocks = Blockly.Xml.workspaceToDom(Code.mainWorkspace);
    Code.imageBlocksBool = !Code.imageBlocksBool;
    if (Code.imageBlocksBool) {
        document.getElementById("blocksPictureButton_span").classList.add('fa-eye-slash');
        document.getElementById("blocksPictureButton_span").classList.add('active');
        document.getElementById("blocksPictureButton_span").classList.remove('fa-eye');
        Code.imageSizeOld = Code.imageSize;
        Code.imageSize = 1;
    } else {
        document.getElementById("blocksPictureButton_span").classList.add('fa-eye');
        document.getElementById("blocksPictureButton_span").classList.remove('fa-eye-slash');
        document.getElementById('blocksPictureButton_span').classList.remove('active');
        Code.imageSize = Code.imageSizeOld;
    }
    Code.mainWorkspace.clear();
    Code.loadBlocks(Blockly.Xml.domToPrettyText(xmlBlocks));
};

/**
 * Copy code from div code_peek in clipboard system
 */
Code.copyToClipboard = function() {
    if (document.selection) { // IE
        var range = document.body.createTextRange();
        if (Code.editor)
            range.moveToElementText(Code.editor.getValue());
        else range.moveToElementText(Blockly.Arduino.workspaceToCode(Code.mainWorkspace));
        range.select();
        document.execCommand("copy");
    } else if (window.getSelection) {
        if (Code.editor)
            navigator.clipboard.writeText(Code.editor.getValue())
            .then(() => { console.log('Code copied!') })
            .catch((error) => { console.log('Copy failed! ${error}') });
        else
            navigator.clipboard.writeText(Blockly.Arduino.workspaceToCode(Code.mainWorkspace))
            .then(() => { console.log('Code copied!') })
            .catch((error) => { console.log('Copy failed! ${error}') });
    }
};

/**
 * modal controllers
 */
var dialogMonacoEditor;
let diffOrNot = false;
document.getElementById("content_code_Monaco").style.display = 'block';
document.getElementById("content_diffCode_Monaco").style.display = 'none';
Code.editorMonacoModalShow = function() {
    if (!dialogMonacoEditor)
        dialogMonacoEditor = new DialogBox('editorMonacoModal', callbackButtons);
    if (!Code.editor)
        Code.editor = monaco.editor.create(document.getElementById('content_code_Monaco'), {
            scrollBeyondLastLine: false,
            language: 'cpp',
            automaticLayout: true
        });
    document.getElementById("content_Monaco_editors").appendChild(document.getElementById("content_code_Monaco"));
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
    document.getElementById("content_Monaco_editors").appendChild(document.getElementById("content_diffCode_Monaco"));
    document.getElementById("content_code_Monaco").style.display = 'block';
    document.getElementById("content_diffCode_Monaco").style.display = 'none';
    document.getElementById("content_code_Monaco").style.width = '100%';
    document.getElementById("content_code_Monaco").style.height = '100%';
    Code.editor.setValue(Blockly.Arduino.workspaceToCode(Code.mainWorkspace));
    dialogMonacoEditor.showDialog();
    document.getElementById("openCodeButton").classList.remove("iconButtons");
    document.getElementById("openCodeButton").classList.add("iconButtonsClicked");

    function callbackButtons(btnName) {
        switch (btnName) {
            case 'editorMonacoModal_undo':
                Code.editor.trigger('aaaa', 'undo', 'aaaa');
                Code.editor.focus();
                Code.diffEditor.getModifiedEditor().trigger('aaaa', 'undo', 'aaaa');
                Code.diffEditor.getModifiedEditor().focus();
                break;
            case 'editorMonacoModal_redo':
                Code.editor.trigger('aaaa', 'redo', 'aaaa');
                Code.editor.focus();
                Code.diffEditor.getModifiedEditor().trigger('aaaa', 'redo', 'aaaa');
                Code.diffEditor.getModifiedEditor().focus();
                break;
            case 'editorMonacoModal_close':
                document.getElementById("openCodeButton").classList.remove("iconButtonsClicked");
                document.getElementById("openCodeButton").classList.add("iconButtons");
                document.getElementById("editorMonacoModal").style.display = "none";
                break;
            case 'editorMonacoModal_ok':
                if (diffOrNot === true) {
                    var codeModified = Code.diffEditor.getModifiedEditor().getValue();
                } else var codeModified = Code.editor.getValue();
                document.getElementById('content_pre_code').innerHTML = prettyPrintOne(codeModified, 'cpp', false);
                break;
            case 'editorMonacoModal_cancel':
                Code.diffEditor.getOriginalEditor().setValue(Blockly.Arduino.workspaceToCode(Code.mainWorkspace));
                Code.diffEditor.getModifiedEditor().setValue(Blockly.Arduino.workspaceToCode(Code.mainWorkspace));
                Code.editor.setValue(Blockly.Arduino.workspaceToCode(Code.mainWorkspace));
                document.getElementById('content_pre_code').innerHTML = Blockly.Arduino.workspaceToCode(Code.mainWorkspace);
                break;
            case 'editorMonacoModal_diff':
                if (diffOrNot === false) {
                    Code.diffEditor.getOriginalEditor().setValue(Blockly.Arduino.workspaceToCode(Code.mainWorkspace));
                    Code.diffEditor.getModifiedEditor().setValue(Code.editor.getValue());
                    document.getElementById("content_code_Monaco").style.display = 'none';
                    document.getElementById("content_diffCode_Monaco").style.display = 'block';
                    document.getElementById("content_diffCode_Monaco").style.width = '100%';
                    document.getElementById("content_diffCode_Monaco").style.height = '100%';
                } else {
                    Code.editor.setValue(Code.diffEditor.getModifiedEditor().getValue());
                    document.getElementById("content_code_Monaco").style.display = 'block';
                    document.getElementById("content_diffCode_Monaco").style.display = 'none';
                    document.getElementById("content_code_Monaco").style.width = '100%';
                    document.getElementById("content_code_Monaco").style.height = '100%';
                }
                diffOrNot = !diffOrNot;
                break;
            default:
                break;
        }
    }
};

Code.boardsListModalShow = function() {
    document.getElementById('overlayForModals').style.display = "block";
    document.getElementById('boardListModal').classList.add('show');
    for (var i = 0; i < document.getElementById("boardDescriptionSelector").length; i++)
        document.getElementById("boardDescriptionSelector").options[i].style.backgroundColor = 'white';
    if (document.getElementById("boardDescriptionSelector").value !== '') {
        document.getElementById("boardDescriptionSelector").options[sessionStorage.getItem('boardIndex')].style.backgroundColor = "yellow";
    }
    window.addEventListener('click', Code.boardsListModalHide, 'once');
    Code.boardDescription();
};
Code.portsListModalShow = async function() {
    document.getElementById('overlayForModals').style.display = "block";
    document.getElementById('portListModal').classList.add('show');
    var portValue = document.getElementById("serialMenu").value;
    if (portValue !== 'none') {
        document.getElementById("serialMenu").selectedIndex = portValue;
        document.getElementById("serialMenu").value = portValue;
    }
    window.addEventListener('click', Code.portsListModalHide, 'once');
};
Code.flowsListModalShow = function() {
    document.getElementById('overlayForModals').style.display = "block";
    document.getElementById('flowsListModal').classList.add('show');
    window.addEventListener('click', Code.flowsListModalHide, 'once');
};
document.getElementById("closeModalBoards").onclick = function() {
    document.getElementById('overlayForModals').style.display = "none";
    document.getElementById('boardListModal').classList.remove('show');
};
document.getElementById("closeModalPorts").onclick = function() {
    document.getElementById('overlayForModals').style.display = "none";
    document.getElementById('portListModal').classList.remove('show');
};
document.getElementById("closeModalFlows").onclick = function() {
    document.getElementById('overlayForModals').style.display = "none";
    document.getElementById('flowsListModal').classList.remove('show');
};
// When the user clicks anywhere outside of the modal, close it
Code.boardsListModalHide = function(event) {
    if (document.getElementById('boardListModal_content').contains(event.target)) {} else {
        document.getElementById('overlayForModals').style.display = "none";
        document.getElementById('boardListModal').classList.remove('show');
    }
};
Code.portsListModalHide = function(event) {
    if (document.getElementById('portListModal_content').contains(event.target)) {} else {
        document.getElementById('overlayForModals').style.display = "none";
        document.getElementById('portListModal').classList.remove('show');
    }
};
Code.flowsListModalHide = function(event) {
    if (document.getElementById('flowsListModal_content').contains(event.target)) {} else {
        document.getElementById('overlayForModals').style.display = "none";
        document.getElementById('flowsListModal').classList.remove('show');
    }
};

/**
 * change information in the boards modal
 **/
Code.boardDescription = function() {
    var boardValue = document.getElementById("boardDescriptionSelector").value;
    if (boardValue === '')
        boardValue = 'none';
    document.getElementById("board_mini_picture").setAttribute("src", profile[boardValue][0]['picture']);
    // document.getElementById("board_connect").textContent = profile[boardValue][0]['usb'];
    // document.getElementById("board_cpu").textContent = profile[boardValue][0]['cpu'];
    // document.getElementById("board_voltage").textContent = profile[boardValue][0]['voltage'];
    // document.getElementById("board_inout").textContent = profile[boardValue][0]['inout'];
};

/**
 * Undo/redo functions
 */
Code.Undo = function() {
    Code.mainWorkspace.undo(0);
};
Code.Redo = function() {
    Code.mainWorkspace.undo(1);
};

/**
 * Launch CircuitJS simulator
 */
var dialogCircuitJS;
Code.CircuitJS = function() {
    if (!dialogCircuitJS)
        dialogCircuitJS = new DialogBox('circuitJSmodal', callbackButtons);
    var ifrm = document.createElement("iframe");
    ifrm.setAttribute("src", "./tools/circuitjs/circuitjs.html?startCircuit=blank.txt&running=false");
    ifrm.style.width = "100%";
    ifrm.style.height = "100%";
    ifrm.id = "circuitFrame";
    document.getElementById("content_CircuitJS").appendChild(ifrm);
    var tag = document.createElement('script');
    tag.async = false;
    tag.src = './tools/circuitjs/avr8js/src.avr8js.js';
    document.body.appendChild(tag);

    dialogCircuitJS.showDialog();
    document.getElementById("compiler-output-text").style.display = "inline";
    document.getElementById("serial-output-text").style.display = "inline";
    document.getElementById("compiler-output-text").innerHTML = "";
    document.getElementById("serial-output-text").innerHTML = "";

    function callbackButtons(btnName) {
        switch (btnName) {
            case 'circuitJSmodal_close':
                document.getElementById("circuitJSmodal").style.display = "none";
                document.getElementById("compiler-output-text").style.display = "none";
                document.getElementById("serial-output-text").style.display = "none";
                break;
            default:
                break;
        }
    }
};

/*
 * Modify position of CircuitJS modal
 */
var _maximini = "mini";
var _leftright = "right";
const _circuitJSmodal = document.getElementById("circuitJSmodal");
let circuitJSmodal_old_X = 0;
let circuitJSmodal_old_Y = 0;
let circuitJSmodal_old_width = 0;
let circuitJSmodal_old_height = 0;

function circuitJSmodal_maxi_mini() {
    const icon = document.getElementById("circuitJSmodal_maximini").querySelector('em');
    if (_maximini == 'mini') {
        circuitJSmodal_old_X = _circuitJSmodal.getBoundingClientRect().left;
        circuitJSmodal_old_Y = _circuitJSmodal.getBoundingClientRect().top;
        circuitJSmodal_old_width = _circuitJSmodal.getBoundingClientRect().right - _circuitJSmodal.getBoundingClientRect().left;
        circuitJSmodal_old_height = _circuitJSmodal.getBoundingClientRect().bottom - _circuitJSmodal.getBoundingClientRect().top;
        icon.classList.remove('fa-window-maximize');
        icon.classList.add('fa-window-minimize');
        _circuitJSmodal.style.left = "0px";
        _circuitJSmodal.style.top = "0px";
        _circuitJSmodal.style.width = (window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth) + "px";
        _circuitJSmodal.style.height = (window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight) + "px";
        document.getElementById("content_CircuitJS").style.width = "100%";
        document.getElementById("circuitJSmodal_titlebar").style.width = "100%";
        _maximini = 'maxi';
    } else {
        icon.classList.remove('fa-window-minimize');
        icon.classList.add('fa-window-maximize');
        _circuitJSmodal.style.left = circuitJSmodal_old_X + "px";
        _circuitJSmodal.style.top = circuitJSmodal_old_Y + "px";
        _circuitJSmodal.style.width = circuitJSmodal_old_width + "px";
        _circuitJSmodal.style.height = circuitJSmodal_old_height + "px";
        document.getElementById("content_CircuitJS").style.width = "calc(100% - 32px)";
        document.getElementById("circuitJSmodal_titlebar").style.width = "calc(100% - 32px)";
        _maximini = 'mini';
    }
}

function circuitJSmodal_replace_Blockly() {
    const icon = document.getElementById("circuitJSmodal_replaceBlockly").querySelector('em');
    if (_leftright == 'right') {
        circuitJSmodal_old_X = _circuitJSmodal.getBoundingClientRect().left;
        circuitJSmodal_old_Y = _circuitJSmodal.getBoundingClientRect().top;
        circuitJSmodal_old_width = _circuitJSmodal.getBoundingClientRect().right - _circuitJSmodal.getBoundingClientRect().left;
        circuitJSmodal_old_height = _circuitJSmodal.getBoundingClientRect().bottom - _circuitJSmodal.getBoundingClientRect().top;
        icon.classList.remove('fa-angle-left');
        icon.classList.add('fa-angle-right');
        document.getElementById("content_blocks").appendChild(_circuitJSmodal);
        _circuitJSmodal.style.left = "0px";
        _circuitJSmodal.style.top = "0px";
        _circuitJSmodal.style.width = "100%";
        _circuitJSmodal.style.height = "100%";
        _leftright = 'left';
    } else {
        icon.classList.remove('fa-angle-right');
        icon.classList.add('fa-angle-left');
        document.body.appendChild(_circuitJSmodal);
        _circuitJSmodal.style.left = circuitJSmodal_old_X + "px";
        _circuitJSmodal.style.top = circuitJSmodal_old_Y + "px";
        _circuitJSmodal.style.width = circuitJSmodal_old_width + "px";
        _circuitJSmodal.style.height = circuitJSmodal_old_height + "px";
        document.getElementById("content_CircuitJS").style.width = "calc(100% - 32px)";
        document.getElementById("circuitJSmodal_titlebar").style.width = "calc(100% - 32px)";
        _leftright = 'right';
    }
}



/**
 * Launch blockFatcory with language argument
 */
Code.BlockFactory = function() {
    var lang = Code.getStringParamFromUrl('lang', '');
    if (!lang) {
        lang = "en";
    }
    parent.open('tools/blockFactory/blockFactory.html?lang=' + lang);
};

/**
 * Creates an INO file containing the Arduino code from the Blockly workspace and
 * prompts the users to save it into their local file system.
 */
Code.newProject = function() {
    var count = Code.mainWorkspace.getAllBlocks().length;
    if (count > 0) {
        Blockly.confirm(Blockly.Msg['DELETE_ALL_BLOCKS'].replace('%1', count), function(confirm) {
            if (confirm)
                Code.mainWorkspace.clear();
            return true;
        });
    }
};

/**
 * Creates an INO file containing the Arduino code from the Blockly workspace and
 * prompts the users to save it into their local file system.
 */
Code.saveCodeFile = function() {
    var utc = new Date().toJSON().slice(0, 10).replace(/-/g, '_');
    var dataToSave = Blockly.Arduino.workspaceToCode(Code.mainWorkspace);
    var blob = new Blob([dataToSave], {
        type: 'text/plain;charset=utf-8'
    });
    Blockly.prompt(MSG['save_span'], document.getElementById('sketch_name').value, function(fileNameSave) {
        if (fileNameSave) {
            var fakeDownloadLink = document.createElement("a");
            fakeDownloadLink.download = fileNameSave + ".ino";
            fakeDownloadLink.href = window.URL.createObjectURL(blob);
            fakeDownloadLink.onclick = function destroyClickedElement(event) {
                document.body.removeChild(event.target);
            };
            fakeDownloadLink.style.display = "none";
            document.body.appendChild(fakeDownloadLink);
            fakeDownloadLink.click();
        }
    });
};

/**
 * Creates an XML file containing the blocks from the Blockly workspace and
 * prompts the users to save it into their local file system.
 */
Code.saveXmlBlocklyFile = function() {
    var xmlData = Blockly.Xml.workspaceToDom(Code.mainWorkspace);
    var dataToSave = Blockly.Xml.domToPrettyText(xmlData);
    var blob = new Blob([dataToSave], {
        type: 'text/xml;charset=utf-8'
    });
    Blockly.prompt(MSG['save_span'], document.getElementById('sketch_name').value, function(fileNameSave) {
        if (fileNameSave) {
            var fakeDownloadLink = document.createElement("a");
            fakeDownloadLink.download = fileNameSave + ".S4E";
            fakeDownloadLink.href = window.URL.createObjectURL(blob);
            fakeDownloadLink.onclick = function destroyClickedElement(event) {
                document.body.removeChild(event.target);
            };
            fakeDownloadLink.style.display = "none";
            document.body.appendChild(fakeDownloadLink);
            fakeDownloadLink.click();
        }
    });
};

/**
 * Load blocks from local file.
 */
Code.loadXmlBlocklyFile = function() {
    // Create event listener function
    var parseInputXMLfile = function(e) {
        var files = e.target.files;
        var reader = new FileReader();
        reader.onloadend = function() {
            // var success = Code.loadBlocksfromXml(reader.result);
            // Destroying the element after being clicked
            var success = false;
            if (reader.result != null) {
                Code.loadBlocksfromXml(reader.result);
                success = true;
            }
            if (success) {
                Code.mainWorkspace.render();
            } else {
                Blockly.alert(MSG['badXml'], callback);
            }
        };
        reader.readAsText(files[0]);
    };
    // Create once invisible browse button with event listener, and click it
    var selectFile = document.getElementById('select_file');
    if (selectFile === null) {
        var selectFileDom = document.createElement('INPUT');
        selectFileDom.type = 'file';
        selectFileDom.id = 'select_file';
        selectFileDom.accept = '.S4E, .xml';
        selectFileDom.style.display = 'none';
        document.body.appendChild(selectFileDom);
        selectFile = document.getElementById('select_file');
        selectFile.addEventListener('change', parseInputXMLfile, false);
    }
    selectFile.onclick = function destroyClickedElement(event) {
        document.body.removeChild(event.target);
    };
    selectFile.click();
};

/**
 * Parses the XML from its input to generate and replace the blocks in the
 * Blockly workspace.
 * @param {!string} defaultXml String of XML code for the blocks.
 * @return {!boolean} Indicates if the XML into blocks parse was successful.
 */
Code.loadBlocksfromXml = function(defaultXml) {
    var count = Code.mainWorkspace.getAllBlocks().length;
    var xml = Blockly.Xml.textToDom(defaultXml);
    if (count > 0) {
        Blockly.confirm(MSG['loadXML_span'], function(confirm) {
            if (confirm)
                Code.mainWorkspace.clear();
            Blockly.Xml.domToWorkspace(xml, Code.mainWorkspace);
            return true;
        });
    } else {
        Blockly.Xml.domToWorkspace(xml, Code.mainWorkspace);
        return true;
    }
};

/**
 * Add or replace a parameter to the URL.
 *
 * @param {string} name The name of the parameter.
 * @param {string} value Value to set
 * @return {string} The url completed with parameter and value
 */
Code.addReplaceParamToUrl = function(url, param, value) {
    var re = new RegExp("([?&])" + param + "=.*?(&|$)", "i");
    var separator = url.indexOf('?') !== -1 ? "&" : "?";
    if (url.match(re)) {
        return url.replace(re, '$1' + param + "=" + value + '$2');
    } else {
        return url + separator + param + "=" + value;
    }
};

/**
 * Reset workspace and parameters
 */
Code.ResetWorkspace = function() {
    var count = Blockly.mainWorkspace.getAllBlocks(false).length;
    Blockly.confirm(MSG['resetQuestion_span'] + ' ' + Blockly.Msg['DELETE_ALL_BLOCKS'].replace('%1', count), function(answer) {
        if (answer) {
            Blockly.Events.disable();
            Code.mainWorkspace.clear();
            Code.mainWorkspace.trashcan.contents_ = [];
            Code.mainWorkspace.trashcan.setLidOpen('false');
            window.removeEventListener('unload', auto_save_and_restore_blocks, false);
            localStorage.clear();
            sessionStorage.clear();
            Code.renderContent();
            Blockly.Events.enable();
            if (window.location.hash) {
                window.location.hash = '';
            }
            window.location.replace(window.location.href.split('?')[0]);
        }
    });
};
/**
 * Change font family in webpage
 */

Code.changeFontFamily = function(fontType) {
    var oldFont = document.querySelectorAll('.blocklyText').style.fontFamily;
    document.body.style.fontFamily = fontType;
    document.body.style.classList.replace(oldFont, fontType);

    // let actualTheme = Code.mainWorkspace.getTheme();
    // console.log(actualTheme)
    // Blockly.Themes[actualTheme.name].setComponentStyle('fontStyle', fontType);
    // Code.mainWorkspace.setTheme(Blockly.Themes[actualTheme]);
    window.localStorage.setItem('choosedFont', fontType);
}

/**
 * Change font size in blocks in all workspace
 */
Code.changeRenderingConstant = function(value) {
    var type = document.getElementById('rendering-constant-selector').value;
    switch (type) {
        case 'fontSizeBlocks':
            var fontStyle = {
                'size': value
            };
            Code.mainWorkspace.getTheme().setFontStyle(fontStyle);
            var labelsToolbox = document.getElementsByClassName("blocklyTreeLabel")
            for (var x = 0; x < labelsToolbox.length; x++)
                labelsToolbox[x].style.fontSize = value + "px";
            var labelsIconsToolbox = document.getElementsByClassName("customIcon")
            for (var x = 0; x < labelsIconsToolbox.length; x++)
                labelsIconsToolbox[x].style.width = value + "px";
            break;
        case 'iconSize':
            var labelsIconsMenu = document.getElementsByClassName("iconButtons")
                //transform slider value in percent
            for (var x = 0; x < labelsIconsMenu.length; x++) {
                labelsIconsMenu[x].style.fontSize = value + "px";
            }
            break;
        case 'fontSizeEditor':
            let options = { "fontSize": value }
            Code.editor.updateOptions(options);
            break;
        case 'fontSizePage':
            var labelsPanel = document.getElementsByClassName("UIText");
            for (var x = 0; x < labelsPanel.length; x++)
                labelsPanel[x].style.fontSize = value + "px";
            var labelsMenu = document.getElementsByClassName("menu_text");
            for (var x = 0; x < labelsMenu.length; x++)
                labelsMenu[x].style.fontSize = value + "px";
            document.getElementById("content_hoverButton").style.fontSize = value + "px";
            break;
        case 'fontSpacingPage':
            // document.body.style.fontSize = value + 'px';
            // break;
    }
    // Refresh theme.
    Code.mainWorkspace.setTheme(Code.mainWorkspace.getTheme());
};


/**
 * Hide/show the help modal.
 * @param {boolean} state The state of the checkbox. True if checked, false
 *     otherwise.
 */
var HelpModalDisplay_ = false;

function toggleDisplayHelpModal() {
    if (!HelpModalDisplay_) {
        document.getElementById('helpModal').style.display = 'block';
        document.getElementById('helpModal').classList.add('show');
        document.getElementById('helpModal').style.left = (top.innerWidth - document.getElementById('helpModal').offsetWidth) / 2 + "px";
        document.getElementById('helpModal').style.top = (top.innerHeight - document.getElementById('helpModal').offsetHeight) / 2 + "px";
        helpButton.className = 'iconButtonsClicked';
    } else {
        document.getElementById('helpModal').style.display = 'none';
        document.getElementById('helpModal').classList.remove('show');
        helpButton.className = 'iconButtons';
    }
    HelpModalDisplay_ = !HelpModalDisplay_;
}

/**
 * Add convert bin <-> text
 */
function text2bin() {
    var output = document.getElementById("ti2");
    var input = document.getElementById("ti1").value;
    output.value = "";
    var data = input;
    var binArray = [];
    var datEncode = "";
    var i;
    for (i = 0; i < data.length; i++) {
        binArray.push(data[i].charCodeAt(0).toString(2));
    }
    var j;
    for (j = 0; j < binArray.length; j++) {
        var pad = padding_left(binArray[j], '0', 8);
        datEncode += pad + ' ';
    }
    output.value = datEncode;
};

function padding_left(s, c, n) {
    if (!s || !c || s.length >= n) {
        return s;
    }

    var max = (n - s.length) / c.length;
    for (var i = 0; i < max; i++) {
        s = c + s;
    }
    return s;
};

function bin2text() {
    var output = document.getElementById("ti4");
    var input = document.getElementById("ti3").value;
    output.value = "";
    var s = input;
    s = s.replace(/\s/g, "");
    var data = "";
    if (s.length % 8 != 0) {
        data = "???:";
    } else {
        while (s.length > 0) {
            var first8 = s.substring(0, 8);
            s = s.substring(8);
            var chr = parseInt(first8, 2);
            data += String.fromCharCode(chr);
        }
    }
    output.value = data;
};


/**
 * Add convert colors
 */

function convert2Dec(numR, numG, numB, doneString) {
    if ((!numR || !numG || !numB) && (!doneString)) {
        alert("Entrez une valeur dans chaque case.");
        return false;
    }
    numR = numR.toUpperCase();
    numG = numG.toUpperCase();
    numB = numB.toUpperCase();
    decRval = hex2dec(numR)
    decGval = hex2dec(numG);
    decBval = hex2dec(numB);
    if ((decRval == "BAD") || (decGval == "BAD") || (decBval == "BAD")) {
        return false;
    } else {
        document.converter.decR.value = decRval;
        document.converter.decG.value = decGval;
        document.converter.decB.value = decBval;
        document.converter.hexR.value = numR;
        document.converter.hexG.value = numG;
        document.converter.hexB.value = numB;
        hexStringOut = "" + numR + numG + numB;
        hexStringOut.toUpperCase();
        document.bgColor = "#" + hexStringOut;
        document.converter.hexString.value = hexStringOut;
    }
    convert2Hex(decRval, decGval, decBval, "DONE");
    if (document.converter.names.value != document.converter.hexString.value) {
        document.converter.names.selectedIndex = 0;
    }

}

function hex2dec(theHex) {
    if ((theHex.charAt(0) > "F") || (theHex.charAt(1) > "F")) {
        alert("Code hexad�cimal (00-FF) uniquement.");
        return "BAD";
    }
    var retDec = parseInt(theHex, 16);
    return retDec;
}

function fixHex(theDec) {
    var hNum = new Array("0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F");
    var retHex = hNum[theDec];
    return retHex;
}

function dec2hex(theDec) {
    for (var k = 0; k < theDec.length; k++) {
        var thisChar = theDec.charAt(k);
        if ((thisChar < "0") || (thisChar > "9")) {
            alert("Code d�cimal (0-255) uniquement.");
            return "BAD";
        }
    }
    var leftNum;
    var rightNum;
    var leftNumS;
    var rightNumS;
    var retNum;
    if (theDec > 255) {
        alert("Pas plus que 255.");
        return "BAD";
    } else {
        leftNum = Math.floor(theDec / 16);
        leftNumS = fixHex(leftNum);
        rightNum = theDec % 16;
        rightNumS = fixHex(rightNum);
        retNum = leftNumS + rightNumS;
    }
    return retNum;
}

function convert2Hex(numR, numG, numB, doneString) {
    if ((!numR || !numG || !numB) && (!doneString)) {
        alert("Entrez une valeur dans chaque case.");
        return false;
    }
    hexRval = dec2hex(numR);
    hexGval = dec2hex(numG);
    hexBval = dec2hex(numB);
    if ((hexRval == "BAD") || (hexGval == "BAD") || (hexBval == "BAD")) {
        return false;
    } else {
        document.converter.hexR.value = dec2hex(numR);
        document.converter.hexG.value = dec2hex(numG);
        document.converter.hexB.value = dec2hex(numB);
        hexStringOut = "" + hexRval + hexGval + hexBval;
        hexStringOut = hexStringOut.toUpperCase();
        document.bgColor = "#" + hexStringOut;
        document.converter.hexString.value = hexStringOut;
    }
}

function showHex(hexStringIn) {
    if (hexStringIn.length != 6) {
        alert('N\entrez qu\'une valeur hexad�cimale � 6 caract�res !');
        return false;
    }

    hexRval = "" + hexStringIn.charAt(0) + hexStringIn.charAt(1);
    hexGval = "" + hexStringIn.charAt(2) + hexStringIn.charAt(3);
    hexBval = "" + hexStringIn.charAt(4) + hexStringIn.charAt(5);

    convert2Dec(hexRval, hexGval, hexBval, "DONE");
    convert2Hex(decRval, decGval, decBval, "DONE");
}

function reduceVal(theType) {
    decRval = document.converter.decR.value;
    decGval = document.converter.decG.value;
    decBval = document.converter.decB.value;
    eval("newNum = dec" + theType + "val - 8");
    if (newNum < 0) {
        newNum = 0;
    }
    eval("dec" + theType + "val = newNum");
    document.converter.decR.value = decRval;
    document.converter.decG.value = decGval;
    document.converter.decB.value = decBval;
    convert2Hex(decRval, decGval, decBval, "DONE");
    convert2Dec(hexRval, hexGval, hexBval, "DONE");
}

function increaseVal(theType) {
    decRval = document.converter.decR.value;
    decGval = document.converter.decG.value;
    decBval = document.converter.decB.value;
    eval("newNum = dec" + theType + "val - -8");
    if (newNum > 255) {
        newNum = 255;
    }
    eval("dec" + theType + "val = newNum");
    document.converter.decR.value = decRval;
    document.converter.decG.value = decGval;
    document.converter.decB.value = decBval;
    convert2Hex(decRval, decGval, decBval, "DONE");
    convert2Dec(hexRval, hexGval, hexBval, "DONE");
}

/**
 * Web Serial API functions
 **/

Code.getPorts = async function() {
    if (!('serial' in navigator)) {
        Blockly.alert("This site requires the experimental Web Serial API. Your browser either does not support this, or does not have it enabled.");
    } else try {
        // request WebSerial API for port list
        // in Electron it fires 'select-serial-port' in main.js
        Code.serialPort = await navigator.serial.requestPort();
        document.getElementById('serialButton').className = 'iconButtonsClicked';
        window.sessionStorage.setItem('portSelected', true);
    } catch (error) {
        if (!Code.serialPort) {
            Blockly.alert('no port selected')
            document.getElementById('serialButton').className = 'iconButtons';
            window.sessionStorage.setItem('portSelected', false);
        }
    }
}
navigator.serial.addEventListener("connect", (event) => {
    Blockly.alert('New device connected');
});
navigator.serial.addEventListener("disconnect", (event) => {
    Blockly.alert('Device disconnected');
    // console.log(event.target)
});