import { NgModule } from '@angular/core';

import { SuggestComponent } from './suggest.component';
import { TrainingInputModule } from './training-area/training.module';
import { CalculateService } from '../shared/service/calculate.service';
import { MaterialModule } from '../shared/common-modules/material.module'


/**
 * This class represents the entire Suggest component.
 */
@NgModule({
  declarations: [
    SuggestComponent
  ],

  imports: [
    TrainingInputModule,
    MaterialModule
  ],

  exports:[
    SuggestComponent
  ],

  providers: [
    CalculateService
  ]
})
export class SuggestModule {}
