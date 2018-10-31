import { Resolve } from '@angular/router';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';

import { LessonService } from '../services/lesson.service';

@Injectable({providedIn: 'root'})
export class ActivitiesResolver implements Resolve<any> {
  constructor(private service: LessonService) {}

  public resolve() {
    return of(this.service.lessons);
  }
}
