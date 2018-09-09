import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styles: []
})
export class ActivityComponent {
  @Input() public description: string[];
  @Input() public title: string;
  @Input() public result: any;
  @Input() public steps: any[];
  @Input() public solution: string;
  @Input() public showContent = true;
  @Input() public showResult = true;
  @Input() public showSolution = false;
  @Input() public showSolutionLink = true;
}
