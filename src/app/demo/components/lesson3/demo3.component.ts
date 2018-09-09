import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';
import { switchMap, takeUntil } from 'rxjs/operators';
import { CanvasComponent } from '../../../ui/components/canvas/canvas.component';
import { activity1, lesson } from './demo3.activities';

@Component({
  selector: 'app-demo3',
  templateUrl: './demo3.component.html',
})
export class Demo3Component implements AfterViewInit {
  public readonly lesson = lesson;
  public readonly activity1 = activity1;

  // Reference to the Canvas
  @ViewChild('canvas') canvas: CanvasComponent;

  // Canvas Observables
  private move$: Observable<Event>;
  private down$: Observable<Event>;
  private up$: Observable<Event>;

  // We need to run the solutions in ngAfterViewInit to make sure the canvas is properly initialized.
  ngAfterViewInit() {
    this.solution1();
  }

  /**
   * Solution for Activity 1
   *
   */
  solution1() {
    this.move$ = fromEvent(this.canvas.element, 'mousemove');
    this.down$ = fromEvent(this.canvas.element, 'mousedown');
    this.up$ = fromEvent(this.canvas.element, 'mouseup');

    const paints$ = this.down$
      .pipe(
        switchMap(() => this.move$
          .pipe(takeUntil(this.up$)))
      );

    paints$.subscribe((event: MouseEvent) => this.canvas.paintCanvas(event));
  }
}
