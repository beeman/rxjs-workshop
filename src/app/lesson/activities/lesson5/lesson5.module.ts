import { NgModule } from '@angular/core';

import { AppSharedModule } from '../../../app-shared.module';

import { Activity1Component } from './activity1.component';
import { Activity2Component } from './activity2.component';
import { Activity3Component } from './activity3.component';

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
