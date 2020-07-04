import { Component, OnInit, Input } from '@angular/core';
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
  quizOverview: QuizOverview
  quizQuestions: QuizQuestion[]
  currentQuestionIndex: Number = 0
  currentQuestionNumber: Number = 1

  constructor() { }

  ngOnInit(): void {
    this.quizOverview = this.quizWrapper.quizOverview
    this.quizQuestions = this.quizWrapper.quizQuestions
  }

}
