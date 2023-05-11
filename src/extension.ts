import * as vscode from 'vscode';
import { StatusBarManager } from './StatusBarManager';
import { TokenCounter } from './TokenCounter';

export function activate(context: vscode.ExtensionContext) {
  console.log('Congratulations, your extension "GPT-3 Token Counter" is now active!');

  const tokenCounter = new TokenCounter();
  const statusBarManager = new StatusBarManager(tokenCounter);

  vscode.window.onDidChangeActiveTextEditor(editor => statusBarManager.updateStatusBar(editor));
  vscode.window.onDidChangeTextEditorSelection(event => statusBarManager.updateStatusBar(event.textEditor));

  statusBarManager.updateStatusBar(vscode.window.activeTextEditor);
}

export function deactivate() {}
