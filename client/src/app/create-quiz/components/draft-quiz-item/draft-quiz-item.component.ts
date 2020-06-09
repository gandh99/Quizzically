import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DraftQuizItem } from '../../models/draft-quiz-item';

@Component({
  selector: 'draft-quiz-item',
  templateUrl: './draft-quiz-item.component.html',
  styleUrls: ['./draft-quiz-item.component.scss']
})
export class DraftQuizItemComponent implements OnInit {
  @Input() draftQuizItem: DraftQuizItem
  @Output() deleteDraftQuizItem = new EventEmitter<DraftQuizItem>()
  showBody: boolean

  constructor() { }

  ngOnInit(): void {
  }

  toggleShowBody() {
    this.showBody = !this.showBody
  }

  deleteItem() {
    this.deleteDraftQuizItem.emit(this.draftQuizItem)
  }

}
