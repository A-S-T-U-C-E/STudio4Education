/**
 * @license
 * Copyright 2020 Sébastien CANET
 * SPDX-License-Identifier: BSD-3-Clause
 */

'use strict';

//text in blocks
Blockly.Msg["FIELDDROPDOWN"] = [
    ["1 (état haut)", "HIGH"],
    ["0 (état bas)", "LOW"]
];
Blockly.Msg["FIELDDROPDOWN_ONOFF"] = [
    ["allumer", "ON"],
    ["éteindre", "OFF"]
];
Blockly.Msg["FIELDDROPDOWN_ONOFF2"] = [
    ["Allumer", "HIGH"],
    ["Eteindre", "LOW"]
];
Blockly.Msg["FIELDDROPDOWN_ONOFF3"] = [
    ["Fermer", "HIGH"],
    ["Ouvrir", "LOW"]
];

//blockly array
Blockly.Msg["ARRAY_CREATE_EMPTY_TITLE"] = 'vide !';
Blockly.Msg["tab_create"] = "Créer le bloc 'élément du tableau %1'";
Blockly.Msg["tab_create_fix"] = "Créer le bloc 'mettre un élément du tableau %1 à'";
Blockly.Msg["ARRAY_taille"] = "taille";
Blockly.Msg["ARRAY_contenu"] = "qui contient";
Blockly.Msg["ARRAY_dim"] = "taille de ";
Blockly.Msg["ARRAY_index"] = "index";
Blockly.Msg["_AT"] = "à";
Blockly.Msg["ARRAY_CREATE_WITH"] = "constituée de";
Blockly.Msg["ARRAY_CREATE_WITH_CONTAINER_TITLE_ADD"] = "liste ou tableau";
Blockly.Msg["ARRAY_CREATE_WITH_CONTAINER_TOOLTIP"] = "ajoute, enlève, ou réordonne les éléments dans le bloc Tableau.";
Blockly.Msg["ARRAY_CREATE_WITH_HELPURL"] = "";
Blockly.Msg["ARRAY_CREATE_WITH_INPUT_WITH"] = "une liste";
Blockly.Msg["ARRAY_CREATE_WITH_ITEM_TITLE"] = "élément";
Blockly.Msg["ARRAY_CREATE_WITH_ITEM_TOOLTIP"] = "ajoute un élément à la liste.";
Blockly.Msg["ARRAY_CREATE_WITH_TOOLTIP"] = "créé une liste, ou tableau, avec un nombre à définir d'éléments.";
Blockly.Msg["ARRAY_GETINDEX_AT"] = "l'élément au rang";
Blockly.Msg["ARRAY_GETINDEX_AT1"] = "l'élément au rang";
Blockly.Msg["ARRAY_GETINDEX_AT2"] = "rang";
Blockly.Msg["ARRAY_GETINDEX_HELPURL"] = "";
Blockly.Msg["ARRAY_GETINDEX_ITEM"] = "dans la liste";
Blockly.Msg["ARRAY_GETINDEX_TOOLTIP"] = "";
Blockly.Msg["ARRAY_GETINDEX_TOOLTIP1"] = "retourne la valeur stockée dans la liste ou tableau";
Blockly.Msg["ARRAY_GETINDEX_TOOLTIP2"] = "créé une liste ou tableau du type sélectionné";
Blockly.Msg["ARRAY_GETINDEX_TOOLTIP3"] = "fixe un (ou plusieurs) élément(s) de la liste ou tableau à la (aux) valeur(s) indiquée(s)";
Blockly.Msg["ARRAY_CREATE"] = "définir ";
Blockly.Msg["ARRAY_TAILLE"] = "de taille";
Blockly.Msg["ARRAY_CONTIENT"] = "qui contient";
Blockly.Msg["ARRAY_LIST"] = "la liste";
Blockly.Msg["ARRAY_ARRAY"] = "le tableau";
Blockly.Msg["ARRAY_FIX"] = "mettre l'élément de rang";
Blockly.Msg["ARRAY_DECLARE_NAME"] = "créer un tableau nommé";
Blockly.Msg["ARRAY_DECLARE_TYPE"] = "de types";
Blockly.Msg["ARRAY_DECLARE_SIZE"] = "d'un nombre d'éléments";
Blockly.Msg["ARRAY_DECLARE_TOOLTIP"] = "crée un tableau de dimension et de type indiqués";
Blockly.Msg["ARRAY_MODIFY_INDICE"] = "affecter à l'élément de rang";
Blockly.Msg["ARRAY_MODIFY_NAME"] = "dans le tableau";
Blockly.Msg["ARRAY_MODIFY_VALUE"] = "la valeur";
Blockly.Msg["ARRAY_MODIFY_TOOLTIP"] = "affecte une valeur à un élément du tableau";
//blockly logic
Blockly.Msg["CONTROLS_SWITCH_CASEBREAK_TOOLTIP"] = "Ajoute une condition au bloc 'suivant que'.";
Blockly.Msg["CONTROLS_SWITCH_DEFAULT_TOOLTIP"] = "Ajoute une condition finale, par défaut.";
Blockly.Msg["CONTROLS_SWITCH_HELPURL"] = "https://en.wikipedia.org/wiki/Switch_statement";
Blockly.Msg["CONTROLS_SWITCH_SWITCH_TOOLTIP"] = "Ajoute, retire, ou classe les sections de ce bloc.";
Blockly.Msg["CONTROLS_SWITCH_VAR_TITLE"] = "suivant que la variable ";
Blockly.Msg["CONTROLS_SWITCH_VAR_TAIL"] = "prend";
Blockly.Msg["CONTROLS_SWITCH_MSG_DEFAULT"] = "par défaut faire";
Blockly.Msg["CONTROLS_SWITCH_MSG_CASEBREAK"] = "la valeur";
Blockly.Msg["CONTROLS_SWITCH_MSG_SWITCHVAR"] = "Suivant la valeur (var)";
Blockly.Msg["CONTROLS_SWITCH_MSG_DO"] = "faire";
Blockly.Msg["CONTROLS_SWITCH_TOOLTIP_1"] = "Si une valeur est vraie alors exécuter les commandes suivantes.";
Blockly.Msg["CONTROLS_SWITCH_TOOLTIP_2"] = "Si une valeur est vraie alors exécuter le premier bloc de commandes. Sinon exécuter le bloc suivant de commandes.";
Blockly.Msg["CONTROLS_SWITCH_TOOLTIP_3"] = "Si une valeur est vraie alors exécuter le premier bloc de commandes. Sinon exécuter le bloc suivant de commandes si la condition est vraie.";
Blockly.Msg["CONTROLS_SWITCH_TOOLTIP_4"] = "Si une valeur est vraie alors exécuter le premier bloc de commandes. Sinon exécuter le bloc suivant de commandes si la condition est vraie.  Si aucune condition n'est vérifiée, alors faire le bloc de commandes par défaut.";
Blockly.Msg["CONTROLS_SWITCH_VAR_TOOLTIP"] = "Déplacer le bloc de gauche pour l'ajouter.";
//blockly variables
Blockly.Msg["VARIABLES_AS"] = "de type";
Blockly.Msg["VARIABLES_SET_CONST"] = "constante";
Blockly.Msg["VARIABLES_SET_CONST_AT"] = "fixée à";
Blockly.Msg["VARIABLES_SET_CONST_TOOLTIP"] = "créé une variable non modifiable à la valeur de ...";
Blockly.Msg["VARIABLES_SET_CONST_HELPURL"] = "https://www.arduino.cc/reference/en/language/variables/variable-scope-qualifiers/const/";
//blockly types
Blockly.Msg["ARD_TYPE_ARRAY"] = "tableau";
Blockly.Msg["ARD_TYPE_BOOL"] = "binaire (ToR)";
Blockly.Msg["ARD_TYPE_CHAR"] = "caractère";
Blockly.Msg["ARD_TYPE_ARRAY_CHAR"] = "tableau de caractères";
Blockly.Msg["ARD_TYPE_CHILDBLOCKMISSING"] = "typage manquant sur un bloc";
Blockly.Msg["ARD_TYPE_DECIMAL"] = "nombre à virgule (float)";
Blockly.Msg["ARD_TYPE_LONG"] = "nombre entier long (long)";
Blockly.Msg["ARD_TYPE_NULL"] = "vide";
Blockly.Msg["ARD_TYPE_NUMBER"] = "nombre entier (int)";
Blockly.Msg["ARD_TYPE_SHORT"] = "octet (byte)";
Blockly.Msg["ARD_TYPE_TEXT"] = "texte";
Blockly.Msg["ARD_TYPE_UNDEF"] = "non défini";
Blockly.Msg["ARD_TYPE_UNS_NUMBER"] = "nombre entier positif (unsigned int)";
Blockly.Msg["ARD_TYPE_UNS_LONG"] = "nombre entier long positif (unsigned long)";
Blockly.Msg["ARD_TYPE_VOLATILE"] = "nombre entier volatile (pour interruption)";

//Arduino base cateory blocks
Blockly.Msg["ARDUINO_INOUT_BUILDIN_LED_HELPURL"] = "http://arduino.cc/en/Reference/DigitalWrite";
Blockly.Msg["ARDUINO_INOUT_BUILDIN_LED_INPUT"] = "mettre la DEL sur la carte à l'état logique";
Blockly.Msg["ARDUINO_INOUT_BUILDIN_LED_TOOLTIP"] = "éteint ou allume la DEL sur la carte Arduino";
Blockly.Msg["ARDUINO_INOUT_DIGITAL_WRITE_INPUT1"] = "mettre la broche";
Blockly.Msg["ARDUINO_INOUT_DIGITAL_WRITE_INPUT2"] = "à l'état logique";
Blockly.Msg["ARDUINO_INOUT_DIGITAL_WRITE_TOOLTIP"] = "écrit une valeur (0 ou 1) sur la broche choisie pour la sortie d'informations logiques";
Blockly.Msg["ARDUINO_INOUT_DIGITAL_WRITE_HELPURL"] = "http://arduino.cc/en/Reference/DigitalWrite";
Blockly.Msg["ARDUINO_INOUT_DIGITAL_READ_INPUT"] = "l'état logique sur la broche";
Blockly.Msg["ARDUINO_INOUT_DIGITAL_READ_TOOLTIP"] = "lit la valeur (0 ou 1) sur la broche choisie pour l'entrée d'informations logiques";
Blockly.Msg["ARDUINO_INOUT_DIGITAL_READ_HELPURL"] = "http://arduino.cc/en/Reference/DigitalRead";
Blockly.Msg["ARDUINO_INOUT_ONOFF_HELPURL"] = "http://arduino.cc/en/Reference/Constants";
Blockly.Msg["ARDUINO_INOUT_ANALOG_WRITE_INPUT1"] = "envoyer sur la broche MLI~ ";
Blockly.Msg["ARDUINO_INOUT_ANALOG_WRITE_INPUT2"] = "la valeur";
Blockly.Msg["ARDUINO_INOUT_ANALOG_WRITE_TOOLTIP"] = "écrit une valeur (comprise entre 0 et 255) sur la broche choisie pour la sortie d'informations modulées.\nATTENTION à vérifier que la broche choisie porte le signe PWM~ !";
Blockly.Msg["ARDUINO_INOUT_ANALOG_WRITE_HELPURL"] = "http://arduino.cc/en/Reference/AnalogWrite";
Blockly.Msg["ARDUINO_INOUT_ANALOG_READ_INPUT"] = "la valeur lue sur la broche d'entrée Analogique";
Blockly.Msg["ARDUINO_INOUT_ANALOG_READ_TOOLTIP"] = "lit la valeur (comprise entre 0 et 1023) sur la broche choisie pour l'entrée d'informations analogiques.\nATTENTION à vérifier que la broche choisie soit de type A# (exemple : A0,A1,...) ";
Blockly.Msg["ARDUINO_INOUT_ANALOG_READ_HELPURL"] = "http://arduino.cc/en/Reference/AnalogRead";
Blockly.Msg["ARDUINO_BASE_DELAY_DELAY_TIME"] = "faire une temporisation (en ms) de";
Blockly.Msg["ARDUINO_BASE_DELAY_TOOLTIP"] = "spécifier le temps d'attente, arrête l'exécution du programme pendant la durée indiquée";
Blockly.Msg["ARDUINO_BASE_DELAY_HELPURL"] = "http://arduino.cc/en/Reference/delay";
Blockly.Msg["ARDUINO_BASE_ANGLE"] = "angle de ";
Blockly.Msg["ARDUINO_BASE_ANGLE_TOOLTIP"] = "renvoie une valeur entre 0~180°";
Blockly.Msg["ARDUINO_BASE_ANGLE_HELPURL"] = "";
Blockly.Msg["ARDUINO_BASE_MAP1"] = "la valeur";
Blockly.Msg["ARDUINO_BASE_MAP2"] = "ré-étalonnée de [0~";
Blockly.Msg["ARDUINO_BASE_MAP_TOOLTIP"] = "ré-étalonne une valeur comprise dans [0~1024] vers un autre intervalle."
Blockly.Msg["ARDUINO_BASE_MAP_HELPURL"] = "https://www.arduino.cc/reference/en/language/functions/math/map/";
Blockly.Msg["ARDUINO_TONE_INPUT1"] = "émettre un son sur la broche";
Blockly.Msg["ARDUINO_TONE_INPUT2"] = "d'une fréquence (Hz)";
Blockly.Msg["ARDUINO_TONE_TOOLTIP"] = "émettre un son sur la broche selectionnée";
Blockly.Msg["ARDUINO_TONE_HELPURL"] = "http://arduino.cc/en/Reference/AnalogWrite";
Blockly.Msg["ARDUINO_NOTONE_INPUT"] = "stopper le son sur la broche";
Blockly.Msg["ARDUINO_NOTONE_TOOLTIP"] = "arrêter le son sur la broche selectionnée";
Blockly.Msg["ARDUINO_NOTONE_HELPURL"] = "http://arduino.cc/en/Reference/AnalogWrite";

//SERIAL
Blockly.Msg["SERIAL_INIT"] = "fixer la vitesse (en bauds) du port série à";
Blockly.Msg["SERIAL_PRINT_FORMAT"] = "envoyer au format";
Blockly.Msg["SERIAL_PRINT_FORDECIMAL"] = "décimal";
Blockly.Msg["SERIAL_PRINT_FORHEXA"] = "hexadécimal";
Blockly.Msg["SERIAL_PRINT_FORBIN"] = "binaire";
Blockly.Msg["SERIAL_PRINT_FOROCT"] = "octal";
Blockly.Msg["SERIAL_READ"] = "donnée lue sur le port série";
Blockly.Msg["SERIAL_AVAILABLE"] = "une donnée est disponible sur le port série ?";
Blockly.Msg["SERIAL_FLUSH"] = "attente de fin de transmission par le port série";
Blockly.Msg["SERIAL_READSTRINGUNTIL_HELPURL"] = "https://www.arduino.cc/en/Serial/ReadStringUntil";
Blockly.Msg["SERIAL_READSTRINGUNTIL_CONTENT"] = "chaîne lue jusqu'au caractère";
Blockly.Msg["SERIAL_READSTRINGUNTIL_TOOLTIP"] = "lis les caractères un par un jusqu'à celui recherché, et renvoie toute la chaîne de caractères";
Blockly.Msg["SERIAL_PRINT_CONTENT"] = "afficher sur le port série le texte";
Blockly.Msg["SERIAL_PRINT_TOOLTIP"] = "envoie des données sur le port série pour surveillance par le moniteur en ASCII";
Blockly.Msg["SERIAL_PRINT_HELPURL"] = "http://www.arduino.cc/en/Serial/Print";

//IOT
Blockly.Msg["IOT_LISTS_CREATE_WITH_ITEM_TITLE"] = "donnée";
Blockly.Msg["IOT_LISTS_CREATE_EMPTY_HELPURL"] = "https://github.com/google/blockly/wiki/Lists#create-empty-list";
Blockly.Msg["IOT_LISTS_CREATE_EMPTY_TITLE"] = "ne peut pas renvoyer une liste vide";
Blockly.Msg["IOT_LISTS_CREATE_EMPTY_TOOLTIP"] = "il faut rajouter des éléments pour envoyer une liste";
Blockly.Msg["IOT_LISTS_CREATE_WITH_CONTAINER_TITLE_ADD"] = "liste";
Blockly.Msg["IOT_LISTS_CREATE_WITH_CONTAINER_TOOLTIP"] = "Ajouter, supprimer, ou réordonner les éléments pour reconfigurer cette liste.";
Blockly.Msg["IOT_LISTS_CREATE_WITH_HELPURL"] = "https://github.com/google/blockly/wiki/Lists#create-list-with";
Blockly.Msg["IOT_LISTS_CREATE_WITH_INPUT_WITH"] = "envoyer une liste avec";
Blockly.Msg["IOT_LISTS_CREATE_WITH_ITEM_TOOLTIP"] = "Ajouter un élément à la liste.";
Blockly.Msg["IOT_LISTS_CREATE_WITH_TOOLTIP"] = "Créer une liste avec un nombre quelconque d’éléments.";

//Arduino base servo category blocks
Blockly.Msg["SERVO_MOVE_TOOLTIP"] = "rotation possible entre 0~180 degrés";
Blockly.Msg["SERVO_MOVE_HELPURL"] = "http://www.arduino.cc/playground/ComponentLib/servo";
Blockly.Msg["SERVO_PIN"] = "sur la broche";
Blockly.Msg["SERVO_MOVE_INPUT"] = "orienter le servo-moteur";
Blockly.Msg["SERVO_MOVE_DEGREE"] = "d'un angle (0~180°) de";
Blockly.Msg["SERVO_READ_DEGREES_INPUT"] = "l'angle du servo-moteur";
Blockly.Msg["SERVO_READ_DEGREES_TOOLTIP"] = "renvoie le nombre de degrés de la dernière rotation";
Blockly.Msg["SERVO_READ_DEGREES_HELPURL"] = "http://www.arduino.cc/playground/ComponentLib/servo";

//X-NUCLEO-IKS01A3 shield blocks: the X-NUCLEO-IKS01A3 is a motion MEMS and environmental sensor evaluation board system, for ST Nucleo boards.
Blockly.Msg["X_NUCLEO_IKS01A3_HTS221_TEMP_HUMIDITY_READ_INPUT"] = "onboard HTS221 sensor value";
Blockly.Msg["X_NUCLEO_IKS01A3_HTS221_TEMP_INPUT"] = "température";
Blockly.Msg["X_NUCLEO_IKS01A3_HTS221_HUMID_INPUT"] = "humidité";
Blockly.Msg["X_NUCLEO_IKS01A3_HTS221_TEMP_HUMIDITY_READ_TOOLTIP"] = "HTS221: capacitive digital temperature in °Celsius\nor relative humidity in percent";
Blockly.Msg["X_NUCLEO_IKS01A3_HTS221_TEMP_HUMIDITY_READ_HELPURL"] = "https://github.com/stm32duino/X-NUCLEO-IKS01A3";
Blockly.Msg["X_NUCLEO_IKS01A3_STTS751_TEMPERATURE_READ_INPUT"] = "valeur de la température";
Blockly.Msg["X_NUCLEO_IKS01A3_STTS751_TEMPERATURE_READ_TOOLTIP"] = "STTS751: absolute temperature in °Celsius (–40 °C to +125 °C)";
Blockly.Msg["X_NUCLEO_IKS01A3_STTS751_TEMPERATURE_READ_HELPURL"] = "https://github.com/stm32duino/X-NUCLEO-IKS01A3";
Blockly.Msg["X_NUCLEO_IKS01A3_LPS22HH_PRESSURE_READ_INPUT"] = "onboard LPS22HH sensor value";
Blockly.Msg["X_NUCLEO_IKS01A3_LPS22HH_TEMP_INPUT"] = "temperature";
Blockly.Msg["X_NUCLEO_IKS01A3_LPS22HH_PRESSURE_INPUT"] = "pressure";
Blockly.Msg["X_NUCLEO_IKS01A3_LPS22HH_PRESSURE_READ_TOOLTIP"] = "LPS22HH: MEMS pressure sensor, 260-1260 hPa absolute digital output barometer";
Blockly.Msg["X_NUCLEO_IKS01A3_LPS22HH_PRESSURE_READ_HELPURL"] = "https://github.com/stm32duino/X-NUCLEO-IKS01A3";
Blockly.Msg["X_NUCLEO_IKS01A3_LIS2DW12_ACCELEROMETER_INPUT"] = "onboard 3D accelerometer sensor value";
Blockly.Msg["X_NUCLEO_IKS01A3_LIS2DW12_ACCELEROMETER_X"] = "axis X";
Blockly.Msg["X_NUCLEO_IKS01A3_LIS2DW12_ACCELEROMETER_Y"] = "axis Y";
Blockly.Msg["X_NUCLEO_IKS01A3_LIS2DW12_ACCELEROMETER_Z"] = "axis Z";
Blockly.Msg["X_NUCLEO_IKS01A3_LIS2DW12_ACCELEROMETER_TOOLTIP"] = "LIS2DW12: MEMS 3D accelerometer (±2/±4/±8/±16 g)";
Blockly.Msg["X_NUCLEO_IKS01A3_LIS2DW12_ACCELEROMETER_HELPURL"] = "https://github.com/stm32duino/X-NUCLEO-IKS01A3";
Blockly.Msg["X_NUCLEO_IKS01A3_LSM6DSO_6DORIENTATION_INPUT"] = "onboard gyroscope sensor value";
Blockly.Msg["X_NUCLEO_IKS01A3_LSM6DSO_6DORIENTATION_ACC"] = "accelerometer";
Blockly.Msg["X_NUCLEO_IKS01A3_LSM6DSO_6DORIENTATION_GYRO"] = "gyroscope";
Blockly.Msg["X_NUCLEO_IKS01A3_LSM6DSO_6DORIENTATION_X"] = "axis X";
Blockly.Msg["X_NUCLEO_IKS01A3_LSM6DSO_6DORIENTATION_Y"] = "axis Y";
Blockly.Msg["X_NUCLEO_IKS01A3_LSM6DSO_6DORIENTATION_Z"] = "axis Z";
Blockly.Msg["X_NUCLEO_IKS01A3_LSM6DSO_6DORIENTATION_TOOLTIP"] = "LSM6DSO: MEMS 3D accelerometer (±2/±4/±8/±16 g) + 3D gyroscope (±125/±250/±500/±1000/±2000 dps) ";
Blockly.Msg["X_NUCLEO_IKS01A3_LSM6DSO_6DORIENTATION_HELPURL"] = "https://github.com/stm32duino/X-NUCLEO-IKS01A3";
Blockly.Msg["X_NUCLEO_IKS01A3_LIS2MDL_MAGNETIC_INPUT"] = "onboard 3D magnetometer sensor value";
Blockly.Msg["X_NUCLEO_IKS01A3_LIS2MDL_MAGNETIC_X"] = "axis X";
Blockly.Msg["X_NUCLEO_IKS01A3_LIS2MDL_MAGNETIC_Y"] = "axis Y";
Blockly.Msg["X_NUCLEO_IKS01A3_LIS2MDL_MAGNETIC_Z"] = "axis Z";
Blockly.Msg["X_NUCLEO_IKS01A3_LIS2MDL_MAGNETIC_TOOLTIP"] = "LIS2MDL: MEMS 3D magnetometer (±50 gauss)";
Blockly.Msg["X_NUCLEO_IKS01A3_LIS2MDL_MAGNETIC_HELPURL"] = "https://github.com/stm32duino/X-NUCLEO-IKS01A3";

//DS18B20 sensors
Blockly.Msg["DS18B20_TEXT1"] = "un capteur DS18B20";
Blockly.Msg["DS18B20_INPUT1"] = "est présent sur la broche";
Blockly.Msg["DS18B20_INPUT2"] = "à l'adresse";
Blockly.Msg["DS18B20_TOOLTIP1"] = "test si un capteur de température est présent, renvoie 'vrai' si présent";
Blockly.Msg["DS18B20_HELPURL"] = "https://www.carnetdumaker.net/articles/mesurer-une-temperature-avec-un-capteur-1-wire-ds18b20-et-une-carte-arduino-genuino/";
Blockly.Msg["DS18B20_TEXT2"] = "la valeur du capteur DS18B20";
Blockly.Msg["DS18B20_TOOLTIP2"] = "renvoie la valeur du capteur de température, en nombre à virgule.";

//Relays actuators
Blockly.Msg["RELAY_LOGICAL_TEXT"] = "le relais";
Blockly.Msg["RELAY_LOGICAL_INPUT"] = "connecté sur la broche N°";
Blockly.Msg["RELAY_LOGICAL_TOOLTIP"] = "un relais est un télérupteur, c'est un interrupteur placé dans un circuit de puissance qui est actionné par un signal numérique";
Blockly.Msg["RELAY_LOGICAL_HELPURL"] = "http://riton-duino.blogspot.com/2018/08/alimenter-un-relais-transistor.html";
Blockly.Msg["RELAY_MOSFET_TEXT"] = "le transistor MOSFET";
Blockly.Msg["RELAY_MOSFET_INPUT"] = "connecté sur la broche N°";
Blockly.Msg["RELAY_MOSFET_TOOLTIP"] = "un transistor MOSFET est un télérupteur, c'est un interrupteur placé dans un circuit de puissance qui est actionné par un signal numérique";
Blockly.Msg["RELAY_MOSFET_HELPURL"] = "http://sin.lyceeleyguescouffignal.fr/irf520-mosfet-driver-module";

//DHT sensors
Blockly.Msg["DHT_TEXT1"] = "valeur en";
Blockly.Msg["DHT_TEXT2"] = "du capteur";
Blockly.Msg["DHT_TEXT3"] = "sur la broche";

// SEEED GROVE

Blockly.Msg["GROVE_INOUT_DHT_HELPURL"] = "https://github.com/winlinvip/SimpleDHT";
Blockly.Msg["GROVE_INOUT_DHT_READ_C"] = "de la température °C";
Blockly.Msg["GROVE_INOUT_DHT_READ_F"] = "de la température °F";
Blockly.Msg["GROVE_INOUT_DHT_READ_H"] = "du % d'humidité";
Blockly.Msg["GROVE_INOUT_DHT_READ_PIN"] = "sur la broche n°";
Blockly.Msg["GROVE_INOUT_DHT_READ_SENSOR"] = "mesurée par le capteur ";
Blockly.Msg["GROVE_INOUT_DHT_READ_TOOLTIP"] = "les capteurs de type DHT comportent 2 parties : thermistance et capteur d'humidité.";
Blockly.Msg["GROVE_INOUT_DHT_READ_TYPE"] = "valeur";
Blockly.Msg["GROVE_INOUT_LED_BAR_INPUT"] = "sur bar graphe";
Blockly.Msg["GROVE_INOUT_LED_BAR_PIN"] = "connecté broche";
Blockly.Msg["GROVE_INOUT_LED_BAR_LEVEL"] = "allumer la DEL n°";
Blockly.Msg["GROVE_INOUT_LED_BAR_ALL_OFF"] = "éteindre toutes les DEL";
Blockly.Msg["GROVE_INOUT_LED_BAR_TOGGLE"] = "allumer la DEL n°";
Blockly.Msg["GROVE_INOUT_LED_BAR_TOOLTIP1"] = "met à zéro toutes les DEL, le bar-graphe est éteint";
Blockly.Msg["GROVE_INOUT_LED_BAR_TOOLTIP2"] = "choisir les DEL allumées";
Blockly.Msg["GROVE_INOUT_LED_BAR_TOOLTIP3"] = "change l'état de la DEL, si allumée alors on l'éteint, et inversement";
Blockly.Msg["GROVE_INOUT_LED_BAR_HELPURL"] = "https://github.com/Seeed-Studio/Grove_LED_Bar";
Blockly.Msg['GROVE_INOUT_LCD_RGB_HELPURL'] = "https://wiki.seeedstudio.com/Grove-LCD_RGB_Backlight/";
Blockly.Msg['GROVE_INOUT_LCD_PRINT_HELPURL'] = "http://www.seeedstudio.com/wiki/index.php?title=GROVE_-_Starter_Bundle_V1.0b#Serial_LCD";
Blockly.Msg['GROVE_INOUT_LCD_PRINT_TEXT'] = "écran LCD";
Blockly.Msg['GROVE_INOUT_LCD_PRINT_INPUT1'] = "sur la broche";
Blockly.Msg['GROVE_INOUT_LCD_PRINT_INPUT2'] = "écrire sur la ligne 1";
Blockly.Msg['GROVE_INOUT_LCD_PRINT_INPUT3'] = "écrire sur la ligne 2";
Blockly.Msg['GROVE_INOUT_LCD_PRINT_INPUT4'] = "pendant (ms)";
Blockly.Msg['GROVE_INOUT_LCD_PRINT_TOOLTIP'] = "écris le texte sur un écran LCD série de 2 lignes sur 16 caractères";
Blockly.Msg['GROVE_INOUT_LCD_POWER_HELPURL'] = "https://wiki.seeedstudio.com/Grove-LCD_RGB_Backlight/";
Blockly.Msg['GROVE_INOUT_LCD_POWER_TEXT'] = "écran LCD";
Blockly.Msg['GROVE_INOUT_LCD_POWER_INPUT'] = "sur la broche";
Blockly.Msg['GROVE_INOUT_LCD_POWER_STATE'] = "mettre sur";
Blockly.Msg['GROVE_INOUT_LCD_POWER_TOOLTIP'] = "éclairage de l'écran LCD on/off";
Blockly.Msg['GROVE_INOUT_LCD_EFFECT_HELPURL'] = "https://wiki.seeedstudio.com/Grove-LCD_RGB_Backlight/";
Blockly.Msg['GROVE_INOUT_LCD_EFFECT_TEXT'] = "écran LCD";
Blockly.Msg['GROVE_INOUT_LCD_EFFECT_CLEAN'] = "effacer l'écran";
Blockly.Msg['GROVE_INOUT_LCD_EFFECT_INPUT'] = "sur la broche";
Blockly.Msg['GROVE_INOUT_LCD_EFFECT_EFFECT'] = "écrit avec l'effet";
Blockly.Msg['GROVE_INOUT_LCD_EFFECT_EFFECT_EFFECT'] = [
    ["défilement à gauche", "LEFT"],
    ["défilement à droite", "RIGHT"],
    ["défilement automatique", "AUTO"]
];
Blockly.Msg['GROVE_INOUT_LCD_EFFECT_TOOLTIP'] = "Turn LCD power on/off";
Blockly.Msg['GROVE_INOUT_LCD_INIT_HELPURL'] = "https://wiki.seeedstudio.com/Grove-LCD_RGB_Backlight/";
Blockly.Msg['GROVE_INOUT_LCD_INIT_TEXT'] = "initialisation du LCD";
Blockly.Msg['GROVE_INOUT_LCD_INIT_TOOLTIP'] = "initialisation du LCD";
Blockly.Msg['GROVE_INOUT_LCD_CLEAR_HELPURL'] = "https://wiki.seeedstudio.com/Grove-LCD_RGB_Backlight/";
Blockly.Msg['GROVE_INOUT_LCD_CLEAR_TEXT'] = "nettoyage du LCD";
Blockly.Msg['GROVE_INOUT_LCD_CLEAR_TOOLTIP'] = "effaçage de l'écran LCD";
Blockly.Msg['GROVE_INOUT_LCD_SCROLL_HELPURL'] = "https://wiki.seeedstudio.com/Grove-LCD_RGB_Backlight/";
Blockly.Msg['GROVE_INOUT_LCD_SCROLL_TEXT'] = "défilement du texte";
Blockly.Msg['GROVE_INOUT_LCD_SCROLL_EFFECT'] = "écrit avec l\'effet de ";
Blockly.Msg['GROVE_INOUT_LCD_SCROLL_EFFECT_FIELDDROPDOWN'] = [
    ["défilement à gauche", "LEFT"],
    ["défilement à droite", "RIGHT"],
    ["défilement automatique", "AUTO"]
];
Blockly.Msg['GROVE_INOUT_LCD_SCROLL_TOOLTIP'] = "choix du sens de défilement du texte";
Blockly.Msg['GROVE_INOUT_LCD_SET_CURSOR_TEXT'] = "positionne le curseur";
Blockly.Msg['GROVE_INOUT_LCD_SET_CURSOR_TOOLTIP'] = "positionne le curseur aux coordonnées spécifiées";
Blockly.Msg['GROVE_INOUT_LCD_SET_CURSOR_HELPURL'] = "https://wiki.seeedstudio.com/Grove-LCD_RGB_Backlight/";
Blockly.Msg['GROVE_INOUT_LCD_SET_RGB_TEXT'] = "définir la couleur d\'arrière - plan ";
Blockly.Msg['GROVE_INOUT_LCD_SET_RGB_TOOLTIP'] = "définit la couleur du rétro-éclairage";
Blockly.Msg['GROVE_INOUT_LCD_SET_RGB_HELPURL'] = "https://wiki.seeedstudio.com/Grove-LCD_RGB_Backlight/";
Blockly.Msg['GROVE_INOUT_LCD_PRINT_DATA'] = "affiche";
Blockly.Msg['GROVE_INOUT_LCD_PRINT_INPUTDATA'] = "donnée";
Blockly.Msg['GROVE_INOUT_LCD_WRITE_DATA'] = "écrit";
Blockly.Msg['GROVE_INOUT_LCD_WRITE_TOOLTIP'] = "écrit le caractère correspondant au code ASCII spécifié";
Blockly.Msg['GROVE_INOUT_LCD_WRITE_HELPURL'] = "https://wiki.seeedstudio.com/Grove-LCD_RGB_Backlight/";
Blockly.Msg['GROVE_INOUT_LCD_WRITE_INPUTDATA'] = "donnée";
Blockly.Msg['GROVE_INOUT_LCD_WRITE_FORMAT_FIELDDROPDOWN'] = [
    ["0x", "0x"],
    ["0b", "0b"],
    ["décimal", "1"],
    ["variable", "2"]
];