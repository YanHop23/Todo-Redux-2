import { ADD_TODO, UDATE_TEXT } from "./actions";

const initalState = {
    todos: [],
    newTodoText: "Enter todo here",
};
export const todos = (state = initalState, action) => {
    switch (action.type) {
        case ADD_TODO:
            let newTodo = {
                id: action.id,
                text: action.text,
            };
            return {
                ...state,
                todos: [...state.todos, newTodo],
            };
        case UDATE_TEXT:            
            return {
                ...state,
                newTodoText: action.newText,
            };
        default:
            return state;
    }
};
