 /**
 * @license
 * Copyright 2020 Sébastien CANET
 * SPDX-License-Identifier: BSD-3-Clause
 */

/**
 * @fileoverview 'Toolbox' menu as objetc for Blockly inject.
 * @author scanet@libreduc.cc (Sébastien CANET)
 */

var BLOCKLY_TOOLBOX_XML = BLOCKLY_TOOLBOX_XML || Object.create(null);

BLOCKLY_TOOLBOX_XML['toolboxS4E'] =
// '<xml xmlns="https://developers.google.com/blockly/xml" id="blocklyToolbox">'
+    '<category name="%{BKY_CAT_BOARD}" categorystyle="board_category" toolboxitemid="BOARD_IO">'
+        '<category name="%{BKY_CAT_BOARD_IO}" categorystyle="board_category">'
+            '<block type="board_base_inout_buildin_led"></block>'
+            '<block type="board_base_inout_digital_write"></block>'
+            '<block type="board_base_inout_digital_read"></block>'
+            '<block type="board_base_inout_highlow"></block>'
+            '<block type="board_base_inout_analog_write">'
+                '<value name="PWM">'
+                    '<shadow type="math_number">'
+                        '<field name="NUM">0</field>'
+                    '</shadow>'
+                '</value>'
+            '</block>'
+            '<block type="board_base_inout_analog_read"></block>'
+            '<block type="board_base_delay">'
+                '<value name="DELAY_TIME">'
+                    '<shadow type="math_number">'
+                        '<field name="NUM">1000</field>'
+                    '</shadow>'
+                '</value>'
+            '</block>'
+            '<block type="board_base_angle"></block>'
+            '<block type="board_base_map"></block>'
+            '<block type="board_base_inout_tone">'
+                '<value name="NUM">'
+                    '<shadow type="math_number">'
+                       '<field name="NUM">440</field>'
+                  '</shadow>'
+                '</value>'
+           '</block>'
+           '<block type="board_base_inout_notone"></block>'
+        '</category>'
+        '<category name="%{BKY_CAT_BOARD_SERIAL}" categorystyle="board_category">'
+           '<block type="board_serial_init"></block>'
+           '<block type="board_serial_printfor"></block>'
+           '<block type="board_serial_print"></block>'
+           '<block type="board_serial_available"></block>'
+           '<block type="board_serial_read"></block>'
+           '<block type="board_serial_readStringUntil"></block>'
+           '<block type="board_serial_flush"></block>'
+        '</category>'
+    '</category>'
+    '<category name="%{BKY_CAT_IKS01A3}" categorystyle="X-NUCLEO-IKS01A3_category" toolboxitemid="X-NUCLEO-IKS01A3">'
+        '<block type="X_NUCLEO_IKS01A3_Temp_Read"></block>'
+        '<block type="X_NUCLEO_IKS01A3_Humidity_Read"></block>'
+    '</category>'
+    '<category name="%{BKY_CAT_SERVO}" categorystyle="servo_category" toolboxitemid="SERVO">'
+        '<block type="servo_move">'
+            '<value name="DEGREE">'
+               '<shadow type="math_number">'
+                    '<field name="NUM">90</field>'
+                '</shadow>'
+            '</value>'
+        '</block>'
+        '<block type="servo_read_degrees"></block>'
+    '</category>'
+ '</xml>';