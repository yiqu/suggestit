import { CommonModule } from "@angular/common"
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material';
import { TrainingStatusComponent } from './status.component';

@NgModule({
  declarations: [
    TrainingStatusComponent
  ],

  imports: [
    MatIconModule,
    CommonModule
  ],

  exports: [
    TrainingStatusComponent
  ],

  providers: [],
})
export class TrainingStatusModule { }
