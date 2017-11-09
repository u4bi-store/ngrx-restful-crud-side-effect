webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-filters\n    [filters]=\"filters\"\n    [active]=\"activeFilter | async\"\n    (changeFilter)=\"changeFilter($event)\">\n</app-filters>\n\n<br>\n\n<app-todos\n    [todos]=\"todos | async\"\n    (toggle)=\"toggle($event)\">\n</app-todos>\n\n<app-add-todo (add)=\"addTodo($event)\" [reset]=\"addTodoSuccess$ | async\"></app-add-todo>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_todos_actions_todos_actions__ = __webpack_require__("../../../../../src/app/providers/todos/actions/todos.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_visibility_filter_reducers_visibility_filter_reducer__ = __webpack_require__("../../../../../src/app/providers/visibility-filter/reducers/visibility-filter.reducer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_todos_reducers_todos_reducer__ = __webpack_require__("../../../../../src/app/providers/todos/reducers/todos.reducer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_todos_effects_todos_effects__ = __webpack_require__("../../../../../src/app/providers/todos/effects/todos.effects.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AppComponent = (function () {
    function AppComponent(store, todosEffects) {
        this.store = store;
        this.todosEffects = todosEffects;
        this.filters = [
            { id: 'SHOW_ALL', title: 'All' },
            { id: 'SHOW_COMPLETED', title: 'Completed' },
            { id: 'SHOW_ACTIVE', title: 'Active' }
        ];
        this.store.dispatch(Object(__WEBPACK_IMPORTED_MODULE_4__providers_todos_reducers_todos_reducer__["b" /* getTodos */])());
        this.todos = store.select("todos");
        this.addTodoSuccess$ = this.todosEffects.addTodo$.filter(function (_a) {
            var type = _a.type;
            return type === __WEBPACK_IMPORTED_MODULE_2__providers_todos_actions_todos_actions__["c" /* ADD_TODO_SUCCESS */];
        });
        this.activeFilter = store.select('visibilityFilter').take(1);
    }
    AppComponent.prototype.addTodo = function (todo) {
        this.store.dispatch(Object(__WEBPACK_IMPORTED_MODULE_4__providers_todos_reducers_todos_reducer__["a" /* addTodo */])(todo));
    };
    AppComponent.prototype.toggle = function (todo) {
        this.store.dispatch(Object(__WEBPACK_IMPORTED_MODULE_4__providers_todos_reducers_todos_reducer__["d" /* toggleTodo */])(todo));
    };
    AppComponent.prototype.changeFilter = function (filter) {
        this.store.dispatch(Object(__WEBPACK_IMPORTED_MODULE_3__providers_visibility_filter_reducers_visibility_filter_reducer__["a" /* setVisibilityFilter */])(filter));
        this.store.dispatch(Object(__WEBPACK_IMPORTED_MODULE_4__providers_todos_reducers_todos_reducer__["b" /* getTodos */])());
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ngrx_store__["h" /* Store */], __WEBPACK_IMPORTED_MODULE_5__providers_todos_effects_todos_effects__["a" /* TodosEffects */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngrx_effects__ = __webpack_require__("../../../../@ngrx/effects/@ngrx/effects.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngrx_store_devtools__ = __webpack_require__("../../../../@ngrx/store-devtools/@ngrx/store-devtools.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_todos_reducers_todos_reducer__ = __webpack_require__("../../../../../src/app/providers/todos/reducers/todos.reducer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_todos_effects_todos_effects__ = __webpack_require__("../../../../../src/app/providers/todos/effects/todos.effects.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_visibility_filter_reducers_visibility_filter_reducer__ = __webpack_require__("../../../../../src/app/providers/visibility-filter/reducers/visibility-filter.reducer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_todos_todos_service__ = __webpack_require__("../../../../../src/app/providers/todos/todos.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_todo_todo_component__ = __webpack_require__("../../../../../src/app/pages/todo/todo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_todos_todos_component__ = __webpack_require__("../../../../../src/app/pages/todos/todos.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_add_todo_add_todo_component__ = __webpack_require__("../../../../../src/app/pages/add-todo/add-todo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_filters_filters_component__ = __webpack_require__("../../../../../src/app/pages/filters/filters.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_11__pages_todo_todo_component__["a" /* TodoComponent */],
                __WEBPACK_IMPORTED_MODULE_12__pages_todos_todos_component__["a" /* TodosComponent */],
                __WEBPACK_IMPORTED_MODULE_13__pages_add_todo_add_todo_component__["a" /* AddTodoComponent */],
                __WEBPACK_IMPORTED_MODULE_14__pages_filters_filters_component__["a" /* FiltersComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["i" /* StoreModule */].forRoot({
                    todos: __WEBPACK_IMPORTED_MODULE_6__providers_todos_reducers_todos_reducer__["c" /* todosReducer */],
                    visibilityFilter: __WEBPACK_IMPORTED_MODULE_8__providers_visibility_filter_reducers_visibility_filter_reducer__["b" /* visibilityFilterReducer */]
                }),
                __WEBPACK_IMPORTED_MODULE_4__ngrx_effects__["c" /* EffectsModule */].forRoot([__WEBPACK_IMPORTED_MODULE_7__providers_todos_effects_todos_effects__["a" /* TodosEffects */]]),
                __WEBPACK_IMPORTED_MODULE_5__ngrx_store_devtools__["a" /* StoreDevtoolsModule */].instrument({
                    maxAge: 25
                })
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_9__providers_todos_todos_service__["a" /* TodosService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/pages/add-todo/add-todo.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/add-todo/add-todo.component.html":
/***/ (function(module, exports) {

module.exports = "<input type=\"text\" placeholder=\"Add todo..\" [formControl]=\"control\">\n\n<button (click)=\"add.next(control.value)\">Add</button>"

/***/ }),

/***/ "../../../../../src/app/pages/add-todo/add-todo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddTodoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AddTodoComponent = (function () {
    function AddTodoComponent() {
        this.control = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('');
        this.add = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
    }
    AddTodoComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(AddTodoComponent.prototype, "reset", {
        set: function (action) {
            action && this.control.reset();
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Output */])(),
        __metadata("design:type", Object)
    ], AddTodoComponent.prototype, "add", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], AddTodoComponent.prototype, "reset", null);
    AddTodoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-add-todo',
            template: __webpack_require__("../../../../../src/app/pages/add-todo/add-todo.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/add-todo/add-todo.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AddTodoComponent);
    return AddTodoComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/filters/filters.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/filters/filters.component.html":
/***/ (function(module, exports) {

module.exports = "<select [formControl]=\"filter\" (change)=\"changeFilter.next(filter.value)\">\n\n    <option *ngFor=\"let filter of filters\" [ngValue]=\"filter.id\">{{ filter.title }}</option>\n\n</select>"

/***/ }),

/***/ "../../../../../src/app/pages/filters/filters.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FiltersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FiltersComponent = (function () {
    function FiltersComponent() {
        this.changeFilter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
        this.filter = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]();
    }
    FiltersComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(FiltersComponent.prototype, "active", {
        set: function (val) {
            this.filter.setValue(val);
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])('filters'),
        __metadata("design:type", Object)
    ], FiltersComponent.prototype, "filters", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Output */])(),
        __metadata("design:type", Object)
    ], FiltersComponent.prototype, "changeFilter", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], FiltersComponent.prototype, "active", null);
    FiltersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-filters',
            template: __webpack_require__("../../../../../src/app/pages/filters/filters.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/filters/filters.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FiltersComponent);
    return FiltersComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/todo/todo.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/todo/todo.component.html":
/***/ (function(module, exports) {

module.exports = "<p\n    (click)=\"toggle.next(todo)\"\n    [ngStyle]=\"{ textDecoration: todo.completed ? 'line-through' : 'none'}\"\n>\n  {{ todo.title }}\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/pages/todo/todo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TodoComponent = (function () {
    function TodoComponent() {
        this.toggle = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])('todo'),
        __metadata("design:type", Object)
    ], TodoComponent.prototype, "todo", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Output */])(),
        __metadata("design:type", Object)
    ], TodoComponent.prototype, "toggle", void 0);
    TodoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-todo',
            template: __webpack_require__("../../../../../src/app/pages/todo/todo.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/todo/todo.component.css")]
        })
    ], TodoComponent);
    return TodoComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/todos/todos.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/todos/todos.component.html":
/***/ (function(module, exports) {

module.exports = "<p *ngIf=\"todos.pending\">loading...</p>\n\n<app-todo\n    [todo]=\"todo\"\n    *ngFor=\"let todo of todos.data\"\n    (toggle)=\"toggle.next($event)\"\n>\n</app-todo>\n\n<p *ngIf=\"todos.error\">{{todos.error}}</p>"

/***/ }),

/***/ "../../../../../src/app/pages/todos/todos.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodosComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TodosComponent = (function () {
    function TodosComponent() {
        this.toggle = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])('todos'),
        __metadata("design:type", Object)
    ], TodosComponent.prototype, "todos", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Output */])(),
        __metadata("design:type", Object)
    ], TodosComponent.prototype, "toggle", void 0);
    TodosComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-todos',
            template: __webpack_require__("../../../../../src/app/pages/todos/todos.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/todos/todos.component.css")]
        })
    ], TodosComponent);
    return TodosComponent;
}());



/***/ }),

/***/ "../../../../../src/app/providers/todos/actions/todos.actions.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return GET_TODOS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return GET_TODOS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return GET_TODOS_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ADD_TODO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ADD_TODO_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ADD_TODO_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return TOGGLE_TODO; });
var GET_TODOS = "GET_TODOS";
var GET_TODOS_SUCCESS = "GET_TODOS_SUCCESS";
var GET_TODOS_ERROR = "GET_TODOS_ERROR";
var ADD_TODO = "ADD_TODO";
var ADD_TODO_SUCCESS = "ADD_TODO_SUCCESS";
var ADD_TODO_ERROR = "ADD_TODO_ERROR";
var TOGGLE_TODO = "TOGGLE_TODO";


/***/ }),

/***/ "../../../../../src/app/providers/todos/effects/todos.effects.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodosEffects; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_effects__ = __webpack_require__("../../../../@ngrx/effects/@ngrx/effects.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__actions_todos_actions__ = __webpack_require__("../../../../../src/app/providers/todos/actions/todos.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__todos_service__ = __webpack_require__("../../../../../src/app/providers/todos/todos.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TodosEffects = (function () {
    function TodosEffects(actions$, todosService, store) {
        var _this = this;
        this.actions$ = actions$;
        this.todosService = todosService;
        this.store = store;
        this.getTodos$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_4__actions_todos_actions__["d" /* GET_TODOS */])
            .withLatestFrom(this.store.select('visibilityFilter'), function (action, filter) { return filter; })
            .switchMap(function (filter) {
            return _this.todosService.getTodos(filter)
                .map(function (todos) { return ({
                type: __WEBPACK_IMPORTED_MODULE_4__actions_todos_actions__["f" /* GET_TODOS_SUCCESS */],
                payload: todos
            }); })
                .catch(function () { return __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"].of({
                type: __WEBPACK_IMPORTED_MODULE_4__actions_todos_actions__["e" /* GET_TODOS_ERROR */]
            }); });
        });
        this.addTodo$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_4__actions_todos_actions__["a" /* ADD_TODO */])
            .switchMap(function (action) {
            return _this.todosService.addTodo(action)
                .map(function (todo) { return ({
                type: __WEBPACK_IMPORTED_MODULE_4__actions_todos_actions__["c" /* ADD_TODO_SUCCESS */],
                payload: todo
            }); })
                .catch(function () { return __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"].of({
                type: __WEBPACK_IMPORTED_MODULE_4__actions_todos_actions__["b" /* ADD_TODO_ERROR */]
            }); });
        });
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", Object)
    ], TodosEffects.prototype, "getTodos$", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", Object)
    ], TodosEffects.prototype, "addTodo$", void 0);
    TodosEffects = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ngrx_effects__["a" /* Actions */], __WEBPACK_IMPORTED_MODULE_5__todos_service__["a" /* TodosService */], __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["h" /* Store */]])
    ], TodosEffects);
    return TodosEffects;
}());



/***/ }),

/***/ "../../../../../src/app/providers/todos/reducers/todos.reducer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["c"] = todosReducer;
/* harmony export (immutable) */ __webpack_exports__["b"] = getTodos;
/* harmony export (immutable) */ __webpack_exports__["a"] = addTodo;
/* harmony export (immutable) */ __webpack_exports__["d"] = toggleTodo;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_todos_actions__ = __webpack_require__("../../../../../src/app/providers/todos/actions/todos.actions.ts");

var initialState = {
    data: [],
    pending: false,
    error: null
};
function todosReducer(state, _a) {
    if (state === void 0) { state = initialState; }
    var type = _a.type, payload = _a.payload;
    switch (type) {
        case __WEBPACK_IMPORTED_MODULE_0__actions_todos_actions__["d" /* GET_TODOS */]:
            return Object.assign({}, state, { pending: true, error: null });
        case __WEBPACK_IMPORTED_MODULE_0__actions_todos_actions__["f" /* GET_TODOS_SUCCESS */]:
            return Object.assign({}, state, { data: payload, pending: false });
        case __WEBPACK_IMPORTED_MODULE_0__actions_todos_actions__["e" /* GET_TODOS_ERROR */]:
            return Object.assign({}, state, { pending: false, error: "Error" });
        /* add */
        case __WEBPACK_IMPORTED_MODULE_0__actions_todos_actions__["c" /* ADD_TODO_SUCCESS */]:
            return Object.assign({}, state, {
                data: state.data.concat([payload])
            });
        /* update */
        case __WEBPACK_IMPORTED_MODULE_0__actions_todos_actions__["g" /* TOGGLE_TODO */]:
            return Object.assign({}, state, {
                data: state.data.map(function (todo) {
                    if (todo.id === payload.id)
                        return Object.assign({}, todo, {
                            completed: !todo.completed
                        });
                    return todo;
                })
            });
        default:
            return state;
    }
}
function getTodos() {
    return {
        type: __WEBPACK_IMPORTED_MODULE_0__actions_todos_actions__["d" /* GET_TODOS */]
    };
}
function addTodo(title) {
    return {
        type: __WEBPACK_IMPORTED_MODULE_0__actions_todos_actions__["a" /* ADD_TODO */],
        payload: {
            title: title,
        }
    };
}
function toggleTodo(todo) {
    return {
        type: __WEBPACK_IMPORTED_MODULE_0__actions_todos_actions__["g" /* TOGGLE_TODO */],
        payload: todo
    };
}


/***/ }),

/***/ "../../../../../src/app/providers/todos/todos.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodosService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TodosService = (function () {
    function TodosService() {
    }
    TodosService.prototype.getTodos = function (filter) {
        var todos = [
            {
                id: 1,
                title: 'todo 1',
                completed: false
            },
            {
                id: 2,
                title: 'todo 2',
                completed: false
            },
            {
                id: 3,
                title: 'todo 3',
                completed: false
            },
            {
                id: 4,
                title: 'todo 4',
                completed: true
            }
        ];
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["a" /* Observable */].timer(100).mapTo(this.getVisibleTodos(todos, filter));
    };
    TodosService.prototype.addTodo = function (action) {
        var title = action.payload.title;
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["a" /* Observable */].timer(50)
            .mapTo({
            id: Math.random(),
            title: title,
            completed: false
        });
    };
    TodosService.prototype.getVisibleTodos = function (todos, filter) {
        switch (filter) {
            case 'SHOW_ALL':
                return todos;
            case 'SHOW_COMPLETED':
                return todos.filter(function (t) { return t.completed; });
            default:
                return todos.filter(function (t) { return !t.completed; });
        }
    };
    TodosService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], TodosService);
    return TodosService;
}());



/***/ }),

/***/ "../../../../../src/app/providers/visibility-filter/actions/visibility-filter.actions.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SET_VISIBILITY_FILTER; });
var SET_VISIBILITY_FILTER = "SET_VISIBILITY_FILTER";


/***/ }),

/***/ "../../../../../src/app/providers/visibility-filter/reducers/visibility-filter.reducer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = setVisibilityFilter;
/* harmony export (immutable) */ __webpack_exports__["b"] = visibilityFilterReducer;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_visibility_filter_actions__ = __webpack_require__("../../../../../src/app/providers/visibility-filter/actions/visibility-filter.actions.ts");

function setVisibilityFilter(filter) {
    return {
        type: __WEBPACK_IMPORTED_MODULE_0__actions_visibility_filter_actions__["a" /* SET_VISIBILITY_FILTER */],
        payload: filter
    };
}
function visibilityFilterReducer(state, action) {
    if (state === void 0) { state = "SHOW_ALL"; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__actions_visibility_filter_actions__["a" /* SET_VISIBILITY_FILTER */]:
            return action.payload;
        default:
            return state;
    }
}


/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map