import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { data } from '../../../data';

@Injectable({providedIn: 'root'})
export class ActivityResolver implements Resolve<any> {

  public resolve(route: ActivatedRouteSnapshot) {
    // Get lesson and activity id's from route data
    const {lessonId, activityId} = route.data;

    // Get the result from the activity source
    // TODO: Fetched from remote API
    const result = (data[lessonId] && data[lessonId][activityId]) || null;

    // Log an error if nothing is found.
    // TODO: use throwError
    if (!result) {
      console.log(`Lesson ${lessonId} or Activity ${activityId} not found!`);
    }
    return of(result);
  }

}
