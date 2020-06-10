import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './components/homepage/homepage.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { IconsModule } from '../icons/icons.module';
import { OverviewModule } from '../overview/overview.module';
import { ExploreModule } from '../explore/explore.module';
import { AccountModule } from '../account/account.module';
import { CreateQuizModule } from '../create-quiz/create-quiz.module';
import { TakeQuizModule } from '../take-quiz/take-quiz.module';



@NgModule({
  declarations: [HomepageComponent, NavbarComponent],
  imports: [
    CommonModule,
    IconsModule,
    OverviewModule,
    ExploreModule,
    AccountModule,
    CreateQuizModule,
    TakeQuizModule
  ]
})
export class HomeModule { }
