import { Routes } from '@angular/router';

import { LessonIndexComponent } from './containers/lesson-index/lesson-index.component';

import { ActivityResolver } from './resolvers/activity.resolver';
import { LessonResolver } from './resolvers/lesson.resolver';

export const routes: Routes = [
  {
    path: '', pathMatch: 'full', redirectTo: 'lesson1'
  },
  {
    path: ':lessonId',
    resolve: {
      lesson: LessonResolver
    },
    children: [
      {
        path: '', pathMatch: 'full', redirectTo: 'overview'
      },
      {
        path: ':activityId',
        component: LessonIndexComponent,
        resolve: {
          activity: ActivityResolver
        },
      },
    ]
  }
];
