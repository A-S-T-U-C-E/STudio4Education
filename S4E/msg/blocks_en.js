/**
 * @license
 * Copyright 2020 Sébastien CANET
 * SPDX-License-Identifier: BSD-3-Clause
 */

'use strict';

//text in blocks
Blockly.Msg["FIELDDROPDOWN"] = [
    ["HIGH", "HIGH"],
    ["LOW", "LOW"]
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
Blockly.Msg["ARRAY_CREATE_EMPTY_TITLE"] = 'empty!';
Blockly.Msg["tab_create"] = "create element block for array %1'";
Blockly.Msg["tab_create_fix"] = "create block 'set element in array %1 to'";
Blockly.Msg["ARRAY_taille"] = "size";
Blockly.Msg["ARRAY_contenu"] = "contain";
Blockly.Msg["ARRAY_dim"] = "size of ";
Blockly.Msg["ARRAY_index"] = "index";
Blockly.Msg["_AT"] = "to";
Blockly.Msg["ARRAY_CREATE_WITH"] = "created with";
Blockly.Msg["ARRAY_CREATE_WITH_CONTAINER_TITLE_ADD"] = "array";
Blockly.Msg["ARRAY_CREATE_WITH_CONTAINER_TOOLTIP"] = "Add, remove, or reorder sections to reconfigure this array block.";
Blockly.Msg["ARRAY_CREATE_WITH_HELPURL"] = "";
Blockly.Msg["ARRAY_CREATE_WITH_INPUT_WITH"] = "an array";
Blockly.Msg["ARRAY_CREATE_WITH_ITEM_TITLE"] = "item";
Blockly.Msg["ARRAY_CREATE_WITH_ITEM_TOOLTIP"] = "Add an item to the array.";
Blockly.Msg["ARRAY_CREATE_WITH_TOOLTIP"] = "Create a array with any number of items.";
Blockly.Msg["ARRAY_GETINDEX_AT"] = "get index";
Blockly.Msg["ARRAY_GETINDEX_AT1"] = "get index";
Blockly.Msg["ARRAY_GETINDEX_AT2"] = "index";
Blockly.Msg["ARRAY_GETINDEX_HELPURL"] = "";
Blockly.Msg["ARRAY_GETINDEX_ITEM"] = "in Array";
Blockly.Msg["ARRAY_GETINDEX_TOOLTIP"] = "";
Blockly.Msg["ARRAY_GETINDEX_TOOLTIP1"] = "retourne la valeur stockée dans la liste ou tableau";
Blockly.Msg["ARRAY_GETINDEX_TOOLTIP2"] = "créé une liste ou tableau du type sélectionné";
Blockly.Msg["ARRAY_GETINDEX_TOOLTIP3"] = "fixe un (ou plusieurs) élément(s) de la liste ou tableau à la (aux) valeur(s) indiquée(s)";
Blockly.Msg["ARRAY_CREATE"] = "define ";
Blockly.Msg["ARRAY_TAILLE"] = "size";
Blockly.Msg["ARRAY_CONTIENT"] = "with";
Blockly.Msg["ARRAY_LIST"] = "list";
Blockly.Msg["ARRAY_ARRAY"] = "array";
Blockly.Msg["ARRAY_FIX"] = "change element at position";
Blockly.Msg["ARRAY_DECLARE_NAME"] = "create array";
Blockly.Msg["ARRAY_DECLARE_TYPE"] = "type";
Blockly.Msg["ARRAY_DECLARE_SIZE"] = "number of elements";
Blockly.Msg["ARRAY_DECLARE_TOOLTIP"] = "create an array of specific type and number of elements";
Blockly.Msg["ARRAY_MODIFY_INDICE"] = "set element nb";
Blockly.Msg["ARRAY_MODIFY_NAME"] = "in array";
Blockly.Msg["ARRAY_MODIFY_VALUE"] = "value";
Blockly.Msg["ARRAY_MODIFY_TOOLTIP"] = "set a specific value to an elemnt of an array";
//blockly logic
Blockly.Msg["CONTROLS_SWITCH_CASEBREAK_TOOLTIP"] = "Add a condition to the case block.";
Blockly.Msg["CONTROLS_SWITCH_DEFAULT_TOOLTIP"] = "Add a final, catch-all condition to the if block.";
Blockly.Msg["CONTROLS_SWITCH_HELPURL"] = "https://en.wikipedia.org/wiki/Switch_statement";
Blockly.Msg["CONTROLS_SWITCH_SWITCH_TOOLTIP"] = "Add, remove, or reorder sections to reconfigure this if block.";
Blockly.Msg["CONTROLS_SWITCH_VAR_TITLE"] = "Switch (";
Blockly.Msg["CONTROLS_SWITCH_VAR_TAIL"] = ")";
Blockly.Msg["CONTROLS_SWITCH_MSG_DEFAULT"] = "default";
Blockly.Msg["CONTROLS_SWITCH_MSG_CASEBREAK"] = "case";
Blockly.Msg["CONTROLS_SWITCH_MSG_SWITCHVAR"] = "Switch (var)";
Blockly.Msg["CONTROLS_SWITCH_MSG_DO"] = "do";
Blockly.Msg["CONTROLS_SWITCH_TOOLTIP_1"] = "If a value is true, then do some statements.";
Blockly.Msg["CONTROLS_SWITCH_TOOLTIP_2"] = "If a value is true, then do the first block of statements. Otherwise, do the second block of statements.";
Blockly.Msg["CONTROLS_SWITCH_TOOLTIP_3"] = "If the first value is true, then do the first block of statements. Otherwise, if the second value is true, do the second block of statements.";
Blockly.Msg["CONTROLS_SWITCH_TOOLTIP_4"] = "If the first value is true, then do the first block of statements. Otherwise, if the second value is true, do the second block of statements. If none of the values are true, do the last block of statements.";
Blockly.Msg["CONTROLS_SWITCH_VAR_TOOLTIP"] = "Drag from the left into here to add";
//blockly variables
Blockly.Msg["VARIABLES_AS"] = "as";
Blockly.Msg["VARIABLES_SET_CONST"] = "constant";
Blockly.Msg["VARIABLES_SET_CONST_AT"] = "set";
Blockly.Msg["VARIABLES_SET_CONST_TOOLTIP"] = "set a variable to non modifiable value";
Blockly.Msg["VARIABLES_SET_CONST_HELPURL"] = "https://www.arduino.cc/reference/en/language/variables/variable-scope-qualifiers/const/";
//blockly types
Blockly.Msg["ARD_TYPE_ARRAY"] = "Array";
Blockly.Msg["ARD_TYPE_BOOL"] = "Boolean";
Blockly.Msg["ARD_TYPE_CHAR"] = "Character";
Blockly.Msg["ARD_TYPE_ARRAY_CHAR"] = "Character array";
Blockly.Msg["ARD_TYPE_CHILDBLOCKMISSING"] = "ChildBlockMissing";
Blockly.Msg["ARD_TYPE_DECIMAL"] = "Decimal";
Blockly.Msg["ARD_TYPE_LONG"] = "Large Number";
Blockly.Msg["ARD_TYPE_NULL"] = "Null";
Blockly.Msg["ARD_TYPE_NUMBER"] = "Number";
Blockly.Msg["ARD_TYPE_SHORT"] = "Short Number (byte)";
Blockly.Msg["ARD_TYPE_TEXT"] = "Text";
Blockly.Msg["ARD_TYPE_UNDEF"] = "Undefined";
Blockly.Msg["ARD_TYPE_UNS_NUMBER"] = "Unsigned number";
Blockly.Msg["ARD_TYPE_UNS_LONG"] = "Unsigned Long Number";
Blockly.Msg["ARD_TYPE_VOLATILE"] = "Volatile integer";
//blockly instances
Blockly.Msg["ARD_NEW_INSTANCE"] = 'New Instance';
Blockly.Msg["ARD_RENAME_INSTANCE"] = 'Rename Instance';
Blockly.Msg["ARD_NEW_INSTANCE_TITLE"] = 'New Instance Name:';
Blockly.Msg["ARD_RENAME_INSTANCE_TITLE"] = 'Rename all "%1" instances to:';

//Arduino base category blocks
Blockly.Msg["ARDUINO_INOUT_BUILDIN_LED_HELPURL"] = "http://arduino.cc/en/Reference/DigitalWrite";
Blockly.Msg["ARDUINO_INOUT_BUILDIN_LED_INPUT"] = "put the LED on the board to logic";
Blockly.Msg["ARDUINO_INOUT_BUILDIN_LED_TOOLTIP"] = "off or turn on the LED on the Arduino board";
Blockly.Msg["ARDUINO_INOUT_DIGITAL_WRITE_INPUT1"] = "put the pin Digital";
Blockly.Msg["ARDUINO_INOUT_DIGITAL_WRITE_INPUT2"] = "to logic state";
Blockly.Msg["ARDUINO_INOUT_DIGITAL_WRITE_TOOLTIP"] = "write a 0 or 1 state numeric on a specific output";
Blockly.Msg["ARDUINO_INOUT_DIGITAL_WRITE_HELPURL"] = "http://arduino.cc/en/Reference/DigitalWrite";
Blockly.Msg["ARDUINO_INOUT_DIGITAL_READ_INPUT"] = "the logic state of PIN#";
Blockly.Msg["ARDUINO_INOUT_DIGITAL_READ_TOOLTIP"] = "reading the digital state 0 or 1 of the digital pin";
Blockly.Msg["ARDUINO_INOUT_DIGITAL_READ_HELPURL"] = "http://arduino.cc/en/Reference/DigitalRead";
Blockly.Msg["ARDUINO_INOUT_ONOFF_HELPURL"] = "http://arduino.cc/en/Reference/Constants";
Blockly.Msg["ARDUINO_INOUT_ANALOG_WRITE_INPUT1"] = "write on Analog pin";
Blockly.Msg["ARDUINO_INOUT_ANALOG_WRITE_INPUT2"] = "PWM value";
Blockly.Msg["ARDUINO_INOUT_ANALOG_WRITE_TOOLTIP"] = "send a value between 0 and 255 on a specific output";
Blockly.Msg["ARDUINO_INOUT_ANALOG_WRITE_HELPURL"] = "http://arduino.cc/en/Reference/AnalogWrite";
Blockly.Msg["ARDUINO_INOUT_ANALOG_READ_INPUT"] = "read value on the analog input";
Blockly.Msg["ARDUINO_INOUT_ANALOG_READ_TOOLTIP"] = "returns a value between 0 and 1023";
Blockly.Msg["ARDUINO_INOUT_ANALOG_READ_HELPURL"] = "http://arduino.cc/en/Reference/AnalogRead";
Blockly.Msg["ARDUINO_BASE_DELAY_DELAY_TIME"] = "delay (in ms)";
Blockly.Msg["ARDUINO_BASE_DELAY_TOOLTIP"] = "specify the pause time in milliseconds";
Blockly.Msg["ARDUINO_BASE_DELAY_HELPURL"] = "http://arduino.cc/en/Reference/delay";
Blockly.Msg["ARDUINO_BASE_ANGLE"] = "angle: ";
Blockly.Msg["ARDUINO_BASE_ANGLE_TOOLTIP"] = "angle between 0~180°";
Blockly.Msg["ARDUINO_BASE_ANGLE_HELPURL"] = "";
Blockly.Msg["ARDUINO_BASE_MAP1"] = "map";
Blockly.Msg["ARDUINO_BASE_MAP2"] = "value to [0-";
Blockly.Msg["ARDUINO_BASE_MAP_TOOLTIP"] = "Re-maps a number from [0-1024] to another."
Blockly.Msg["ARDUINO_BASE_MAP_HELPURL"] = "https://www.arduino.cc/reference/en/language/functions/math/map/";
Blockly.Msg["ARDUINO_TONE_INPUT1"] = "emits sound on the pin";
Blockly.Msg["ARDUINO_TONE_INPUT2"] = "on frequency (Hz)";
Blockly.Msg["ARDUINO_TONE_TOOLTIP"] = "emits sound on the selected pin";
Blockly.Msg["ARDUINO_TONE_HELPURL"] = "http://arduino.cc/en/Reference/AnalogWrite";
Blockly.Msg["ARDUINO_NOTONE_INPUT"] = "stop sound on the pin";
Blockly.Msg["ARDUINO_NOTONE_TOOLTIP"] = "mutes the sound on the selected pin";
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
Blockly.Msg["SERIAL_PRINT_CONTENT"] = "send the data to the serial port:";
Blockly.Msg["SERIAL_PRINT_TOOLTIP"] = "sends data over the serial port for sruvaillance by the monitor in ASCII";
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
Blockly.Msg["SERVO_MOVE_TOOLTIP"] = "rotation possible between 0 ~ 180 degrees";
Blockly.Msg["SERVO_MOVE_HELPURL"] = "http://www.arduino.cc/playground/ComponentLib/servo";
Blockly.Msg["SERVO_PIN"] = "PIN#";
Blockly.Msg["SERVO_MOVE_INPUT"] = "rotate the Servomotor";
Blockly.Msg["SERVO_MOVE_DEGREE"] = "an angle (0~180°) of";
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
Blockly.Msg["GROVE_INOUT_DHT_READ_C"] = "Temperature C";
Blockly.Msg["GROVE_INOUT_DHT_READ_F"] = "Temperature F";
Blockly.Msg["GROVE_INOUT_DHT_READ_H"] = "Humidity %";
Blockly.Msg["GROVE_INOUT_DHT_READ_PIN"] = "Pin#";
Blockly.Msg["GROVE_INOUT_DHT_READ_SENSOR"] = "Sensor";
Blockly.Msg["GROVE_INOUT_DHT_READ_TOOLTIP"] = "The DHT sensors are made of two parts, a capacitive humidity sensor and a thermistor.";
Blockly.Msg["GROVE_INOUT_DHT_READ_TYPE"] = "Content";
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
Blockly.Msg['GROVE_INOUT_LCD_PRINT_HELPURL'] = "https://wiki.seeedstudio.com/Grove-LCD_RGB_Backlight/";
Blockly.Msg['GROVE_INOUT_LCD_PRINT_TEXT'] = "Serial LCD";
Blockly.Msg['GROVE_INOUT_LCD_PRINT_INPUT1'] = "PIN#";
Blockly.Msg['GROVE_INOUT_LCD_PRINT_INPUT2'] = "print line1";
Blockly.Msg['GROVE_INOUT_LCD_PRINT_INPUT3'] = "print line2";
Blockly.Msg['GROVE_INOUT_LCD_PRINT_INPUT4'] = "Delay";
Blockly.Msg['GROVE_INOUT_LCD_PRINT_TOOLTIP'] = "print text on an 16 character by 2 line LCD.";
Blockly.Msg['GROVE_INOUT_LCD_POWER_HELPURL'] = "https://wiki.seeedstudio.com/Grove-LCD_RGB_Backlight/";
Blockly.Msg['GROVE_INOUT_LCD_POWER_TEXT'] = "Serial LCD";
Blockly.Msg['GROVE_INOUT_LCD_POWER_INPUT'] = "PIN#";
Blockly.Msg['GROVE_INOUT_LCD_POWER_STATE'] = "Power";
Blockly.Msg['GROVE_INOUT_LCD_POWER_TOOLTIP'] = "Turn LCD power on/off";
Blockly.Msg['GROVE_INOUT_LCD_EFFECT_HELPURL'] = "https://wiki.seeedstudio.com/Grove-LCD_RGB_Backlight/";
Blockly.Msg['GROVE_INOUT_LCD_EFFECT_TEXT'] = "Serial LCD";
Blockly.Msg['GROVE_INOUT_LCD_EFFECT_CLEAN'] = "clean LCD";
Blockly.Msg['GROVE_INOUT_LCD_EFFECT_INPUT'] = "PIN#";
Blockly.Msg['GROVE_INOUT_LCD_EFFECT_EFFECT'] = "Effect";
Blockly.Msg['GROVE_INOUT_LCD_EFFECT_EFFECT_EFFECT'] = [
    ["Scroll Left", "LEFT"],
    ["Scroll Right", "RIGHT"],
    ["Scroll Auto", "AUTO"]
];
Blockly.Msg['GROVE_INOUT_LCD_EFFECT_TOOLTIP'] = "Turn LCD power on/off";
Blockly.Msg['GROVE_INOUT_LCD_INIT_HELPURL'] = "https://wiki.seeedstudio.com/Grove-LCD_RGB_Backlight/";
Blockly.Msg['GROVE_INOUT_LCD_INIT_TEXT'] = "INIT Grove LCD RGB";
Blockly.Msg['GROVE_INOUT_LCD_INIT_TOOLTIP'] = "LCD initialization";
Blockly.Msg['GROVE_INOUT_LCD_CLEAR_HELPURL'] = "https://wiki.seeedstudio.com/Grove-LCD_RGB_Backlight/";
Blockly.Msg['GROVE_INOUT_LCD_CLEAR_TEXT'] = "CLEAR Grove LCD RGB";
Blockly.Msg['GROVE_INOUT_LCD_CLEAR_TOOLTIP'] = "clean LCD screen";
Blockly.Msg['GROVE_INOUT_LCD_SCROLL_HELPURL'] = "https://wiki.seeedstudio.com/Grove-LCD_RGB_Backlight/";
Blockly.Msg['GROVE_INOUT_LCD_SCROLL_TEXT'] = "TEXT SCROLLING";
Blockly.Msg['GROVE_INOUT_LCD_SCROLL_EFFECT'] = "write with effect ";
Blockly.Msg['GROVE_INOUT_LCD_SCROLL_EFFECT_FIELDDROPDOWN'] = [
    ["left scrolling", "LEFT"],
    ["right scrolling", "RIGHT"],
    ["automatic scrolling", "AUTO"]
];
Blockly.Msg['GROVE_INOUT_LCD_SCROLL_TOOLTIP'] = "Choix du sens de défilement du texte";
Blockly.Msg['GROVE_INOUT_LCD_SET_CURSOR_TEXT'] = "SET CURSOR";
Blockly.Msg['GROVE_INOUT_LCD_SET_CURSOR_TOOLTIP'] = "put cursor at x,y position";
Blockly.Msg['GROVE_INOUT_LCD_SET_CURSOR_HELPURL'] = "https://wiki.seeedstudio.com/Grove-LCD_RGB_Backlight/";
Blockly.Msg['GROVE_INOUT_LCD_SET_RGB_TEXT'] = "SET RGB Backlight";
Blockly.Msg['GROVE_INOUT_LCD_SET_RGB_TOOLTIP'] = "set backlight color";
Blockly.Msg['GROVE_INOUT_LCD_SET_RGB_HELPURL'] = "https://wiki.seeedstudio.com/Grove-LCD_RGB_Backlight/";
Blockly.Msg['GROVE_INOUT_LCD_PRINT_DATA'] = "PRINT";
Blockly.Msg['GROVE_INOUT_LCD_PRINT_INPUTDATA'] = "DATA";
Blockly.Msg['GROVE_INOUT_LCD_WRITE_DATA'] = "WRITE";
Blockly.Msg['GROVE_INOUT_LCD_WRITE_TOOLTIP'] = "print character with ASCII code";
Blockly.Msg['GROVE_INOUT_LCD_WRITE_HELPURL'] = "https://wiki.seeedstudio.com/Grove-LCD_RGB_Backlight/";
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