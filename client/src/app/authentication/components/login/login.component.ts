import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthenticationForm } from '../../models/form';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @Output() form = new EventEmitter<AuthenticationForm>()
  username: string = ''
  password: string = ''

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
  }

  loadForm() {
    this.form.emit(AuthenticationForm.REGISTER)
  }

  login() {
    this.loginService.login(this.username, this.password).subscribe(
      response => {
        console.log(response)
      },
      error => {
        console.log(error)
      }
    )
  }

}
