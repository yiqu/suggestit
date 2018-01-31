import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { SampleButton } from '../models/button-sample.model';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/map'
import { Word } from '../models/word.model';
import { SamplePayload } from '../models/sample-text.model';

@Injectable()
export class CalculateService {


  /**
   * Creates a new WordService with the injected Http.
   * @param {Http} http - The injected Http.
   * @constructor
   */
  constructor(private http: Http) {}


  createSampleButtons(): SampleButton[] {
    let sampleButtonList: SampleButton[] = [
      {
        displayName: "Training Example 1",
        selection: "1",
        buttonColor: "accent"
      }
    ];
    return sampleButtonList;
  }


  getTrainingExample(selection: string): Observable<SamplePayload> {
    let url = "assets/training" + selection + ".json";
    return this.http.get(url).map(
      (res) => {
        return <SamplePayload>res.json();
      });
  }

}