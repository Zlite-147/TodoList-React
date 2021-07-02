import React, { useState, useEffect } from "react";
import { uuid } from "uuidv4";
import "./App.css";
import Header from "./Header";
import AddTodos from "./AddTodo";
import TodosList from "./TodosList";

function App() {
  const LOCAL_STORAGE_KEY = "todos";
  const [todos, setTodos] = useState([]);

  const addTodosHandler = (Todos) => {
    console.log(Todos);
    setTodos([...todos, { id: uuid(), ...Todos }]);
  };

  const removeTodosHandler = (id) => {
    const newTodosList = todos.filter((Todos) => {
      return Todos.id !== id;
    });

    setTodos(newTodosList);
  };

  useEffect(() => {
    const retriveTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retriveTodos) setTodos(retriveTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="ui container">
      <Header />
      <AddTodos addTodosHandler={addTodosHandler} />
      <TodosList todos={todos} getTodosId={removeTodosHandler} />
    </div>
  );
}

export default App;
