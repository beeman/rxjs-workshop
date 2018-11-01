import { Activity, Lesson } from '../../../types';

import { Activity1Component } from '../lesson1/activity1.component';
import { Activity2Component } from '../lesson1/activity2.component';
import { Activity3Component } from '../lesson1/activity3.component';
import { Activity4Component } from '../lesson1/activity4.component';

const introduction: Activity = {
  id: 'overview',
  title: 'Overview',
  description: [
    `In this lesson we use different ways to listen to the events of a button click.`,
  ],
  hideResult: true,
  hideSolutionLink: true,
};

const activity1: Activity = {
  id: 'activity1',
  component: Activity1Component,
  title: '1: addEventListener',
  description: [
    'In this activity we listen to a button click using the default <code>addEventListener</code> method provided by the browser.'
  ],
  solution: `this.button.addEventListener('click', (event) => {
  this.result = {x: event.clientX, y: event.clientY};
});`,
  steps: [
    {
      step: `Call the <code>addEventListener</code> method at the element reference.`,
      code: `this.button.addEventListener();`,
    },
    {
      step: `Set the name of the event to <code>click</code>.`,
      code: `this.button.addEventListener('click');`,
    },
    {
      step: `Create a callback method that takes a parameter <code>event</code>.`,
      code: `this.button.addEventListener('click', (event) => {});`,
    },
    {
      step: `In the method body, assign an empty object to <code>result</code>.`,
      code: `this.result = {};`,
    },
    {
      step: `Add the keys <code>x</code> and <code>y</code> and assign the values of <code>event.clientX</code> and <code>event.clientY</code>`,
      code: `this.result = { x: event.clientX, y: event.clientY };`,
    },
  ],
};

const activity2: Activity = {
  id: 'activity2',
  component: Activity2Component,
  title: '2: fromEvent',
  description: [
    `The second button uses the <code>fromEvent</code> Observable.`
  ],
  solution: `this.button$ = fromEvent(this.button, 'click');
this.sub = this.button$.subscribe((event: MouseEvent) => {
  this.result = {x: event.clientX, y: event.clientY};
});`,
  steps: [
    {
      step: `Import <code>fromEvent</code> from <code>rxjs</code>.`,
      code: `import { fromEvent } from 'rxjs';`,
    },
    {
      step: `Assign the <code>fromEvent</code> operator to <code>this.button$</code>.`,
      code: `this.button$ = fromEvent()`,
    },
    {
      step: `The first parameter is the reference to <code>this.button</code>.`,
      code: `this.button$ = fromEvent(this.button)`,
    },
    {
      step: `The second parameter is the name of the event, <code>click</code>.`,
      code: `this.button$ = fromEvent(this.button, 'click')`,
    },
    {
      step: `To store the subscription assign <code>this.button$</code> to <code>this.sub</code>.`,
      code: `this.sub = this.button$`,
    },
    {
      step: `Call the <code>subscribe()</code> method`,
      code: `this.sub = this.button$.subscribe();`,
    },
    {
      step: `Create a callback method that takes a parameter <code>event</code>.`,
      code: `this.sub = this.button$.subscribe((event: MouseEvent) => {});`,
    },
    {
      step: `Inside the method body, assign an empty object to <code>result</code>.`,
      code: `this.result = { };`,
    },
    {
      step: `Add the keys <code>x</code> and <code>y</code> and assign the values of <code>event.clientX</code> and <code>event.clientY</code>`,
      code: `this.result = { x: event.clientX, y: event.clientY };`,
    },
  ],
};

const activity3: Activity = {
  id: 'activity3',
  component: Activity3Component,
  title: '3: fromEvent',
  description: [
    `In this case we use the <code>fromEvent</code> Observable again, but in this case we are going to use it to capture the click event anywhere in the document.`
  ],
  solution: `this.sub = fromEvent(document, 'click')
  .subscribe((event: MouseEvent) => {
    this.result = {x: event.clientX, y: event.clientY};
  });`,
  steps: [
    {
      step: ``,
      code: `this.sub = fromEvent()`,
    },
    {
      step: ``,
      code: `this.sub = fromEvent(document, 'click')`,
    },
    {
      step: `Call the <code>subscribe()</code> method`,
      code: `.subscribe();`,
    },
    {
      step: `Add a callback function that takes a parameter <code>event</code> of type <code>MouseEvent</code>.`,
      code: `.subscribe((event: MouseEvent) => {});`,
    },
    {
      step: `Inside the method body, assign an empty object to <code>result</code>.`,
      code: `.subscribe((event: MouseEvent) => {
  this.result = { };
});`,
    },
    {
      step: `Add the keys <code>x</code> and <code>y</code> and assign the values of <code>event.clientX</code> and <code>event.clientY</code>`,
      code: `.subscribe((event: MouseEvent) => {
  this.result = {x: event.clientX, y: event.clientY};
});`,
    },
  ],
};

const activity4: Activity = {
  id: 'activity4',
  component: Activity4Component,
  title: '4: unsubscribing',
  description: [
    `To prevent memory leaks, we should always consider unsubscribing from our Observables.`,
    `We can do this using the <code>ngOnDestroy</code> method, that Angular runs during the Component tear down.`,
    `In order to unsubscribe we need to store a reference to the subscription, what we did in the previous activities.`,
  ],
  solution: `ngOnDestroy() {
  this.sub.unsubscribe();
}`,
  steps: [
    {
      step: `In the ngOnDestroy method add call into the <code>unsubscribe()</code> method on <code>this.sub</code>`,
      code: `this.sub.unsubscribe()`,
    },
  ],
};

export const lesson1: Lesson = {
  id: 'lesson1',
  title: '1: Introduction',
  activities: [
    introduction,
    activity1,
    activity2,
    activity3,
    activity4,
  ],
};
