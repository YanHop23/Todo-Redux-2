import React from "react";
export const TodoList = ({ todos }) => {
    return (
        <ul>
            {todos.map((index, text) => (
                <li key={index}>{text}</li>
            ))}
        </ul>
    );
};
