import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TakeQuizMainComponent } from './components/take-quiz-main/take-quiz-main.component';
import { IconsModule } from '../icons/icons.module';
import { ReusableUiModule } from '../reusable-ui/reusable-ui.module';
import { QuizStartComponent } from './components/quiz-start/quiz-start.component';
import { QuizBodyComponent } from './components/quiz-body/quiz-body.component';
import { QuizOptionComponent } from './components/quiz-option/quiz-option.component';
import { QuizResultComponent } from './components/quiz-result/quiz-result.component';



@NgModule({
  declarations: [TakeQuizMainComponent, QuizStartComponent, QuizBodyComponent, QuizOptionComponent, QuizResultComponent],
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
