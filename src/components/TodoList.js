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
        isCompleted: false,
        item: value,
      },
    ]);
  };

  const toggleHandler = (list) => {
    const data = todoList.map((todo) => {
      if (list === todo.item) {
        const object = { ...todo, isCompleted: !todo.isCompleted };
        return object;
      }
      return todo;
    });
    setTodoList([...data]);
  };

  const deleteHandler = (todo) => {
    const data = todoList.filter((list) => list.item !== todo);
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
