import { NgModule } from '@angular/core';
import { MatExpansionModule } from '@angular/material';
import { MatIconModule } from '@angular/material';
import { MatButtonModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { TrainingComponent } from './training.component';
import { SuggestInputModule } from '../suggest-area/suggest.module';
import { TrainingStatusModule } from '../../shared/training-status/status.module';

@NgModule({
  imports: [
    FormsModule, //enables [(ngModel)] 2 way binding
    MatExpansionModule,
    MatIconModule,
    MatButtonModule,
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
