import { useState, useEffect } from "react";
import axios from "axios";

const LazyLoadPosts = () => {
  const [posts, setPosts] = useState([]);
  const [ids, setIds] = useState([]);
  const [index, setIndex] = useState({ start: 0, end: 5 });

  const postNumbers = 5;
  const URL = "https://hacker-news.firebaseio.com/v0/jobstories.json";

  const fetchInitialData = async () => {
    const res = await axios(URL);
    setIds([...res.data]);
    console.log("ids", res);
  };

  useEffect(() => {
    fetchInitialData();
  }, []);

  const fetchMoreIds = () => {
    console.log("start", index);
    setIndex({
      ...index,
      start: index.start + postNumbers,
      end: index.end + postNumbers,
    });
    console.log("end", index);
  };

  return (
    <>
      <div>
        {ids.slice(index.start, index.end).map((id, index) => (
          <p key={index}>{id}</p>
        ))}
      </div>
      <button onClick={fetchMoreIds}>Load More</button>
    </>
  );
};

export default LazyLoadPosts;

