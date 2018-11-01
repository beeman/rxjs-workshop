import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PrismModule } from '@sgbj/angular-prism';

import 'prismjs/prism';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-scss';
import 'prismjs/components/prism-markup';

import { UiFormModule } from './form/ui-form.module';

import { ActivityComponent } from './components/activity/activity.component';
import { ActivitySelectorComponent } from './components/activity-selector/activity-selector.component';
import { ButtonComponent } from './components/button/button.component';
import { CardComponent } from './components/card/card.component';
import { CodeComponent } from './components/code/code.component';
import { CodeStepsComponent } from './components/code-steps/code-steps.component';
import { CountryCardComponent } from './components/country-card/country-card.component';
import { LayoutComponent } from './containers/layout/layout.component';
import { LayoutSidebarComponent } from './containers/layout-sidebar/layout-sidebar.component';
import { LoaderComponent } from './components/loader/loader.component';
import { PersonCardComponent } from './components/person-card/person-card.component';
import { ResultComponent } from './components/result/result.component';
import { CanvasComponent } from './components/canvas/canvas.component';

@NgModule({
  imports: [
    CommonModule,
    PrismModule,
    RouterModule,
    UiFormModule,
  ],
  declarations: [
    ActivityComponent,
    ActivitySelectorComponent,
    ButtonComponent,
    CardComponent,
    CanvasComponent,
    CodeComponent,
    CodeStepsComponent,
    CountryCardComponent,
    LayoutComponent,
    LayoutSidebarComponent,
    LoaderComponent,
    PersonCardComponent,
    ResultComponent,
  ],
  exports: [
    UiFormModule,
    ActivityComponent,
    ActivitySelectorComponent,
    ButtonComponent,
    CanvasComponent,
    CardComponent,
    CodeComponent,
    CodeStepsComponent,
    LayoutComponent,
    LayoutSidebarComponent,
    CountryCardComponent,
    LoaderComponent,
    PersonCardComponent,
    ResultComponent,
  ],
})
export class UiModule {
}
