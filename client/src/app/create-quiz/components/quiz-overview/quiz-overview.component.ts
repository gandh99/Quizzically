import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { QuizOverview } from '../../models/quiz-overview';

@Component({
  selector: 'quiz-overview',
  templateUrl: './quiz-overview.component.html',
  styleUrls: ['./quiz-overview.component.scss']
})
export class QuizOverviewComponent implements OnInit {
  @Input() quizOverview: QuizOverview
  @Output() quizOverviewChange = new EventEmitter<QuizOverview>()
  showBody: boolean

  constructor() { }

  ngOnInit(): void {
    this.showBody = true
  }

  toggleShowBody() {
    this.showBody = !this.showBody
  }

  onQuizOverviewChange() {
    this.quizOverviewChange.emit(this.quizOverview)
  }

}
