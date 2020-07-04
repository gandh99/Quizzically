import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { QuizWrapper } from 'src/app/create-quiz/models/quiz-wrapper';
import { QuizOverview } from 'src/app/create-quiz/models/quiz-overview';
import { QuizQuestion } from 'src/app/create-quiz/models/quiz-question';

@Component({
  selector: 'app-quiz-body',
  templateUrl: './quiz-body.component.html',
  styleUrls: ['./quiz-body.component.scss']
})
export class QuizBodyComponent implements OnInit {
  @Input() quizWrapper: QuizWrapper
  @Output() onQuizEnd = new EventEmitter<any>()
  quizOverview: QuizOverview
  quizQuestions: QuizQuestion[]
  currentQuestionIndex: number = 0

  constructor() { }

  ngOnInit(): void {
    this.quizOverview = this.quizWrapper.quizOverview
    this.quizQuestions = this.quizWrapper.quizQuestions
  }

  previous() {
    if (this.currentQuestionIndex > 0) {
      this.currentQuestionIndex--
    }
  }

  next() {
    if (this.currentQuestionIndex < this.quizQuestions.length - 1) {
      this.currentQuestionIndex++
    } else {
      this.onQuizEnd.emit()
    }
  }

}
