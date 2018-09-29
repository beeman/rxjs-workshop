// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyA6Hv8SrMExH4PUYiaFg7xlDE0MdX87nlM',
    authDomain: 'workshop-app-10baa.firebaseapp.com',
    databaseURL: 'https://workshop-app-10baa.firebaseio.com',
    projectId: 'workshop-app-10baa',
    storageBucket: 'workshop-app-10baa.appspot.com',
    messagingSenderId: '46118362144'
  }
};

/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
