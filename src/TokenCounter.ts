import { encoding_for_model } from "@dqbd/tiktoken";

export class TokenCounter {
  private _tokenizer;

  constructor() {
    this._tokenizer = encoding_for_model("text-davinci-003");
  }

  countTokens(input: string): number {
    const encodedTokens = this._tokenizer.encode(input);
    const tokensCount = encodedTokens.length;
    this._tokenizer.free();
    this._tokenizer = encoding_for_model("text-davinci-003"); // Renew the tokenizer
    return tokensCount;
  }
}
