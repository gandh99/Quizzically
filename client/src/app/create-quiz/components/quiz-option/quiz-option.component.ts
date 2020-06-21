import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { QuizOption } from '../../models/quiz-option';

@Component({
  selector: 'quiz-option',
  templateUrl: './quiz-option.component.html',
  styleUrls: ['./quiz-option.component.scss']
})
export class QuizOptionComponent implements OnInit {
  @Input() quizOption: QuizOption
  @Output() deleteQuizOptionChange = new EventEmitter<QuizOption>()
  @Output() updateQuizOptionChange = new EventEmitter<QuizOption>()

  constructor() { }

  ngOnInit(): void {
  }

  toggleIsCorrect() {
    this.quizOption.isCorrect = !this.quizOption.isCorrect
    this.onQuizOptionChange()
  }

  deleteQuizOption() {
    this.deleteQuizOptionChange.emit(this.quizOption)
  }

  onQuizOptionChange() {
    this.updateQuizOptionChange.emit(this.quizOption)
  }

}
