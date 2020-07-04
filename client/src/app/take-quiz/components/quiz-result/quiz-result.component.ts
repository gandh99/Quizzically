import { Component, OnInit, Input } from '@angular/core';
import { QuizWrapper } from 'src/app/create-quiz/models/quiz-wrapper';
import { QuizQuestion } from 'src/app/create-quiz/models/quiz-question';

@Component({
  selector: 'app-quiz-result',
  templateUrl: './quiz-result.component.html',
  styleUrls: ['./quiz-result.component.scss']
})
export class QuizResultComponent implements OnInit {
  @Input() quizWrapper: QuizWrapper
  quizQuestions: QuizQuestion[]
  numCorrect: number = 0

  constructor() { }

  ngOnInit(): void {
    this.calculateScore()
  }

  calculateScore() {
    this.quizQuestions = this.quizWrapper.quizQuestions
    this.quizQuestions.forEach(question => {
      if (this.questionAnsweredCorrectly(question)) this.numCorrect++
    })
  }

  questionAnsweredCorrectly(question: QuizQuestion) {
    for (let option of question.quizOptions) {
      if (option.isCorrect !== option.selected) {
        return false
      }
    }

    return true
  }

}
