import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PageDisplay } from '../../models/page-display';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Output() navItem = new EventEmitter<PageDisplay>()
  PageDisplay = PageDisplay
  selectedPage: PageDisplay

  constructor() { }

  ngOnInit(): void {
    this.selectedPage = PageDisplay.OVERVIEW
  }

  selectPage(page: PageDisplay) {
    this.selectedPage = page
    this.navItem.emit(page)
  }

}
