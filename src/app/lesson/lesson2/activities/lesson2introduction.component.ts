import { Component, OnInit } from '@angular/core';
import { data } from '../../../../data';

@Component({
  template: `
    <app-activity [title]="activity.title"
                  [description]="activity.description"
                  [showSolution]="false"
                  [showResult]="false">
    </app-activity>
  `,
})
export class Lesson2introductionComponent implements OnInit {
  public readonly activity = data.lesson2.introduction;

  ngOnInit() {}
}
