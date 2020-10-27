import React from 'react';
import './Counter.scss';

import { CounterShape } from '../shapes/CounterShape';

export const Counter = ({ count, addOne, add100, increase }) => (
  <div className="counter">
    <h1 className="counter__header">
      {`Count: ${count}`}
    </h1>

    <div className="counter__buttons">
      <button
        type="button"
        onClick={addOne}
        className="counter__button"
      >
        Add 1
      </button>

      <button
        type="button"
        onClick={add100}
        className="counter__button"
      >
        Add 100
      </button>

      <button
        type="button"
        onClick={increase}
        className="counter__button"
      >
        Increase
      </button>
    </div>
  </div>
);

Counter.propTypes = CounterShape;
