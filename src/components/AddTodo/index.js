import React, { useState } from "react";
import { addTodo } from "../../redux/actions/todo";

import { useDispatch } from "react-redux";
import { v4 } from "uuid";
export default function AddTodo(props) {
  const { theme } = props;
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    title: "",
  });

  const onAddTodo = (e) => {
    e.preventDefault();
    const data = {
      title: formData.title,
      id: v4(),
    };
    dispatch(addTodo(data));
    setFormData({
      title: "",
    });
  };

  const onChangeTitleInput = (e) => {
    setFormData({ title: e.target.value });
  };

  const mainHeading = theme
    ? "add-todo-heading-light"
    : "add-todo-heading-dark";

  return (
    <div className="add-todo-container">
      <form className="form" onSubmit={onAddTodo}>
        <div className="toggle-button-heading">
          <h1 className={`${mainHeading}`}>TODO APP</h1>
        </div>

        <label htmlFor="title" className="label">
          Add Todo Task
        </label>
        <input
          type="text"
          id="title"
          value={formData.title}
          onChange={onChangeTitleInput}
          className="input"
          placeholder="Enter Todo"
          required
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
  );
}
