import { NgModule } from '@angular/core';

import { SuggestComponent } from './suggest.component';
import { TrainingInputModule } from './training-area/training.module';
import { CalculateService } from '../shared/service/calculate.service';
import { SnackBarService } from '../shared/service/toast.service';


/**
 * This class represents the entire Suggest component.
 */
@NgModule({
  declarations: [
    SuggestComponent
  ],

  imports: [
    TrainingInputModule
  ],

  exports:[
    SuggestComponent
  ],

  providers: [
    CalculateService,
    SnackBarService
  ]
})
export class SuggestModule {}
