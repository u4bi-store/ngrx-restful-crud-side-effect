import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs';

import * as TdosActions from '../actions/todos.actions';
import { TodosService } from '../todos.service';

@Injectable()
export class TodosEffects {

	constructor( private actions$ : Actions, private todosService : TodosService, private store : Store<any> ) {

	}

	@Effect() getTodos$ = this.actions$
		.ofType(TdosActions.GET_TODOS)
		.withLatestFrom(this.store.select('visibilityFilter'), ( action, filter ) => filter)		
			.switchMap(filter =>
				this.todosService.getTodos(filter)
					.map(todos => (
						{
							type : TdosActions.GET_TODOS_SUCCESS,
							payload : todos
						}
					)
				)
				.catch(() => Observable.of(
					{
						type : TdosActions.GET_TODOS_ERROR
					}
				)
			)
		);

	@Effect() addTodo$ = this.actions$
	.ofType(TdosActions.ADD_TODO)
		.switchMap(action =>
			this.todosService.addTodo(action)
				.map(todo => (
					{
						type : TdosActions.ADD_TODO_SUCCESS,
						payload: todo
					}
				))
				.catch(() => Observable.of(
					{
						type : TdosActions.ADD_TODO_ERROR
					}
				)
			)
		);

}
