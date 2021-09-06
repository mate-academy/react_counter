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
  } = props;

  return (
    <div className="col align-self-center">
      <h1 className="text-center">
        {`Count: ${count}`}
      </h1>
      <div className="d-flex justify-content-between">
        <button
          type="button"
          className="btn btn-outline-secondary"
          onClick={addOne}
        >
          Add 1
        </button>
        <button
          type="button"
          className="btn btn-outline-secondary"
          onClick={add100}
        >
          Add 100
        </button>
        <button
          type="button"
          className="btn btn-outline-secondary"
          onClick={increase}
        >
          Add 1 or 100
        </button>
      </div>
    </div>
  );
};
