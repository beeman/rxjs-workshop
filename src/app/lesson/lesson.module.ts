import { NgModule } from '@angular/core';

import { AppSharedModule } from '../app-shared.module';

import { LessonRoutingModule } from './lesson-routing.module';

@NgModule({
  imports: [
    AppSharedModule,
    LessonRoutingModule
  ],
  declarations: []
})
export class LessonModule {}
