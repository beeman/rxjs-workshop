import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { UiModule } from './ui/ui.module';

const modules = [
  CommonModule,
  UiModule,
];

@NgModule({
  imports: [...modules],
  exports: [...modules],
})
export class AppSharedModule {
}
