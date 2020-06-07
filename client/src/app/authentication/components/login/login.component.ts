import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthenticationForm } from '../../models/form';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @Output() form = new EventEmitter<AuthenticationForm>()

  constructor() { }

  ngOnInit(): void {
  }

  loadForm() {
    this.form.emit(AuthenticationForm.REGISTER)
  }

}
