const { Subject } = require('rxjs');

//Les Subject permettent de convertir un Observable froid en Observable chaud. Ils agissent à la fois comme un Observable et un Observer.
const subject = new Subject();

// Un Subject peut avoir plusieurs abonnés
subject.subscribe({
  next : v => {( console.log(`Observer A: ${v}`))}
});
subject.subscribe({
  next: (v) => console.log(`Observer B: ${v}`)
});

// En tant qu'Observer, il peut recevoir des valeurs
subject.next(1);
subject.next(2);
