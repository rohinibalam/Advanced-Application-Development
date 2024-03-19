import { useState, useEffect } from 'react';

const Counter = ({ finalCount }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (count < finalCount) {
        setCount(count + 1);
      } else {
        clearInterval(interval);
      }
    }, 10); 
    return () => clearInterval(interval);
  }, [count, finalCount]);

  return (
    <span className="counter">
      {count}
      
    </span>
  );
};

export default Counter;
