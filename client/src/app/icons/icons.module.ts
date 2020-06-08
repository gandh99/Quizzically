import { NgModule } from '@angular/core';

import { FeatherModule } from 'angular-feather';
import {
  Check,
  Codepen,
  Home,
  Globe,
  User,
  Settings,
  Plus,
  Activity,
  Heart,
  ArrowLeft,
  ChevronRight,
  ChevronDown,
  XCircle
} from 'angular-feather/icons';

// Select some icons (use an object, not an array)
const icons = {
  Check,
  Codepen,
  Home,
  Globe,
  User,
  Settings,
  Plus,
  Activity,
  Heart,
  ArrowLeft,
  ChevronRight,
  ChevronDown,
  XCircle
};

@NgModule({
  imports: [
    FeatherModule.pick(icons)
  ],
  exports: [
    FeatherModule
  ]
})
export class IconsModule { }

// NOTES:
// 1. We add FeatherModule to the 'exports', since the <i-feather> component will be used in templates of parent module
// 2. Don't forget to pick some icons using FeatherModule.pick({ ... })