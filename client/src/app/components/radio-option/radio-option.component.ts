import { Component, OnInit, Input } from '@angular/core';
import { RadioOption } from 'src/app/models/radio-option';

@Component({
  selector: 'app-radio-option',
  templateUrl: './radio-option.component.html',
  styleUrls: ['./radio-option.component.css']
})
export class RadioOptionComponent implements OnInit {
  @Input() options: RadioOption

  constructor() { }

  ngOnInit(): void {
  }

}
