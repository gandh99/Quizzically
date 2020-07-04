import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { GetQuizService } from '../../services/get-quiz.service';
import { QuizWrapper } from 'src/app/create-quiz/models/quiz-wrapper';

@Component({
  selector: 'app-quiz-start',
  templateUrl: './quiz-start.component.html',
  styleUrls: ['./quiz-start.component.scss']
})
export class QuizStartComponent implements OnInit {
  @Output() quizWrapper = new EventEmitter<QuizWrapper>()
  quizCode: string

  constructor(private getQuizService: GetQuizService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.getQuizService.getQuiz(this.quizCode).subscribe((res: QuizWrapper) => this.quizWrapper.emit(res))
  }

}
