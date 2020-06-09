import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DraftQuizItem } from '../../models/draft-quiz-item';
import { RadioOption } from 'src/app/quiz/models/radio-option';

@Component({
  selector: 'draft-quiz-item',
  templateUrl: './draft-quiz-item.component.html',
  styleUrls: ['./draft-quiz-item.component.scss']
})
export class DraftQuizItemComponent implements OnInit {
  @Input() draftQuizItem: DraftQuizItem
  @Output() deleteDraftQuizItem = new EventEmitter<DraftQuizItem>()
  @Output() setItem = new EventEmitter<DraftQuizItem>()
  showBody: boolean
  quizOptionId: number

  constructor() { }

  ngOnInit(): void {
    this.quizOptionId = 0
  }

  toggleShowBody() {
    this.showBody = !this.showBody
  }

  setQuizQuestion(question: string) {
    this.draftQuizItem.question = question
    this.setDraftQuizItem()
  }

  addOption() {
    this.draftQuizItem.options.push({
      id: this.quizOptionId++,
      text: '',
      selected: false
    })
    this.setDraftQuizItem()
  }

  updateOption(option: RadioOption) {
    this.draftQuizItem.options = this.draftQuizItem.options.map(o => {
      return o.id === option.id ? option : o
    })
    this.setDraftQuizItem()
  }

  deleteOption(option: RadioOption) {
    this.draftQuizItem.options = this.draftQuizItem.options.filter(o => o.id !== option.id)
    this.setDraftQuizItem()
  }

  deleteItem() {
    this.deleteDraftQuizItem.emit(this.draftQuizItem)
  }

  setDraftQuizItem() {
    this.setItem.emit(this.draftQuizItem)
  }

}
