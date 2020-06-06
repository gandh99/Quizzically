import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { IconsModule } from '../icons/icons.module';


@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    IconsModule
  ]
})
export class AuthenticationModule { }
