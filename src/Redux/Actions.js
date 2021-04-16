export const ADD_TODO = "ADD_TODO"

export const EDIT_TODO = "EDIT_TODO"

export const DELETE_TODO = "DELETE_TODO"


export const addTodo = (message) => {
    return {
        type: ADD_TODO,
        payload: message
    }
}

export const editTodo = () => {
    return {
        type: ADD_TODO,

    }
}
export const deleteTodo = () => {
    return {
        type: DELETE_TODO,

    }
}