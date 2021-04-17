// ADD_TODO action type
const ADD_TODO = "ADD_TODO"
// DELETE_TODO action type
const DELETE_TODO = "DELETE_TODO"

// ADD_TODO action
export const addTodo = (message) => ({
    type: ADD_TODO,
    message,
    id: Math.random(),
});

// DELETE_TODO action

export const deleteTodo = (id) => ({
    type: DELETE_TODO,
    id,
});