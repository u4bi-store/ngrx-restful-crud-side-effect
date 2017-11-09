import { Component Input, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']  
})
export class TodosComponent {

    @Input('todos') todos;
    @Output() toggle = new EventEmitter<any>();

}
