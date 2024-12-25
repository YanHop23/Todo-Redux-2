import React from "react";

const Todo = (props) => {
    const toggleComplete = () => {
        props.dispatchs.onChangeCompleted(props.todo.id);
    };
    const deleteTodo = () => {
        props.dispatchs.onDeleteTodo(props.todo.id);
    };
    const editTodo = () => {
        let newText = prompt(`Edit todo ${todo.text}`);
        if (newText) {
            props.dispatchs.onEditTodo(props.todo.id, newText);
        } else {
            alert("You nothing print!!!");
        }
    };
    let todo = props.todo;
    return (
        <li className="border-b border-gray-200 flex items-center justify-between py-4">
            <label className="flex items-center">
                <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={toggleComplete}
                    className="mr-2"
                />
                <span className={todo.completed ? "line-through" : ""}>
                    {todo.text}
                </span>
            </label>
            <div>
                <button
                    className="text-blue-500
					hover:text-blue-700 edit-btn mr-2"
                    onClick={editTodo}
                >
                    Edit
                </button>
                <button
                    className="text-red-500 hover:text-red-700
					delete-btn"
                    onClick={deleteTodo}
                >
                    Delete
                </button>
            </div>
        </li>
    );
};

export default Todo;
