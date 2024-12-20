const ADD_TODO = 'ADD_TODO';
let todoId = 0;

export const addTodo = (text) => ({
    id: todoId + 1, 
    type: ADD_TODO,
    text,
});