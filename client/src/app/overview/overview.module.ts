import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverviewComponent } from './components/overview/overview.component';
import { IconsModule } from '../icons/icons.module';
import { QuizOverviewCardComponent } from './components/quiz-overview-card/quiz-overview-card.component';



@NgModule({
  declarations: [OverviewComponent, QuizOverviewCardComponent],
  imports: [
    CommonModule,
    IconsModule,
  ],
  exports: [
    OverviewComponent,
  ]
})
export class OverviewModule { }
