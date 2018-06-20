export class Word {
  word: string;
  occurrence: number = 0;
  weight: string = "";
  state: string = "";

  constructor(word: string, occurrence?: number, weight?: string, state?: string) {
    this.word = word;
    this.occurrence = occurrence ? occurrence : 1;
    this.weight = weight;
    this.state = state;
  }
}
