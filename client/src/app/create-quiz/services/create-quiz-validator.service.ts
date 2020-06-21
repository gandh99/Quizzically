import { Injectable } from '@angular/core';
import { QuizOverview } from '../models/quiz-overview';
import { QuizQuestion } from '../models/quiz-question';
import { RadioOption } from 'src/app/quiz/models/radio-option';

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
      if (item.question === '' || !this.isValidOptions(item.quizOptions)) {
        return false
      }
    }

    return true
  }

  // Returns true only if every option has a text, and there is 1 or more options selected
  private isValidOptions(options: RadioOption[]): boolean {
    let numSelected: number = 0
    for (let option of options) {
      if (option.text === '') {
        return false
      }

      if (option.selected) {
        numSelected++
      }
    }

    return numSelected > 0 ? true : false
  }

}
