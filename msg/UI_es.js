/**
 * @license
 * Copyright 2020 Carles Ferrando Garcia (ferrando_cariga@gva.es)
 * SPDX-License-Identifier: BSD-3-Clause
 */

var MSG = {
    title: "S4E",
    appName: "udio4Education",
    blocks: "Bloques",
    prog: "Program",
    catLogic: "💡 Lógica",
    catLoops: "↻ Bucles",
    catMath: "+ Matemáticas",
    catText: "ℜ Texto",
    catLists: "☰ Listas",
    catColour: "🌈 Color",
    catVariables: "❓ Variables",
    catFunctions: "ƒ(x) Funciones",
    listVariable: "lista",
    textVariable: "texto",
    screenshot: "Descarga una captura de pantalla",
    xmlError: "No se puede descargar vuestro fichero guardado. Quizás se ha creado con un versión diferente de S4E?",
    badXml: "Error de análisis XML:\n%1\n\nSelecciona 'De acuerdo' para abandonar los cambios o 'Cancela' para continuar editando el fichero.",
    languageSpan: "escoge idioma",
    interfaceColorSpan: "interface theme",
    codeEditorColorSpan: "code editor theme",
    themeSpan: "escoge tema",
    renderSpan: "escoge renderizador",
    fullScreenButton_span: "full screen",
    undoButton_span: "Deshaz",
    redoButton_span: "Rehaz",
    boardSpan: "escoge placa Arduino",
    boardButtonSpan: "list boards",
    verifyButton_span: "Verifica código",
    serialSpan: "escoge puerto COM",
    serialButtonSpan: "list COM port",
    uploadButton_span: "Carga",
    serialConnectButton_span: "Monitor serie",
    saveCodeButton_span: "Exporta código Arduino",
    newButton_span: "Proyecto nuevo",
    saveXMLButton_span: "Guarda fichero BlocklyDuino",
    loadXMLfakeButton_span: "Carga fichero BlocklyDuino",
    loadXML_span: "Replace existing blocks?\n'Cancel' will merge.",
    loadXML_error_span: "Error parsing XML:\n",
    resetButton_span: "Restablece BlocklyDuino",
    helpButton_span: "ayuda",
    copyCodeButton_span: "Copia código a  portapapeles",
    accessibilitySpan: "habilita modo accesibilidad (Shift + Ctrl + K):",
    defaultCursorSpan: "Cursor por defecto",
    basicCursorSpan: "Cursor básico",
    lineCursorSpan: "Cursor linia",
    keyMappingSpan: "abre asignaciones de teclado",
    themeClassicSpan: "Clásico",
    themeModernSpan: "Moderno",
    themeDeuteranopiaSpan: "Deuteranopia/Protanopia",
    themeTritanopiaSpan: "Tritanopia",
    themeZelosSpan: "Zelos",
    themeHighContrastSpan: "Alto contraste",
    themeDarkSpan: "Oscuro",
    themeBwSpan: "Negro & Blanco",
    compilationInProgress: "Placa",
    keyMappingModalSpan: "Establece asignaciones de teclado",
    detailedCompilation_span: "Compilación detallada con mensajes",
    CLI_title_span: "Configura Arduino CLI",
    installBoard_title_span: "instala placa al CLI",
    searchlLib_title_span: "busca una biblioteca",
    installLib_title_span: "instala biblioteca  al CLI",
    actionName0: "previo",
    actionName1: "siguiente",
    actionName2: "entra al bloque",
    actionName3: "sal del bloque",
    actionName4: "inserte",
    actionName5: "marca",
    actionName6: "desconecta",
    actionName7: "Caja de herramientas",
    actionName8: "salida",
    actionName9: "mueve el espacio de trabajo arriba",
    actionName10: "mueve el espacio de trabajo abajo",
    actionName11: "mueve el espacio de trabajo a izquierda",
    actionName12: "mueve el espacio de trabajo a derecha",
    actionName13: "conmuta el teclado de navegación",
    setup_sideButton_span: "configura",
    fontSizeSpan: "renderización",
    optionFontSizeBlocks: "Tamaño del tipo de letra bloques",
    optionFontSizePage: "Tamaño del tipo de letra página",
    optionFontSpacingPage: "Espaciado de letra página",
    keyMappingExplanationSpan: "accessibility: <a href='https://github.com/BlocklyDuino/BlocklyDuino-v2' target='_blank'>online documentation</a>",
    //CLI_functions.js
    config_sideButton_span: "Control del compilador Arduino CLI",
    CLI_githubLinkButton_span: "documentación",
    coreUpdateButton_msg: "Se está actualizando...\n<i class='fa fa-spinner fa-pulse fa-1_5x fa-fw'></i>",
    cleanCLIcacheButton_msg: "Se está limpiando...\n<i class='fa fa-spinner fa-pulse fa-1_5x fa-fw'></i>",
    cleanCLIcacheButton_error_msg: "Error suprimiendo la carpeta .\\tmp",
    cleanCLIcacheButton_success_msg: "Limpiado!",
    listBoardsButton_msg: "Se está buscando la placa...\n<i class='fa fa-spinner fa-pulse fa-1_5x fa-fw'></i>",
    installBoardsButton_msg: "Se está instalando el soporte de la placa, espera...\n<i class='fa fa-spinner fa-pulse fa-1_5x fa-fw'></i>",
    searchlLibButton_msg: "Se está buscando la biblioteca...\n<i class='fa fa-spinner fa-pulse fa-1_5x fa-fw'></i>",
    installLibButton_msg: "Se está instalando la biblioteca...\n<i class='fa fa-spinner fa-pulse fa-1_5x fa-fw'></i>",
    coreUpdateButton_span: "actualiza núcleo y bibliotecas",
    cleanCLIcacheButton_span: "Se está limpiando caché",
    listBoardsButton_span: "detección y listado de placas",
    installBoardsInput_span: "nombre de la placa a soportar",
    installBoardsButton_span: "instala este tipo de placa",
    searchlLibInput_span: "nombre de la biblioteca a buscar",
    searchlLibButton_span: "busca esta biblioteca",
    installLibInput_span: "nombre de la biblioteca a instalar",
    installLibButton_span: "instala esta biblioteca",
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
    serial_btn_stop: "<span class='fa fa-pause'></span> Stop",
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