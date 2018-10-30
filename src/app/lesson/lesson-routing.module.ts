import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LessonIndexComponent } from './containers/lesson-index/lesson-index.component';
import { LessonOverviewComponent } from './containers/lesson-index/lesson-overview.component';
import { LessonActivityComponent } from './containers/lesson-index/lesson-activity.component';
import { ActivityResolver } from './resolvers/activity.resolver';
import { LessonResolver } from './resolvers/lesson.resolver';


const routes: Routes = [{
  path: '',
  children: [
    {
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
    },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LessonRoutingModule {
}
