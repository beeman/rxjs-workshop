import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { UiModule } from './ui/ui.module';

const modules = [
  CommonModule,
  RouterModule,
  UiModule,
];

@NgModule({
  imports: [...modules],
  exports: [...modules],
})
export class AppSharedModule {
}
