import React from "react";

const TodoList = props => {
  const { todos } = props;
  return (
    <div>
      <h1 className="text-center">Task List</h1>
      {todos.map(todo => (
        <div className="container mt-3" id="searchContainer">
          <div
            className="card pt-0 pb-0 z-depth-3 mx-auto w-50 animated slideInRight"
            style={{
              borderRadius: "30px"
            }}
          >
            <div className="card-body mx-auto">
              <i
                className="fas fa-check align-middle text-left mr-5 ml-0"
                style={{
                  position: "absolute",
                  top: "40%",
                  right: "80%",
                  color: "blue"
                }}
              />
              <strong className="align-middle text-right">{todo.task}</strong>
              <i
                className="fas fa-trash align-middle ml-5"
                style={{
                  position: "absolute",
                  top: "40%",
                  left: "80%",
                  color: "red"
                }}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
