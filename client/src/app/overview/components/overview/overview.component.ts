import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { GetQuizzesService } from '../../services/get-quizzes.service';
import { QuizWrapper } from 'src/app/create-quiz/models/quiz-wrapper';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
  @Output() createQuiz = new EventEmitter<boolean>()
  allQuizWrappers: QuizWrapper[]

  constructor(private getQuizzesService: GetQuizzesService) { }

  ngOnInit(): void {
    this.getQuizzesService.getQuizzes().subscribe((res: QuizWrapper[]) => this.allQuizWrappers = res)
  }

}
