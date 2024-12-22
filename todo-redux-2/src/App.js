import { useSelector } from "react-redux";
import "./App.css";
import { TodoList } from "./components/TodoList";
import AddTodoContainer from "./containers/AddTodoContainer";

function App() {
    const todos = useSelector((state) => state.todos);

    return (
        <div className="App">
            <AddTodoContainer />
            {/* <TodoList todos={todos} /> */}
        </div>
    );
}

export default App;
