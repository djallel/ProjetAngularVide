// Importer Observable depuis RxJS
const { Observable } = require('rxjs');

// Créer un Observable de base
const observable = new Observable(subscriber => {
  subscriber.next('Hello');
  subscriber.next('World');
  subscriber.complete();
});

// Définir un Observer
const observer = {
  next: x => console.log('Observer got a next value: ' + x),
  error: err => console.error('Observer got an error: ' + err),
  complete: () => console.log('Observer got a complete notification')
};

// S'abonner à l'Observable avec l'Observer
const subscription = observable.subscribe(observer);

// Pour se désabonner (si nécessaire)
subscription.unsubscribe();
