import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { RadioOption } from 'src/app/quiz/models/radio-option';

@Component({
  selector: 'radio-option',
  templateUrl: './radio-option.component.html',
  styleUrls: ['./radio-option.component.scss']
})
export class RadioOptionComponent implements OnInit {
  @Input() option: RadioOption
  @Output() deleteOptionChange = new EventEmitter<RadioOption>()
  @Output() updateOptionChange = new EventEmitter<RadioOption>()

  constructor() { }

  ngOnInit(): void {
  }

  selectOption() {
    this.option.selected = !this.option.selected
    this.onOptionChange()
  }

  deleteOption() {
    this.deleteOptionChange.emit(this.option)
  }

  onOptionChange() {
    this.updateOptionChange.emit(this.option)
  }

}
