// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
//https://geo.ipify.org/api/v2/country,city?apiKey=at_V3WOjByLjxYZrslZCkkYqJ5fB5kkw&ipAddress=8.8.8.8

export const environment = {
  production: false,
  IPIFY_API_KEY: 'at_V3WOjByLjxYZrslZCkkYqJ5fB5kkw',
  IPIFY_BASE_URL: 'https://geo.ipify.org/api/v2',
  IP_GEO: '8756dc2b853243c28fc57fa3528549e6',
  IP_GEO_BASE_URL: 'https://api.ipgeolocation.io/ipgeo',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
