import { Component, OnInit } from '@angular/core';
import { Question } from '../models/question';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {
  questions: Question[]

  constructor() { }

  ngOnInit(): void {
    this.questions = [
      {
        question: 'What attraction in Montreal is one of the largest in the world?',
        options: [
          { id: 1, text: 'The Botanical Gardens', selected: false },
          { id: 2, text: 'The Science Museum', selected: false },
          { id: 3, text: 'The Olympic Stadium', selected: false }
        ],
        correctOption: { id: 1, text: 'The Botanical Gardens', selected: false }
      }
    ]
  }

}
