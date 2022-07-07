/**
 * @license
 * Copyright 2020 Sébastien CANET
 * SPDX-License-Identifier: BSD-3-Clause
 */

/**
 * @fileoverview Dialog element draggable on UI
 * @author scanet@libreduc.cc (Sébastien CANET)
 */

/*
 * Open tools popup menu
 */
function openMenuTools() {
    document.getElementById('buttonsToolsPopup').style.left = document.getElementById('toolsButton').getBoundingClientRect().left + 5 + 'px';
    document.getElementById('toolsPopup').style.display = 'block';
    document.getElementById('toolsButton').classList.toggle('active');
}
/*
 * Open tools popup menu
 */
function openMenuIoT() {
    document.getElementById('buttonsIotPopup').style.left = document.getElementById('iotConnectButton').getBoundingClientRect().left + 5 + 'px';
    document.getElementById('iotPopup').style.display = 'block';
    document.getElementById('iotConnectButton').classList.toggle('active');
}
/*
 * Open serial popup menu
 */
function openMenuSerial() {
    document.getElementById('buttonsSerialPopup').style.left = document.getElementById('serialConnectButton').getBoundingClientRect().left + 5 + 'px';
    document.getElementById('serialPopup').style.display = 'block';
    document.getElementById('serialConnectButton').classList.toggle('active');
}



/*
 * False modal with data conversion functions
 */
function showConvertModalDialog() {
    var id = 'convertModalDialog';
    var dialog = new DialogBox(id, callbackDialog);
    dialog.showDialog();

    function callbackDialog(btnName) {
        if (btnName == "convertModalDialog_close") {
            document.getElementById("ti2").value = "";
            document.getElementById("ti4").value = "";
            document.getElementById(id).style.display = 'none';
        }
    }
}

function text2binCopy() {
    navigator.clipboard.writeText(document.getElementById("ti2").value)
        .then(() => { console.log('Binary data copied!') })
        .catch((error) => { console.log('Copy failed! ${error}') });
}

function bin2textCopy() {
    navigator.clipboard.writeText(document.getElementById("ti4").value)
        .then(() => { console.log('Text data copied!') })
        .catch((error) => { console.log('Copy failed! ${error}') });
}
/*
 * False modal with colors conversion functions
 */
function showColorsModalDialog() {
    document.getElementById("colorsModalDialogContent").innerHTML = '<object type="text/html" data="./tools/RGB/RGB_en.html" ></object>';
    document.getElementById("colorsModalDialogContent").style.width = '100%';
    document.getElementById("colorsModalDialogContent").style.height = '535px';
    document.getElementById("colorsModalDialogContent").children[0].style.width = '100%';
    document.getElementById("colorsModalDialogContent").children[0].style.height = '535px';
    var id = 'colorsModalDialog';
    var dialog = new DialogBox(id, callbackDialogColorModal);
    dialog.showDialog();

    function callbackDialogColorModal(btnName) {
        if (btnName == "colorsModalDialog_close") {
            document.getElementById(id).style.display = 'none';
        }
    }
}
/*
 * False modal with serial monitor WebSerial API
 */
function showSerialMonitorModalDialog() {
    var id = 'serialMonitorModalDialog';
    var dialog = new DialogBox(id, callbackDialogSerialMonitorModal);
    dialog.showDialog();
    var serialConnectSpeedAvailable = JSON.parse(sessionStorage.getItem("availableSpeed"));
    document.getElementById('serialConnectSpeed_Menu').length = 0;
    if (serialConnectSpeedAvailable) {
        serialConnectSpeedAvailable.forEach((serialConnectSpeed) => {
            var option = document.createElement('option');
            option.value = serialConnectSpeed;
            option.text = serialConnectSpeed;
            document.getElementById('serialConnectSpeed_Menu').appendChild(option);
        });
    } else Blockly.alert('Select a board first');

    function callbackDialogSerialMonitorModal(btnName) {
        if (btnName == "serialMonitorModalDialog_close") {
            document.getElementById(id).style.display = 'none';
            if (_maximiniSerial == 'maxi') {
                document.getElementById("serialMonitorModalDialog_mini").style.display = 'block';
                document.getElementById("serialMonitorModalDialog_maxi").style.display = 'none';
                document.body.appendChild(_blockFactoryModal);
                document.getElementById("content_console").style.position = "absolute";
                _serialModal.style.left = serialModal_old_X + "px";
                _serialModal.style.top = serialModal_old_Y + "px";
                _serialModal.style.width = serialModal_old_width + "px";
                _serialModal.style.height = serialModal_old_height + "px";
                document.getElementById("serialMonitorModalDialogContent").style.width = "calc(100% - 32px)";
                document.getElementById("serialModalTitle_titlebar").style.width = "calc(100% - 32px)";
                _maximiniSerial = 'mini';
            }
        }
    }
}
/*
 * False modal with serial monitor WebSerial API
 */
var _dialogBlockFactory;

function getBlockDefinitions(blockXmlMap, definitionFormat) {
    var blockCode = [];
    var xml = blockXmlMap[blockType];
    if (xml) {
        // Render and get block from hidden workspace.
        var rootBlock = this.getRootBlockFromXml_(xml);
        if (rootBlock) {
            // Generate the block's definition.
            let code = FactoryUtils.getBlockDefinition(blockType, rootBlock,
                definitionFormat, this.hiddenWorkspace);
            // Add block's definition to the definitions to return.
        } else {
            // Append warning comment and write to console.
            let code = '// No block definition generated for ' + blockType +
                '. Could not find root block in XML stored for this block.';
            console.log('No block definition generated for ' + blockType +
                '. Could not find root block in XML stored for this block.');
        }
    } else {
        // Append warning comment and write to console.
        let code = '// No block definition generated for ' + blockType +
            '. Block was not found in Block Library Storage.';
        console.log('No block definition generated for ' + blockType +
            '. Block was not found in Block Library Storage.');
    }
    blockCode.push(code);

    // Surround json with [] and comma separate items.
    if (definitionFormat === "JSON") {
        return "[" + blockCode.join(",\n") + "]";
    }
    return blockCode.join("\n\n");
}


Code.blockFactoryFlyoutCallback = function() {
    let blockList = [{
        "kind": "block",
        "type": sessionStorage.getItem("blockFactory_blockType")
    }];
    return blockList;
};

function showBlockFactoryModalDialog() {
    let lang = Code.getStringParamFromUrl('lang', '') ? Code.getStringParamFromUrl('lang', '') : 'en';
    let id = 'blockFactoryModalDialog';
    if (!_dialogBlockFactory) {
        _dialogBlockFactory = new DialogBox(id, callbackDialogBlockFactoryModal);
        let iframe = document.createElement('iframe');
        iframe.src = "./tools/blockfactory/index.html";
        iframe.id = "blockFactoryModalDialogContent_iframe";
        iframe.width = "100%";
        iframe.height = "100%";
        iframe.style.border = "0";
        id.sandbox = "allow-same-origin";
        document.getElementById("blockFactoryModalDialogContent").appendChild(iframe);
    }
    _dialogBlockFactory.showDialog();


    function datasFromBlockFactory(e) {
        e.preventDefault();
        if (e.data.call === "sendValueFromBlockFactory") {
            sessionStorage.setItem("blockFactory_definition_language", e.data.blockLang);
            sessionStorage.setItem("blockFactory_definition", JSON.stringify(e.data.blockDefinition));
            sessionStorage.setItem("blockFactory_code_language", e.data.blockCodeLang);
            sessionStorage.setItem("blockFactory_code", e.data.blockCode);
            sessionStorage.setItem("blockFactory_blockType", e.data.blockType);
            sessionStorage.setItem("blockFactory_previewWorkspace", e.data.workspace);
            if (e.data.blockLang.includes('JSON')) {
                Blockly.defineBlocksWithJsonArray([JSON.parse(e.data.blockDefinition)]);
                eval(e.data.blockCode);
            } else {
                var appendData = e.data.blockDefinition + "\n" + e.data.blockCode + "\n";
                eval(appendData);
                var newBlock = document.createElement("block");
                var attr = document.createAttribute("type");
                attr.value = e.data.blockType;
                newBlock.setAttributeNode(attr);
            }
            let nBlock = Code.mainWorkspace.newBlock(e.data.blockType);
            nBlock.initSvg();
            nBlock.render();
            let actualToolbox = Blockly.getMainWorkspace().toolbox_;
            actualToolbox.contents_[0].isHidden_ = false;
            actualToolbox.contents_[0].show();
        }
    }
    const controller = new AbortController();

    function callbackDialogBlockFactoryModal(btnName) {
        switch (btnName) {
            case "blockFactoryModalDialog_save":
                console.log("blockFactoryModalDialog_save");
                break;
            case "blockFactoryModalDialog_update":
                let iFrame = document.getElementById('blockFactoryModalDialogContent_iframe');
                let iFrameContent = iFrame.contentWindow;
                iFrameContent.postMessage("sendCode", '*');
                window.addEventListener("message", datasFromBlockFactory, { signal: controller.signal });
                break;
            case "blockFactoryModalDialog_close":
                window.removeEventListener("message", datasFromBlockFactory);
                document.getElementById(id).style.display = 'none';
                if (_maximiniBlockFactory == 'maxi') {
                    document.getElementById("blockFactoryModalDialog_mini").style.display = 'block';
                    document.getElementById("blockFactoryModalDialog_maxi").style.display = 'none';
                    document.body.appendChild(_blockFactoryModal);
                    document.getElementById("content_console").style.position = "absolute";
                    _blockFactoryModal.style.left = blockFactoryModal_old_X + "px";
                    _blockFactoryModal.style.top = blockFactoryModal_old_Y + "px";
                    _blockFactoryModal.style.width = blockFactoryModal_old_width + "px";
                    _blockFactoryModal.style.height = blockFactoryModal_old_height + "px";
                    document.getElementById("blockFactoryModalDialogContent").style.width = "calc(100% - 32px)";
                    document.getElementById("blockFactoryModalTitle_titlebar").style.width = "calc(100% - 32px)";
                    _maximiniBlockFactory = 'mini';
                }
                break;
        }
    }
}

/*
 * Make the DIV element draggable
 */
dragElement(document.getElementById("keyboard_nav"));
dragElement(document.getElementById("helpModal"));

function dragElement(elmnt) {
    var pos1 = 0,
        pos2 = 0,
        pos3 = 0,
        pos4 = 0;
    if (document.getElementById(elmnt.id + "_header")) {
        // if present, the header is where you move the DIV from:
        document.getElementById(elmnt.id + "_header").onmousedown = dragMouseDown;
    } else {
        // otherwise, move the DIV from anywhere inside the DIV:
        elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        // stop moving when mouse button is released:
        document.onmouseup = null;
        document.onmousemove = null;
    }
}


/*
 * Modify position of code editor modal
 */
var _maximiniMonaco = "mini";
const _editorModal = document.getElementById("editorMonacoModal");
let editorMonacoModal_old_X = 0;
let editorMonacoModal_old_Y = 0;
let editorMonacoModal_old_width = 0;
let editorMonacoModal_old_height = 0;

function editorMonacoModal_maxi_mini() {
    const icon = document.getElementById("editorMonacoModal_maximini").querySelector('em');
    if (_maximiniMonaco == 'mini') {
        editorMonacoModal_old_X = _editorModal.getBoundingClientRect().left;
        editorMonacoModal_old_Y = _editorModal.getBoundingClientRect().top;
        editorMonacoModal_old_width = _editorModal.getBoundingClientRect().right - _editorModal.getBoundingClientRect().left;
        editorMonacoModal_old_height = _editorModal.getBoundingClientRect().bottom - _editorModal.getBoundingClientRect().top;
        icon.classList.remove('fa-window-maximize');
        icon.classList.add('fa-window-minimize');
        _editorModal.style.left = "0px";
        _editorModal.style.top = "0px";
        _editorModal.style.width = (window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth) + "px";
        _editorModal.style.height = (window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight) + "px";
        document.getElementById("content_Monaco_editors").style.width = "100%";
        document.getElementById("editorMonacoModal_titlebar").style.width = "100%";
        Code.editor.layout();
        _maximiniMonaco = 'maxi';
    } else {
        icon.classList.remove('fa-window-minimize');
        icon.classList.add('fa-window-maximize');
        _editorModal.style.left = editorMonacoModal_old_X + "px";
        _editorModal.style.top = editorMonacoModal_old_Y + "px";
        _editorModal.style.width = editorMonacoModal_old_width + "px";
        _editorModal.style.height = editorMonacoModal_old_height + "px";
        document.getElementById("content_Monaco_editors").style.width = "calc(100% - 32px)";
        document.getElementById("editorMonacoModal_titlebar").style.width = "calc(100% - 32px)";
        Code.editor.layout();
        _maximiniMonaco = 'mini';
    }
}

var _maximiniSerial = "mini";
const _serialModal = document.getElementById("serialMonitorModalDialog");
let serialModal_old_X = 0;
let serialModal_old_Y = 0;
let serialModal_old_width = 0;
let serialModal_old_height = 0;

function serialMonitorModalDialog_maxi_mini() {
    if (_maximiniSerial == 'mini') {
        serialModal_old_X = _serialModal.getBoundingClientRect().left;
        serialModal_old_Y = _serialModal.getBoundingClientRect().top;
        serialModal_old_width = _serialModal.getBoundingClientRect().right - _serialModal.getBoundingClientRect().left;
        serialModal_old_height = _serialModal.getBoundingClientRect().bottom - _serialModal.getBoundingClientRect().top;
        document.getElementById("serialMonitorModalDialog_mini").style.display = 'none';
        document.getElementById("serialMonitorModalDialog_maxi").style.display = 'block';
        document.getElementById("content_console").appendChild(_serialModal);
        document.getElementById("content_console").style.position = "relative";
        _serialModal.style.left = "0px";
        _serialModal.style.top = "0px";
        _serialModal.style.width = "100%";
        _serialModal.style.height = "100%";
        document.getElementById("serialMonitorModalDialogContent").style.width = "calc(100% - 32px)";
        document.getElementById("serialModalTitle_titlebar").style.width = "calc(100% - 32px)";
        _maximiniSerial = 'maxi';
    } else {
        document.getElementById("serialMonitorModalDialog_mini").style.display = 'block';
        document.getElementById("serialMonitorModalDialog_maxi").style.display = 'none';
        document.body.appendChild(_serialModal);
        document.getElementById("content_console").style.position = "absolute";
        _serialModal.style.left = serialModal_old_X + "px";
        _serialModal.style.top = serialModal_old_Y + "px";
        _serialModal.style.width = serialModal_old_width + "px";
        _serialModal.style.height = serialModal_old_height + "px";
        document.getElementById("serialMonitorModalDialogContent").style.width = "calc(100% - 32px)";
        document.getElementById("serialModalTitle_titlebar").style.width = "calc(100% - 32px)";
        _maximiniSerial = 'mini';
    }
}

var _maximiniBlockFactory = "mini";
const _blockFactoryModal = document.getElementById("blockFactoryModalDialog");
let blockFactoryModal_old_X = 0;
let blockFactoryModal_old_Y = 0;
let blockFactoryModal_old_width = 0;
let blockFactoryModal_old_height = 0;

function blockFactoryModalDialog_maxi_mini() {
    if (_maximiniBlockFactory == 'mini') {
        blockFactoryModal_old_X = _blockFactoryModal.getBoundingClientRect().left;
        blockFactoryModal_old_Y = _blockFactoryModal.getBoundingClientRect().top;
        blockFactoryModal_old_width = _blockFactoryModal.getBoundingClientRect().right - _blockFactoryModal.getBoundingClientRect().left;
        blockFactoryModal_old_height = _blockFactoryModal.getBoundingClientRect().bottom - _blockFactoryModal.getBoundingClientRect().top;
        document.getElementById("blockFactoryModalDialog_mini").style.display = 'none';
        document.getElementById("blockFactoryModalDialog_maxi").style.display = 'block';
        document.getElementById("content_console").appendChild(_blockFactoryModal);
        document.getElementById("content_console").style.position = "relative";
        _blockFactoryModal.style.left = "0px";
        _blockFactoryModal.style.top = "0px";
        _blockFactoryModal.style.width = "100%";
        _blockFactoryModal.style.height = "100%";
        document.getElementById("blockFactoryModalDialogContent").style.width = "calc(100% - 32px)";
        document.getElementById("blockFactoryModalTitle_titlebar").style.width = "calc(100% - 32px)";
        _maximiniBlockFactory = 'maxi';
        document.getElementById("resizer_v").addEventListener(MouseEvent.CLICK, function() {
            document.getElementById("blockFactoryModalDialogContent").style.height = (document.getElementById("blockFactoryModalDialog").offsetHeight - 140) + "px";
            console.log(document.getElementById("blockFactoryModalDialogContent").style.height)
        })
    } else {
        document.getElementById("blockFactoryModalDialog_mini").style.display = 'block';
        document.getElementById("blockFactoryModalDialog_maxi").style.display = 'none';
        document.body.appendChild(_blockFactoryModal);
        document.getElementById("content_console").style.position = "absolute";
        _blockFactoryModal.style.left = blockFactoryModal_old_X + "px";
        _blockFactoryModal.style.top = blockFactoryModal_old_Y + "px";
        _blockFactoryModal.style.width = blockFactoryModal_old_width + "px";
        _blockFactoryModal.style.height = blockFactoryModal_old_height + "px";
        document.getElementById("blockFactoryModalDialogContent").style.width = "calc(100% - 32px)";
        document.getElementById("blockFactoryModalTitle_titlebar").style.width = "calc(100% - 32px)";
        _maximiniBlockFactory = 'mini';
    }
}

// Simulate jQuery selector « $ »
// return a matrix if an element has right class
if (!document.getElementsByClassName) {
    document.getElementsByClassName = function(cl, tag) {
        let els, matches = [],
            i = 0,
            len,
            regex = new RegExp('(?:\\s|^)' + cl + '(?:\\s|$)');
        els = document.getElementsByTagName(tag || "*");
        if (!els[0]) return false;
        for (len = els.length; i < len; i++) {
            if (els[i].className.match(regex)) {
                matches.push(els[i]);
            }
        }
        return matches;
    };
}

// Validate id, class, or tag.
var $ = function(el, tag) {
    var firstChar = el.charAt(0);
    if (document.querySelectorAll) return document.querySelectorAll(el);
    switch (firstChar) {
        case "#":
            return document.getElementById(el.slice(1));
        case ".":
            return document.getElementsByClassName(el.slice(1), tag);
        default:
            return document.getElementsByTagName(el);
    }
};

// Usage
// $('#conteneur');
// Retourne un élément de classe « maClasse »
// $('.maClasse');
// Retourne un élément DIV de classe « maClasse »
// $('.maClasse', 'div');
// Retourne tous les éléments P
// $('p');


function addScript(url) {
    var scriptToAdd = document.createElement("script");
    scriptToAdd.type = "text/javascript";
    scriptToAdd.src = url;
    document.body.appendChild(scriptToAdd);
}

function removeScript(url) {
    var scriptToAdd = document.createElement("script");
    scriptToAdd.type = "text/javascript";
    scriptToAdd.src = url;
    document.body.removeChild(scriptToAdd);
}

/*
 * Javascript function for collapsible content in modal
 */
function collapsibleContentInit() {
    var coll = document.getElementsByClassName("collapsibleButton");
    for (i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var content = this.nextElementSibling;
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
                content.style.visibility = "hidden";
                if (content.id == "boardCollapsibleContent") {
                    document.getElementById("board_mini_picture_div").style.transform = "scale(1)";
                    document.getElementById("board_mini_picture_div").style.top = "";
                }
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
                content.style.visibility = "visible";
                if (content.id == "boardCollapsibleContent") {
                    document.getElementById("board_mini_picture_div").style.transform = "scale(1.7)";
                    document.getElementById("board_mini_picture_div").style.top = "150px";
                }
            }
        });
    }
}

function toggleEditorDiff(item) {
    if (item.checked) {
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
}

/*
 * Accordion effect in lateral panel
 * https://www.w3schools.com/howto/howto_js_accordion.asp
 */
var accordion = document.getElementsByClassName("accordion");
for (var i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + 15 + "px";
        }
    });
}

var accordionSub = document.getElementsByClassName("accordionSub");
for (var i = 0; i < accordionSub.length; i++) {
    if (accordionSub[i].id != "arrowheadConfig")
        accordionSub[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + 15 + "px";
            }
        });
    else
        accordionSub[i].addEventListener("click", function() {
            if (document.getElementById('arrowheadManagementInput').value == process.env.ARROWHEAD_SETTINGS_PASSWORD) {
                this.classList.toggle("active");
                var panel = this.nextElementSibling;
                if (panel.style.maxHeight) {
                    panel.style.maxHeight = null;
                } else {
                    panel.style.maxHeight = panel.scrollHeight + 15 + "px";
                }
            } else Blockly.alert("Wrong password");
        });
}
/*
 * Icons button mouser over
 */
function iconsButtonMouserOver() {
    document.getElementById('btn_fake_min').onmouseover = function() {
        document.getElementById("content_hoverButton").textContent = MSG['btnMinimize'];
    };
    document.getElementById('btn_fake_min').onmouseout = function() {
        document.getElementById("content_hoverButton").textContent = "";
    };
    document.getElementById('btn_fake_max').onmouseover = function() {
        document.getElementById("content_hoverButton").textContent = MSG['btnMaximize'];
    };
    document.getElementById('btn_fake_max').onmouseout = function() {
        document.getElementById("content_hoverButton").textContent = "";
    };
    document.getElementById('btn_fake_close').onmouseover = function() {
        document.getElementById("content_hoverButton").textContent = MSG['btnClose'];
    };
    document.getElementById('btn_fake_close').onmouseout = function() {
        document.getElementById("content_hoverButton").textContent = "";
    };
    document.getElementById('fullScreenButton').onmouseover = function() {
        document.getElementById("content_hoverButton").textContent = MSG['fullScreenButton_span'];
    };
    document.getElementById('fullScreenButton').onmouseout = function() {
        document.getElementById("content_hoverButton").textContent = "";
    };
    document.getElementById('fullToolboxButton').onmouseover = function() {
        document.getElementById("content_hoverButton").textContent = MSG['fullToolboxButton_span'];
    };
    document.getElementById('fullToolboxButton').onmouseout = function() {
        document.getElementById("content_hoverButton").textContent = "";
    };
    document.getElementById('blocksPictureButton').onmouseover = function() {
        document.getElementById("content_hoverButton").textContent = MSG['blocksPictureButton_span'];
    };
    document.getElementById('blocksPictureButton').onmouseout = function() {
        document.getElementById("content_hoverButton").textContent = "";
    };
    document.getElementById('undoButton').onmouseover = function() {
        document.getElementById("content_hoverButton").textContent = MSG['undoButton_span'];
    };
    document.getElementById('undoButton').onmouseout = function() {
        document.getElementById("content_hoverButton").textContent = "";
    };
    document.getElementById('redoButton').onmouseover = function() {
        document.getElementById("content_hoverButton").textContent = MSG['redoButton_span'];
    };
    document.getElementById('redoButton').onmouseout = function() {
        document.getElementById("content_hoverButton").textContent = "";
    };
    document.getElementById('verifyButton').onmouseover = function() {
        document.getElementById("content_hoverButton").textContent = MSG['verifyButton_span'];
    };
    document.getElementById('verifyButton').onmouseout = function() {
        document.getElementById("content_hoverButton").textContent = "";
    };
    document.getElementById('serialButton').onmouseover = function() {
        document.getElementById("content_hoverButton").textContent = MSG['serialButtonSpan'];
    };
    document.getElementById('serialButton').onmouseout = function() {
        document.getElementById("content_hoverButton").textContent = "";
    };
    document.getElementById('uploadButton').onmouseover = function() {
        document.getElementById("content_hoverButton").textContent = MSG['uploadButton_span'];
    };
    document.getElementById('uploadButton').onmouseout = function() {
        document.getElementById("content_hoverButton").textContent = "";
    };
    document.getElementById('serialConnectButton').onmouseover = function() {
        document.getElementById("content_hoverButton").textContent = MSG['serialConnectButton_span'];
    };
    document.getElementById('serialConnectButton').onmouseout = function() {
        document.getElementById("content_hoverButton").textContent = "";
    };
    document.getElementById('serialMonitorButton').onmouseover = function() {
        document.getElementById("content_hoverButton").textContent = MSG['serialMonitorButton_span'];
    };
    document.getElementById('serialMonitorButton').onmouseout = function() {
        document.getElementById("content_hoverButton").textContent = "";
    };
    document.getElementById('nodeRedFlowButton').onmouseover = function() {
        document.getElementById("content_hoverButton").textContent = MSG['nodeRedFlowButton_span'];
    };
    document.getElementById('nodeRedFlowButton').onmouseout = function() {
        document.getElementById("content_hoverButton").textContent = "";
    };
    document.getElementById('supervisionButton').onmouseover = function() {
        document.getElementById("content_hoverButton").textContent = MSG['supervisionButton_span'];
    };
    document.getElementById('supervisionButton').onmouseout = function() {
        document.getElementById("content_hoverButton").textContent = "";
    };
    document.getElementById('saveCodeButton').onmouseover = function() {
        document.getElementById("content_hoverButton").textContent = MSG['saveCodeButton_span'];
    };
    document.getElementById('saveCodeButton').onmouseout = function() {
        document.getElementById("content_hoverButton").textContent = "";
    };
    document.getElementById('menuButton').onmouseover = function() {
        document.getElementById("content_hoverButton").textContent = MSG['menuButton_span'];
    };
    document.getElementById('menuButton').onmouseout = function() {
        document.getElementById("content_hoverButton").textContent = "";
    };
    document.getElementById('newButton').onmouseover = function() {
        document.getElementById("content_hoverButton").textContent = MSG['newButton_span'];
    };
    document.getElementById('newButton').onmouseout = function() {
        document.getElementById("content_hoverButton").textContent = "";
    };
    document.getElementById('saveXMLButton').onmouseover = function() {
        document.getElementById("content_hoverButton").textContent = MSG['saveXMLButton_span'];
    };
    document.getElementById('saveXMLButton').onmouseout = function() {
        document.getElementById("content_hoverButton").textContent = "";
    };
    document.getElementById('loadXMLfakeButton').onmouseover = function() {
        document.getElementById("content_hoverButton").textContent = MSG['loadXMLfakeButton_span'];
    };
    document.getElementById('loadXMLfakeButton').onmouseout = function() {
        document.getElementById("content_hoverButton").textContent = "";
    };
    document.getElementById('resetButton').onmouseover = function() {
        document.getElementById("content_hoverButton").textContent = MSG['resetButton_span'];
    };
    document.getElementById('resetButton').onmouseout = function() {
        document.getElementById("content_hoverButton").textContent = "";
    };
    document.getElementById('sketch_name_wrapper').onmouseover = function() {
        document.getElementById("content_hoverButton").textContent = MSG['sketch_name_wrapper'];
    };
    document.getElementById('sketch_name_wrapper').onmouseout = function() {
        document.getElementById("content_hoverButton").textContent = "";
    };
    document.getElementById('helpButton').onmouseover = function() {
        document.getElementById("content_hoverButton").textContent = MSG['helpButton_span'];
    };
    document.getElementById('helpButton').onmouseout = function() {
        document.getElementById("content_hoverButton").textContent = "";
    };
    document.getElementById('toolsButton').onmouseover = function() {
        document.getElementById("content_hoverButton").textContent = MSG['toolsButton_span'];
    };
    document.getElementById('toolsButton').onmouseout = function() {
        document.getElementById("content_hoverButton").textContent = "";
    };
    document.getElementById('wiringButton').onmouseover = function() {
        document.getElementById("content_hoverButton").textContent = MSG['wiringButton_span'];
    };
    document.getElementById('wiringButton').onmouseout = function() {
        document.getElementById("content_hoverButton").textContent = "";
    };
    document.getElementById('factoryButton').onmouseover = function() {
        document.getElementById("content_hoverButton").textContent = MSG['factoryButton_span'];
    };
    document.getElementById('factoryButton').onmouseout = function() {
        document.getElementById("content_hoverButton").textContent = "";
    };
    document.getElementById('htmlButton').onmouseover = function() {
        document.getElementById("content_hoverButton").textContent = MSG['htmlButton_span'];
    };
    document.getElementById('htmlButton').onmouseout = function() {
        document.getElementById("content_hoverButton").textContent = "";
    };
    document.getElementById('colorConversionButton').onmouseover = function() {
        document.getElementById("content_hoverButton").textContent = MSG['colorConversionButton_span'];
    };
    document.getElementById('colorConversionButton').onmouseout = function() {
        document.getElementById("content_hoverButton").textContent = "";
    };
    document.getElementById('dataConversionButton').onmouseover = function() {
        document.getElementById("content_hoverButton").textContent = MSG['dataConversionButton_span'];
    };
    document.getElementById('dataConversionButton').onmouseout = function() {
        document.getElementById("content_hoverButton").textContent = "";
    };
    document.getElementById('iotConnectButton').onmouseover = function() {
        document.getElementById("content_hoverButton").textContent = MSG['iotConnectButton_span'];
    };
    document.getElementById('iotConnectButton').onmouseout = function() {
        document.getElementById("content_hoverButton").textContent = "";
    };
    document.getElementById('drawioButton').onmouseover = function() {
        document.getElementById("content_hoverButton").textContent = MSG['drawio_span'];
    };
    document.getElementById('drawioButton').onmouseout = function() {
        document.getElementById("content_hoverButton").textContent = "";
    };
    document.getElementById('launchNodeRed').onmouseover = function() {
        document.getElementById("content_hoverButton").textContent = MSG['launchNodeRed_span'];
    };
    document.getElementById('launchNodeRed').onmouseout = function() {
        document.getElementById("content_hoverButton").textContent = "";
    };
    document.getElementById('launchNodeRedServer').onmouseover = function() {
        document.getElementById("content_hoverButton").textContent = MSG['launchNodeRedServer_span'];
    };
    document.getElementById('launchNodeRedServer').onmouseout = function() {
        document.getElementById("content_hoverButton").textContent = "";
    };
    document.getElementById('launchNodeRedServerPortable').onmouseover = function() {
        document.getElementById("content_hoverButton").textContent = MSG['launchNodeRedServer_span'];
    };
    document.getElementById('launchNodeRedServerPortable').onmouseout = function() {
        document.getElementById("content_hoverButton").textContent = "";
    };
    document.getElementById('launchWebServer').onmouseover = function() {
        document.getElementById("content_hoverButton").textContent = MSG['launchWebServer_span'];
    };
    document.getElementById('launchWebServer').onmouseout = function() {
        document.getElementById("content_hoverButton").textContent = "";
    };
    document.getElementById('papyrusConnect').onmouseover = function() {
        document.getElementById("content_hoverButton").textContent = MSG['papyrusConnect_span'];
    };
    document.getElementById('papyrusConnect').onmouseout = function() {
        document.getElementById("content_hoverButton").textContent = "";
    };
    document.getElementById('ArrowheadConfiguration_auto').onmouseover = function() {
        document.getElementById("content_hoverButton").textContent = MSG['ArrowheadConfiguration_span'];
    };
    document.getElementById('ArrowheadConfiguration_auto').onmouseout = function() {
        document.getElementById("content_hoverButton").textContent = "";
    };
    // document.getElementById('blynkConnect').onmouseover = function () {
    // document.getElementById("content_hoverButton").textContent = MSG['blynkConnect_span'];
    // };
    // document.getElementById('blynkConnect').onmouseout = function () {
    // document.getElementById("content_hoverButton").textContent = "";
    // };
    document.getElementById('serialConnectIOT').onmouseover = function() {
        document.getElementById("content_hoverButton").textContent = MSG['serialConnectIOT_span'];
    };
    document.getElementById('serialConnectIOT').onmouseout = function() {
        document.getElementById("content_hoverButton").textContent = "";
    };
    document.getElementById('lateral-panel-setup-label').onmouseover = function() {
        document.getElementById("content_hoverButton").textContent = MSG['setup_sideButton_span'];
    };
    document.getElementById('lateral-panel-setup-label').onmouseout = function() {
        document.getElementById("content_hoverButton").textContent = "";
    };
    document.getElementById('setup_reset_button_span').onmouseover = function() {
        document.getElementById("content_hoverButton").textContent = MSG['setup_reset_button_span'];
    };
    document.getElementById('setup_reset_button_span').onmouseout = function() {
        document.getElementById("content_hoverButton").textContent = "";
    };
    document.getElementById('setup_save_button_span').onmouseover = function() {
        document.getElementById("content_hoverButton").textContent = MSG['setup_save_button_span'];
    };
    document.getElementById('setup_save_button_span').onmouseout = function() {
        document.getElementById("content_hoverButton").textContent = "";
    };
    document.getElementById('setup_load_button_span').onmouseover = function() {
        document.getElementById("content_hoverButton").textContent = MSG['setup_load_button_span'];
    };
    document.getElementById('setup_load_button_span').onmouseout = function() {
        document.getElementById("content_hoverButton").textContent = "";
    };
    document.getElementById('openCodeButton').onmouseover = function() {
        document.getElementById("content_hoverButton").textContent = MSG['openCodeButton_span'];
    };
    document.getElementById('openCodeButton').onmouseout = function() {
        document.getElementById("content_hoverButton").textContent = "";
    };
    document.getElementById('copyCodeButton').onmouseover = function() {
        document.getElementById("content_hoverButton").textContent = MSG['copyCodeButton_span'];
    };
    document.getElementById('copyCodeButton').onmouseout = function() {
        document.getElementById("content_hoverButton").textContent = "";
    };
    document.getElementById('copyConsoleButton').onmouseover = function() {
        document.getElementById("content_hoverButton").textContent = MSG['copyConsoleButton_span'];
    };
    document.getElementById('copyConsoleButton').onmouseout = function() {
        document.getElementById("content_hoverButton").textContent = "";
    };
    document.getElementById('cleanConsoleButton').onmouseover = function() {
        document.getElementById("content_hoverButton").textContent = MSG['cleanConsoleButton_span'];
    };
    document.getElementById('cleanConsoleButton').onmouseout = function() {
        document.getElementById("content_hoverButton").textContent = "";
    };
    document.getElementById('coreUpdateButton').onmouseover = function() {
        document.getElementById("content_hoverButton").textContent = MSG['coreUpdateButton_span'];
    };
    document.getElementById('coreUpdateButton').onmouseout = function() {
        document.getElementById("content_hoverButton").textContent = "";
    };
    document.getElementById('cleanCLIcacheButton').onmouseover = function() {
        document.getElementById("content_hoverButton").textContent = MSG['cleanCLIcacheButton_span'];
    };
    document.getElementById('cleanCLIcacheButton').onmouseout = function() {
        document.getElementById("content_hoverButton").textContent = "";
    };
    document.getElementById('listBoardsButton').onmouseover = function() {
        document.getElementById("content_hoverButton").textContent = MSG['listBoardsButton_span'];
    };
    document.getElementById('listBoardsButton').onmouseout = function() {
        document.getElementById("content_hoverButton").textContent = "";
    };
    document.getElementById('installBoardsInput').onmouseover = function() {
        document.getElementById("content_hoverButton").textContent = MSG['installBoardsInput_span'];
    };
    document.getElementById('installBoardsInput').onmouseout = function() {
        document.getElementById("content_hoverButton").textContent = "";
    };
    document.getElementById('installBoardsButton').onmouseover = function() {
        document.getElementById("content_hoverButton").textContent = MSG['installBoardsButton_span'];
    };
    document.getElementById('installBoardsButton').onmouseout = function() {
        document.getElementById("content_hoverButton").textContent = "";
    };
    document.getElementById('searchlLibInput').onmouseover = function() {
        document.getElementById("content_hoverButton").textContent = MSG['searchlLibInput_span'];
    };
    document.getElementById('searchlLibInput').onmouseout = function() {
        document.getElementById("content_hoverButton").textContent = "";
    };
    document.getElementById('searchlLibButton').onmouseover = function() {
        document.getElementById("content_hoverButton").textContent = MSG['searchlLibButton_span'];
    };
    document.getElementById('searchlLibButton').onmouseout = function() {
        document.getElementById("content_hoverButton").textContent = "";
    };
    document.getElementById('installLibInput').onmouseover = function() {
        document.getElementById("content_hoverButton").textContent = MSG['installLibInput_span'];
    };
    document.getElementById('installLibInput').onmouseout = function() {
        document.getElementById("content_hoverButton").textContent = "";
    };
    document.getElementById('installLibButton').onmouseover = function() {
        document.getElementById("content_hoverButton").textContent = MSG['installLibButton_span'];
    };
    document.getElementById('installLibButton').onmouseout = function() {
        document.getElementById("content_hoverButton").textContent = "";
    };
    document.getElementById('CLI_githubLinkButton').onmouseover = function() {
        document.getElementById("content_hoverButton").textContent = MSG['CLI_githubLinkButton_span'];
    };
    document.getElementById('CLI_githubLinkButton').onmouseout = function() {
        document.getElementById("content_hoverButton").textContent = "";
    };
    document.getElementById('editorDiffToggle').onmouseover = function() {
        document.getElementById("content_hoverButton").textContent = MSG['editorDiffToggle_span'];
    };
    document.getElementById('editorDiffToggle').onmouseout = function() {
        document.getElementById("content_hoverButton").textContent = "";
    };
    document.getElementById('editorMonacoModal_undo').onmouseover = function() {
        document.getElementById("content_hoverButton").textContent = MSG['editorMonacoModal_undo_span'];
    };
    document.getElementById('editorMonacoModal_undo').onmouseout = function() {
        document.getElementById("content_hoverButton").textContent = "";
    };
    document.getElementById('editorMonacoModal_redo').onmouseover = function() {
        document.getElementById("content_hoverButton").textContent = MSG['editorMonacoModal_redo_span'];
    };
    document.getElementById('editorMonacoModal_redo').onmouseout = function() {
        document.getElementById("content_hoverButton").textContent = "";
    };
    document.getElementById('editorMonacoModal_diff').onmouseover = function() {
        document.getElementById("content_hoverButton").textContent = MSG['editorMonacoModal_diff_span'];
    };
    document.getElementById('editorMonacoModal_diff').onmouseout = function() {
        document.getElementById("content_hoverButton").textContent = "";
    };
    document.getElementById('editorMonacoModal_ok').onmouseover = function() {
        document.getElementById("content_hoverButton").textContent = MSG['editorMonacoModal_ok_span'];
    };
    document.getElementById('editorMonacoModal_ok').onmouseout = function() {
        document.getElementById("content_hoverButton").textContent = "";
    };
    document.getElementById('editorMonacoModal_cancel').onmouseover = function() {
        document.getElementById("content_hoverButton").textContent = MSG['editorMonacoModal_cancel_span'];
    };
    document.getElementById('editorMonacoModal_cancel').onmouseout = function() {
        document.getElementById("content_hoverButton").textContent = "";
    };
    document.getElementById('circuitJSmodal_run').onmouseover = function() {
        document.getElementById("content_hoverButton").textContent = MSG['circuitJSmodal_run'];
    };
    document.getElementById('circuitJSmodal_run').onmouseout = function() {
        document.getElementById("content_hoverButton").textContent = "";
    };
    document.getElementById('circuitJSmodal_stop').onmouseover = function() {
        document.getElementById("content_hoverButton").textContent = MSG['circuitJSmodal_stop'];
    };
    document.getElementById('circuitJSmodal_stop').onmouseout = function() {
        document.getElementById("content_hoverButton").textContent = "";
    };
}