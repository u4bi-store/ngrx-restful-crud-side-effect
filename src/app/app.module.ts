import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { todosReducer } from './providers/todos/reducers/todos.reducer';
import { TodosEffects } from './providers/todos/effects/todos.effects';

import { visibilityFilterReducer } from './providers/visibility-filter/reducers/visibility-filter.reducer';


import { TodosService } from './providers/todos/todos.service';

import { AppComponent } from './app.component';
import { TodoComponent } from './pages/todo/todo.component';
import { TodosComponent } from './pages/todos/todos.component';
import { AddTodoComponent } from './pages/add-todo/add-todo.component';
import { FiltersComponent } from './pages/filters/filters.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    TodosComponent,
    AddTodoComponent,
    FiltersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({
      todos : todosReducer,
      visibilityFilter : visibilityFilterReducer
    }),
    EffectsModule.forRoot([TodosEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25
    })
  ],
  providers: [TodosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
