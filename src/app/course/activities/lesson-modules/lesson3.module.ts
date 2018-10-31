import { NgModule } from '@angular/core';

import { AppSharedModule } from '../../../app-shared.module';

import { Activity1Component } from '../lesson3/activity1.component';

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
