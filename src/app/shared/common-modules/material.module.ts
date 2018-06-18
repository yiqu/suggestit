import { NgModule } from '@angular/core';
import { MatExpansionModule } from '@angular/material';
import { MatIconModule } from '@angular/material';
import { MatButtonModule } from '@angular/material';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatChipsModule } from '@angular/material/chips';


/**
 * Exports common material modules
 */
@NgModule({
  imports: [
    MatExpansionModule,
    MatIconModule,
    MatButtonModule,
    MatSelectModule,
    MatSnackBarModule,
    MatTooltipModule,
    MatChipsModule
  ],

  exports: [
    MatExpansionModule,
    MatIconModule,
    MatButtonModule,
    MatSelectModule,
    MatSnackBarModule,
    MatTooltipModule,
    MatChipsModule
  ],
})
export class MaterialModule { }
