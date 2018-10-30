import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LessonService } from '../../services/lesson.service';
import { lessonSidebar } from '../../activities';

@Component({
  selector: 'app-index',
  template: `
    <app-layout-sidebar [links]="links">
      
      <router-outlet></router-outlet>

    </app-layout-sidebar>
  `,
})
export class LessonIndexComponent implements OnInit {
  links = lessonSidebar;
  lessons = [];

  constructor(
    private route: ActivatedRoute,
    public service: LessonService,
  ) {
  }

  ngOnInit() {
    this.route.params
      .subscribe(res => {
        console.log('', res);
      });

    // window.s = this.service;
  }

}
