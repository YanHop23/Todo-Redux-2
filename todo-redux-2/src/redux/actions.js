let todoId = 0;
export const ADD_TODO = 'ADD_TODO';
export const UDATE_TEXT = 'UDATE_TEXT';


export const addTodo = (text) => ({
    id: todoId++, 
    type: ADD_TODO,
    text,
});

export const updateText = (newText) => ({
    type: UDATE_TEXT,
    newText
});