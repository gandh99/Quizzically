import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CreateQuizSection } from '../../models/create-quiz-section';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Output() quizSection = new EventEmitter<CreateQuizSection>()
  CreateQuizSection = CreateQuizSection
  selectedSection: CreateQuizSection

  constructor() { }

  ngOnInit(): void {
    this.selectedSection = CreateQuizSection.START
  }

  selectSection(createQuizSection: CreateQuizSection) {
    this.selectedSection = createQuizSection
    this.quizSection.emit(createQuizSection)
  }

}
