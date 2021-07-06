!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e(require("blockly/core"));else if("function"==typeof define&&define.amd)define(["blockly/core"],e);else{var i="object"==typeof exports?e(require("blockly/core")):e(t.Blockly);for(var s in i)("object"==typeof exports?exports:t)[s]=i[s]}}(this,(function(t){return function(t){var e={};function i(s){if(e[s])return e[s].exports;var n=e[s]={i:s,l:!1,exports:{}};return t[s].call(n.exports,n,n.exports,i),n.l=!0,n.exports}return i.m=t,i.c=e,i.d=function(t,e,s){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(s,n,function(e){return t[e]}.bind(null,n));return s},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/dist/",i(i.s=1)}([function(e,i){e.exports=t},function(t,e,i){"use strict";i.r(e),i.d(e,"WorkspaceSearch",(function(){return l}));
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const s=["path.blocklyPath.blockly-ws-search-highlight {","fill: black;","}","path.blocklyPath.blockly-ws-search-highlight.blockly-ws-search-current {","fill: grey;","}",".blockly-ws-search-close-btn {","background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMTQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjE0Ij48cGF0aCBkPSJNMTkgNi40MUwxNy41OSA1IDEyIDEwLjU5IDYuNDEgNSA1IDYuNDEgMTAuNTkgMTIgNSAxNy41OSA2LjQxIDE5IDEyIDEzLjQxIDE3LjU5IDE5IDE5IDE3LjU5IDEzLjQxIDEyeiIvPjxwYXRoIGQ9Ik0wIDBoMjR2MjRIMHoiIGZpbGw9Im5vbmUiLz48L3N2Zz4=) no-repeat top left;","}",".blockly-ws-search-next-btn {","background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMTQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjE0Ij48cGF0aCBkPSJNNy40MSA4LjU5TDEyIDEzLjE3bDQuNTktNC41OEwxOCAxMGwtNiA2LTYtNiAxLjQxLTEuNDF6Ii8+PHBhdGggZD0iTTAgMGgyNHYyNEgwVjB6IiBmaWxsPSJub25lIi8+PC9zdmc+) no-repeat top left;","}",".blockly-ws-search-previous-btn {","background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMTQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjE0Ij48cGF0aCBkPSJNNy40MSAxNS40MUwxMiAxMC44M2w0LjU5IDQuNThMMTggMTRsLTYtNi02IDZ6Ii8+PHBhdGggZD0iTTAgMGgyNHYyNEgweiIgZmlsbD0ibm9uZSIvPjwvc3ZnPg==) no-repeat top left;","}",".blockly-ws-search {","background: white;","border: solid lightgrey .5px;","box-shadow: 0px 10px 20px grey;","justify-content: center;","padding: .25em;","position: absolute;","z-index: 70;","}",".blockly-ws-search-input input {","border: none;","}",".blockly-ws-search button {","border: none;","}",".blockly-ws-search-actions {","display: flex;","}",".blockly-ws-search-container {","display: flex;","}",".blockly-ws-search-content {","display: flex;","}"],n=function(){let t=!1;return function(){if(t)return;t=!0;const e=s.join("\n"),i=document.createElement("style");i.id="blockly-ws-search-style";const n=document.createTextNode(e);i.appendChild(n),document.head.insertBefore(i,document.head.firstChild)}}();var o=i(0);
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class l{constructor(t){this.workspace_=t,this.htmlDiv_=null,this.actionDiv_=null,this.inputElement_=null,this.textInputPlaceholder_="Search",this.blocks_=[],this.currentBlockIndex_=-1,this.searchText_="",this.searchOnInput=!0,this.caseSensitive=!1,this.preserveSelected=!0,this.boundEvents_=[]}init(){this.workspace_.getPluginManager().addPlugin({id:"workspaceSearch",plugin:this,weight:0,types:[o.PluginManager.Type.POSITIONABLE]}),n(),this.createDom_(),this.setVisible_(!1),this.workspace_.resize()}dispose(){for(const t of this.boundEvents_)o.unbindEvent_(t);this.boundEvents_=null,this.htmlDiv_&&(this.htmlDiv_.remove(),this.htmlDiv_=null),this.actionDiv_=null,this.inputElement_=null}createDom_(){const t=this.workspace_.getInjectionDiv();this.addEvent_(t,"keydown",this,t=>this.onWorkspaceKeyDown_(t)),this.htmlDiv_=document.createElement("div"),o.utils.dom.addClass(this.htmlDiv_,"blockly-ws-search");const e=document.createElement("div");o.utils.dom.addClass(e,"blockly-ws-search-container");const i=document.createElement("div");o.utils.dom.addClass(i,"blockly-ws-search-content"),e.appendChild(i);const s=document.createElement("div");o.utils.dom.addClass(s,"blockly-ws-search-input"),this.inputElement_=this.createTextInput_(),this.addEvent_(this.inputElement_,"keydown",this,t=>this.onKeyDown_(t)),this.addEvent_(this.inputElement_,"input",this,()=>this.onInput_()),this.addEvent_(this.inputElement_,"click",this,()=>this.searchAndHighlight(this.searchText_,this.preserveSelected)),s.appendChild(this.inputElement_),i.appendChild(s),this.actionDiv_=document.createElement("div"),o.utils.dom.addClass(this.actionDiv_,"blockly-ws-search-actions"),i.appendChild(this.actionDiv_);const n=this.createNextBtn_();n&&this.addActionBtn(n,()=>this.next());const l=this.createPreviousBtn_();l&&this.addActionBtn(l,()=>this.previous());const c=this.createCloseBtn_();c&&(this.addBtnListener_(c,()=>this.close()),e.appendChild(c)),this.htmlDiv_.appendChild(e),t.insertBefore(this.htmlDiv_,this.workspace_.getParentSvg())}addEvent_(t,e,i,s){const n=o.bindEventWithChecks_(t,e,i,s);this.boundEvents_.push(n)}addActionBtn(t,e){this.addBtnListener_(t,e),this.actionDiv_.appendChild(t)}createTextInput_(){const t=document.createElement("input");return t.type="text",t.setAttribute("placeholder",this.textInputPlaceholder_),t}createNextBtn_(){return this.createBtn_("blockly-ws-search-next-btn","Find next")}createPreviousBtn_(){return this.createBtn_("blockly-ws-search-previous-btn","Find previous")}createCloseBtn_(){return this.createBtn_("blockly-ws-search-close-btn","Close search bar")}createBtn_(t,e){const i=document.createElement("button");return o.utils.dom.addClass(i,t),i.setAttribute("aria-label",e),i}addBtnListener_(t,e){this.addEvent_(t,"click",this,e),this.addEvent_(t,"keydown",this,t=>{t.keyCode===o.utils.KeyCodes.ENTER?(e(t),t.preventDefault()):t.keyCode===o.utils.KeyCodes.ESC&&this.close(),t.stopPropagation()})}getBoundingRectangle(){const t=this.htmlDiv_.style.top,e=this.htmlDiv_.style.left;return new o.utils.Rect(t,t+this.htmlDiv_.style.height,e,e+this.htmlDiv_.style.width)}position(t,e){this.workspace_.RTL?this.htmlDiv_.style.left=t.absoluteMetrics.left+"px":t.toolboxMetrics.position===o.TOOLBOX_AT_RIGHT?this.htmlDiv_.style.right=t.toolboxMetrics.width+"px":this.htmlDiv_.style.right="0",this.htmlDiv_.style.top=t.absoluteMetrics.top+"px"}onInput_(){if(this.searchOnInput){const t=this.inputElement_.value.trim();t!==this.searchText_&&this.searchAndHighlight(t,this.preserveSelected)}}onKeyDown_(t){if(t.keyCode===o.utils.KeyCodes.ESC)this.close();else if(t.keyCode===o.utils.KeyCodes.ENTER)if(this.searchOnInput)this.next();else{const t=this.inputElement_.value.trim();t!==this.searchText_&&this.searchAndHighlight(t,this.preserveSelected)}}onWorkspaceKeyDown_(t){(t.ctrlKey||t.metaKey)&&t.keyCode===o.utils.KeyCodes.F&&(this.open(),t.preventDefault(),t.stopPropagation())}previous(){this.setCurrentBlock_(this.currentBlockIndex_-1)}next(){this.setCurrentBlock_(this.currentBlockIndex_+1)}setSearchPlaceholder(t){this.textInputPlaceholder_=t,this.inputElement_&&this.inputElement_.setAttribute("placeholder",this.textInputPlaceholder_)}setCurrentBlock_(t){if(!this.blocks_.length)return;let e=this.blocks_[this.currentBlockIndex_];e&&this.unhighlightCurrentSelection_(e),this.currentBlockIndex_=(t%this.blocks_.length+this.blocks_.length)%this.blocks_.length,e=this.blocks_[this.currentBlockIndex_],this.highlightCurrentSelection_(e),this.scrollToVisible_(e)}open(){this.setVisible_(!0),this.inputElement_.focus(),this.searchText_&&this.searchAndHighlight(this.searchText_)}close(){this.setVisible_(!1),this.workspace_.markFocused(),this.clearBlocks()}setVisible_(t){this.htmlDiv_.style.display=t?"flex":"none"}searchAndHighlight(t,e){const i=this.blocks_[this.currentBlockIndex_];this.searchText_=t.trim(),this.clearBlocks(),this.blocks_=this.getMatchingBlocks_(this.workspace_,this.searchText_,this.caseSensitive),this.highlightSearchGroup_(this.blocks_);let s=0;e&&(s=this.blocks_.indexOf(i),s=s>-1?s:0),this.setCurrentBlock_(s)}getSearchPool_(t){return t.getAllBlocks(!0).filter(t=>{const e=t.getSurroundParent();return!e||!e.isCollapsed()})}isBlockMatch_(t,e,i){let s="";if(t.isCollapsed())s=t.toString();else{const e=[];t.inputList.forEach(t=>{t.fieldRow.forEach(t=>{e.push(t.getText())})}),s=e.join(" ").trim()}return i||(s=s.toLowerCase()),s.indexOf(e)>-1}getMatchingBlocks_(t,e,i){if(!e)return[];this.caseSensitive||(e=e.toLowerCase());return this.getSearchPool_(t).filter(t=>this.isBlockMatch_(t,e,i))}clearBlocks(){this.unhighlightSearchGroup_(this.blocks_);const t=this.blocks_[this.currentBlockIndex_];t&&this.unhighlightCurrentSelection_(t),this.currentBlockIndex_=-1,this.blocks_=[]}highlightCurrentSelection_(t){const e=t.pathObject.svgPath;o.utils.dom.addClass(e,"blockly-ws-search-current")}unhighlightCurrentSelection_(t){const e=t.pathObject.svgPath;o.utils.dom.removeClass(e,"blockly-ws-search-current")}highlightSearchGroup_(t){t.forEach(t=>{const e=t.pathObject.svgPath;o.utils.dom.addClass(e,"blockly-ws-search-highlight")})}unhighlightSearchGroup_(t){t.forEach(t=>{const e=t.pathObject.svgPath;o.utils.dom.removeClass(e,"blockly-ws-search-highlight")})}scrollToVisible_(t){if(!this.workspace_.isMovable())return;const e=t.getRelativeToSurfaceXY(),i=this.workspace_.scale,s=t.width*i,n=t.height*i,o=e.y*i,l=(e.y+t.height)*i,c=this.workspace_.RTL?e.x*i-s:e.x*i,h=this.workspace_.RTL?e.x*i:e.x*i+s,r=this.workspace_.getMetrics();let a=r.viewLeft;const d=c<r.viewLeft,u=h>r.viewLeft+r.viewWidth,p=s>r.viewWidth;!p&&d||p&&!this.workspace_.RTL?a=c:(!p&&u||p&&this.workspace_.RTL)&&(a=h-r.viewWidth);let _=r.viewTop;const g=o<r.viewTop,b=l>r.viewTop+r.viewHeight,y=n>r.viewHeight;if(g||y&&b?_=o:b&&(_=l-r.viewHeight),a!==r.viewLeft||_!==r.viewTop){const t=document.activeElement;this.workspace_.scroll(-a,-_),t&&t.focus()}}}
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */}])}));
//# sourceMappingURL=index.js.map