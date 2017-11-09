import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs';

import * as TodosActions from '../actions/todos.actions';
import { TodosService } from '../todos.service';

@Injectable()
export class TodosEffects {

	constructor( private actions$ : Actions, private todosService : TodosService, private store : Store<any> ) {

	}

	@Effect() getTodos$ = this.actions$
		.ofType(TodosActions.GET_TODOS)
		.withLatestFrom(this.store.select('visibilityFilter'), ( action, filter ) => filter)		
			.switchMap(filter =>
				this.todosService.getTodos(filter)
					.map(todos => (
						{
							type : TodosActions.GET_TODOS_SUCCESS,
							payload : todos
						}
					)
				)
				.catch(() => Observable.of(
					{
						type : TodosActions.GET_TODOS_ERROR
					}
				)
			)
		);

	@Effect() addTodo$ = this.actions$
	.ofType(TodosActions.ADD_TODO)
		.switchMap(action => this.todosService.addTodo(action)
			.map(todo => (
				{
					type : TodosActions.ADD_TODO_SUCCESS,
					payload: todo
				}
			))
			.catch(() => Observable.of(
				{
					type : TodosActions.ADD_TODO_ERROR
				}
			))
		);

	@Effect() toggleTodo$ = this.actions$
	.ofType(TodosActions.TOGGLE_TODO)
		.switchMap(action => this.todosService.toggleTodo(action)
			.map(todo => (
				{
					type : TodosActions.TOGGLE_TODO_SUCCESS,
					payload: todo
				}
			))
			.catch(() => Observable.of(
				{
					type : TodosActions.TOGGLE_TODO_ERROR
				}
			))
		);

	@Effect() deleteTodo$ = this.actions$
		.ofType(TodosActions.DELETE_TODO)
			.switchMap(action => this.todosService.deleteTodo(action)
				.map(todo => (
					{
						type : TodosActions.DELETE_TODO_SUCCESS,
						payload: todo
					}
				))
				.catch(() => Observable.of(
					{
						type : TodosActions.DELETE_TODO_ERROR
					}
				))
			);
}
