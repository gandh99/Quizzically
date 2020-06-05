import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button'
import { MatRadioModule } from '@angular/material/radio';
import { IconsModule } from './icons/icons.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { QuestionPageComponent } from './components/question-page/question-page.component';
import { RadioOptionComponent } from './components/radio-option/radio-option.component';
import { QuestionCounterComponent } from './components/question-counter/question-counter.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionPageComponent,
    RadioOptionComponent,
    QuestionCounterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatRadioModule,
    IconsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
