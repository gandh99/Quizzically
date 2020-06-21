import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { QuizOverview } from '../../models/quiz-overview';
import { QuizQuestion } from '../../models/quiz-question';
import { CreateQuizValidatorService } from '../../services/create-quiz-validator.service';
import { CustomSnackbarService } from 'src/app/material-ui/services/custom-snackbar.service';
import { SnackBarType } from 'src/app/material-ui/snackbar/snackbar';
import { QuizWrapper } from '../../models/quiz-wrapper';
import { CreateQuizService } from '../../services/create-quiz.service';

@Component({
  selector: 'app-create-quiz-main',
  templateUrl: './create-quiz-main.component.html',
  styleUrls: ['./create-quiz-main.component.scss']
})
export class CreateQuizMainComponent implements OnInit {
  @Output() createQuiz = new EventEmitter<boolean>()
  quizWrapper: QuizWrapper
  quizOverview: QuizOverview
  quizQuestions: QuizQuestion[] = []

  constructor(
    private createQuizValidator: CreateQuizValidatorService,
    private customSnackBar: CustomSnackbarService,
    private createQuizService: CreateQuizService
  ) { }

  ngOnInit(): void {
    this.quizOverview = {
      title: '',
      description: ''
    }
    this.quizWrapper = {
      quizOverview: this.quizOverview,
      quizQuestions: this.quizQuestions
    }
  }

  saveQuiz() {
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

    // Assign question numbers to quiz questions in the array
    this.quizQuestions = this.assignQuestionNumbers(this.quizQuestions)
    console.log(this.quizWrapper)
    // Send to server
    this.createQuizService
      .createQuiz(this.quizWrapper)
      .subscribe(response => console.log(response))
  }

  assignQuestionNumbers(quizQuestions: QuizQuestion[]): QuizQuestion[] {
    let currentQuestionNumber = 1
    return quizQuestions.map(question => {
      question.questionNumber = currentQuestionNumber++
      return question
    })
  }

}
