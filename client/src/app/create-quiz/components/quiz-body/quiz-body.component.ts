import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { DraftQuizItem } from '../../models/draft-quiz-item';

@Component({
  selector: 'quiz-body',
  templateUrl: './quiz-body.component.html',
  styleUrls: ['./quiz-body.component.scss']
})
export class QuizBodyComponent implements OnInit {
  @Input() quizItems: DraftQuizItem[]
  @Output() quizItemsChange = new EventEmitter<DraftQuizItem[]>()
  showBody: boolean
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
    this.quizItems.push({
      id: this.draftQuizItemId++,
      question: '',
      options: [],
    })
    this.onQuizItemsChange()
  }

  updateQuizItem(item: DraftQuizItem) {
    this.quizItems = this.quizItems.map(quizItem => {
      return item.id === quizItem.id ? item : quizItem
    })
    this.onQuizItemsChange()
  }

  deleteQuizItem(item: DraftQuizItem) {
    this.quizItems = this.quizItems.filter(quizItem => quizItem.id !== item.id)
    this.onQuizItemsChange()
  }

  onQuizItemsChange() {
    this.quizItemsChange.emit(this.quizItems)
  }

}
