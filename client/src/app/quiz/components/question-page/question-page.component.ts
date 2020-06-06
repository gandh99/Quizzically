import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Question } from '../../models/question';
import { RadioOption } from '../../models/radio-option';

@Component({
  selector: 'app-question-page',
  templateUrl: './question-page.component.html',
  styleUrls: ['./question-page.component.scss']
})
export class QuestionPageComponent implements OnInit {
  @Input() questions: Question[]
  @Output() endQuiz = new EventEmitter<number>()
  currentQuestion: Question
  currentQuestionIndex: number
  currentSelectedOption: RadioOption
  score: number = 0

  constructor() { }

  ngOnInit(): void {
    this.currentQuestionIndex = 0
    this.currentQuestion = this.questions[this.currentQuestionIndex]
  }

  selectOption(option: RadioOption) {
    this.currentSelectedOption = option
  }

  updateScore() {
    if (this.currentQuestion.correctOption.id === this.currentSelectedOption.id) {
      this.score++
    }
  }

  next() {
    this.currentQuestionIndex === this.questions.length - 1 ?
      this.endQuiz.emit(this.score) :
      this.currentQuestion = this.questions[++this.currentQuestionIndex]
  }

}