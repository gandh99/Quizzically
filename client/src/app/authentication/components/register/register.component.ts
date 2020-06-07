import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthenticationForm } from '../../models/form';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  @Output() form = new EventEmitter<AuthenticationForm>()

  constructor() { }

  ngOnInit(): void {
  }

  loadForm() {
    this.form.emit(AuthenticationForm.LOGIN)
  }

}
