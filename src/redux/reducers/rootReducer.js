import { combineReducers } from "redux";
import todoReducer from "./todo";

const rootReducers = combineReducers({
  todos: todoReducer,
});

export default rootReducers;
