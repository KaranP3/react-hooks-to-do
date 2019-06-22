import React, { Fragment } from "react";
import useInputState from "../hooks/useInputState";
import TextField from "@material-ui/core/TextField";

const EditTodoForm = props => {
  const { editTodo, id, task, toggleEditForm } = props;
  const [value, handleChange, reset] = useInputState(task);
  return (
    <Fragment>
      <form
        onSubmit={e => {
          e.preventDefault();
          editTodo(id, value);
          reset();
          toggleEditForm();
        }}
        style={{ marginLeft: "1rem", width: "50%" }}
      >
        <TextField
          margin="normal"
          value={value}
          onChange={handleChange}
          fullWidth
          autoFocus
        />
      </form>
    </Fragment>
  );
};

export default EditTodoForm;
