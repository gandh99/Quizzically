import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { GetQuizzesService } from '../../services/get-quizzes.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
  @Output() createQuiz = new EventEmitter<boolean>()

  constructor(private getQuizzesService: GetQuizzesService) { }

  ngOnInit(): void {
    this.getQuizzesService.getQuizzes().subscribe(res => console.log(res))
  }

}
