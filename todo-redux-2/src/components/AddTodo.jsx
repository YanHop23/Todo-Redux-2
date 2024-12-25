import React, { useState } from "react";

const AddTodo = (props) => {
    const [text, setText] = useState("");
    const onTextChange = (e) => {
        setText(e.target.value);
        props.changeText(text);
    };
    const submitTodo = (e) => {
        e.preventDefault();
        if (text !== "") {
            props.submit(text);
        } else {
            alert("Fill input!!!");
        }
    };
    return (
        <form onSubmit={submitTodo}>
            <div className="flex mb-4">
                <input
                    type="text"
                    placeholder="Add new task"
                    required
                    onChange={onTextChange}
                    className="w-full px-4 py-2 mr-2 rounded-lg
							border-gray-300 focus:outline-none
							focus:border-blue-500"
                />
                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700
                    text-white font-bold py-2 px-4 rounded"
                >
                    Add
                </button>
            </div>
        </form>
    );
};
export default AddTodo;
