/**
 * @license
 * Copyright 2020 Sébastien CANET
 * SPDX-License-Identifier: BSD-3-Clause
 */

/**
 * @fileoverview Intercept data to modify toolbox for user
 * @author scanet@libreduc.cc (Sébastien CANET)
 */


/**
 * Build the xml using toolbox definition
 */
Code.buildToolbox = function() {
	var toolboxXml = BLOCKLY_TOOLBOX_XML['toolboxS4E'];
	// set the toolbox from url 
	var toolboxIds = Code.getStringParamFromUrl('toolboxids', '');
	var boardSelected = Code.getStringParamFromUrl('board', '');
	// set the default toolbox if none
	if (toolboxIds === undefined || toolboxIds === "") {
		if (boardSelected) {
			toolboxIds = 'LOGIC,LOOPS,MATH,TEXT,LIST,COLOUR,VARIABLES,FUNCTIONS,BOARD';
			window.localStorage.defaultToolbox = 1;
		}
		else {
			toolboxIds = 'LOGIC,LOOPS,MATH,TEXT,LIST,COLOUR,VARIABLES,FUNCTIONS';
			window.localStorage.defaultToolbox = 0;
		}
	} else {
		toolboxIds += ',LOGIC,LOOPS,MATH,TEXT,LIST,COLOUR,VARIABLES,FUNCTIONS,BOARD';
			window.localStorage.defaultToolbox = 2;
	}
	//save config in local browser storage for rendering in menu categories list
	window.localStorage.toolboxids = toolboxIds;
	//parser on xml
	parser = new DOMParser();
	var xmlDoc = parser.parseFromString(toolboxXml,"text/xml");
	var xmlValue = '<xml id="blocklyToolbox">';
	var xmlids = toolboxIds.split(",");
	var i = 0;
	while(xmlDoc.getElementsByTagName("category")[i].getAttribute('toolboxitemid') != "END") {
		if (window.localStorage.defaultToolbox != 0) {
			for (var j = 0; j < xmlids.length; j++) {
				if (xmlDoc.getElementsByTagName("category")[i].getAttribute('toolboxitemid') == xmlids[j])
					xmlValue += xmlDoc.getElementsByTagName("category")[i].outerHTML;
			}
		}
		// if launched by default, with no argument in URL, add all entries from XML in categories list
		else if (xmlDoc.getElementsByTagName("category")[i].getAttribute('level') == 1)
				xmlValue += xmlDoc.getElementsByTagName("category")[i].outerHTML;
		i++;
	}
	xmlValue += '</xml>';
	return xmlValue;
};

/**
 * Change toolbox definition
 */
Code.changeToolboxDefinition =  function (){
	// Code.loadToolboxDefinition($("#toolboxes").val());
	// Code.openConfigToolbox();
}; 

Code.changeLevelToolboxDefinition =  function (level){
	// Code.loadToolboxDefinition(level);
	// Code.openConfigToolbox();
}; 
