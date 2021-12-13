/**
 * @license
 * Copyright 2020 Toshiyuki Nakamura (Toshiyuki Nakamura)
 * SPDX-License-Identifier: BSD-3-Clause
 */

'use strict';

// goog.provide('Blockly.Msg["blocks_ja');

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
Blockly.Msg["ARRAY_CREATE_EMPTY_TITLE"] = 'empty!';
Blockly.Msg["ARRAY_CREATE_WITH"] = "要素で作成";
Blockly.Msg["ARRAY_CREATE_WITH_CONTAINER_TITLE_ADD"] = "配列";
Blockly.Msg["ARRAY_CREATE_WITH_CONTAINER_TOOLTIP"] = "配列ブロック再定義のために追加、削除、並べ替え";
Blockly.Msg["ARRAY_CREATE_WITH_HELPURL"] = "";
Blockly.Msg["ARRAY_CREATE_WITH_INPUT_WITH"] = "配列";
Blockly.Msg["ARRAY_CREATE_WITH_ITEM_TITLE"] = "要素";
Blockly.Msg["ARRAY_CREATE_WITH_ITEM_TOOLTIP"] = "配列に要素を追加";
Blockly.Msg["ARRAY_CREATE_WITH_TOOLTIP"] = "要素で配列を作成"; //"Create a array with any number of items."
Blockly.Msg["ARRAY_GETINDEX_AT"] = "要素を取得";
Blockly.Msg["ARRAY_GETINDEX_AT1"] = "要素を取得";
Blockly.Msg["ARRAY_GETINDEX_AT2"] = "番地";
Blockly.Msg["ARRAY_GETINDEX_HELPURL"] = "";
Blockly.Msg["ARRAY_GETINDEX_ITEM"] = "配列";
Blockly.Msg["ARRAY_GETINDEX_TOOLTIP"] = "";
Blockly.Msg["ARRAY_GETINDEX_TOOLTIP1"] = "リストまたは配列に保存されている値を返します";
Blockly.Msg["ARRAY_GETINDEX_TOOLTIP2"] = "選択したタイプのリストまたは配列を作成しました";
Blockly.Msg["ARRAY_GETINDEX_TOOLTIP3"] = "指定された値でリストまたは配列の要素を修正します";
Blockly.Msg["ARRAY_CREATE"] = "宣言 ";
Blockly.Msg["ARRAY_TAILLE"] = "要素数";
Blockly.Msg["ARRAY_CONTIENT"] = "要素";
Blockly.Msg["ARRAY_LIST"] = "リスト";
Blockly.Msg["ARRAY_ARRAY"] = "配列";
Blockly.Msg["ARRAY_FIX"] = "指定した場所の要素を変更";
Blockly.Msg["ARRAY_DECLARE_NAME"] = "配列を作成";
Blockly.Msg["ARRAY_DECLARE_TYPE"] = "タイプ";
Blockly.Msg["ARRAY_DECLARE_SIZE"] = "要素数";
Blockly.Msg["ARRAY_DECLARE_TOOLTIP"] = "指定したタイプと要素数で配列を作成";
Blockly.Msg["ARRAY_MODIFY_INDICE"] = "セット　要素番号";
Blockly.Msg["ARRAY_MODIFY_NAME"] = "配列";
Blockly.Msg["ARRAY_MODIFY_VALUE"] = "値";
Blockly.Msg["ARRAY_MODIFY_TOOLTIP"] = "配列の要素に値を設定";
//blockly logic
Blockly.Msg["CONTROLS_SWITCH_CASEBREAK_TOOLTIP"] = "ケースブロックに条件を追加";
Blockly.Msg["CONTROLS_SWITCH_DEFAULT_TOOLTIP"] = "「もし」ブロックに終端条件を追加";
Blockly.Msg["CONTROLS_SWITCH_HELPURL"] = "https://en.wikipedia.org/wiki/Switch_statement";
Blockly.Msg["CONTROLS_SWITCH_SWITCH_TOOLTIP"] = "「もし」ブロック再定義のために追加、削除、並べ替え";
Blockly.Msg["CONTROLS_SWITCH_VAR_TITLE"] = "分岐 (";
Blockly.Msg["CONTROLS_SWITCH_VAR_TAIL"] = ")";
Blockly.Msg["CONTROLS_SWITCH_MSG_DEFAULT"] = "デフォルト";
Blockly.Msg["CONTROLS_SWITCH_MSG_CASEBREAK"] = "ケース";
Blockly.Msg["CONTROLS_SWITCH_MSG_SWITCHVAR"] = "分岐 (変数)"; //"Switch (var)"
Blockly.Msg["CONTROLS_SWITCH_MSG_DO"] = "実行";
Blockly.Msg["CONTROLS_SWITCH_TOOLTIP_1"] = "もし値が真なら、構文を実行";
Blockly.Msg["CONTROLS_SWITCH_TOOLTIP_2"] = "もし値が真なら、最初のブロックを実行、そうでなければ2番目のブロックを実行";
Blockly.Msg["CONTROLS_SWITCH_TOOLTIP_3"] = "もし最初の値が真なら、最初のブロックを実行、そうでなければ、2番目の値が真なら、2番目のブロックを実行";
Blockly.Msg["CONTROLS_SWITCH_TOOLTIP_4"] = "もし最初の値が真なら、最初のブロックを実行、そうでなければ、2番目の値が真なら、2番目のブロックを実行 もし両方とも真でなければ、最後のブロックを実行";
Blockly.Msg["CONTROLS_SWITCH_VAR_TOOLTIP"] = "追加するために左からここにドラッグ";
Blockly.Msg["CONTROLS_SWITCH_CASEBREAK_TOOLTIP"] = "ケース　ブレイク　実行を追加"; //"Add additional case break do"
Blockly.Msg["CONTROLS_SWITCH_DEFAULT_TOOLTIP"] = "デフォルトのアクションを追加"; //"Add optional default action"
//blockly variables
Blockly.Msg["VARIABLES_AS"] = "型";
Blockly.Msg["VARIABLES_SET_CONST"] = " を定数に ";
Blockly.Msg["VARIABLES_SET_CONST_AT"] = " ";
Blockly.Msg["VARIABLES_SET_CONST_TOOLTIP"] = "set a variable to non modifiable value";
Blockly.Msg["VARIABLES_SET_CONST_HELPURL"] = "https://www.arduino.cc/reference/en/language/variables/variable-scope-qualifiers/const/";
//blockly types
Blockly.Msg["ARD_TYPE_ARRAY"] = "配列";
Blockly.Msg["ARD_TYPE_BOOL"] = "Boolean(真偽値)";
Blockly.Msg["ARD_TYPE_CHAR"] = "Char(文字)";
Blockly.Msg["ARD_TYPE_ARRAY_CHAR"] = "Char array(配列 文字)";
Blockly.Msg["ARD_TYPE_CHILDBLOCKMISSING"] = "子ブロックがありません"; //"ChildBlockMissing"
Blockly.Msg["ARD_TYPE_DECIMAL"] = "Decimal(小数)"; //"Decimal"
Blockly.Msg["ARD_TYPE_LONG"] = "Large Number(整数32bit長)"; //"Large Number"
Blockly.Msg["ARD_TYPE_NULL"] = "Null"; //"Null"
Blockly.Msg["ARD_TYPE_NUMBER"] = "Number(整数16bit長)"; //"Number"
Blockly.Msg["ARD_TYPE_SHORT"] = "Short Number(整数8bit長)"; //"Short Number (byte)"
Blockly.Msg["ARD_TYPE_TEXT"] = "Text(文字列)"; //"Text"
Blockly.Msg["ARD_TYPE_UNDEF"] = "未定義"; //"Undefined"
Blockly.Msg["ARD_TYPE_UNS_NUMBER"] = "Unsigned number(符号なし整数16bit長)"; //"Unsigned number"
Blockly.Msg["ARD_TYPE_UNS_LONG"] = "Unsigned Long Number(符号なし整数32bit長)"; //"Unsigned Long Number"
Blockly.Msg["ARD_TYPE_VOLATILE"] = "Volatile integer(volatile整数)"; //"Volatile integer"

//Arduino base cateory blocks
Blockly.Msg["ARDUINO_INOUT_BUILDIN_LED_HELPURL"] = "http://arduino.cc/en/Reference/DigitalWrite";
Blockly.Msg["ARDUINO_INOUT_BUILDIN_LED_INPUT"] = "LEDを設定";
Blockly.Msg["ARDUINO_INOUT_BUILDIN_LED_TOOLTIP"] = "Arduinoボード上のLEDをオンオフします"; //"off or turn on the LED on the Arduino board";
Blockly.Msg["ARDUINO_INOUT_DIGITAL_WRITE_INPUT1"] = "デジタルピン";
Blockly.Msg["ARDUINO_INOUT_DIGITAL_WRITE_INPUT2"] = "を設定";
Blockly.Msg["ARDUINO_INOUT_DIGITAL_WRITE_TOOLTIP"] = "出力ピンに0か1を出力します"; //"write a 0 or 1 state numeric on a specific output";
Blockly.Msg["ARDUINO_INOUT_DIGITAL_WRITE_HELPURL"] = "http://arduino.cc/en/Reference/DigitalWrite";
Blockly.Msg["ARDUINO_INOUT_DIGITAL_READ_INPUT"] = "デジタルピンの値を読む";
Blockly.Msg["ARDUINO_INOUT_DIGITAL_READ_TOOLTIP"] = "デジタルピンの状態0か1を読みます"; //"reading the digital state 0 or 1 of the digital pin";
Blockly.Msg["ARDUINO_INOUT_DIGITAL_READ_HELPURL"] = "http://arduino.cc/en/Reference/DigitalRead";
Blockly.Msg["ARDUINO_INOUT_ONOFF_HELPURL"] = "http://arduino.cc/en/Reference/Constants";
Blockly.Msg["ARDUINO_INOUT_ANALOG_WRITE_INPUT1"] = "アナログピンに書き込む";
Blockly.Msg["ARDUINO_INOUT_ANALOG_WRITE_INPUT2"] = "値";
Blockly.Msg["ARDUINO_INOUT_ANALOG_WRITE_TOOLTIP"] = "０～255の値を出力します"; //"send a value between 0 and 255 on a specific output";
Blockly.Msg["ARDUINO_INOUT_ANALOG_WRITE_HELPURL"] = "https://www.arduino.cc/reference/jp/language/functions/analog-io/analogwrite/"; //"http://arduino.cc/en/Reference/AnalogWrite";
Blockly.Msg["ARDUINO_INOUT_ANALOG_READ_INPUT"] = "アナログ入力読み込み";
Blockly.Msg["ARDUINO_INOUT_ANALOG_READ_TOOLTIP"] = "0～1023の値を返します"; //"returns a value between 0 and 1023";
Blockly.Msg["ARDUINO_INOUT_ANALOG_READ_HELPURL"] = "https://www.arduino.cc/reference/jp/language/functions/analog-io/analogread/"; //"http://arduino.cc/en/Reference/AnalogRead";
Blockly.Msg["ARDUINO_BASE_DELAY_DELAY_TIME"] = "待つ (ミリ秒)";
Blockly.Msg["ARDUINO_BASE_DELAY_TOOLTIP"] = "停止時間をミリ秒で指定します"; //"specify the pause time in milliseconds";
Blockly.Msg["ARDUINO_BASE_DELAY_HELPURL"] = "http://arduino.cc/en/Reference/delay";
Blockly.Msg["ARDUINO_BASE_ANGLE"] = "角度："; //"angle:";
Blockly.Msg["ARDUINO_BASE_ANGLE_TOOLTIP"] = "0~180°の角度"; //"angle value between 0~180°";
Blockly.Msg["ARDUINO_BASE_ANGLE_HELPURL"] = "";
Blockly.Msg["ARDUINO_BASE_MAP1"] = "map";
Blockly.Msg["ARDUINO_BASE_MAP2"] = "value to [0-";
Blockly.Msg["ARDUINO_BASE_MAP_TOOLTIP"] = "Re-maps a number from [0-1024] to another."
Blockly.Msg["ARDUINO_BASE_MAP_HELPURL"] = "https://www.arduino.cc/reference/en/language/functions/math/map/";
Blockly.Msg["ARDUINO_TONE_INPUT1"] = "サウンド出力　ピン：";
Blockly.Msg["ARDUINO_TONE_INPUT2"] = "周波数 (Hz)";
Blockly.Msg["ARDUINO_TONE_TOOLTIP"] = "ピンにサウンドを出力します"; //"emits sound on the selected pin";
Blockly.Msg["ARDUINO_TONE_HELPURL"] = "https://www.arduino.cc/reference/jp/language/functions/advanced-io/tone/"; //"http://arduino.cc/en/Reference/AnalogWrite";
Blockly.Msg["ARDUINO_NOTONE_INPUT"] = "サウンド出力終了　ピン：";
Blockly.Msg["ARDUINO_NOTONE_TOOLTIP"] = "サウンドをミュートします"; //"mutes the sound on the selected pin";
Blockly.Msg["ARDUINO_NOTONE_HELPURL"] = "https://www.arduino.cc/reference/jp/language/functions/advanced-io/notone/"; //"http://arduino.cc/en/Reference/AnalogWrite";

//SERIAL
Blockly.Msg["SERIAL_INIT"] = "シリアル通信　速度設定";
Blockly.Msg["SERIAL_PRINT_FORMAT"] = "形式を決めて送信";
Blockly.Msg["SERIAL_PRINT_FORDECIMAL"] = "10進数";
Blockly.Msg["SERIAL_PRINT_FORHEXA"] = "16進数";
Blockly.Msg["SERIAL_PRINT_FORBIN"] = "2進数";
Blockly.Msg["SERIAL_PRINT_FOROCT"] = "8進数";
Blockly.Msg["SERIAL_READ"] = "シリアル読み込み";
Blockly.Msg["SERIAL_AVAILABLE"] = "シリアル有効　?";
Blockly.Msg["SERIAL_FLUSH"] = "送信終了を待つ";
Blockly.Msg["SERIAL_READSTRINGUNTIL_HELPURL"] = "https://www.arduino.cc/en/Serial/ReadStringUntil";
Blockly.Msg["SERIAL_READSTRINGUNTIL_CONTENT"] = "文字列受信　終端："; //"String read until"
Blockly.Msg["SERIAL_READSTRINGUNTIL_TOOLTIP"] = "シリアルバッファから文字列読み込み"; //"reads characters from the serial buffer into a string"
Blockly.Msg["SERIAL_PRINT_CONTENT"] = "シリアルでデータを送る　ポート:";
Blockly.Msg["SERIAL_PRINT_TOOLTIP"] = "データを送信してモニターで監視します"; //"sends data over the serial port for sruvaillance by the monitor in ASCII";
Blockly.Msg["SERIAL_PRINT_HELPURL"] = "http://www.arduino.cc/en/Serial/Print";

//Arduino base servo category blocks
Blockly.Msg["SERVO_MOVE_TOOLTIP"] = "0 ~ 180°　回転可能";
Blockly.Msg["SERVO_MOVE_HELPURL"] = "http://www.arduino.cc/playground/ComponentLib/servo";
Blockly.Msg["SERVO_PIN"] = "PIN#";
Blockly.Msg["SERVO_MOVE_INPUT"] = "サーボ駆動";
Blockly.Msg["SERVO_MOVE_DEGREE"] = "設定角度 (0~180°)";
Blockly.Msg["SERVO_READ_DEGREES_INPUT"] = "サーボモータの角度";
Blockly.Msg["SERVO_READ_DEGREES_TOOLTIP"] = "前回の回転角度を返す";
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