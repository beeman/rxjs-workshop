import { Routes } from '@angular/router';
import { LayoutComponent } from './ui/containers/layout/layout.component';

export const routes: Routes = [{
  path: '',
  component: LayoutComponent,
  children: [
    { path: '', pathMatch: 'full', redirectTo: 'lessons' },
    {
      path: 'lessons',
      loadChildren: './lesson/lesson.module#LessonModule',
    },
  ],
}];
