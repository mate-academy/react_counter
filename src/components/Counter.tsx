import React from 'react';
import './Counter.scss';

type Props = {
  count: number;
  addOne: () => void;
  add100: () => void;
  increase: () => void;
};

export const Counter: React.FC<Props> = (props) => {
  const {
    count,
    addOne,
    add100,
    increase,
  } = props;

  return (
    <div className="counter">
      <h1 className="counter__title">
        Count:
        {count}
      </h1>
      <div className="counter__buttons">
        <button
          className="counter__button"
          type="button"
          onClick={addOne}
        >
          add one
        </button>
        <button
          className="counter__button"
          type="button"
          onClick={add100}
        >
          add 100
        </button>
        <button
          className="counter__button"
          type="button"
          onClick={increase}
        >
          increase
        </button>
      </div>
    </div>
  );
};
