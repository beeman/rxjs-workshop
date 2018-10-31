import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  template: `
    <div class="card mb-3">
      <div class="card-header">{{ title }}</div>
      <div class="card-body">
        <ng-content></ng-content>
      </div>
    </div>
  `,
})
export class CardComponent {
  @Input() public title: string;
}
