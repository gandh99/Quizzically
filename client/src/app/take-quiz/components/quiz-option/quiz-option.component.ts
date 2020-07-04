import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-quiz-option',
  templateUrl: './quiz-option.component.html',
  styleUrls: ['./quiz-option.component.scss']
})
export class QuizOptionComponent implements OnInit {
  @Input() text: string

  constructor() { }

  ngOnInit(): void {
  }

}
