import React, { Fragment, useContext } from "react";
import Todo from "./Todo";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import { TodosContext } from "../contexts/todos.context";

const TodoList = () => {
  const todos = useContext(TodosContext);
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
              <Todo {...todo} key={todo.id} />
              {i < todos.length - 1 && <Divider />}
            </Fragment>
          ))}
        </List>
      </Paper>
    );
  return null;
};

export default TodoList;
