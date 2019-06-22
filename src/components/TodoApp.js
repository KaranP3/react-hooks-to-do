import React, { useState } from "react";
import TodoList from "./TodoList";
import TodoListForm from "./TodoListForm";

const ToDoApp = () => {
  const initialTodos = [
    { id: 1, task: "Read and learn about React hooks", completed: true },
    { id: 2, task: "Learn how to use React Hooks", completed: true },
    { id: 3, task: "Build a to-do app using React Hooks", completed: false }
  ];
  const [todos, setTodos] = useState(initialTodos);
  const addTodo = newTodoText => {
    setTodos([...todos, { id: 4, task: newTodoText, completed: false }]);
  };
  return (
    <div>
      <TodoListForm addTodo={addTodo} />
      <TodoList todos={todos} />
    </div>
  );
};

export default ToDoApp;
