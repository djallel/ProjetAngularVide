const { ReplaySubject } = require('rxjs');

const replaySubject = new ReplaySubject(3); // Taille du buffer
//Un ReplaySubject enregistre toutes les valeurs émises et les renvoie à chaque nouvel abonné.

replaySubject.subscribe({
  next: (v) => console.log(`Observer A: ${v}`)
});

replaySubject.next(1);
replaySubject.next(2);
replaySubject.next(3);
replaySubject.next(4);

replaySubject.subscribe({
  next: (v) => console.log(`Observer B: ${v}`)
}); // Observer B recevra `2`, `3`, `4`
