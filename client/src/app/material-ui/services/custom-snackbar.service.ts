import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackBarType } from '../snackbar/snackbar'

@Injectable({
  providedIn: 'root'
})
export class CustomSnackbarService {
  constructor(private snackBar: MatSnackBar) { }

  openSnackBar(message: string, status: SnackBarType, action?: string) {
    let snackBarClass = SnackBarType[status].toLowerCase()
    this.snackBar.open(message, action, {
      duration: 3000,
      panelClass: [snackBarClass]
    });
  }

}
