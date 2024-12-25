import AddTodoContainer from "./containers/AddTodoContainer";
import TodoListContainer from "./containers/TodoListContainer";
import './index.css';

function App() {
    return (
        <div className="bg-gray-100 h-screen pt-4">
            <div className="bg-white mx-auto md:w-1/2 shadow-md rounded-lg p-6">
                <AddTodoContainer />
                <TodoListContainer />
            </div>
        </div>
    );
}

export default App;
