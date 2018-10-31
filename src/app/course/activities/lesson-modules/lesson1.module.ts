import { NgModule } from '@angular/core';

import { AppSharedModule } from '../../../app-shared.module';

import { Activity1Component } from '../lesson1/activity1.component';
import { Activity2Component } from '../lesson1/activity2.component';
import { Activity3Component } from '../lesson1/activity3.component';
import { Activity4Component } from '../lesson1/activity4.component';

const components = [
  Activity1Component,
  Activity2Component,
  Activity3Component,
  Activity4Component,
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
export class Lesson1Module {}
