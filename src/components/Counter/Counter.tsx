import React, { MouseEventHandler } from 'react';
import './Counter.scss';

type Props = {
  addOne: MouseEventHandler;
  add100: MouseEventHandler;
  increase: MouseEventHandler;
  reset: MouseEventHandler;
};

export const Counter: React.FC<Props> = ({
  addOne,
  add100,
  increase,
  reset,
}) => (
  <div className="App__buttons">
    <button
      type="button"
      className="button"
      onClick={addOne}
    >
      Add 1
    </button>

    <button
      type="button"
      className="button"
      onClick={add100}
    >
      Add 100
    </button>

    <button
      type="button"
      className="button"
      onClick={increase}
    >
      Increase
    </button>

    <button
      type="button"
      className="button"
      onClick={reset}
    >
      Reset
    </button>
  </div>
);
