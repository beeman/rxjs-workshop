import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppSharedModule } from '../../app-shared.module';

import { Lesson2introductionComponent } from './activities/lesson2introduction.component';
import { Lesson2activity1Component } from './activities/lesson2activity1.component';
import { Lesson2activity2Component } from './activities/lesson2activity2.component';
import { Lesson2activity3Component } from './activities/lesson2activity3.component';
import { Lesson2activity4Component } from './activities/lesson2activity4.component';
import { Lesson2activity5Component } from './activities/lesson2activity5.component';
import { Lesson2activity6Component } from './activities/lesson2activity6.component';
import { ActivityResolver } from '../resolvers/activity.resolver';

const components = [
  Lesson2introductionComponent,
  Lesson2activity1Component,
  Lesson2activity2Component,
  Lesson2activity3Component,
  Lesson2activity4Component,
  Lesson2activity5Component,
  Lesson2activity6Component,
];

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'introduction' },
  {
    path: 'introduction',
    component: Lesson2introductionComponent,
    data: {
      activityId: 'introduction',
    },
    resolve: {
      activity: ActivityResolver,
    }
  },
  {
    path: 'activity1',
    component: Lesson2activity1Component,
    data: {
      activityId: 'activity1',
    },
    resolve: {
      activity: ActivityResolver,
    }
  },
  {
    path: 'activity2',
    component: Lesson2activity2Component,
    data: {
      activityId: 'activity2',
    },
    resolve: {
      activity: ActivityResolver,
    }
  },
  {
    path: 'activity3',
    component: Lesson2activity3Component,
    data: {
      activityId: 'activity3',
    },
    resolve: {
      activity: ActivityResolver,
    }
  },
  {
    path: 'activity4',
    component: Lesson2activity4Component,
    data: {
      activityId: 'activity4',
    },
    resolve: {
      activity: ActivityResolver,
    }
  },
  {
    path: 'activity5',
    component: Lesson2activity5Component,
    data: {
      activityId: 'activity5',
    },
    resolve: {
      activity: ActivityResolver,
    }
  },
  {
    path: 'activity6',
    component: Lesson2activity6Component,
    data: {
      activityId: 'activity6',
    },
    resolve: {
      activity: ActivityResolver,
    }
  },
];

@NgModule({
  imports: [
    AppSharedModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
    ...components,
  ],
  exports: [
    ...components,
  ],
})
export class Lesson2Module {
}
