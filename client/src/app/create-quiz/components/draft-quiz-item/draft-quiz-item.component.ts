import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DraftQuizItem } from '../../models/draft-quiz-item';
import { RadioOption } from 'src/app/quiz/models/radio-option';

@Component({
  selector: 'draft-quiz-item',
  templateUrl: './draft-quiz-item.component.html',
  styleUrls: ['./draft-quiz-item.component.scss']
})
export class DraftQuizItemComponent implements OnInit {
  @Input() quizItem: DraftQuizItem
  @Output() deleteQuizItemChange = new EventEmitter<DraftQuizItem>()
  @Output() setItem = new EventEmitter<DraftQuizItem>()
  showBody: boolean
  quizOptionId: number

  constructor() { }

  ngOnInit(): void {
    this.quizOptionId = 0
    this.showBody = true
  }

  toggleShowBody() {
    this.showBody = !this.showBody
  }

  setQuizQuestion(question: string) {
    this.quizItem.question = question
    this.setDraftQuizItem()
  }

  addOption() {
    this.quizItem.options.push({
      id: this.quizOptionId++,
      text: '',
      selected: false
    })
    this.setDraftQuizItem()
  }

  updateOption(option: RadioOption) {
    this.quizItem.options = this.quizItem.options.map(o => {
      return o.id === option.id ? option : o
    })
    this.setDraftQuizItem()
  }

  deleteOption(option: RadioOption) {
    this.quizItem.options = this.quizItem.options.filter(o => o.id !== option.id)
    this.setDraftQuizItem()
  }

  deleteItem() {
    this.deleteQuizItemChange.emit(this.quizItem)
  }

  setDraftQuizItem() {
    this.setItem.emit(this.quizItem)
  }

}
