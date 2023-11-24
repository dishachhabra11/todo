import React, { useState } from "react";
import TodoListItem from "./Componants/TodoListItem";

const App = () => {
  const [todo, setTodo] = useState("");
  const [todolist, setTodolist] = useState([]);

  const handleChange = (e) => {
    setTodo(e.target.value);
  };
  const addToList = () => {
    setTodolist((oldtodos) => {
      return [...oldtodos, todo];
    });
    setTodo("");
  };
  const deleteItem = (id) => {
    console.log("deleted");

    setTodolist((todolist) => {
      return todolist.filter((arrayElement, index) => {
        return index !== id;
      });
    });
  };

  return (
    <>
      <div className="main-div">
        <div className="todo-div">
          <br />
          <h1>To do</h1>
          <br />
          <input
            type="text"
            placeholder="enter your to-do"
            value={todo}
            onChange={handleChange}
          />

          <button className="plus-btn" onClick={addToList}>
            +
          </button>
          <br />
          <ul>
            {todolist.map((list, index) => {
              return (
                <TodoListItem
                  text={list}
                  onSelect={deleteItem}
                  key={index}
                  id={index}
                />
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default App;
