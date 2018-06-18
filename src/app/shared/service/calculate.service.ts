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

    console.log(JSON.stringify(this.wordArray), this.wordArray.length, this.parsedWordArray.length);
    //console.log(_.find(words,  _.matchesProperty('word', "year")));
    // create obj map with starting letter as key, array of words starting with that letter as value
    return Observable.of(this.wordArray);
  }

  public getOccuredWords(userInput: string) {
    let wordList: Word[] = _.filter(this.wordArray, (word: Word)=> {
      return word.word.indexOf(userInput) > -1;
    })
    console.log(wordList)
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