import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { todosReducer } from './providers/todos/reducers/todos.reducer';
import { TodosEffects } from './providers/todos/effects/todos.effects';

import { TodosService } from './providers/todos/todos.service';

import { AppComponent } from './app.component';
import { TodoComponent } from './pages/todo/todo.component';
import { TodosComponent } from './pages/todos/todos.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    TodosComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({
      todos : todosReducer
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
