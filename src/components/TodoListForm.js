import React, { useContext } from "react";
import useInputState from "../hooks/useInputState";
import { TodosContext } from "../contexts/todos.context";

const TodoListForm = () => {
  const [value, handleChange, reset] = useInputState("");
  const { addTodo } = useContext(TodosContext);
  return (
    <div>
      <div className="container mt-3" id="searchContainer">
        <div
          className="card m-4 z-depth-3 mx-auto animated slideInRight"
          style={{ borderRadius: "30px" }}
        >
          <div className="card-body pt-0 pb-0">
            <div className="md-form mt-2">
              <div align="center">
                <i
                  className="fab fa-react mb-1 mx-auto"
                  style={{ color: "lightblue", fontSize: "50px" }}
                />
              </div>
              <form
                onSubmit={e => {
                  e.preventDefault();
                  addTodo(value);
                  reset();
                }}
              >
                <div align="center">
                  <input
                    type="text"
                    id="form1"
                    className="form-control  w-75"
                    onChange={handleChange}
                    value={value}
                  />
                </div>
                <div align="center" className="mt-3">
                  <button
                    type="submit"
                    className="btn btn-md text-white"
                    style={{
                      borderRadius: "12px",
                      background: "rgba(51, 210, 162, 0.8)"
                    }}
                  >
                    Add task
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoListForm;
