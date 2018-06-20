import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { CalculateService } from '../../shared/service/calculate.service';
import { Word } from '../../shared/models/word.model';
import { MatChipSelectionChange } from "@angular/material/chips"

@Component({
  selector: 'suggest-area',
  templateUrl: './suggest.component.html',
  styleUrls: ['./suggest.component.css']
})

export class SuggestInputComponent implements OnInit {
  @Input()
  step: number;

  @Input()
  disabled: boolean;

  @Output()
  setStepRequest: EventEmitter<number> = new EventEmitter<number>();

  @ViewChild('textareaInput') 
  userInputTextArea: ElementRef;

  userInput: string = "";
  userInputPlaceHolder: string = "Start typing...";
  typeDisabled: boolean = true;
  wordList: Word[] = [];
  originalLength: number = 0;
  cutOffLabelText: string = "(showing top 5 predictions)"

  constructor(private cs: CalculateService) {}

  ngOnInit() {}

  /**
   * Find the word from wordList from cal service. If space(s) is entered, get the 
   * following word after it.
   */
  userInputChange() {
    console.log("first typed "+this.userInput);
    if (this.userInput.slice(-1) === " ") {
      this.resetResult();
    } else if(this.userInput.trim() === "") {
      this.resetResult();
    } else {
      this.wordList = this.cs.getOccuredWords(this.userInput.match(/\S*$/)[0]);
      this.originalLength = this.wordList.length;
      this.extractTopFiveResults();
    }
  }

  resetResult() {
    this.wordList.length = 0;
    this.originalLength = 0;
  }

  extractTopFiveResults() {
    this.cutOffLabelText = "(showing top 5 predictions of " + this.originalLength + ")"; 
    this.wordList = this.wordList.slice(0, 5);
  }

  onChipSelect(sel) {
    console.log(sel)
  }

  previousStep() {
    this.step--;
    this.setStepRequest.emit(this.step);
  }

  openPanel(index: number) {
    this.step = index;
    this.setStepRequest.emit(this.step);
    // take into account view fully loaded
    setTimeout(()=> {
      this.userInputTextArea.nativeElement.focus()
    },100);
    // re-calc to reflect any changes user might have made in training area
    this.userInputChange();
  }
}