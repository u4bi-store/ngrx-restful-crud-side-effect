import * as TdosActions from '../actions/todos.actions';

export function getTodos() {
    return {
        type: TdosActions.GET_TODOS
    }
}

const initialState = {
    data: [],
    pending: false,
    error: null
}

export function todosReducer( state = initialState, { type, payload } ) {
    
    switch( type ) {
        case TdosActions.GET_TODOS:
          return Object.assign({}, state, {pending: true, error: null})
        case TdosActions.GET_TODOS_SUCCESS:
          return Object.assign({}, state, {data: payload, pending: false})
        case TdosActions.GET_TODOS_ERROR:
          return Object.assign({}, state, {pending: false, error: "Error"})
        default:
          return state;
    }

}    