import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { QuizQuestion } from '../../models/quiz-question';
import { RadioOption } from 'src/app/quiz/models/radio-option';

@Component({
  selector: 'quiz-question',
  templateUrl: './quiz-question.component.html',
  styleUrls: ['./quiz-question.component.scss']
})
export class QuizQuestionComponent implements OnInit {
  @Input() quizQuestion: QuizQuestion
  @Output() deleteQuizQuestionChange = new EventEmitter<QuizQuestion>()
  @Output() updateQuizQuestionChange = new EventEmitter<QuizQuestion>()
  showBody: boolean
  quizOptionId: number

  constructor() { }

  ngOnInit(): void {
    this.showBody = true
    this.quizOptionId = 0
  }

  toggleShowBody() {
    this.showBody = !this.showBody
  }

  setQuizQuestion(question: string) {
    this.quizQuestion.question = question
    this.onQuizQuestionChange()
  }

  addOption() {
    this.quizQuestion.quizOptions.push({
      id: this.quizOptionId++,
      text: '',
      selected: false
    })
    this.onQuizQuestionChange()
  }

  updateOption(option: RadioOption) {
    this.quizQuestion.quizOptions = this.quizQuestion.quizOptions.map(o => {
      return o.id === option.id ? option : o
    })
    this.onQuizQuestionChange()
  }

  deleteOption(option: RadioOption) {
    this.quizQuestion.quizOptions = this.quizQuestion.quizOptions.filter(o => o.id !== option.id)
    this.onQuizQuestionChange()
  }

  deleteItem() {
    this.deleteQuizQuestionChange.emit(this.quizQuestion)
  }

  onQuizQuestionChange() {
    this.updateQuizQuestionChange.emit(this.quizQuestion)
  }

}
