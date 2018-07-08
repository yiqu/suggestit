import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { SampleButton } from '../models/button-sample.model';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/map'
import 'rxjs/add/observable/of';
import { Word } from '../models/word.model';
import { SamplePayload } from '../models/sample-text.model';
import { Subject } from 'rxjs/Subject';
import { mapTo, delay } from 'rxjs/operators';
import * as _ from 'lodash';

@Injectable()
export class CalculateService {

  private wordArray: Word[] = [];
  private parsedWordArray: string[] = [];

  /**
   * Creates a new WordService with the injected Http.
   * @param {Http} http - The injected Http.
   * @constructor
   */
  constructor(private http: Http) {
  }


  createSampleButtons(): SampleButton[] {
    let sampleButtonList: SampleButton[] = [
      {
        displayName: "Example 1",
        value: "1",
      },
      {
        displayName: "Example 2",
        value: "2",
      },
      {
        displayName: "Example 3",
        value: "3",
      }
    ];
    return sampleButtonList;
  }


  getTrainingExample(selection: string): Observable<SamplePayload> {
    let url = "assets/training" + selection + ".json";
    return this.http.get(url).map(
      (res) => {
        return <SamplePayload>res.json();
      });
  }


  sendForProcess(rawText: string): Observable<Array<Word>> {
    this.parsedWordArray = this.extractWords(rawText);
    this.wordArray = [];
    for (let parsedWord of (this.parsedWordArray ? this.parsedWordArray : [])) {
      // word already exist
      let currentWord: Word = _.find(this.wordArray,  _.matchesProperty('word', parsedWord));
      if (currentWord) {
        currentWord.occurrence += 1;
      } else {
        // word does not exist, add to list
        let word = this.createWord(parsedWord);
        this.wordArray.push(word);
      }
    }

    //console.log(JSON.stringify(this.wordArray), this.wordArray.length, this.parsedWordArray.length);
    return Observable.of(this.wordArray);
  }

  /**
   * Get the word list based on user's input
   * @param userInput 
   * @returns words calculated words
   */
  public getOccuredWords(userInput: string): Word[] {
    let occurSum: number = 0;
    // filter out words that are typed by user
    let wordList: Word[] = _.filter(this.wordArray, (word: Word)=> {
      if (word.word.indexOf(userInput) === 0) {
        occurSum += word.occurrence;
        return true;
      }
    });
    // set the cofidence level percentage
    wordList.forEach((word: Word) => {
      word.weight = ((word.occurrence / occurSum) * 100).toPrecision(3);
      word.state = "Confidence level for '" + word.word + "' is " + word.weight + "%. This word " + 
      "occured " + (word.occurrence === 1 ? " once." : (word.occurrence + " times."));
    });
    // sort it by occurrence
    wordList = wordList.sort((a: Word, b: Word) => {
      return b.occurrence - a.occurrence;
    });
    return wordList;
  }


  createWord(rawWord: string) {
    return new Word(rawWord);
  }

  public getWordArrayLength(): string {
    let length = this.wordArray.length;
    return length > 0 ? "(" + length + " unique)" : "No words detected.";
  }


  public getParsedWordArrayLength(): string {
    let length = this.parsedWordArray.length;
    return length > 0 ? length + " words " : "";;
  }

  public getWordArray(): Word[] {
    return this.wordArray;
  }


  /**
   * Helper function to parse out rightly formed words.
   * 
   * @param {string} input - user input
   * @returns {Array<string>} - list of words without badly formed words
   */
  extractWords(input: string): Array<string> {
    if (input === "") {
      return [];
    }
    let words = input.toLowerCase().match(/\b[^\d^_\W]+\b/g);
    return words ? words : [];
  }

}