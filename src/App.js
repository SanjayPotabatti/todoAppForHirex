import TodoList from "./components/TodoList";
import "./App.css";
import store from "./redux/store";
import { Provider } from "react-redux";

const App = () => (
  <Provider store={store}>
    <TodoList />;
  </Provider>
);

export default App;
