import { Component } from '@angular/core';
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";

import * as TodosActions from './providers/todos/actions/todos.actions';

import { setVisibilityFilter } from './providers/visibility-filter/reducers/visibility-filter.reducer';

import { getTodos, addTodo, toggleTodo } from './providers/todos/reducers/todos.reducer';
import { TodosEffects } from './providers/todos/effects/todos.effects';

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

  constructor(private store : Store<any>, private todosEffects : TodosEffects) {
      this.store.dispatch(getTodos());
      this.todos = store.select("todos");
      
      this.addTodoSuccess$ = this.todosEffects.addTodo$.filter(( { type } ) => type === TodosActions.ADD_TODO_SUCCESS);
      this.activeFilter = store.select('visibilityFilter').take(1);
  }

  addTodo(todo) {
    this.store.dispatch(addTodo(todo));
  }

  toggle(todo) {
    this.store.dispatch(toggleTodo(todo));
  }
  
  changeFilter( filter ) {
    this.store.dispatch(setVisibilityFilter(filter));
    this.store.dispatch(getTodos());
  }

}
