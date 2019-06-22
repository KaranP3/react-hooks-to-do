import React, { useState } from "react";
import TodoList from "./TodoList";
import TodoListForm from "./TodoListForm";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import uuid from "uuid/v4";

const ToDoApp = () => {
  const initialTodos = [
    { id: 1, task: "Read and learn about React hooks", completed: true },
    { id: 2, task: "Learn how to use React Hooks", completed: true },
    { id: 3, task: "Build a to-do app using React Hooks", completed: false }
  ];
  const [todos, setTodos] = useState(initialTodos);
  const addTodo = newTodoText => {
    setTodos([...todos, { id: uuid(), task: newTodoText, completed: false }]);
  };
  const removeTodo = todoId => {
    // filter out remove to do
    const updatedTodos = todos.filter(todo => todo.id !== todoId);
    // call setTodos with new todos array
    setTodos(updatedTodos);
  };
  const toggleTodo = todoId => {
    const updatedTodos = todos.map(todo =>
      todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  return (
    <Paper
      style={{
        padding: 0,
        margin: 0,
        height: "100vh"
      }}
    >
      <Grid container justify="center">
        <Grid item xs={11} md={8} lg={6}>
          <TodoListForm addTodo={addTodo} />
          <TodoList
            todos={todos}
            removeTodo={removeTodo}
            toggleTodo={toggleTodo}
          />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default ToDoApp;
