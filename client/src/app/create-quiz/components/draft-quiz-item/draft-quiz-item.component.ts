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
  @Output() updateQuizItemChange = new EventEmitter<DraftQuizItem>()
  showBody: boolean
  quizOptionId: number

  constructor() { }

  ngOnInit(): void {
    this.showBody = true
    this.quizOptionId = 0
  }

  toggleShowBody() {
    this.showBody = !this.showBody
  }

  setQuizQuestion(question: string) {
    this.quizItem.question = question
    this.onQuizItemChange()
  }

  addOption() {
    this.quizItem.options.push({
      id: this.quizOptionId++,
      text: '',
      selected: false
    })
    this.onQuizItemChange()
  }

  updateOption(option: RadioOption) {
    this.quizItem.options = this.quizItem.options.map(o => {
      return o.id === option.id ? option : o
    })
    this.onQuizItemChange()
  }

  deleteOption(option: RadioOption) {
    this.quizItem.options = this.quizItem.options.filter(o => o.id !== option.id)
    this.onQuizItemChange()
  }

  deleteItem() {
    this.deleteQuizItemChange.emit(this.quizItem)
  }

  onQuizItemChange() {
    this.updateQuizItemChange.emit(this.quizItem)
  }

}
