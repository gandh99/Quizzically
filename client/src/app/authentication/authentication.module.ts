import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { IconsModule } from '../icons/icons.module';
import { AuthenticationMainComponent } from './components/authentication-main/authentication-main.component';
import { RegisterComponent } from './components/register/register.component';
import { ReusableUiModule } from '../reusable-ui/reusable-ui.module';


@NgModule({
  declarations: [LoginComponent, AuthenticationMainComponent, RegisterComponent],
  imports: [
    CommonModule,
    IconsModule,
    ReusableUiModule
  ]
})
export class AuthenticationModule { }
