import { Component } from '@angular/core';
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";

import * as TodosActions from './providers/todos/actions/todos.actions';

import { setVisibilityFilter } from './providers/visibility-filter/reducers/visibility-filter.reducer';

import * as TodosReducers from './providers/todos/reducers/todos.reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  filters = [
      { id: 'SHOW_ALL', title: 'All'},
      { id: 'SHOW_COMPLETED', title: 'Completed'},
      { id: 'SHOW_ACTIVE', title: 'Active'}
  ];

  activeFilter : Observable<any>;
  todos : Observable<any>;
  addTodoSuccess$ : Observable<any>;

  constructor(private store : Store<any>) {
      this.store.dispatch(TodosReducers.getTodos());
      this.todos = store.select("todos");
      this.activeFilter = store.select('visibilityFilter').take(1);
  }

  addTodo(todo) {
    this.store.dispatch(TodosReducers.addTodo(todo));
  }

  toggle(todo) {
    this.store.dispatch(TodosReducers.toggleTodo(todo));
  }

  deleteTodo(id) {
    this.store.dispatch(TodosReducers.deleteTodo(id));
  }
  
  changeFilter( filter ) {
    this.store.dispatch(setVisibilityFilter(filter));
    this.store.dispatch(TodosReducers.getTodos());
  }

}
