import axios from "axios";
import { useState, useEffect } from "react";

const WithParams = () => {
  const [data, setData] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10;

  const fetchData = async () => {
    const res = await axios(
      `https://jsonplaceholder.typicode.com/posts?_page=${currentPage}&_limit=${postsPerPage}`
    );
    setData(res.data);
  };

  useEffect(() => {
    fetchData();
  }, [currentPage]);

  const prevHandler = () => {
    setCurrentPage((prev) => prev - 1);
  };

  const nextHandler = () => {
    setCurrentPage((prev) => prev + 1);
  };

  return (
    <div>
      <h1>Responses from Api with params</h1>
      {data &&
        data.map((data) => {
          return (
            <p key={data.id}>
              {data.id} {data.title}
            </p>
          );
        })}
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <button onClick={prevHandler}>Prev</button>
        <button onClick={nextHandler}>Next</button>
      </div>
    </div>
  );
};

export default WithParams;
