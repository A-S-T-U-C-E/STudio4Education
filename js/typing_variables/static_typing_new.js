/**
 * @license
 * Copyright 2012 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @fileoverview Object that defines static objects and methods to assign
 *     Blockly types to Blockly blocks. These can then be converted to language
 *     specific types in each language generator.
 * @author Carlosperate (ardublockly)
 * @author scanet@libreduc.cc (Sébastien Canet)
 * @author kamalhammi2@gmail.com (Kamal Hammi)
 */
'use strict';

goog.provide('Blockly.StaticTyping');

goog.require('Blockly.Block');
goog.require('Blockly.Type');
goog.require('Blockly.Types');
goog.require('Blockly.Workspace');

/**
 * Class for Static Typing.
 * @constructor
 */
Blockly.StaticTyping = function() {
  this.varTypeDict = Object.create(null);
  this.pendingVarTypeDict = Object.create(null);
};

/**
 * Navigates through all the statement blocks, collecting all variables and
 * their type into an associative array with the variable names as the keys and
 * the type as the values.
 * @param {Blockly.Workspace} workspace Blockly Workspace to collect variables.
 * @return {Object{ String: Blockly.Type, } Associative array with the variable
 *     names as the keys and the type as the values.
 */
Blockly.StaticTyping.prototype.collectVarsWithTypes = function(workspace) {
  this.varTypeDict = Object.create(null);
  this.pendingVarTypeDict = Object.create(null);
  var blocks = Blockly.StaticTyping.getAllStatementsOrdered(workspace);
  for (var i = 0; i < blocks.length; i++) {
    //blocks[i].select();  // for step debugging, highlights block in workspace
    // Each statement block iterates through its input children collecting vars
    var blockVarAndTypes = Blockly.StaticTyping.getBlockVars(blocks[i]);
    for (var j = 0; j < blockVarAndTypes.length; j++) {
      var variableName = blockVarAndTypes[j][0];
      var variableType = blockVarAndTypes[j][1];
      var variableDeclaration = blockVarAndTypes[j][2];
      var variableProcedure = blockVarAndTypes[j][3];
      // If the type comes from a variable, so it's not directly defined, it
      // returns an Array<String(block type), String(source variable name)>
      if (Array.isArray(variableType)) {
    	  if (variableType[1].substr(variableType[1].lastIndexOf('_')) == '_AGI') {
          // if variable is the result of block "array_getIndex"
          // his type is determined by the array type
          var varAGI = variableType[1].substr(0, variableType[1].lastIndexOf('_'));
          variableType = this.varTypeDict[varAGI];
          if (!variableType) {
            variableType = Blockly.Types.UNDEF;
          } else if (variableType.arrayType && variableType.arrayType.length == 2) {
            // arrayType is a variable, so get his type
            variableType = this.varTypeDict[variableType.arrayType[1]];
          } else {
            // the array type is stored in arrayType property
            variableType = variableType.arrayType;
          }
    	  } else {
	        if (this.varTypeDict[variableType[1]]) {
	          variableType = this.varTypeDict[variableType[1]];
            if (Array.isArray(variableType)) {
              variableType = variableType[0][0];
            } 
	        } else {
	          // Dependant variable undefined, add this var to the pending list
	          if (!Array.isArray(this.pendingVarTypeDict[variableType[1]])) {
	            this.pendingVarTypeDict[variableType[1]] = [variableName];
	          } else {
	            this.pendingVarTypeDict[variableType[1]].push(variableName);
	          }
	          variableType = Blockly.Types.UNDEF;
		      }
	        }
	    }
      this.assignTypeToVars(blocks[i], variableName, variableType, variableProcedure, variableDeclaration);
    }
  }
  return this.varTypeDict;
};

/**
 * Navigates through each top level block in the workspace to collect all
 * statement blocks, ordered from top left.
 * @param {Blockly.Workspace} workspace Blockly Workspace to collect blocks.
 * @return {Array<Blockly.Block>} Array containing all workspace statement
 *     blocks.
 */
Blockly.StaticTyping.getAllStatementsOrdered = function(workspace) {
  if (!workspace.getTopBlocks) {
    throw 'Not a valid workspace: ' + workspace;
  }

  /**
   * Navigates through each continuous block to collect all statement blocks.
   * Function required to use recursion for block input statements.
   * @param {Blockly.Block} startBlock Block to start iterating from..
   * @return {Array<Blockly.Block>} Array containing all continuous statement
   *     blocks.
   */
  var getAllContinuousStatements = function(startBlock) {
    var block = startBlock;
    var nextBlock = null;
    var connections = null;
    var blockNextConnection = null;
    var blocks = [];
    do {
      //block.select();    // for step debugging, highlights block in workspace
      blocks.push(block);
      blockNextConnection = block.nextConnection;
      connections = block.getConnections_();
      block = null;
      for (var j = 0; j < connections.length; j++) {
        if (connections[j].type == Blockly.NEXT_STATEMENT) {
          nextBlock = connections[j].targetBlock();
          if (nextBlock) {
            // If it is the next connection select it and move to the next block
            if (connections[j] === blockNextConnection) {
              block = nextBlock;
            } else {
              // Recursion as block children can have their own input statements
              blocks = blocks.concat(getAllContinuousStatements(nextBlock));
            }
          }
        }
      }
    } while (block);

    return blocks;
  };

  var allStatementBlocks = [];
  var topBlocks = workspace.getTopBlocks(true);
  for (var i = 0; i < topBlocks.length; i++) {
    allStatementBlocks = allStatementBlocks.concat(
        getAllContinuousStatements(topBlocks[i]));
  }

  return allStatementBlocks;
};

/**
  * Retrieves the input argument block variables with their set type.
  * @param {Blockly.Block} block Block to retrieve variables from.
  * @return {Array<Array<String, Blockly.Type>>} Two dimensional array with the
  *     block variable as the first item pair and variable type as the second.
  */
Blockly.StaticTyping.getBlockVars = function(block) {
  var blockVarAndTypes = [];
  var getVars = block.getVars;
  if (getVars) {
    var blockVariables = getVars.call(block);
    // Iterate through the variables used in this block
    for (var i = 0; i < blockVariables.length; i++) {
      // var varName = blockVariables[i];
      var varName = Blockly.Variables.getVariable(block.workspace,blockVariables[i]).name;
      var getVarType = block.getVarType;
      if (getVarType) {
        var varType = getVarType.call(block, varName);
        var scope = block.getFieldValue('SCOPE');
        var varDecl = "GLOBAL";
        var statement ="";
        if (scope && scope.startsWith('L')) {
            varDecl = "LOCAL";
            if(block.statement)
              statement = "_" +block.statement+" ";
            else
              statement = "";
        }
            //blockVarAndTypes.push([varName, varType, "GLOBAL"]);
            // Recherche la procédure appelante
          var b=block.getRootBlock();
            // var b = block;
            // if(b.getParent()!==null) {
            //   do
            //   {
            //     b = b.getParent();

            //   } while((b.getParent()!==null) );

          blockVarAndTypes.push([/*statement + */ varName, varType, varDecl, b.id ]);
          // }
      } else {
        blockVarAndTypes.push([varName, Blockly.Types.NULL,NULL,NULL]);
      }
    }
  } // else: !(block.getVars), block does not define variables, so do nothing
  return blockVarAndTypes;
};

/**
 * Manages the associative array of variables with their type.
 * @param {Blockly.Block} block Blockly providing the variable to manage.
 * @param {string} varName Name of the variable to manage.
 * @param {Blockly.Type} varType Type assigned by current block.
 */
Blockly.StaticTyping.prototype.assignTypeToVars =
    function(block, varName, varType, varProc, varDecl) {
  var statement = block.statement || "";  // get implicit statement
  switch (this.varTypeDict[varName]) {
    // First time variable is encountered, or previously undefined
    case undefined:
    case Blockly.Types.UNDEF:
      this.varTypeDict[varName]=[];
      this.varTypeDict[varName].push([varType,varProc,varDecl,statement,block.id]);
      if ((varType != Blockly.Types.UNDEF) &&
          (this.pendingVarTypeDict[varName] !== undefined)) {
        for (var i = 0; i < this.pendingVarTypeDict[varName].length; i++) {
          this.assignTypeToVars(
              block, this.pendingVarTypeDict[varName][i], varType, varProc,varDecl);
        }
      }
      break;
    // Variable with valid type already registered
    default:
      var found=false;
      
      for(var i = 0; i < this.varTypeDict[varName].length; i++) {

        var collisionLabel = "collision of a local and global variables";
          block.setWarningText(null,
          collisionLabel);
        // if registered var is GLOBAL AND new var is LOCAL AND block ids are the same AND statement (setup/loop) is not specified , then remove it
        if((this.varTypeDict[varName][i][2]==='GLOBAL') && (varDecl==='LOCAL')) {
          this.varTypeDict[varName].splice(i+1);
          this.setBlockTypeWarning(block, varType, varName, this.varTypeDict[varName][i][0]);  // check if type is the same
          block.setWarningText("You are trying to set a local variable with the same name as a global variable already registred",
          collisionLabel);
          continue;
        }

        // if var LOCAL already registered and try to register GLOBAL then skip it
        if((this.varTypeDict[varName][i][2]==='LOCAL') && (varDecl==='GLOBAL') &&
           (this.varTypeDict[varName][i][1]===varProc) && (this.varTypeDict[varName][i][3]===statement)) {
            this.setBlockTypeWarning(block, varType, varName, this.varTypeDict[varName][i][0]);  // check if type is the same
          found=true;
          break;
        }

        if(this.varTypeDict[varName][i][2]===varDecl) { // found an already registered GLOBAL or LOCAL var
          if(varDecl==='GLOBAL') {
            this.setBlockTypeWarning(block, varType, varName, this.varTypeDict[varName][i][0]);  // check if type is the same
            if(this.varTypeDict[varName][i][0]===Blockly.Types.UNDEF) { // GLOBAL var is undefined ?
              this.varTypeDict[varName][i][0] = varType;             // set to varType
              found=true;
              break;
            }
          }

          if((varDecl==='LOCAL') && 
          	 (varProc===this.varTypeDict[varName][i][1]) && 
          	 (this.varTypeDict[varName][i][3]===statement)) {  // LOCAL var and same procedure and type is not undefined
            if(this.varTypeDict[varName][i][0]!=Blockly.Types.UNDEF) {
                    this.setBlockTypeWarning(block, varType, varName, this.varTypeDict[varName][i][0]);  // check if type is the same
                }
                else {
              this.varTypeDict[varName][i][0] = varType; // update type
            }        
            /*if(this.varTypeDict[varName][i][4] === block.id){
              console.log(this.varTypeDict[varName][i][4]);
            }else{      
              console.log(this.varTypeDict[varName].length);
              var collisionLabel = "collision of a local and global variables";
              block.setWarningText("You are trying to set a local variable with the same name as a local variable already registred",
              collisionLabel);
            } */
            
            found=true; 
            break;
          }
        }
      }
      if(!found){ // first varDecl declaration, so add it in the list
        this.varTypeDict[varName].push([varType,varProc,varDecl, statement,block.id]);  // varProc is null or undefined FIXME : should be top parent
      }
      // if(varDecl!=='LOCAL') {
      //   // Var has been already registered. check if it's a GLOBAL
      //   }

      // }
      // else {
      //   this.varTypeDict[varName].push([varType,varProc,varDecl]); // add local var related to its own proc
      // }
      break;
  }
};

/**
 * When a block uses a variable this function can compare its type with the
 * variable type and set a warning if they are not the same or compatible.
 * @param {!Blockly.Block} block The block to manage its warning.
 * @param {!Blockly.Type} blockType The type of this block.
 * @param {!string} varName The variable name.
 */
Blockly.StaticTyping.prototype.setBlockTypeWarning =
    function(block, blockType, varName, thisVarType) {
  var warningLabel = 'varType';
  var collisionLabel = "collision of a local and global variables";
  if ((blockType == Blockly.Types.CHILD_BLOCK_MISSING) ||
      (this.varTypeDict[varName][0][0] == Blockly.Types.CHILD_BLOCK_MISSING)) {
    // User still has to attach a block to this variable or its first
    // declaration, so for now do not display any warning
    block.setWarningText(null, warningLabel);
    block.setWarningText(null, collisionLabel);
  } else if ((thisVarType !== blockType) &&
             (blockType !== Blockly.Types.UNDEF) && (thisVarType !== Blockly.Types.UNDEF) ) {
    block.setWarningText("La variable " + varName + " a d'abord été affectée " +
        "au type '" + this.varTypeDict[varName][0][0].typeName + "'\n" +
        "et ce bloc essaie de l'affecter au type '" + blockType.typeName + "'",
        warningLabel);
  } else {
    block.setWarningText(null, warningLabel);
    block.setWarningText(null, collisionLabel);
  }
};

/**
 * Iterates through the list of top level blocks and sets the function arguments
 * types.
 * @param {Blockly.Workspace} workspace Blockly Workspace to collect variables.
 */
Blockly.StaticTyping.prototype.setProcedureArgs = function(workspace) {
  var blocks = workspace.getTopBlocks();
  for (var i = 0, length_ = blocks.length; i < length_; i++) {
    var setArgsType = blocks[i].setArgsType;
    if (setArgsType) {
      setArgsType.call(blocks[i], this.varTypeDict);
    }
  }
};

