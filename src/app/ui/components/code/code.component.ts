import { Component, Input } from '@angular/core';

import 'prismjs/components/prism-typescript';

@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styles: []
})
export class CodeComponent {
  @Input() public language = 'ts';
}
