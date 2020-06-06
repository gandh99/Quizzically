import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.scss']
})
export class StartPageComponent implements OnInit {
  @Output() startQuiz = new EventEmitter<boolean>()

  constructor() { }

  ngOnInit(): void {
  }

  next() {
    this.startQuiz.emit(true)
  }

}
