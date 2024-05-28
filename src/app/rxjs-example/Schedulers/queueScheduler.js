//Exécute les tâches de manière synchrone dans une queue.
const { of, queueScheduler, asyncScheduler} = require('rxjs');
const { observeOn } = require('rxjs/operators');

console.log('Synchronous log 1');
of(1, 2, 3).pipe(
  observeOn(queueScheduler)
).subscribe(value => console.log(value));

console.log('Synchronous log 3');

// Output:
// Synchronous log 1
// 1
// 2
// 3
// Synchronous log 3

