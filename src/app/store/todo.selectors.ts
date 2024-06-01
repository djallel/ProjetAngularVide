// src/app/store/todo.selectors.ts
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TodoState } from './todo.reducer';

/**
 * Selectors : Les sélecteurs sont des fonctions qui permettent
 * d'extraire des parties spécifiques de l'état du store.
 */
export const selectTodoState = createFeatureSelector<TodoState>('todo');

export const selectTodos = createSelector(
  selectTodoState,
  (state: TodoState) => state.todos
);
