import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DraftQuizItem } from '../../models/draft-quiz-item';

@Component({
  selector: 'quiz-body',
  templateUrl: './quiz-body.component.html',
  styleUrls: ['./quiz-body.component.scss']
})
export class QuizBodyComponent implements OnInit {
  @Output() quizItems = new EventEmitter<DraftQuizItem[]>()
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
    this.setQuizItem()
  }

  updateQuizItem(item: DraftQuizItem) {
    this.draftQuizItems = this.draftQuizItems.map(quizItem => {
      return item.id === quizItem.id ? item : quizItem
    })
    this.setQuizItem()
  }

  deleteQuizItem(item: DraftQuizItem) {
    this.draftQuizItems = this.draftQuizItems.filter(quizItem => quizItem.id !== item.id)
    this.setQuizItem()
  }

  setQuizItem() {
    this.quizItems.emit(this.draftQuizItems)
  }

}
