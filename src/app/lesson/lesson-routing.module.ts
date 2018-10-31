import { Routes } from '@angular/router';

import { LessonActivityComponent } from './containers/lesson-activity/lesson-activity.component';
import { LessonIndexComponent } from './containers/lesson-index/lesson-index.component';
import { LessonOverviewComponent } from './containers/lesson-overview/lesson-overview.component';

import { ActivityResolver } from './resolvers/activity.resolver';
import { LessonResolver } from './resolvers/lesson.resolver';


export const routes: Routes = [{
  path: '',
  component: LessonIndexComponent,
  children: [
    {
      path: ':lessonId',
      component: LessonOverviewComponent,
      resolve: {
        lesson: LessonResolver
      },
      children: [
        {
          path: ':activityId',
          component: LessonActivityComponent,
          resolve: {
            activity: ActivityResolver
          },
        },
      ]
    },
  ]
}];
