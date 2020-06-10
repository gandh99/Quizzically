import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'custom-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() buttonText: string
  @Input() variant: string
  @Output() buttonClick = new EventEmitter<any>()

  constructor() { }

  ngOnInit(): void {
  }

}
