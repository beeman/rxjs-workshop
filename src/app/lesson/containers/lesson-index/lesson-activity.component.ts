import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LessonService } from '../../services/lesson.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-index',
  template: `
    <app-activity [title]="activity.title"
                  [description]="activity.description"
                  [steps]="activity.steps"
                  [solution]="activity.solution">

      
      
    </app-activity>
  `,
})
export class LessonActivityComponent implements OnInit {
  public activity;
  constructor(
    private route: ActivatedRoute,
    public service: LessonService,
  ) {
  }

  ngOnInit() {
    this.route.data
      .pipe(map(data => data['activity']))
      .subscribe(res => {
        this.activity = res;
      });
  }

}
