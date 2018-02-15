import { NgModule } from '@angular/core';
import { NgCoreModule } from '../../shared/common-modules/ng-core.module';
import { MaterialModule } from '../../shared/common-modules/material.module';

import { TrainingComponent } from './training.component';
import { SuggestInputModule } from '../suggest-area/suggest.module';
import { TrainingStatusModule } from '../../shared/training-status/status.module';

@NgModule({
  imports: [
    MaterialModule,
    NgCoreModule,
    SuggestInputModule,
    TrainingStatusModule
  ],

  exports: [
    TrainingComponent
  ],

  declarations: [
    TrainingComponent
  ],

  providers: [],
})
export class TrainingInputModule { }
