import { Component, OnInit } from '@angular/core';
import { Word } from '../../shared/models/word.model';

/**
 * Suggestion component, where word chips are shown
 * 
 */
@Component({
  moduleId: module.id,
  selector: 'training-area',
  templateUrl: 'training.component.html',
  styleUrls: ['./training.component.css'],
})
export class TrainingComponent implements OnInit {

  step: number = 0;
  trainingText: string = "";
  trainingTextAreaPlaceholder: string ="Type into the text area below to get started...";
  trainingStatus: number;
  trainingButtonText: string = "Next";
  
  ngOnInit() {}

  openPanel(step: number) {
    this.step = step;
  }

  trainingTextChange() {
    console.log(this.trainingText);
  }

  nextStep() {
    this.step ++;
  }

  onSetStepRequest(step: number) {
    this.step = step;
  }

  onStatusChange(status: number) {
    this.trainingStatus = status;
    switch (this.trainingStatus) {
      case -1:
        this.trainingButtonText = "Next";
        break;
      case 0:
        this.trainingButtonText = "Training...";
        break;
      case 1:
        this.trainingButtonText = "Next";
        break;
    }
  }

 
}