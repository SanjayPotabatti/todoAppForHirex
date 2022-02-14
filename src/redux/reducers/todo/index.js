const intialState = {
  todos: [],
};

const todoReducer = (state = intialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };

    case "DELETE_TODO":
      return {
        ...state,
        todos: [...state.todos.filter((todo) => todo.id !== action.id)],
      };

    case "UPDATE_TODO":
      return {
        ...state,
        todos: [
          ...state.todos.filter((todo) => todo.id !== action.todo.id),
          action.todo,
        ],
      };

    default:
      return state;
  }
};

export default todoReducer;
