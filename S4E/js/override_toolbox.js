/**
 * @license
 * Copyright 2012 Fred Lin
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @fileoverview Intercept data to modify toolbox for user
 * @author scanet@libreduc.cc (Sébastien CANET)
 */

/**
 * @fileoverview Toolbox modification, override css style
 * @source https://blocklycodelabs.dev/codelabs/custom-toolbox
 */
class TweakCategories extends Blockly.ToolboxCategory {
    constructor(categoryDef, toolbox, opt_parent) {
        super(categoryDef, toolbox, opt_parent);
    }
    addColourBorder_(colour) {
        this.rowDiv_.style.backgroundColor = colour;
    }
    setSelected(isSelected) {
        var labelDom = this.rowDiv_.getElementsByClassName('blocklyTreeLabel')[0];
        if (isSelected) {
            this.rowDiv_.style.backgroundColor = 'white';
            labelDom.style.color = this.colour_;
            this.iconDom_.style.fill = this.colour_;
        } else {
            this.rowDiv_.style.backgroundColor = this.colour_;
            labelDom.style.color = 'white';
            this.iconDom_.style.fill = 'white';
        }
        Blockly.utils.aria.setState( /** @type {!Element} */ (this.htmlDiv_), Blockly.utils.aria.State.SELECTED, isSelected);
    }
    createIconDom_() {
        const iconImg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        iconImg.setAttribute("width", "25px");
        iconImg.setAttribute("height", "25px");
        iconImg.setAttribute("version", "1.1");
        iconImg.style.verticalAlign = "middle";
        iconImg.style.fill = '#000000';
        iconImg.setAttribute("src", "./media/" + this.toolboxItemDef_['toolboxitemid'] + ".svg");
        return iconImg;
    }
}

Blockly.registry.register(
    Blockly.registry.Type.TOOLBOX_ITEM,
    Blockly.ToolboxCategory.registrationName,
    TweakCategories, true);

function classMixin(target, src) {
    for (var key of Object.getOwnPropertyNames(src.prototype)) {
        target.prototype[key] = src.prototype[key];
    }
}
classMixin(Blockly.CollapsibleToolboxCategory, TweakCategories);