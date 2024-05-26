import { of } from 'rxjs';
import { map } from 'rxjs/operators';

describe('Exercice 1: Création et Transformation d\'Observables', () => {
  it('should double each emitted value', () => {
    const source$ = of(1, 2, 3, 4, 5);
    const doubled$ = source$.pipe(map(value => value * 2));

    const expected = [2, 4, 6, 8, 10];
    let result: number[] = [];

    doubled$.subscribe(value => result.push(value));

    expect(result).toEqual(expected);
  });
});
