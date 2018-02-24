import { Injectable, ViewContainerRef } from '@angular/core';
import { MatSnackBar, MatSnackBarRef } from '@angular/material';
import { SnackBarComponent } from '../snackbar/snackbar.component';


@Injectable()
export class SnackBarService {

  snRef: MatSnackBarRef<SnackBarComponent> = null;

  constructor(public snackBar: MatSnackBar) {}

  openSnackBar(status: string, message: string, ref?: ViewContainerRef) {
    this.snRef = this.snackBar.openFromComponent(SnackBarComponent, {
      duration: 1500,
      verticalPosition: "bottom",
      horizontalPosition: "center",
      viewContainerRef: ref,
      data: {
        status: status,
        message: message
      }
    });
  }
}