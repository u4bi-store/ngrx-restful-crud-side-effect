import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class TodosService {

    constructor() { }

    getTodos(){

        const todos = [
            {
                id: 1,
                title: "todo 1",
                completed: false
            },
            {
                id: 2,
                title: "todo 2",
                completed: false
            },
            {
                id: 3,
                title: "todo 3",
                completed: false
            },
            {
                id: 4,
                title: "todo 4",
                completed: false
            }
        ];
        
        return Observable.timer(1000).mapTo(todos);
    }

    addTodo(action) {
        let title = action.payload.title;
        return Observable.timer(50)
            .mapTo({
                id: Math.random(),
                title,
                completed : false
            });
    }

}
