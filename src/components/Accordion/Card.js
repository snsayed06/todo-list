const Card = ({ title, body, indexHandler, id, active }) => {
  return (
    <div className='card' onClick={() => indexHandler(id)}>
      <p>{title}</p>
      {active === id && <p>{body}</p>}
    </div>
  );
};

export default Card;
