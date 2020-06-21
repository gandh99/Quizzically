import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { QuizQuestion } from '../../models/quiz-question';

@Component({
  selector: 'quiz-body',
  templateUrl: './quiz-body.component.html',
  styleUrls: ['./quiz-body.component.scss']
})
export class QuizBodyComponent implements OnInit {
  @Input() quizQuestions: QuizQuestion[]
  @Output() quizQuestionsChange = new EventEmitter<QuizQuestion[]>()
  showBody: boolean
  currentQuestionNumber: number

  constructor() { }

  ngOnInit(): void {
    this.showBody = true
    this.currentQuestionNumber = 0
  }

  toggleShowBody() {
    this.showBody = !this.showBody
  }

  addQuizQuestion() {
    this.quizQuestions.push({
      questionNumber: this.currentQuestionNumber++,
      question: '',
      quizOptions: [],
    })
    this.onQuizQuestionsChange()
  }

  updateQuizQuestion(item: QuizQuestion) {
    this.quizQuestions = this.quizQuestions.map(item => {
      return item.quizQuestionId === item.quizQuestionId ? item : item
    })
    this.onQuizQuestionsChange()
  }

  deleteQuizQuestion(item: QuizQuestion) {
    this.quizQuestions = this.quizQuestions.filter(item => item.quizQuestionId !== item.quizQuestionId)
    this.onQuizQuestionsChange()
  }

  onQuizQuestionsChange() {
    this.quizQuestionsChange.emit(this.quizQuestions)
  }

}
