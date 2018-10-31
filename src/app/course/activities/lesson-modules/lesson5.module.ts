import { NgModule } from '@angular/core';

import { AppSharedModule } from '../../../app-shared.module';

import { Activity1Component } from '../lesson5/activity1.component';
import { Activity2Component } from '../lesson5/activity2.component';
import { Activity3Component } from '../lesson5/activity3.component';

const components = [
  Activity1Component,
  Activity2Component,
  Activity3Component,
];


@NgModule({
  imports: [
    AppSharedModule,
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
export class Lesson5Module {}
