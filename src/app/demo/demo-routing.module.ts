import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutSidebarComponent } from '../ui/containers/layout-sidebar/layout-sidebar.component';

import { LinksResolver } from './resolvers/links.resolver';

import { Demo0Component } from './components/lesson0/demo0.component';
import { Demo1Component } from './components/lesson1/demo1.component';
import { Demo3Component } from './components/lesson3/demo3.component';
import { Demo4Component } from './components/lesson4/demo4.component';
import { Demo5Component } from './components/lesson5/demo5.component';
import { Demo6Component } from './components/lesson6/demo6.component';
import { Demo7Component } from './components/lesson7/demo7.component';
import { ActivityResolver } from './resolvers/activity.resolver';

const routes: Routes = [{
  path: '',
  component: LayoutSidebarComponent,
  resolve: {
    links: LinksResolver,
    activity: ActivityResolver,
  },
  children: [
    {path: '', pathMatch: 'full', redirectTo: 'introduction'},
    {
      path: 'lesson2',
      loadChildren: './lesson2/lesson2.module#Lesson2Module',
      data: {
        lessonId: 'lesson2',
      },
    },
    {
      path: 'introduction',
      component: Demo0Component,
      data: {
        lessonId: 'introduction',
      },
    },
    {
      path: 'handling-events',
      component: Demo1Component,
      data: {
        lessonId: 'handling-events',
      },
    },
    {
      path: 'draw-canvas',
      component: Demo3Component,
      data: {
        lessonId: 'draw-canvas',
      },
    },
    {
      path: 'network-request',
      component: Demo4Component,
      data: {
        lessonId: 'network-request',
      },
    },
    {
      path: 'text-input',
      component: Demo5Component,
      data: {
        lessonId: 'text-input',
      },
    },
    {
      path: 'creating-observables',
      component: Demo6Component,
      data: {
        lessonId: 'creating-observables',
      },
    },
    {
      path: 'subjects',
      component: Demo7Component,
      data: {
        lessonId: 'subjects',
      },
    },
    // { path: 'extra-exercises', component: Demo8Component },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoRoutingModule {
}
