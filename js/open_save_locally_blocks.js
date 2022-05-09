/*
Last Update Time : 18/2/2022 18:00 (Taiwan Standard Time)
Author: ChungYi Fu, Taiwan
https://github.com/fustyles
https://www.facebook.com/francefu/
*/

function registerWorkspaceBlockExportFile() {
    if (Blockly.ContextMenuRegistry.registry.getItem('workspace_block_export_file')) {
        return;
    }
    const workspaceExportFile = {
        displayText: function() {
            return MSG["INSERTBLOCKS_WORKSPACE_BLOCK_EXPORT"];
        },
        preconditionFn: function(a) {
            return 'enabled';
        },
        callback: function(a) {
            var dom = Blockly.Xml.blockToDom(a.block, true);
            var xml = Blockly.Xml.domToText(dom).replace(/(?:\r\n|\r|\n|\t)/g, "");

            var link = document.createElement('a');
            link.download = "block.S4Eblock";
            link.href = "data:application/octet-stream;utf-8," + encodeURIComponent(xml);
            document.body.appendChild(link);
            link.click();
            link.remove();
        },
        scopeType: Blockly.ContextMenuRegistry.ScopeType.BLOCK,
        id: 'workspace_block_export_file',
        weight: 209,
    };
    Blockly.ContextMenuRegistry.registry.register(workspaceExportFile);
}

registerWorkspaceBlockExportFile();


function registerWorkspaceInsertBlockFromFile() {
    if (Blockly.ContextMenuRegistry.registry.getItem('workspace_insert_block')) {
        return;
    }
    const fileInsertBlocks = {
        displayText: function() {
            return MSG["INSERTBLOCKS_WORKSPACE_BLOCK_INSERT"];
        },
        preconditionFn: function(a) {
            return 'enabled';
        },
        callback: function(a) {
            var e = document.getElementById("workspace_insert_block");
            if (e) {
                e.click();
                return;
            }

            var input = document.createElement('input');
            input.type = "file";
            input.id = "fileInsertBlocks";
            input.style.display = "none";
            input.accept = ".S4Eblock";
            input.onchange = function(element) {
                try {
                    var file = this.files[0];
                    if (file) {
                        var fr = new FileReader();
                        fr.onload = function(event) {
                            var dom = Blockly.Xml.textToDom(event.target.result);
                            block = Blockly.Xml.textToDom('<xml>' + Blockly.Xml.domToText(dom).replace(/(?:\r\n|\r|\n|\t)/g, "") + '</xml>');
                            var id = Blockly.Xml.appendDomToWorkspace(block, Blockly.getMainWorkspace());
                            block = Blockly.getMainWorkspace().getBlockById(id);
                            block.initSvg();
                            a.workspace.render();
                            block.moveBy(100, 20);
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
        },
        scopeType: Blockly.ContextMenuRegistry.ScopeType.WORKSPACE,
        id: 'workspace_insert_block',
        weight: 210,
    };
    Blockly.ContextMenuRegistry.registry.register(fileInsertBlocks);
}

registerWorkspaceInsertBlockFromFile();