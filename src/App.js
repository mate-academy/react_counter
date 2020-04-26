import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [count, SetCount] = useState(0);

  return (
    <div className="ui tag labels App">
      <button
        type="button"
        onClick={() => SetCount(count + 1)}
        className="ui big right labeled icon button"
      >
        <i className="up arrow icon" />
        Increment
      </button>
      <h1 className="ui massive black label">
        Count:
        {'  '}
        {count}
      </h1>
    </div>
  );
};

export default App;
