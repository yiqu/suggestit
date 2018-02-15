import { NgModule } from '@angular/core';
import { MatExpansionModule } from '@angular/material';
import { MatIconModule } from '@angular/material';
import { MatButtonModule } from '@angular/material';
import { MatSelectModule } from '@angular/material/select';


/**
 * Exports common material modules
 */
@NgModule({
  imports: [
    MatExpansionModule,
    MatIconModule,
    MatButtonModule,
    MatSelectModule,
  ],

  exports: [
    MatExpansionModule,
    MatIconModule,
    MatButtonModule,
    MatSelectModule,
  ],
})
export class MaterialModule { }
