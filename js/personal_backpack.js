/**
 * @license
 * Copyright 2021 Taiwan (ChungYi Fu)
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @fileoverview My Backpack.
 * @author https://www.facebook.com/francefu/
 * @author Sébastien Canet scanet@libreduc.cc
 * @Update 5/5/2022
 */

'use strict';

class MyBackpack {

    constructor() {

        Blockly.myBackpack = {};
        Blockly.myBackpack.Blocks = [];

        Blockly.myBackpack.flyoutCategory = function() {
            var c = [];
            let b = Blockly.myBackpack.Blocks;
            for (var i = 1; i < b.length; i++) {
                c.push(Blockly.Xml.textToDom(b[i]));
            }
            return c;
        };

        Blockly.myBackpack.flyoutCategory && (Blockly.getMainWorkspace().registerToolboxCategoryCallback('MYBACKPACK', Blockly.myBackpack.flyoutCategory));

        function populateBackpack() {
            let contents = [{
                "kind": "button",
                "type": "backpack_useless_block"
            }];

            Blockly.myBackpack.Blocks.push(contents);
            let block = Blockly.utils.xml.createElement('button');
            block.setAttribute('kind', 'button');
            block.setAttribute('type', 'emptyBackpack');
            block.setAttribute('text', MSG["MYBACKPACK_REMOVE_ALL"]);
            block.setAttribute('callbackKey', 'removeAllMyBackpack');
            let b = Blockly.Xml.domToText(block);
            Blockly.myBackpack.Blocks.push(b);
            Code.mainWorkspace.registerButtonCallback('removeAllMyBackpack', emptyBackpack);

            block = Blockly.utils.xml.createElement('button');
            block.setAttribute('kind', 'button');
            block.setAttribute('type', 'importToMyBackpack');
            block.setAttribute('text', MSG["MYBACKPACK_IMPORT_FILE"]);
            block.setAttribute('callbackKey', 'importToMyBackpack');
            b = Blockly.Xml.domToText(block);
            Blockly.myBackpack.Blocks.push(b);
            Code.mainWorkspace.registerButtonCallback('importToMyBackpack', fileImportToMyBackpack);

            block = Blockly.utils.xml.createElement('button');
            block.setAttribute('kind', 'button');
            block.setAttribute('type', 'exportFromMyBackpack');
            block.setAttribute('text', MSG["MYBACKPACK_MYBACKPACK_EXPORT_FILE"]);
            block.setAttribute('callbackKey', 'exportFromMyBackpack');
            b = Blockly.Xml.domToText(block);
            Blockly.myBackpack.Blocks.push(b);
            Code.mainWorkspace.registerButtonCallback('exportFromMyBackpack', fileExportFromBackpack);
        }
        populateBackpack();

        function registerCopyToMyBackpack() {
            if (Blockly.ContextMenuRegistry.registry.getItem('copy_to_MyBackpack')) {
                return;
            }
            const copyToMyBackpack = {
                displayText: function() {
                    return MSG["MYBACKPACK_IMPORT_BLOCK"];
                },
                preconditionFn: function(a) {
                    var d = Blockly.Xml.blockToDom(a.block, true);
                    var b = Blockly.Xml.domToText(d).replace(/(?:\r\n|\r|\n|\t)/g, "").replace(/\"false\"/g, "\"0\"").replace(/\"true\"/g, "\"1\"");
                    if (Blockly.myBackpack.Blocks) {
                        var n = Blockly.myBackpack.Blocks;
                        for (const element of n) {
                            if (element == b)
                                return 'hidden';
                        }
                    }
                    return 'enabled';
                },
                callback: function(a) {
                    var d = Blockly.Xml.blockToDom(a.block, true);
                    var b = Blockly.Xml.domToText(d).replace(/(?:\r\n|\r|\n|\t)/g, "").replace(/\"false\"/g, "\"0\"").replace(/\"true\"/g, "\"1\"");
                    Blockly.myBackpack.Blocks.push(b);

                    var t = Blockly.getMainWorkspace();
                    if (t.toolbox_.getSelectedItem()) {
                        if (t.toolbox_.getSelectedItem().flyoutItems_ == "MYBACKPACK") {
                            var c = Blockly.myBackpack.flyoutCategory();
                            t.getFlyout().hide(c);
                            t.getFlyout().show(c);
                        }
                    }
                },
                scopeType: Blockly.ContextMenuRegistry.ScopeType.BLOCK,
                id: 'copy_to_MyBackpack',
                weight: 201,
            };
            Blockly.ContextMenuRegistry.registry.register(copyToMyBackpack);
        }
        registerCopyToMyBackpack();

        function registerRemoveFromMyBackpack() {
            if (Blockly.ContextMenuRegistry.registry.getItem('remove_from_MyBackpack')) {
                return;
            }
            const removeFromMyBackpack = {
                displayText: function() {
                    return MSG["MYBACKPACK_REMOVE"];
                },
                preconditionFn: function(a) {
                    var d = Blockly.Xml.blockToDom(a.block, true);
                    var b = Blockly.Xml.domToText(d).replace(/(?:\r\n|\r|\n|\t)/g, "").replace(/\"false\"/g, "\"0\"").replace(/\"true\"/g, "\"1\"");
                    if (Blockly.myBackpack.Blocks) {
                        var n = Blockly.myBackpack.Blocks;
                        for (let i = 0; i < n.length; i++) {
                            if (n[i] == b)
                                return 'enabled';
                        }
                    }
                    return 'hidden';
                },
                callback: function(a) {
                    var d = Blockly.Xml.blockToDom(a.block, true);
                    var b = Blockly.Xml.domToText(d).replace(/(?:\r\n|\r|\n|\t)/g, "").replace(/\"false\"/g, "\"0\"").replace(/\"true\"/g, "\"1\"");
                    if (Blockly.myBackpack.Blocks) {
                        var i = Blockly.myBackpack.Blocks.indexOf(b);
                        if (i != -1) {
                            Blockly.myBackpack.Blocks.splice(i, 1);
                        }
                    }
                    if (Blockly.getMainWorkspace().toolbox_.getSelectedItem()) {
                        if (Blockly.getMainWorkspace().toolbox_.getSelectedItem().flyoutItems_ == "MYBACKPACK") {
                            Blockly.getMainWorkspace().getFlyout().hide(Blockly.myBackpack.flyoutCategory());
                            Blockly.getMainWorkspace().getFlyout().show(Blockly.myBackpack.flyoutCategory());
                        }
                    }
                },
                scopeType: Blockly.ContextMenuRegistry.ScopeType.BLOCK,
                id: 'remove_from_MyBackpack',
                weight: 202,
            };
            Blockly.ContextMenuRegistry.registry.register(removeFromMyBackpack);
        }
        registerRemoveFromMyBackpack();

        function registerWorkspaceImportMyBackpack() {
            if (Blockly.ContextMenuRegistry.registry.getItem('workspace_import_MyBackpack')) {
                return;
            }
            const workspaceImportMyBackpack = {
                displayText: function() {
                    return MSG["MYBACKPACK_IMPORT_WORKSPACE"];
                },
                preconditionFn: function(a) {
                    return 'enabled';
                },
                callback: function(a) {
                    Blockly.confirm(MSG["MYBACKPACK_IMPORT_WORKSPACE_TITLE"], function(confirm) {
                        if (confirm) {
                            Blockly.myBackpack.Blocks = [];
                            populateBackpack();
                            var t = Blockly.getMainWorkspace().getTopBlocks();

                            for (let i = 0; i < t.length; i++) {
                                var d = Blockly.Xml.blockToDom(t[i], true);
                                var b = Blockly.Xml.domToText(d).replace(/(?:\r\n|\r|\n|\t)/g, "").replace(/\"false\"/g, "\"0\"").replace(/\"true\"/g, "\"1\"");
                                var n = Blockly.myBackpack.Blocks;
                                var exist = false;
                                for (var j = 0; j < n.length; j++) {
                                    if (n[j] == b) {
                                        exist = true;
                                    }
                                }
                                if (exist == false) Blockly.myBackpack.Blocks.push(b);
                            }
                        }
                    })
                },
                scopeType: Blockly.ContextMenuRegistry.ScopeType.WORKSPACE,
                id: 'workspace_import_MyBackpack',
                weight: 205,
            };
            Blockly.ContextMenuRegistry.registry.register(workspaceImportMyBackpack);
        }
        registerWorkspaceImportMyBackpack();

        /**
         * It adds a new option to the context menu of the workspace, which allows you to export the
         * workspace as a file
         * @returns the XML code of the workspace.
         */
        function registerWorkspaceExportFile() {
            if (Blockly.ContextMenuRegistry.registry.getItem('workspace_export_file')) {
                return;
            }
            const workspaceExportFile = {
                displayText: function() {
                    return MSG["MYBACKPACK_WORKSPACE_EXPORT_FILE"];
                },
                preconditionFn: function(a) {
                    return 'enabled';
                },
                callback: function(a) {
                    var xml = '<xml xmlns="https://developers.google.com/blockly/xml">';
                    var t = Blockly.getMainWorkspace().getTopBlocks();
                    for (let i = 0; i < t.length; i++) {
                        var d = Blockly.Xml.blockToDom(t[i], true);
                        var b = Blockly.Xml.domToText(d).replace(/(?:\r\n|\r|\n|\t)/g, "").replace(/\"false\"/g, "\"0\"").replace(/\"true\"/g, "\"1\"");
                        xml += b;
                    }
                    xml += '</xml>';

                    var link = document.createElement('a');
                    link.download = "backpack.S4Ebp";
                    link.href = "data:application/octet-stream;utf-8," + encodeURIComponent(xml);
                    document.body.appendChild(link);
                    link.click();
                    link.remove();
                },
                scopeType: Blockly.ContextMenuRegistry.ScopeType.WORKSPACE,
                id: 'workspace_export_file',
                weight: 206,
            };
            Blockly.ContextMenuRegistry.registry.register(workspaceExportFile);
        }
        registerWorkspaceExportFile();


        /**
         * It asks the user if they want to remove all the blocks from their backpack, and if they say yes, it
         * removes all the blocks from their backpack
         */
        function emptyBackpack() {
            Blockly.confirm(MSG["MYBACKPACK_REMOVE_ALL_TITLE"], function(confirm) {
                if (confirm) {
                    Blockly.myBackpack.Blocks = [];
                    populateBackpack();
                    if (Code.mainWorkspace.toolbox_.getSelectedItem()) {
                        if (Code.mainWorkspace.toolbox_.getSelectedItem().flyoutItems_ == "MYBACKPACK") {
                            Code.mainWorkspace.getFlyout().hide(Blockly.myBackpack.flyoutCategory());
                            Code.mainWorkspace.getFlyout().show(Blockly.myBackpack.flyoutCategory());
                        }
                    }
                }
            });
        }

        /**
         * It creates an input element, sets its type to file, sets its id to
         * fileImportBlocksToMyBackpack, sets its style to display:none, sets its accept attribute to
         * .S4Ebp, and sets its onchange attribute to a function that reads the file, and adds the
         * blocks to the backpack.
         */
        function fileImportToMyBackpack() {
            var input = document.createElement('input');
            input.type = "file";
            input.id = "fileImportBlocksToMyBackpack";
            input.style.display = "none";
            input.accept = ".S4Ebp";
            input.onchange = function(element) {
                try {
                    var file = this.files[0];
                    if (file) {
                        var fr = new FileReader();
                        fr.onload = function(event) {
                            Blockly.myBackpack.Blocks = [];
                            populateBackpack();
                            var blocks = Blockly.Xml.textToDom(event.target.result);
                            var child = blocks.childNodes;
                            for (let i = 0; i < child.length; i++) {
                                if (child[i].nodeName != "#text") {
                                    var b = Blockly.Xml.domToText(child[i]).replace(/(?:\r\n|\r|\n|\t)/g, "").replace(/\"false\"/g, "\"0\"").replace(/\"true\"/g, "\"1\"");
                                    var n = Blockly.myBackpack.Blocks;
                                    var exist = false;
                                    for (var j = 0; j < n.length; j++) {
                                        if (n[j] == b) {
                                            exist = true;
                                        }
                                    }
                                    if (exist == false) Blockly.myBackpack.Blocks.push(b);
                                }
                            }
                            Code.mainWorkspace.getFlyout().hide(Blockly.myBackpack.flyoutCategory());
                            Code.mainWorkspace.getFlyout().show(Blockly.myBackpack.flyoutCategory());
                        };
                        fr.readAsText(file);
                    }
                } catch (e) {
                    alert(e);
                }
            }
            document.body.appendChild(input);
            setTimeout(function() {
                input.click();
            }, 500);
        }

        /**
         * It creates a link to a file that contains the XML of the blocks in the backpack
         */
        function fileExportFromBackpack() {
            var xml = '<xml xmlns="https://developers.google.com/blockly/xml">';
            var b = Blockly.myBackpack.Blocks;
            for (var i = 0; i < b.length; i++) {
                xml += b[i];
            }
            xml += '</xml>';

            var link = document.createElement('a');
            link.download = "backpack.S4Ebp";
            link.href = "data:application/octet-stream;utf-8," + encodeURIComponent(xml);
            document.body.appendChild(link);
            link.click();
            link.remove();
        }
    }
}