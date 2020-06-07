import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconsModule } from '../icons/icons.module';
import { AccountComponent } from './components/account/account.component';



@NgModule({
  declarations: [AccountComponent],
  imports: [
    CommonModule,
    IconsModule
  ],
  exports: [
    AccountComponent
  ]
})
export class AccountModule { }
