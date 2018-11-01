import { Component, Input } from '@angular/core';
import { Activity } from '../../../types';

@Component({
  selector: 'app-activity-selector',
  template: `
    <div class="btn btn-group">
      <ng-container *ngFor="let la of activities; let i = index">
        <a class="btn btn-sm"
           [class.btn-info]="!la.isExercise && la.id !== activity.id"
           [class.btn-primary]="la.isExercise && la.id !== activity.id"
           [class.btn-success]="la.id === activity.id"
           [routerLink]="['../', la.id]">
          {{ i }}
        </a>
      </ng-container>
    </div>
  `,
})
export class ActivitySelectorComponent {
  @Input() public activity: Activity;
  @Input() public activities: Activity[];
}
