import { Component, Input } from '@angular/core';

import 'prismjs/components/prism-typescript';

@Component({
  selector: 'app-code',
  template: `
    <app-prism [language]="language">
      <ng-content></ng-content>
    </app-prism>
  `,
})
export class CodeComponent {
  @Input() public language = 'ts';
}
