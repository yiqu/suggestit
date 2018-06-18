import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CalculateService } from '../../shared/service/calculate.service';
import { Word } from '../../shared/models/word.model';

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

  userInput: string = "";
  userInputPlaceHolder: string = "Start typing...";
  typeDisabled: boolean = true;
  wordList: Word[] = [];


  constructor(private cs: CalculateService) {}

  ngOnInit() {}

  userInputChange() {
    console.log("typed "+this.userInput);
    if (this.userInput.trim() !== "") {
      this.wordList = this.cs.getOccuredWords(this.userInput);
    } else {
      this.wordList.length = 0;
    }
  }

  previousStep() {
    this.step--;
    this.setStepRequest.emit(this.step);
  }

  openPanel(index: number) {
    this.step = index;
    this.setStepRequest.emit(this.step);
  }
}