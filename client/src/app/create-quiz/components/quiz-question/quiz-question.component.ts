import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { QuizQuestion } from '../../models/quiz-question';
import { QuizOption } from '../../models/quiz-option';

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

  addQuizOption() {
    this.quizQuestion.quizOptions.push({
      quizOptionId: this.quizOptionId++,
      text: '',
      selected: false,
      isCorrect: false
    })
    this.onQuizQuestionChange()
  }

  updateQuizOption(quizOption: QuizOption) {
    this.quizQuestion.quizOptions = this.quizQuestion.quizOptions.map(o => {
      return o.quizOptionId === quizOption.quizOptionId ? quizOption : o
    })
    this.onQuizQuestionChange()
  }

  deleteQuizOption(quizOption: QuizOption) {
    this.quizQuestion.quizOptions = this.quizQuestion.quizOptions.filter(o => o.quizOptionId !== quizOption.quizOptionId)
    this.onQuizQuestionChange()
  }

  deleteQuizQuestion() {
    this.deleteQuizQuestionChange.emit(this.quizQuestion)
  }

  onQuizQuestionChange() {
    this.updateQuizQuestionChange.emit(this.quizQuestion)
  }

}
