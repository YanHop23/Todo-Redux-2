import React from "react";
import Todo from "./Todo";
export const TodoList = (props) => {
    let todos = props.todos;

    return (
        <ul>
            {todos.map((todo) => (
                <Todo
                    key={todo.id}
                    todo={todo}
                    dispatchs={{
                        onChangeCompleted: props.onChangeCompleted,
                        onDeleteTodo: props.onDeleteTodo,
                        onEditTodo: props.onEditTodo,
                    }}
                />
            ))}
        </ul>
    );
};
