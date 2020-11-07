Blockly.defineBlocksWithJsonArray([
    // Block for initializing a square matrix.
    {
        "type": "numpy_square_matrix",
        "output": "Array",
        "style": "numpy_blocks",
        "tooltip": "%{BKY_NUMPY_SQUARE_MATRIX_TOOLTIP}",
        "helpUrl": VITTASCIENCE_SITE,
        "extensions": [
            "block_buttons_plus_minus", 
            "numpy_square_matrix_init"
        ],
        "mutator": "numpy_square_matrix_mutator"
    }
]);

/**
 * Performs final setup of 'numpy_square_matrix' block.
 * @this {Blockly.Block}
 */
Blockly.Constants.Numpy.NUMPY_SQUARE_MATRIX_INIT_EXTENSION = function() {
    this.dim_ = 3;
    this.line = new Array();
    this.updateShape_();
};

/**
 * Mixin for mutator functions in the 'numpy_square_matrix_mutator' extension.
 * @mixin
 * @augments Blockly.Block
 * @package
 */
Blockly.Constants.Numpy.NUMPY_SQUARE_MATRIX_MUTATOR_MIXIN = {
    /**
     * Create XML to represent matrix inputs.
     * @return {!Element} XML storage element.
     * @this {Blockly.Block}
     */
    mutationToDom: function () {
        var container = Blockly.utils.xml.createElement('mutation');
        container.setAttribute('dim', this.dim_);
        return container;
    },
    /**
     * Parse XML to restore the list inputs.
     * @param {!Element} xmlElement XML storage element.
     * @this {Blockly.Block}
     */
    domToMutation: function (xmlElement) {
        this.dim_ = parseInt(xmlElement.getAttribute("dim"));
        this.updateShape_();
    },
    raiseMatrixSize: function () {
        var update = function() {
            this.addColumnFields();
            this.addLineFields();
            this.dim_++;
        };
        this.update_(update);
    },
    reduceMatrixSize: function () {
        var update = function() {
            this.removeColumnFields();
            this.removeInput('line_' + (this.dim_ - 1));
            this.dim_--;
        };
        this.update_(update);
    },
    addLineFields: function() {
        this.line[this.dim_] = this.appendDummyInput('line_' + this.dim_);
        for (var i = 0; i < this.dim_ + 1; i++) {
            this.line[this.dim_].appendField(new Blockly.FieldTextInput("0"), 'element_' + this.dim_ + i);
        }
    },
    removeColumnFields: function () {
        for (var j = this.dim_ - 1; j >= 0; j--) {
            this.line[j].removeField('element_' + j + (this.dim_ - 1));
        }

    },
    addColumnFields: function () {
        for (var j = 0; j < this.dim_; j++) {
            this.line[j].appendField(new Blockly.FieldTextInput("0"), 'element_' + j + this.dim_);
        }
    },
    update_: function(update) {
        return Blockly.Constants.Utils.UPDATE_BLOCK_MUTATOR_MIXIN(this, update);
    },
    /**
     * Modify this block to have the correct matrix dimension.
     * @private
     * @this {Blockly.Block}
     */
    updateShape_: function () {
        var that = this;
        var remove = function() {
          that.reduceMatrixSize();
        };
        var add = function() {
          that.raiseMatrixSize();
        };
        // Remove all inputs
        if (this.getInput('TOP')) this.removeInput('TOP');
        var i = 0;
        while (this.getInput('line_' + i)) {
          this.removeInput('line_' + i);
          i++;
        }
        var top = this.appendDummyInput('TOP');
        top.appendField(Blockly.Msg['NUMPY_SQUARE_MATRIX_TITLE']);
        if (this.dim_ > 2 && this.dim_ < 10) {
            top.appendField(new Blockly.FieldImage(this.ADD_IMAGE_DATAURI, this.buttonSize, this.buttonSize, "*", add, false));
            top.appendField(new Blockly.FieldImage(this.REMOVE_IMAGE_DATAURI, this.buttonSize, this.buttonSize, "*", remove, false));
        } else if (this.dim_ == 2) {
            top.appendField(new Blockly.FieldImage(this.ADD_IMAGE_DATAURI, this.buttonSize, this.buttonSize, "*", add, false));
        } else {
            top.appendField(new Blockly.FieldImage(this.REMOVE_IMAGE_DATAURI, this.buttonSize, this.buttonSize, "*", remove, false));
        }
        for (var j = 0; j < this.dim_; j++) {
            this.line[j] = this.appendDummyInput('line_' + j);
            for (var i = 0; i < this.dim_; i++) {
                this.line[j].appendField(new Blockly.FieldTextInput("0"), 'element_' + j + i);
            }
            this.line[j].setAlign(Blockly.ALIGN_CENTRE);
        }
    }
};

// Initialization extensions
Blockly.Extensions.register("numpy_square_matrix_init",
    Blockly.Constants.Numpy.NUMPY_SQUARE_MATRIX_INIT_EXTENSION);

// Mutators
Blockly.Extensions.registerMutator("numpy_square_matrix_mutator",
    Blockly.Constants.Numpy.NUMPY_SQUARE_MATRIX_MUTATOR_MIXIN);