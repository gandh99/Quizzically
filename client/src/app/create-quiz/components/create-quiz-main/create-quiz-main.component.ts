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
    this.quizInformation = {
      title: '',
      description: ''
    }
  }

  loadCreateQuiz(load: boolean) {
    this.createQuiz.emit(load)
  }

  setQuizItems(draftQuizItems: DraftQuizItem[]) {
    this.draftQuizItems = draftQuizItems
  }

  saveQuiz() {
  }

}
