export const lesson = {
  title: 'Transform streams',
  description: [
    `In this demo all the buttons listen to the click event using the <code>fromEvent</code> Observable.`,
    `While it's generally considered a good practice, we won't bother with unsubscribing the observables.`,
    `On each click we increase the counter for that button.`,
    `The <code>pipe()</code> method can be used to transform the stream of events.`,
    `It passes the events through the provided operators and can be used to do things like filtering or modifying the events.`,
  ],
};

export const activity1 = {
  title: 'Activity 1: Subscription only',
  description: [
    `Subscribe to the button clicks without transforming the stream. (Without using the <code>pipe()</code> method.)`
  ],
  solution: `this.button1$.subscribe(
  () => this.increaseCounter('button1'),
);
`,
  steps: [
    {
      step: `Call the <code>subscribe()</code> method on <code>this.button1$</code>.`,
      code: `this.button1$.subscribe();`,
    },
    {
      step: `Take a look to the <code>increaseCounter()</code> method so that you know how it works and then, invoke it in the <code>this.button1$</code> subscription callback.`,
      code: `() => this.increaseCounter()`,
    },
    {
      step: `Pass in the id of the counter you want to increase, <code>button1</code>.`,
      code: `() => this.increaseCounter('button1')`,
    },
  ],
};

export const activity2 = {
  title: 'Activity 2: Throttle clicks with a delay',
  description: [
    `The <code>throttleTime</code> operator limits the number of events that get emitted in the specified time, emitting the latest value when specified duration has passed.`
  ],
  solution: `this.button2$
  .pipe(throttleTime(this.throttleDelay))
  .subscribe(() => this.increaseCounter('button2'));`,
  steps: [
    {
      step: `Import <code>throttleTime</code> from <code>rxjs/operators</code>.`,
      code: `import { throttleTime } from 'rxjs/operators';`,
    },
    {
      step: `Call the <code>pipe()</code> method on <code>this.button2$</code>.`,
      code: `this.button2$.pipe()`,
    },
    {
      step: `Add the <code>throttleTime()</code> to the <code>pipe()</code> method and pass in the <code>throttleDelay</code> variable (already set to 1s).`,
      code: `this.button2$.pipe(throttleTime(this.throttleDelay))`,
    },
    {
      step: `Chain the <code>subscribe()</code> method on <code>pipe()</code> method.`,
      code: `.subscribe();`,
    },
    {
      step: `Increase the counter for this button in the subcription callback function`,
      code: `.subscribe(() => this.increaseCounter('button2'));`,
    },
  ],
};

export const activity3 = {
  title: 'Activity 3: Debounce the clicks with a delay.',
  description: [
    `The <code>debounceTime</code> operator sets the specified time it waits between events before emitting the event.`
  ],
  solution: `this.button3$
  .pipe(debounceTime(this.debounceDelay))
  .subscribe(() => this.increaseCounter('button3'));
`,
  steps: [
    {
      step: `Import <code>debounceTime</code> from <code>rxjs/operators</code>.`,
      code: `import { debounceTime } from 'rxjs/operators';`,
    },
    {
      step: `Call the <code>pipe()</code> method on <code>this.button3$</code>.`,
      code: `this.button3$.pipe()`,
    },
    {
      step: `Add the <code>debounceTime()</code> to the <code>pipe()</code> method and pass in the <code>debounceDelay</code> (already set to 500ms).`,
      code: `this.button3$.pipe(debounceTime(this.debounceDelay))`,
    },
    {
      step: `Chain the <code>subscribe()</code> method and increase the counter for this button`,
      code: `.subscribe(() => this.increaseCounter('button3'));`,
    },
  ],
};

export const activity4 = {
  title: 'Activity 4: Modify the result of the event.',
  description: [
    `The <code>map</code> operator can modify the result of the stream.`,
    `We can use it to send another value to the stream, we will send the value of <code>multiplyAmount</code> (set to 3).`,
  ],
  solution: `this.button4$
  .pipe(map(() => this.multiplyAmount))
  .subscribe((amount) => this.increaseCounter('button4', amount));
`,
  steps: [
    {
      step: `Import <code>map</code> from <code>rxjs/operators</code>.`,
      code: `import { map } from 'rxjs/operators';`,
    },
    {
      step: `Call the <code>pipe()</code> method on <code>this.button4$</code>.`,
      code: `this.button4$.pipe()`,
    },
    {
      step: `Add the <code>map()</code> to the <code>pipe()</code> method.`,
      code: `this.button4$.pipe(map())`,
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
      code: `.subscribe((amount) => this.increaseCounter('button4', amount));`,
    },
  ],
};


export const activity5 = {
  title: 'Exercise 1: Skip the first number of clicks.',
  description: [
    `The <code>skip</code> operator starts emitting after the specified amount.`,
  ],
  solution: `this.button5$
  .pipe(skip(this.skipAmount))
  .subscribe(() => this.increaseCounter('button5'));`,
  steps: [
    {
      step: `Import <code>skip</code> from <code>rxjs/operators</code>.`,
      code: `import { skip } from 'rxjs/operators';`,
    },
    {
      step: `Call the <code>pipe()</code> method on <code>this.button5$</code>.`,
      code: `this.button5$.pipe()`,
    },
    {
      step: `Add the <code>skip()</code> to the <code>pipe()</code> method and pass in the <code>skipAmount</code> (set to 5).`,
      code: `this.button5$.pipe(skip(this.skipAmount))`,
    },
    {
      step: `Chain the <code>subscribe()</code> method and increase the counter for this button`,
      code: `.subscribe(() => this.increaseCounter('button5'));`,
    },
  ],
};

export const activity6 = {
  title: 'Exercise 2: Stop counting after a number of clicks',
  description: [
    `The <code>takeUntil</code> operator limits the number of events that will be emitted.`,
    `In order to do this we will use a <code>Subject()</code>, something we will discuss later.`,
    `You can see it as an Observable that we can send values to by calling the <code>next()</code> method on it, with an optional parameter.`,
    `In this case we will use it to trigger when the stream should stop emitting.`,
  ],
  solution: `const button6stop = new Subject();
this.button6$
  .pipe(takeUntil(button6stop))
  .subscribe(() => {
    if (this.result6 + 1 === this.takeUntilAmount) {
      button6stop.next();
    }
    this.increaseCounter('button6');
  });
`,
  steps: [
    {
      step: `Import <code>takeUntil</code> from <code>rxjs/operators</code>.`,
      code: `import { takeUntil } from 'rxjs/operators';`,
    },
    {
      step: `Create a new <code>Subject</code> and assign it to a constant named <code>button6stop</code>.`,
      code: `const button6stop = new Subject();`,
    },
    {
      step: `Call the <code>pipe()</code> method on <code>this.button6$</code>.`,
      code: `this.button6$.pipe()`,
    },
    {
      step: `Add the <code>takeUntil()</code> to the <code>pipe()</code> method.`,
      code: `this.button6$.pipe(takeUntil())`,
    },
    {
      step: `Pass the subject we just created <code>button6stop</code> in the <code>takeUntil</code> method.`,
      code: `this.button6$.pipe(takeUntil(button6stop))`,
    },
    {
      step: `Chain the <code>subscribe()</code> method on the <code>pipe()</code> method and create a function body.`,
      code: `.subscribe(() => {});`,
    },
    {
      step: `Add an if-statement to determine when to trigger the stop.`,
      code: `() => {
  if (this.counters.button6 + 1 === this.takeUntilAmount) { }
}`,
    },
    {
      step: `Invoke the <code>next()</code> method on the <code>Subject</code> if we need to stop.`,
      code: `() => {
  if (this.result6 + 1 === this.takeUntilAmount) {
    button6stop.next();
  }
}`,
    },
    {
      step: `Lastly, update the counter.`,
      code: `() => {
  if (this.result6 + 1 === this.takeUntilAmount) {
    button6stop.next();
  }
  this.increaseCounter('button6');
}`,
    },
  ],
};
