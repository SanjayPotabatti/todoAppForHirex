import React, { useState } from "react";
import { addTodo } from "../../redux/actions/todo";

import { useDispatch } from "react-redux";
import { v4 } from "uuid";
export default function AddTodo() {
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
  return (
    <div className="add-todo-container">
      <form className="form" onSubmit={onAddTodo}>
        <h1 className="add-todo-heading">TODO APP</h1>
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
