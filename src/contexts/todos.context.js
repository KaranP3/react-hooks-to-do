import React, { createContext, useReducer } from "react";
import useTodoState from "../hooks/useTodoState";
import todosReducer from "../reducers/todo.reducer";

const defaultTodos = [
  { id: 1, task: "Get groceries", completed: false },
  { id: 2, task: "Walk dog", completed: true }
];

export const TodosContext = createContext();

export function TodosProvider(props) {
  // const todosStuff = useTodoState(defaultTodos);
  const [todos, dispatch] = useReducer(todosReducer, defaultTodos);
  return (
    <TodosContext.Provider value={{ todos, dispatch }}>
      {props.children}
    </TodosContext.Provider>
  );
}
