import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { } from 'rxjs/operators';
import { CanvasComponent } from '../../../ui/components/canvas/canvas.component';

@Component({
  template: `
    <app-canvas #canvas></app-canvas>
  `,
})
export class Activity1Component implements AfterViewInit {
  // Reference to the Canvas
  @ViewChild('canvas') canvas: CanvasComponent;

  // Canvas Observables
  private move$: Observable<Event>;
  private down$: Observable<Event>;
  private up$: Observable<Event>;

  // We need to run the solutions in ngAfterViewInit to make sure the canvas is properly initialized.
  ngAfterViewInit() {
    this.solution();
  }

  /**
   * Solution for Activity
   *
   */
  solution() {

  }
}
