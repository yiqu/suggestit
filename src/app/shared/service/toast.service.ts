import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { SnackBarComponent } from '../snackbar/snackbar.component';


@Injectable()
export class SnackBarService {

  constructor(public snackBar: MatSnackBar) {}

  openSnackBar() {
    this.snackBar.openFromComponent(SnackBarComponent, {
      duration: 1500,
      verticalPosition: "top",
      horizontalPosition: "right",
      data: {message:"hello"}
    });
  }
}