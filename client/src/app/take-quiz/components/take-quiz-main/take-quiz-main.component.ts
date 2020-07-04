import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { QuizWrapper } from 'src/app/create-quiz/models/quiz-wrapper';
import { QuizStage } from '../../models/quiz-stage';

@Component({
  selector: 'app-take-quiz-main',
  templateUrl: './take-quiz-main.component.html',
  styleUrls: ['./take-quiz-main.component.scss']
})
export class TakeQuizMainComponent implements OnInit {
  @Output() takeQuiz = new EventEmitter<boolean>()
  quizWrapper: QuizWrapper
  QuizStage = QuizStage
  quizStage: QuizStage

  constructor() { }

  ngOnInit(): void {
    this.quizStage = QuizStage.QUIZ_START
  }

  startQuiz(quizWrapper: QuizWrapper) {
    this.quizWrapper = quizWrapper
    this.quizStage = QuizStage.QUIZ_BODY
  }

  endQuiz() {
    this.quizStage = QuizStage.QUIZ_RESULT
  }

}
