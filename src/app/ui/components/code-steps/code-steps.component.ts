import { Component, Input } from '@angular/core';

interface Step {
  step: string;
  code: string;
  lang?: string;
}

@Component({
  selector: 'app-code-steps',
  templateUrl: './code-steps.component.html',
})
export class CodeStepsComponent {
  @Input() public steps: Step[];
  @Input() public defaultLang = 'ts';
}
