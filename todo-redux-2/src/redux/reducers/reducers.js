import { ADD_TODO, UDATE_TEXT } from "../actions/ControlActions";
import {
    DELETE_TODO,
    EDIT_TODO,
    SET_VISIBILITY_FILTER,
    TOGGLE_COMPLETION,
    visibleFilters,
} from "../actions/ListActions";

const initalState = {
    todos: [
        {
            id: 1,
            text: "Task",
            completed: false,
        },
        {
            id: 2,
            text: "completed Task",
            completed: true,
        },
    ],
    newTodoText: "Enter todo here",
    visibilityFilter: visibleFilters.SHOW_ALL,
};
export const todos = (state = initalState, action) => {
    switch (action.type) {
        case ADD_TODO:
            let newTodo = {
                id: action.id,
                text: action.text,
                completed: false,
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
        case TOGGLE_COMPLETION:
            return {
                ...state,
                todos: state.todos.map((todo) =>
                    todo.id === action.id
                        ? { ...todo, completed: !todo.completed }
                        : todo
                ),
            };
        case DELETE_TODO:
            return {
                ...state,
                todos: state.todos.filter((todo) => todo.id !== action.id),
            };
        case EDIT_TODO:
            return {
                ...state,
                todos: state.todos.map((todo) =>
                    todo.id === action.id
                        ? { ...todo, text: action.newText }
                        : todo
                ),
            };
        case SET_VISIBILITY_FILTER:
            return {
                ...state,
                visibilityFilter: action.filter,
            };
        default:
            return state;
    }
};
