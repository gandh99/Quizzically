import { Component, OnInit, Input } from '@angular/core';
import { QuizWrapper } from 'src/app/create-quiz/models/quiz-wrapper';

@Component({
  selector: 'app-quiz-body',
  templateUrl: './quiz-body.component.html',
  styleUrls: ['./quiz-body.component.scss']
})
export class QuizBodyComponent implements OnInit {
  @Input() quizWrapper: QuizWrapper
  
  constructor() { }

  ngOnInit(): void {
  }

}
