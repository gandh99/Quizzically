import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { IconsModule } from '../icons/icons.module';
import { QuestionPageComponent } from './components/question-page/question-page.component';
import { RadioOptionComponent } from './components/radio-option/radio-option.component';
import { QuestionCounterComponent } from './components/question-counter/question-counter.component';
import { StartPageComponent } from './components/start-page/start-page.component';
import { QuizMainComponent } from './components/quiz-main/quiz-main.component';
import { ResultsPageComponent } from './components/results-page/results-page.component';


@NgModule({
  declarations: [
    QuizMainComponent,
    QuestionPageComponent,
    RadioOptionComponent,
    QuestionCounterComponent,
    StartPageComponent,
    QuizMainComponent,
    ResultsPageComponent,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatRadioModule,
    IconsModule,
  ],
  exports: [
    QuizMainComponent
  ]
})
export class QuizModule { }
