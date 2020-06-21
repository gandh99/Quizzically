import { Injectable } from '@angular/core';
import { QuizOverview } from '../models/quiz-overview';
import { QuizQuestion } from '../models/quiz-question';
import { QuizOption } from '../models/quiz-option';

@Injectable({
  providedIn: 'root'
})
export class CreateQuizValidatorService {

  constructor() { }

  isValidQuizOverview(quizOverview: QuizOverview) {
    return quizOverview.title !== '' && quizOverview.description !== ''
  }

  hasQuizQuestions(quizQuestions: QuizQuestion[]) {
    return quizQuestions.length > 0
  }

  isValidQuizQuestions(quizQuestions: QuizQuestion[]) {
    for (let item of quizQuestions) {
      if (item.question === '' || !this.isValidQuizOptions(item.quizOptions)) {
        return false
      }
    }

    return true
  }

  // Returns true only if every option has a text, and there is 1 or more options selected
  private isValidQuizOptions(quizOptions: QuizOption[]): boolean {
    let numSelectedToBeCorrect: number = 0
    for (let option of quizOptions) {
      if (option.text === '') {
        return false
      }

      if (option.isCorrect) {
        numSelectedToBeCorrect++
      }
    }

    return numSelectedToBeCorrect > 0 ? true : false
  }

}
