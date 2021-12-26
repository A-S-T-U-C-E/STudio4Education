/**
 * @license
 * Copyright 2020 Carles Ferrando Garcia (ferrando_cariga@gva.es)
 * SPDX-License-Identifier: BSD-3-Clause
 */

'use strict';

// goog.provide('Blockly.Msg["blocks_es');

// goog.require('Blockly.Msg');

//text in blocks
Blockly.Msg["FIELDDROPDOWN"] = [
    ["1 (activado)", "HIGH"],
    ["0 (desactivado)", "LOW"]
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
Blockly.Msg["ARRAY_CREATE_EMPTY_TITLE"] = 'vacío!';
Blockly.Msg["tab_create"] = "crea un bloque para la lista %1'";
Blockly.Msg["tab_create_fix"] = "crea el bloque 'establece un elemente en la matriz %1'";
Blockly.Msg["ARRAY_CREATE_WITH"] = "establecido con";
Blockly.Msg["ARRAY_taille"] = "tamaño";
Blockly.Msg["ARRAY_contenu"] = "contiene";
Blockly.Msg["ARRAY_dim"] = "tamaño de ";
Blockly.Msg["ARRAY_index"] = "índice";
Blockly.Msg["_AT"] = "en";
Blockly.Msg["ARRAY_CREATE_WITH"] = "creado con";
Blockly.Msg["ARRAY_CREATE_WITH_CONTAINER_TITLE_ADD"] = "matriz";
Blockly.Msg["ARRAY_CREATE_WITH_CONTAINER_TOOLTIP"] = "Añade, quita, o reordena secciones para reconfigurar este bloque matriz.";
Blockly.Msg["ARRAY_CREATE_WITH_HELPURL"] = "";
Blockly.Msg["ARRAY_CREATE_WITH_INPUT_WITH"] = "una matriz";
Blockly.Msg["ARRAY_CREATE_WITH_ITEM_TITLE"] = "elemento";
Blockly.Msg["ARRAY_CREATE_WITH_ITEM_TOOLTIP"] = "Añade un elemento a la matriz.";
Blockly.Msg["ARRAY_CREATE_WITH_TOOLTIP"] = "Crea una matriz con cualquier número de elementos.";
Blockly.Msg["ARRAY_GETINDEX_AT"] = "obtiene el índice";
Blockly.Msg["ARRAY_GETINDEX_AT1"] = "obtiene el índice";
Blockly.Msg["ARRAY_GETINDEX_AT2"] = "índice";
Blockly.Msg["ARRAY_GETINDEX_HELPURL"] = "";
Blockly.Msg["ARRAY_GETINDEX_ITEM"] = "en la matriz";
Blockly.Msg["ARRAY_GETINDEX_TOOLTIP"] = "";
Blockly.Msg["ARRAY_GETINDEX_TOOLTIP1"] = "devuelve el valor guardado en la matriz";
Blockly.Msg["ARRAY_GETINDEX_TOOLTIP2"] = "crea una matriz del tipo seleccionado";
Blockly.Msg["ARRAY_GETINDEX_TOOLTIP3"] = "fija uno o mas elementos de la matriz a los valores indicados";
Blockly.Msg["ARRAY_CREATE"] = "define ";
Blockly.Msg["ARRAY_TAILLE"] = "tamaño";
Blockly.Msg["ARRAY_CONTIENT"] = "con";
Blockly.Msg["ARRAY_LIST"] = "matriz";
Blockly.Msg["ARRAY_ARRAY"] = "matriz";
Blockly.Msg["ARRAY_FIX"] = "cambia el elemento de la posición";
Blockly.Msg["ARRAY_DECLARE_NAME"] = "crea matriz";
Blockly.Msg["ARRAY_DECLARE_TYPE"] = "tipo";
Blockly.Msg["ARRAY_DECLARE_SIZE"] = "número de elementos";
Blockly.Msg["ARRAY_DECLARE_TOOLTIP"] = "crea una matriz del tipo y de las dimensiones indicadas";
Blockly.Msg["ARRAY_MODIFY_INDICE"] = "establece el elemento número";
Blockly.Msg["ARRAY_MODIFY_NAME"] = "en la matriz";
Blockly.Msg["ARRAY_MODIFY_VALUE"] = "valor";
Blockly.Msg["ARRAY_MODIFY_TOOLTIP"] = "establece un valor en un elemento de la matriz";
//blockly logic
Blockly.Msg["CONTROLS_SWITCH_CASEBREAK_TOOLTIP"] = "Add a condition to the case block.";
Blockly.Msg["CONTROLS_SWITCH_DEFAULT_TOOLTIP"] = "Add a final, catch-all condition to the if block.";
Blockly.Msg["CONTROLS_SWITCH_HELPURL"] = "https://en.wikipedia.org/wiki/Switch_statement";
Blockly.Msg["CONTROLS_SWITCH_SWITCH_TOOLTIP"] = "Add, remove, or reorder sections to reconfigure this if block.";
Blockly.Msg["CONTROLS_SWITCH_VAR_TITLE"] = "Cambiar (";
Blockly.Msg["CONTROLS_SWITCH_VAR_TAIL"] = ")";
Blockly.Msg["CONTROLS_SWITCH_MSG_DEFAULT"] = "estándar";
Blockly.Msg["CONTROLS_SWITCH_MSG_CASEBREAK"] = "caso";
Blockly.Msg["CONTROLS_SWITCH_MSG_SWITCHVAR"] = "Cambiar (var)";
Blockly.Msg["CONTROLS_SWITCH_MSG_DO"] = "hacer";
Blockly.Msg["CONTROLS_SWITCH_TOOLTIP_1"] = "If a value is true, then do some statements.";
Blockly.Msg["CONTROLS_SWITCH_TOOLTIP_2"] = "If a value is true, then do the first block of statements. Otherwise, do the second block of statements.";
Blockly.Msg["CONTROLS_SWITCH_TOOLTIP_3"] = "If the first value is true, then do the first block of statements. Otherwise, if the second value is true, do the second block of statements.";
Blockly.Msg["CONTROLS_SWITCH_TOOLTIP_4"] = "If the first value is true, then do the first block of statements. Otherwise, if the second value is true, do the second block of statements. If none of the values are true, do the last block of statements.";
Blockly.Msg["CONTROLS_SWITCH_VAR_TOOLTIP"] = "Drag from the left into here to add";
Blockly.Msg["CONTROLS_SWITCH_CASEBREAK_TOOLTIP"] = "Add additional case break do";
Blockly.Msg["CONTROLS_SWITCH_DEFAULT_TOOLTIP"] = "Add optional default action";
//blockly variables
Blockly.Msg["VARIABLES_AS"] = "tipo";
Blockly.Msg["VARIABLES_SET_CONST"] = "constante %1 fixada a %2";
Blockly.Msg["VARIABLES_SET_CONST_AT"] = " ";
Blockly.Msg["VARIABLES_SET_CONST_TOOLTIP"] = "set a variable to non modifiable value";
Blockly.Msg["VARIABLES_SET_CONST_HELPURL"] = "https://www.arduino.cc/reference/en/language/variables/variable-scope-qualifiers/const/";
//blockly types
Blockly.Msg["ARD_TYPE_ARRAY"] = "matriz";
Blockly.Msg["ARD_TYPE_BOOL"] = "booleano";
Blockly.Msg["ARD_TYPE_CHAR"] = "carácter";
Blockly.Msg["ARD_TYPE_ARRAY_CHAR"] = "matriz de carácter";
Blockly.Msg["ARD_TYPE_CHILDBLOCKMISSING"] = "bloque hijo perdido";
Blockly.Msg["ARD_TYPE_DECIMAL"] = "decimal (float)";
Blockly.Msg["ARD_TYPE_LONG"] = "número entero largo (long)";
Blockly.Msg["ARD_TYPE_NULL"] = "nulo";
Blockly.Msg["ARD_TYPE_NUMBER"] = "número entero (int)";
Blockly.Msg["ARD_TYPE_SHORT"] = "byte";
Blockly.Msg["ARD_TYPE_TEXT"] = "texto";
Blockly.Msg["ARD_TYPE_UNDEF"] = "no definido";
Blockly.Msg["ARD_TYPE_UNS_NUMBER"] = "número entero positivo (unsigned int)";
Blockly.Msg["ARD_TYPE_UNS_LONG"] = "número entero largo positivo (unsigned long)";
Blockly.Msg["ARD_TYPE_VOLATILE"] = "número entero volátil (volatile integer)";

//Arduino base cateory blocks
Blockly.Msg["ARDUINO_INOUT_BUILDIN_LED_HELPURL"] = "http://arduino.cc/en/Reference/DigitalWrite";
Blockly.Msg["ARDUINO_INOUT_BUILDIN_LED_INPUT"] = "pon el LED en el estado lógico";
Blockly.Msg["ARDUINO_INOUT_BUILDIN_LED_TOOLTIP"] = "para o enciende el LED en la placa Arduino";
Blockly.Msg["ARDUINO_INOUT_DIGITAL_WRITE_INPUT1"] = "pon el pin digital";
Blockly.Msg["ARDUINO_INOUT_DIGITAL_WRITE_INPUT2"] = "en el estado lógico";
Blockly.Msg["ARDUINO_INOUT_DIGITAL_WRITE_TOOLTIP"] = "escribe un valor (0 o 1) en el pin escogido en la salida";
Blockly.Msg["ARDUINO_INOUT_DIGITAL_WRITE_HELPURL"] = "http://arduino.cc/en/Reference/DigitalWrite";
Blockly.Msg["ARDUINO_INOUT_DIGITAL_READ_INPUT"] = "el estado lógico del pin nº";
Blockly.Msg["ARDUINO_INOUT_DIGITAL_READ_TOOLTIP"] = "lee el valor (0 o 1) en el pin escogido en la entrada";
Blockly.Msg["ARDUINO_INOUT_DIGITAL_READ_HELPURL"] = "http://arduino.cc/en/Reference/DigitalRead";
Blockly.Msg["ARDUINO_INOUT_ONOFF_HELPURL"] = "http://arduino.cc/en/Reference/Constants";
Blockly.Msg["ARDUINO_INOUT_ANALOG_WRITE_INPUT1"] = "escribe en el pin analógico ";
Blockly.Msg["ARDUINO_INOUT_ANALOG_WRITE_INPUT2"] = "el valor";
Blockly.Msg["ARDUINO_INOUT_ANALOG_WRITE_TOOLTIP"] = "escribe un valor (comprendido entre 0 y 255) en el pin analógico.\nATENCIÓN: Verifica que el pin sea PWM~ !";
Blockly.Msg["ARDUINO_INOUT_ANALOG_WRITE_HELPURL"] = "http://arduino.cc/en/Reference/AnalogWrite";
Blockly.Msg["ARDUINO_INOUT_ANALOG_READ_INPUT"] = "el valor leído en el pin de entrada analógica";
Blockly.Msg["ARDUINO_INOUT_ANALOG_READ_TOOLTIP"] = "lee el valor (comprendido entre 0 y 1023) en los pines analógicos.\nATENCIÓN: Verifica que el pin sea A# (ejemplo : A0,A1,...) ";
Blockly.Msg["ARDUINO_INOUT_ANALOG_READ_HELPURL"] = "http://arduino.cc/en/Reference/AnalogRead";
Blockly.Msg["ARDUINO_BASE_DELAY_DELAY_TIME"] = "haz una temporización (en ms) de";
Blockly.Msg["ARDUINO_BASE_DELAY_TOOLTIP"] = "especifica el tiempo de espera, para la ejecución del programa el tiempo indicado";
Blockly.Msg["ARDUINO_BASE_DELAY_HELPURL"] = "http://arduino.cc/en/Reference/delay";
Blockly.Msg["ARDUINO_BASE_ANGLE"] = "ángulo de ";
Blockly.Msg["ARDUINO_BASE_ANGLE_TOOLTIP"] = "envía un valor entre 0~180°";
Blockly.Msg["ARDUINO_BASE_ANGLE_HELPURL"] = "";
Blockly.Msg["ARDUINO_BASE_MAP1"] = "map";
Blockly.Msg["ARDUINO_BASE_MAP2"] = "value to [0-";
Blockly.Msg["ARDUINO_BASE_MAP_TOOLTIP"] = "Re-maps a number from [0-1024] to another."
Blockly.Msg["ARDUINO_BASE_MAP_HELPURL"] = "https://www.arduino.cc/reference/en/language/functions/math/map/";
Blockly.Msg["ARDUINO_TONE_INPUT1"] = "emite un sonido en el pin";
Blockly.Msg["ARDUINO_TONE_INPUT2"] = "de una frecuencia (Hz)";
Blockly.Msg["ARDUINO_TONE_TOOLTIP"] = "emite un sonido en el pin seleccionado";
Blockly.Msg["ARDUINO_TONE_HELPURL"] = "http://arduino.cc/en/Reference/AnalogWrite";
Blockly.Msg["ARDUINO_NOTONE_INPUT"] = "para el sonido en el pin";
Blockly.Msg["ARDUINO_NOTONE_TOOLTIP"] = "para el sonido en el pin seleccionado";
Blockly.Msg["ARDUINO_NOTONE_HELPURL"] = "http://arduino.cc/en/Reference/AnalogWrite";

//SERIAL
Blockly.Msg["SERIAL_INIT"] = "Serial communication init speed";
Blockly.Msg["SERIAL_PRINT_FORMAT"] = "Print  Format";
Blockly.Msg["SERIAL_PRINT_FORDECIMAL"] = "decimal";
Blockly.Msg["SERIAL_PRINT_FORHEXA"] = "hexadecimal";
Blockly.Msg["SERIAL_PRINT_FORBIN"] = "binary";
Blockly.Msg["SERIAL_PRINT_FOROCT"] = "octal";
Blockly.Msg["SERIAL_READ"] = "Serial Read";
Blockly.Msg["SERIAL_AVAILABLE"] = "Serial Available?";
Blockly.Msg["SERIAL_FLUSH"] = "Serial flush";
Blockly.Msg["SERIAL_READSTRINGUNTIL_HELPURL"] = "https://www.arduino.cc/en/Serial/ReadStringUntil";
Blockly.Msg["SERIAL_READSTRINGUNTIL_CONTENT"] = "String read until";
Blockly.Msg["SERIAL_READSTRINGUNTIL_TOOLTIP"] = "reads characters from the serial buffer into a string";
Blockly.Msg["SERIAL_PRINT_CONTENT"] = "envía el texto al puerto serie:";
Blockly.Msg["SERIAL_PRINT_TOOLTIP"] = "envía datos al puerto serie para vigilancia con el monitor ASCII";
Blockly.Msg["SERIAL_PRINT_HELPURL"] = "http://www.arduino.cc/en/Serial/Print";

//Arduino base servo category blocks
Blockly.Msg["SERVO_MOVE_TOOLTIP"] = "rotation possible between 0 ~ 180 degrees";
Blockly.Msg["SERVO_MOVE_HELPURL"] = "http://www.arduino.cc/playground/ComponentLib/servo";
Blockly.Msg["SERVO_PIN"] = "PIN#";
Blockly.Msg["SERVO_MOVE_INPUT"] = "Girar el servomotor";
Blockly.Msg["SERVO_MOVE_DEGREE"] = "en ángulo (0 ~ 180 °) de";
Blockly.Msg["SERVO_READ_DEGREES_INPUT"] = "the angle of the servo motor";
Blockly.Msg["SERVO_READ_DEGREES_TOOLTIP"] = "returns the number of degrees the last rotation";
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
Blockly.Msg["GROVE_INOUT_DHT_READ_C"] = "temperatura °C";
Blockly.Msg["GROVE_INOUT_DHT_READ_F"] = "temperatura °F";
Blockly.Msg["GROVE_INOUT_DHT_READ_H"] = "humedad %";
Blockly.Msg["GROVE_INOUT_DHT_READ_PIN"] = "Pin#";
Blockly.Msg["GROVE_INOUT_DHT_READ_SENSOR"] = "medido por el sensor ";
Blockly.Msg["GROVE_INOUT_DHT_READ_TOOLTIP"] = "los sensores del tipo DHT tienen dos partes: termistor y sensor de humedad.";
Blockly.Msg["GROVE_INOUT_DHT_READ_TYPE"] = "valor";
Blockly.Msg["GROVE_LED_BAR_INPUT"] = "on bar graphe";
Blockly.Msg["GROVE_LED_BAR_PIN"] = "pin #";
Blockly.Msg["GROVE_LED_BAR_LEVEL"] = "light LED n°";
Blockly.Msg["GROVE_LED_BAR_ALL_OFF"] = "switch off all LED";
Blockly.Msg["GROVE_LED_BAR_TOGGLE"] = "toggle state of LED n°";
Blockly.Msg["GROVE_LED_BAR_TOOLTIP1"] = "select how many LED on bargraphe are ON";
Blockly.Msg["GROVE_LED_BAR_TOOLTIP2"] = "choose which LED to switch on";
Blockly.Msg["GROVE_LED_BAR_TOOLTIP3"] = "toggle state of LED n°";
Blockly.Msg["GROVE_LED_BAR_HELPURL"] = "";