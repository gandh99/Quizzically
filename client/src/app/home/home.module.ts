import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './components/homepage/homepage.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { IconsModule } from '../icons/icons.module';
import { ExploreComponent } from './components/explore/explore.component';
import { AccountComponent } from './components/account/account.component';
import { OverviewComponent } from './components/overview/overview.component';



@NgModule({
  declarations: [HomepageComponent, NavbarComponent, ExploreComponent, AccountComponent, OverviewComponent],
  imports: [
    CommonModule,
    IconsModule
  ]
})
export class HomeModule { }
