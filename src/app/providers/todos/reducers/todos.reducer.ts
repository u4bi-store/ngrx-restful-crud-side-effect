import * as TodosActions from '../actions/todos.actions';

const initialState = {
    data: [],
    pending: false,
    error: null
}

export function todosReducer( state = initialState, { type, payload } ) {
    
    switch( type ) {
        case TodosActions.GET_TODOS:
          return Object.assign({}, state, {pending: true, error: null})
        case TodosActions.GET_TODOS_SUCCESS:
          return Object.assign({}, state, {data: payload, pending: false})
        case TodosActions.GET_TODOS_ERROR:
          return Object.assign({}, state, {pending: false, error: "Error"})
        /* add */
        case TodosActions.ADD_TODO_SUCCESS:
            return Object.assign({}, state, {
                data: [...state.data, payload]
            });
        /* update */
        case TodosActions.TOGGLE_TODO_SUCCESS:
            return Object.assign({}, state, {
                data: state.data.map(todo => {
                    if( todo.id === payload.id ) return Object.assign({}, todo, {
                        completed: !todo.completed
                    });
                    
                    return todo;
                })
            })
        /* delete */
        case TodosActions.DELETE_TODO_SUCCESS:
            return Object.assign({}, state, {
                data: state.data.filter(item => item.id !== payload.id)
            })            
        default:
            return state;
    }

}

export function getTodos() {
    return {
        type: TodosActions.GET_TODOS
    }
}

export function addTodo( title ) {
    return {
        type: TodosActions.ADD_TODO,
        payload: {
            title
        }
    }
}

export function toggleTodo( todo ) {
    return {
      type: TodosActions.TOGGLE_TODO,
      payload: todo
    }
  }

export function deleteTodo( id ) {
    return {
      type: TodosActions.DELETE_TODO,
      payload: {
          id
      }
    }
  }