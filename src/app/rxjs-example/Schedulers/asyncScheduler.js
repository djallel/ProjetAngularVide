//Planifie une tâche asynchrone. s'execute à la fin du code synchrone
const { of, asyncScheduler } = require('rxjs');
const { observeOn } = require('rxjs/operators');

console.log('Synchronous log1');
//Planifie une tâche asynchrone. s'execute à la fin du code synchrone
of(1, 2, 3,4).pipe(
  observeOn(asyncScheduler)
).subscribe(value => console.log(value));


console.log('Synchronous log3');

// Output:
//Synchronous log1
//Synchronous log3
//1
//2
//3
//4



/*
**Ordre d'exécution**
console.log('Synchronous log') est exécuté en premier et logue "Synchronous log".
  Ensuite, l'Observable of(1, 2, 3) émet les valeurs 1, 2, et 3. Toutefois, grâce à observeOn(asyncScheduler), ces valeurs sont émises de manière asynchrone.
L'asyncScheduler planifie les émissions de valeurs pour l'itération de la boucle d'événements suivante, ce qui signifie qu'elles sont loguées après l'exécution du code synchrone actuel.

** Diagramme temporel**

T=0: console.log('Synchronous log')  -> "Synchronous log"
T=1: asyncScheduler logue 1          -> "1"
T=2: asyncScheduler logue 2          -> "2"
T=3: asyncScheduler logue 3          -> "3"*/
