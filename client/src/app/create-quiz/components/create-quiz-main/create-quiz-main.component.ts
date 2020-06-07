import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-create-quiz-main',
  templateUrl: './create-quiz-main.component.html',
  styleUrls: ['./create-quiz-main.component.scss']
})
export class CreateQuizMainComponent implements OnInit {
  @Output() createQuiz = new EventEmitter<boolean>()

  constructor() { }

  ngOnInit(): void {
  }

  loadCreateQuiz(load: boolean) {
    this.createQuiz.emit(load)
  }

}
