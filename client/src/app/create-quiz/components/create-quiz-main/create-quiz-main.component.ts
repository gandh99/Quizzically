import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { QuizInformation } from '../../models/quiz-information';

@Component({
  selector: 'app-create-quiz-main',
  templateUrl: './create-quiz-main.component.html',
  styleUrls: ['./create-quiz-main.component.scss']
})
export class CreateQuizMainComponent implements OnInit {
  @Output() createQuiz = new EventEmitter<boolean>()
  quizInformation: QuizInformation
  
  constructor() { }

  ngOnInit(): void {
  }

  loadCreateQuiz(load: boolean) {
    this.createQuiz.emit(load)
  }

  setQuizInformation(quizInformation: QuizInformation) {
    this.quizInformation = quizInformation
  }

}
