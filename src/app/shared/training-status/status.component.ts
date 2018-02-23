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

  constructor(private cs: CalculateService) {}

  ngOnChanges(changes: {[payload: string]: SimpleChange}) {
    if (changes.payload.firstChange || changes.payload.currentValue.trim() === "") {
      this.needTraining();
    } else {
      this.processing();
      this.cs.sendForProcess(changes.payload.currentValue).subscribe(
        (res: Word[]) => {
          //console.log(res);
        },
        error => {
        },
        () => {
          this.doneTraining();
        }
      );
      // call service to calculate words details
    }
  }

  needTraining(): void {
    this.matIconId = "info";
    this.helpText = "training required";
    this.iconClass = "training-icon need";
    this.status.emit(-1);
  }

  inTraining(): void {
    this.matIconId = "mode_edit";
    this.helpText = "typing...";
    this.iconClass = "training-icon training";
    this.status.emit(0);
  }

  doneTraining(): void {
    this.matIconId = "check_circle";
    this.helpText = "training completed";
    this.iconClass = "training-icon done";
    this.status.emit(1);
  }

  processing(): void {
    this.matIconId = "hourglass_full";
    this.helpText = "working...";
    this.iconClass = "training-icon working";
    this.status.emit(2);
  }

  loadingExample(): void {
    this.matIconId = "cached";
    this.helpText = "loading example...";
    this.iconClass = "training-icon training";
    this.status.emit(3);
  }



}