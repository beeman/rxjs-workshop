import { NgModule } from '@angular/core';

import { AppSharedModule } from '../app-shared.module';

import { DemoRoutingModule } from './demo-routing.module';

import { Lesson2Module } from './lesson2/lesson2.module';

import { Demo0Component } from './components/lesson0/demo0.component';
import { Demo1Component } from './components/lesson1/demo1.component';
import { Demo3Component } from './components/lesson3/demo3.component';
import { Demo4Component } from './components/lesson4/demo4.component';
import { Demo5Component } from './components/lesson5/demo5.component';
import { Demo6Component } from './components/lesson6/demo6.component';
import { Demo7Component } from './components/lesson7/demo7.component';
import { Demo8Component } from './components/lesson8/demo8.component';


@NgModule({
  imports: [
    AppSharedModule,
    Lesson2Module,
    DemoRoutingModule
  ],
  declarations: [
    Demo0Component,
    Demo1Component,
    Demo3Component,
    Demo4Component,
    Demo5Component,
    Demo6Component,
    Demo7Component,
    Demo8Component,
  ]
})
export class DemoModule {
}
