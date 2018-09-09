import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';

const lessonLink = (url: string, label: string, children?: any[]) => ({
  url,
  label,
  children
});

const activityLink = (url: string, label: string) => ({
  url,
  label,
});

const links = [
  lessonLink('introduction', 'Introduction', []),
  lessonLink('handling-events', 'Handling events', []),
  lessonLink('lesson2', 'Transform streams', [
    activityLink('introduction', 'Introduction'),
    activityLink('activity1', 'Activity 1'),
    activityLink('activity2', 'Activity 2'),
    activityLink('activity3', 'Activity 3'),
    activityLink('activity4', 'Activity 4'),
    activityLink('activity5', 'Activity 5'),
    activityLink('activity6', 'Activity 6'),
  ]),
  lessonLink('draw-canvas', 'Draw on a canvas', []),
  lessonLink('network-request', 'Network Request', []),
  lessonLink('text-input', 'Text Input', []),
  lessonLink('creating-observables', 'Creating Observables', []),
  lessonLink('subjects', 'Subjects', []),
];


@Injectable({providedIn: 'root'})
export class LinksResolver implements Resolve<any> {

  public resolve(route: ActivatedRouteSnapshot) {
    return of(links);
  }

}
