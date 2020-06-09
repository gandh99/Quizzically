import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { QuizInformation } from '../../models/quiz-information';
import { DraftQuizItem } from '../../models/draft-quiz-item';
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
  quizInformation: QuizInformation
  quizItems: DraftQuizItem[] = []

  constructor(private createQuizValidator: CreateQuizValidatorService, private customSnackBar: CustomSnackbarService) { }

  ngOnInit(): void {
    this.quizInformation = {
      title: '',
      description: ''
    }
  }

  loadCreateQuiz(load: boolean) {
    this.createQuiz.emit(load)
  }

  saveQuiz() {
    if (!this.createQuizValidator.isValidQuizInformation(this.quizInformation)) {
      this.customSnackBar.openSnackBar('Please fill in all the quiz information.', SnackBarType.ERROR)
      return
    }
  }

}
