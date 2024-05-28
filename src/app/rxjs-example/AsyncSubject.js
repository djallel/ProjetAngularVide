const { AsyncSubject } = require('rxjs');

const asyncSubject = new AsyncSubject();
//Un AsyncSubject n’émet la dernière valeur émise par l'Observable que lorsque celui-ci est complété.

asyncSubject.subscribe({
  next: (v) => console.log(`Observer A: ${v}`)
});

asyncSubject.next(1);
asyncSubject.next(2);
asyncSubject.next(3);

asyncSubject.subscribe({
  next: (v) => console.log(`Observer B: ${v}`)
}); // Observer B ne recevra aucune valeur jusqu'à la complétion

asyncSubject.next(4);
asyncSubject.complete(); // Observer A et B recevront `4`
