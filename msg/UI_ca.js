/**
 * @license
 * Copyright 2020 Carles Ferrando Garcia (ferrando_cariga@gva.es)
 * SPDX-License-Identifier: BSD-3-Clause
 */

var MSG = {
    title: "S4E",
    appName: "udio4Education",
    btnMinimize: "minimize",
    btnMaximize: "maximize",
    btnClose: "close application",
    blocks: "Blocs",
    prog: "Program",
    catLogic: "Lògica",
    catLoops: "Bucles",
    catMath: "Matemàtiques",
    catText: "Text",
    catLists: "Llstes",
    catColour: "Color",
    catVariables: "Variables",
    catFunctions: "Funcions",
    listVariable: "llista",
    textVariable: "text",
    screenshot: "Descarrega una captura de pantalla",
    xmlError: "No es pot carregar el vostre fitxer desat. Tal vegada ha estat creat amb una altra versió de S4E?",
    badXml: "Error d'anàlisi XML:\n%1\n\nSelecciona 'D\'acord' per abandonar els canvis o 'Cancel·la' per continuar editant el fitxer.",
    languageSpan: "tria idioma",
    interfaceColorSpan: "interface theme",
    codeEditorColorSpan: "code editor theme",
    themeSpan: "tria tema",
    renderSpan: "tria renderitzador",
    fullScreenButton_span: "full screen",
    fullToolboxButton_span: "shrink/expand toolbox",
    undoButton_span: "Desfés",
    redoButton_span: "Refés",
    boardButtonSpan: "list boards",
    verifyButton_span: "Verifica codi",
    serialButtonSpan: "list COM port",
    uploadButton_span: "Càrrega",
    serialConnectButton_span: "monitoring & control",
    serialMonitorButton_span: "Serial monitor",
    nodeRedFlowButton_span: "node-Red flows",
    supervisionButton_span: "supervision",
    saveCodeButton_span: "Exporta codi Arduino",
    menuButton_span: "File menu",
    newButton_span: "Projecte nou",
    save_span: "Save file name?",
    sketch_name_default: "sketch_name",
    sketch_name_wrapper: "project sketch name",
    saveXMLButton_span: "Desa fitxer S4E",
    loadXMLfakeButton_span: "Carrega fitxer S4E",
    loadXML_span: "Replace existing blocks?\n'Cancel' will merge.",
    loadXML_error_span: "Error parsing XML:\n",
    resetButton_span: "Restableix S4E",
    resetQuestion_span: "Reset S4E and",
    helpButton_span: "ajuda",
    helpModalSpan_title: "Help - About",
    helpModalSpan_text: '<table>' +
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
    papyrusConnect_helper_span: "Papyrus configuration",
    registerToOrchestrator_span: "Arrowhead connect",
    registerToOrchestrator_helper_span: "Arrowhead configuration",
    blynkConnect_span: "Blynk connect",
    serialConnectIOT_span: "connect serial to IoT",
    //ace editor
    editorReadOnlyToggle_span: "code editor writable or read-only",
    copyCodeButton_span: "Copia codi a  porta-retalls",
    //lateral panel
    highlightSpan: "highlights the content on the workspace",
    minimapSpan: "(de)activate minimap",
    accessibilitySpan: "habilita mode accessibilitat",
    defaultCursorSpan: "Cursor per defecte",
    basicCursorSpan: "Cursor bàsic",
    lineCursorSpan: "Cursor línia",
    keyMappingSpan: "obre assignacions de tecles",
    themeClassicSpan: "Clàssic",
    themeModernSpan: "Modern",
    themeDeuteranopiaSpan: "Deuteranopia/Protanopia",
    themeTritanopiaSpan: "Tritanopia",
    themeZelosSpan: "Zelos",
    themeHighContrastSpan: "Alt contrast",
    themeDarkSpan: "Fosc",
    themeBwSpan: "Negre & Blanc",
    compilationInProgress: "Placa",
    keyMappingModalSpan: "Estableix assignacions de tecles",
    detailedCompilation_span: "Compilació detallada amb missatges",
    CLI_title_span: "Configura compiler",
    installBoard_title_span: "instal·la placa al CLI",
    searchlLib_title_span: "cerca una biblioteca",
    installLib_title_span: "instal·la biblioteca  al CLI",
    actionName0: "previ",
    actionName1: "següent",
    actionName2: "entra al bloc",
    actionName3: "surt del bloc",
    actionName4: "insereix",
    actionName5: "marca",
    actionName6: "desconnecta",
    actionName7: "Caixa d'eines",
    actionName8: "sortida",
    actionName9: "mou l'espai de treball amunt",
    actionName10: "mou l'espai de treball avall",
    actionName11: "mou l'espai de treball a esquerra",
    actionName12: "mou l'espai de treball a dreta",
    actionName13: "commuta el teclat de navegació",
    setup_sideButton_span: "configura",
    config_UI_title_span: "interface",
    displaySpan: "display choice",
    displayChoiceButtons: "buttons only",
    displayChoiceBandT: "buttons + text",
    displayChoiceText: "text only",
    fontSpan: "font choice",
    fontSizeSpan: "renderització",
    optionFontSizeBlocks: "Mida del tipus de lletra blocs",
    optionFontSizePage: "Mida del tipus de lletra pàgina",
    optionFontSpacingPage: "Espaiat de lletra pàgina",
    //CLI_functions.js
    arduinoCLI_githubLinkButton_span: "documentació",
    coreUpdateButton_msg: "S'està actualitzant...\n<i class='fa fa-spinner fa-pulse fa-1_5x fa-fw'></i>",
    cleanCLIcacheButton_msg: "S'està netejant...\n<i class='fa fa-spinner fa-pulse fa-1_5x fa-fw'></i>",
    cleanCLIcacheButton_error_msg: "Error suprimint la carpeta .\\tmp",
    cleanCLIcacheButton_success_msg: "Netejat!",
    listBoardsButton_msg: "S'està cercant la placa...\n<i class='fa fa-spinner fa-pulse fa-1_5x fa-fw'></i>",
    installBoardsButton_msg: "S'està instal·lant el suport de la placa, espera...\n<i class='fa fa-spinner fa-pulse fa-1_5x fa-fw'></i>",
    searchlLibButton_msg: "S'està cercant la biblioteca...\n<i class='fa fa-spinner fa-pulse fa-1_5x fa-fw'></i>",
    installLibButton_msg: "S'està instal·lant la biblioteca...\n<i class='fa fa-spinner fa-pulse fa-1_5x fa-fw'></i>",
    coreUpdateButton_span: "actualitza nucli i biblioteques",
    cleanCLIcacheButton_span: "S'està netejant memòria cau",
    listBoardsButton_span: "detecció i llistat de plaques",
    installBoardsInput_span: "nom de la plata a suportar",
    installBoardsButton_span: "instal·la aquest tipus de placa",
    searchlLibInput_span: "nom de la bibliteca a cercar",
    searchlLibButton_span: "cerca aquesta biblioteca",
    installLibInput_span: "nom de la biblioteca a instal·lar",
    installLibButton_span: "instal·la aquesta biblioteca",
    //categories panel
    categories_title_span: "categories choice",
    //IoT panel
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
    IDE_connect: 'Connecta al port ',
    IDE_select_port: 'Selecciona el port !',
    IDE_select_board: 'Selecciona la placa !',
    IDE_verif_progress: '\nVerificació: en progres...\n<i class="fa fa-spinner fa-pulse fa-1_5x fa-fw"></i>',
    IDE_verif_ok: '\nVerificació: D\'acord',
    IDE_upload1: 'Placa ',
    IDE_upload2: ' al port ',
    IDE_upload3: '\nCàrrega: en progres...\n<i class="fa fa-spinner fa-pulse fa-1_5x fa-fw"></i>',
    IDE_upload_ok: '\nCàrrega: D\'acord',
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