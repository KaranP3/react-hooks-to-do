import uuid from "uuid/v4";

const reducer = (state, action) => {
  switch (action.type) {
    // Add
    case "ADD":
      return [...state, { id: uuid(), task: action.task, completed: false }];
    // Remove
    case "REMOVE":
      return state.filter(todo => todo.id !== action.id);
    // Toggle
    case "TOGGLE":
      return state.map(todo =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    // Edit
    case "EDIT":
      return state.map(todo =>
        todo.id === action.id ? { ...todo, task: action.newTask } : todo
      );
    // Default case
    default:
      return state;
  }
};

// Export
export default reducer;
