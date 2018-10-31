import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';

import { LessonService } from '../services/lesson.service';

@Injectable({providedIn: 'root'})
export class LessonResolver implements Resolve<any> {
  constructor(private service: LessonService) {}

  public resolve(route: ActivatedRouteSnapshot) {
    const {lessonId } = route.params;

    return of(this.service.findLesson(lessonId));
  }
}
