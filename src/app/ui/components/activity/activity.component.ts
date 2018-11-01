import { Component, Input } from '@angular/core';
import { Activity, Lesson } from '../../../types';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
})
export class ActivityComponent {
  @Input() public activity: Activity;
  @Input() public lesson: Lesson;
}
