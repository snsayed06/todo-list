import { useState, useEffect } from 'react';

// Custom hook to fetch data from an API
function useFetch(url) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();

    // Cleanup function
    return () => {
      // Optionally clean up any resources (e.g. abort fetch, clear timeouts/intervals)
    };
  }, [url]); // Only re-run the effect if url changes

  return { data, isLoading, error };
}

// Example usage of the custom hook
function MyComponent() {
  const { data, isLoading, error } = useFetch('https://api.example.com/data');

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      {data && (
        <ul>
          {data.map(item => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default MyComponent
