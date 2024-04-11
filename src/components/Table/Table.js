import React, { useEffect, useState } from "react";
import axios from "axios";

const Table = () => {
  const [data, setData] = useState([]);
  const [selection, setSelection] = useState("");

  const fetchData = async () => {
    try {
      const response = await axios.get("https://dummyjson.com/products");
      const data = await response.data;
      setData([...data.products]);
    } catch (error) {
      console.log("error", error);
    }
  };

  const tableData = () => {
    let filteredArray = [];
    if (selection === "id") {
      filteredArray = data.sort((a, b) => b.id - a.id);
      return filteredArray;
    } else if (selection === "price") {
      filteredArray = data.sort((a, b) => a.price - b.price);
      return filteredArray;
    } else if (selection === "rating") {
      filteredArray = data.sort((a, b) => b.rating - a.rating);
      return filteredArray;
    } else if (selection === "title") {
      filteredArray = data.sort((a, b) => b.title.localeCompare(a.title));
      return filteredArray;
    } else if (selection === "no") {
      filteredArray = data;
      return filteredArray;
    }
    return data;
  };

  useEffect(() => {
    fetchData();
  }, []);

  const selectHandler = (e) => {
    console.log("value", e.target.value);
    setSelection(e.target.value);
  };

  return (
    <div>
      <div>
        <label for='select'>Chose options:</label>
        <select id='select' onChange={(e) => selectHandler(e)}>
          <option value=''>Choose among the options</option>
          <option value='id'>ID</option>
          <option value='price'>Price</option>
          <option value='rating'>Rating</option>
          <option value='title'>Title</option>
        </select>
      </div>
      <br />
      <br />
      <br />
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Price</th>
            <th>Rating</th>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>
          {(selection ? tableData() : data).map((product, index) => (
            <tr key={index}>
              <td>{product.id}</td>
              <td>{product.price}</td>
              <td>{product.rating}</td>
              <td>{product.title}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
