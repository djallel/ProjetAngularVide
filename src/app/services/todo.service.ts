// src/app/services/todo.service.ts
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Todo } from '../models/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todos: Todo[] = [
    { id: 1, title: 'Faire les courses', completed: false },
    { id: 2, title: 'Répondre aux emails', completed: true },
    { id: 3, title: 'Faire du sport', completed: false }
  ];

  getTodos(): Observable<Todo[]> {
    return of(this.todos);
  }
}
