import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>
        value is
        {count}
      </h1>
      <button className='btnCount' onClick={() => setCount(count + 1)}>
        count++
      </button>
    </>
  );
};

export default App;
