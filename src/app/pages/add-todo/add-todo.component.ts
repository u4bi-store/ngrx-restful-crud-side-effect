import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {

  control : FormControl = new FormControl('');
  @Output() add = new EventEmitter();
  
  constructor() { }

  ngOnInit() {
  }

  @Input()
  public set reset( action ) {
    action && this.control.reset();
  }

}
