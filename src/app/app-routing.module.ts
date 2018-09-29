import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './ui/containers/layout/layout.component';
import { AuthModuleRoutes } from './auth/auth.module';

const routes: Routes = [{
  path: '',
  component: LayoutComponent,
  children: [
    {path: '', pathMatch: 'full', redirectTo: 'lessons'},
    {
      path: 'admin',
      loadChildren: './admin/admin.module#AdminModule',
    },
    {
      path: 'lessons',
      loadChildren: './lesson/lesson.module#LessonModule',
    },
    ...AuthModuleRoutes,
  ],
}];

@NgModule({
  imports: [RouterModule.forRoot(routes, {paramsInheritanceStrategy: 'always'})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
