import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

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


  constructor() {}

  ngOnInit() {}

  userInputChange() {
    console.log(this.userInput);
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