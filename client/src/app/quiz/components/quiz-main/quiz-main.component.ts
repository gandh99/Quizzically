import { Component, OnInit } from '@angular/core';
import { Question } from '../../models/question';

@Component({
  selector: 'app-quiz-main',
  templateUrl: './quiz-main.component.html',
  styleUrls: ['./quiz-main.component.scss']
})

export class QuizMainComponent implements OnInit {
  questions: Question[]
  loadStartPage: boolean
  loadQuestionPage: boolean

  constructor() { }

  ngOnInit(): void {
    this.loadStartPage = true
    this.loadQuestionPage = false

    // Sample questions
    this.questions = [
      {
        question: 'What attraction in Montreal is one of the largest in the world?',
        options: [
          { id: 1, text: 'The Botanical Gardens', selected: false },
          { id: 2, text: 'The Science Museum', selected: false },
          { id: 3, text: 'The Olympic Stadium', selected: false }
        ],
        correctOption: { id: 1, text: 'The Botanical Gardens', selected: false }
      },
      {
        question: 'Ducks are mammals.',
        options: [
          { id: 1, text: 'True', selected: false },
          { id: 2, text: 'False', selected: false },
        ],
        correctOption: { id: 1, text: 'True', selected: false }
      },
    ]
  }

  onStartQuiz(start: boolean) {
    this.loadStartPage = false
    this.loadQuestionPage = true
  }

}
