import * as vscode from 'vscode';
import { TokenCounter } from './TokenCounter';

export class StatusBarManager {
  private _statusBarItem: vscode.StatusBarItem;
  private _tokenCounter: TokenCounter;

  constructor(tokenCounter: TokenCounter) {
    this._statusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right, 100);
    this._tokenCounter = tokenCounter;
    this._statusBarItem.show();
  }

  updateStatusBar(text?: vscode.TextEditor) {
    if (!text) {
      this._statusBarItem.hide();
      return;
    }

    const docContent = text.document.getText();
    const totalTokens = this._tokenCounter.countTokens(docContent);
    const selectedContent = text.document.getText(text.selection);
    const selectedTokens = this._tokenCounter.countTokens(selectedContent);

    this._statusBarItem.text = `Tokens: ${totalTokens}, Selected: ${selectedTokens}`;
    this._statusBarItem.show();
  }
}
