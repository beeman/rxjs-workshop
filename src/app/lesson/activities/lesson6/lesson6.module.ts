import { NgModule } from '@angular/core';

import { AppSharedModule } from '../../../app-shared.module';


import { Activity1Component } from './activity1.component';
import { Activity2Component } from './activity2.component';
import { Activity3Component } from './activity3.component';
import { Activity4Component } from './activity4.component';
import { Activity5Component } from './activity5.component';

const components = [
  Activity1Component,
  Activity2Component,
  Activity3Component,
  Activity4Component,
  Activity5Component,
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
export class Lesson6Module {}
