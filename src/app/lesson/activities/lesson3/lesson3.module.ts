import { NgModule } from '@angular/core';

import { Activity1Component } from './activity1.component';
import { AppSharedModule } from '../../../app-shared.module';

const components = [
  Activity1Component,
];

@NgModule({
  imports: [
    AppSharedModule
  ],
  declarations: [
    ...components,
  ],
  exports: [
    ...components,
  ],
  entryComponents: [
    ...components,
  ],
})
export class Lesson3Module {}
