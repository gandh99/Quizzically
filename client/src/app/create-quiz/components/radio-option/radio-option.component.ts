import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { RadioOption } from 'src/app/quiz/models/radio-option';

@Component({
  selector: 'radio-option',
  templateUrl: './radio-option.component.html',
  styleUrls: ['./radio-option.component.scss']
})
export class RadioOptionComponent implements OnInit {
  @Input() option: RadioOption
  @Output() deleteOption = new EventEmitter<RadioOption>()

  constructor() { }

  ngOnInit(): void {
  }

  deleteRadioOption() {
    this.deleteOption.emit(this.option)
  }

}
