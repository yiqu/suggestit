import { Component, Input, Output, OnChanges, SimpleChange, 
  EventEmitter } from '@angular/core';
import { CalculateService } from '../service/calculate.service';
import { Word } from '../models/word.model';

@Component({
  selector: 'training-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css'],
})

export class TrainingStatusComponent implements OnChanges {
  @Input()
  payload: string;

  @Output()
  status: EventEmitter<number> = new EventEmitter<number>();;

  completed: boolean;
  matIconId: string = "";
  helpText: string = "";
  iconClass: string = "";
  wordInfo: string = "";

  constructor(private cs: CalculateService) {}

  ngOnChanges(changes: {[payload: string]: SimpleChange}) {
    if (changes.payload.firstChange || changes.payload.currentValue.trim() === "") {
      this.needTraining();
    } else {
      this.processing();
      this.cs.sendForProcess(changes.payload.currentValue).subscribe(
        (res: Word[]) => {
        },
        error => {
        },
        () => {
          this.doneTraining();
          this.wordInfo = this.cs.getParsedWordArrayLength() + this.cs.getWordArrayLength();
        }
      );
      // call service to calculate words details
    }
  }

  needTraining(): void {
    this.wordInfo = "";
    this.matIconId = "info";
    this.helpText = "training required";
    this.iconClass = "training-icon need";
    this.status.emit(-1);
  }

  inTraining(): void {
    this.wordInfo = "";
    this.matIconId = "mode_edit";
    this.helpText = "typing...";
    this.iconClass = "training-icon training";
    this.status.emit(0);
  }

  doneTraining(): void {
    this.matIconId = "check_circle";
    this.helpText = "";
    this.iconClass = "training-icon done";
    this.status.emit(1);
  }

  processing(): void {
    this.wordInfo = "";
    this.matIconId = "hourglass_full";
    this.helpText = "working...";
    this.iconClass = "training-icon working";
    this.status.emit(2);
  }

  loadingExample(): void {
    this.wordInfo = "";
    this.matIconId = "cached";
    this.helpText = "loading example...";
    this.iconClass = "training-icon training";
    this.status.emit(3);
  }



}