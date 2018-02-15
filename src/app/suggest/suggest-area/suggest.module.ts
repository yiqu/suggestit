import { NgModule } from '@angular/core';
import { MaterialModule } from '../../shared/common-modules/material.module';
import { NgCoreModule } from '../../shared/common-modules/ng-core.module';
import { SuggestInputComponent } from './suggest.component';

@NgModule({
  imports: [
    MaterialModule,
    NgCoreModule
  ],

  exports: [
    SuggestInputComponent
  ],

  declarations: [
    SuggestInputComponent
  ],

  providers: [],
})
export class SuggestInputModule { }
