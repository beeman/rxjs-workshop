import { NgModule } from '@angular/core';
import { Lesson1Module } from './lesson1/lesson1.module';
import { Lesson6Module } from './lesson6/lesson6.module';
import { Lesson5Module } from './lesson5/lesson5.module';
import { Lesson4Module } from './lesson4/lesson4.module';
import { Lesson3Module } from './lesson3/lesson3.module';
import { Lesson2Module } from './lesson2/lesson2.module';

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
