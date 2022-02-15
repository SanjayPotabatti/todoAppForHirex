import React, { useState } from "react";
import { useSelector } from "react-redux";
import AddTodo from "../AddTodo";
import TodoItem from "../TodoItem";
import "./index.css";

export default function TodoList() {
  const todosList = useSelector((state) => state.todos.todos);

  const [theme, setTheme] = useState(true);

  const onClickToggle = () => {
    if (theme === true) {
      setTheme(false);
    } else {
      setTheme(true);
    }
  };

  const bgContaier = theme ? "app-container-lignt" : "app-container-dark";
  const cardContainer = theme
    ? "responsive-container-light"
    : "responsive-container-dark";
  const toDosHeading = theme ? "todos-heading-light" : "todos-heading-dark";

  return (
    <div className={`${bgContaier}`}>
      <div className={`${cardContainer}`}>
        <div className="todos-container">
          <div className="toggle-button-position" onClick={onClickToggle}>
            <button className="toggle-button">Toggle Theme</button>
          </div>

          <AddTodo theme={theme} />
          <hr className="hr" />
          <div className="header-with-filter-container">
            <h1 className={`${toDosHeading}`}>Todos</h1>
          </div>
          <ul className="todos-list">
            {todosList.map((eachTodo) => (
              <TodoItem
                key={eachTodo.id}
                todoDetails={eachTodo}
                theme={theme}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
