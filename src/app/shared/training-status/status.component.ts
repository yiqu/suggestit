import { Component, Input, Output, OnChanges, 
  SimpleChange, EventEmitter } from '@angular/core';

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

  @Input()
  timeOut: number;

  completed: boolean;
  timer: any;
  matIconId: string = "";
  helpText: string = "";
  iconClass: string = "";

  constructor() {
  }

  ngOnChanges(changes: {[payload: string]: SimpleChange}) {
    clearTimeout(this.timer);
    if (changes.payload.firstChange || changes.payload.currentValue.trim() === "") {
      this.needTraining();
    } else {
      this.inTraining();
      this.timer = setTimeout(() => {
        this.doneTraining();
      }, this.timeOut);
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
    this.helpText = "training...";
    this.iconClass = "training-icon training";
    this.status.emit(0);
  }

  doneTraining(): void {
    this.matIconId = "check_circle";
    this.helpText = "training completed";
    this.iconClass = "training-icon done";
    this.status.emit(1);
  }



}