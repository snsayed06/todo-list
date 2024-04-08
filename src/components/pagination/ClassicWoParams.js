import React, { useState, useEffect } from "react";
import axios from "axios";

const ClassicWoParams = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 7;
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <h1>Responses from API with Pagination</h1>
      {currentPosts.map((post) => (
        <p key={post.id}>
          {post.id} {post.title}
        </p>
      ))}
      <div>
        <button
          onClick={() => handlePageClick(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Prev
        </button>
        {[...Array(Math.ceil(data.length / postsPerPage))].map((_, index) => (
          <button key={index + 1} onClick={() => handlePageClick(index + 1)}>
            {index + 1}
          </button>
        ))}
        <button
          onClick={() => handlePageClick(currentPage + 1)}
          disabled={currentPage === Math.ceil(data.length / postsPerPage)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ClassicWoParams;
