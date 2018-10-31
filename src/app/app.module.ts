import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AppSharedModule } from './app-shared.module';

import { LayoutComponent } from './ui/containers/layout/layout.component';

export const routes: Routes = [{
  path: '',
  component: LayoutComponent,
  children: [
    {
      path: '',
      loadChildren: './course/course.module#CourseModule',
    },
  ],
}];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, { paramsInheritanceStrategy: 'always' }),
    AppSharedModule,
    HttpClientModule,
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
