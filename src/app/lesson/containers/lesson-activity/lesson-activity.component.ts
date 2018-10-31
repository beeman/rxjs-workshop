import { Component, ComponentFactory, ComponentFactoryResolver, ComponentRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, tap } from 'rxjs/operators';

import { LessonService } from '../../services/lesson.service';
import { Activity } from '../../../types';

@Component({
  selector: 'app-index',
  template: `
    <app-activity [title]="activity.title"
                  [description]="activity.description"
                  [steps]="activity.steps"
                  [solution]="activity.solution">

      <ng-container>

        <div class="card-header">Result</div>
        <div class="card-body">
          <template #activityContainer></template>
        </div>
      </ng-container>

    </app-activity>
  `,
})
export class LessonActivityComponent implements OnInit {
  @ViewChild('activityContainer', { read: ViewContainerRef }) container;

  public activity: Activity;
  public componentRef: ComponentRef<any>;

  constructor(
    private resolver: ComponentFactoryResolver,
    private route: ActivatedRoute,
    public service: LessonService,
  ) {
  }

  ngOnInit() {
    this.route.data
      .pipe(
        map(data => data['activity']),
        tap(activity => this.activity = activity),
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
