import { Component, Input } from '@angular/core';
import { Activity, Lesson } from '../../../types';

@Component({
  selector: 'app-activity',
  template: `
    <div class="card mb-3">
      <div class="card-header">
        <h4 class="my-3">{{ lesson.title }}</h4>
      </div>
      <div class="card-block my-3">
        <div class="btn btn-group">
          <ng-container *ngFor="let la of lesson.activities; let i = index">
            <a class="btn btn-sm"
               [class.btn-info]="!la.isExercise && la.id !== activity.id"
               [class.btn-primary]="la.isExercise && la.id !== activity.id"
               [class.btn-success]="la.id === activity.id"
               [routerLink]="['../', la.id]">
              {{ i }}
            </a>
          </ng-container>
        </div>
      </div>

      <div class="card-header">
        <ng-container *ngIf="!activity.hideSolutionLink">
          <div class="float-right">
            <button (click)="activity.showSolution = !activity.showSolution" class="btn btn-link text-dark">
              <i class="fa fa-question"></i>
            </button>
          </div>
        </ng-container>
        <div class="my-2">
          <span *ngIf="activity.isExercise" class="badge badge-primary mr-2">
            Exercise
          </span>
          {{ activity.title }}
        </div>
      </div>

      <ng-container *ngIf="activity.description.length">
        <div class="card-body">
          <div *ngFor="let item of activity.description">
            <p class="my-3" [innerHTML]="item"></p>
          </div>
        </div>
      </ng-container>

      <ng-container *ngIf="activity.showSolution">
        <div class="card-header bg-danger">Solution</div>
        <div class="card-body">
          <app-code>{{ activity.solution }}</app-code>
        </div>
      </ng-container>

      <ng-container *ngIf="activity.steps">
        <div class="card-header">Steps</div>
        <div class="card-body">
          <app-code-steps [steps]="activity.steps"></app-code-steps>
        </div>
      </ng-container>

      <ng-container *ngIf="!activity.hideResult">
        <div class="card-header">Result</div>
        <div class="card-body">
          <ng-content></ng-content>
        </div>
      </ng-container>
    </div>
  `,
})
export class ActivityComponent {
  @Input() public activity: Activity;
  @Input() public lesson: Lesson;
}
