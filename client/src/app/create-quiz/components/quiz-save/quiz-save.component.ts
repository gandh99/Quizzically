import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'quiz-save',
  templateUrl: './quiz-save.component.html',
  styleUrls: ['./quiz-save.component.scss']
})
export class QuizSaveComponent implements OnInit {
  @Output() save = new EventEmitter<any>()
  showBody: boolean

  constructor() { }

  ngOnInit(): void {
    this.showBody = true
  }

  toggleShowBody() {
    this.showBody = !this.showBody
  }

  saveQuiz() {
    this.save.emit()
  }

}
