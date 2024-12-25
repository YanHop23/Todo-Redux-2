import React from "react";
export const TodoList = (props) => {
    let todos = props.todos;

    return (
        <ul>
            <p className="text-3xl">hello</p>
            {todos.map((todo) => (
                <li  key={todo.id}>{todo.text}</li>
            ))}
        </ul>
    );
};
