import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-question-counter',
  templateUrl: './question-counter.component.html',
  styleUrls: ['./question-counter.component.css']
})
export class QuestionCounterComponent implements OnInit {
  @Input() currentQuestionNumber: number
  @Input() totalQuestions: number

  constructor() { }

  ngOnInit(): void {
  }

}
