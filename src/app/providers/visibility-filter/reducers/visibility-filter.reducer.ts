import * as VisibilityFilterActions from '../actions/visibility-filter.actions';

export function setVisibilityFilter( filter ) {
    return {
    type: VisibilityFilterActions.SET_VISIBILITY_FILTER,
    payload: filter
    }
}

export function visibilityFilterReducer( state = "SHOW_ALL", action ) {
    switch( action.type ) {
    case VisibilityFilterActions.SET_VISIBILITY_FILTER:
        return action.payload;
    default:
        return state;
    }
}