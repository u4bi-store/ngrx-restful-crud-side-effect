import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  @Input('todo') todo;
  @Output() toggle = new EventEmitter<any>();
  
  constructor() { }

  ngOnInit() {
  }

}
