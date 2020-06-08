import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz-information',
  templateUrl: './quiz-information.component.html',
  styleUrls: ['./quiz-information.component.scss']
})
export class QuizInformationComponent implements OnInit {
  showBody: boolean

  constructor() { }

  ngOnInit(): void {
    this.showBody = true
  }

  toggleShowBody() {
    this.showBody = !this.showBody
  }

}
