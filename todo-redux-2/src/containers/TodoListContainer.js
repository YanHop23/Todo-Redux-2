import { connect } from "react-redux";
import { TodoList } from "../components/TodoList";
import {
    deleteTodo,
    editTodo,
    toggleCompletion,
    visibleFilters,
} from "../redux/actions/ListActions";

const filterTodo = (todos, filter) => {
    switch (filter) {
        case visibleFilters.SHOW_ALL:
            return todos;
        case visibleFilters.SHOW_COMPLETED:
            return todos.filter((todo) => todo.completed);
        case visibleFilters.SHOW_ACTIVE:
            return todos.filter((todo) => !todo.completed);
        default:
            break;
    }
};
let mapStateToProps = (state) => {
    return {
        todos: filterTodo(state.todos, state.visibilityFilter),
    };
};
let mapDispathToProps = (dispatch) => {
    return {
        onChangeCompleted: (id) => {
            dispatch(toggleCompletion(id));
        },
        onDeleteTodo: (id) => {
            dispatch(deleteTodo(id));
        },
        onEditTodo: (id, newText) => {
            dispatch(editTodo(id, newText));
        },
    };
};
const TodoListContainer = connect(mapStateToProps, mapDispathToProps)(TodoList);
export default TodoListContainer;
