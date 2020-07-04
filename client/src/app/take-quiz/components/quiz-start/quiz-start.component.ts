import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz-start',
  templateUrl: './quiz-start.component.html',
  styleUrls: ['./quiz-start.component.scss']
})
export class QuizStartComponent implements OnInit {
  quizCode: string

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.quizCode)
  }

}
