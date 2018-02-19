export class Word {
  word: string;
  occurrence: number = 0;
  weight: number = 0;
  state: string = "";

  constructor(word: string, occurrence?: number, weight?: number, state?: string) {
    this.word = word;
    this.occurrence = occurrence;
    this.weight = weight;
    this.state = state;
  }
}
