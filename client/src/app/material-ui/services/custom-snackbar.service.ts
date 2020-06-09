import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackBarType, getSnackBarClass } from '../models/snackbar'

@Injectable({
  providedIn: 'root'
})
export class CustomSnackbarService {
  constructor(private snackBar: MatSnackBar) { }

  openSnackBar(message: string, status: SnackBarType, action?: string) {
    this.snackBar.open(message, action, {
      duration: 5000,
      panelClass: [getSnackBarClass(status)]
    });
  }

}
