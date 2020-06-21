import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { QuizOverview } from '../../models/quiz-overview';
import { QuizQuestion } from '../../models/quiz-question';
import { CreateQuizValidatorService } from '../../services/create-quiz-validator.service';
import { CustomSnackbarService } from 'src/app/material-ui/services/custom-snackbar.service';
import { SnackBarType } from 'src/app/material-ui/snackbar/snackbar';

@Component({
  selector: 'app-create-quiz-main',
  templateUrl: './create-quiz-main.component.html',
  styleUrls: ['./create-quiz-main.component.scss']
})
export class CreateQuizMainComponent implements OnInit {
  @Output() createQuiz = new EventEmitter<boolean>()
  quizOverview: QuizOverview
  quizQuestions: QuizQuestion[] = []

  constructor(private createQuizValidator: CreateQuizValidatorService, private customSnackBar: CustomSnackbarService) { }

  ngOnInit(): void {
    this.quizOverview = {
      title: '',
      description: ''
    }
  }

  saveQuiz() {
    console.log(this.quizOverview, this.quizQuestions)

    if (!this.createQuizValidator.isValidQuizOverview(this.quizOverview)) {
      this.customSnackBar.openSnackBar('Please fill in all the quiz information.', SnackBarType.ERROR)
      return
    }

    if (!this.createQuizValidator.hasQuizQuestions(this.quizQuestions)) {
      this.customSnackBar.openSnackBar('Please add at least 1 quiz item.', SnackBarType.ERROR)
      return
    }

    if (!this.createQuizValidator.isValidQuizQuestions(this.quizQuestions)) {
      this.customSnackBar.openSnackBar('Please fill in all quiz questions and options, and select at least 1 option per question.', SnackBarType.ERROR)
      return
    }

    // TODO: Assign question numbers to quiz questions in the array
    // TODO: Wrap quiz models into QuizWrapper
  }

}
