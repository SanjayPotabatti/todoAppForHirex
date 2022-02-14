import "./index.css";
import { useDispatch } from "react-redux";
import { deleteTodo, updateTodo } from "../../redux/actions/todo";
import { useState } from "react";
import { useRef } from "react";

const TodoItem = (props) => {
  const dispatch = useDispatch();
  const titleRef = useRef(null);
  const [update, setUpdateForm] = useState(null);
  const { todoDetails, onClickTodoEdit } = props;
  const { id, title } = todoDetails;

  const updatetodo = (e) => {
    e.preventDefault();
    dispatch(updateTodo({ title: titleRef.current.value, id }));
    setUpdateForm(false);
    titleRef.current = null;
  };

  const EditForm = () => {
    return (
      <form onSubmit={updatetodo}>
        <input ref={titleRef} defaultValue={todoDetails.title} />
        <button>Edit todo</button>
      </form>
    );
  };

  const deleteImgUrl =
    "https://res.cloudinary.com/dlhxfaljh/image/upload/v1644654296/Screenshot_from_2022-02-12_13-54-33_klthrp.png";

  const editImgUrl =
    "https://res.cloudinary.com/dlhxfaljh/image/upload/v1644657741/Screenshot_from_2022-02-12_14-51-57_rzmp1p.png";

  const onClickDelete = () => {
    dispatch(deleteTodo(id));
  };

  return (
    <>
      {update ? (
        EditForm()
      ) : (
        <li className="todo-item">
          <div className="header-container">
            <p className="title">{title}</p>
            <div>
              <button
                type="button"
                className="star-button"
                onClick={() => setUpdateForm(true)}
              >
                <img src={editImgUrl} className="star" alt="star" />
              </button>
              <button
                type="button"
                className="star-button"
                onClick={onClickDelete}
              >
                <img src={deleteImgUrl} className="star" alt="star" />
              </button>
            </div>
          </div>
        </li>
      )}
    </>
  );
};

export default TodoItem;
