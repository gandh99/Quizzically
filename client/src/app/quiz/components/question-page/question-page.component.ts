import { Component, OnInit, Input } from '@angular/core';
import { Question } from '../../models/question';

@Component({
  selector: 'app-question-page',
  templateUrl: './question-page.component.html',
  styleUrls: ['./question-page.component.scss']
})
export class QuestionPageComponent implements OnInit {
  @Input() questions: Question[]
  currentQuestion: Question
  currentQuestionIndex: number

  constructor() { }

  ngOnInit(): void {
    this.currentQuestionIndex = 0
    this.currentQuestion = this.questions[this.currentQuestionIndex]
  }

  nextQuestion() {
    this.currentQuestion = this.questions[++this.currentQuestionIndex]
  }

}