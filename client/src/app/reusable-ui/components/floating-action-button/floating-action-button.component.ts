import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'custom-floating-action-button',
  templateUrl: './floating-action-button.component.html',
  styleUrls: ['./floating-action-button.component.scss']
})
export class FloatingActionButtonComponent implements OnInit {
  @Input() iconName: string
  @Output() buttonClick = new EventEmitter<any>()

  constructor() { }

  ngOnInit(): void {
  }

}
