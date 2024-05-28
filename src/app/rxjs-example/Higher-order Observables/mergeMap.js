//Merge les valeurs des Observables internes en un seul Observable.
const { from, interval } = require('rxjs');
const { mergeMap, take } = require('rxjs/operators');

from([1, 2, 3]).pipe(
  mergeMap(val => interval(1000).pipe(take(3)))
).subscribe(console.log);

// Output:
// 0, 0, 0, 1, 1, 1, 2, 2, 2

/*

Emissions dans le temps
Pour illustrer les émissions dans le temps, voici un diagramme temporel approximatif :

À t=0s : 1 est émis par from.
Un nouvel Observable interval(1000).pipe(take(3)) commence et émet 0 à t=1s, 1 à t=2s, 2 à t=3s.
À t=0s : 2 est émis par from.
Un nouvel Observable interval(1000).pipe(take(3)) commence et émet 0 à t=1s, 1 à t=2s, 2 à t=3s.
À t=0s : 3 est émis par from.
Un nouvel Observable interval(1000).pipe(take(3)) commence et émet 0 à t=1s, 1 à t=2s, 2 à t=3s.
Les valeurs des trois Observables internes sont intercalées, donc l'émission finale ressemblera à ceci :


0 (de 1)
0 (de 2)
0 (de 3)
1 (de 1)
1 (de 2)
1 (de 3)
2 (de 1)
2 (de 2)
2 (de 3)

 */

