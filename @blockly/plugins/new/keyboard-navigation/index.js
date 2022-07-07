/*! For license information please see index.js.LICENSE.txt */
!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t(require("blockly/core"));else if("function"==typeof define&&define.amd)define(["blockly/core"],t);else{var r="object"==typeof exports?t(require("blockly/core")):t(e.Blockly);for(var o in r)("object"==typeof exports?exports:e)[o]=r[o]}}(this,(function(e){return(()=>{"use strict";var t={573:t=>{t.exports=e}},r={};function o(e){var n=r[e];if(void 0!==n)return n.exports;var i=r[e]={exports:{}};return t[e](i,i.exports,o),i.exports}o.d=(e,t)=>{for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var n={};return(()=>{o.r(n),o.d(n,{Constants:()=>e,FlyoutCursor:()=>d,FlyoutCursorPluginInfo:()=>C,LineCursor:()=>N,LineCursorPluginInfo:()=>R,Navigation:()=>M,NavigationController:()=>F});var e={};o.r(e),o.d(e,{LOGGING_MSG_TYPE:()=>i,SHORTCUT_NAMES:()=>r,STATE:()=>t});var t={WORKSPACE:"workspace",FLYOUT:"flyout",TOOLBOX:"toolbox"},r={PREVIOUS:"previous",NEXT:"next",IN:"in",OUT:"out",INSERT:"insert",MARK:"mark",DISCONNECT:"disconnect",TOOLBOX:"toolbox",EXIT:"exit",TOGGLE_KEYBOARD_NAV:"toggle_keyboard_nav",COPY:"keyboard_nav_copy",CUT:"keyboard_nav_cut",PASTE:"keyboard_nav_paste",DELETE:"keyboard_nav_delete",MOVE_WS_CURSOR_UP:"workspace_up",MOVE_WS_CURSOR_DOWN:"workspace_down",MOVE_WS_CURSOR_LEFT:"workspace_left",MOVE_WS_CURSOR_RIGHT:"workspace_right"},i={ERROR:"error",WARN:"warn",LOG:"log"},s=o(573);function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}function u(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function c(e,t){return c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},c(e,t)}function l(e,t){if(t&&("object"===a(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function y(e){return y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},y(e)}var d=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&c(e,t)}(s,e);var t,r,o,n,i=(o=s,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=y(o);if(n){var r=y(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return l(this,e)});function s(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s),i.call(this)}return t=s,(r=[{key:"next",value:function(){var e=this.getCurNode();if(!e)return null;var t=e.next();return t&&this.setCurNode(t),t}},{key:"in",value:function(){return null}},{key:"prev",value:function(){var e=this.getCurNode();if(!e)return null;var t=e.prev();return t&&this.setCurNode(t),t}},{key:"out",value:function(){return null}}])&&u(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),s}(s.Cursor),g=s.registry.Type.CURSOR,h="FlyoutCursor";s.registry.register(g,h,d);var f,p,v,C=(v=h,(p=g)in(f={})?Object.defineProperty(f,p,{value:v,enumerable:!0,configurable:!0,writable:!0}):f[p]=v,f);function k(e){return k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},k(e)}function S(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function b(e,t){return b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},b(e,t)}function T(e,t){if(t&&("object"===k(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function O(e){return O=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},O(e)}var N=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&b(e,t)}(a,e);var t,r,o,n,i=(o=a,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=O(o);if(n){var r=O(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return T(this,e)});function a(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),i.call(this)}return t=a,(r=[{key:"next",value:function(){var e=this.getCurNode();if(!e)return null;var t=this.getNextNode_(e,this.validLineNode);return t&&(t.getType()==s.ASTNode.types.INPUT||t.getType()==s.ASTNode.types.NEXT)&&t.getLocation().targetBlock()&&(t=this.getNextNode_(t,this.validLineNode)),t&&this.setCurNode(t),t}},{key:"in",value:function(){var e=this.getCurNode();if(!e)return null;var t=this.getNextNode_(e,this.validInLineNode);return t&&this.setCurNode(t),t}},{key:"prev",value:function(){var e=this.getCurNode();if(!e)return null;var t=this.getPreviousNode_(e,this.validLineNode);return t&&(t.getType()==s.ASTNode.types.INPUT||t.getType()==s.ASTNode.types.NEXT)&&t.getLocation().targetBlock()&&(t=this.getPreviousNode_(t,this.validLineNode)),t&&this.setCurNode(t),t}},{key:"out",value:function(){var e=this.getCurNode();if(!e)return null;var t=this.getPreviousNode_(e,this.validInLineNode);return t&&this.setCurNode(t),t}},{key:"validLineNode",value:function(e){if(!e)return!1;var t=!1,r=e.getLocation(),o=e&&e.getType();return o==s.ASTNode.types.BLOCK?null===r.outputConnection&&(t=!0):(o==s.ASTNode.types.INPUT&&r.type==s.NEXT_STATEMENT||o==s.ASTNode.types.NEXT)&&(t=!0),t}},{key:"validInLineNode",value:function(e){if(!e)return!1;var t=!1,r=e.getLocation(),o=e&&e.getType();return(o==s.ASTNode.types.FIELD||o==s.ASTNode.types.INPUT&&r.type==s.INPUT_VALUE)&&(t=!0),t}}])&&S(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),a}(s.BasicCursor),A="LineCursor",E=s.registry.Type.CURSOR;s.registry.register(E,A,N);var R=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}({},E,A);function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,o=new Array(t);r<t;r++)o[r]=e[r];return o}function w(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var M=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.workspaceStates={},this.loggingCallback=null,this.WS_MOVE_DISTANCE=40,this.MARKER_NAME="local_marker_1",this.DEFAULT_WS_COORDINATE=new s.utils.Coordinate(100,100),this.WS_COORDINATE_ON_DELETE=new s.utils.Coordinate(100,100),this.wsChangeWrapper=this.workspaceChangeListener.bind(this),this.flyoutChangeWrapper=this.flyoutChangeListener.bind(this),this.workspaces=[]}var r,o;return r=e,(o=[{key:"addWorkspace",value:function(e){this.workspaces.push(e);var t=e.getFlyout();e.getMarkerManager().registerMarker(this.MARKER_NAME,new s.Marker),e.addChangeListener(this.wsChangeWrapper),t&&this.addFlyout(t)}},{key:"removeWorkspace",value:function(e){var t=this.workspaces.indexOf(e),r=e.getFlyout();e.getCursor()&&this.disableKeyboardAccessibility(e),t>-1&&this.workspaces.splice(t,1),e.getMarkerManager()&&e.getMarkerManager().unregisterMarker(this.MARKER_NAME),e.removeChangeListener(this.wsChangeWrapper),r&&this.removeFlyout(r)}},{key:"setState",value:function(e,t){this.workspaceStates[e.id]=t}},{key:"getState",value:function(e){return this.workspaceStates[e.id]}},{key:"getMarker",value:function(e){return e.getMarker(this.MARKER_NAME)}},{key:"addFlyout",value:function(e){var t=e.getWorkspace();t.addChangeListener(this.flyoutChangeWrapper);var r=s.registry.getClass(g,h);t.getMarkerManager().setCursor(new r)}},{key:"removeFlyout",value:function(e){e.getWorkspace().removeChangeListener(this.flyoutChangeWrapper)}},{key:"workspaceChangeListener",value:function(e){var t=s.Workspace.getById(e.workspaceId);if(t&&t.keyboardAccessibilityMode)switch(e.type){case s.Events.DELETE:this.handleBlockDeleteByDrag(t,e);break;case s.Events.BLOCK_CHANGE:"mutation"===e.element&&this.handleBlockMutation(t,e);break;case s.Events.CLICK:this.handleWorkspaceClick(t,e);break;case s.Events.TOOLBOX_ITEM_SELECT:this.handleToolboxCategoryClick(t,e);break;case s.Events.BLOCK_CREATE:this.handleBlockCreate(t,e)}}},{key:"flyoutChangeListener",value:function(e){var t=s.Workspace.getById(e.workspaceId),r=t.targetWorkspace,o=r.getFlyout();if(r&&r.keyboardAccessibilityMode&&!o.autoClose)if(e.type===s.Events.CLICK&&"block"===e.targetType){var n=t.getBlockById(e.blockId);this.handleBlockClickInFlyout(r,n)}else if(e.type===s.Events.SELECTED){var i=t.getBlockById(e.newElementId);this.handleBlockClickInFlyout(r,i)}}},{key:"handleBlockCreate",value:function(e,r){this.getState(e)===t.FLYOUT&&(this.resetFlyout(e,!!e.getToolbox()),this.setState(e,t.WORKSPACE))}},{key:"handleBlockMutation",value:function(e,t){var r=t.blockId,o=e.getCursor();if(o){var n=o.getCurNode(),i=n?n.getSourceBlock():null;i&&i.id===r&&o.setCurNode(s.ASTNode.createBlockNode(i))}}},{key:"handleWorkspaceClick",value:function(e,r){this.getState(e)!==t.WORKSPACE&&(this.resetFlyout(e,!!e.getToolbox()),this.setState(e,t.WORKSPACE))}},{key:"handleToolboxCategoryClick",value:function(e,r){var o=this.getState(e);r.newItem&&o!==t.TOOLBOX?this.focusToolbox(e):r.newItem||(this.resetFlyout(e,!!e.getToolbox()),this.setState(e,t.WORKSPACE))}},{key:"handleBlockDeleteByDrag",value:function(e,t){var r=t.blockId,o=t.ids,n=e.getCursor();if(n&&n.getCurNode()&&n.getCurNode().getSourceBlock()){var i=n.getCurNode().getSourceBlock();(i.id===r||o.indexOf(i.id)>-1)&&n.setCurNode(s.ASTNode.createWorkspaceNode(e,this.WS_COORDINATE_ON_DELETE))}}},{key:"handleBlockClickInFlyout",value:function(e,r){r&&(r.isShadow()&&(r=r.getParent()),this.getFlyoutCursor(e).setCurNode(s.ASTNode.createStackNode(r)),this.setState(e,t.FLYOUT))}},{key:"moveCursorOnBlockDelete",value:function(e,t){if(e&&e.getCursor()){var r=e.getCursor(),o=r.getCurNode(),n=o?o.getSourceBlock():null;if(n===t)if(n.getParent()){var i=n.previousConnection||n.outputConnection;i&&r.setCurNode(s.ASTNode.createConnectionNode(i.targetConnection))}else r.setCurNode(s.ASTNode.createWorkspaceNode(n.workspace,n.getRelativeToSurfaceXY()));else n&&t.getChildren(!1).indexOf(n)>-1&&r.setCurNode(s.ASTNode.createWorkspaceNode(n.workspace,n.getRelativeToSurfaceXY()))}}},{key:"focusToolbox",value:function(e){var r=e.getToolbox();if(r&&(this.setState(e,t.TOOLBOX),this.resetFlyout(e,!1),this.getMarker(e).getCurNode()||this.markAtCursor(e),!r.getSelectedItem()))for(var o,n=r.getToolboxItems(),i=0;o=n[i];i++)if(o.isSelectable()){r.selectItemByPosition(i);break}}},{key:"focusFlyout",value:function(e){var r=e.getFlyout();if(this.setState(e,t.FLYOUT),this.getMarker(e).getCurNode()||this.markAtCursor(e),r&&r.getWorkspace()){var o=r.getWorkspace().getTopBlocks(!0);if(o.length>0){var n=s.ASTNode.createStackNode(o[0]);this.getFlyoutCursor(e).setCurNode(n)}}}},{key:"focusWorkspace",value:function(e){e.hideChaff();var r=!!e.getToolbox();this.resetFlyout(e,r),this.setState(e,t.WORKSPACE),this.setCursorOnWorkspaceFocus(e)}},{key:"setCursorOnWorkspaceFocus",value:function(e){var t=e.getTopBlocks(!0),r=e.getCursor(),o=new s.utils.Coordinate(this.DEFAULT_WS_COORDINATE.x/e.scale,this.DEFAULT_WS_COORDINATE.y/e.scale);if(t.length>0)r.setCurNode(s.ASTNode.createTopNode(t[0]));else{var n=s.ASTNode.createWorkspaceNode(e,o);r.setCurNode(n)}}},{key:"getFlyoutCursor",value:function(e){var t=e.getFlyout();return t?t.getWorkspace().getCursor():null}},{key:"insertFromFlyout",value:function(e){var t=this.createNewBlock(e);if(t){var r=this.getMarker(e).getCurNode();this.tryToConnectMarkerAndCursor(e,r,s.ASTNode.createBlockNode(t))||this.warn("Something went wrong while inserting a block from the flyout."),this.focusWorkspace(e),e.getCursor().setCurNode(s.ASTNode.createTopNode(t)),this.removeMark(e)}}},{key:"createNewBlock",value:function(e){var t=e.getFlyout();if(!t||!t.isVisible())return this.warn("Trying to insert from the flyout when the flyout does not  exist or is not visible"),null;var r=this.getFlyoutCursor(e).getCurNode().getLocation();if(!r.isEnabled())return this.warn("Can't insert a disabled block."),null;var o=t.createBlock(r);return o.render(),o.setConnectionTracking(!0),o}},{key:"resetFlyout",value:function(e,t){this.getFlyoutCursor(e)&&(this.getFlyoutCursor(e).hide(),t&&e.getFlyout().hide())}},{key:"connectMarkerAndCursor",value:function(e){var t=this.getMarker(e).getCurNode(),r=e.getCursor().getCurNode();return!(!t||!r)&&this.tryToConnectMarkerAndCursor(e,t,r)}},{key:"tryToConnectMarkerAndCursor",value:function(e,t,r){if(!this.logConnectionWarning(t,r))return!1;var o=t.getType(),n=r.getType(),i=r.getLocation(),a=t.getLocation();if(t.isConnection()&&r.isConnection()){var u=i,c=a;return this.connect(u,c)}if(t.isConnection()&&(n==s.ASTNode.types.BLOCK||n==s.ASTNode.types.STACK)){var l=i,y=a;return this.insertBlock(l,y)}if(o==s.ASTNode.types.WORKSPACE){var d=r?r.getSourceBlock():null;return this.moveBlockToWorkspace(d,t)}return this.warn("Unexpected state in tryToConnectMarkerAndCursor."),!1}},{key:"logConnectionWarning",value:function(e,t){if(!e)return this.warn("Cannot insert with no marked node."),!1;if(!t)return this.warn("Cannot insert with no cursor node."),!1;var r=e.getType(),o=t.getType();return r==s.ASTNode.types.FIELD?(this.warn("Should not have been able to mark a field."),!1):r==s.ASTNode.types.BLOCK?(this.warn("Should not have been able to mark a block."),!1):r==s.ASTNode.types.STACK?(this.warn("Should not have been able to mark a stack."),!1):o==s.ASTNode.types.FIELD?(this.warn("Cannot attach a field to anything else."),!1):o!=s.ASTNode.types.WORKSPACE||(this.warn("Cannot attach a workspace to anything else."),!1)}},{key:"moveBlockToWorkspace",value:function(e,t){return!!e&&(e.isShadow()?(this.warn("Cannot move a shadow block to the workspace."),!1):(e.getParent()&&e.unplug(!1),e.moveTo(t.getWsCoordinate()),!0))}},{key:"disconnectChild",value:function(e,t){var r,o=e.getSourceBlock(),n=t.getSourceBlock();o.getRootBlock()===n.getRootBlock()&&(o.getDescendants(!1).indexOf(n)>-1?(r=this.getInferiorConnection(t))&&r.disconnect():(r=this.getInferiorConnection(e))&&r.disconnect())}},{key:"connect",value:function(e,t){if(!e||!t)return!1;var r=this.getInferiorConnection(e),o=this.getSuperiorConnection(t),n=this.getSuperiorConnection(e),i=this.getInferiorConnection(t);if(r&&o&&this.moveAndConnect(r,o))return!0;if(n&&i&&this.moveAndConnect(n,i))return!0;if(this.moveAndConnect(e,t))return!0;var s=e.getConnectionChecker(),a=s.canConnectWithReason(e,t,!1);return this.warn("Connection failed with error: "+s.getErrorMessage(a,e,t)),!1}},{key:"getInferiorConnection",value:function(e){var t=e.getSourceBlock();return e.isSuperior()?t.previousConnection?t.previousConnection:t.outputConnection?t.outputConnection:null:e}},{key:"getSuperiorConnection",value:function(e){return e.isSuperior()?e:e.targetConnection?e.targetConnection:null}},{key:"moveAndConnect",value:function(e,t){if(!e||!t)return!1;var r=e.getSourceBlock();return!(!e.getConnectionChecker().canConnect(e,t,!1)||t.getSourceBlock().isShadow()||(this.disconnectChild(e,t),t.isSuperior()||r.getRootBlock().positionNearConnection(e,t),t.connect(e),0))}},{key:"insertBlock",value:function(e,t){switch(t.type){case s.PREVIOUS_STATEMENT:if(this.connect(e.nextConnection,t))return!0;break;case s.NEXT_STATEMENT:if(this.connect(e.previousConnection,t))return!0;break;case s.INPUT_VALUE:if(this.connect(e.outputConnection,t))return!0;break;case s.OUTPUT_VALUE:for(var r=0;r<e.inputList.length;r++){var o=e.inputList[r].connection;if(o&&o.type===s.INPUT_VALUE&&this.connect(o,t))return!0}if(e.outputConnection&&this.connect(e.outputConnection,t))return!0}return this.warn("This block can not be inserted at the marked location."),!1}},{key:"disconnectBlocks",value:function(e){var t=e.getCursor().getCurNode();if(t.isConnection()){var r=t.getLocation();if(r.isConnected()){var o=r.isSuperior()?r:r.targetConnection,n=r.isSuperior()?r.targetConnection:r;if(n.getSourceBlock().isShadow())this.log("Cannot disconnect a shadow block");else{o.disconnect(),n.bumpAwayFrom(o),o.getSourceBlock().getRootBlock().bringToFront();var i=s.ASTNode.createConnectionNode(o);e.getCursor().setCurNode(i)}}else this.log("Cannot disconnect unconnected connection")}else this.log("Cannot disconnect blocks when the cursor is not on a connection")}},{key:"markAtCursor",value:function(e){this.getMarker(e).setCurNode(e.getCursor().getCurNode())}},{key:"removeMark",value:function(e){var t=this.getMarker(e);t.setCurNode(null),t.hide()}},{key:"enableKeyboardAccessibility",value:function(e){this.workspaces.indexOf(e)>-1&&!e.keyboardAccessibilityMode&&(e.keyboardAccessibilityMode=!0,this.focusWorkspace(e))}},{key:"disableKeyboardAccessibility",value:function(e){this.workspaces.indexOf(e)>-1&&e.keyboardAccessibilityMode&&(e.keyboardAccessibilityMode=!1,e.getCursor().hide(),this.getMarker(e).hide(),this.getFlyoutCursor(e)&&this.getFlyoutCursor(e).hide())}},{key:"log",value:function(e){this.loggingCallback?this.loggingCallback(i.LOG,e):console.log(e)}},{key:"warn",value:function(e){this.loggingCallback?this.loggingCallback(i.WARN,e):console.warn(e)}},{key:"error",value:function(e){this.loggingCallback?this.loggingCallback(i.ERROR,e):console.error(e)}},{key:"moveWSCursor",value:function(e,t,r){var o=e.getCursor(),n=e.getCursor().getCurNode();if(n.getType()!==s.ASTNode.types.WORKSPACE)return!1;var i=n.getWsCoordinate(),a=t*this.WS_MOVE_DISTANCE+i.x,u=r*this.WS_MOVE_DISTANCE+i.y;return o.setCurNode(s.ASTNode.createWorkspaceNode(e,new s.utils.Coordinate(a,u))),!0}},{key:"handleEnterForWS",value:function(e){var t=e.getCursor().getCurNode(),r=t.getType();r==s.ASTNode.types.FIELD?t.getLocation().showEditor():t.isConnection()||r==s.ASTNode.types.WORKSPACE?this.markAtCursor(e):r==s.ASTNode.types.BLOCK?this.warn("Cannot mark a block."):r==s.ASTNode.types.STACK&&this.warn("Cannot mark a stack.")}},{key:"paste",value:function(){var e=!1;s.Events.setGroup(!0);var t=s.clipboard.paste();return t&&(e=this.insertPastedBlock(t.workspace,t)),s.Events.setGroup(!1),e}},{key:"insertPastedBlock",value:function(e,t){var r=!1,o=e.getMarker(this.MARKER_NAME).getCurNode();return o&&(r=this.tryToConnectMarkerAndCursor(e,o,s.ASTNode.createBlockNode(t))),r}},{key:"dispose",value:function(){var e,t=function(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(e){if("string"==typeof e)return m(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?m(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var o=0,n=function(){};return{s:n,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,s=!0,a=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return s=e.done,e},e:function(e){a=!0,i=e},f:function(){try{s||null==r.return||r.return()}finally{if(a)throw i}}}}(this.workspaces);try{for(t.s();!(e=t.n()).done;){var r=e.value;this.removeWorkspace(r)}}catch(e){t.e(e)}finally{t.f()}}}])&&w(r.prototype,o),Object.defineProperty(r,"prototype",{writable:!1}),e}(),K=s.Gesture.prototype.doWorkspaceClick_;s.Gesture.prototype.doWorkspaceClick_=function(e){K.call(this,e);var t=this.creatorWorkspace_;if(e.shiftKey&&t.keyboardAccessibilityMode){var r=new s.utils.Coordinate(e.clientX,e.clientY),o=s.utils.svgMath.screenToWsCoordinates(t,r),n=s.ASTNode.createWorkspaceNode(t,o);t.getCursor().setCurNode(n)}};var _=s.Gesture.prototype.doBlockClick_;function W(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}s.Gesture.prototype.doBlockClick_=function(e){_.call(this,e),!this.targetBlock_.isInFlyout&&this.mostRecentEvent_.shiftKey&&this.targetBlock_.workspace.keyboardAccessibilityMode&&this.creatorWorkspace_.getCursor().setCurNode(s.ASTNode.createTopNode(this.targetBlock_))};var F=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.navigation=t||new M}var o,n;return o=e,(n=[{key:"init",value:function(){this.addShortcutHandlers(),this.registerDefaults()}},{key:"addShortcutHandlers",value:function(){s.FieldColour&&(s.FieldColour.prototype.onShortcut=this.fieldColourHandler),s.FieldDropdown&&(s.FieldDropdown.prototype.onShortcut=this.fieldDropdownHandler),s.Toolbox&&(s.Toolbox.prototype.onShortcut=this.toolboxHandler)}},{key:"removeShortcutHandlers",value:function(){s.FieldColour&&(s.FieldColour.prototype.onShortcut=null),s.FieldDropdown&&(s.FieldDropdown.prototype.onShortcut=null),s.Toolbox&&(s.Toolbox.prototype.onShortcut=null)}},{key:"fieldColourHandler",value:function(e){if(this.picker_)switch(e.name){case r.PREVIOUS:return this.moveHighlightBy_(0,-1),!0;case r.NEXT:return this.moveHighlightBy_(0,1),!0;case r.OUT:return this.moveHighlightBy_(-1,0),!0;case r.IN:return this.moveHighlightBy_(1,0),!0;default:return!1}return s.FieldColour.superClass_.onShortcut.call(this,e)}},{key:"fieldDropdownHandler",value:function(e){if(this.menu_)switch(e.name){case r.PREVIOUS:return this.menu_.highlightPrevious(),!0;case r.NEXT:return this.menu_.highlightNext(),!0;default:return!1}return s.FieldDropdown.superClass_.onShortcut.call(this,e)}},{key:"toolboxHandler",value:function(e){if(!this.selectedItem_)return!1;switch(e.name){case r.PREVIOUS:return this.selectPrevious_();case r.OUT:return this.selectParent_();case r.NEXT:return this.selectNext_();case r.IN:return this.selectChild_();default:return!1}}},{key:"addWorkspace",value:function(e){this.navigation.addWorkspace(e)}},{key:"removeWorkspace",value:function(e){this.navigation.removeWorkspace(e)}},{key:"enable",value:function(e){this.navigation.enableKeyboardAccessibility(e)}},{key:"disable",value:function(e){this.navigation.disableKeyboardAccessibility(e)}},{key:"fieldShortcutHandler",value:function(e,t){var r=e.getCursor();if(r&&r.getCurNode()){var o=r.getCurNode();return o.getType()===s.ASTNode.types.FIELD&&o.getLocation().onShortcut(t)}}},{key:"registerPrevious",value:function(){var e=this,o={name:r.PREVIOUS,preconditionFn:function(e){return e.keyboardAccessibilityMode},callback:function(r,o,n){var i=r.getFlyout(),s=r.getToolbox(),a=!1;switch(e.navigation.getState(r)){case t.WORKSPACE:return(a=e.fieldShortcutHandler(r,n))||(r.getCursor().prev(),a=!0),a;case t.FLYOUT:return(a=e.fieldShortcutHandler(r,n))||(i.getWorkspace().getCursor().prev(),a=!0),a;case t.TOOLBOX:return!(!s||"function"!=typeof s.onShortcut)&&s.onShortcut(n);default:return!1}}};s.ShortcutRegistry.registry.register(o),s.ShortcutRegistry.registry.addKeyMapping(s.utils.KeyCodes.W,o.name)}},{key:"registerToggleKeyboardNav",value:function(){var e=this,t={name:r.TOGGLE_KEYBOARD_NAV,callback:function(t){return t.keyboardAccessibilityMode?e.navigation.disableKeyboardAccessibility(t):e.navigation.enableKeyboardAccessibility(t),!0}};s.ShortcutRegistry.registry.register(t);var o=s.ShortcutRegistry.registry.createSerializedKey(s.utils.KeyCodes.K,[s.utils.KeyCodes.CTRL,s.utils.KeyCodes.SHIFT]);s.ShortcutRegistry.registry.addKeyMapping(o,t.name)}},{key:"registerOut",value:function(){var e=this,o={name:r.OUT,preconditionFn:function(e){return e.keyboardAccessibilityMode},callback:function(r,o,n){var i=r.getToolbox(),s=!1;switch(e.navigation.getState(r)){case t.WORKSPACE:return(s=e.fieldShortcutHandler(r,n))||(r.getCursor().out(),s=!0),s;case t.FLYOUT:return e.navigation.focusToolbox(r),!0;case t.TOOLBOX:return!(!i||"function"!=typeof i.onShortcut)&&i.onShortcut(n);default:return!1}}};s.ShortcutRegistry.registry.register(o),s.ShortcutRegistry.registry.addKeyMapping(s.utils.KeyCodes.A,o.name)}},{key:"registerNext",value:function(){var e=this,o={name:r.NEXT,preconditionFn:function(e){return e.keyboardAccessibilityMode},callback:function(r,o,n){var i=r.getToolbox(),s=r.getFlyout(),a=!1;switch(e.navigation.getState(r)){case t.WORKSPACE:return(a=e.fieldShortcutHandler(r,n))||(r.getCursor().next(),a=!0),a;case t.FLYOUT:return(a=e.fieldShortcutHandler(r,n))||(s.getWorkspace().getCursor().next(),a=!0),a;case t.TOOLBOX:return!(!i||"function"!=typeof i.onShortcut)&&i.onShortcut(n);default:return!1}}};s.ShortcutRegistry.registry.register(o),s.ShortcutRegistry.registry.addKeyMapping(s.utils.KeyCodes.S,o.name)}},{key:"registerIn",value:function(){var e=this,o={name:r.IN,preconditionFn:function(e){return e.keyboardAccessibilityMode},callback:function(r,o,n){var i=r.getToolbox(),s=!1;switch(e.navigation.getState(r)){case t.WORKSPACE:return(s=e.fieldShortcutHandler(r,n))||(r.getCursor().in(),s=!0),s;case t.TOOLBOX:return(s=!(!i||"function"!=typeof i.onShortcut)&&i.onShortcut(n))||e.navigation.focusFlyout(r),!0;default:return!1}}};s.ShortcutRegistry.registry.register(o),s.ShortcutRegistry.registry.addKeyMapping(s.utils.KeyCodes.D,o.name)}},{key:"registerInsert",value:function(){var e=this,o={name:r.INSERT,preconditionFn:function(e){return e.keyboardAccessibilityMode&&!e.options.readOnly},callback:function(r){return e.navigation.getState(r)===t.WORKSPACE&&e.navigation.connectMarkerAndCursor(r)}};s.ShortcutRegistry.registry.register(o),s.ShortcutRegistry.registry.addKeyMapping(s.utils.KeyCodes.I,o.name)}},{key:"registerMark",value:function(){var e=this,o={name:r.MARK,preconditionFn:function(e){return e.keyboardAccessibilityMode&&!e.options.readOnly},callback:function(r){switch(e.navigation.getState(r)){case t.WORKSPACE:return e.navigation.handleEnterForWS(r),!0;case t.FLYOUT:return e.navigation.insertFromFlyout(r),!0;default:return!1}}};s.ShortcutRegistry.registry.register(o),s.ShortcutRegistry.registry.addKeyMapping(s.utils.KeyCodes.ENTER,o.name)}},{key:"registerDisconnect",value:function(){var e=this,o={name:r.DISCONNECT,preconditionFn:function(e){return e.keyboardAccessibilityMode&&!e.options.readOnly},callback:function(r){return e.navigation.getState(r)===t.WORKSPACE&&(e.navigation.disconnectBlocks(r),!0)}};s.ShortcutRegistry.registry.register(o),s.ShortcutRegistry.registry.addKeyMapping(s.utils.KeyCodes.X,o.name)}},{key:"registerToolboxFocus",value:function(){var e=this,o={name:r.TOOLBOX,preconditionFn:function(e){return e.keyboardAccessibilityMode&&!e.options.readOnly},callback:function(r){return e.navigation.getState(r)===t.WORKSPACE&&(r.getToolbox()?e.navigation.focusToolbox(r):e.navigation.focusFlyout(r),!0)}};s.ShortcutRegistry.registry.register(o),s.ShortcutRegistry.registry.addKeyMapping(s.utils.KeyCodes.T,o.name)}},{key:"registerExit",value:function(){var e=this,o={name:r.EXIT,preconditionFn:function(e){return e.keyboardAccessibilityMode},callback:function(r){switch(e.navigation.getState(r)){case t.FLYOUT:case t.TOOLBOX:return e.navigation.focusWorkspace(r),!0;default:return!1}}};s.ShortcutRegistry.registry.register(o,!0),s.ShortcutRegistry.registry.addKeyMapping(s.utils.KeyCodes.ESC,o.name,!0),s.ShortcutRegistry.registry.addKeyMapping(s.utils.KeyCodes.E,o.name,!0)}},{key:"registerWorkspaceMoveLeft",value:function(){var e=this,t={name:r.MOVE_WS_CURSOR_LEFT,preconditionFn:function(e){return e.keyboardAccessibilityMode&&!e.options.readOnly},callback:function(t){return e.navigation.moveWSCursor(t,-1,0)}};s.ShortcutRegistry.registry.register(t);var o=s.ShortcutRegistry.registry.createSerializedKey(s.utils.KeyCodes.A,[s.utils.KeyCodes.SHIFT]);s.ShortcutRegistry.registry.addKeyMapping(o,t.name)}},{key:"registerWorkspaceMoveRight",value:function(){var e=this,t={name:r.MOVE_WS_CURSOR_RIGHT,preconditionFn:function(e){return e.keyboardAccessibilityMode&&!e.options.readOnly},callback:function(t){return e.navigation.moveWSCursor(t,1,0)}};s.ShortcutRegistry.registry.register(t);var o=s.ShortcutRegistry.registry.createSerializedKey(s.utils.KeyCodes.D,[s.utils.KeyCodes.SHIFT]);s.ShortcutRegistry.registry.addKeyMapping(o,t.name)}},{key:"registerWorkspaceMoveUp",value:function(){var e=this,t={name:r.MOVE_WS_CURSOR_UP,preconditionFn:function(e){return e.keyboardAccessibilityMode&&!e.options.readOnly},callback:function(t){return e.navigation.moveWSCursor(t,0,-1)}};s.ShortcutRegistry.registry.register(t);var o=s.ShortcutRegistry.registry.createSerializedKey(s.utils.KeyCodes.W,[s.utils.KeyCodes.SHIFT]);s.ShortcutRegistry.registry.addKeyMapping(o,t.name)}},{key:"registerWorkspaceMoveDown",value:function(){var e=this,t={name:r.MOVE_WS_CURSOR_DOWN,preconditionFn:function(e){return e.keyboardAccessibilityMode&&!e.options.readOnly},callback:function(t){return e.navigation.moveWSCursor(t,0,1)}};s.ShortcutRegistry.registry.register(t);var o=s.ShortcutRegistry.registry.createSerializedKey(s.utils.KeyCodes.S,[s.utils.KeyCodes.SHIFT]);s.ShortcutRegistry.registry.addKeyMapping(o,t.name)}},{key:"registerCopy",value:function(){var e={name:r.COPY,preconditionFn:function(e){if(e.keyboardAccessibilityMode&&!e.options.readOnly){var t=e.getCursor().getCurNode();if(t&&t.getSourceBlock()){var r=t.getSourceBlock();return!s.Gesture.inProgress()&&r&&r.isDeletable()&&r.isMovable()}}return!1},callback:function(e){var t=e.getCursor().getCurNode().getSourceBlock();e.hideChaff(),s.clipboard.copy(t)}};s.ShortcutRegistry.registry.register(e);var t=s.ShortcutRegistry.registry.createSerializedKey(s.utils.KeyCodes.C,[s.utils.KeyCodes.CTRL]);s.ShortcutRegistry.registry.addKeyMapping(t,e.name,!0);var o=s.ShortcutRegistry.registry.createSerializedKey(s.utils.KeyCodes.C,[s.utils.KeyCodes.ALT]);s.ShortcutRegistry.registry.addKeyMapping(o,e.name,!0);var n=s.ShortcutRegistry.registry.createSerializedKey(s.utils.KeyCodes.C,[s.utils.KeyCodes.META]);s.ShortcutRegistry.registry.addKeyMapping(n,e.name,!0)}},{key:"registerPaste",value:function(){var e=this,t={name:r.PASTE,preconditionFn:function(e){return e.keyboardAccessibilityMode&&!e.options.readOnly&&!s.Gesture.inProgress()},callback:function(){return e.navigation.paste()}};s.ShortcutRegistry.registry.register(t);var o=s.ShortcutRegistry.registry.createSerializedKey(s.utils.KeyCodes.V,[s.utils.KeyCodes.CTRL]);s.ShortcutRegistry.registry.addKeyMapping(o,t.name,!0);var n=s.ShortcutRegistry.registry.createSerializedKey(s.utils.KeyCodes.V,[s.utils.KeyCodes.ALT]);s.ShortcutRegistry.registry.addKeyMapping(n,t.name,!0);var i=s.ShortcutRegistry.registry.createSerializedKey(s.utils.KeyCodes.V,[s.utils.KeyCodes.META]);s.ShortcutRegistry.registry.addKeyMapping(i,t.name,!0)}},{key:"registerCut",value:function(){var e=this,t={name:r.CUT,preconditionFn:function(e){if(e.keyboardAccessibilityMode&&!e.options.readOnly){var t=e.getCursor().getCurNode();if(t&&t.getSourceBlock()){var r=t.getSourceBlock();return!s.Gesture.inProgress()&&r&&r.isDeletable()&&r.isMovable()&&!r.workspace.isFlyout}}return!1},callback:function(t){var r=t.getCursor().getCurNode().getSourceBlock();return s.clipboard.copy(r),e.navigation.moveCursorOnBlockDelete(t,r),r.checkAndDelete(),!0}};s.ShortcutRegistry.registry.register(t);var o=s.ShortcutRegistry.registry.createSerializedKey(s.utils.KeyCodes.X,[s.utils.KeyCodes.CTRL]);s.ShortcutRegistry.registry.addKeyMapping(o,t.name,!0);var n=s.ShortcutRegistry.registry.createSerializedKey(s.utils.KeyCodes.X,[s.utils.KeyCodes.ALT]);s.ShortcutRegistry.registry.addKeyMapping(n,t.name,!0);var i=s.ShortcutRegistry.registry.createSerializedKey(s.utils.KeyCodes.X,[s.utils.KeyCodes.META]);s.ShortcutRegistry.registry.addKeyMapping(i,t.name,!0)}},{key:"registerDelete",value:function(){var e=this,t={name:r.DELETE,preconditionFn:function(e){if(e.keyboardAccessibilityMode&&!e.options.readOnly){var t=e.getCursor().getCurNode();if(t&&t.getSourceBlock()){var r=t.getSourceBlock();return r&&r.isDeletable()}}return!1},callback:function(t,r){var o=t.getCursor().getCurNode().getSourceBlock();return r.preventDefault(),!s.Gesture.inProgress()&&(e.navigation.moveCursorOnBlockDelete(t,o),o.checkAndDelete(),!0)}};s.ShortcutRegistry.registry.register(t),s.ShortcutRegistry.registry.addKeyMapping(s.utils.KeyCodes.DELETE,t.name,!0),s.ShortcutRegistry.registry.addKeyMapping(s.utils.KeyCodes.BACKSPACE,t.name,!0)}},{key:"registerDefaults",value:function(){this.registerPrevious(),this.registerNext(),this.registerIn(),this.registerOut(),this.registerDisconnect(),this.registerExit(),this.registerInsert(),this.registerMark(),this.registerToolboxFocus(),this.registerToggleKeyboardNav(),this.registerWorkspaceMoveDown(),this.registerWorkspaceMoveLeft(),this.registerWorkspaceMoveUp(),this.registerWorkspaceMoveRight(),this.registerCopy(),this.registerPaste(),this.registerCut(),this.registerDelete()}},{key:"dispose",value:function(){for(var e=0,t=Object.values(r);e<t.length;e++){var o=t[e];s.ShortcutRegistry.registry.unregister(o)}this.removeShortcutHandlers(),this.navigation.dispose()}}])&&W(o.prototype,n),Object.defineProperty(o,"prototype",{writable:!1}),e}()})(),n})()}));
//# sourceMappingURL=index.js.map