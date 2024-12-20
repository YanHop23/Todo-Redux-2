const initalState = []
const todos = (state = initalState, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            console.log('add_todo');
            return state;
        default:
            return state;
    }
};

export default todos;