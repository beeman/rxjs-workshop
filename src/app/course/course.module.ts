import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppSharedModule } from '../app-shared.module';

import { routes } from './course-routing.module';

import { LessonIndexComponent } from './containers/lesson-index/lesson-index.component';

import { Lesson1Module } from './activities/lesson-modules/lesson1.module';
import { Lesson2Module } from './activities/lesson-modules/lesson2.module';
import { Lesson3Module } from './activities/lesson-modules/lesson3.module';
import { Lesson4Module } from './activities/lesson-modules/lesson4.module';
import { Lesson5Module } from './activities/lesson-modules/lesson5.module';
import { Lesson6Module } from './activities/lesson-modules/lesson6.module';

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    AppSharedModule,
    Lesson1Module,
    Lesson2Module,
    Lesson3Module,
    Lesson4Module,
    Lesson5Module,
    Lesson6Module,
  ],
  declarations: [
    LessonIndexComponent,
  ]
})
export class CourseModule {}
