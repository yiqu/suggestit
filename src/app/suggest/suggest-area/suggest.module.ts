import { NgModule } from '@angular/core';
import { MatExpansionModule } from '@angular/material';
import { MatIconModule } from '@angular/material';
import { MatButtonModule } from '@angular/material';
import { FormsModule } from '@angular/forms';

import { SuggestInputComponent } from './suggest.component';

@NgModule({
  imports: [
    FormsModule,
    MatExpansionModule,
    MatIconModule,
    MatButtonModule
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
