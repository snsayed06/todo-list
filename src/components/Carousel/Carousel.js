import { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";

const Carousel = () => {
  const [data, setData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentCard, setCurrentCard] = useState({});

  const fetchData = async () => {
    const res = await axios("https://jsonplaceholder.typicode.com/posts");
    setData(res.data.slice(0, 10));
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const dataHandler = () => {
      setCurrentCard({ ...data[currentIndex] });
    };
    dataHandler();
  }, [data]);

  useEffect(() => {
    setCurrentCard({ ...data[currentIndex] });
  }, [currentIndex]);

  const prevHandler = () => {
    currentIndex > 0 && setCurrentIndex((prev) => prev - 1);
  };

  const nextHandler = () => {
    currentIndex < data.length - 1 && setCurrentIndex((prev) => prev + 1);
  };

  return (
    <div>
      <div>
        <Card title={currentCard.title} body={currentCard.body} />
      </div>
      <button onClick={prevHandler}>prev</button>
      <button onClick={nextHandler}>Next</button>
    </div>
  );
};
export default Carousel;
