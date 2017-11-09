import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class TodosService {

    constructor() { }

    getTodos(filter){
        return Observable.ajax({
                url : 'http://localhost:7778/todos',
                method : 'GET',
                crossDomain: true
            })
            .map(e => this.getVisibleTodos(e.response, filter))
            .catch( (error) =>  Observable.of(console.error('error', error)));
    }

    addTodo(action) {
        return Observable.ajax({
                url : 'http://localhost:7778/todos',
                method : 'POST',
                crossDomain: true,
                headers: {
                    'Content-Type': 'application/json'
                },
                body : {
                    title : action.payload.title,
                    completed : false
                }
            })
            .map(e => e.response)
            .catch( (error) =>  Observable.of(console.error('error', error)));
    }

    toggleTodo(action) {
        return Observable.ajax({
                url : 'http://localhost:7778/todos/' + action.payload.id,
                method : 'PUT',
                crossDomain: true,
                headers: {
                    'Content-Type': 'application/json'
                },
                body : {
                    title : action.payload.title,
                    completed : !action.payload.completed
                }
            })
            .map(e => e.response)
            .catch( (error) =>  Observable.of(console.error('error', error)));
    }

    deleteTodo(action) {
        return Observable.ajax({
                url : 'http://localhost:7778/todos/' + action.payload.id,
                method : 'DELETE',
                crossDomain: true
            })
            .mapTo(action.payload)
            .catch( (error) =>  Observable.of(console.error('error', error)));
    }

    getVisibleTodos(todos, filter) {
        switch(filter){
            case 'SHOW_ALL': 
                return todos;
            case 'SHOW_COMPLETED': 
                return todos.filter(t => t.completed);
            default :
                return todos.filter(t => !t.completed);
        }
    }
        
}
