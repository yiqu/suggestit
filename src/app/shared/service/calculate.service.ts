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

  public wordSub: Observable<Word[]> = new Observable<Word[]>();
  private wordArray: string[];

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
    let parsedWords: string[] = this.extractWords(rawText);
    let words: Array<Word> = [];
    for (let parsedWord of (parsedWords ? parsedWords : [])) {
      // word already exist
      let currentWord: Word = _.find(words,  _.matchesProperty('word', parsedWord));
      if (currentWord) {
        currentWord.occurrence += 1;
      } else {
        // word does not exist, add to list
        let word = this.createWord(parsedWord);
        words.push(word);
      }
      
     
    }

    console.log(JSON.stringify(words), words.length, parsedWords.length);

    //console.log(_.find(words,  _.matchesProperty('word', "year")));

    return Observable.of(words);
  }

  wordExist(current: string, word: Word) {
    return word.word === current;
  }

  createWord(rawWord: string) {
    return new Word(rawWord);
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
    return input.toLowerCase().match(/\b[^\d^_\W]+\b/g);
  }

}