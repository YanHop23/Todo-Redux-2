export const TOGGLE_COMPLETION = "TOGGLE_COMPLETION";
export const DELETE_TODO = "DELETE_TODO";
export const EDIT_TODO = "EDIT_TODO";
export const SET_VISIBILITY_FILTER = "SET_VISIBILITY_FILTER";

export const toggleCompletion = (id) => ({
    type: TOGGLE_COMPLETION,
    id,
});
export const deleteTodo = (id) => ({
    type: DELETE_TODO,
    id,
});

export const editTodo = (id, newText) => ({
    type: EDIT_TODO,
    id,
    newText,
});

export const setVisibilityFilter = (filter) => ({
    type: SET_VISIBILITY_FILTER,
    filter,
});

export const visibleFilters = {
    SHOW_ALL: "SHOW_ALL",
    SHOW_COMPLETED: "SHOW_COMPLETED",
    SHOW_ACTIVE: "SHOW_ACTIVE",
};
