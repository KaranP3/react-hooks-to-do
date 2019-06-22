import React from "react";
import Todo from "./Todo";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";

const TodoList = props => {
  const { todos, removeTodo, toggleTodo } = props;
  return (
    <Paper style={{ backgroundColor: "white", padding: "0", margin: "0" }}>
      <List style={{ backgroundColor: "white" }}>
        {todos.map(todo => (
          <div>
            <Todo
              task={todo.task}
              completed={todo.completed}
              key={todo.id}
              id={todo.id}
              removeTodo={removeTodo}
              toggleTodo={toggleTodo}
            />
          </div>
        ))}
      </List>
    </Paper>
  );
};

export default TodoList;
