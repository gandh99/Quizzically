import { Component, OnInit } from '@angular/core';
import { DraftQuizItem } from '../../models/draft-quiz-item';

@Component({
  selector: 'app-quiz-body',
  templateUrl: './quiz-body.component.html',
  styleUrls: ['./quiz-body.component.scss']
})
export class QuizBodyComponent implements OnInit {
  showBody: boolean
  draftQuizItems: DraftQuizItem[] = []
  draftQuizItemId: number

  constructor() { }

  ngOnInit(): void {
    this.showBody = true
    this.draftQuizItemId = 0
  }

  toggleShowBody() {
    this.showBody = !this.showBody
  }

  addQuizItem() {
    this.draftQuizItems.push({
      id: this.draftQuizItemId++,
      question: '',
      options: null,
      correctOption: null
    })
  }

  deleteQuizItem(item: DraftQuizItem) {
    this.draftQuizItems = this.draftQuizItems.filter(quizItem => quizItem.id !== item.id)
  }

}
