/**switchMap Annule les Observables précédents et n'émet que le dernier Observable.*/

const { of, interval } = require('rxjs');
const { switchMap, take } = require('rxjs/operators');

interval(1000).pipe(
  take(3),
  switchMap(val => of(`Switch to ${val}`))
).subscribe(console.log);

// Output:
// Switch to 0
// Switch to 1
// Switch to 2
/**switchMap Annule les Observables précédents et n'émet que le dernier Observable.*/
