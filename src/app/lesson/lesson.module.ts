import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppSharedModule } from '../app-shared.module';

import { routes } from './lesson-routing.module';

import { LessonActivityComponent } from './containers/lesson-activity/lesson-activity.component';
import { LessonIndexComponent } from './containers/lesson-index/lesson-index.component';
import { LessonOverviewComponent } from './containers/lesson-overview/lesson-overview.component';

import { Lesson2Module } from './activities/lesson2/lesson2.module';

@NgModule({
  imports: [
    AppSharedModule,
    Lesson2Module,
    RouterModule.forChild(routes),
  ],
  declarations: [
    LessonActivityComponent,
    LessonIndexComponent,
    LessonOverviewComponent,
  ]
})
export class LessonModule {}
