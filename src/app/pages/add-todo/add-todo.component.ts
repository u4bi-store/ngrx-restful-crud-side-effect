import { Component, OnInit, Output, EventEmitter } from '@angular/core';
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

  send(){
    this.add.next(this.control.value);
    this.control.reset();
  }

}
