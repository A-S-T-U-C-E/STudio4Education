# STudio4Education
![logo](https://github.com/A-S-T-U-C-E/S4E_Electron/blob/master/www/S4E/media/logos.png)

Designed for **Arrowhead** Tools Project ([https://www.arrowhead.eu/arrowheadtools](https://www.arrowhead.eu/arrowheadtools)), STudio4Education is a **web-based visual programming editor for [ST microelectronics](https://www.st.com)** boards, thanks to [Blockly](https://developers.google.com/blockly/), the web-based, graphical programming editor.

STudio4Education provides static type language blocks and code generators for simple C programming.


## Features

* Programming with visually drag and drop code blocks
* Generate fully compatible code
* Multiple boards choice for automatic selection of pin functions
* Load different on-site examples with url parameters
* Keyboard navigation and accessibility helpers
* Theme choice
* Block render choice
* Multi language
* Keyboard navigation
* etc

## Accessibility

You can enter _accessibility_ mode by **hitting Shift + Ctrl + k**.

Official documentation: [https://developers.google.com/blockly/guides/configure/web/keyboard-nav](https://developers.google.com/blockly/guides/configure/web/keyboard-nav)

Key mapping is customizable by activating 'open key mappings' option.

Some basic commands for moving around are below.  


### Workspace Navigation

-   W: Previous block/field/input at the same level.
-   A: Up one level (Field (or input) -> Block -> Input (or field) -> Block -> Stack -> Workspace).
-   S: Next block/field/input at the same level.
-   D: Down one level (Workspace -> Stack -> Block -> Input (or field) -> Block -> Field (or input)).
-   T: Will open the toolbox. Once in there you can moving around using the WASD keys. And insert a block by hitting Enter.
-   X: While on a connection hit X to disconnect the block after the cursor.

### Cursor 
The cursor controls how the user navigates the blocks, inputs, fields and connections on a workspace. Two different cursors:  

-   **Default Cursor**: Allow the user to go to the previous, next, in or out location.
-   **Basic Cursor**: Using the pre order traversal allows the user to go to the next and previous location.


## Demo

STudio4Education is a web tool. You can give it a try at [Web](https://a-s-t-u-c-e.github.io/STudio4Education/).

### Run locally on your web browser

If you want to install it locally. Get code from github and open `index.html` in your browser.

## Integrated upload

An [Electron](https://www.electronjs.org/) version with [arduino-cli](https://github.com/arduino/arduino-cli) embbeded for an off-line version is also available: [https://github.com/A-S-T-U-C-E/S4E_Electron](https://github.com/A-S-T-U-C-E/S4E_Electron)

## Usage

1. Open browser to STudio4Education folder and select your board, your language, your favorite theme + renderer.
2. Drag and drop blocks to make a program.
3. Copy all of the source code into an existing or new project in the Arduino IDE with [STM32Duino](https://github.com/stm32duino/Arduino_Core_STM32) installed
4. Configure your Arduino IDE with the right board and communication port.
5. Press the 'Upload' button in the Arduino IDE to burn the code into a connected board.

## ChangeLog

Check changelog [here](https://github.com/A-S-T-U-C-E/STudio4Education/blob/master/CHANGELOG.txt)

## Tools used

[Ace editor](https://ace.c9.io)


## Authors and Contributors

Sébastien Canet ([scanet@libreduc.cc](scanet@libreduc.cc)).

The STudio4Education project is also inspired by [Blockly@rduino](https://github.com/technologiescollege/Blockly-at-rduino), [ardublockly](https://github.com/carlosperate/ardublockly) and [Blocklino](https://github.com/fontainejp/blocklino).


## License

Copyright (C) 2020 Sébastien Canet scanet@libreduc.cc
-   Licensed under the BSD 3-Clause License.
-   You may not use this project or any file except in compliance with the License.
-   You may obtain a copy of the License at [https://opensource.org/licenses/BSD-3-Clause](https://opensource.org/licenses/BSD-3-Clause).

# Blockly [![Build Status]( https://travis-ci.org/google/blockly.svg?branch=master)](https://travis-ci.org/google/blockly)


Google's Blockly is a web-based, visual programming editor.  Users can drag blocks together to build programs.  All code is free and open source.

**The project page is https://developers.google.com/blockly/**

![](https://developers.google.com/blockly/images/sample.png)

Blockly has an active [developer forum](https://groups.google.com/forum/#!forum/blockly). Please drop by and say hello. Show us your prototypes early; collectively we have a lot of experience and can offer hints which will save you time.

Help us focus our development efforts by telling us [what you are doing with Blockly](https://developers.google.com/blockly/registration). The questionnaire only takes
a few minutes and will help us better support the Blockly community.

Want to contribute? Great! First, read [our guidelines for contributors](https://developers.google.com/blockly/guides/modify/contributing).
