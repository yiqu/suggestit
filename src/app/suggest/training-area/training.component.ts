import { Component, OnInit } from '@angular/core';
import { Word } from '../../shared/models/word.model';
import { CalculateService } from '../../shared/service/calculate.service';
import { SampleButton } from '../../shared/models/button-sample.model';
import { SamplePayload } from '../../shared/models/sample-text.model';
import { MatSelectChange } from '@angular/material/select';

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
  trainingTextAreaPlaceholder: string ="Type into the text area below to get started..." +
  " Or use one of training examples we have provided.";
  trainingStatus: number;
  trainingButtonText: string = "Next";
  trainingButtons: SampleButton[];
  
  constructor(private cs: CalculateService ) {
    this.trainingButtons = this.cs.createSampleButtons();
  }

  ngOnInit() {}

  openPanel(step: number) {
    this.step = step;
  }

  trainingTextChange() {
    this.cs.sendForProcess(this.trainingText);
  }

  onNextStep() {
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

  loadExampleTraining(selection: string) {
    this.cs.getTrainingExample(selection).subscribe(
      (res: SamplePayload) => {
        this.trainingText = res.data;
      },
      error => {},
      () => {
        this.cs.sendForProcess(this.trainingText);
      }
    )
  }

  onTrainingExampleSelect(value: MatSelectChange) {
    this.loadExampleTraining(value.value);
  }

 
}