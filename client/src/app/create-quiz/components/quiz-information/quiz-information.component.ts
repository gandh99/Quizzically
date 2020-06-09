import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { QuizInformation } from '../../models/quiz-information';

@Component({
  selector: 'quiz-information',
  templateUrl: './quiz-information.component.html',
  styleUrls: ['./quiz-information.component.scss']
})
export class QuizInformationComponent implements OnInit {
  @Output() quizInformation = new EventEmitter<QuizInformation>()
  quizTitle: string
  quizDescription: string
  showBody: boolean

  constructor() { }

  ngOnInit(): void {
    this.showBody = true
  }

  toggleShowBody() {
    this.showBody = !this.showBody
  }

  setQuizTitle(quizTitle: string) {
    this.quizTitle = quizTitle
    this.setQuizInformation()
  }

  setQuizDescription(quizDescription: string) {
    this.quizDescription = quizDescription
    this.setQuizInformation()
  }

  setQuizInformation() {
    this.quizInformation.emit({
      title: this.quizTitle,
      description: this.quizDescription
    })
  }

}
