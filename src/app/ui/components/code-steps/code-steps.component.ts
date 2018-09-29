import { Component, Input } from '@angular/core';
import { Step } from '../../../sdk/models';

@Component({
  selector: 'app-code-steps',
  templateUrl: './code-steps.component.html',
})
export class CodeStepsComponent {
  @Input() public steps: Step[];
  @Input() public defaultLang = 'ts';
}
