import { useState } from "react";
import uuid from "uuid/v4";

export default initialTodos => {
  const [todos, setTodos] = useState(initialTodos);

  // Add method
  const addTodo = newTodoText => {
    setTodos([...todos, { id: uuid(), task: newTodoText, completed: false }]);
  };

  // Remove method
  const removeTodo = todoId => {
    // filter out remove to do
    const updatedTodos = todos.filter(todo => todo.id !== todoId);
    // call setTodos with new todos array
    setTodos(updatedTodos);
  };

  // Toggle method
  const toggleTodo = todoId => {
    const updatedTodos = todos.map(todo =>
      todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  // Edit method
  const editTodo = (todoId, newTask) => {
    const updatedTodos = todos.map(todo =>
      todo.id === todoId ? { ...todo, task: newTask } : todo
    );
    setTodos(updatedTodos);
  };

  return {
    todos,
    addTodo: addTodo,
    removeTodo: removeTodo,
    toggleTodo: toggleTodo,
    editTodo: editTodo
  };
};
