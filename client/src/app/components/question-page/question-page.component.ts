import { Component, OnInit } from '@angular/core';
import { RadioOption } from 'src/app/models/radio-option';

@Component({
  selector: 'app-question-page',
  templateUrl: './question-page.component.html',
  styleUrls: ['./question-page.component.css']
})
export class QuestionPageComponent implements OnInit {
  options: RadioOption[]
  currentQuestionNumber: number
  totalQuestions: number

  constructor() { }

  ngOnInit(): void {
    this.options = [
      { id: 1, text: 'The Botanical Gardens', selected: false},
      { id: 2, text: 'The Science Museum', selected: false},
      { id: 3, text: 'The Olympic Stadium', selected: false}
    ]
    this.currentQuestionNumber = 1
    this.totalQuestions = 10
  }

}
