import React from "react";

const TodoListItem = (props) => {
  return (
    <>
    <div className="todo-style">
      <button onClick={() =>{
        props.onSelect(props.id)
      }}> X</button>
      <li className="list">{props.text}</li>
      
   
    </div>
      
    </>
  );
};

export default TodoListItem;
