import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverviewComponent } from './components/overview/overview.component';
import { IconsModule } from '../icons/icons.module';



@NgModule({
  declarations: [OverviewComponent],
  imports: [
    CommonModule,
    IconsModule
  ],
  exports: [
    OverviewComponent,
  ]
})
export class OverviewModule { }
