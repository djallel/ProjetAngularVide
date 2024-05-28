const { BehaviorSubject } = require('rxjs');

//Un BehaviorSubject garde en mémoire la dernière valeur émise et la renvoie aux nouveaux abonnés.
const behaviorSubject = new BehaviorSubject(0); // Valeur initiale

behaviorSubject.subscribe({
  next: (v) => console.log(`Observer A: ${v}`)
});

behaviorSubject.next(1);
behaviorSubject.next(2);

behaviorSubject.subscribe({
  next: (v) => console.log(`Observer B: ${v}`)
}); // Observer B recevra immédiatement `2`

behaviorSubject.next(3);
