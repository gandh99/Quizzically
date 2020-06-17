import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthenticationForm } from '../../models/form';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';
import { CustomSnackbarService } from 'src/app/material-ui/services/custom-snackbar.service';
import { SnackBarType } from 'src/app/material-ui/snackbar/snackbar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @Output() form = new EventEmitter<AuthenticationForm>()
  username: string = ''
  password: string = ''

  constructor(private loginService: LoginService, private router: Router, private customSnackbarService: CustomSnackbarService) { }

  ngOnInit(): void {
  }

  loadForm() {
    this.form.emit(AuthenticationForm.REGISTER)
  }

  login() {
    this.loginService.login(this.username, this.password).subscribe(
      response => {
        let token: string = response.body.token
        if (token) {
          localStorage.setItem('accessToken', token)
        }
        this.router.navigateByUrl('/home')
      },
      error => {
        this.customSnackbarService.openSnackBar('Invalid username/password.', SnackBarType.ERROR)
      }
    )
  }

}
