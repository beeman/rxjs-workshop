import { Component } from '@angular/core';
import { } from 'rxjs';

@Component({
  template: `
    <app-button label="Trigger of" (click)="solution()"></app-button>
    <app-result [result]="{ result: result }"></app-result>
  `,
})
export class Activity1Component {
  public result: any;

  /**
   * Solution for Activity
   */
  solution() {

  }
}
