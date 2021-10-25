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
        fullScreenButton.className = 'iconButtons';
        fullScreen_ = false;
    }
};

/**
 * Copy code from div code_peek in clipboard system
 */
Code.copyToClipboard = function() {
    if (document.selection) { // IE
        var range = document.body.createTextRange();
        range.moveToElementText(editor.getValue());
        range.select();
        document.execCommand("copy");
    } else if (window.getSelection) {
        navigator.clipboard.writeText(editor.getValue())
            .then(() => { console.log('Code copied!') })
            .catch((error) => { console.log('Copy failed! ${error}') });
    }
};

/**
 * modal controllers
 */
Code.boardsListModalShow = function() {
    document.getElementById('overlayForModals').style.display = "block";
    document.getElementById('boardListModal').classList.add('show');
    for (var i = 0; i < document.getElementById("boardDescriptionSelector").length; i++)
        document.getElementById("boardDescriptionSelector").options[i].style.backgroundColor = 'white';
    var boardValue = document.getElementById("boardMenu").value;
    if (boardValue !== 'none') {
        document.getElementById("boardDescriptionSelector").selectedIndex = boardValue;
        document.getElementById("boardDescriptionSelector").value = boardValue;
        document.getElementById("boardDescriptionSelector").options[document.getElementById("boardDescriptionSelector").selectedIndex].style.backgroundColor = 'yellow';
    }
    window.addEventListener('click', Code.boardsListModalHide, 'once');
    Code.boardDescription();
};
Code.portsListModalShow = function() {
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
            window.location = window.location.protocol + '//' + window.location.host + window.location.pathname;
        }
    });
};

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
            editor.setOptions({
                fontSize: value + "pt"
            });
        case 'fontSizePage':
            // fontSizePageModify('access', value);
        case 'fontSpacingPage':
            // document.body.style.fontSize = value + 'px';
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