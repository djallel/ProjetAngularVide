// Importation des décorateurs et outils nécessaires pour les effets NgRx.
import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

// Importation du service Todo et des actions liées aux todos.
import { TodoService } from '../services/todo.service';
import { loadTodos, loadTodosSuccess, loadTodosFailure } from './todo.actions';

// Déclare une classe injectable pour permettre l'injection de dépendances.
@Injectable()
export class TodoEffects {
  // Déclare un effet pour charger les todos.
  // Utilise createEffect pour créer un effet NgRx.
  loadTodos$ = createEffect(() =>
    // Utilise l'observable actions$ pour écouter les actions dispatchées.
    this.actions$.pipe(
      // Filtre les actions pour ne garder que celles de type loadTodos.
      ofType(loadTodos),
      // Utilise switchMap pour appeler le service getTodos après une action loadTodos.
      switchMap(() =>
        // Appel du service todoService pour obtenir les todos.
        this.todoService.getTodos().pipe(
          // Mappe les todos récupérés à l'action loadTodosSuccess.
          map(todos => loadTodosSuccess({ todos })),
          // Capture et gère les erreurs en retournant l'action loadTodosFailure.
          catchError(error => of(loadTodosFailure({ error })))
        )
      )
    )
  );

  // Constructeur pour injecter les dépendances actions$ et todoService.
  constructor(
    private actions$: Actions, // Flux des actions dispatchées.
    private todoService: TodoService // Service pour obtenir les todos.
  ) {}
}


/**
 * Détails supplémentaires
 * @Injectable(): Décorateur qui permet à Angular de savoir que cette classe peut avoir des dépendances injectées via le mécanisme d'injection de dépendances.
 * createEffect: Fonction qui crée un effet NgRx. Un effet est une fonction qui écoute les actions dispatchées et peut effectuer des tâches asynchrones.
 * actions$: Observable qui émet toutes les actions dispatchées dans l'application.
 * ofType(loadTodos): Filtre les actions pour ne garder que celles de type loadTodos.
 * switchMap: Opérateur RxJS qui, lorsqu'une nouvelle action est reçue, annule la précédente observable et commence une nouvelle observable.
 * this.todoService.getTodos(): Appel du service pour obtenir la liste des todos.
 * map(todos => loadTodosSuccess({ todos })): Transforme les todos récupérés en une action loadTodosSuccess qui est ensuite dispatchée.
 * catchError(error => of(loadTodosFailure({ error }))): Capture les erreurs survenues lors de l'appel du service et retourne une action loadTodosFailure avec l'erreur.
 */
