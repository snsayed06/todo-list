import { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";
import "./Styles.css";

const Accordion = () => {
  const [data, setData] = useState();
  const [active, setActive] = useState(null);

  const fetchData = async () => {
    const res = await axios("https://jsonplaceholder.typicode.com/posts");
    setData(res.data);
  };

  const toggleAccordion = (index) => {
    setActive((prevIndex) => (prevIndex === index ? null : index));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className='Accordion'>
      {data &&
        data.map((word) => (
          <div key={word.id}>
            <Card
              active={active}
              id={word.id}
              indexHandler={toggleAccordion}
              title={word.title}
              body={word.body}
            />
          </div>
        ))}
    </div>
  );
};

export default Accordion;
