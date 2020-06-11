import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'custom-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss']
})
export class TextInputComponent implements OnInit {
  @Input() type: string
  @Input() placeholder: string
  @Input() value: string
  @Output() valueChange = new EventEmitter<string>()

  constructor() { }

  ngOnInit(): void {
  }

}
