import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExploreComponent } from './components/explore/explore.component';
import { IconsModule } from '../icons/icons.module';
import { ReusableUiModule } from '../reusable-ui/reusable-ui.module';



@NgModule({
  declarations: [ExploreComponent],
  imports: [
    CommonModule,
    IconsModule,
    ReusableUiModule
  ],
  exports: [
    ExploreComponent
  ]
})
export class ExploreModule { }
