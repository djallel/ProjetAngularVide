import { of } from 'rxjs';
import { map } from 'rxjs/operators';

// Création de l'observable
const source$ = of(1, 2, 3, 4, 5);

// Transformation des valeurs
const doubled$ = source$.pipe(
  map(value => value * 2)
);

// Abonnement à l'observable
doubled$.subscribe(value => console.log(value));
