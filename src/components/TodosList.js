import React from "react";
import TodoCard from "./TodoCard";

const TodosList = (props) => {
  console.log(props);

  const deleteTodoHandler = (id) => {
    props.getTodosId(id);
  };
  const renderTodosList = props.todos.map((Todos) => {
    return (
      <TodoCard
        Todos={Todos}
        clickHander={deleteTodoHandler}
        key={Todos.id}
      />
    );
  });
  return <div className="ui celled list">{renderTodosList}</div>;
};

export default TodosList;
