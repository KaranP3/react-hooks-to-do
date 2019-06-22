import React, { Fragment } from "react";
import Todo from "./Todo";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";

const TodoList = props => {
  const { todos, removeTodo, toggleTodo, editTodo } = props;
  if (todos.length)
    return (
      <Paper
        style={{
          backgroundColor: "white"
        }}
        elevation={12}
        width={75}
      >
        <List style={{ backgroundColor: "white" }}>
          {todos.map((todo, i) => (
            <Fragment>
              <Todo
                task={todo.task}
                completed={todo.completed}
                key={todo.id}
                id={todo.id}
                removeTodo={removeTodo}
                toggleTodo={toggleTodo}
                editTodo={editTodo}
              />
              {i < todos.length - 1 && <Divider />}
            </Fragment>
          ))}
        </List>
      </Paper>
    );
  return null;
};

export default TodoList;
