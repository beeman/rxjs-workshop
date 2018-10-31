import { Component } from '@angular/core';

@Component({
  template: `
    <app-button label="Trigger from" (click)="solution()"></app-button>

    <pre>{{ result }}</pre>
  `,
})
export class Activity2Component {
  public result: any;

  /**
   * Solution for Activity
   */
  solution() {

  }
}
