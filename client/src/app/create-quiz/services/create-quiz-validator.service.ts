import { Injectable } from '@angular/core';
import { QuizInformation } from '../models/quiz-information';

@Injectable({
  providedIn: 'root'
})
export class CreateQuizValidatorService {

  constructor() { }

  isValidQuizInformation(quizInformation: QuizInformation) {
    return quizInformation.title !== '' && quizInformation.description !== ''
  }

}
