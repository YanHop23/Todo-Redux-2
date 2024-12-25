import { v4 as uuidv4 } from "uuid";

export const ADD_TODO = "ADD_TODO";
export const UDATE_TEXT = "UDATE_TEXT";

export const addTodo = (text) => ({
    id: uuidv4(),
    type: ADD_TODO,
    text,
});

export const updateText = (newText) => ({
    type: UDATE_TEXT,
    newText,
});
