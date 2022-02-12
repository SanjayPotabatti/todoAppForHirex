import { Component } from "react";
import { v4 } from "uuid";

import TodoItem from "../TodoItem";

import "./index.css";

class TodoApp extends Component {
  state = {
    todosList: [],
    titleInput: "",
  };

  onClickTodoDeleted = (id) => {
    this.setState((prevState) => ({
      todosList: prevState.todosList.filter((eachTodo) => {
        if (id === eachTodo.id) {
          return null;
        } else {
          return eachTodo;
        }
      }),
    }));
  };

  updateTodo = (eachTodo) => {
    this.setState({ titleInput: eachTodo.titleInput });
  };

  onClickTodoEdit = (id) => {
    this.setState((prevState) => ({
      todosList: prevState.todosList.filter((eachTodo) => {
        if (id === eachTodo.id) {
          this.updateTodo(eachTodo);
          return null;
        } else {
          return eachTodo;
        }
      }),
    }));
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
    };

    this.setState((prevState) => ({
      todosList: [...prevState.todosList, newTodo],
      titleInput: "",
    }));
  };

  render() {
    const { titleInput, todosList } = this.state;

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
                className="todos-img"
              />
            </div>
            <hr className="hr" />
            <div className="header-with-filter-container">
              <h1 className="todos-heading">Todos</h1>
            </div>
            <ul className="todos-list">
              {todosList.map((eachTodo) => (
                <TodoItem
                  key={eachTodo.id}
                  todoDetails={eachTodo}
                  onClickTodoDeleted={this.onClickTodoDeleted}
                  onClickTodoEdit={this.onClickTodoEdit}
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
