import React from "react";

const Todo = (props) => {
    return (
        <li className="border-b border-gray-200 flex items-center justify-between py-4">
            <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span>{props.todo.text}</span>
            </label>
            <div>
                <button
                    className="text-red-500 hover:text-red-700
					mr-2 delete-btn"
                >
                    Delete
                </button>
                <button
                    className="text-blue-500
					hover:text-blue-700 edit-btn"
                >
                    Edit
                </button>
            </div>
        </li>
    );
};

export default Todo;
