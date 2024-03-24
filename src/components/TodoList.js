import { useState } from "react";
import Data from "../Data.json";
import { AddList } from "./AddList";
import { ItemsList } from "./ItemsList";

const Todo = () => {
  const [todoList, setTodoList] = useState(Data);

  const addHandler = (value) => {
    setTodoList([
      ...todoList,
      {
        id: todoList.length + 1,
        isCompleted: false,
        item: value,
      },
    ]);
  };

  const toggleHandler = (id) => {
    const data = todoList.map((todo) => {
      if (id === todo.id) {
        return { ...todo, isCompleted: !todo.isCompleted };
      }
      return todo;
    });
    setTodoList([...data]);
  };

  const deleteHandler = (id) => {
    const data = todoList.filter((list) => list.id !== id);
    setTodoList([...data]);
  };

  return (
    <div>
      <AddList addHandler={addHandler} />
      <ItemsList
        deleteHandler={deleteHandler}
        toggleHandler={toggleHandler}
        todo={todoList}
      />
    </div>
  );
};

export default Todo;
