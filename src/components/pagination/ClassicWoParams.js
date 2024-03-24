import axios from "axios";
import { useState, useEffect } from "react";

const ClassicWoParams = () => {
  const [data, setData] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10;

  const fetchData = async () => {
    const res = await axios("https://jsonplaceholder.typicode.com/posts");
    setData(res.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const prevHandler = () => {
    if (currentPage !== 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const nextHandler = () => {
    if (currentPage < data.length / postsPerPage) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  return (
    <div>
      <h1>Responses from Api and manually creating Pagination</h1>
      {data &&
        data
          .slice(currentPage * postsPerPage - 10, currentPage * postsPerPage)
          .map((data) => {
            return (
              <p key={data.id}>
                {data.id} {data.title}
              </p>
            );
          })}
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <button onClick={prevHandler}>Prev</button>
        {data &&
          [...Array(data.length / postsPerPage)].map((_, index) => {
            return (
              <button onClick={() => setCurrentPage(index + 1)}>
                {index + 1}
              </button>
            );
          })}
        <button onClick={nextHandler}>Next</button>
      </div>
    </div>
  );
};

export default ClassicWoParams;
