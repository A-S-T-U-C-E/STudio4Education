/**
 * @license
 * Copyright 2020 Sébastien CANET
 * SPDX-License-Identifier: BSD-3-Clause
 */

var MSG = {
    title: "S4E",
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
    xmlError: "Impossible de charger le fichier de sauvegarde.  Peut être a t-il été créé avec une autre version ?",
    xmlLoad: "Voulez-vous remplacer les blocs actuels ?\n 'Annuler' les fera fusionner.",
    badXml: "Erreur d’analyse du fichier :\n%1\n\nSélectionner 'OK' pour abandonner vos modifications ou 'Annuler' pour continuer à modifier le fichier.",
    languageSpan: "langue",
    levelSpan: "niveau",
    skill1_menu_span: "novice (padawan)",
    skill2_menu_span: "intermédiaire (chevalier)",
    skill3_menu_span: "expert (maître)",
    interfaceColorSpan: "thème de l'interface",
    codeEditorColorSpan: "thème de l'éditeur de code",
    themeSpan: "thème des blocs",
    renderSpan: "forme des blocs",
    fullScreenButton_span: "plein écran",
    fullToolboxButton_span: "réduire les catégories",
    blocksPictureButton_span: "show/hide pictures in blocks",
    undoButton_span: "annuler",
    redoButton_span: "refaire",
    boardButtonSpan: "liste des cartes",
    verifyButton_span: "compiler le code",
    serialButtonSpan: "lister les ports COM",
    uploadButton_span: "téléverser",
    serialConnectButton_span: "console & contrôle",
    serialMonitorButton_span: "moniteur série",
    nodeRedFlowButton_span: "node-Red - fichiers",
    supervisionButton_span: "supervision",
    saveCodeButton_span: "exporte le code",
    menuButton_span: "menu fichiers",
    newButton_span: "nouveau projet",
    save_span: "nom du fichier de sauvegarde ?",
    sketch_name_default: "nom du projet",
    sketch_name_wrapper: "nom de sauvegarde du projet",
    saveXMLButton_span: "enregistrer le fichier Blockly",
    loadXMLfakeButton_span: "ouvrir un fichier Blockly",
    loadXML_span: "Remplacer les blocs déjà présents ?\n'Annuler' les rajoutera.",
    loadXML_error_span: "Erreur dans le fichier Blockly :\n",
    resetButton_span: "réinitialiser S4E",
    resetQuestion_span: "Réinitialiser S4E et ",
    helpButton_span: "aide",
    helpModalSpan_title: "Aide - à propos",
    helpModalSpan_text: '<img src="./S4E/media/logo_only.png" alt="" style="height:100px; float:left; margin: 0 10px 10px 0;" />' +
        '<p style="text-align: left;">Créé pour le projet <a href="https://www.arrowhead.eu/arrowheadtools" rel="nofollow"><strong>Arrowhead</strong></a>, S4E est un <strong>programme web d\'édition et de programmation visuelle par blocs pour les cartes <a href="https://www.st.com" rel="nofollow">STmicroelectronics</a></strong>, il est basé sur <a href="https://developers.google.com/blockly/" rel="nofollow">Blockly</a>, l\'éditeur graphique de programmation en ligne.</p>' +
        '<p style="text-align: left;">STudio4Education fournit un environnement de programmation par blocs et leurs traductions en code C.</p>' +
        '<p style="text-align: left;">Accessibilité : <a href="https://github.com/A-S-T-U-C-E/STudio4Education#accessibility">documentation en ligne</a>.</br>' +
        'Wiki : <a href="https://github.com/A-S-T-U-C-E/STudio4Education/wiki">sur Github</a>.</br>' +
        'Un bug ? Merci d\'écrire ici : <a href="https://github.com/A-S-T-U-C-E/STudio4Education/issues">sur Github</a>.</br>' +
        'Remerciements & bibliothèques : <a href="https://github.com/A-S-T-U-C-E/STudio4Education/wiki/Thanks">sur Github</a>.</p>' +
        '<p style="text-align: center;">v0.9.3 - BSD3 license - Sébastien CANET' +
        '<p style="text-align: center;"><a href = (https://www.paypal.com/fr/cgi-bin/webscr?cmd=_flow&SESSION=o8z3KNFl16Tjlxhk1mBekCcRsG_3_NDe0CfWh8b1vfSYIbMxJnwa92YwM3y&dispatch=5885d80a13c0db1f8e263663d3faee8d4fe1dd75ca3bd4f11d72275b28239088">Merci de faire un don pour soutenir les logiciels libres !</br><img src="https://www.paypalobjects.com/fr_FR/FR/i/btn/btn_donateCC_LG.gif" alt="Paypal"/></a></p>' +
        '<p style="text-align: left;color:red;">PROFS FRANCAIS & ASSOCIATIONS</br>' +
        'vous pouvez aussi me demander une facture, légale, pour que votre établissement me fasse un <i>"don"</i> officiel par virement bancaire pour une activité de service de développement.</br>' +
        'Je ne fais pas payer de licence mais je compte sur vous pour aider du montant auquel vous estimez mes travaux.</p>',
    //menu tools
    toolsButton_span: "outils",
    wiringButton_span: "câblage de circuits",
    circuitjsButton_span: "simulateur de circuit",
    factoryButton_span: "la fabrique à blocs",
    htmlButton_span: "constructeur HTML",
    colorConversionButton_span: "encodage de couleurs",
    dataConversionButton_span: "encodage de données",
    //menu IoT
    iotConnectButton_span: "connexion aux serveurs",
    launchNodeRed_span: "lancer le serveur Node-RED",
    launchWebServer_span: "lancer le serveur local",
    papyrusConnect_span: "connexion à Papyrus",
    papyrusConnect_helper_span: "Papyrus configuration",
    papyrusConfiguration_AHF_id_span: "id du service",
    papyrusConfiguration_AHF_name_span: "nom du fichier de configuration",
    papyrusConfiguration_AHF_save_span: "enregistrer",
    ArrowheadConfiguration_helper_span: "Arrowhead configuration",
    ArrowheadConfiguration_span: "connecter comme fournisseur au serveur Arrowhead",
    ArrowheadConfiguration_span_menu: "connexion à Arrowhead",
    ArrowheadConfiguration_ServReg_span: "Registre des services",
    ArrowheadConfiguration_provider_span: "Fournisseur de service",
    ArrowheadConfiguration_consumer_span: "Consommateur",
    ArrowheadConfiguration_auth_span: "Serveur d'authorisation",
    ArrowheadConfiguration_orch_span: "Serveur d'orchestration",
    blynkConnect_span: "connexion à Blynk",
    serialConnectIOT_span: "envoi de données IdO",
    //monaco code editor
    editorDiffToggle_span: "comparer les modifications du code",
    copyCodeButton_span: "copier le code dans le presse papiers",
    openCodeButton_span: "ouvrir l'éditeur de code",
    copyConsoleButton_span: "copier la console dans le presse papiers",
    cleanConsoleButton_span: "vider la console",
    //lateral panel
    highlightSpan: "surbrillance des blocs déposés",
    minimapSpan: "(dés)active la mini carte",
    accessibilitySpan: "activer le contrôle clavier",
    defaultCursorSpan: "curseur par défaut",
    basicCursorSpan: "curseur classique",
    lineCursorSpan: "curseur ligne",
    keyMappingSpan: "attribution des touches",
    themeClassicSpan: "classique",
    themeModernSpan: "moderne",
    themeDeuteranopiaSpan: "deuteranopia/protanopia",
    themeTritanopiaSpan: "tritanopia",
    themeZelosSpan: "zelos",
    themeHighContrastSpan: "contraste élevé",
    themeDarkSpan: "sombre",
    themeBwSpan: "noir & blanc",
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
    setup_reset_button_span: "réinitialiser la configuration",
    setup_save_button_span: "sauver la configuration en cours",
    setup_load_button_span: "charger une configuration",
    config_UI_title_span: "interface",
    displaySpan: "afficher",
    displayChoiceButtons: "boutons seuls",
    displayChoiceBandT: "boutons + texte",
    displayChoiceText: "textes seuls",
    fontSpan: "police",
    fontSizeSpan: "taille de",
    optionFontSizeBlocks: "police des blocs",
    optionFontSizeEditor: "police du code",
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
    categories_content_selectAll_span: "toutes / aucune",
    categories_search_placeholder: "Chercher la catégorie...",
    //IoT panel
    iot_title_span: "Internet des Objets",
    ArrowheadConfiguration_helper_span: "Arrowhead configuration",
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
    editorMonacoModal_titlebar: "Editeur de code",
    editorMonacoModal_undo_span: "annule les modifications du code",
    editorMonacoModal_redo_span: "restaure les modifications annulées",
    editorMonacoModal_diff_span: "ouvre le panneau de comparaison avec le code d'origine",
    editorMonacoModal_ok_span: "valide les modifications du code",
    editorMonacoModal_cancel_span: "remise à zéro des modifications",
    circuitJSmodalTitle_titlebar: "simulateur de circuits électroniques",
    circuitJSmodal_run: "lancer la compilation et simulation du code",
    circuitJSmodal_stop: "arrêter la simulation du code",
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
    serialModalTitle_titlebar_span: 'Moniteur série',
    inputTextSerial: 'Texte',
    btn_serialSend_span: 'Envoyer',
    btn_serialConnect_span: "Démarrer",
    btn_serialStop_span: "Déconnecter",
    btn_serialPeekClear_span: 'Effacer',
    btn_serialAddTimeStamp_span: 'Horodatage',
    btn_serialPeekCSV_span: 'Exporter en CSV',
    btn_serialPeekJSON_span: 'Exporter en JSON',
    btn_serialChart_span: 'Graphique',
    btn_serialChartPause_span: 'Pause',
    btn_serialChartStart_span: 'Tracer',
    btn_serialChartMin_span: 'Min.',
    btn_serialChartMax_span: 'Max.',
    btn_serialChartNb_span: 'Nb.',
    input_serialChartJSONheaders_span: 'En-tête JSON (;)',
};