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

  selectQuizOption() {
    this.quizOption.selected = !this.quizOption.selected
    this.onQuizOptionChange()
  }

  deleteQuizOption() {
    this.deleteQuizOptionChange.emit(this.quizOption)
  }

  onQuizOptionChange() {
    this.updateQuizOptionChange.emit(this.quizOption)
  }

}
