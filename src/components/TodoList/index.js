import React from "react";
import { useSelector } from "react-redux";
import AddTodo from "../AddTodo";
import TodoItem from "../TodoItem";
import "./index.css";

export default function TodoList() {
  const todosList = useSelector((state) => state.todos.todos);
  return (
    <div className="app-container">
      <div className="responsive-container">
        <div className="todos-container">
          <AddTodo />
          <hr className="hr" />
          <div className="header-with-filter-container">
            <h1 className="todos-heading">Todos</h1>
          </div>
          <ul className="todos-list">
            {todosList.map((eachTodo) => (
              <TodoItem key={eachTodo.id} todoDetails={eachTodo} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
