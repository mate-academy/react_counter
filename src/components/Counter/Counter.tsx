import React from 'react';

interface Props {
  count: number;
  addOne: () => void;
  add100:() => void;
  increase: () => void;
}

export const Counter: React.FC<Props> = ({
  count,
  addOne,
  add100,
  increase,
}) => (
  <div className="App">
    <h1>
      <b>Count: </b>
      {count}
    </h1>
    <div className="App__button">
      <button
        type="button"
        className="btn btn-dark"
        onClick={addOne}
      >
        add 1
      </button>
      <button
        type="button"
        className="btn btn-dark"
        onClick={add100}
      >
        add 100
      </button>
      <button
        type="button"
        className="btn btn-dark"
        onClick={increase}
      >
        increase
      </button>
    </div>
  </div>
);
