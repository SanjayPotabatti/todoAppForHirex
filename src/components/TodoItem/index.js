import "./index.css";

const TodoItem = (props) => {
  const { todoDetails, onClickTodoDeleted, onClickTodoEdit } = props;
  const { id, title } = todoDetails;
  const deleteImgUrl =
    "https://res.cloudinary.com/dlhxfaljh/image/upload/v1644654296/Screenshot_from_2022-02-12_13-54-33_klthrp.png";

  const editImgUrl =
    "https://res.cloudinary.com/dlhxfaljh/image/upload/v1644657741/Screenshot_from_2022-02-12_14-51-57_rzmp1p.png";
  const onClickDelete = () => {
    onClickTodoDeleted(id);
  };

  const onClickEdit = () => {
    onClickTodoEdit(id);
  };

  return (
    <li className="todo-item">
      <div className="header-container">
        <p className="title">{title}</p>
        <div>
          <button type="button" className="star-button" onClick={onClickDelete}>
            <img src={deleteImgUrl} className="star" alt="star" />
          </button>
          <button type="button" className="star-button" onClick={onClickEdit}>
            <img src={editImgUrl} className="star" alt="star" />
          </button>
        </div>
      </div>
    </li>
  );
};

export default TodoItem;
