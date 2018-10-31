import { Activity, Lesson } from '../../../types';
import { Activity1Component } from '../lesson3/activity1.component';

const introduction: Activity = {
  id: 'overview',
  title: 'Overview',
  description: [
    `In this lesson we subscribe to the <code>mousemove</code>,  <code>mousedown</code> and  <code>mouseup</code> events.`,
    `Based on these events we draw a line with random colors onto a <code>canvas</code>.`,
  ],
  hideResult: true,
  hideSolutionLink: true,
};

const activity1: Activity = {
  id: 'activity1',
  component: Activity1Component,
  title: '1: Draw with your mouse!',
  description: [],
  solution: `this.move$ = fromEvent(this.canvas.element, 'mousemove');
this.down$ = fromEvent(this.canvas.element, 'mousedown');
this.up$ = fromEvent(this.canvas.element, 'mouseup');

const paints$ = this.down$
  .pipe(
    switchMap(() => this.move$
      .pipe(takeUntil(this.up$)))
  );
`,
  steps: [
    {
      step: `Assign <code>move$</code>, <code>down$</code> and <code>up$</code> to the related mouse events on <code>canvas.element</code>`,
      code: `this.move$ = fromEvent(this.canvas.element, 'mousemove');
this.down$ = fromEvent(this.canvas.element, 'mousedown');
this.up$ = fromEvent(this.canvas.element, 'mouseup');`,
    },
    {
      step: `EXPLAIN Create`,
      code: `const paints$ = this.down$
  .pipe(
    switchMap(() => this.move$
      .pipe(takeUntil(this.up$)))
  );`,
    },
    {
      step: `EXPLAIN Subscribe`,
      code: `paints$.subscribe((event: MouseEvent) => this.canvas.paintCanvas(event));`,
    },
  ],
};


export const lesson3: Lesson = {
  id: 'lesson3',
  title: '3: Drawing on canvas',
  activities: [
    introduction,
    activity1
  ],
};
