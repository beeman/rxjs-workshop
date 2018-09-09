import { debounceTime, distinctUntilChanged, map, switchMap, tap } from 'rxjs/operators';

export const lesson = {
  title: 'Text input',
  description: [
    `In this lesson we will use Observables to listen to changes on a text input, and use these to search an API.`,
    `We have set up the <code>&lt;input&gt;</code> elements and created an observable <code>input$</code> that listens to the <code>keyup</code> event.`,
  ],
};

export const activity1 = {
  title: 'Activity 1: Read the text of an input',
  description: [],
  solution: `this.input1$.subscribe((event) => {
  console.log(event);
  this.result1.value = this.input1.value;
});`,
  steps: [
    {
      step: `Subscribe to <code>input1$</code> and take the <code>event</code> as parameter of the callback.`,
      code: `this.input1$.subscribe((event) => {});`,
    },
    {
      step: `Log the <code>event</code> to the console so we can see the result when we type in the input.`,
      code: `this.input1$.subscribe((event) => {
  console.log(event);
});`,
    },
    {
      step: `We are not interested in the <code>event</code> that triggered this Observable, so we take the <code>value</code> of <code>input1</code> instead.`,
      code: `this.input1$.subscribe((event) => {
  console.log(event);
  this.result1.value = this.input1.value;
});`,
    },
    {
      step: `When you type into the input you should see the text appear in the result.`,
    },
  ],
};


export const activity2 = {
  title: 'Activity 2: Transform the text of an input',
  description: [
    `In this activity we will transform the text of an input, from it's raw value to a query we can send to the API.`,
    `First we Subscribe to <code>input1</code>, store its value and return it using the <code>map()</code> operator.`,
    `Next we use the <code>debounceTime()</code> operator to make sure we don't update the value on each keystroke, but after a delay.`,
    `Lastly we use <code>distinctUntilChanged()</code> to make sure we only emit unique values.`,
    `All the above is assigned to the <code>input2$query</code> Observable, to which we later subscribe so we can print and update the result.`
  ],
  solution: `this.input2$query = this.input2$
.pipe(
  // Use the map operator to return the value of the input into the stream
  // We ignore the event we get back as we are not interested in the keyboard interaction, but in the value of the input.
  map((event) => {
    this.result2.value = this.input2.value;
    return this.input2.value;
  }),
  // Update the value after debouncing
  debounceTime(this.debounceDelay),
  // Only emit values that are changed
  distinctUntilChanged(),
);

this.input2$query
  .subscribe((query) => {
    this.result2.query = query;
    console.log('Updating query to', query);
  });
`,
  steps: [
    {
      step: ``,
      code: `this.input2$query = this.input2$.pipe();`,
    },
    {
      step: `We add the <code>map()</code> operator to store the <strong>value</strong> of the input into <code>result2.value</code>, then return it into the stream.`,
      code: `this.input2$query = this.input2$.pipe(
  map((event) => {
    this.result2.value = this.input2.value;
    return this.input2.value;
  }),
);`,
    },
    {
      step: `After the <code>map()</code> operator we add the <code>debounceTime()</code> operator and pass in the <code>debounceDelay</code> (set to 300ms).`,
      code: `this.input2$query = this.input2$.pipe(
  map((event) => {
    this.result2.value = this.input2.value;
    return this.input2.value;
  }),
  debounceTime(this.debounceDelay),
);`,
    },
    {
      step: `After the <code>debounceTime()</code> operator we add the <code>distinctUntilChanged()</code> operator.`,
      code: `this.input2$query = this.input2$.pipe(
  map((event) => {
    this.result2.value = this.input2.value;
    return this.input2.value;
  }),
  debounceTime(this.debounceDelay),
  distinctUntilChanged(),
);`,
    },
    {
      step: `Now that the observable and the transformations are done, we can <code>subscribe()</code> to it.`,
      code: `this.input2$query.subscribe((query) => {});`,
    },
    {
      step: `Inside the subscription we assign the resulting <code>query</code> to <code>result2.query</code>, and log it to the console.`,
      code: `this.input2$query.subscribe((query) => {
  this.result2.query = query;
  console.log('Updating query to', query);
});`,
    },
    {
      step: `When you type into the input, you should see that the <code>value</code> gets updated directly, whereas the <code>query</code> has a small delay.`,
    },
    {
      step: `When you open the console you can see that the query does not get logged when it's not a unique value thanks to <code>distinctUntilChanged</code>.`,
    },
  ],
};


export const activity3 = {
  title: 'Activity 3: Use the text input to make an API request',
  description: [],
  solution: `this.input3$query = this.input3$.pipe(
  map(() => this.input3.value),
  debounceTime(this.debounceDelay),
  distinctUntilChanged(),
);

this.input3$query.pipe(
  tap(query => tap(query => this.result3.query = query)),
  switchMap((query) => this.search3(query))
).subscribe(
  result => this.result3.result = result,
  error => {
    this.result3.error = error;
    this.result3.loading = false;
    this.result3.result = null;
  }
);`,
  steps: [
    {
      step: `Implement <code>input3query</code> Observable like in the previous activity. This time we don't care about storing the raw <code>value</code>.`,
      code: `this.input3$query = this.input3$.pipe(
  map(() => this.input3.value),
  debounceTime(this.debounceDelay),
  distinctUntilChanged(),
);`,
    },
    {
      step: `Call the <code>pipe()</code> operator on <code>input3$query</code>.`,
      code: `this.input3$query.pipe()`,
    },
    {
      step: `Add the <code>tap()</code> operator to the <code>pipe()</code> and make it store the <code>query</code> in <code>result3.query</code>.`,
      code: `this.input3$query.pipe(
  tap(query => this.result3.query = query),
)`,
    },
    {
      step: `Next we add the <code>switchMap</code> operator to the pipe. This operator takes the value from the stream, and passes it to the <code>search3()</code> method, which returns an Observable.`,
      code: `this.input3$query.pipe(
  tap(query => this.result3.query = query),
  switchMap((query) => this.search3(query))
)`,
    },
    {
      step: `Chain the <code>subscribe()</code> method to the <code>pipe()</code>, make the callback set <code>result</code> to <code>result3.result</code> and add an empty method for the <code>error</code> callback`,
      code: `.subscribe(
  result => this.result3.result = result,
  error => { }
);`,
    },
    {
      step: `Handle the code in the <code>error</code> callback, storing the error message, disabling the loading indicator and setting result to <code>null</code>`,
      code: `.subscribe(
  result => this.result3.result = result,
  error => {
    this.result3.error = error;
    this.result3.loading = false;
    this.result3.result = null;
  }
);`,
    },
    {
      step: `When you search for an existing country, like <strong>Colombia</strong>, you should see a loading indicator after which the result appears`,
    },
    {
      step: `You can also search for partial names, like <strong>united</strong> or <strong>island</strong>. Oh, and don't forget to check the flag of <strong>Nepal</strong> 😮 `,
    }
  ],
};
