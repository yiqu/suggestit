import { NgModule } from '@angular/core';

import { SuggestComponent } from './suggest.component';
import { TrainingInputModule } from './training-area/training.module';


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

  providers: []
})
export class SuggestModule {}
