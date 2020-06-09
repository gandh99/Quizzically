import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { QuizInformation } from '../../models/quiz-information';
import { DraftQuizItem } from '../../models/draft-quiz-item';

@Component({
  selector: 'app-create-quiz-main',
  templateUrl: './create-quiz-main.component.html',
  styleUrls: ['./create-quiz-main.component.scss']
})
export class CreateQuizMainComponent implements OnInit {
  @Output() createQuiz = new EventEmitter<boolean>()
  quizInformation: QuizInformation
  draftQuizItems: DraftQuizItem[] = []
  
  constructor() { }

  ngOnInit(): void {
  }

  loadCreateQuiz(load: boolean) {
    this.createQuiz.emit(load)
  }

  setQuizInformation(quizInformation: QuizInformation) {
    this.quizInformation = quizInformation
  }

  setQuizItems(draftQuizItems: DraftQuizItem[]) {
    this.draftQuizItems = draftQuizItems
  }

}
