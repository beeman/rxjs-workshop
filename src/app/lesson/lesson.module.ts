import { NgModule } from '@angular/core';

import { AppSharedModule } from '../app-shared.module';

import { LessonRoutingModule } from './lesson-routing.module';
import { LessonActivityComponent } from './containers/lesson-index/lesson-activity.component';
import { LessonIndexComponent } from './containers/lesson-index/lesson-index.component';
import { LessonOverviewComponent } from './containers/lesson-index/lesson-overview.component';

@NgModule({
  imports: [
    AppSharedModule,
    LessonRoutingModule
  ],
  declarations: [
    LessonActivityComponent,
    LessonIndexComponent,
    LessonOverviewComponent,
  ]
})
export class LessonModule {}
