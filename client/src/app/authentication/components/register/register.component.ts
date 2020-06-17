import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthenticationForm } from '../../models/form';
import { RegisterService } from '../../services/register.service';
import { CustomSnackbarService } from 'src/app/material-ui/services/custom-snackbar.service';
import { SnackBarType } from 'src/app/material-ui/snackbar/snackbar';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  @Output() form = new EventEmitter<AuthenticationForm>()
  username: string = ''
  password: string = ''

  constructor(private registerService: RegisterService, private customSnackbarService: CustomSnackbarService) { }

  ngOnInit(): void {
  }

  loadForm() {
    this.form.emit(AuthenticationForm.LOGIN)
  }

  register() {
    this.registerService.register(this.username, this.password).subscribe(
      response => {
        this.customSnackbarService.openSnackBar('Registration successful.', SnackBarType.SUCCESS)
      },
      error => {
        switch (error.status) {
          case 409:
            this.customSnackbarService.openSnackBar('Username already exists.', SnackBarType.ERROR)
            break
          default:
            this.customSnackbarService.openSnackBar('Registration unsuccessful.', SnackBarType.ERROR)
            break
        }
      }
    )
  }

}
