import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducers from "../reducers/rootReducer";
import createDebounce from "redux-debounced";

const middlewares = [thunk, createDebounce()];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducers,
  {},
  composeEnhancers(applyMiddleware(...middlewares))
);

export default store;
