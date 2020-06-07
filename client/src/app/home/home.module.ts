import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './components/homepage/homepage.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { IconsModule } from '../icons/icons.module';



@NgModule({
  declarations: [HomepageComponent, NavbarComponent],
  imports: [
    CommonModule,
    IconsModule
  ]
})
export class HomeModule { }
