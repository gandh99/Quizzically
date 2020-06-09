import { Injectable } from '@angular/core';
import { QuizInformation } from '../models/quiz-information';
import { DraftQuizItem } from '../models/draft-quiz-item';
import { RadioOption } from 'src/app/quiz/models/radio-option';

@Injectable({
  providedIn: 'root'
})
export class CreateQuizValidatorService {

  constructor() { }

  isValidQuizInformation(quizInformation: QuizInformation) {
    return quizInformation.title !== '' && quizInformation.description !== ''
  }

  hasQuizItems(quizItems: DraftQuizItem[]) {
    return quizItems.length > 0
  }

  isValidQuizItems(quizItems: DraftQuizItem[]) {
    for (let item of quizItems) {
      if (item.question === '' || !this.isValidOptions(item.options)) {
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
