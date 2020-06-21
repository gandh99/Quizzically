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

  updateQuizQuestion(quizQuestion: QuizQuestion) {
    this.quizQuestions = this.quizQuestions.map(item => {
      return item.questionNumber === quizQuestion.questionNumber ? quizQuestion : item
    })
    this.onQuizQuestionsChange()
  }

  deleteQuizQuestion(quizQuestion: QuizQuestion) {
    this.quizQuestions = this.quizQuestions.filter(item => item.questionNumber !== quizQuestion.questionNumber)
    this.onQuizQuestionsChange()
  }

  onQuizQuestionsChange() {
    this.quizQuestionsChange.emit(this.quizQuestions)
  }

}
