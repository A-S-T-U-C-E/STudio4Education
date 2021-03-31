/**
 * @license
 * Copyright 2020 Sébastien CANET
 * SPDX-License-Identifier: BSD-3-Clause
 */

var MSG = {
    title: "S4E",
    appName: "udio4Education",
    btnMinimize: "minimize",
    btnMaximize: "maximize",
    btnClose: "close application",
    blocks: "Blocks",
    prog: "Program",
    catLogic: "Logic",
    catLoops: "Loops",
    catMath: "Math",
    catText: "Text",
    catLists: "Lists",
    catColour: "Colour",
    catVariables: "Variables",
    catFunctions: "Functions",
    listVariable: "list",
    textVariable: "text",
    screenshot: "Download Screenshot",
    xmlError: "Could not load your saved file. Perhaps it was created with a different version of S4E?",
    badXml: "Error parsing XML:\n%1\n\nSelect 'OK' to abandon your changes or 'Cancel' to further edit the file.",
    languageSpan: "choose language",
    interfaceColorSpan: "interface theme",
    codeEditorColorSpan: "code editor theme",
    themeSpan: "choose block theme",
    renderSpan: "choose block renderer",
    fullScreenButton_span: "full screen",
    undoButton_span: "Undo",
    redoButton_span: "Redo",
    boardButtonSpan: "list boards",
    verifyButton_span: "Verify code",
    serialButtonSpan: "list COM port",
    uploadButton_span: "Upload",
    serialConnectButton_span: "monitoring & control",
    serialMonitorButton_span: "Serial monitor",
    nodeRedFlowButton_span: "node-Red flows",
    supervisionButton_span: "supervision",
    saveCodeButton_span: "Export Code",
    newButton_span: "New project",
    save_span: "Save file name?",
    sketch_name_default: "sketch_name",
    sketch_name_wrapper: "project sketch name",
    saveXMLButton_span: "Save to S4E file",
    loadXMLfakeButton_span: "Load S4E file",
    loadXML_span: "Replace existing blocks?\n'Cancel' will merge.",
    loadXML_error_span: "Error parsing XML:\n",
    resetButton_span: "Reset S4E",
    resetQuestion_span: "Reset S4E and",
    helpButton_span: "help",
    helpModalSpan_title: "Help - About",
    helpModalSpan_text:
        '<table>' +
        '<tbody>' +
        '<tr>' +
        '<td style="width: 142px;"><img src="./S4E/media/logo_only.png" alt="" width="129" height="144" /></td>' +
        '<td>' +
        '<p style="text-align: left;"><strong>STudio4Education</strong></p>' +
        '<p style="text-align: left;">Designed for <strong>Arrowhead</strong> Tools Project (<a href="https://www.arrowhead.eu/arrowheadtools" rel="nofollow">https://www.arrowhead.eu/arrowheadtools</a>), STudio4Education is a <strong>web-based visual programming editor for <a href="https://www.st.com" rel="nofollow">ST microelectronics</a></strong> boards, thanks to <a href="https://developers.google.com/blockly/" rel="nofollow">Blockly</a>, the web-based, graphical programming editor.</p>' +
        '<p style="text-align: left;">STudio4Education provides static type language blocks and code generators for simple C programming.</p>' +
        '</td>' +
        '</tr>' +
        '</tbody>' +
        '</table>' +
        '<p style="text-align: left;">Accessibility: <a href="https://github.com/A-S-T-U-C-E/STudio4Education#accessibility">online documentation</a>.</p>' +
        '<p style="text-align: left;">Blockly official documentation: <a href="https://developers.google.com/blockly/guides/configure/web/keyboard-nav" rel="nofollow">Blockly developers</a>.</p>' +
        '<p style="text-align: left;">Wiki : <a href="https://github.com/A-S-T-U-C-E/STudio4Education/wiki">on Github</a>.</p>' +
        '<p style="text-align: left;">A bug? Post it here: <a href="https://github.com/A-S-T-U-C-E/STudio4Education/issues">on Github</a>.</p>' +
        '<p style="text-align: center;">v0.8.0 - BSD3 license - Sébastien CANET',
    //menu tools
    toolsButton_span: "tools",
    wiringButton_span: "wiring",
    factoryButton_span: "block factory",
    htmlButton_span: "HTML factory",
    colorConversionButton_span: "colors encoding",
    dataConversionButton_span: "data encoding",
    //menu IoT
    iotConnectButton_span: "servers",
    launchRedServer_span: "Node-RED server",
    launchWebServer_span: "local server",
    papyrusConnect_span: "Papyrus connect",
    registerToOrchestrator_span: "Arrowhead connect",
    blynkConnect_span: "Blynk connect",
    //ace editor
    editorReadOnlyToggle_span: "code editor writable or read-only",
    copyCodeButton_span: "copy code to clipboard",
    //lateral panel
    accessibilitySpan: "enable Accessibility Mode",
    defaultCursorSpan: "Default Cursor",
    basicCursorSpan: "Basic Cursor",
    lineCursorSpan: "Line Cursor",
    keyMappingSpan: "open key mappings",
    themeClassicSpan: "Classic",
    themeModernSpan: "Modern",
    themeDeuteranopiaSpan: "Deuteranopia/Protanopia",
    themeTritanopiaSpan: "Tritanopia",
    themeZelosSpan: "Zelos",
    themeHighContrastSpan: "High Contrast",
    themeDarkSpan: "Dark",
    themeBwSpan: "Black & White",
    compilationInProgress: "Board",
    keyMappingModalSpan: "Set key mappings",
    detailedCompilation_span: "Detailed compilation verbose",
    CLI_title_span: "compiler management",
    installBoard_title_span: "board install to CLI",
    searchlLib_title_span: "search for a library",
    installLib_title_span: "library install to CLI",
    actionName0: "previous",
    actionName1: "next",
    actionName2: "in",
    actionName3: "out",
    actionName4: "insert",
    actionName5: "mark",
    actionName6: "disconnect",
    actionName7: "toolbox",
    actionName8: "exit",
    actionName9: "move workspace cursor up",
    actionName10: "move workspace cursor down",
    actionName11: "move workspace cursor left",
    actionName12: "move workspace cursor right",
    actionName13: "toggle keyboard navigation",
    setup_sideButton_span: "setup",
    config_UI_title_span: "interface",
    displaySpan: "display choice",
    displayChoiceButtons: "buttons only",
    displayChoiceBandT: "buttons + text",
    displayChoiceText: "text only",
    fontSpan: "font choice",
    fontSizeSpan: "rendering",
    optionFontSizeBlocks: "Blocks Font Size",
    optionFontSizePage: "Page Font Size",
    optionFontSpacingPage: "Page Font Spacing",
    //CLI_functions.js
    CLI_githubLinkButton_span: "documentation",
    coreUpdateButton_msg: "Updating...\n<i class='fa fa-spinner fa-pulse fa-1_5x fa-fw'></i>",
    cleanCLIcacheButton_msg: "Cleaning...\n<i class='fa fa-spinner fa-pulse fa-1_5x fa-fw'></i>",
    cleanCLIcacheButton_error_msg: "Error deleting folder .\\tmp",
    cleanCLIcacheButton_success_msg: "Cleaned!",
    listBoardsButton_msg: "Searching for board...\n<i class='fa fa-spinner fa-pulse fa-1_5x fa-fw'></i>",
    installBoardsButton_msg: "Installing board support, wait...\n<i class='fa fa-spinner fa-pulse fa-1_5x fa-fw'></i>",
    searchlLibButton_msg: "Searching for library...\n<i class='fa fa-spinner fa-pulse fa-1_5x fa-fw'></i>",
    installLibButton_msg: "Installing library...\n<i class='fa fa-spinner fa-pulse fa-1_5x fa-fw'></i>",
    coreUpdateButton_span: "update core and libraries",
    cleanCLIcacheButton_span: "cleaning cache",
    listBoardsButton_span: "detection and list boards",
    installBoardsInput_span: "name of board to support",
    installBoardsButton_span: "install this board type",
    searchlLibInput_span: "name of library to search",
    searchlLibButton_span: "search this library",
    installLibInput_span: "name of library to install",
    installLibButton_span: "install this library",
    //categories panel
    categories_title_span: "categories choice",
    //arrowhead panel
    iot_title_span: "IoT control",
    //modals
    boardListModalHeader_span: "Boards list",
    boardListModalButton_span: "Details",
    boardModal_connect: "Connector",
    boardModal_voltage: "Operating voltage",
    boardModal_voltage_normal: "Operating voltage (recommended)",
    boardModal_voltage_maxi: "Operating voltage (limits)",
    boardModal_cpu: "Microcontroler µC",
    boardModal_speed: "Clock speed",
    boardModal_inout: "Number of logical I/Os",
    boardModal_in_analog: "Number of analogue I/Os",
    boardModal_out_analog: "Number of PWM ouput",
    boardModal_i_max_out: "Max. current per pin (5V)",
    boardModal_i_max3: "Max. output current on pin 3.3V",
    boardModal_i_max_5: "Max. output current on pin 5V",
    boardModal_flash: "Flash memory",
    boardModal_sram: "SRAM memory",
    boardModal_eeprom: "EEPROM",
    portListModalHeader_span: "COMM port list",
    //IDE_functions.js
    IDE_connect: 'Connect to port ',
    IDE_select_port: 'Select a port !',
    IDE_select_board: 'Select a board !',
    IDE_verif_progress: '\nVerification: in progress...\n<i class="fa fa-spinner fa-pulse fa-1_5x fa-fw"></i>',
    IDE_verif_ok: '\nVerification: OK',
    IDE_upload1: 'Board ',
    IDE_upload2: ' on port ',
    IDE_upload3: '\nUpload: in progress...\n<i class="fa fa-spinner fa-pulse fa-1_5x fa-fw"></i>',
    IDE_upload_ok: '\nUpload: OK',
    serial_btn_start: "<span class='fa fa-play'></span> Start",
    serial_info_stop: 'stop<br>',
    serial_btn_stop: "<span class='fas fa-stop'></span> Stop",
    serial_info_start: 'communication starting<br>',
    serial_CSV: 'Export data to CSV',
    inputTextSerial: 'Text',
    btn_serialSend_span: 'Send',
    btn_serialConnect_span: 'Start',
    btn_serialPeekClear_span: 'Clean',
    btn_serialPeekCSV_span: 'Export',
    btn_serialChart_span: 'Graph',
    btn_serialChartPause_span: 'Start'
};