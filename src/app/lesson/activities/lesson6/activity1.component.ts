import { Component } from '@angular/core';

@Component({
  template: `
    <app-button label="Trigger of" (click)="solution()"></app-button>

    <pre>{{ result }}</pre>
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
