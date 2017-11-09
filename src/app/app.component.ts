import { Component } from '@angular/core';
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";

import * as TodosActions from './providers/todos/actions/todos.actions';

import { getTodos, addTodo, toggleTodo } from './providers/todos/reducers/todos.reducer';
import { TodosEffects } from './providers/todos/effects/todos.effects';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  todos : Observable<any>;
  addTodoSuccess$ : Observable<any>;  

  constructor(private store : Store<any>, private todosEffects : TodosEffects) {
      this.store.dispatch(getTodos());
      this.todos = store.select("todos");
      
      this.addTodoSuccess$ = this.todosEffects.addTodo$.filter(( { type } ) => type === TodosActions.ADD_TODO_SUCCESS);

  }

  addTodo(todo) {
    this.store.dispatch(addTodo(todo));
  }

  toggle(todo) {
    this.store.dispatch(toggleTodo(todo));
  }

}
