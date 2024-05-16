import React, { useEffect, useState } from 'react';

import ReactDOM from 'react-dom/client';

const App = () => {
  const [count, setCount] = useState(20);

  const fetchData = async () => {
    const res = await fetch(`/api/count`);
    const data = await res.json();
    if (data) {
      setCount(data.count);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return <h1>Hello World! Count was {count}</h1>;
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App />);
