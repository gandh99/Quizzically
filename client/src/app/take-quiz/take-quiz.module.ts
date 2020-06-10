import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TakeQuizMainComponent } from './components/take-quiz-main/take-quiz-main.component';
import { IconsModule } from '../icons/icons.module';
import { ReusableUiModule } from '../reusable-ui/reusable-ui.module';
import { QuizStartComponent } from './components/quiz-start/quiz-start.component';



@NgModule({
  declarations: [TakeQuizMainComponent, QuizStartComponent],
  imports: [
    CommonModule,
    IconsModule,
    ReusableUiModule
  ],
  exports: [
    TakeQuizMainComponent
  ]
})
export class TakeQuizModule { }
