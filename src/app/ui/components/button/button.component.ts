import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  template: `
    <button class="btn btn-primary" (click)="action.emit()">
      {{label}}
    </button>
  `,
})
export class ButtonComponent {
  @Input() public label: string;
  @Output() public action = new EventEmitter();
}
