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
  description: [
    'In this activity we will subscribe to various mouse events: <code>mousedown</code>, <code>mousemove</code> and <code>mouseup</code>',
    'We will subscribe to these events and pass the result into a canvas in order to draw something pretty 😍',
  ],
  solution: `this.move$ = fromEvent(this.canvas.element, 'mousemove');
this.down$ = fromEvent(this.canvas.element, 'mousedown');
this.up$ = fromEvent(this.canvas.element, 'mouseup');

const paint$ = this.down$
  .pipe(
    switchMap(() => this.move$
      .pipe(
        takeUntil(this.up$)
      )
    )
  );

paint$.subscribe((event: MouseEvent) => this.canvas.paintCanvas(event));
`,
  steps: [
    {
      step: `Assign <code>move$</code>, <code>down$</code> and <code>up$</code> to the related mouse events on <code>canvas.element</code>`,
      code: `this.move$ = fromEvent(this.canvas.element, 'mousemove');
this.down$ = fromEvent(this.canvas.element, 'mousedown');
this.up$ = fromEvent(this.canvas.element, 'mouseup');`,
    },
    {
      step: `With those in place, we create a assign the <code>down$</code> observable to a local constant called <code>paint$</code>, and call the <code>pipe()</code> method on it.`,
      code: `const paint$ = this.down$
  .pipe()`,
    },
    {
      step: `Inside the <code>pipe()</code> method we add the a <code>switchMap()</code>. A switchMap can be used in a pipe to invoke another observable, more on that later.`,
      code: `const paint$ = this.down$
  .pipe(
    switchMap()
  )`,
    },
    {
      step: `Inside the <code>switchMap()</code> method we invoke the <code>move$</code> observable, on which we add a <code>pipe()</code>`,
      code: `const paint$ = this.down$
  .pipe(
    switchMap(() => this.move$
      .pipe(
        takeUntil(this.up$)
      )
    )
  );`,
    },
    {
      step: `Inside the second <code>pipe()</code> method we use the <code>takeUntil()</code> operator and pass in the <code>up$</code> observable.`,
      code: `const paint$ = this.down$
  .pipe(
    switchMap(() => this.move$
      .pipe(
        takeUntil(this.up$)
      )
    )
  );`,
    },
    {
      step: `Lastly, we will subscribe to our <code>paint$</code> observable.`,
      code: `paint$.subscribe();`,
    },
    {
      step: `In the subscription we take receive an event of type <code>MouseEvent</code>, which we pass into our canvas.`,
      code: `paint$.subscribe((event: MouseEvent) => this.canvas.paintCanvas(event));`,
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
