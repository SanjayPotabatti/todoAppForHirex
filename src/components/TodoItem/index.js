import "./index.css";

const TodoItem = (props) => {
  const { todoDetails, onClickTodoDeleted } = props;
  const { id, title, isStarred } = todoDetails;
  const starImgUrl = isStarred
    ? "https://res.cloudinary.com/dlhxfaljh/image/upload/v1644654296/Screenshot_from_2022-02-12_13-54-33_klthrp.png"
    : "https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png";

  const onClickDelete = () => {
    onClickTodoDeleted(id);
  };

  return (
    <li className="todo-item">
      <div className="header-container">
        <p className="title">{title}</p>
        <button
          type="button"
          testid="star"
          className="star-button"
          onClick={onClickDelete}
        >
          <img src={starImgUrl} className="star" alt="star" />
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
