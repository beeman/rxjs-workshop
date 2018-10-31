import { Component } from '@angular/core';

@Component({
  template: `
    <app-button label="Trigger empty" (click)="solution()"></app-button>

    <pre>{{ result }}</pre>
  `,
})
export class Activity4Component {
  public result: any;

  /**
   * Solution for Activity
   */
  solution() {

  }
}
