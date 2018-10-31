import { Component } from '@angular/core';

@Component({
  template: `
    <app-button label="Trigger throwError" (click)="solution()"></app-button>

    <pre>{{ result }}</pre>
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
