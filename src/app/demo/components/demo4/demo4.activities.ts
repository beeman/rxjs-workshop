export const lesson = {
  title: 'Network Request',
  description: [
    `In this demo we make an http request and show a loading spinner until we receive the response.`,
  ],
};

export const activity1 = {
  title: 'Activity 1: Make a HTTP Request',
  description: [
    `In this activity we will use an RxJS Observable to make an HTTP Request.`
  ],
  solution: `this.result = null;
this.loading = true;
this.service.randomImage()
  .pipe(map(result => result['data']))
  .subscribe(data => {
    this.result = data;
    this.loading = false;
  });`,
  steps: [
    {
      step: `The first thing we want to do is set the value of <code>result</code> to null so existing results get removed when making new requests.`,
      code: `this.result = null;`,
    },
    {
      step: `Then we enable the loading indicator by setting <code>loading</code> to <code>true</code>.`,
      code: `this.loading = true;`,
    },
    {
      step: `We then call into the <code>randomImage()</code> method on the <code>service</code> that is responsible for retrieving the data.`,
      code: `this.service.randomImage()`,
    },
    {
      step: `Chain the <code>pipe()</code> method onto the <code>randomImage()</code> method.`,
      code: `.pipe()`,
    },
    {
      step: `Import <code>map</code> from <code>rxjs</code>. As of now we assume you are used to importing the operators and will no longer mention it explicitly.`,
      code: `import { map } from 'rxjs/operators';`,
    },
    {
      step: `Add the <code>map()</code> operator to the <code>pipe()</code>.`,
      code: `.pipe(map())`,
    },
    {
      step: `In the <code>map()</code> operator, take the result and make it return the <code>data</code> property of the result.`,
      code: `.pipe(map(result => result['data']))`,
    },
    {
      step: `Lastly we chain the <code>subscribe()</code> method onto the <code>pipe()</code> and take the <code>data</code>.`,
      code: `.subscribe(data => {});`,
    },
    {
      step: `We assign the <code>data</code> to <code>result</code> and disable the loading indicator.`,
      code: `.subscribe(data => {
  this.result = data;
  this.loading = false;
});`,
    },
  ],
};
