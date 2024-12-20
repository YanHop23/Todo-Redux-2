import React from "react";

export const AddTodo = () => {
    const onTextChange = () => {
        console.log('changed');
    };
    const submitTodo = (e) => {
        e.preventDefault();
        console.log(e.value);
    };
    return (
        <form onSubmit={submitTodo}>
            <input type="text" placeholder="Enter your todo"onChange={onTextChange} />
            <button type="submit">Add</button>
        </form>
    );
};
