/**
 * @license
 * Copyright 2020 Carles Ferrando Garcia (ferrando_cariga@gva.es)
 * SPDX-License-Identifier: BSD-3-Clause
 */

'use strict';

//text in blocks
Blockly.Msg["FIELDDROPDOWN"] = [
    ["1 (activat)", "HIGH"],
    ["0 (desactivat)", "LOW"]
];
Blockly.Msg["FIELDDROPDOWN_ONOFF"] = [
    ["turn on", "ON"],
    ["turn off", "OFF"]
];
Blockly.Msg["FIELDDROPDOWN_ONOFF2"] = [
    ["switch on", "HIGH"],
    ["switch off", "LOW"]
];
Blockly.Msg["FIELDDROPDOWN_ONOFF3"] = [
    ["close", "HIGH"],
    ["open", "LOW"]
];

//blockly array
Blockly.Msg["ARRAY_CREATE_EMPTY_TITLE"] = 'buit!';
Blockly.Msg["tab_create"] = "crea un bloc per la lista %1'";
Blockly.Msg["tab_create_fix"] = "crea el bloc 'estableix un element a la matriu %1'";
Blockly.Msg["ARRAY_taille"] = "mida";
Blockly.Msg["ARRAY_contenu"] = "conté";
Blockly.Msg["ARRAY_dim"] = "mida de ";
Blockly.Msg["ARRAY_index"] = "índex";
Blockly.Msg["_AT"] = "a";
Blockly.Msg["ARRAY_CREATE_WITH"] = "establert amb";
Blockly.Msg["ARRAY_CREATE_WITH_CONTAINER_TITLE_ADD"] = "matriu";
Blockly.Msg["ARRAY_CREATE_WITH_CONTAINER_TOOLTIP"] = "Afegeix, treu, o reorrena seccions per reconfigurar aquest bloc matriu.";
Blockly.Msg["ARRAY_CREATE_WITH_HELPURL"] = "";
Blockly.Msg["ARRAY_CREATE_WITH_INPUT_WITH"] = "una matriu";
Blockly.Msg["ARRAY_CREATE_WITH_ITEM_TITLE"] = "element";
Blockly.Msg["ARRAY_CREATE_WITH_ITEM_TOOLTIP"] = "Afegeix un element a la matriu.";
Blockly.Msg["ARRAY_CREATE_WITH_TOOLTIP"] = "Crea una matriu amb qualsevol nombre d'elements.";
Blockly.Msg["ARRAY_GETINDEX_AT"] = "obté l'índex";
Blockly.Msg["ARRAY_GETINDEX_AT1"] = "obté l'índex";
Blockly.Msg["ARRAY_GETINDEX_AT2"] = "índex";
Blockly.Msg["ARRAY_GETINDEX_HELPURL"] = "";
Blockly.Msg["ARRAY_GETINDEX_ITEM"] = "a la matriu";
Blockly.Msg["ARRAY_GETINDEX_TOOLTIP"] = "";
Blockly.Msg["ARRAY_GETINDEX_TOOLTIP1"] = "retorna el valor desat a la matriu";
Blockly.Msg["ARRAY_GETINDEX_TOOLTIP2"] = "crea una matriu del tipus seleccionat";
Blockly.Msg["ARRAY_GETINDEX_TOOLTIP3"] = "fixa un o més elements de la matriu als valors indicats";
Blockly.Msg["ARRAY_CREATE"] = "defineix ";
Blockly.Msg["ARRAY_TAILLE"] = "mida";
Blockly.Msg["ARRAY_CONTIENT"] = "amb";
Blockly.Msg["ARRAY_LIST"] = "matriu";
Blockly.Msg["ARRAY_ARRAY"] = "matriu";
Blockly.Msg["ARRAY_FIX"] = "canvia l'element de la posició";
Blockly.Msg["ARRAY_DECLARE_NAME"] = "crea matriu";
Blockly.Msg["ARRAY_DECLARE_TYPE"] = "tipus";
Blockly.Msg["ARRAY_DECLARE_SIZE"] = "nombre d'elements";
Blockly.Msg["ARRAY_DECLARE_TOOLTIP"] = "crea una matriu del tipus i de les dimensions indicades";
Blockly.Msg["ARRAY_MODIFY_INDICE"] = "estableix l'element nombre";
Blockly.Msg["ARRAY_MODIFY_NAME"] = "a la matriu";
Blockly.Msg["ARRAY_MODIFY_VALUE"] = "valor";
Blockly.Msg["ARRAY_MODIFY_TOOLTIP"] = "estableix un valor a un element de la matriu";
//blockly logic
Blockly.Msg["CONTROLS_SWITCH_CASEBREAK_TOOLTIP"] = "Afegeix una condició al bloc de «casos».";
Blockly.Msg["CONTROLS_SWITCH_DEFAULT_TOOLTIP"] = "Afegeix una condició final per defecte.";
Blockly.Msg["CONTROLS_SWITCH_HELPURL"] = "https://en.wikipedia.org/wiki/Switch_statement";
Blockly.Msg["CONTROLS_SWITCH_SWITCH_TOOLTIP"] = "Afegeix, retira, o classifica les seccions d'aquest bloc.";
Blockly.Msg["CONTROLS_SWITCH_VAR_TITLE"] = "selecciona ( ";
Blockly.Msg["CONTROLS_SWITCH_VAR_TAIL"] = ")";
Blockly.Msg["CONTROLS_SWITCH_MSG_DEFAULT"] = "per defecte";
Blockly.Msg["CONTROLS_SWITCH_MSG_CASEBREAK"] = "cas";
Blockly.Msg["CONTROLS_SWITCH_MSG_SWITCHVAR"] = "Selecciona (var)";
Blockly.Msg["CONTROLS_SWITCH_MSG_DO"] = "fes";
Blockly.Msg["CONTROLS_SWITCH_TOOLTIP_1"] = "Si el valor és cert llavors executa les ordres següents.";
Blockly.Msg["CONTROLS_SWITCH_TOOLTIP_2"] = "Si el valor és cert executa el primer bloc d'ordres. En cas contrari executa el bloc següent d'ordres.";
Blockly.Msg["CONTROLS_SWITCH_TOOLTIP_3"] = "Si el valor és cert executa el primer bloc d'ordres. En cas contrari executa el bloc següent d'ordres si la condició és certa.";
Blockly.Msg["CONTROLS_SWITCH_TOOLTIP_4"] = "Si el valor és cert executa el primer bloc d'ordres. En cas contrari executa el bloc següent d'ordres si la condició és certa. Si ninguna condició és verifica, llavors executa el darrer bloc d'ordres per defecte.";
Blockly.Msg["CONTROLS_SWITCH_VAR_TOOLTIP"] = "Desplaça el bloc des de l'esquerra per afegir-lo.";
//blockly variables
Blockly.Msg["VARIABLES_AS"] = "tipus";
Blockly.Msg["VARIABLES_SET_CONST"] = "constant";
Blockly.Msg["VARIABLES_SET_CONST_AT"] = "fixada a";
Blockly.Msg["VARIABLES_SET_CONST_TOOLTIP"] = "set a variable to non modifiable value";
Blockly.Msg["VARIABLES_SET_CONST_HELPURL"] = "https://www.arduino.cc/reference/en/language/variables/variable-scope-qualifiers/const/";
//blockly types
Blockly.Msg["ARD_TYPE_ARRAY"] = "matriu";
Blockly.Msg["ARD_TYPE_BOOL"] = "booleà";
Blockly.Msg["ARD_TYPE_CHAR"] = "caràcter";
Blockly.Msg["ARD_TYPE_ARRAY_CHAR"] = "caràcter matriu";
Blockly.Msg["ARD_TYPE_CHILDBLOCKMISSING"] = "bloc fill perdut";
Blockly.Msg["ARD_TYPE_DECIMAL"] = "decimal (float)";
Blockly.Msg["ARD_TYPE_LONG"] = "nombre enter llarg (long)";
Blockly.Msg["ARD_TYPE_NULL"] = "nul";
Blockly.Msg["ARD_TYPE_NUMBER"] = "nombre enter (int)";
Blockly.Msg["ARD_TYPE_SHORT"] = "byte";
Blockly.Msg["ARD_TYPE_TEXT"] = "text";
Blockly.Msg["ARD_TYPE_UNDEF"] = "non definit";
Blockly.Msg["ARD_TYPE_UNS_NUMBER"] = "nombre enter positiu (unsigned int)";
Blockly.Msg["ARD_TYPE_UNS_LONG"] = "nombre enter llarg positiu (unsigned long)";
Blockly.Msg["ARD_TYPE_VOLATILE"] = "nombre enter volàtil (volatile integer)";
//blockly instances
Blockly.Msg["ARD_NEW_INSTANCE"] = 'instancia nova';
Blockly.Msg["ARD_RENAME_INSTANCE"] = 'canvia nom a aquesta instancia';
Blockly.Msg["ARD_NEW_INSTANCE_TITLE"] = "nom d'instancia nou:";
Blockly.Msg["ARD_RENAME_INSTANCE_TITLE"] = 'canvia el nom a a totes les "%1" instancies en :'

//Arduino base cateory blocks
Blockly.Msg["ARDUINO_INOUT_BUILDIN_LED_HELPURL"] = "http://arduino.cc/en/Reference/DigitalWrite";
Blockly.Msg["ARDUINO_INOUT_BUILDIN_LED_INPUT"] = "posa el LED a l'estat lògic";
Blockly.Msg["ARDUINO_INOUT_BUILDIN_LED_TOOLTIP"] = "atura o engega el LED a la placa Arduino";
Blockly.Msg["ARDUINO_INOUT_DIGITAL_WRITE_INPUT1"] = "posa el pin digital";
Blockly.Msg["ARDUINO_INOUT_DIGITAL_WRITE_INPUT2"] = "a l'estat lògic";
Blockly.Msg["ARDUINO_INOUT_DIGITAL_WRITE_TOOLTIP"] = "escriu un valor (0 ou 1) al pin triat a la sortida";
Blockly.Msg["ARDUINO_INOUT_DIGITAL_WRITE_HELPURL"] = "http://arduino.cc/en/Reference/DigitalWrite";
Blockly.Msg["ARDUINO_INOUT_DIGITAL_READ_INPUT"] = "l'estat lògic del pin nº";
Blockly.Msg["ARDUINO_INOUT_DIGITAL_READ_TOOLTIP"] = "llegeix el valor (0 o 1) al pin triat a l'entrada";
Blockly.Msg["ARDUINO_INOUT_DIGITAL_READ_HELPURL"] = "http://arduino.cc/en/Reference/DigitalRead";
Blockly.Msg["ARDUINO_INOUT_ONOFF_HELPURL"] = "http://arduino.cc/en/Reference/Constants";
Blockly.Msg["ARDUINO_INOUT_ANALOG_WRITE_INPUT1"] = "write on Analog pin";
Blockly.Msg["ARDUINO_INOUT_ANALOG_WRITE_INPUT2"] = "PWM value";
Blockly.Msg["ARDUINO_INOUT_ANALOG_WRITE_TOOLTIP"] = "escriu un valor (comprés entre 0 i 255) al pin analògic.\nATENCIÓ: Verifiqueu que el pin sigui PWM~ !";
Blockly.Msg["ARDUINO_INOUT_ANALOG_WRITE_HELPURL"] = "http://arduino.cc/en/Reference/AnalogWrite";
Blockly.Msg["ARDUINO_INOUT_ANALOG_READ_INPUT"] = "el valor llegit al pin d'entrada analògica";
Blockly.Msg["ARDUINO_INOUT_ANALOG_READ_TOOLTIP"] = "llegeix el valor (comprés entre 0 i 1023) al pin analògics.\nATENCIÓ: Verifiqueu que el pin sigui A# (exemple : A0,A1,...)";
Blockly.Msg["ARDUINO_INOUT_ANALOG_READ_HELPURL"] = "http://arduino.cc/en/Reference/AnalogRead";
Blockly.Msg["ARDUINO_BASE_DELAY_DELAY_TIME"] = "fes una temporització (en ms) de";
Blockly.Msg["ARDUINO_BASE_DELAY_TOOLTIP"] = "especifica el temps d'espera, atura l'execució del programa el temps indicat";
Blockly.Msg["ARDUINO_BASE_DELAY_HELPURL"] = "http://arduino.cc/en/Reference/delay";
Blockly.Msg["ARDUINO_BASE_ANGLE"] = "angle de: ";
Blockly.Msg["ARDUINO_BASE_ANGLE_TOOLTIP"] = "angle té un valor entre 0~180°";
Blockly.Msg["ARDUINO_BASE_ANGLE_HELPURL"] = "";
Blockly.Msg["ARDUINO_BASE_MAP1"] = "map";
Blockly.Msg["ARDUINO_BASE_MAP2"] = "value to [0-";
Blockly.Msg["ARDUINO_BASE_MAP_TOOLTIP"] = "Re-maps a number from [0-1024] to another."
Blockly.Msg["ARDUINO_BASE_MAP_HELPURL"] = "https://www.arduino.cc/reference/en/language/functions/math/map/";
Blockly.Msg["ARDUINO_TONE_INPUT1"] = "emet un só al pin";
Blockly.Msg["ARDUINO_TONE_INPUT2"] = "d'una freqüència (Hz)";
Blockly.Msg["ARDUINO_TONE_TOOLTIP"] = "emet un só al pin seleccionat";
Blockly.Msg["ARDUINO_TONE_HELPURL"] = "http://arduino.cc/en/Reference/AnalogWrite";
Blockly.Msg["ARDUINO_NOTONE_INPUT"] = "atura el só al pin";
Blockly.Msg["ARDUINO_NOTONE_TOOLTIP"] = "atura el só al pin seleccionat";
Blockly.Msg["ARDUINO_NOTONE_HELPURL"] = "http://arduino.cc/en/Reference/AnalogWrite";

//SERIAL
Blockly.Msg["SERIAL_INIT"] = "fixa la velocitat del sèrie (en bauds) a";
Blockly.Msg["SERIAL_PRINT_FORMAT"] = "imprimeix en format";
Blockly.Msg["SERIAL_PRINT_FORDECIMAL"] = "decimal";
Blockly.Msg["SERIAL_PRINT_FORHEXA"] = "hexadecimal";
Blockly.Msg["SERIAL_PRINT_FORBIN"] = "binari";
Blockly.Msg["SERIAL_PRINT_FOROCT"] = "byte";
Blockly.Msg["SERIAL_READ"] = "llegeix el sèrie";
Blockly.Msg["SERIAL_AVAILABLE"] = "està disponible una dada al sèrie ?";
Blockly.Msg["SERIAL_FLUSH"] = "espera fi de transmisió al sèrie";
Blockly.Msg["SERIAL_READSTRINGUNTIL_HELPURL"] = "https://www.arduino.cc/en/Serial/ReadStringUntil";
Blockly.Msg["SERIAL_READSTRINGUNTIL_CONTENT"] = "cadena llegida fins al caràcter";
Blockly.Msg["SERIAL_READSTRINGUNTIL_TOOLTIP"] = "llegeix els caràcters un per un al cercat, i retorna tota la cadena de caràcters";
Blockly.Msg["SERIAL_PRINT_CONTENT"] = "envia el text al port sèrie:";
Blockly.Msg["SERIAL_PRINT_TOOLTIP"] = "envia dades al port sèrie per a vigilancia amb el monitor ASCII";
Blockly.Msg["SERIAL_PRINT_HELPURL"] = "https://www.arduino.cc/reference/en/language/functions/communication/serial/print/";
Blockly.Msg["SERIAL_WRITE_CONTENT"] = "writes to the serial port binary data";
Blockly.Msg["SERIAL_WRITE_TOOLTIP"] = "this data is sent as a byte or series of bytes; to send the characters representing the digits of a number use the print() function instead.";
Blockly.Msg["SERIAL_WRITE_HELPURL"] = "https://www.arduino.cc/reference/en/language/functions/communication/serial/write/";

//IOT
Blockly.Msg["IOT_LISTS_CREATE_WITH_ITEM_TITLE"] = "data";
Blockly.Msg["IOT_LISTS_CREATE_EMPTY_HELPURL"] = "https://github.com/google/blockly/wiki/Lists#create-empty-list";
Blockly.Msg["IOT_LISTS_CREATE_EMPTY_TITLE"] = "cannot send blank list";
Blockly.Msg["IOT_LISTS_CREATE_EMPTY_TOOLTIP"] = "need elements to create a list";
Blockly.Msg["IOT_LISTS_CREATE_WITH_CONTAINER_TITLE_ADD"] = "list";
Blockly.Msg["IOT_LISTS_CREATE_WITH_CONTAINER_TOOLTIP"] = "add, remove, or sort elements in list";
Blockly.Msg["IOT_LISTS_CREATE_WITH_HELPURL"] = "https://github.com/google/blockly/wiki/Lists#create-list-with";
Blockly.Msg["IOT_LISTS_CREATE_WITH_INPUT_WITH"] = "create list with";
Blockly.Msg["IOT_LISTS_CREATE_WITH_ITEM_TOOLTIP"] = "add an element to list";
Blockly.Msg["IOT_LISTS_CREATE_WITH_TOOLTIP"] = "create a list with any elements";

//Arduino base servo category blocks
Blockly.Msg["SERVO_MOVE_TOOLTIP"] = "rotació posible entre 0~180 graus";
Blockly.Msg["SERVO_MOVE_HELPURL"] = "http://www.arduino.cc/playground/ComponentLib/servo";
Blockly.Msg["SERVO_PIN"] = "PIN#";
Blockly.Msg["SERVO_MOVE_INPUT"] = "rota el servomotor";
Blockly.Msg["SERVO_MOVE_DEGREE"] = "d'un angle (0~180°)";
Blockly.Msg["SERVO_READ_DEGREES_INPUT"] = "l'angle del servomotor";
Blockly.Msg["SERVO_READ_DEGREES_TOOLTIP"] = "retorna el nombre de graus de la darrera rotació";
Blockly.Msg["SERVO_READ_DEGREES_HELPURL"] = "http://www.arduino.cc/playground/ComponentLib/servo";

//X-NUCLEO-IKS01A3 shield blocks: the X-NUCLEO-IKS01A3 is a motion MEMS and environmental sensor evaluation board system, for ST Nucleo boards.
Blockly.Msg["X_NUCLEO_IKS01A3_HTS221_TEMP_HUMIDITY_READ_INPUT"] = "onboard HTS221 sensor value";
Blockly.Msg["X_NUCLEO_IKS01A3_HTS221_TEMP_INPUT"] = "temperature";
Blockly.Msg["X_NUCLEO_IKS01A3_HTS221_HUMID_INPUT"] = "humidity";
Blockly.Msg["X_NUCLEO_IKS01A3_HTS221_TEMP_HUMIDITY_READ_TOOLTIP"] = "HTS221: capacitive digital temperature in °Celsius\nor relative humidity in percent";
Blockly.Msg["X_NUCLEO_IKS01A3_HTS221_TEMP_HUMIDITY_READ_HELPURL"] = "https://github.com/stm32duino/X-NUCLEO-IKS01A3";
Blockly.Msg["X_NUCLEO_IKS01A3_STTS751_TEMPERATURE_READ_INPUT"] = "onboard temperature sensor value";
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
Blockly.Msg["DS18B20_TEXT1"] = "a DS18B20 sensor";
Blockly.Msg["DS18B20_INPUT1"] = "is connected on pin#";
Blockly.Msg["DS18B20_INPUT2"] = "address #";
Blockly.Msg["DS18B20_TOOLTIP1"] = "test if a DS18B20 temperature sensor is present, returns 'true' if present";
Blockly.Msg["DS18B20_HELPURL"] = "https://www.carnetdumaker.net/articles/mesurer-une-temperature-avec-un-capteur-1-wire-ds18b20-et-une-carte-arduino-genuino/";
Blockly.Msg["DS18B20_TEXT2"] = "sensor DS18B20 value";
Blockly.Msg["DS18B20_TOOLTIP2"] = "returns the value of the temperature sensor, as a floating number";

//Relays actuators
Blockly.Msg["RELAY_LOGICAL_TEXT"] = "relay";
Blockly.Msg["RELAY_LOGICAL_INPUT"] = "on pin#";
Blockly.Msg["RELAY_LOGICAL_TOOLTIP"] = "the relay is a remote switch, it is a switch placed in a power circuit which is switched by a digital signal";
Blockly.Msg["RELAY_LOGICAL_HELPURL"] = "https://arduinogetstarted.com/tutorials/arduino-relay";
Blockly.Msg["RELAY_MOSFET_TEXT"] = "MOSFET transistor";
Blockly.Msg["RELAY_MOSFET_INPUT"] = "on pin#";
Blockly.Msg["RELAY_MOSFET_TOOLTIP"] = "the MOSFET transistor is a remote switch, a switch in a power circuit that is switched by a digital signal";
Blockly.Msg["RELAY_MOSFET_HELPURL"] = "http://sin.lyceeleyguescouffignal.fr/irf520-mosfet-driver-module";

//DHT sensors
Blockly.Msg["DHT_TEXT1"] = "value of";
Blockly.Msg["DHT_TEXT2"] = "on sensor";
Blockly.Msg["DHT_TEXT3"] = "wired on pin#";

// SEEED GROVE

Blockly.Msg["GROVE_INOUT_DHT_HELPURL"] = "https://github.com/winlinvip/SimpleDHT";
Blockly.Msg["GROVE_INOUT_DHT_READ_C"] = "températura °C";
Blockly.Msg["GROVE_INOUT_DHT_READ_F"] = "températura °F";
Blockly.Msg["GROVE_INOUT_DHT_READ_H"] = "humitat %";
Blockly.Msg["GROVE_INOUT_DHT_READ_PIN"] = "Pin#";
Blockly.Msg["GROVE_INOUT_DHT_READ_SENSOR"] = "mesurat pel sensor ";
Blockly.Msg["GROVE_INOUT_DHT_READ_TOOLTIP"] = "els sensors del tipus DHT tenen dos parts: termistor i sensor de humitat.";
Blockly.Msg["GROVE_INOUT_DHT_READ_TYPE"] = "valor";
Blockly.Msg["GROVE_INOUT_LED_BAR_INPUT"] = "on bar graphe";
Blockly.Msg["GROVE_INOUT_LED_BAR_PIN"] = "pin #";
Blockly.Msg["GROVE_INOUT_LED_BAR_LEVEL"] = "light LED to level";
Blockly.Msg["GROVE_INOUT_LED_BAR_ALL_OFF"] = "switch off all LED";
Blockly.Msg["GROVE_INOUT_LED_BAR_TOGGLE"] = "toggle state of LED n°";
Blockly.Msg["GROVE_INOUT_LED_BAR_TOOLTIP1"] = "select how many LED on bargraphe are ON";
Blockly.Msg["GROVE_INOUT_LED_BAR_TOOLTIP2"] = "choose which LED to switch on";
Blockly.Msg["GROVE_INOUT_LED_BAR_TOOLTIP3"] = "toggle state of LED n°";
Blockly.Msg["GROVE_INOUT_LED_BAR_HELPURL"] = "https://github.com/Seeed-Studio/Grove_LED_Bar";
Blockly.Msg['GROVE_INOUT_LCD_RGB_HELPURL'] = "https://wiki.seeedstudio.com/Grove-LCD_RGB_Backlight/";
Blockly.Msg['GROVE_INOUT_LCD_PRINT_HELPURL'] = "http://www.seeedstudio.com/wiki/index.php?title=GROVE_-_Starter_Bundle_V1.0b#Serial_LCD";
Blockly.Msg['GROVE_INOUT_LCD_PRINT_TEXT'] = "pantalla LCD";
Blockly.Msg['GROVE_INOUT_LCD_PRINT_INPUT1'] = "al pin";
Blockly.Msg['GROVE_INOUT_LCD_PRINT_INPUT2'] = "escriu a la línia 1";
Blockly.Msg['GROVE_INOUT_LCD_PRINT_INPUT3'] = "escriu a la línia 2";
Blockly.Msg['GROVE_INOUT_LCD_PRINT_INPUT4'] = "retard (ms)";
Blockly.Msg['GROVE_INOUT_LCD_PRINT_TOOLTIP'] = "escriu el text sobre una pantalla LCD de 2 línies i 16 caràcters";
Blockly.Msg['GROVE_INOUT_LCD_POWER_HELPURL'] = "https://wiki.seeedstudio.com/Grove-LCD_RGB_Backlight/";
Blockly.Msg['GROVE_INOUT_LCD_POWER_TEXT'] = "pantalla LCD";
Blockly.Msg['GROVE_INOUT_LCD_POWER_INPUT'] = "al pin";
Blockly.Msg['GROVE_INOUT_LCD_POWER_STATE'] = "potencia";
Blockly.Msg['GROVE_INOUT_LCD_POWER_TOOLTIP'] = "posa el LCD engegat/aturat";
Blockly.Msg['GROVE_INOUT_LCD_EFFECT_HELPURL'] = "https://wiki.seeedstudio.com/Grove-LCD_RGB_Backlight/";
Blockly.Msg['GROVE_INOUT_LCD_EFFECT_TEXT'] = "pantalla LCD";
Blockly.Msg['GROVE_INOUT_LCD_EFFECT_CLEAN'] = "esborra la pantalla";
Blockly.Msg['GROVE_INOUT_LCD_EFFECT_INPUT'] = "al pin";
Blockly.Msg['GROVE_INOUT_LCD_EFFECT_EFFECT'] = "efecte";
Blockly.Msg['GROVE_INOUT_LCD_EFFECT_EFFECT_EFFECT'] = [
    ["desplaça a l'esquerra", "LEFT"],
    ["desplaça a la dreta", "RIGHT"],
    ["desplaçament automàtic", "AUTO"]
];
Blockly.Msg['GROVE_INOUT_LCD_EFFECT_TOOLTIP'] = "posa el LCD engegat/aturat";
Blockly.Msg['GROVE_INOUT_LCD_INIT_HELPURL'] = "http://wiki.seeed.cc/Grove-LCD_RGB_Backlight/";
Blockly.Msg['GROVE_INOUT_LCD_INIT_TEXT'] = "INIT Grove LCD RGB";
Blockly.Msg['GROVE_INOUT_LCD_INIT_TOOLTIP'] = "Inicialització del LCD";
Blockly.Msg['GROVE_INOUT_LCD_CLEAR_HELPURL'] = "http://wiki.seeed.cc/Grove-LCD_RGB_Backlight/";
Blockly.Msg['GROVE_INOUT_LCD_CLEAR_TEXT'] = "CLEAR Grove LCD RGB";
Blockly.Msg['GROVE_INOUT_LCD_CLEAR_TOOLTIP'] = "Esborrat de la pantalla LCD";
Blockly.Msg['GROVE_INOUT_LCD_SCROLL_HELPURL'] = "http://wiki.seeed.cc/Grove-LCD_RGB_Backlight/";
Blockly.Msg['GROVE_INOUT_LCD_SCROLL_TEXT'] = "TEXT SCROLLING";
Blockly.Msg['GROVE_INOUT_LCD_SCROLL_EFFECT'] = "Escrit amb un ";
Blockly.Msg['GROVE_INOUT_LCD_SCROLL_EFFECT_FIELDDROPDOWN'] = [
    ["desplaçament a l'esquerra", "LEFT"],
    ["desplaçament a la dreta", "RIGHT"],
    ["despalaçament automàtic", "AUTO"]
];
Blockly.Msg['GROVE_INOUT_LCD_SCROLL_TOOLTIP'] = "Tria el sentit del desplaçament del texte";
Blockly.Msg['GROVE_INOUT_LCD_SET_CURSOR_TEXT'] = "SET CURSOR";
Blockly.Msg['GROVE_INOUT_LCD_SET_CURSOR_TOOLTIP'] = "Posiciona el cursor a les coordenades especificades";
Blockly.Msg['GROVE_INOUT_LCD_SET_CURSOR_HELPURL'] = "http://wiki.seeed.cc/Grove-LCD_RGB_Backlight/";
Blockly.Msg['GROVE_INOUT_LCD_SET_RGB_TEXT'] = "SET RGB Backlight";
Blockly.Msg['GROVE_INOUT_LCD_SET_RGB_TOOLTIP'] = "Defineix el color de fons";
Blockly.Msg['GROVE_INOUT_LCD_SET_RGB_HELPURL'] = "http://wiki.seeed.cc/Grove-LCD_RGB_Backlight/";
Blockly.Msg['GROVE_INOUT_LCD_PRINT_DATA'] = "PRINT";
Blockly.Msg['GROVE_INOUT_LCD_PRINT_INPUTDATA'] = "DATA";
Blockly.Msg['GROVE_INOUT_LCD_WRITE_DATA'] = "WRITE";
Blockly.Msg['GROVE_INOUT_LCD_WRITE_TOOLTIP'] = "Escriu el caràcter corresponent al codi ASCII especificat";
Blockly.Msg['GROVE_INOUT_LCD_WRITE_HELPURL'] = "http://wiki.seeed.cc/Grove-LCD_RGB_Backlight/";
Blockly.Msg['GROVE_INOUT_LCD_WRITE_INPUTDATA'] = "DATA";
Blockly.Msg['GROVE_INOUT_LCD_WRITE_FORMAT_FIELDDROPDOWN'] = [
    ["0x", "0x"],
    ["0b", "0b"],
    ["decimal", "1"],
    ["variable", "2"]
];
Blockly.Msg['GROVE_UART_WIFI_DEFINE'] = "define WiFi UART v2";
Blockly.Msg['GROVE_UART_WIFI_DEFINE_RX'] = "Rx";
Blockly.Msg['GROVE_UART_WIFI_DEFINE_TX'] = "Tx";
Blockly.Msg['GROVE_UART_WIFI_DEFINE_OBJECT'] = "name of communication object";
Blockly.Msg['GROVE_UART_WIFI_DEFINE_SPEED'] = "communication object's speed";
Blockly.Msg['GROVE_UART_WIFI_DEFINE_TOOLTIP'] = "define Grove WiFi's pins, RxTx to communicate with softserial object";
Blockly.Msg['GROVE_UART_WIFI_DEFINE_HELPURL'] = "https://wiki.seeedstudio.com/Grove-UART_Wifi_V2/";

// WiFi ESP library

Blockly.Msg['WIFI_ESP_LIBRARY_HELPURL'] = "https://github.com/bportaluri/WiFiEsp";
Blockly.Msg['WIFI_ESP_SERVER_DEFINE'] = "start WiFi server";
Blockly.Msg['WIFI_ESP_SERVER_SERIAL_NAME'] = "serial name";
Blockly.Msg['WIFI_ESP_SERVER_NAME'] = "server name";
Blockly.Msg['WIFI_ESP_SERVER_PORT'] = "server port";
Blockly.Msg['WIFI_ESP_DEFINE_TOOLTIP'] = "define web server, using communication object";
Blockly.Msg['WIFI_ESP_CHECK_SHIELD'] = "loop check if WiFi board works";
Blockly.Msg['WIFI_ESP_CHECK_SHIELD_TOOLTIP'] = "verify presence and info back on serial, if not, loop forever";
Blockly.Msg['WIFI_ESP_BEGIN'] = "attempt to connect to WiFi network";
Blockly.Msg['WIFI_ESP_BEGIN_SSID'] = "ssid";
Blockly.Msg['WIFI_ESP_BEGIN_PASS'] = "password";
Blockly.Msg['WIFI_ESP_BEGIN_TOOLTIP'] = "attempt to connect to WiFi network, if not, loop forever";
Blockly.Msg['WIFI_ESP_LOCALIP'] = "local IP address";
Blockly.Msg['WIFI_ESP_LOCALIP_TOOLTIP'] = "WiFi shield's local IP address";
Blockly.Msg['WIFI_ESP_SSID'] = "SSID of the network";
Blockly.Msg['WIFI_ESP_SSID_TOOLTIP'] = "SSID of the network you're attached to";
Blockly.Msg['WIFI_ESP_SERVER_BEGIN'] = "launch web server, named";
Blockly.Msg['WIFI_ESP_SERVER_BEGIN_TOOLTIP'] = "launch webserver which name was declared in previous block";
Blockly.Msg['WIFI_ESP_SERVER_AVAILABLE'] = "listen for available client for server";
Blockly.Msg['WIFI_ESP_SERVER_AVAILABLE_TOOLTIP'] = "listen for incoming clients";
Blockly.Msg['WIFI_ESP_SERVER_AVAILABLE'] = "listen for available client for server";
Blockly.Msg['WIFI_ESP_SERVER_AVAILABLE_TOOLTIP'] = "listen for incoming clients";
Blockly.Msg['WIFI_ESP_SERVER_CLIENT_OBJECT'] = "client has data available for reading";
Blockly.Msg['WIFI_ESP_SERVER_CLIENT_OBJECT_TOOLTIP'] = "check if client has data available for reading, false if not";
Blockly.Msg['WIFI_ESP_SERVER_CLIENT_CONNECTED'] = "client is connected to server";
Blockly.Msg['WIFI_ESP_SERVER_CLIENT_CONNECTED_TOOLTIP'] = "check if client is connected, boolean";
Blockly.Msg['WIFI_ESP_SERVER_CLIENT_AVAILABLE'] = "client is available to send datas";
Blockly.Msg['WIFI_ESP_SERVER_CLIENT_AVAILABLE_TOOLTIP'] = "check if client is available, ready to send datas, boolean";
Blockly.Msg['WIFI_ESP_SERVER_CLIENT_READ'] = "datas from server's client";
Blockly.Msg['WIFI_ESP_SERVER_CLIENT_READ_TOOLTIP'] = "get datas from client connected to server";
Blockly.Msg['WIFI_ESP_SERVER_CLIENT_STOP'] = "stop client connection";
Blockly.Msg['WIFI_ESP_SERVER_CLIENT_STOP_TOOLTIP'] = "stop connection of client";
Blockly.Msg['WIFI_ESP_SERVER_CLIENT_PRINT'] = "send to client HTML code";
Blockly.Msg['WIFI_ESP_SERVER_CLIENT_PRINT_TOOLTIP'] = "HTML response to client, line by line if needed";
Blockly.Msg['WIFI_ESP_SERVER_CLIENT_PRINT_MULTILINETEXTINPUT'] = "send to client HTML code";
Blockly.Msg['WIFI_ESP_SERVER_CLIENT_PRINT_MULTILINETEXTINPUT_TOOLTIP'] = "HTML response to client, multiline";

// NTP client library

Blockly.Msg['NTPCLIENT_HELPURL'] = "https://github.com/arduino-libraries/NTPClient";
Blockly.Msg['NTPCLIENT_DEFINE_UDP'] = "define WiFiUDP element for NTP use";
Blockly.Msg['NTPCLIENT_DEFINE_UDP_TOOLTIP'] = "define WiFiUDP element for NTPClient use";
Blockly.Msg['NTPCLIENT_DEFINE_NTPCLIENT'] = "define NTPClient object";
Blockly.Msg['NTPCLIENT_DEFINE_NTPCLIENT_NAME'] = "name of NTP client";
Blockly.Msg['NTPCLIENT_DEFINE_NTPCLIENT_TOOLTIP'] = "define NTPClient, by default 'pool.ntp.org' is used with 60 seconds update interval and no offset";
Blockly.Msg['NTPCLIENT_BEGIN'] = "begin NTP communication";
Blockly.Msg['NTPCLIENT_BEGIN_NAME'] = "name of NTP client";
Blockly.Msg['NTPCLIENT_BEGIN_TOOLTIP'] = "begin NTP communication for client with right name";
Blockly.Msg['NTPCLIENT_UPDATE'] = "update NTP information";
Blockly.Msg['NTPCLIENT_UPDATE_NAME'] = "name of NTP client";
Blockly.Msg['NTPCLIENT_UPDATE_TOOLTIP'] = "update NTP communication & information for client";
Blockly.Msg['NTPCLIENT_FORCEUPDATE'] = "force update NTP information";
Blockly.Msg['NTPCLIENT_FORCEUPDATE_NAME'] = "name of NTP client";
Blockly.Msg['NTPCLIENT_FORCEUPDATE_TOOLTIP'] = "force update NTP communication & information for client";
Blockly.Msg['NTPCLIENT_GET_EPOCH_TIME'] = "epoch time returned by the NTP server";
Blockly.Msg['NTPCLIENT_GET_EPOCH_TIME_NAME'] = "name of NTP client";
Blockly.Msg['NTPCLIENT_GET_EPOCH_TIME_TOOLTIP'] = "returns the Unix epoch, which are the seconds elapsed since 00:00:00 UTC on 1 January 1970 (leap seconds are ignored, every day is treated as having 86400 seconds)";
Blockly.Msg['NTPCLIENT_GET_FORMATTED_TIME'] = "formatted time returned by the NTP server";
Blockly.Msg['NTPCLIENT_GET_FORMATTED_TIME_NAME'] = "name of NTP client";
Blockly.Msg['NTPCLIENT_GET_FORMATTED_TIME_TOOLTIP'] = "send back time in text string";