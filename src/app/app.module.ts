import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
