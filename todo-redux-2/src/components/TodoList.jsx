import React from "react";
export const TodoList = (props) => {
    let todos = props.todos;

    return (
        <ul>
            {todos.map((todo) => (
                <li key={todo.id}>{todo.text}</li>
            ))}
        </ul>
    );
};
