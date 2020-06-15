import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthenticationForm } from '../../models/form';
import { RegisterService } from '../../services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  @Output() form = new EventEmitter<AuthenticationForm>()
  username: string = ''
  password: string = ''

  constructor(private registerService: RegisterService) { }

  ngOnInit(): void {
  }

  loadForm() {
    this.form.emit(AuthenticationForm.LOGIN)
  }

  register() {
    this.registerService.register(this.username, this.password).subscribe(response => {
      console.log('done')
    })
  }

}
