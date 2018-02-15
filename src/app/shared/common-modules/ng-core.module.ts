import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

/**
 * Exports core ng modules
 */
@NgModule({
  imports: [
    FormsModule, // enables ngFor
    CommonModule // enable 2 way binding
  ],
  exports: [
    FormsModule,
    CommonModule
  ],
})
export class NgCoreModule { }
