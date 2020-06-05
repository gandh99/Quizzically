import { Component, OnInit } from '@angular/core';
import { RadioOption } from 'src/app/models/radio-option';

@Component({
  selector: 'app-question-page',
  templateUrl: './question-page.component.html',
  styleUrls: ['./question-page.component.css']
})
export class QuestionPageComponent implements OnInit {
  options: RadioOption[]

  constructor() { }

  ngOnInit(): void {
    this.options = [
      { text: 'The Botanical Gardens', selected: false},
      { text: 'The Science Museum', selected: false},
      { text: 'The Olympic Stadium', selected: false}
    ]
  }

}
