import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextInputComponent } from './components/text-input/text-input.component';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from './components/button/button.component';
import { FloatingActionButtonComponent } from './components/floating-action-button/floating-action-button.component';
import { IconsModule } from '../icons/icons.module';
import { CardComponent } from './components/card/card.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';



@NgModule({
  declarations: [TextInputComponent, ButtonComponent, FloatingActionButtonComponent, CardComponent, SearchBarComponent],
  imports: [
    CommonModule,
    FormsModule,
    IconsModule
  ],
  exports: [
    TextInputComponent,
    ButtonComponent,
    FloatingActionButtonComponent,
    CardComponent,
    SearchBarComponent
  ]
})
export class ReusableUiModule { }
