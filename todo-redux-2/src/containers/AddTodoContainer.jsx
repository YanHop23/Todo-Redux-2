import { addTodo, updateText } from "../redux/actions";
import { connect } from "react-redux";
import AddTodo from "../components/AddTodo";

let mapDispatchToProps = (dispatch) => {
    return {
        changeText: (text) => {
            dispatch(updateText(text));
        },
        submit: (todo) => {
            dispatch(addTodo(todo));
        },
    };
};

const AddTodoContainer = connect(null ,mapDispatchToProps)(AddTodo);
export default AddTodoContainer;
