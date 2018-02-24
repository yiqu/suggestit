import { Component, Inject } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { MAT_SNACK_BAR_DATA } from '@angular/material';


@Component({
  selector: 'snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.css'],
})
export class SnackBarComponent {

  message: string = "";
  status: string = "";

  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: any) {
    this.message = data.message;
    this.status = data.status;
  }

  onDismissClick() {
  }
}