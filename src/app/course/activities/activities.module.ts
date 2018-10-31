import { NgModule } from '@angular/core';
import { Lesson1Module } from './lesson-modules/lesson1.module';
import { Lesson6Module } from './lesson-modules/lesson6.module';
import { Lesson5Module } from './lesson-modules/lesson5.module';
import { Lesson4Module } from './lesson-modules/lesson4.module';
import { Lesson3Module } from './lesson-modules/lesson3.module';
import { Lesson2Module } from './lesson-modules/lesson2.module';

@NgModule({
  imports: [
    Lesson1Module,
    Lesson2Module,
    Lesson3Module,
    Lesson4Module,
    Lesson5Module,
    Lesson6Module,
  ],
})
export class ActivitiesModule {}
