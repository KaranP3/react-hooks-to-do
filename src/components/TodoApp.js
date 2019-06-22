import React, { useEffect } from "react";
import useTodoState from "../hooks/useTodoState";
import TodoList from "./TodoList";
import TodoListForm from "./TodoListForm";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const ToDoApp = () => {
  const initialTodos = JSON.parse(window.localStorage.getItem("todos") || "[]");

  const { todos, addTodo, removeTodo, toggleTodo, editTodo } = useTodoState(
    initialTodos
  );

  useEffect(() => {
    window.localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <Paper
      style={{
        padding: 0,
        margin: 0,
        height: "100vh"
      }}
    >
      <Grid container justify="center">
        <Grid item xs={10} sm={8} md={6} lg={6}>
          <TodoListForm addTodo={addTodo} />
          <TodoList
            todos={todos}
            removeTodo={removeTodo}
            toggleTodo={toggleTodo}
            editTodo={editTodo}
          />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default ToDoApp;
