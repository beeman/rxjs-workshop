import { Activity, Lesson } from '../../../types';
import { Activity1Component } from '../lesson5/activity1.component';
import { Activity2Component } from '../lesson5/activity2.component';
import { Activity3Component } from '../lesson5/activity3.component';

const introduction: Activity = {
  id: 'overview',
  title: 'Overview',
  description: [
    `In this lesson we will use Observables to listen to changes on a text input, and use these to search an API.`,
    `We have set up the <code>&lt;input&gt;</code> elements and created an observable <code>input$</code> that listens to the <code>keyup</code> event.`,
  ],
  hideResult: true,
  hideSolutionLink: true,
};

const activity1: Activity = {
  id: 'activity1',
  component: Activity1Component,
  title: '1: Read the text of an input',
  description: [''],
  solution: `this.input$.subscribe((event) => {
  console.log(event);
  this.result.value = this.input.value;
});`,
  steps: [
    {
      step: `Subscribe to <code>input$</code> and take the <code>event</code> as parameter of the callback.`,
      code: `this.input$.subscribe((event) => {});`,
    },
    {
      step: `Log the <code>event</code> to the console so we can see the result when we type in the input.`,
      code: `this.input$.subscribe((event) => {
  console.log(event);
});`,
    },
    {
      step: `We are not interested in the <code>event</code> that triggered this Observable, so we take the <code>value</code> of <code>input</code> instead.`,
      code: `this.input$.subscribe((event) => {
  console.log(event);
  this.result.value = this.input.value;
});`,
    },
    {
      step: `When you type into the input you should see the text appear in the result.`,
    },
  ],
};


const activity2: Activity = {
  id: 'activity2',
  component: Activity2Component,
  title: '2: Transform the text of an input',
  description: [
    `In this activity we will transform the text of an input, from it's raw value to a query we can send to the API.`,
    `First we Subscribe to <code>input</code>, store its value and return it using the <code>map()</code> operator.`,
    `Next we use the <code>debounceTime()</code> operator to make sure we don't update the value on each keystroke, but after a delay.`,
    `Lastly we use <code>distinctUntilChanged()</code> to make sure we only emit unique values.`,
    `All the above is assigned to the <code>input$query</code> Observable, to which we later subscribe so we can print and update the result.`
  ],
  solution: `this.input$query = this.input$
.pipe(
  // Use the map operator to return the value of the input into the stream
  // We ignore the event we get back as we are not interested in the keyboard interaction, but in the value of the input.
  map((event) => {
    this.result.value = this.input.value;
    return this.input.value;
  }),
  // Update the value after debouncing
  debounceTime(this.debounceDelay),
  // Only emit values that are changed
  distinctUntilChanged(),
);

this.input$query
  .subscribe((query) => {
    this.result.query = query;
    console.log('Updating query to', query);
  });
`,
  steps: [
    {
      step: ``,
      code: `this.input$query = this.input$.pipe();`,
    },
    {
      step: `We add the <code>map()</code> operator to store the <strong>value</strong> of the input into <code>result.value</code>, then return it into the stream.`,
      code: `this.input$query = this.input$.pipe(
  map((event) => {
    this.result.value = this.input.value;
    return this.input.value;
  }),
);`,
    },
    {
      step: `After the <code>map()</code> operator we add the <code>debounceTime()</code> operator and pass in the <code>debounceDelay</code> (set to 300ms).`,
      code: `this.input$query = this.input$.pipe(
  map((event) => {
    this.result.value = this.input.value;
    return this.input.value;
  }),
  debounceTime(this.debounceDelay),
);`,
    },
    {
      step: `After the <code>debounceTime()</code> operator we add the <code>distinctUntilChanged()</code> operator.`,
      code: `this.input$query = this.input$.pipe(
  map((event) => {
    this.result.value = this.input.value;
    return this.input.value;
  }),
  debounceTime(this.debounceDelay),
  distinctUntilChanged(),
);`,
    },
    {
      step: `Now that the observable and the transformations are done, we can <code>subscribe()</code> to it.`,
      code: `this.input$query.subscribe((query) => {});`,
    },
    {
      step: `Inside the subscription we assign the resulting <code>query</code> to <code>result.query</code>, and log it to the console.`,
      code: `this.input$query.subscribe((query) => {
  this.result.query = query;
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


const activity3: Activity = {
  id: 'activity3',
  component: Activity3Component,
  title: '3: Use the text input to make an API request',
  description: [''],
  solution: `this.input$query = this.input$.pipe(
  // We use map to get the value of the input
  map(() => this.input.value),
  // Debounce to start search after a delay
  debounceTime(this.debounceDelay),
  // Only start search if value changed
  distinctUntilChanged(),
  // Filter out empty search
  filter((queryStr) => queryStr.trim() !== ''),
  // Store the query value so we can display it in the UI
  tap(query => tap(query => this.result.query = query)),
  // Pass the query in the search method
  switchMap((query) => this.search(query)),
  // Handle the error
  catchError((err) => {
    // Update the UI
    this.result.error = err;
    this.result.loading = false;
    this.result.result = null;

    // Return this query so the search keeps working
    return this.input$query;
  })
);

this.input$query.subscribe(
  result => {
    this.result.result = result;
    this.result.error = null;
  });`,
  steps: [
    {
      step: `
        For this activity, please make a fork of 
        <a target="_blank" href="https://stackblitz.com/edit/rxjs-workshop-fixed?file=src%2Fapp%2Fdemo%2Fcomponents%2Fdemo5%2Fdemo5.component.ts">
          https://stackblitz.com/edit/rxjs-workshop-fixed?file=src%2Fapp%2Fdemo%2Fcomponents%2Fdemo5%2Fdemo5.component.ts
        </a>.
      `,
    },
    {
      step: `Implement <code>input$query</code> Observable like in the previous activity. This time we don't care about storing the raw <code>value</code>.`,
      code: `this.input$query = this.input$.pipe(
  map(() => this.input.value),
  debounceTime(this.debounceDelay),
  distinctUntilChanged(),
);`,
    },
    {
      step: `Now inside the same <code>pipe()</code> statement, use the <code>filter</code> operator to filter out empty values.`,
      code: `filter((queryStr) => queryStr.trim() !== '')`,
    },
    {
      step: `Next, use the <code>tap()</code> operator to store the search query to a local variable`,
      code: `tap(query => tap(query => this.result.query = query))`,
    },
    {
      step: `Now it's time to execute the actual query. We do this my using the <code>switchMap()</code> operator and pass the query to the <code>this.search()</code> method.`,
      code: `switchMap((query) => this.search(query))`,
    },
    {
      step: `The last operator we will add is <code>catchError</code>. This allows us to execute code after we received an error, for example when we search for a country that does not exist. When that happens, we want to store the error 
             message, clean up our result and disable the loading indicator. After that we make it return itself, <code>this.input$query</code>`,
      code: `catchError((err) => {
  this.result.error = err;
  this.result.loading = false;
  this.result.result = null;

  return this.input$query;
})`,
    },
    {
      step: `No in order to use the new observable we start on a new line and subscribe to <code>this.input$query</code>.`,
      code: `this.input$query.subscribe();`,
    },
    {
      step: `Inside the subscription we tak the <code>result</code> and assign it, and clear out any errors.`,
      code: `this.input$query.subscribe(
  result => {
    this.result.result = result;
    this.result.error = null;
  });`,
    },
    {
      step: `When you search for an existing country, like <strong>Colombia</strong>, you should see a loading indicator after which the result appears`,
    },
    {
      step: `You can also search for partial names, like <strong>united</strong> or <strong>island</strong>. Oh, and don't forget to check the flag of <strong>Nepal</strong> 😮 `,
    }
  ],
};

export const lesson5: Lesson = {
  id: 'lesson5',
  title: '5: Text Input',
  activities: [
    introduction,
    activity1,
    activity2,
    activity3,
  ],
};
