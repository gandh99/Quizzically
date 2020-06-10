import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-take-quiz-main',
  templateUrl: './take-quiz-main.component.html',
  styleUrls: ['./take-quiz-main.component.scss']
})
export class TakeQuizMainComponent implements OnInit {
  @Output() takeQuiz = new EventEmitter<boolean>()

  constructor() { }

  ngOnInit(): void {
  }

}
