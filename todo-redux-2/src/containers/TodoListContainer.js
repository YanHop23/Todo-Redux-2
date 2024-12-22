import { connect } from "react-redux";
import { TodoList } from "../components/TodoList";

let mapStateToProps = (state) => {
    return {
        todos: state.todos,
    };
};

const TodoListContainer = connect( mapStateToProps , null)(TodoList);
export default TodoListContainer;
