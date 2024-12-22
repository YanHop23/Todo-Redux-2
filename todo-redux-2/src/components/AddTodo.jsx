import React, { useState } from "react";

const AddTodo = (props) => {
    const [text, setText] = useState("");
    const onTextChange = (e) => {
        setText(e.target.value);
        props.changeText(text);
    };
    const submitTodo = (e) => {
        e.preventDefault();
        if(text !== ''){
            props.submit(text);
        } else {
            alert('Fill input!!!')
        }
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
export default AddTodo;
