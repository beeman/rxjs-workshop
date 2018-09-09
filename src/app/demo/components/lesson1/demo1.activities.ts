export const lesson = {
  title: 'Handling events',
  description: [
    `In this demo we use different ways to listen to the events of a button click.`,
  ],
  showContent: false,
  showResult: false,
};

export const activity1 = {
  title: 'Activity 1: addEventListener',
  description: [
    'In this activity we listen to a button click using the default <code>addEventListener</code> method provided by the browser.'
  ],
  solution: `this.button1.addEventListener('click', (event) => {
  this.result1 = {x: event.clientX, y: event.clientY};
});`,
  steps: [
    {
      step: `Call the <code>addEventListener</code> method at the element reference.`,
      code: `this.button1.addEventListener();`,
    },
    {
      step: `Set the name of the event to <code>click</code>.`,
      code: `this.button1.addEventListener('click');`,
    },
    {
      step: `Create a callback method that takes a parameter <code>event</code>.`,
      code: `this.button1.addEventListener('click', (event) => {});`,
    },
    {
      step: `In the method body, assign an empty object to <code>result1</code>.`,
      code: `this.result1 = {};`,
    },
    {
      step: `Add the keys <code>x</code> and <code>y</code> and assign the values of <code>event.clientX</code> and <code>event.clientY</code>`,
      code: `this.result1 = { x: event.clientX, y: event.clientY };`,
    },
  ],
};

export const activity2 = {
  title: 'Activity 2: fromEvent',
  description: [
    `The second button uses the <code>fromEvent</code> Observable.`
  ],
  solution: `this.button2$ = fromEvent(this.button2, 'click');
this.activity2sub = this.button2$.subscribe((event: MouseEvent) => {
  this.result2 = {x: event.clientX, y: event.clientY};
});`,
  steps: [
    {
      step: `Import <code>fromEvent</code> from <code>rxjs</code>.`,
      code: `import { fromEvent } from 'rxjs';`,
    },
    {
      step: `Assign the <code>fromEvent</code> operator to <code>this.button2$</code>.`,
      code: `this.button2$ = fromEvent()`,
    },
    {
      step: `The first parameter is the reference to <code>this.button2</code>.`,
      code: `this.button2$ = fromEvent(this.button2)`,
    },
    {
      step: `The second parameter is the name of the event, <code>click</code>.`,
      code: `this.button2$ = fromEvent(this.button2, 'click')`,
    },
    {
      step: `To store the subscription assign <code>this.button2$</code> to <code>this.activity2sub</code>.`,
      code: `this.activity2sub = this.button2$`,
    },
    {
      step: `Call the <code>subscribe()</code> method`,
      code: `this.activity2sub = this.button2$.subscribe();`,
    },
    {
      step: `Create a callback method that takes a parameter <code>event</code>.`,
      code: `this.activity2sub = this.button2$.subscribe((event: MouseEvent) => {});`,
    },
    {
      step: `Inside the method body, assign an empty object to <code>result2</code>.`,
      code: `this.result2 = { };`,
    },
    {
      step: `Add the keys <code>x</code> and <code>y</code> and assign the values of <code>event.clientX</code> and <code>event.clientY</code>`,
      code: `this.result2 = { x: event.clientX, y: event.clientY };`,
    },
  ],
};

export const activity3 = {
  title: 'Activity 3: fromEvent',
  description: [
    `In this case we use the <code>fromEvent</code> Observable again, but in this case we are going to use it to capture the click event anywhere in the document.`
  ],
  solution: `this.activity3sub = fromEvent(document, 'click')
  .subscribe((event: MouseEvent) => {
    this.result3 = {x: event.clientX, y: event.clientY};
  });`,
  steps: [
    {
      step: ``,
      code: `this.activity3sub = fromEvent()`,
    },
    {
      step: ``,
      code: `this.activity3sub = fromEvent(document, 'click')`,
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
      step: `Inside the method body, assign an empty object to <code>result3</code>.`,
      code: `.subscribe((event: MouseEvent) => {
  this.result3 = { };
});`,
    },
    {
      step: `Add the keys <code>x</code> and <code>y</code> and assign the values of <code>event.clientX</code> and <code>event.clientY</code>`,
      code: `.subscribe((event: MouseEvent) => {
  this.result3 = {x: event.clientX, y: event.clientY};
});`,
    },
  ],
};

export const activity4 = {
  title: 'Exercise 1: unsubscribing',
  description: [
    `To prevent memory leaks, we should always consider unsubscribing from our Observables.`,
    `We can do this using the <code>ngOnDestroy</code> method, that Angular runs during the Component tear down.`,
    `In order to unsubscribe we need to store a reference to the subscription, what we did in the previous activities.`,
  ],
  solution: `ngOnDestroy() {
  this.activity2sub.unsubscribe();
  this.activity3sub.unsubscribe();
}`,
  steps: [
    {
      step: `In the ngOnDestroy method add call into the <code>unsubscribe()</code> method on <code>this.activity2sub</code>`,
      code: `this.activity2sub.unsubscribe()`,
    },
    {
      step: `Do the same for <code>this.activity3sub</code>`,
      code: `this.activity3sub.unsubscribe()`,
    },
  ],
};
