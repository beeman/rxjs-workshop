import { Component, ComponentFactory, ComponentFactoryResolver, ComponentRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { tap } from 'rxjs/operators';

import { LessonService } from '../../services/lesson.service';
import { Activity, Lesson } from '../../../types';

@Component({
  selector: 'app-index',
  template: `
    <app-layout-sidebar [links]="links">
      <app-activity [activity]="activity" [lesson]="lesson">
        <template #activityContainer></template>
      </app-activity>
    </app-layout-sidebar>
  `,
})
export class LessonIndexComponent implements OnInit {
  @ViewChild('activityContainer', { read: ViewContainerRef }) container;
  public componentRef: ComponentRef<any>;

  public activity: Activity;
  public lesson: Lesson;
  public links;

  constructor(
    private resolver: ComponentFactoryResolver,
    private route: ActivatedRoute,
    public service: LessonService,
  ) {
    this.links = this.service.lessonSidebar;
  }

  ngOnInit() {
    this.route.data
      .pipe(
        tap(data => {
          this.activity = data['activity'];
          this.lesson = data['lesson'];
        }),
      )
      .subscribe(() => this.createActivity(this.activity));
  }

  createActivity(activity: Activity) {
    this.container.clear();
    if (this.activity.component) {
      const factory: ComponentFactory<any> = this.resolver.resolveComponentFactory(activity.component);
      this.componentRef = this.container.createComponent(factory);
    }
  }
}
