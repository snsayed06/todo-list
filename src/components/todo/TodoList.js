import React, { useState } from "react";

const TodoList = () => {
  const [list, setList] = useState([]);
  const [input, setInput] = useState("");
  const [edit, setEdit] = useState(false);

  const addHandler = () => {
    setList([...list, { todo: input, id: new Date(), isCompleted: false }]);
    setInput("");
  };

  const deleteHandler = (id) => {
    const filteredResult = list.filter((list) => list.id !== id);
    setList([...filteredResult]);
  };

  const toggleHandler = (id) => {
    const filteredResult = list.map((list) => {
      if (id === list.id) {
        return { ...list, isCompleted: !list.isCompleted };
      }
      return list;
    });
    setList([...filteredResult]);
  };

  const editHandler = (e, id) => {
    const editResults = list.map((list) => {
      if (list.id === id) {
        return {
          ...list,
          todo: e.target.value,
        };
      }
      return list;
    });
    setList([...editResults]);
  };

  return (
    <div>
      <div>
        <input
          type='text'
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
          placeholder='enter your todo list'
        />
        <button disabled={input.length === 0} onClick={addHandler}>
          Add
        </button>
      </div>
      {list.map((list, index) => {
        return (
          <p key={index}>
            {edit ? (
              <input
                onChange={(e) => editHandler(e, list.id)}
                value={list.todo}
              />
            ) : (
              <span style={{ color: list.isCompleted ? "green" : "red" }}>
                {list.todo}
              </span>
            )}
            <button onClick={() => toggleHandler(list.id)}>Toggle</button>
            <button onClick={() => deleteHandler(list.id)}>delete</button>
            <button onClick={() => setEdit((prev) => !prev)}>
              {edit ? "Save" : "Edit"}
            </button>
          </p>
        );
      })}
    </div>
  );
};

export default TodoList;
