import React, { useState, useEffect } from 'react';

// Custom hook for throttling
function useThrottle(value, delay) {
  const [throttledValue, setThrottledValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setThrottledValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return throttledValue;
}

// Component using the throttle hook
function Debounce_Throttle() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  // Throttle the resize event with 200ms delay
  const throttledWindowSize = useThrottle(windowSize, 1000);

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Only add and remove listener on mount and unmount

  return (
    <div>
      <h1>Window Size</h1>
      <p>Width: {throttledWindowSize.width}px</p>
      <p>Height: {throttledWindowSize.height}px</p>
    </div>
  );
}

export default Debounce_Throttle;
