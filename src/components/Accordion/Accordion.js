import { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";

const Accordion = () => {
  const [data, setData] = useState();

  const fetchData = async () => {
    const res = await axios("https://jsonplaceholder.typicode.com/posts");
    setData(res.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {data &&
        data.map((word) => (
          <div key={word.id}>
            <Card title={word.title} body={word.body} />
          </div>
        ))}
    </div>
  );
};

export default Accordion;
