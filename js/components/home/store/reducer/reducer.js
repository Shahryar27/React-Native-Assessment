import ActionTypes from '../constant/constant';

const initialState = {
    todo: [],
}

export default (state=initialState, action) => {
    console.log('action',action)
    switch(action.type) {
        case ActionTypes.ADDTODO:
            return({
                ...state,
                // todos: [action.payload, ...state.todos]
                todo: action.payload
            })
            case ActionTypes.DELETETODO:
                return({
                    ...state,
                    todo: action.payload
                })
            default:
            return state;
    }
}