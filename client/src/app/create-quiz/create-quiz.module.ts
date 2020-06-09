import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateQuizMainComponent } from './components/create-quiz-main/create-quiz-main.component';
import { IconsModule } from '../icons/icons.module';
import { MaterialUIModule } from '../material-ui/material-ui.module';
import { QuizInformationComponent } from './components/quiz-information/quiz-information.component';
import { QuizBodyComponent } from './components/quiz-body/quiz-body.component';
import { QuizSaveComponent } from './components/quiz-save/quiz-save.component';
import { DraftQuizItemComponent } from './components/draft-quiz-item/draft-quiz-item.component';
import { FormsModule } from '@angular/forms';
import { RadioOptionComponent } from './components/radio-option/radio-option.component';



@NgModule({
  declarations: [CreateQuizMainComponent, QuizInformationComponent, QuizBodyComponent, QuizSaveComponent, DraftQuizItemComponent, RadioOptionComponent],
  imports: [
    CommonModule,
    IconsModule,
    MaterialUIModule,
    FormsModule
  ],
  exports: [
    CreateQuizMainComponent
  ]
})
export class CreateQuizModule { }
