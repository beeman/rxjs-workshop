import { Component, Input } from '@angular/core';
import { Step } from '../../../types';

@Component({
  selector: 'app-code-steps',
  template: `
    <ng-container *ngFor="let step of steps; let i = index;">
      <div class="mb-4">
        <h5>Step {{i + 1}} </h5>
        <p *ngIf="step.step" class="my-3" [innerHtml]="step.step"></p>
        <app-code *ngIf="step.code" [language]="step.lang || defaultLang">{{ step.code }}</app-code>
      </div>
    </ng-container>
  `,
})
export class CodeStepsComponent {
  @Input() public steps: Step[];
  @Input() public defaultLang = 'ts';
}
