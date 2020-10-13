import React from 'react';
import './Counter.scss';

import { CounterTypes } from './CounterTypes';

export const Counter = ({ count, addOne, add100, increase }) => (
  <div>
    <h1>
      Count:
      {count}
    </h1>
    <button
      type="button"
      onClick={() => addOne()}
    >
      add 1
    </button>
    <button
      type="button"
      onClick={() => add100()}
    >
      add 100
    </button>
    <button
      type="button"
      onClick={() => increase()}
    >
      increase
    </button>
  </div>
);

Counter.propTypes = CounterTypes;
