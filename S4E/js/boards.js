/**
 * @license
 * Copyright 2020 Sébastien CANET
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @fileoverview Helper functions for selecting and changing boards.
 * @author scanet@libreduc.cc (Sébastien CANET)
 */

'use strict';

goog.provide('Blockly.Boards');

//set default profile
profile["default"] = profile["none"];

/**
 * Set board when click in board modal
 */
Code.setBoard = function() {
    var boardId = Code.getStringParamFromUrl('board', '');
    if (!boardId) {
        boardId = "none";
    }
    profile["default"] = profile[boardId];
    // change tooltip & info when a board is selected
    if (boardId != "none") {
        profile["default"] = profile[boardId];
        document.getElementById('boardButton').classList.add('active');
        document.getElementById('boardButton').title = profile["default"][0].description;
        document.getElementById('boardButton').onmouseover = function() {
            document.getElementById("content_hoverButton").textContent = profile["default"][0].description;
        };
        document.getElementById('boardButton').onmouseout = function() {
            document.getElementById("content_hoverButton").textContent = "";
        };
        document.getElementById("lateral-panel-setup-bloc").style.backgroundImage = "url('./S4E/media/boards/" + boardId + ".png')";
        document.getElementById("boardDescriptionSelector").selectedIndex = boardId;
        document.getElementById("boardSelected_span").textContent = profile["default"][0].description;
        document.getElementById("portSelected_span").textContent = ' : ' + document.getElementById('serialMenu').options[document.getElementById('serialMenu').selectedIndex].value;
    } else {
        document.getElementById('boardButton').classList.remove('active');
        document.getElementById('boardButton').title = MSG['boardButtonSpan'];
        document.getElementById('boardButton').onmouseover = function() {
            document.getElementById("content_hoverButton").textContent = MSG['boardButtonSpan'];
        };
        document.getElementById('boardButton').onmouseout = function() {
            document.getElementById("content_hoverButton").textContent = "";
        };
    }
};

/**
 * Set board throught URL
 */
Code.changeBoard = function() {
    var boardMenu = document.getElementById('boardDescriptionSelector');
    var newBoard = encodeURIComponent(boardMenu.options[boardMenu.selectedIndex].value);
    sessionStorage.setItem('boardIndex', boardMenu.selectedIndex);
    sessionStorage.setItem('board', newBoard);
    var search = window.location.search;
    if (search.length <= 1) {
        search = '?board=' + newBoard;
    } else if (search.match(/[?&]board=[^&]*/)) {
        search = search.replace(/([?&]board=)[^&]*/, '$1' + newBoard);
    } else {
        search = search.replace(/\?/, '?board=' + newBoard + '&');
    }
    profile["default"] = profile[newBoard];

    if (newBoard !== 'none')
        document.getElementById("lateral-panel-setup-bloc").style.backgroundImage = "url('./S4E/media/boards/" + newBoard + ".png')";
    else
        document.getElementById("lateral-panel-setup-bloc").style.backgroundImage = "url('./S4E/media/circuit_animation.gif')";
    document.getElementById("boardDescriptionSelector").selectedIndex = newBoard;
    document.getElementById("boardDescriptionSelector").value = newBoard;
    document.getElementById("boardSelected_span").textContent = profile["default"][0].description;
    document.getElementById("portSelected_span").textContent = ' : ' + document.getElementById('serialMenu').options[document.getElementById('serialMenu').selectedIndex].value;
    sessionStorage.setItem("availableSpeed", JSON.stringify(profile["default"][0]['serial']));
    window.history.pushState({}, "S4E", Code.addReplaceParamToUrl(window.location.search, "board", newBoard));
    //update serial speed list in serial monitor
    document.getElementById('serialConnectSpeed_Menu').length = 0;
    var serialConnectSpeedAvailable = profile["default"][0]['serial'];
    serialConnectSpeedAvailable.forEach((serialConnectSpeed) => {
        var option = document.createElement('option');
        option.value = serialConnectSpeed;
        option.text = serialConnectSpeed;
        document.getElementById('serialConnectSpeed_Menu').appendChild(option);
    });
    // "reboot" elements
    document.getElementById('overlayForModals').style.display = "none";
    document.getElementById('boardListModal').classList.remove('show');
    Code.setBoard();
    if (!document.getElementById("checkbox_8").checked)
        document.getElementById("checkbox_8").click();
    var xml = Blockly.Xml.workspaceToDom(Code.mainWorkspace);
    Code.mainWorkspace.clear()
    Blockly.Xml.domToWorkspace(xml, Code.mainWorkspace);
};

Code.installBoards = function(choice) {
    var select = document.getElementById("boardDescriptionSelector");
    switch (choice) {
        case 'ST':
            //verify if ST not already loaded
            if (!('ST_mp157c_dk2' in profile)) {
                profile = {...profile, ...profile_st };
                select.insertAdjacentHTML('beforeend', "<optgroup label='STmicroelectronics' class='optgroupBoards'>")
                Object.entries(profile_st).forEach(([key]) => {
                    if (key != 'default')
                        select.insertAdjacentHTML('beforeend', "<option value=" + profile[`${key}`][0]._id + ">" + profile[`${key}`][0].description + "</option>")
                });
                select.insertAdjacentHTML('beforeend', "</optgroup>");
                sessionStorage.setItem('installedBoardsST', 1);
            }
            break;
        case 'arduino':
            //verify if Arduino not already loaded
            if (!('arduino_leonardo' in profile)) {
                profile = {...profile, ...profile_arduino };
                select.insertAdjacentHTML('beforeend', "<optgroup label='Arduino' class='optgroupBoards'>")
                Object.entries(profile_arduino).forEach(([key]) => {
                    if (key != 'default')
                        select.insertAdjacentHTML('beforeend', "<option value=" + profile[`${key}`][0]._id + ">" + profile[`${key}`][0].description + "</option>")
                });
                select.insertAdjacentHTML('beforeend', "</optgroup>");
                sessionStorage.setItem('installedBoardsArduino', 1);
            }
            break;
        case 'esp':
            //verify if Arduino not already loaded
            if (!('ESP_esp32' in profile)) {
                profile = {...profile, ...profile_esp };
                select.insertAdjacentHTML('beforeend', "<optgroup label='Espressif' class='optgroupBoards'>")
                Object.entries(profile_esp).forEach(([key]) => {
                    if (key != 'default')
                        select.insertAdjacentHTML('beforeend', "<option value=" + profile[`${key}`][0]._id + ">" + profile[`${key}`][0].description + "</option>")
                });
                select.insertAdjacentHTML('beforeend', "</optgroup>");
                sessionStorage.setItem('installedBoardsESP', 1);
            }
            break;
        case 'microbit':
            //verify if Microbit not already loaded
            // if (!('ESP_esp32' in profile )) {
            //     profile = {...profile, ...profile_esp };
            //     select.insertAdjacentHTML('beforeend', "<optgroup label='Espressif' class='optgroupBoards'>")
            //     Object.entries(profile_esp).forEach(([key]) => {
            //         if (key != 'default')
            //             select.insertAdjacentHTML('beforeend', "<option value=" + profile[`${key}`][0]._id + ">" + profile[`${key}`][0].description + "</option>")
            //     });
            //     select.insertAdjacentHTML('beforeend', "</optgroup>");
            // var temp = sessionStorage.getItem('installedBoards');
            // temp[2] = 1;
            // sessionStorage.setItem('installedBoards', temp);
            // }
            break;
        default:
            break;
    }
}