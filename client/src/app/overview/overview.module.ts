import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverviewComponent } from './components/overview/overview.component';
import { IconsModule } from '../icons/icons.module';
import { QuizOverviewCardComponent } from './components/quiz-overview-card/quiz-overview-card.component';
import { ReusableUiModule } from '../reusable-ui/reusable-ui.module';



@NgModule({
  declarations: [OverviewComponent, QuizOverviewCardComponent],
  imports: [
    CommonModule,
    IconsModule,
    ReusableUiModule
  ],
  exports: [
    OverviewComponent,
  ]
})
export class OverviewModule { }
