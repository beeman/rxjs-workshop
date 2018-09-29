import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutSidebarComponent } from '../ui/containers/layout-sidebar/layout-sidebar.component';

import { LinksResolver } from './resolvers/links.resolver';


const routes: Routes = [{
  path: '',
  component: LayoutSidebarComponent,
  resolve: {
    links: LinksResolver,
  },
  children: [
    {path: '', pathMatch: 'full', redirectTo: 'lesson2'},
    {
      path: 'lesson2',
      loadChildren: './lesson2/lesson2.module#Lesson2Module',
      data: {
        lessonId: 'lesson2',
      },
    },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LessonRoutingModule {
}
