import { Component } from "react";
import { v4 } from "uuid";

import TodoItem from "../TodoItem";

import "./index.css";

class TodoApp extends Component {
  state = {
    todosList: [],
    titleInput: "",
    isFilterActive: false,
  };

  onClickTodoDeleted = (id) => {
    this.setState((prevState) => ({
      todosList: prevState.todosList.map((eachTodo) => {
        if (id === eachTodo.id) {
          return { ...eachTodo, isStarred: !eachTodo.isStarred };
        }
        return eachTodo;
      }),
    }));
  };

  onFilter = () => {
    const { isFilterActive } = this.state;

    this.setState({
      isFilterActive: !isFilterActive,
    });
  };

  onChangeTitleInput = (event) => {
    this.setState({ titleInput: event.target.value });
  };

  onAddTodo = (event) => {
    event.preventDefault();
    const { titleInput } = this.state;
    const newTodo = {
      id: v4(),
      title: titleInput,
      isStarred: false,
    };

    this.setState((prevState) => ({
      todosList: [...prevState.todosList, newTodo],
      titleInput: "",
    }));
  };

  getFilteredTodosList = () => {
    const { todosList, isFilterActive } = this.state;

    if (isFilterActive) {
      return todosList.filter(
        (eachTransaction) => eachTransaction.isStarred === true
      );
    }
    return todosList;
  };

  render() {
    const { titleInput, isFilterActive } = this.state;
    const filterClassName = isFilterActive ? "filter-filled" : "filter-empty";
    const filteredTodosList = this.getFilteredTodosList();

    return (
      <div className="app-container">
        <div className="responsive-container">
          <div className="todos-container">
            <div className="add-todo-container">
              <form className="form" onSubmit={this.onAddTodo}>
                <h1 className="add-todo-heading">TODO APP</h1>
                <label htmlFor="title" className="label">
                  Add Todo Task
                </label>
                <input
                  type="text"
                  id="title"
                  value={titleInput}
                  onChange={this.onChangeTitleInput}
                  className="input"
                  placeholder="Enter Todo"
                />
                <button type="submit" className="add-button">
                  Add
                </button>
              </form>
              <img
                src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
                alt="todo"
                className="todo-img"
              />
            </div>
            <hr className="hr" />
            <div className="header-with-filter-container">
              <h1 className="todos-heading">Todos</h1>
              <button
                type="button"
                className={`filter-style ${filterClassName}`}
                onClick={this.onFilter}
              >
                Starred
              </button>
            </div>
            <ul className="todos-list">
              {filteredTodosList.map((eachTodo) => (
                <TodoItem
                  key={eachTodo.id}
                  todoDetails={eachTodo}
                  onClickTodoDeleted={this.onClickTodoDeleted}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default TodoApp;
