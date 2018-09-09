import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
})
export class ResultComponent {
  @Input() public result: any;
}
