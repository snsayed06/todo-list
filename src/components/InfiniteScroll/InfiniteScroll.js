// Using height of window
// import React, { useState, useEffect } from 'react';

// const InfiniteScroll = () => {
//   const [items, setItems] = useState([]);
//   const [page, setPage] = useState(1);
//   const [loading, setLoading] = useState(false);
//   const [hasMore, setHasMore] = useState(true);

//   // Simulated data fetching function
//   const fetchData = async () => {
//     setLoading(true);
//     try {
//       // Simulate fetching data from an API
//       const response = await fetch(`https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=10`);
//       const newData = await response.json();
//       setItems((prevItems) => [...prevItems, ...newData]);
//       setPage(page + 1);
//       setLoading(false);
//       setHasMore(newData.length > 0); // Set hasMore based on whether new data was fetched
//     } catch (error) {
//       console.error('Error fetching data:', error);
//       setLoading(false);
//     }
//   };

//   // Load more data when scrolling to the bottom of the page
//   const handleScroll = () => {
//     if (!loading && hasMore) {
//       if (
//         window.innerHeight + document.documentElement.scrollTop ===
//         document.documentElement.offsetHeight
//       ) {
//         console.log('inner', window.innerHeight, document.documentElement.scrollTop, document.documentElement.offsetHeight)
//         fetchData();
//       }
//     }
//   };

//   // Add event listener when the component mounts
//   useEffect(() => {
//     fetchData(); // Initial data load

//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []); // Only run once on component mount

//   return (
//     <div>
//       <h1>Infinite Scroll Example</h1>
//       <ul>
//         {items.map((item) => (
//           <li key={item.id}>
//             <img src={item.thumbnailUrl} alt={item.title} />
//             <p>{item.title}</p>
//           </li>
//         ))}
//         {loading && <li>Loading...</li>}
//       </ul>
//       {!loading && !hasMore && <p>No more items to load.</p>}
//     </div>
//   );
// };

// export default InfiniteScroll;

// Using intersection observer
import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

const InfiniteScroll = () => {
  const [products, setProducts] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(0);
  const elementRef = useRef(null);

  async function fetchMoreItems() {
    const response = await axios.get(
      `https://dummyjson.com/products?limit=10&skip=${page * 10}`
    );
    const data = await response.data;
    if (data.length === 0) {
      setHasMore(false);
    } else {
      setProducts((prev) => [...prev, ...data.products]);
      setPage((prev) => prev + 1);
    }
  }

  function onIntersection(entries) {
    const firstEntry = entries[0];
    console.log('CB', firstEntry)
    if (firstEntry.isIntersecting && hasMore) {
      fetchMoreItems();
    }
  }

  useEffect(() => {
    const observer = new IntersectionObserver(onIntersection);
    console.log('useEffect-1')
    if (observer && elementRef.current) {
      console.log('useEffect-2')
      observer.observe(elementRef.current);
    }

    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, [products]);

  return (
    <>
      {products.map((item) => {
        return (
          <div key={item.id}>
            <img alt='product' src={item.thumbnail} />
            <p>{item.body}</p>
            <p>{item.description}</p>
            <p>${item.price}</p>
          </div>
        );
      })}
      {hasMore && (
        <div style={{ textAlign: "center" }} ref={elementRef}>
          load more items...
        </div>
      )}
    </>
  );
};

export default InfiniteScroll;
