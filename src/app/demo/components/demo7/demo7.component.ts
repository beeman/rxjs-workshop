import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, fromEvent, Subject } from 'rxjs';

@Component({
  selector: 'app-demo8',
  templateUrl: './demo7.component.html',
})
export class Demo7Component implements OnInit {

  public activity1Subject = new Subject();
  public activity2Subject = new BehaviorSubject({ count: 1 });

  ngOnInit() {
    this.solution1();
  }

  solution1() {
    fromEvent(document, 'mousemove')
      .subscribe({
        next: (res: MouseEvent) => {
          const { clientX, clientY } = res;

          this.activity1Subject.next({ clientX, clientY });
        }
      });
  }
}
