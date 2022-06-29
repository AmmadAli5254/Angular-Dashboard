// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiURL: 'https://jsonplaceholder.typicode.com/users',
  signupAPI: 'https://taskforum.herokuapp.com/api/auth/signup',
  loginAPI: 'https://taskforum.herokuapp.com/api/auth/signin',
  getAllPostAPI: 'https://taskforum.herokuapp.com/api/post',
  getUserDataAPI: 'https://taskforum.herokuapp.com/api/users/',
  getPostAPI: 'https://taskforum.herokuapp.com/api/post/',
  createPost: 'https://taskforum.herokuapp.com/api/post/'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
