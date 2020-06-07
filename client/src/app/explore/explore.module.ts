import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExploreComponent } from './components/explore/explore.component';
import { IconsModule } from '../icons/icons.module';



@NgModule({
  declarations: [ExploreComponent],
  imports: [
    CommonModule,
    IconsModule
  ],
  exports: [
    ExploreComponent
  ]
})
export class ExploreModule { }
