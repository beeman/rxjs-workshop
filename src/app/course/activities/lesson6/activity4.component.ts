import { Component } from '@angular/core';
import { } from 'rxjs';

@Component({
  template: `
    <app-button label="Trigger empty" (click)="solution()"></app-button>
    <app-result [result]="{ result: result }"></app-result>
  `,
})
export class Activity4Component {
  public result = [];

  /**
   * Solution for Activity
   */
  solution() {

  }
}
