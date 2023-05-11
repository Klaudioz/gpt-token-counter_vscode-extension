import * as vscode from 'vscode';

export default class SelectionManager {
  public getSelectedText(): string {
    const editor = vscode.window.activeTextEditor;
    if (!editor) {
      return '';
    }

    const document = editor.document;
    const selection = editor.selection;

    return document.getText(selection);
  }

  public async showTokenCountForSelection(tokenCount: number): Promise<void> {
    await vscode.window.showInformationMessage(`Selected tokens: ${tokenCount}`);
  }
}
