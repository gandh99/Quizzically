import { Component, OnInit, Input } from '@angular/core';
import { QuizOption } from 'src/app/create-quiz/models/quiz-option';

@Component({
  selector: 'app-quiz-option',
  templateUrl: './quiz-option.component.html',
  styleUrls: ['./quiz-option.component.scss']
})
export class QuizOptionComponent implements OnInit {
  @Input() quizOption: QuizOption

  constructor() { }

  ngOnInit(): void {
  }

  checkOption() {
    this.quizOption.selected = !this.quizOption.selected
  }

}
