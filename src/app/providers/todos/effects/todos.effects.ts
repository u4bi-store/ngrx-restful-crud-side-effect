import { Injectable } from '@angular/core';
import { Actions, Effect } from "@ngrx/effects";
import { Observable } from "rxjs";

import * as TdosActions from '../actions/todos.actions';
import { TodosService } from "../todos.service";

@Injectable()
export class TodosEffects {

	constructor( private actions$ : Actions, private todosService : TodosService ) {

	}

	@Effect() getTodos$ = this.actions$
		.ofType(TdosActions.GET_TODOS)
			.switchMap(action =>
				this.todosService.getTodos()
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
