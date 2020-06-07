import { Component, OnInit } from '@angular/core';
import { PageDisplay } from '../../models/page-display';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  PageDisplay = PageDisplay
  header: string
  currentPage: PageDisplay

  constructor() { }

  ngOnInit(): void {
    this.currentPage = PageDisplay.OVERVIEW
    this.header = PageDisplay[this.currentPage]
  }

  changePage(page: PageDisplay) {
    this.currentPage = page
    this.header = PageDisplay[page]
  }

}
