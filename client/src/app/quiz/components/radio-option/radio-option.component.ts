import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { RadioOption } from '../../models/radio-option';

@Component({
  selector: 'app-radio-option',
  templateUrl: './radio-option.component.html',
  styleUrls: ['./radio-option.component.scss']
})
export class RadioOptionComponent implements OnInit {
  @Input() options: RadioOption[]
  @Output() selectedOption = new EventEmitter<RadioOption>()

  constructor() { }

  ngOnInit(): void {
  }

  selectOption(selectedOption: RadioOption) {
    this.options = this.options.map((option: RadioOption) => {
      option.selected = (option.id === selectedOption.id) ? true : false
      return option
    })
    this.selectedOption.emit(selectedOption)
  }

}
