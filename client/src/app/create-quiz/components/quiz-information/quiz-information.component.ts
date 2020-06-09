import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { QuizInformation } from '../../models/quiz-information';

@Component({
  selector: 'quiz-information',
  templateUrl: './quiz-information.component.html',
  styleUrls: ['./quiz-information.component.scss']
})
export class QuizInformationComponent implements OnInit {
  @Input() quizInformation: QuizInformation
  @Output() quizInformationChange = new EventEmitter<QuizInformation>()
  showBody: boolean

  constructor() { }

  ngOnInit(): void {
    this.showBody = true
  }

  toggleShowBody() {
    this.showBody = !this.showBody
  }

  onQuizInformationChange() {
    this.quizInformationChange.emit(this.quizInformation)
  }

}
