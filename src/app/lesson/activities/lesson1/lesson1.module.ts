import { NgModule } from '@angular/core';

import { Activity1Component } from './activity1.component';
import { Activity2Component } from './activity2.component';
import { Activity3Component } from './activity3.component';
import { Activity4Component } from './activity4.component';

const components = [
  Activity1Component,
  Activity2Component,
  Activity3Component,
  Activity4Component,
];

@NgModule({
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
