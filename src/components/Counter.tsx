import React from 'react';

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
      <h1>{`Count: ${count}`}</h1>

      <button
        type="button"
        className="button buttonOne"
        onClick={addOne}
      >
        Add One
      </button>

      <button
        type="button"
        className="button buttonOne"
        onClick={add100}
      >
        Add One hundred
      </button>

      <button
        type="button"
        className="button buttonOne"
        onClick={increase}
      >
        Button with secret
      </button>
    </>
  );
};
