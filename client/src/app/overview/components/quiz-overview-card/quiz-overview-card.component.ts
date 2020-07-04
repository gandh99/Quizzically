import { Component, OnInit, Input } from '@angular/core';
import { QuizWrapper } from 'src/app/create-quiz/models/quiz-wrapper';

@Component({
  selector: 'app-quiz-overview-card',
  templateUrl: './quiz-overview-card.component.html',
  styleUrls: ['./quiz-overview-card.component.scss']
})
export class QuizOverviewCardComponent implements OnInit {
  @Input() quizWrapper: QuizWrapper

  constructor() { }

  ngOnInit(): void {
  }

}
