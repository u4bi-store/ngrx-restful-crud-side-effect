import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { setVisibilityFilter } from '../../providers/visibility-filter/reducers/visibility-filter.reducer';

import { getTodos } from '../../providers/todos/reducers/todos.reducer';
import { TodosEffects } from '../../providers/todos/effects/todos.effects';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']  
})
export class TodosComponent implements OnInit {

    filters = [
        { id: 'SHOW_ALL', title: 'All'},
        { id: 'SHOW_COMPLETED', title: 'Completed'},
        { id: 'SHOW_ACTIVE', title: 'Active'}
    ];

    activeFilter : Observable<any>;

    @Input('todos') todos;
    @Output() toggle = new EventEmitter<any>();    

    constructor(private store : Store<any>, private todosEffects : TodosEffects) {
        this.activeFilter = store.select('visibilityFilter').take(1);
    }

    ngOnInit() {
    }
    
    changeFilter( filter ) {
        this.store.dispatch(setVisibilityFilter(filter));
        this.store.dispatch(getTodos());
    }
}
