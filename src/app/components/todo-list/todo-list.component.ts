// src/app/components/todo-list/todo-list.component.ts
import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Todo } from '../../models/todo.model';
import { loadTodos, addTodo, removeTodo } from '../../store/todo.actions';
import { selectTodos } from '../../store/todo.selectors';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos$: Observable<Todo[]>;

  constructor(private store: Store<any>) {
    this.todos$ = this.store.pipe(select(selectTodos));
  }

  ngOnInit(): void {
    this.store.dispatch(loadTodos());
  }

  addTodo(): void {
    const newTodo: Todo = {
      id: Math.random(), // Simple ID generator
      title: 'Nouvelle tâche',
      completed: false
    };
    this.store.dispatch(addTodo({ todo: newTodo }));
  }

  removeTodo(id: number): void {
    this.store.dispatch(removeTodo({ id }));
  }
}
