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
  isSelected: boolean

  constructor() { }

  ngOnInit(): void {
    this.isSelected = this.option.selected
  }

  selectRadioOption() {
    this.option.selected = !this.option.selected
    this.isSelected = !this.isSelected
  }

  deleteRadioOption() {
    this.deleteOption.emit(this.option)
  }

}
