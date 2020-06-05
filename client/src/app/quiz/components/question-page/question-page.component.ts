import { Component, OnInit, Input } from '@angular/core';
import { Question } from 'src/app/models/question';

@Component({
  selector: 'app-question-page',
  templateUrl: './question-page.component.html',
  styleUrls: ['./question-page.component.css']
})
export class QuestionPageComponent implements OnInit {
  @Input() questions: Question[]
  currentQuestion: Question
  currentQuestionNumber: number

  constructor() { }

  ngOnInit(): void {
    this.currentQuestion = this.questions[0]
    this.currentQuestionNumber = 1
  }

}