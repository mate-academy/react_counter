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
  }: Props = props;

  return (
    <>
      <h1 className="title">
        {`Count: ${count}`}
      </h1>

      <button
        type="button"
        className="button"
        onClick={addOne}
      >
        Add One
      </button>

      <button
        type="button"
        className="button"
        onClick={add100}
      >
        Add One hundred
      </button>

      <button
        type="button"
        className="button"
        onClick={increase}
      >
        Button with secret
      </button>
    </>
  );
};
