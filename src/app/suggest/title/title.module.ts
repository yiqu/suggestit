import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { TitleComponent } from './title.component';

@NgModule({
  imports: [
    RouterModule,
    CommonModule
  ],

  exports: [
    TitleComponent
  ],

  declarations: [
    TitleComponent
  ],

  providers: [],
})
export class TitleModule { }
