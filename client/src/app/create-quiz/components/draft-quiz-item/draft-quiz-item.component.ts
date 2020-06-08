import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-draft-quiz-item',
  templateUrl: './draft-quiz-item.component.html',
  styleUrls: ['./draft-quiz-item.component.scss']
})
export class DraftQuizItemComponent implements OnInit {
  showBody: boolean

  constructor() { }

  ngOnInit(): void {
  }

  toggleShowBody() {
    this.showBody = !this.showBody
  }

}
