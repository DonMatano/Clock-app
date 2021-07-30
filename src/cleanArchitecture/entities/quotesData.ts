export class QuotesData {
  #quote = '';
  #author = '';

  get quote(): string {
    return this.#quote;
  }
  set quote(newQuote: string) {
    if (!newQuote)
      throw new Error(`Can't set empty string as newQuote. Gotten ${newQuote}`);
    this.#quote = newQuote;
  }

  get author(): string {
    return this.#author;
  }

  set author(newAuthor: string) {
    if (!newAuthor) newAuthor = 'Unknown';
    this.#author = newAuthor;
  }
}
