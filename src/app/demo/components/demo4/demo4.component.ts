import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import {  } from 'rxjs/operators';

import { activity1, lesson } from './demo4.activities';

@Component({
  selector: 'app-demo4',
  templateUrl: './demo4.component.html',
})
export class Demo4Component implements OnInit {
  public readonly lesson = lesson;
  public readonly activity1 = activity1;

  public result: any;
  public loading = false;

  constructor(private service: DataService) { }

  ngOnInit() { }

  /**
   * Solution for Activity 1
   */
  solution1() {

  }

}
