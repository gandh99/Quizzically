import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateQuizMainComponent } from './components/create-quiz-main/create-quiz-main.component';
import { IconsModule } from '../icons/icons.module';
import { MaterialUIModule } from '../material-ui/material-ui.module';
import { QuizOverviewComponent } from './components/quiz-overview/quiz-overview.component';
import { QuizBodyComponent } from './components/quiz-body/quiz-body.component';
import { QuizSaveComponent } from './components/quiz-save/quiz-save.component';
import { QuizQuestionComponent } from './components/quiz-question/quiz-question.component';
import { FormsModule } from '@angular/forms';
import { QuizOptionComponent } from './components/quiz-option/quiz-option.component';
import { ReusableUiModule } from '../reusable-ui/reusable-ui.module';



@NgModule({
  declarations: [
    CreateQuizMainComponent, 
    QuizOverviewComponent, 
    QuizBodyComponent, 
    QuizSaveComponent, 
    QuizQuestionComponent, 
    QuizOptionComponent
  ],
  imports: [
    CommonModule,
    IconsModule,
    MaterialUIModule,
    FormsModule,
    ReusableUiModule
  ],
  exports: [
    CreateQuizMainComponent
  ]
})
export class CreateQuizModule { }
