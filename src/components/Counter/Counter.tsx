import React from 'react';

import './Counter.scss';

interface Props {
  counter: number;
  addOne: () => void;
  add100: () => void;
  increase: () => void;
}

export const Counter: React.FC<Props> = ({
  counter,
  addOne,
  add100,
  increase,
}) => (
  <div className="counter">
    <h1>{`Count: ${counter}`}</h1>
    <button
      className="counter__button"
      type="button"
      onClick={addOne}
    >
      Add 1
    </button>
    <button
      className="counter__button"
      type="button"
      onClick={add100}
    >
      Add 100
    </button>
    <button
      className="counter__button"
      type="button"
      onClick={increase}
    >
      Increase
    </button>
  </div>
);
