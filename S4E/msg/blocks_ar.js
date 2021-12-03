/**
 * @license
 * Copyright 2020 Sébastien CANET
 * SPDX-License-Identifier: BSD-3-Clause
 */

'use strict';

// goog.provide('Blockly.Msg["blocks_en');

// goog.require('Blockly.Msg');

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
Blockly.Msg["ARRAY_CREATE_EMPTY_TITLE"] = "فارغ";
Blockly.Msg["tab_create"] = "'إنشاء الكتلة 'عنصر للصفيف %1'";
Blockly.Msg["tab_create_fix"] = "إنشاء الكتلة 'تعيين عنصر الصفيف %1 على'";
Blockly.Msg["ARRAY_CREATE_WITH"] = "مكونة من";
Blockly.Msg["ARRAY_taille"]
"] = سعة";
Blockly.Msg["ARRAY_contenu"] = "الذي يحتوي على";
Blockly.Msg["ARRAY_dim"] = "حجم";
Blockly.Msg["ARRAY_index"] = "مؤشر";
Blockly.Msg["_AT"] = "إلى";
Blockly.Msg["ARRAY_CREATE_WITH_CONTAINER_TITLE_ADD"] = "قائمة أو جدول";
Blockly.Msg["ARRAY_CREATE_WITH_CONTAINER_TOOLTIP"] = "إضافة أو إزالة أو إعادة ترتيب العناصر في كتلة الصفيف.";
Blockly.Msg["ARRAY_CREATE_WITH_HELPURL"] = "";
Blockly.Msg["ARRAY_CREATE_WITH_INPUT_WITH"] = "قائمة";
Blockly.Msg["ARRAY_CREATE_WITH_ITEM_TITLE"] = "عنصر";
Blockly.Msg["ARRAY_CREATE_WITH_ITEM_TOOLTIP"] = "إضافة عنصر إلى القائمة.";
Blockly.Msg["ARRAY_CREATE_WITH_TOOLTIP"] = "إنشاء قائمة أو صفيف , مع عدد من العناصر لتحديدها.";
Blockly.Msg["ARRAY_GETINDEX_AT"] = "العنصر في الرتبة";
Blockly.Msg["ARRAY_GETINDEX_AT1"] = "العنصر في الرتبة";
Blockly.Msg["ARRAY_GETINDEX_AT2"] = "رتبة";
Blockly.Msg["ARRAY_GETINDEX_HELPURL"] = "";
Blockly.Msg["ARRAY_GETINDEX_ITEM"] = "في القائمة";
Blockly.Msg["ARRAY_GETINDEX_TOOLTIP"] = "";
Blockly.Msg["ARRAY_GETINDEX_TOOLTIP1"] = "إرجاع القيمة المخزنة في القائمة أو الصفيف";
Blockly.Msg["ARRAY_GETINDEX_TOOLTIP2"] = "إنشاء قائمة أو صفيف من النوع المحدد";
Blockly.Msg["ARRAY_GETINDEX_TOOLTIP3"] = "تعيين عنصر (عناصر) من القائمة أو الصفيف إلى القيمة (القيم) المشار إليها";
Blockly.Msg["ARRAY_CREATE"] = "تعريف ";
Blockly.Msg["ARRAY_TAILLE"] = "بحجم";
Blockly.Msg["ARRAY_CONTIENT"] = "الذي يحتوي";
Blockly.Msg["ARRAY_LIST"] = "القائمة";
Blockly.Msg["ARRAY_ARRAY"] = "الصفيف";
Blockly.Msg["ARRAY_fixe"] = "عين العنصر في الرتبة";
Blockly.Msg["ARRAY_DECLARE_NAME"] = "إنشاء جدول (صفيف) مسمى";
Blockly.Msg["ARRAY_DECLARE_TYPE"] = "من نوع";
Blockly.Msg["ARRAY_DECLARE_SIZE"] = "من عدد من العناصر";
Blockly.Msg["ARRAY_DECLARE_TOOLTIP"] = "إنشاء صفيف من البعد والنوع المشار إليه";
Blockly.Msg["ARRAY_MODIFY_INDICE"] = "تعيين العنصر ذو الرتبة ";
Blockly.Msg["ARRAY_MODIFY_NAME"] = "في الصفيف";
Blockly.Msg["ARRAY_MODIFY_VALUE"] = "القيمة";
Blockly.Msg["ARRAY_MODIFY_TOOLTIP"] = "تعيين قيمة إلى عنصر من عناصر الجدول (الصفيف)";
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
Blockly.Msg["CONTROLS_SWITCH_CASEBREAK_TOOLTIP"] = "Add additional case break do";
Blockly.Msg["CONTROLS_SWITCH_DEFAULT_TOOLTIP"] = "Add optional default action";
//blockly variables
Blockly.Msg["VARIABLES_AS"] = "من النوع";
Blockly.Msg["VARIABLES_SET_CONST"] = "الثابت %1 مثبت على %2";
Blockly.Msg["VARIABLES_SET_CONST_AT"] = "الثابت %1 مثبت على %2";
Blockly.Msg["VARIABLES_SET_CONST_TOOLTIP"] = "set a variable to non modifiable value";
Blockly.Msg["VARIABLES_SET_CONST_HELPURL"] = "https://www.arduino.cc/reference/en/language/variables/variable-scope-qualifiers/const/";
//blockly types
Blockly.Msg["ARD_TYPE_ARRAY"] = "الجدول (الصفيف)";
Blockly.Msg["ARD_TYPE_BOOL"] = "ثنائي (ToR)";
Blockly.Msg["ARD_TYPE_CHAR"] = "حرف";
Blockly.Msg["ARD_TYPE_ARRAY_CHAR"] = "حرفالجدول ";
Blockly.Msg["ARD_TYPE_CHILDBLOCKMISSING"] = "الكتابة مفقودة على كتلة";
Blockly.Msg["ARD_TYPE_DECIMAL"] = "رقم النقطة العائمة (عشري)";
Blockly.Msg["ARD_TYPE_LONG"] = "عدد صحيح طويل";
Blockly.Msg["ARD_TYPE_NULL"] = "فارغ";
Blockly.Msg["ARD_TYPE_NUMBER"] = "عدد صحيح (int)";
Blockly.Msg["ARD_TYPE_SHORT"] = "بايت";
Blockly.Msg["ARD_TYPE_TEXT"] = "نص";
Blockly.Msg["ARD_TYPE_UNDEF"] = "غير محدد";
Blockly.Msg["ARD_TYPE_UNS_NUMBER"] = "عدد صحيح موجب (عدد بدون إشارة)";
Blockly.Msg["ARD_TYPE_UNS_LONG"] = "عدد صحيح موجب طويل (طويل غير موقعة)";
Blockly.Msg["ARD_TYPE_VOLATILE"] = "عدد صحيح متقلب (للمقاطعة)";

//Arduino base category blocks
Blockly.Msg["ARDUINO_INOUT_BUILDIN_LED_HELPURL"] = "http://arduino.cc/en/Reference/DigitalWrite";
Blockly.Msg["ARDUINO_INOUT_BUILDIN_LED_INPUT"] = "put the LEDs on the card to logic";
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
Blockly.Msg["SERIAL_INIT"] = "تعيين سرعة المنفذ التسلسلي(بالباود) على ";
Blockly.Msg["SERIAL_PRINT_FORMAT"] = "باستعمال النظام ";
Blockly.Msg["SERIAL_PRINT_FORDECIMAL"] = "العشري";
Blockly.Msg["SERIAL_PRINT_FORHEXA"] = "السداسي عشري ";
Blockly.Msg["SERIAL_PRINT_FORBIN"] = "الثنائي ";
Blockly.Msg["SERIAL_PRINT_FOROCT"] = "الثماني ";
Blockly.Msg["SERIAL_READ"] = "قراءة البيانات من المنفذ التسلسلي ";
Blockly.Msg["SERIAL_AVAILABLE"] = "هل البيانات متاحة على المنفذ التسلسلي؟ ";
Blockly.Msg["SERIAL_FLUSH"] = "انتظر حتى نهاية الإرسال عن طريق المنفذ التسلسلي ";
Blockly.Msg["SERIAL_READSTRINGUNTIL_HELPURL"] = "https: //www.arduino.cc/en/Serial/ReadStringUntil";
Blockly.Msg["SERIAL_READSTRINGUNTIL_CONTENT"] = "قراءة سلسلة أحرف إلى الحرف ";
Blockly.Msg["SERIAL_READSTRINGUNTIL_TOOLTIP"] = "قراءة الأحرف واحدا تلو الآخر إلى واحد كنت تبحث عنه, وإرجاع السلسلة بأكملها";
Blockly.Msg["SERIAL_PRINT_CONTENT"] = "send the data to the serial port:";
Blockly.Msg["SERIAL_PRINT_TOOLTIP"] = "sends data over the serial port for sruvaillance by the monitor in ASCII";
Blockly.Msg["SERIAL_PRINT_HELPURL"] = "http://www.arduino.cc/en/Serial/Print";

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
Blockly.Msg.DHT_TEXT1 = "value of";
Blockly.Msg.DHT_TEXT2 = "on sensor";
Blockly.Msg.DHT_TEXT3 = "wired on pin#";