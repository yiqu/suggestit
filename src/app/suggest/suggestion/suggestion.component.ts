import { Component, OnInit } from '@angular/core';
import { Word } from '../../shared/models/word.model';

/**
 * Suggestion component, where word chips are shown
 * 
 */
@Component({
  moduleId: module.id,
  selector: 'suggestion',
  templateUrl: 'suggestion.component.html',
  styleUrls: ['./suggestion.component.css'],
})
export class SuggestionComponent implements OnInit {
  // Words extracted from user input
  allWords: Array<Word> = [];

  constructor() {
    for (let i=1; i<6; i++) {
      let aWord = new Word("word"+i, i);
      this.allWords.push(aWord);
    }
    console.log(JSON.stringify(this.allWords));
  }

  ngOnInit() { }
}