import React from 'react';

type Props = {
  count: number,
  addOne: () => void,
  add100: () => void,
  increase: () => void,
};

export const Counter: React.FC<Props> = (props) => {
  const {
    count,
    addOne,
    add100,
    increase,
  } = props;

  return (
    <>
      <h1>
        Count:
        {count}
      </h1>
      <button type="button" onClick={addOne}>Add 1</button>
      <button type="button" onClick={add100}>Add 100</button>
      <button type="button" onClick={increase}>Increase</button>
    </>
  );
};
