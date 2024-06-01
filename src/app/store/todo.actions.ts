// src/app/store/todo.actions.ts
import { createAction, props } from '@ngrx/store';
import { Todo } from '../models/todo.model';

/**
 * Actions : Les actions sont des objets qui décrivent un événement unique que quelque chose
 * s'est produit (par exemple, une commande utilisateur, une réponse serveur).
 */
export const loadTodos = createAction('[Todo] Load Todos');
export const loadTodosSuccess = createAction(
  '[Todo] Load Todos Success',
  props<{ todos: Todo[] }>()
);
export const loadTodosFailure = createAction(
  '[Todo] Load Todos Failure',
  props<{ error: any }>()
);

// Ajouter une tâche
export const addTodo = createAction(
  '[Todo] Add Todo',
  props<{ todo: Todo }>()
);

// Supprimer une tâche
export const removeTodo = createAction(
  '[Todo] Remove Todo',
  props<{ id: number }>()
);
