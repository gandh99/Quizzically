import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-results-page',
  templateUrl: './results-page.component.html',
  styleUrls: ['./results-page.component.scss']
})
export class ResultsPageComponent implements OnInit {
  @Input() score: number
  
  constructor() { }

  ngOnInit(): void {
  }

}
