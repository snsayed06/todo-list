import { useEffect, useState } from "react";

export const ItemsList = ({ todo, toggleHandler, deleteHandler }) => {
  return (
    <div>
      {todo &&
        todo.map((todo, index) => (
          <p key={index}>
            <span style={{color: !todo.isCompleted ?'red' : 'green'}}>{todo.item}</span>
            <button onClick={() => toggleHandler(todo.item)}>Toggle</button>
            <button onClick={() => deleteHandler(todo.item)}>Delete</button>
          </p>
        ))}
    </div>
  );
};
