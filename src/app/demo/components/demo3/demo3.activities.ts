export const lesson = {
  title: 'Draw one a Canvas',
  description: [
    `In this demo we subscribe to the <code>mousemove</code>,  <code>mousedown</code> and  <code>mouseup</code> events.`,
    `Based on these events we draw a line with random colors onto a <code>canvas</code>.`,
  ],
};

export const activity1 = {
  title: 'Activity 1: Draw with your mouse!',
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

