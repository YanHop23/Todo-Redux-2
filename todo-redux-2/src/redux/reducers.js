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
            state.todos.push(newTodo);
            console.log(action);
            return state;
            case UDATE_TEXT:
                state.newTodoText = action.newText;
            return state;
        default:
            return state;
    }
};
