import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateQuizMainComponent } from './components/create-quiz-main/create-quiz-main.component';
import { IconsModule } from '../icons/icons.module';
import { MaterialUIModule } from '../material-ui/material-ui.module';
import { QuizInformationComponent } from './components/quiz-information/quiz-information.component';
import { QuizBodyComponent } from './components/quiz-body/quiz-body.component';



@NgModule({
  declarations: [CreateQuizMainComponent, QuizInformationComponent, QuizBodyComponent],
  imports: [
    CommonModule,
    IconsModule,
    MaterialUIModule
  ],
  exports: [
    CreateQuizMainComponent
  ]
})
export class CreateQuizModule { }
