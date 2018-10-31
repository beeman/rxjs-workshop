import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-result',
  template: `
    <div class="mt-5">
      <pre>{{ result | json }}</pre>
    </div>
  `,
})
export class ResultComponent {
  @Input() public result: any;
}
