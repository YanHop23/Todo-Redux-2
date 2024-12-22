import "./App.css";
import AddTodoContainer from "./containers/AddTodoContainer";
import TodoListContainer from "./containers/TodoListContainer";

function App() {
    return (
        <div className="App">
            <AddTodoContainer />
            <TodoListContainer />
        </div>
    );
}

export default App;
