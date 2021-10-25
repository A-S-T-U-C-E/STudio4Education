/**
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @fileoverview JavaScript for Blockly's Minimap demo.
 * @author karnpurohit@gmail.com (Karan Purohit)
 * @author scanet@libreduc.cc update code (Sébastien Canet)
 */
'use strict';

/**
 * Creating a seperate namespace for minimap.
 */
var Minimap = {};

/**
 * Initialize the workspace and minimap.
 * @param {!Workspace} workspace The main workspace of the user.
 * @param {!Workspace} minimap The workspace that will be used as a minimap.
 */
Minimap.init = function(workspace, minimap) {
    this.workspace = workspace;
    this.minimap = minimap;

    //Adding scroll callback functionlity to vScroll and hScroll just for this demo.
    //IMPORTANT: This should be changed when there is proper UI event handling
    //           api available and should be handled by workspace's event listeners.
    this.workspace.scrollbar.vScroll.setHandlePosition = function(newPosition) {
        // Code below is same as the original setHandlePosition function in core/scrollbar.js.
        this.handlePosition_ = newPosition;
        this.svgHandle_.setAttribute(this.positionAttribute_, this.handlePosition_);

        // New code starts from here.
        // Get the absolutePosition.
        var absolutePosition = (this.handlePosition_ / this.ratio);
        // Firing the scroll change listener.
        Minimap.onScrollChange(absolutePosition, this.horizontal_);
    };

    // Adding call back for horizontal scroll.
    this.workspace.scrollbar.hScroll.setHandlePosition = function(newPosition) {
        // Code below is same as the original setHandlePosition function in core/scrollbar.js.
        this.handlePosition_ = newPosition;
        this.svgHandle_.setAttribute(this.positionAttribute_, this.handlePosition_);

        // New code starts from here.
        // Get the absolutePosition.
        var absolutePosition = (this.handlePosition_ / this.ratio);
        // Firing the scroll change listener.
        Minimap.onScrollChange(absolutePosition, this.horizontal_);
    };

    // Required to stop a positive feedback loop when user clicks minimap
    // and the scroll changes, which inturn may change minimap.
    this.disableScrollChange = false;

    // Listen to events on the main workspace.
    this.workspace.addChangeListener(Minimap.mirrorEvent);

    //Get rectangle bounding the minimap div.
    this.rect = document.getElementById('minimapDiv').getBoundingClientRect();

    // Create a svg overlay on the top of mapDiv for the minimap.
    this.svg = Blockly.utils.dom.createSvgElement('svg', {
        'xmlns': Blockly.utils.dom.SVG_NS,
        'xmlns:html': Blockly.utils.dom.HTML_NS,
        'xmlns:xlink': Blockly.utils.dom.XLINK_NS,
        'version': '1.1',
        'height': this.rect.bottom - this.rect.top,
        'width': this.rect.right - this.rect.left,
        'class': 'minimap',
    }, document.getElementById('minimapDiv'));
    this.svg.style.top = this.rect.top + 'px';
    this.svg.style.left = this.rect.left + 'px';

    // Creating a rectangle in the minimap that represents current view.
    Blockly.utils.dom.createSvgElement('rect', {
        'width': 50,
        'height': 50,
        'class': 'mapDragger'
    }, this.svg);

    // Rectangle in the minimap that represents current view.
    this.mapDragger = this.svg.childNodes[0];

    // Adding mouse events to the rectangle, to make it Draggable.
    // Using Blockly.bindEvent_ to attach mouse/touch listeners.
    Blockly.bindEvent_(this.mapDragger, "mousedown", null, Minimap.mousedown);

    //When the window change, we need to resize the minimap window.
    window.addEventListener('resize', Minimap.repositionMinimap);

    // Mouse up event for the minimap.
    this.svg.addEventListener('mouseup', Minimap.updateMapDragger);

    //Boolen to check whether I am dragging the surface or not.
    this.isDragging = false;
};

Minimap.mousedown = function(e) {
    // Using Blockly.bindEvent_ to attach mouse/touch listeners.
    Minimap.mouseMoveBindData = Blockly.bindEvent_(document, "mousemove", null, Minimap.mousemove);
    Minimap.mouseUpBindData = Blockly.bindEvent_(document, "mouseup", null, Minimap.mouseup);
    Minimap.isDragging = true;
    e.stopPropagation();
};

Minimap.mouseup = function(e) {
    Minimap.isDragging = false;
    // Removing listeners.
    Blockly.unbindEvent_(Minimap.mouseUpBindData);
    Blockly.unbindEvent_(Minimap.mouseMoveBindData);
    Minimap.updateMapDragger(e);
    e.stopPropagation();
};

Minimap.mousemove = function(e) {
    if (Minimap.isDragging) {
        Minimap.updateMapDragger(e);
        e.stopPropagation();
    }
};

/**
 * Run non-UI events from the main workspace on the minimap.
 * @param {!Blockly.Events.Abstract} event Event that triggered in the main
 *    workspace.
 */
Minimap.mirrorEvent = function(event) {
    if (event instanceof Blockly.Events.Ui) {
        return; // Don't mirror UI events.
    }
    // Convert event to JSON.  This could then be transmitted across the net.
    var json = event.toJson();
    // Convert JSON back into an event, then execute it.
    var minimapEvent = Blockly.Events.fromJson(json, Minimap.minimap);
    minimapEvent.run(true);
    Minimap.scaleMinimap();
    Minimap.setDraggerHeight();
    Minimap.setDraggerWidth();
};

/**
 * Called when window is resized. Repositions the minimap overlay.
 */
Minimap.repositionMinimap = function() {
    Minimap.rect = document.getElementById('mapDiv').getBoundingClientRect();
    Minimap.svg.style.top = Minimap.rect.top + 'px';
    Minimap.svg.style.left = Minimap.rect.left + 'px';
};

/**
 * Updates the rectangle's height.
 */
Minimap.setDraggerHeight = function() {
    var workspaceMetrics = Minimap.workspace.getMetrics();
    var draggerHeight = workspaceMetrics.viewHeight * Minimap.minimap.scale / Minimap.workspace.scale;
    // It's zero when first block is placed.
    if (draggerHeight != 0) {
        Minimap.mapDragger.setAttribute("height", draggerHeight);
    }
};

/**
 * Updates the rectangle's width.
 */
Minimap.setDraggerWidth = function() {
    var workspaceMetrics = Minimap.workspace.getMetrics();
    var draggerWidth = workspaceMetrics.viewWidth * Minimap.minimap.scale / Minimap.workspace.scale;
    // It's zero when first block is placed.
    if (draggerWidth != 0) {
        Minimap.mapDragger.setAttribute("width", draggerWidth);
    }
};

/**
 * Updates the overall position of the viewport of the minimap by appropriately
 * using translate functions.
 */
Minimap.scaleMinimap = function() {
    var minimapBoundingBox = Minimap.minimap.getBlocksBoundingBox();
    var workspaceBoundingBox = Minimap.workspace.getBlocksBoundingBox();
    var workspaceMetrics = Minimap.workspace.getMetrics();
    var minimapMetrics = Minimap.minimap.getMetrics();
    minimapBoundingBox.width = Math.abs(minimapBoundingBox.left - minimapBoundingBox.right);
    minimapBoundingBox.height = Math.abs(minimapBoundingBox.top - minimapBoundingBox.bottom);

    // Scaling the mimimap such that all the blocks can be seen in the viewport.
    // This padding is default because this is how to scrollbar(in main workspace)
    // is implemented.
    var topPadding = (workspaceMetrics.viewHeight) * Minimap.minimap.scale / (2 * Minimap.workspace.scale);
    var sidePadding = (workspaceMetrics.viewWidth) * Minimap.minimap.scale / (2 * Minimap.workspace.scale);

    // If actual padding is more than half view ports height,
    // change it to actual padding.
    if ((workspaceBoundingBox.y * Minimap.workspace.scale - workspaceMetrics.contentTop) *
        Minimap.minimap.scale / Minimap.workspace.scale > topPadding) {
        topPadding = (workspaceBoundingBox.y * Minimap.workspace.scale - workspaceMetrics.contentTop) *
            Minimap.minimap.scale / Minimap.workspace.scale;
    }

    // If actual padding is more than half view ports width,
    // change it to actual padding.
    if ((workspaceBoundingBox.x * Minimap.workspace.scale - workspaceMetrics.contentLeft) *
        Minimap.minimap.scale / Minimap.workspace.scale > sidePadding) {
        sidePadding = (workspaceBoundingBox.x * Minimap.workspace.scale - workspaceMetrics.contentLeft) *
            Minimap.minimap.scale / Minimap.workspace.scale;
    }
    var scalex = (minimapMetrics.viewWidth - 2 * sidePadding) / minimapBoundingBox.width;
    var scaley = (minimapMetrics.viewHeight - 2 * topPadding) / minimapBoundingBox.height;
    Minimap.minimap.setScale(Math.min(scalex, scaley));

    // Translating the minimap.
    Minimap.minimap.translate(-minimapMetrics.contentLeft * Minimap.minimap.scale + sidePadding, -minimapMetrics.contentTop * Minimap.minimap.scale + topPadding);
};

/**
 * Handles the onclick event on the minimapBoundingBox.
 * Changes mapDraggers position.
 * @param {!Event} e Event from the mouse click.
 */
Minimap.updateMapDragger = function(e) {
    var y = e.clientY;
    var x = e.clientX;
    var draggerHeight = Minimap.mapDragger.getAttribute("height");
    var draggerWidth = Minimap.mapDragger.getAttribute("width");

    var finalY = y - Minimap.rect.top - (draggerHeight / 2);
    var finalX = x - Minimap.rect.left - (draggerWidth / 2);

    var maxValidY = (Minimap.workspace.getMetrics().contentHeight - Minimap.workspace.getMetrics().viewHeight) *
        Minimap.minimap.scale;
    var maxValidX = (Minimap.workspace.getMetrics().contentWidth - Minimap.workspace.getMetrics().viewWidth) *
        Minimap.minimap.scale;

    if (y + (draggerHeight / 2) > Minimap.rect.bottom) {
        finalY = Minimap.rect.bottom - Minimap.rect.top - draggerHeight;
    } else if (y < Minimap.rect.top + (draggerHeight / 2)) {
        finalY = 0;
    }

    if (x + (draggerWidth / 2) > Minimap.rect.right) {
        finalX = Minimap.rect.right - Minimap.rect.left - draggerWidth;
    } else if (x < Minimap.rect.left + (draggerWidth / 2)) {
        finalX = 0;
    }

    Minimap.mapDragger.setAttribute("y", finalY);
    Minimap.mapDragger.setAttribute("x", finalX);
    // Required, otherwise creates a feedback loop.
    Minimap.disableScrollChange = true;
    Minimap.workspace.scrollbar.vScroll.set(finalY * Minimap.workspace.scale / Minimap.minimap.scale);
    Minimap.workspace.scrollbar.hScroll.set(finalX * Minimap.workspace.scale / Minimap.minimap.scale);
    Minimap.disableScrollChange = false;
};

/**
 * Handles the onclick event on the minimapBoundingBox, paramaters are passed by
 * the event handler.
 * @param {Float} position This is the absolute postion of the scrollbar.
 * @param {boolean} horizontal Informs if the change event if for horizontal(true)
 *     scrollbar or vertical(false) scrollbar.
 */
Minimap.onScrollChange = function(position, horizontal) {
    if (!Minimap.disableScrollChange) {
        Minimap.mapDragger.setAttribute(horizontal ? 'x' : 'y',
            position * Minimap.minimap.scale / Minimap.workspace.scale);
    }
};