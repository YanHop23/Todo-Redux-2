import React from "react";
import { connect } from "react-redux";
import { addTodo, updateText } from "../redux/actions";

const AddTodo = ({ dispatch }) => {
    const onTextChange = (e) => {
        console.log(e.target.value);
        dispatch(updateText(e.target.value));
    };
    const submitTodo = (e) => {
        e.preventDefault();
        dispatch(addTodo)
    };
    return (
        <form onSubmit={submitTodo}>
            <input
                type="text"
                placeholder="Enter your todo"
                onChange={onTextChange}
            />
            <button type="submit">Add</button>
        </form>
    );
};
export default connect()(AddTodo);
