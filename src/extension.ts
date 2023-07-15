import * as vscode from 'vscode';

function collapseAndRevealCurrent(): any {
  // Collapse all folders
  vscode.commands.executeCommand('workbench.files.action.collapseExplorerFolders');

  // reveal active file
  vscode.commands.executeCommand('workbench.files.action.showActiveFileInExplorer');
}

export function activate(context: vscode.ExtensionContext) {

  vscode.window.onDidChangeActiveTextEditor(collapseAndRevealCurrent);

  // Register the command
  let collapseFoldersExceptCurrent = vscode.commands.registerCommand('onlyrevealcurrentfile.collapseAndRevealCurrent', () => {
    collapseAndRevealCurrent();

  });

  context.subscriptions.push(collapseFoldersExceptCurrent);
}
