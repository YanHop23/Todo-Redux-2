import { createStore } from "redux";
import { todos } from "./reducers.js";
export const store = createStore(todos);
