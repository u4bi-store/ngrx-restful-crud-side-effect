import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {

    @Input('filters') filters;
    @Output() changeFilter = new EventEmitter<any>();
    filter : FormControl;

    constructor() {
        this.filter = new FormControl();    
    }

    ngOnInit() {
    }

    @Input() set active( val ) {
        this.filter.setValue(val);
    }

}
