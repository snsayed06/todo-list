import { useState, useEffect } from "react";
import axios from "axios";
import Input from "./Input";

const Search = () => {
  const [data, setData] = useState([]);
  const [keyWord, setKeyWord] = useState('');
  const [searched, setSearched] = useState([])

  const fetchData = async () => {
    const res = await axios("https://jsonplaceholder.typicode.com/posts");
    setData(res.data);
  };

  const filterHandler = () => {
    const filteredData = data.filter((word) => word.title.includes(keyWord));
    setSearched(filteredData)
  };

  useEffect(() => {
    filterHandler();
  }, [keyWord]);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Input setKeyWord={setKeyWord} />
      {!keyWord.length && data.map((data) => <p key={data.id}>{data.title}</p>)}
      {searched && searched.length &&
        searched.map((word) => <p key={word.id}>{word.title}</p>)}
    </div>
  );
};

export default Search;
