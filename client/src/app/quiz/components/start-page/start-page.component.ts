import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { QuizStage } from '../../models/quiz-stage';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.scss']
})
export class StartPageComponent implements OnInit {
  @Output() startQuiz = new EventEmitter<QuizStage>()

  constructor() { }

  ngOnInit(): void {
  }

  next() {
    this.startQuiz.emit(QuizStage.QUESTIONS_PAGE)
  }

}
