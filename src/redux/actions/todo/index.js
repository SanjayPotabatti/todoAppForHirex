export const addTodo = (todo) => ({ type: "ADD_TODO", payload: todo });
export const updateTodo = (todo) => ({
  type: "UPDATE_TODO",
  todo,
});
export const deleteTodo = (id) => ({
  type: "DELETE_TODO",
  id,
});
