import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { routes } from './app-routing.module';
import { AppSharedModule } from './app-shared.module';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    AppSharedModule,
    HttpClientModule,
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
