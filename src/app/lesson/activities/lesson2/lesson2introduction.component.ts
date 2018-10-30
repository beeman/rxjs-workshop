import { Component, Input, OnInit } from '@angular/core';

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
  @Input() public activity;

  ngOnInit() {}
}
