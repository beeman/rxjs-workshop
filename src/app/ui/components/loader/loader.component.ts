import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-loader',
  template: `
    <div class="text-center" *ngIf="show">
      <i class="text-danger fa fa-spinner fa-spin fa-5x my-5"></i>
    </div>
  `,
})
export class LoaderComponent {
  @Input() show: boolean;
}
