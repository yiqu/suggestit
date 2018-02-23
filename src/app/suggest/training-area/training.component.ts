import { Component, OnInit, ViewChild } from '@angular/core';
import { Word } from '../../shared/models/word.model';
import { CalculateService } from '../../shared/service/calculate.service';
import { SnackBarService } from '../../shared/service/toast.service';
import { SampleButton } from '../../shared/models/button-sample.model';
import { SamplePayload } from '../../shared/models/sample-text.model';
import { MatSelectChange } from '@angular/material/select';
import { setTimeout } from 'timers';
import { Subject } from 'rxjs/Subject';
import "rxjs/add/operator/debounceTime";
import "rxjs/add/operator/distinctUntilChanged";
import { TrainingStatusComponent } from '../../shared/training-status/status.component';


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

  @ViewChild('ts') statusComp: TrainingStatusComponent;

  step: number = 0;
  trainingText: string = "";
  trainingTextToSend: string = "";
  trainingTextAreaPlaceholder: string ="Type into the text area below to get started..." +
  " Or use one of training examples we have provided.";
  trainingStatus: number;
  trainingButtonText: string = "Next";
  trainingButtons: SampleButton[];
  trainingExampleSelect: null;
  searchUpdated: Subject<string> = new Subject<string>();


  constructor(private cs: CalculateService, private sbs: SnackBarService) {
    this.trainingButtons = this.cs.createSampleButtons();
    this.searchUpdated.asObservable()
      .debounceTime(500)
      .distinctUntilChanged()
      .subscribe(res => {
        this.trainingTextToSend = this.trainingText;
      },
      error=> {},
      () => {}
    );
  }

  ngOnInit() {}


  openPanel(step: number) {
    this.step = step;
  }


  trainingTextChange() {
    // set status to training
    this.statusComp.inTraining();
    // reset the example selection
    if (this.trainingText.trim() === "") {
      this.trainingExampleSelect = null;
    }
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
      case 2:
        this.trainingButtonText = "Working...";
        break;
      case 3:
        this.trainingButtonText = "Loading...";
        break;
    }
  }


  loadExampleTraining(selection: string) {
    this.statusComp.loadingExample();
    this.cs.getTrainingExample(selection).subscribe(
      (res: SamplePayload) => {
        this.trainingText = res.data;
      },
      error => {},
      () => {
        this.trainingTextToSend = this.trainingText;
      }
    );
  }


  onTrainingExampleSelect(value: MatSelectChange) {
    this.sbs.openSnackBar();
    this.loadExampleTraining(value.value);
  }
  
}