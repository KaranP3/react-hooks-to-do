import React from "react";
import { TodosProvider } from "../contexts/todos.context";
import TodoList from "./TodoList";
import TodoListForm from "./TodoListForm";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const ToDoApp = () => {
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
          <TodosProvider>
            <TodoListForm />
            <TodoList />
          </TodosProvider>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default ToDoApp;
