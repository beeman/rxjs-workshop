import { Component } from '@angular/core';
import { activity1, activity2, activity3, activity4, activity5, lesson } from './demo6.activities';

@Component({
  selector: 'app-demo7',
  templateUrl: './demo6.component.html',
})
export class Demo6Component {
  public readonly lesson = lesson;
  public readonly activity1 = activity1;
  public readonly activity2 = activity2;
  public readonly activity3 = activity3;
  public readonly activity4 = activity4;
  public readonly activity5 = activity5;

  public result1: any;
  public result2: any;
  public result3: any;
  public result4: any;
  public result5: any;

  /**
   * Solution for Activity 1
   */
  solution1() {

  }

  /**
   * Solution for Activity 2
   */
  solution2() {

  }

  /**
   * Solution for Activity 3
   */
  solution3() {

  }

  /**
   * Solution for Activity 4
   */
  solution4() {

  }


  /**
   * Solution for Activity 5
   */
  solution5() {

  }

}
