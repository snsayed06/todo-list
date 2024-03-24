import { useState } from "react";

const Card = ({ title, body }) => {
  const [folder, setFolded] = useState(false);
  return (
    <div onClick={() => setFolded((prev) => !prev)}>
      <p>{title}</p>
      {folder && <p>{body}</p>}
    </div>
  );
};

export default Card;
