import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LessonService } from '../../services/lesson.service';
import { map } from 'rxjs/operators';

@Component({
  template: `
    <div class="card">
      
      <div class="card-body">
        {{ lesson?.title }}
      </div>
    </div>
    
    <router-outlet></router-outlet>
  `,
})
export class LessonOverviewComponent implements OnInit {
  public lesson: any;
  constructor(
    private route: ActivatedRoute,
    public service: LessonService,
  ) {
  }

  ngOnInit() {
    this.route.paramMap
      .subscribe(res => {
        console.log(res)
      })

    this.route.data
      .pipe(map(data => data['lesson']))
      .subscribe(res => {
        console.log('', res);
        this.lesson = res;
      });

    // window.s = this.service;
  }

}
