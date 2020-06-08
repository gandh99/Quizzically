import { Component, OnInit } from '@angular/core';
import { DraftQuizItem } from '../../models/draft-quiz-item';

@Component({
  selector: 'app-quiz-body',
  templateUrl: './quiz-body.component.html',
  styleUrls: ['./quiz-body.component.scss']
})
export class QuizBodyComponent implements OnInit {
  showBody: boolean
  draftQuizItems: DraftQuizItem[]

  constructor() { }

  ngOnInit(): void {
    this.showBody = true
  }

  toggleShowBody() {
    this.showBody = !this.showBody
  }

  addQuizItem() {
    
  }

}
