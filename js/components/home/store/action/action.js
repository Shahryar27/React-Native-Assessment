import ActionTypes from '../constant/constant';

export function add_Todo(addition, localArray) {
    // console.log(localArray)
    return dispatch => {
        console.log(addition)
        console.log(localArray)
        localArray.push(addition)
        dispatch({ type: ActionTypes.ADDTODO, payload: localArray })
    }
}

export function delete_Todo(deletedIndex, allStateArray) {
return dispatch => {
        let deletedArray = [...allStateArray]
        deletedArray.splice(deletedIndex, 1)
        dispatch({ type: ActionTypes.DELETETODO, payload: deletedArray })
    }
}

