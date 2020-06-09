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
  @Output() setOption = new EventEmitter<RadioOption>()

  constructor() { }

  ngOnInit(): void {
  }

  setText(text: string) {
    this.option.text = text
    this.setRadioOption()
  }

  selectRadioOption() {
    this.option.selected = !this.option.selected
    this.setRadioOption()
  }

  deleteRadioOption() {
    this.deleteOption.emit(this.option)
  }

  setRadioOption() {
    this.setOption.emit(this.option)
  }

}
