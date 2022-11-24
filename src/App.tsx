import './App.scss';
import { useState } from 'react';

export const App: React.FC = () => {
  const [counter, setCount] = useState(0);

  return (
    <div className="App">
      <h1 className="App__title">
        {`Count: ${counter}`}
      </h1>

      <button
        type="button"
        className="App__add-one"
        onClick={() => setCount(current => current + 1)}
      >
        Add 1
      </button>

      <button
        type="button"
        className="App__add-100"
        onClick={() => setCount(current => current + 100)}
      >
        Add 100
      </button>

      <button
        type="button"
        className="App__increase"
        onClick={counter % 5 === 0
          ? () => setCount(current => current + 100)
          : () => setCount(current => current + 1)}
      >
        Increase
      </button>
    </div>
  );
};
