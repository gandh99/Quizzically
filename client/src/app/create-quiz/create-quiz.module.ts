import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateQuizMainComponent } from './components/create-quiz-main/create-quiz-main.component';
import { IconsModule } from '../icons/icons.module';
import { MaterialUIModule } from '../material-ui/material-ui.module';
import { QuizOverviewComponent } from './components/quiz-overview/quiz-overview.component';
import { QuizBodyComponent } from './components/quiz-body/quiz-body.component';
import { QuizSaveComponent } from './components/quiz-save/quiz-save.component';
import { DraftQuizItemComponent } from './components/draft-quiz-item/draft-quiz-item.component';
import { FormsModule } from '@angular/forms';
import { RadioOptionComponent } from './components/radio-option/radio-option.component';
import { ReusableUiModule } from '../reusable-ui/reusable-ui.module';



@NgModule({
  declarations: [CreateQuizMainComponent, QuizOverviewComponent, QuizBodyComponent, QuizSaveComponent, DraftQuizItemComponent, RadioOptionComponent],
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
