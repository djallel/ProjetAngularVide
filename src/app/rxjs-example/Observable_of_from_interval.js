// Importer les fonctions nécessaires depuis RxJS
const { of, from, interval } = require('rxjs');
const { take } = require('rxjs/operators');

// Observable créé avec `of`
const observable1 = of(1, 2, 3);

// Observable créé avec `from`
const observable2 = from([10, 20, 30]);

// Observable créé avec `interval`
const observable3 = interval(1000).pipe(take(3)); // Limiter à 3 émissions pour l'exemple

// Définir un Observer
const observer = {
  next: x => console.log('Observer got a next value: ' + x),
  error: err => console.error('Observer got an error: ' + err),
  complete: () => console.log('Observer got a complete notification')
};

// S'abonner aux Observables
console.log('Subscribing to observable1:');
observable1.subscribe(observer);

console.log('Subscribing to observable2:');
observable2.subscribe(observer);

console.log('Subscribing to observable3:');
observable3.subscribe(observer);
