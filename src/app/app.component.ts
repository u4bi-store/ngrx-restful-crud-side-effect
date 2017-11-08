import { Component } from '@angular/core';
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";

import { getTodos } from './providers/todos/reducers/todos.reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  todos : Observable<any>;

  constructor(private store : Store<any>) {
      this.store.dispatch(getTodos());
      this.todos = store.select("todos");

  }
}
