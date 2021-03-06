import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.scss']
})
export class ExploreComponent implements OnInit {
  @Output() takeQuiz = new EventEmitter<boolean>()

  constructor() { }

  ngOnInit(): void {
  }

}
