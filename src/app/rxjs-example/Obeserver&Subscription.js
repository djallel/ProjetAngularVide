// Importer Observable depuis RxJS
const { Observable } = require('rxjs');

// Créer un Observable de base
const observable = new Observable(subscriber => {
  subscriber.next('Hello');
  subscriber.next('World');
  subscriber.complete();
});

// S'abonner à l'Observable avec des callbacks
const subscription = observable.subscribe({
  next(x) { console.log(x); },
  error(err) { console.error('Something wrong occurred: ' + err); },
  complete() { console.log('Done'); }
});

// Pour se désabonner (si nécessaire)
subscription.unsubscribe();
