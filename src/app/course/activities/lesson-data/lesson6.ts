import { Activity, Lesson } from '../../../types';

import { Activity1Component } from '../lesson6/activity1.component';
import { Activity2Component } from '../lesson6/activity2.component';
import { Activity3Component } from '../lesson6/activity3.component';
import { Activity4Component } from '../lesson6/activity4.component';
import { Activity5Component } from '../lesson6/activity5.component';
import { Observable } from 'rxjs';

export const introduction: Activity = {
  id: 'overview',
  title: 'Overview',
  description: [
    `In this lesson we will see a few ways to create observables, starting with the ones you can just call to create the observable, to creating one from scratch.`,
    `We will see how to create observables with the <code>of</code>, <code>from</code> and <code>create</code> creators`,
    `In the extra exercises section for the quick ones we can work with the <code>empty</code>, <code>interval</code> and <code>range</code> creators.`,
  ],
  hideResult: true,
  hideSolutionLink: true,
};

export const activity1: Activity = {
  id: 'activity1',
  component: Activity1Component,
  title: '1: use the of Observable',
  description: [
    `Using the <code>of</code> Observable we can emit series of custom values.`,
    `These values can be strings, objects, arrays or functions.`
  ],
  solution: `of( Date.now() )
  .subscribe(result => this.result = result);
`,
  steps: [
    {
      step: `Import <code>of</code> from <code>rxjs</code>.`,
      code: `import { of } from 'rxjs';`,
    },
    {
      step: `Use the <code>of</code> method and pass the value we want to emit. We use <code>Date.now()</code> so the value updates each time we invoke it`,
      code: `of( Date.now() )`,
    },
    {
      step: `Chain <code>subscribe()</code> to the Observable and assign the result to <code>result</code>.`,
      code: `.subscribe(result => this.result = result);`
    },
    {
      step: 'Run the example clicking the button at the end of this activity and observe the result.',
    },
    {
      step: `Add a second parameter to the <code>of()</code> method, for example an object with your name.`,
      code: `of( Date.now(), { name: 'Super Dev' } )`,
    },
    {
      step: `Try to explain why we only see the last object getting printed, and not the Date we saw before.`,
    },
  ],
};

export const activity2: Activity = {
  id: 'activity2',
  component: Activity2Component,
  title: '2: from',
  description: [
    `With the <code>from</code> Observable we turn a Promise, Array or Iterable into an Observable.`,
    `This is useful if have a Promise-based library in an app that generally uses Observables.`
  ],
  solution: `const promise = Promise.resolve({ name: 'Awesome Dev', date: Date.now()});

from(promise)
  .subscribe(result => this.result = result);`,
  steps: [
    {
      step: `First we define a local constant <code>promise</code> and set the value to <code>Promise.resolve()</code>.`,
      code: `const promise = Promise.resolve()`,
    },
    {
      step: `Add the object we want to return inside the resolve method, use <code>Date.now()</code> if you want a dynamic result.`,
      code: `const promise = Promise.resolve({ name: 'Awesome Dev', date: Date.now()})`,
    },
    {
      step: `Use the <code>from</code> method from <code>rxjs</code> and pass in the local <code>promise</code> constant.`,
      code: `from(promise)`,
    },
    {
      step: `Chain <code>subscribe()</code> to the Observable and assign the result to <code>result</code>.`,
      code: `.subscribe(result => this.result = result);`
    },
    {
      step: 'Run the example and observe the result.',
    },
  ],
};

export const activity3: Activity = {
  id: 'activity3',
  component: Activity3Component,
  title: '3: throwError',
  description: [
    `In this activity we use the <code>throwError</code> observable to generate a custom error stream.`,
    `We will also use a different way to subscribe to our observable. It turns out that <code>subscribe()</code> also accepts an object.`,
    `This allows us to for instance only subscribe to the error <code>subscribe( { error: () => {}  })</code>.`,
  ],
  solution: `throwError('This is the error message')
  .subscribe(
    {
      error: (err) => this.result = err,
    }
  );`,
  steps: [
    {
      step: `Use the <code>throwError</code> method from <code>rxjs</code> and pass in the error message we want to appear.`,
      code: `throwError('This is the error message')`,
    },
    {
      step: `Chain <code>subscribe()</code> to the Observable and instead add in an object.`,
      code: `.subscribe({});`
    },
    {
      step: `Add an <code>error</code> key to the object with its callback function to asign error message to <code>result </code>.`,
      code: `.subscribe({
  error: (message) => this.result = message,
});`
    },
    {
      step: 'Run the example and observe the result.',
    },
  ],
};

export const activity4: Activity = {
  id: 'activity4',
  component: Activity4Component,
  title: '4: Observable.create',
  description: [
    `In this activity we use <code>Observable.create</code> to create a custom observable. We can send our own values to it inside the method block.`,
  ],
  solution: `const myObservable = Observable.create(observer => {
  observer.next('Test value 1');
  observer.next('Test value 2');
  observer.next('Test value 3');
  observer.complete('Done Emitting Values');
});

myObservable.subscribe({
  next: (result) => this.result.push(result),
  complete: () => console.log('Activity 4 completed')
});`,
  steps: [
    {
      step: `Create a local variable <code>myObservable</code> and assign it to <code>Observable.create()</code>.`,
      code: `const myObservable = Observable.create();`,
    },
    {
      step: `Inside the <code>create()</code> method we create a function that takes 1 parameter, <code>observer</code>.`,
      code: `const myObservable = Observable.create(observer => {});`,
    },
    {
      step: `Using this <code>observer</code> we can emit our own values. Emit a few values by calling <code>observer.next()</code>.`,
      code: `const myObservable = Observable.create(observer => {
  observer.next('Event 1');
  observer.next('Event 2');
  observer.next('Event 3');
});`,
    },
    {
      step: `On a new line, chain the <code>subscribe()</code> method onto <code>myObservable</code> and pass in an object.`,
      code: `myObservable.subscribe({});`
    },
    {
      step: `Create a callback method for <code>next</code> and <code>complete</code>`,
      code: `myObservable.subscribe({
  next: (result) => this.result.push(result),
  complete: () => console.log('Activity 4 completed')
});`
    },
    {
      step: 'Run the example and observe the result. We see that the complete did not get logged in our console.',
    },
    {
      step: `Inside the <code>create()</code> block, add a new line below the existing lines, and call <code>complete()</code> on the <code>observer</code>.`,
      code: `observer.complete('Done Emitting Values');`
    },
    {
      step: 'Run the example and observe the result. The <code>complete</code> show now get logged to the console.',
    },
  ],
};

export const activity5: Activity = {
  id: 'activity5',
  component: Activity5Component,
  title: '5: empty, interval, range',
  isExercise: true,
  description: [
    `In this exercise we look at some more 'creation' observables.`
  ],
  solution: `EMPTY.subscribe({
  next: (result) => this.result = result,
  complete: () => console.log('complete')
});`,
  steps: [
    {
      step: `Import EMPTY from 'rxjs' and chain a <code>subscribe()</code> method on it passing in an object.`,
      code: `EMPTY.subscribe({});`,
    },
    {
      step: `Use the <code>next</code> and <code>complete</code> callbacks to see what this observable emits.`,
      code: `EMPTY.subscribe({
  next: (result) => this.result = result,
  complete: () => console.log('complete')
});`,
    },
    {
      step: 'Try using other observables like <code>interval</code> and <code>range</code>.'
    }
  ],
};

export const lesson6: Lesson = {
  id: 'lesson6',
  title: '6: Creating Observables',
  activities: [
    introduction,
    activity1,
    activity2,
    activity3,
    activity4,
    activity5,
  ],
};
