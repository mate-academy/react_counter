import React, { useState } from 'react';
import './App.scss';

export const App: React.FC = () => {
  const [count, setCount] = useState(0);

  const addOne = () => {
    setCount(state => state + 1);
  };

  const add100 = () => {
    setCount(state => state + 100);
  };

  // DON'T change the code below
  const increase = () => {
    addOne();

    if (count % 5 === 0) {
      add100();
    }
  };

  return (
    <div className="App">
      <h1 className="App__title">
        {`Count: ${count}`}
      </h1>

      <button type="button" className="App__add-one" onClick={addOne}>
        Add 1
      </button>

      <button type="button" className="App__add-100" onClick={add100}>
        Add 100
      </button>

      <button type="button" className="App__increase" onClick={increase}>
        Increase
      </button>
    </div>
  );
};
