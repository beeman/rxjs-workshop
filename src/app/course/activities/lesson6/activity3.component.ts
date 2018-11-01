import { Component } from '@angular/core';
import { } from 'rxjs';

@Component({
  template: `
    <app-button label="Trigger throwError" (click)="solution()"></app-button>
    <app-result [result]="{ result: result }"></app-result>
  `,
})
export class Activity3Component {
  public result: any;

  /**
   * Solution for Activity
   */
  solution() {

  }
}
