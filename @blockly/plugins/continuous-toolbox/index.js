/*! For license information please see index.js.LICENSE.txt */
!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e(require("blockly/core"));else if("function"==typeof define&&define.amd)define(["blockly/core"],e);else{var o="object"==typeof exports?e(require("blockly/core")):e(t.Blockly);for(var r in o)("object"==typeof exports?exports:t)[r]=o[r]}}(this,(t=>(()=>{"use strict";var e={573:e=>{e.exports=t}},o={};function r(t){var n=o[t];if(void 0!==n)return n.exports;var i=o[t]={exports:{}};return e[t](i,i.exports,r),i.exports}r.d=(t,e)=>{for(var o in e)r.o(e,o)&&!r.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var n={};return(()=>{r.r(n),r.d(n,{ContinuousCategory:()=>u,ContinuousFlyout:()=>F,ContinuousMetrics:()=>Y,ContinuousToolbox:()=>g});var t=r(573);function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},e(t)}function o(t,e){for(var o=0;o<e.length;o++){var r=e[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function i(t,e){return i=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},i(t,e)}function c(t,o){if(o&&("object"===e(o)||"function"==typeof o))return o;if(void 0!==o)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function l(t){return l=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},l(t)}var u=function(e){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&i(t,e)}(f,e);var r,n,u,s,a=(u=f,s=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=l(u);if(s){var o=l(this).constructor;t=Reflect.construct(e,arguments,o)}else t=e.apply(this,arguments);return c(this,t)});function f(t,e){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,f),a.call(this,t,e)}return r=f,(n=[{key:"createLabelDom_",value:function(t){var e=document.createElement("div");return e.setAttribute("id",this.getId()+".label"),e.textContent=t,e.classList.add(this.cssConfig_.label),e}},{key:"createIconDom_",value:function(){var t=document.createElement("div");return t.classList.add("categoryBubble"),t.style.backgroundColor=this.colour_,t}},{key:"addColourBorder_",value:function(){}},{key:"setSelected",value:function(e){e?(this.rowDiv_.style.backgroundColor="gray",t.utils.dom.addClass(this.rowDiv_,this.cssConfig_.selected)):(this.rowDiv_.style.backgroundColor="",t.utils.dom.removeClass(this.rowDiv_,this.cssConfig_.selected)),t.utils.aria.setState(this.htmlDiv_,t.utils.aria.State.SELECTED,e)}}])&&o(r.prototype,n),Object.defineProperty(r,"prototype",{writable:!1}),f}(t.ToolboxCategory);function s(t){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s(t)}function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var o=0,r=new Array(e);o<e;o++)r[o]=t[o];return r}function f(t,e){for(var o=0;o<e.length;o++){var r=e[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function y(){return y="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,o){var r=p(t,e);if(r){var n=Object.getOwnPropertyDescriptor(r,e);return n.get?n.get.call(arguments.length<3?t:o):n.value}},y.apply(this,arguments)}function p(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=d(t)););return t}function h(t,e){return h=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},h(t,e)}function b(t,e){if(e&&("object"===s(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function d(t){return d=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},d(t)}t.registry.register(t.registry.Type.TOOLBOX_ITEM,t.ToolboxCategory.registrationName,u,!0);var g=function(e){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&h(t,e)}(l,e);var o,r,n,i,c=(n=l,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=d(n);if(i){var o=d(this).constructor;t=Reflect.construct(e,arguments,o)}else t=e.apply(this,arguments);return b(this,t)});function l(t){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,l),c.call(this,t)}return o=l,(r=[{key:"init",value:function(){y(d(l.prototype),"init",this).call(this);var t=this.getFlyout();t.show(this.getInitialFlyoutContents_()),t.recordScrollPositions()}},{key:"getFlyout",value:function(){return y(d(l.prototype),"getFlyout",this).call(this)}},{key:"getInitialFlyoutContents_",value:function(){var e,o=[],r=function(t,e){var o="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!o){if(Array.isArray(t)||(o=function(t,e){if(t){if("string"==typeof t)return a(t,e);var o=Object.prototype.toString.call(t).slice(8,-1);return"Object"===o&&t.constructor&&(o=t.constructor.name),"Map"===o||"Set"===o?Array.from(t):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?a(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){o&&(t=o);var r=0,n=function(){};return{s:n,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,c=!0,l=!1;return{s:function(){o=o.call(t)},n:function(){var t=o.next();return c=t.done,t},e:function(t){l=!0,i=t},f:function(){try{c||null==o.return||o.return()}finally{if(l)throw i}}}}(this.contents_);try{for(r.s();!(e=r.n()).done;){var n=e.value;if(n instanceof t.ToolboxCategory){o.push({kind:"LABEL",text:n.getName()});var i=n.getContents();"string"==typeof i&&(i={custom:i,kind:"CATEGORY"}),o=o.concat(i)}}}catch(t){r.e(t)}finally{r.f()}return o}},{key:"refreshSelection",value:function(){this.getFlyout().show(this.getInitialFlyoutContents_())}},{key:"updateFlyout_",value:function(t,e){if(e){var o=this.getFlyout().getCategoryScrollPosition(e.name_).y;this.getFlyout().scrollTo(o)}}},{key:"shouldDeselectItem_",value:function(t,e){return t&&t!==e}},{key:"getCategoryByName",value:function(e){return this.contents_.find((function(o){return o instanceof t.ToolboxCategory&&o.isSelectable()&&e===o.getName()}))||null}},{key:"selectCategoryByName",value:function(t){var e=this.getCategoryByName(t);if(e){var o=this.selectedItem_;this.shouldDeselectItem_(o,e)&&this.deselectItem_(o),this.shouldSelectItem_(o,e)&&this.selectItem_(o,e)}}},{key:"getClientRect",value:function(){var t=this.getFlyout();return t&&!t.autoClose?t.getClientRect():y(d(l.prototype),"getClientRect",this).call(this)}}])&&f(o.prototype,r),Object.defineProperty(o,"prototype",{writable:!1}),l}(t.Toolbox);function v(t){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},v(t)}function m(t,e){for(var o=0;o<e.length;o++){var r=e[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function _(){return _="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,o){var r=w(t,e);if(r){var n=Object.getOwnPropertyDescriptor(r,e);return n.get?n.get.call(arguments.length<3?t:o):n.value}},_.apply(this,arguments)}function w(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=P(t)););return t}function O(t,e){return O=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},O(t,e)}function T(t,e){if(e&&("object"===v(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function P(t){return P=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},P(t)}t.Css.register([".categoryBubble {\n      margin: 0 auto 0.125rem;\n      border-radius: 100%;\n      border: 1px solid;\n      width: 1.25rem;\n      height: 1.25rem;\n    }\n    .blocklyTreeRow {\n      height: initial;\n      padding: 3px 0;\n    }\n    .blocklyTreeRowContentContainer {\n      display: flex;\n      flex-direction: column;\n    }\n    .blocklyTreeLabel {\n      margin: auto;\n    }"]);var k=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&O(t,e)}(c,t);var e,o,r,n,i=(r=c,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=P(r);if(n){var o=P(this).constructor;t=Reflect.construct(e,arguments,o)}else t=e.apply(this,arguments);return T(this,t)});function c(t,e){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,c),i.call(this,t,e)}return e=c,o=[{key:"getScrollMetrics",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0,r=_(P(c.prototype),"getScrollMetrics",this).call(this,t,e,o),n=o||this.getContentMetrics(t),i=e||this.getViewMetrics(t);return r&&(r.height+=this.flyout_.calculateBottomPadding(n,i)),r}}],o&&m(e.prototype,o),Object.defineProperty(e,"prototype",{writable:!1}),c}(t.FlyoutMetricsManager);function j(t){return j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},j(t)}function S(t,e){var o="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!o){if(Array.isArray(t)||(o=function(t,e){if(t){if("string"==typeof t)return R(t,e);var o=Object.prototype.toString.call(t).slice(8,-1);return"Object"===o&&t.constructor&&(o=t.constructor.name),"Map"===o||"Set"===o?Array.from(t):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?R(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){o&&(t=o);var r=0,n=function(){};return{s:n,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,c=!0,l=!1;return{s:function(){o=o.call(t)},n:function(){var t=o.next();return c=t.done,t},e:function(t){l=!0,i=t},f:function(){try{c||null==o.return||o.return()}finally{if(l)throw i}}}}function R(t,e){(null==e||e>t.length)&&(e=t.length);for(var o=0,r=new Array(e);o<e;o++)r[o]=t[o];return r}function C(t,e){for(var o=0;o<e.length;o++){var r=e[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function x(){return x="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,o){var r=E(t,e);if(r){var n=Object.getOwnPropertyDescriptor(r,e);return n.get?n.get.call(arguments.length<3?t:o):n.value}},x.apply(this,arguments)}function E(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=L(t)););return t}function B(t,e){return B=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},B(t,e)}function A(t,e){if(e&&("object"===j(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return M(t)}function M(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function L(t){return L=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},L(t)}var F=function(e){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&B(t,e)}(l,e);var o,r,n,i,c=(n=l,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=L(n);if(i){var o=L(this).constructor;t=Reflect.construct(e,arguments,o)}else t=e.apply(this,arguments);return A(this,t)});function l(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,l),(e=c.call(this,t)).scrollPositions=[],e.scrollTarget=null,e.scrollAnimationFraction=.3,e.recyclingEnabled_=!0,e.workspace_.setMetricsManager(new k(e.workspace_,M(e))),e.autoClose=!1,e}return o=l,(r=[{key:"getParentToolbox_",value:function(){return this.targetWorkspace.getToolbox()}},{key:"recordScrollPositions",value:function(){var t=this;this.scrollPositions=[];var e,o=this.buttons_.filter((function(e){return e.isLabel()&&t.getParentToolbox_().getCategoryByName(e.getButtonText())})),r=S(o);try{for(r.s();!(e=r.n()).done;){var n=e.value;n.isLabel()&&this.scrollPositions.push({name:n.getButtonText(),position:n.getPosition()})}}catch(t){r.e(t)}finally{r.f()}}},{key:"getCategoryScrollPosition",value:function(t){var e,o=S(this.scrollPositions);try{for(o.s();!(e=o.n()).done;){var r=e.value;if(r.name===t)return r.position}}catch(t){o.e(t)}finally{o.f()}return console.warn("Scroll position not recorded for category ".concat(t)),null}},{key:"selectCategoryByScrollPosition_",value:function(t){if(!this.scrollTarget)for(var e=Math.round(t/this.workspace_.scale),o=this.scrollPositions.length-1;o>=0;o--){var r=this.scrollPositions[o];if(e>=r.position.y)return void this.getParentToolbox_().selectCategoryByName(r.name)}}},{key:"scrollTo",value:function(t){var e=this.workspace_.getMetrics();this.scrollTarget=Math.min(t*this.workspace_.scale,e.scrollHeight-e.viewHeight),this.stepScrollAnimation_()}},{key:"stepScrollAnimation_",value:function(){if(this.scrollTarget){var t=-this.workspace_.scrollY,e=this.scrollTarget-t;if(Math.abs(e)<1)return this.workspace_.scrollbar.setY(this.scrollTarget),void(this.scrollTarget=null);this.workspace_.scrollbar.setY(t+e*this.scrollAnimationFraction),requestAnimationFrame(this.stepScrollAnimation_.bind(this))}}},{key:"calculateBottomPadding",value:function(t,e){if(this.scrollPositions.length>0){var o=this.scrollPositions[this.scrollPositions.length-1].position.y*this.workspace_.scale,r=t.height-o;if(r<e.height)return e.height-r}return 0}},{key:"setMetrics_",value:function(t){x(L(l.prototype),"setMetrics_",this).call(this,t),this.scrollPositions&&this.selectCategoryByScrollPosition_(-this.workspace_.scrollY)}},{key:"position",value:function(){if(this.isVisible()){var e=this.targetWorkspace.getMetrics();if(e){this.height_=e.viewHeight;var o=this.width_-this.CORNER_RADIUS,r=e.viewHeight-2*this.CORNER_RADIUS;this.setBackgroundPath_(o,r);var n;n=this.targetWorkspace.toolboxPosition==this.toolboxPosition_?e.toolboxWidth?this.toolboxPosition_==t.TOOLBOX_AT_LEFT?e.toolboxWidth:e.viewWidth:this.toolboxPosition_==t.TOOLBOX_AT_LEFT?0:e.viewWidth:this.toolboxPosition_==t.TOOLBOX_AT_LEFT?0:e.viewWidth+e.absoluteLeft-this.width_,this.positionAt_(this.width_,this.height_,n,0)}}}},{key:"show",value:function(t){x(L(l.prototype),"show",this).call(this,t),this.recordScrollPositions(),this.workspace_.resizeContents()}},{key:"blockIsRecyclable_",value:function(e){if(!this.recyclingEnabled_)return!1;if(e.mutationToDom&&e.domToMutation)return!1;var o,r=S(e.inputList);try{for(r.s();!(o=r.n()).done;){var n,i=o.value,c=S(i.fieldRow);try{for(c.s();!(n=c.n()).done;){var l=n.value;if(l instanceof t.FieldVariable)return!1;if(l instanceof t.FieldDropdown&&l.isOptionListDynamic())return!1}}catch(t){c.e(t)}finally{c.f()}if(i.connection){var u=i.connection.targetBlock();if(u&&!this.blockIsRecyclable_(u))return!1}}}catch(t){r.e(t)}finally{r.f()}return!0}},{key:"setBlockIsRecyclable",value:function(t){this.blockIsRecyclable_=t}},{key:"setRecyclingEnabled",value:function(t){this.recyclingEnabled_=t}}])&&C(o.prototype,r),Object.defineProperty(o,"prototype",{writable:!1}),l}(t.VerticalFlyout);function I(t){return I="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},I(t)}function D(t,e){for(var o=0;o<e.length;o++){var r=e[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function N(t,e){return N=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},N(t,e)}function X(t,e){if(e&&("object"===I(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function W(t){return W=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},W(t)}var Y=function(e){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&N(t,e)}(l,e);var o,r,n,i,c=(n=l,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=W(n);if(i){var o=W(this).constructor;t=Reflect.construct(e,arguments,o)}else t=e.apply(this,arguments);return X(this,t)});function l(t){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,l),c.call(this,t)}return o=l,r=[{key:"getViewMetrics",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0,o=e?this.workspace_.scale:1,r=this.getSvgMetrics(),n=this.getToolboxMetrics(),i=this.getFlyoutMetrics(!1),c=n.position;return this.workspace_.getToolbox()&&(c==t.TOOLBOX_AT_TOP||c==t.TOOLBOX_AT_BOTTOM?r.height-=n.height+i.height:c!=t.TOOLBOX_AT_LEFT&&c!=t.TOOLBOX_AT_RIGHT||(r.width-=n.width+i.width)),{height:r.height/o,width:r.width/o,top:-this.workspace_.scrollY/o,left:-this.workspace_.scrollX/o}}},{key:"getAbsoluteMetrics",value:function(){var e=this.getToolboxMetrics(),o=this.getFlyoutMetrics(!1),r=e.position,n=0;this.workspace_.getToolbox()&&r==t.TOOLBOX_AT_LEFT&&(n=e.width+o.width);var i=0;return this.workspace_.getToolbox()&&r==t.TOOLBOX_AT_TOP&&(i=e.height+o.height),{top:i,left:n}}}],r&&D(o.prototype,r),Object.defineProperty(o,"prototype",{writable:!1}),l}(t.MetricsManager);t.registry.register(t.registry.Type.METRICS_MANAGER,"CustomMetricsManager",Y)})(),n})()));
//# sourceMappingURL=index.js.map