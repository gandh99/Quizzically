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
  showBody: boolean
  quizQuestion: string
  quizOptions: RadioOption[] = []
  quizOptionId: number

  constructor() { }

  ngOnInit(): void {
    this.quizOptionId = 0
  }

  toggleShowBody() {
    this.showBody = !this.showBody
  }

  setQuizQuestion(question: string) {
    this.quizQuestion = question
  }

  addOption() {
    this.quizOptions.push({
      id: this.quizOptionId++,
      text: '',
      selected: false
    })
  }

  deleteItem() {
    this.deleteDraftQuizItem.emit(this.draftQuizItem)
  }

}
