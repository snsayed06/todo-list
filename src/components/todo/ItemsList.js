export const ItemsList = ({ todo, toggleHandler, deleteHandler }) => {
  return (
    <div>
      {todo &&
        todo.map((todo) => (
          <p key={todo.id}>
            <span style={{ color: !todo.isCompleted ? "red" : "green" }}>
              {todo.item}
            </span>
            <button onClick={() => toggleHandler(todo.id)}>Toggle</button>
            <button onClick={() => deleteHandler(todo.id)}>Delete</button>
          </p>
        ))}
    </div>
  );
};
