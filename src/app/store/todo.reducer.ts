// src/app/store/todo.reducer.ts

import { createReducer, on } from '@ngrx/store';
import { Todo } from '../models/todo.model';
import { loadTodosSuccess, addTodo, removeTodo } from './todo.actions';

// 1. Définition de l'interface de l'état
export interface TodoState {
  todos: Todo[];
}

// 2. Définition de l'état initial
export const initialState: TodoState = {
  todos: []
};

/**
 * Reducer : Le reducer est une fonction qui prend l'état actuel et une action, puis retourne un nouvel état.
 */
// 3. Création du reducer

export const todoReducer = createReducer(
  initialState,

  // 3a. Gestion de l'action loadTodosSuccess
  on(loadTodosSuccess, (state, { todos }) => ({ ...state, todos })),

  // 3b. Gestion de l'action addTodo
  on(addTodo, (state, { todo }) => ({ ...state, todos: [...state.todos, todo] })),

  // 3c. Gestion de l'action removeTodo
  on(removeTodo, (state, { id }) => ({ ...state, todos: state.todos.filter(todo => todo.id !== id) }))
);
