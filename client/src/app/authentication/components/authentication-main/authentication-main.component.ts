import { Component, OnInit } from '@angular/core';
import { AuthenticationForm } from '../../models/form';

@Component({
  selector: 'app-authentication-main',
  templateUrl: './authentication-main.component.html',
  styleUrls: ['./authentication-main.component.scss']
})
export class AuthenticationMainComponent implements OnInit {
  AuthenticationForm = AuthenticationForm
  authenticationForm: AuthenticationForm

  constructor() { }

  ngOnInit(): void {
    this.authenticationForm = AuthenticationForm.LOGIN
  }

  loadForm(authenticationForm: AuthenticationForm) {
    this.authenticationForm = authenticationForm
  }

}
