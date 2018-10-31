import { Activity, Lesson } from '../../../types';

import { Activity1Component } from '../lesson2/activity1.component';
import { Activity2Component } from '../lesson2/activity2.component';
import { Activity3Component } from '../lesson2/activity3.component';
import { Activity4Component } from '../lesson2/activity4.component';
import { Activity5Component } from '../lesson2/activity5.component';
import { Activity6Component } from '../lesson2/activity6.component';

const introduction: Activity = {
  id: 'overview',
  title: 'Overview',
  description: [
    `In this lesson all the buttons listen to the click event using the <code>fromEvent</code> Observable.`,
    `While it's generally considered a good practice, we won't bother with unsubscribing the observables.`,
    `On each click we increase the counter for that button.`,
    `The <code>pipe()</code> method can be used to transform the stream of events.`,
    `It passes the events through the provided operators and can be used to do things like filtering or modifying the events.`,
  ],
  hideResult: true,
  hideSolutionLink: true,
};

const activity1: Activity = {
  id: 'activity1',
  component: Activity1Component,
  title: '1: Subscription only',
  description: [
    `Subscribe to the button clicks without transforming the stream. (Without using the <code>pipe()</code> method.)`
  ],
  solution: `this.button$.subscribe(
  () => this.buttonCounter++,
);
`,
  steps: [
    {
      step: `Call the <code>subscribe()</code> method on <code>this.button$</code>.`,
      code: `this.button$.subscribe();`,
    },
    {
      step: `Increase the value of the <code>buttonCounter</code> property`,
      code: `() =>  this.buttonCounter++`,
    },
    {
      step: `The complete method should look like this`,
      code: `this.button$.subscribe(
  () => this.buttonCounter++,
);`,
    },
  ],
};

const activity2: Activity = {
  id: 'activity2',
  component: Activity2Component,
  title: '2: Throttle events',
  description: [
    `The <code>throttleTime</code> operator limits the number of events that get emitted in the specified time, emitting the latest value when specified duration has passed.`
  ],
  solution: `this.button$
  .pipe(throttleTime(this.throttleDelay))
  .subscribe(() => this.buttonCounter++);`,
  steps: [
    {
      step: `Import <code>throttleTime</code> from <code>rxjs/operators</code>.`,
      code: `import { throttleTime } from 'rxjs/operators';`,
    },
    {
      step: `Call the <code>pipe()</code> method on <code>this.button$</code>.`,
      code: `this.button$.pipe()`,
    },
    {
      step: `Add the <code>throttleTime()</code> to the <code>pipe()</code> method and pass in the <code>throttleDelay</code> variable (already set to 1s).`,
      code: `this.button$.pipe(throttleTime(this.throttleDelay))`,
    },
    {
      step: `Chain the <code>subscribe()</code> method on <code>pipe()</code> method.`,
      code: `.subscribe();`,
    },
    {
      step: `Increase the counter for this button in the subcription callback function`,
      code: `.subscribe(() => this.buttonCounter++);`,
    },
  ],
};

const activity3: Activity = {
  id: 'activity3',
  component: Activity3Component,
  title: '3: Debounce the events.',
  description: [
    `The <code>debounceTime</code> operator sets the specified time it waits between events before emitting the event.`
  ],
  solution: `this.button$
  .pipe(debounceTime(this.debounceDelay))
  .subscribe(() => this.buttonCounter++);
`,
  steps: [
    {
      step: `Import <code>debounceTime</code> from <code>rxjs/operators</code>.`,
      code: `import { debounceTime } from 'rxjs/operators';`,
    },
    {
      step: `Call the <code>pipe()</code> method on <code>this.button$</code>.`,
      code: `this.button$.pipe()`,
    },
    {
      step: `Add the <code>debounceTime()</code> to the <code>pipe()</code> method and pass in the <code>debounceDelay</code> (already set to 500ms).`,
      code: `this.button$.pipe(debounceTime(this.debounceDelay))`,
    },
    {
      step: `Chain the <code>subscribe()</code> method and increase the counter for this button`,
      code: `.subscribe(() => this.buttonCounter++);`,
    },
  ],
};

const activity4: Activity = {
  id: 'activity4',
  component: Activity4Component,
  title: '4: Modify the event result.',
  description: [
    `The <code>map</code> operator can modify the result of the stream.`,
    `We can use it to send another value to the stream, we will send the value of <code>multiplyAmount</code> (set to 3).`,
  ],
  solution: `this.button$
  .pipe(map(() => this.multiplyAmount))
  .subscribe((amount) => this.increaseCounter('button', amount));
`,
  steps: [
    {
      step: `Import <code>map</code> from <code>rxjs/operators</code>.`,
      code: `import { map } from 'rxjs/operators';`,
    },
    {
      step: `Call the <code>pipe()</code> method on <code>this.button$</code>.`,
      code: `this.button$.pipe()`,
    },
    {
      step: `Add the <code>map()</code> to the <code>pipe()</code> method.`,
      code: `this.button$.pipe(map())`,
    },
    {
      step: `Inside the <code>map()</code> function, add a method that returns the <code>multiplyAmount</code>.`,
      code: `map(() => this.multiplyAmount)`,
    },
    {
      step: `Chain the <code>subscribe()</code> method on <code>pipe()</code> method.`,
      code: `.subscribe();`,
    },
    {
      step: `Take the amount returned by the map function and pass it in the <code>increaseCounter()</code> method.`,
      code: `.subscribe((amount) => this.increaseCounter('button', amount));`,
    },
  ],
};


const activity5: Activity = {
  id: 'activity5',
  component: Activity5Component,
  isExercise: true,
  title: '1: Skip a number of events.',
  description: [
    `The <code>skip</code> operator starts emitting after the specified amount.`,
  ],
  solution: `this.button$
  .pipe(skip(this.skipAmount))
  .subscribe(() => this.buttonCounter++);`,
  steps: [
    {
      step: `Import <code>skip</code> from <code>rxjs/operators</code>.`,
      code: `import { skip } from 'rxjs/operators';`,
    },
    {
      step: `Call the <code>pipe()</code> method on <code>this.button$</code>.`,
      code: `this.button$.pipe()`,
    },
    {
      step: `Add the <code>skip()</code> to the <code>pipe()</code> method and pass in the <code>skipAmount</code> (set to 5).`,
      code: `this.button$.pipe(skip(this.skipAmount))`,
    },
    {
      step: `Chain the <code>subscribe()</code> method and increase the counter for this button`,
      code: `.subscribe(() => this.buttonCounter++);`,
    },
  ],
};

const activity6: Activity = {
  id: 'activity6',
  component: Activity6Component,
  isExercise: true,
  title: '2: Stop after a number of events',
  description: [
    `The <code>takeUntil</code> operator limits the number of events that will be emitted.`,
    `In order to do this we will use a <code>Subject()</code>, something we will discuss later.`,
    `You can see it as an Observable that we can send values to by calling the <code>next()</code> method on it, with an optional parameter.`,
    `In this case we will use it to trigger when the stream should stop emitting.`,
  ],
  solution: `const buttonStop = new Subject();
this.button$
  .pipe(takeUntil(buttonStop))
  .subscribe(() => {
    if (this.result + 1 === this.takeUntilAmount) {
      buttonStop.next();
    }
    this.increaseCounter('button');
  });
`,
  steps: [
    {
      step: `Import <code>takeUntil</code> from <code>rxjs/operators</code>.`,
      code: `import { takeUntil } from 'rxjs/operators';`,
    },
    {
      step: `Create a new <code>Subject</code> and assign it to a constant named <code>buttonStop</code>.`,
      code: `const buttonStop = new Subject();`,
    },
    {
      step: `Call the <code>pipe()</code> method on <code>this.button$</code>.`,
      code: `this.button$.pipe()`,
    },
    {
      step: `Add the <code>takeUntil()</code> to the <code>pipe()</code> method.`,
      code: `this.button$.pipe(takeUntil())`,
    },
    {
      step: `Pass the subject we just created <code>buttonStop</code> in the <code>takeUntil</code> method.`,
      code: `this.button$.pipe(takeUntil(buttonStop))`,
    },
    {
      step: `Chain the <code>subscribe()</code> method on the <code>pipe()</code> method and create a function body.`,
      code: `.subscribe(() => {});`,
    },
    {
      step: `Add an if-statement to determine when to trigger the stop.`,
      code: `() => {
  if (this.counters.button + 1 === this.takeUntilAmount) { }
}`,
    },
    {
      step: `Invoke the <code>next()</code> method on the <code>Subject</code> if we need to stop.`,
      code: `() => {
  if (this.result + 1 === this.takeUntilAmount) {
    buttonStop.next();
  }
}`,
    },
    {
      step: `Lastly, update the counter.`,
      code: `() => {
  if (this.result + 1 === this.takeUntilAmount) {
    buttonStop.next();
  }
  this.increaseCounter('button');
}`,
    },
  ],
};


export const lesson2: Lesson = {
  id: 'lesson2',
  title: '2: Transforming streams',
  activities: [
    introduction,
    activity1,
    activity2,
    activity3,
    activity4,
    activity5,
    activity6,
  ],
};
