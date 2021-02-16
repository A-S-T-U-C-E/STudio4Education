/**
 * @license
 * Copyright 2020 Sébastien CANET
 * SPDX-License-Identifier: BSD-3-Clause
 */

var MSG = {
    title: "S4E",
    appName: "udio4Education",
    btnMinimize: "réduire",
    btnMaximize: "agrandir",
    btnClose: "fermer le logiciel",
    blocks: "Blocs",
    prog: "Programme",
    catLogic: "Logique",
    catLoops: "Boucles",
    catMath: "Math",
    catText: "Texte",
    catLists: "Listes",
    catColour: "Couleurs",
    catVariables: "Variables",
    catFunctions: "Fonctions",
    // listVariable: "liste",
    // textVariable: "texte",
    screenshot: "Télécharger une capture d'écran",
    xmlError: "Impossible de charger le fichier de sauvegarde.  Peut être a t-il été créé avec une autre version de Blockly ?",
    badXml: "Erreur d’analyse du fichier :\n%1\n\nSélectionner 'OK' pour abandonner vos modifications ou 'Annuler' pour continuer à modifier le fichier.",
    languageSpan: "langue",
    interfaceColorSpan: "thème de l'interface",
    codeEditorColorSpan: "thème du code",
    themeSpan: "thème des blocs",
    renderSpan: "forme des blocs",
    fullScreenButton_span: "plein écran",
    undoButton_span: "annuler",
    redoButton_span: "refaire",
    boardButtonSpan: "liste des cartes",
    verifyButton_span: "compiler le code",
    serialButtonSpan: "liser les ports COM",
    uploadButton_span: "téléverser",
    serialConnectButton_span: "moniteur série",
    saveCodeButton_span: "exporte le code",
    newButton_span: "nouveau projet",
    save_span: "nom du fichier de sauvegarde ?",
    sketch_name_default: "nom_du_projet",
    sketch_name_wrapper: "nom de sauvegarde du projet",
    saveXMLButton_span: "enregistrer le fichier Blockly",
    loadXMLfakeButton_span: "ouvrir un fichier Blockly",
    loadXML_span: "Remplacer les blocs déjà présents ?\n'Annuler' les rajoutera.",
    loadXML_error_span: "Erreur dans le fichier Blockly :\n",
    resetButton_span: "réinitialiser S4E",
    resetQuestion_span: "Réinitialiser S4E et ",
    helpButton_span: "aide",
    helpModalSpan_title: "Aide",
    helpModalSpan_text:
        '<table>' +
        '<tbody>' +
        '<tr>' +
        '<td style="width: 142px;"><img src="./S4E/media/logo_only.png" alt="" width="129" height="144" /></td>' +
        '<td>' +
        '<p style="text-align: left;"><strong>STudio4Education</strong></p>' +
        '<p style="text-align: left;">Créé pour le projet <strong>Arrowhead</strong> (<a href="https://www.arrowhead.eu/arrowheadtools" rel="nofollow">https://www.arrowhead.eu/arrowheadtools</a>), STudio4Education est un <strong>programme web d\'édition et de programmation visuelle par blocs pour les cartes <a href="https://www.st.com" rel="nofollow">ST microelectronics</a></strong>, il est basé sur <a href="https://developers.google.com/blockly/" rel="nofollow">Blockly</a>, l\'éditeur graphique de programmation en ligne.</p>' +
        '<p style="text-align: left;">STudio4Education fournit un environnement de programmation par blocs et leurs traductions en code C.</p>' +
        '</td>' +
        '</tr>' +
        '</tbody>' +
        '</table>' +
        '<p style="text-align: left;">Accessibilité : <a href="https://github.com/A-S-T-U-C-E/STudio4Education#accessibility">documentation en ligne</a>.</p>' +
        '<p style="text-align: left;">Documentation officielle de Blockly : <a href="https://developers.google.com/blockly/guides/configure/web/keyboard-nav" rel="nofollow">développeurs Blockly</a>.</p>' +
        '<p style="text-align: left;">Wiki : <a href="https://github.com/A-S-T-U-C-E/STudio4Education/wiki">on Github</a>.</p>' +
        '<p style="text-align: left;">Un bug ? Merci d\'écrire ici : <a href="https://github.com/A-S-T-U-C-E/STudio4Education/issues">sur Github</a>.</p>' +
        '<p style="text-align: center;">v0.8.0 - BSD3 license - Sébastien CANET',
    //menu tools
    toolsButton_span: "outils",
    wiringButton_span: "câblage de circuits",
    factoryButton_span: "la fabrique à blocs",
    htmlButton_span: "constructeur HTML",
    colorConversionButton_span: "encodage de couleurs",
    dataConversionButton_span: "encodage de données",
    //menu IoT
    iotConnectButton_span: "connexion aux serveurs",
    launchWebServer_span: "lancer le serveur local",
    papyrusConnect_span: "connexion à Papyrus",
    registerToOrchestrator_span: "connexion à Arrowhead",
    blynkConnect_span: "connexion à Blynk",
    //ace editor
    editorReadOnlyToggle_span: "éditeur de code en lecture seule ou non",
    copyCodeButton_span: "copier le code dans le presse papiers",
    //lateral panel
    accessibilitySpan: "activer le contrôle clavier",
    defaultCursorSpan: "curseur par défaut",
    basicCursorSpan: "curseur classique",
    lineCursorSpan: "curseur ligne",
    keyMappingSpan: "attribution des touches",
    themeClassicSpan: "classique",
    themeModernSpan: "moderne",
    themeDeuteranopiaSpan: "Deuteranopia/Protanopia",
    themeTritanopiaSpan: "Tritanopia",
    themeZelosSpan: "Zelos",
    themeHighContrastSpan: "Contraste élevé",
    themeDarkSpan: "Sombre",
    themeBwSpan: "Noir & Blanc",
    compilationInProgress: "Carte",
    keyMappingModalSpan: "Attrbution des touches",
    detailedCompilation_span: "Résultats détaillés",
    CLI_title_span: "compilateur",
    installBoard_title_span: "cartes à rajouter",
    searchlLib_title_span: "recherche de bibliothèque",
    installLib_title_span: "installation de biblitohèque",
    actionName0: "précédent",
    actionName1: "suivant",
    actionName2: "rentrer dans le bloc",
    actionName3: "sortir du bloc",
    actionName4: "insérer",
    actionName5: "marquer",
    actionName6: "détacher le bloc",
    actionName7: "menu",
    actionName8: "sortie",
    actionName9: "espace de travail vers le haut",
    actionName10: "espace de travail vers le bas",
    actionName11: "espace de travail vers la gauche",
    actionName12: "espace de travail vers la droite",
    actionName13: "basculer la navigation clavier",
    setup_sideButton_span: "configuration",
    config_UI_title_span: "interface",
    displaySpan: "afficher",
    displayChoiceButtons: "boutons seuls",
    displayChoiceBandT: "boutons + texte",
    displayChoiceText: "textes seuls",
    fontSpan: "police",
    fontSizeSpan: "taille de",
    optionFontSizeBlocks: "police des blocs",
    optionFontSizePage: "police de l'interface",
    optionFontSpacingPage: "espacement entre les lettres",
    //CLI_functions.js
    CLI_githubLinkButton_span: "documentation",
    coreUpdateButton_msg: "Mise à jour en cours...\n<i class='fa fa-spinner fa-pulse fa-1_5x fa-fw'></i>",
    cleanCLIcacheButton_msg: "Nettoyage en cours...\n<i class='fa fa-spinner fa-pulse fa-1_5x fa-fw'></i>",
    cleanCLIcacheButton_error_msg: "Erreur de suppression du dossier .\\tmp",
    cleanCLIcacheButton_success_msg: "Nettoyage effectué",
    listBoardsButton_msg: "Recherche de cartes en cours...\n<i class='fa fa-spinner fa-pulse fa-1_5x fa-fw'></i>",
    installBoardsButton_msg: "Installation en cours, patience...\n<i class='fa fa-spinner fa-pulse fa-1_5x fa-fw'></i>",
    searchlLibButton_msg: "Recherche de bibliothèque en cours...\n<i class='fa fa-spinner fa-pulse fa-1_5x fa-fw'></i>",
    installLibButton_msg: "Installation de la bibliothèque en cours...\n<i class='fa fa-spinner fa-pulse fa-1_5x fa-fw'></i>",
    coreUpdateButton_span: "mise à jour des définitions et des bibliothèques",
    cleanCLIcacheButton_span: "nettoyage du cache",
    listBoardsButton_span: "détection et liste des cartes connectées",
    installBoardsInput_span: "taper le nom exact du type de carte à prendre à charge",
    installBoardsButton_span: "installer ce type de cartes",
    searchlLibInput_span: "taper le nom exact de la bibliothèque à chercher",
    searchlLibButton_span: "chercher cette bibliothèque",
    installLibInput_span: "taper le nom exact de la bibliothèque à installer",
    installLibButton_span: "installer cette bibliothèque",
    //categories panel
    categories_title_span: "catégories de blocs",
    //arrowhead panel
    iot_title_span: "Internet des Objets",
    //modals
    boardListModalHeader_span: "Liste des cartes",
    boardListModalButton_span: "Détails",
    boardModal_connect: "Connecteur",
    boardModal_voltage: "Tension de fonctionnement",
    boardModal_voltage_normal: "Tension d'alimentation (recommandée)",
    boardModal_voltage_maxi: "Tension d'alimentation (limites)",
    boardModal_cpu: "Microcontrôleur µC",
    boardModal_speed: "Vitesse d'horloge",
    boardModal_inout: "Nombre d'E/S logiques",
    boardModal_in_analog: "Nombre d'E/S analogiques",
    boardModal_out_analog: "Nombre de sorties PWM",
    boardModal_i_max_out: "Intensité maxi par broche (5V)",
    boardModal_i_max3: "Intensité maxi la sortie 3.3V",
    boardModal_i_max_5: "Intensité maxi la sortie 5V",
    boardModal_flash: "Mémoire flash",
    boardModal_sram: "Mémoire SRAM",
    boardModal_eeprom: "EEPROM",
    portListModalHeader_span: "Liste des ports de communication",
    //IDE_functions.js
    IDE_connect: 'Connexion au port ',
    IDE_select_port: 'Sélectionner un port COM !!!',
    IDE_select_board: 'Sélectionner une carte !',
    IDE_verif_progress: '\nVérification : en cours...\n<i class="fa fa-spinner fa-pulse fa-1_5x fa-fw"></i>',
    IDE_verif_ok: '\nVérification : OK',
    IDE_upload1: 'Carte ',
    IDE_upload2: ' sur port ',
    IDE_upload3: '\nTéléversement : en cours...\n<i class="fa fa-spinner fa-pulse fa-1_5x fa-fw"></i>',
    IDE_upload_ok: '\nTéléversement : OK',
    serial_btn_start: "<span class='fa fa-play'></span> Démarrer",
    serial_info_stop: 'arrêt<br>',
    serial_btn_stop: "<span class='fas fa-stop'></span> Arrêter",
    serial_info_start: 'démarrage de la communication<br>',
    serial_CSV: 'Exporter les données au format CSV',
    inputTextSerial: 'Texte',
    btn_serialSend_span: 'Envoyer',
    btn_serialConnect_span: "Démarrer",
    btn_serialPeekClear_span: 'Effacer',
    btn_serialPeekCSV_span: 'Exporter',
    btn_serialChart_span: 'Graphique',
    btn_serialChartPause_span: 'Démarrer'
};