import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CreateQuizSection } from '../../models/create-quiz-section';

@Component({
  selector: 'app-create-quiz-main',
  templateUrl: './create-quiz-main.component.html',
  styleUrls: ['./create-quiz-main.component.scss']
})
export class CreateQuizMainComponent implements OnInit {
  @Output() createQuiz = new EventEmitter<boolean>()
  CreateQuizSection = CreateQuizSection
  currentSection: CreateQuizSection

  constructor() { }

  ngOnInit(): void {
    this.currentSection = CreateQuizSection.START
  }

  changeSection(createQuizSection: CreateQuizSection) {
    this.currentSection = createQuizSection
  }

  loadCreateQuiz(load: boolean) {
    this.createQuiz.emit(load)
  }

}
