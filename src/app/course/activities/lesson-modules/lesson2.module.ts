import { NgModule } from '@angular/core';

import { AppSharedModule } from '../../../app-shared.module';

import { Activity1Component } from '../lesson2/activity1.component';
import { Activity2Component } from '../lesson2/activity2.component';
import { Activity3Component } from '../lesson2/activity3.component';
import { Activity4Component } from '../lesson2/activity4.component';
import { Activity5Component } from '../lesson2/activity5.component';
import { Activity6Component } from '../lesson2/activity6.component';

const components = [
  Activity1Component,
  Activity2Component,
  Activity3Component,
  Activity4Component,
  Activity5Component,
  Activity6Component,
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
export class Lesson2Module {
}
